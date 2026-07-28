const MAX_DIMENSION = 2000;
const WEBP_QUALITY = 0.82;

// Kompresujemy w przeglądarce przed wysłaniem - dzięki temu duże oryginały
// (np. 10 MB zdjęcie z telefonu) nigdy nie trafiają przez sieć w pełnym
// rozmiarze, co dodatkowo unika limitu payloadu Lambda (patrz błąd 413 przy
// zbiorczym uploadzie). SVG i GIF pomijamy - canvas psuje wektory i animacje.
export async function compressImageToWebp(file: File): Promise<File> {
  if (
    file.type === "image/webp" ||
    file.type === "image/svg+xml" ||
    file.type === "image/gif"
  ) {
    return file;
  }

  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, MAX_DIMENSION / Math.max(bitmap.width, bitmap.height));
    const width = Math.round(bitmap.width * scale);
    const height = Math.round(bitmap.height * scale);

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return file;
    ctx.drawImage(bitmap, 0, 0, width, height);
    bitmap.close();

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/webp", WEBP_QUALITY)
    );
    if (!blob || blob.size >= file.size) return file;

    const newName = file.name.replace(/\.[^.]+$/, "") + ".webp";
    return new File([blob], newName, { type: "image/webp" });
  } catch {
    return file;
  }
}
