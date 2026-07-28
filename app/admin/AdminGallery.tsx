"use client";
import { useRef, useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Trash2, GripVertical, ImagePlus } from "lucide-react";

interface ImageItem {
  key: string;
  url: string;
}

function SortableImage({
  image,
  onDelete,
  disabled,
}: {
  image: ImageItem;
  onDelete: (key: string) => void;
  disabled: boolean;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: image.key });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative group rounded-lg overflow-hidden bg-white shadow-sm border border-gray-light aspect-square"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.url}
        alt=""
        className="w-full h-full object-cover pointer-events-none"
      />
      <button
        type="button"
        {...attributes}
        {...listeners}
        className="absolute top-2 left-2 bg-black/50 text-white rounded-md p-1.5 cursor-grab active:cursor-grabbing touch-none"
        aria-label="Przesuń"
      >
        <GripVertical size={18} />
      </button>
      <button
        type="button"
        onClick={() => onDelete(image.key)}
        disabled={disabled}
        className="absolute top-2 right-2 bg-red-600/90 text-white rounded-md p-1.5 hover:bg-red-700 disabled:opacity-50"
        aria-label="Usuń zdjęcie"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}

export default function AdminGallery({
  initialImages,
}: {
  initialImages: ImageItem[];
}) {
  const [images, setImages] = useState<ImageItem[]>(initialImages);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = images.findIndex((img) => img.key === active.id);
    const newIndex = images.findIndex((img) => img.key === over.id);
    const reordered = arrayMove(images, oldIndex, newIndex);
    const previous = images;
    setImages(reordered);

    setError("");
    const res = await fetch("/api/admin/images/reorder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ order: reordered.map((img) => img.key) }),
    });

    if (!res.ok) {
      setImages(previous);
      setError("Nie udało się zapisać nowej kolejności");
    }
  }

  async function handleDelete(key: string) {
    if (!window.confirm("Usunąć to zdjęcie?")) return;

    const previous = images;
    setImages((imgs) => imgs.filter((img) => img.key !== key));
    setBusy(true);
    setError("");

    const res = await fetch("/api/admin/images/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key }),
    });

    setBusy(false);

    if (!res.ok) {
      setImages(previous);
      setError("Nie udało się usunąć zdjęcia");
    }
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const formData = new FormData();
    for (const file of Array.from(files)) formData.append("files", file);

    setBusy(true);
    setError("");

    const res = await fetch("/api/admin/images", {
      method: "POST",
      body: formData,
    });

    setBusy(false);
    if (fileInputRef.current) fileInputRef.current.value = "";

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Nie udało się dodać zdjęć");
      return;
    }

    const data = await res.json();
    setImages(data.images as ImageItem[]);
  }

  return (
    <div>
      <div className="mb-6 flex items-center gap-4">
        <label className="flex items-center gap-2 bg-blue text-light rounded-lg px-4 py-2 cursor-pointer hover:opacity-90 transition-opacity w-fit">
          <ImagePlus size={20} />
          <span>Dodaj zdjęcia</span>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleUpload}
            disabled={busy}
            className="hidden"
          />
        </label>
        {busy && <span className="text-gray text-sm!">Przetwarzanie...</span>}
      </div>

      {error && <p className="text-red-600 text-sm! mb-4">{error}</p>}

      {images.length === 0 ? (
        <p className="text-gray">Brak zdjęć w galerii.</p>
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={images.map((img) => img.key)}
            strategy={rectSortingStrategy}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {images.map((image) => (
                <SortableImage
                  key={image.key}
                  image={image}
                  onDelete={handleDelete}
                  disabled={busy}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}
    </div>
  );
}
