import { getManifest, publicUrlFor } from "@/lib/s3";
import AdminGallery from "./AdminGallery";
import LogoutButton from "./LogoutButton";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const manifest = await getManifest();
  const images = manifest.map((key) => ({ key, url: publicUrlFor(key) }));

  return (
    <div className="min-h-screen bg-gray-light px-4 sm:px-8 md:px-16 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl! sm:text-3xl! font-semibold">
          Nasze Realizacje &ndash; zarządzanie zdjęciami
        </h1>
        <LogoutButton />
      </div>
      <AdminGallery initialImages={images} />
    </div>
  );
}
