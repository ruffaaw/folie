import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getManifest, saveManifest, deleteImage, publicUrlFor } from "@/lib/s3";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const { key } = await request.json();
  if (typeof key !== "string") {
    return NextResponse.json({ error: "Brak klucza" }, { status: 400 });
  }

  const manifest = await getManifest();
  if (!manifest.includes(key)) {
    return NextResponse.json({ error: "Nie znaleziono obrazu" }, { status: 404 });
  }

  await deleteImage(key);
  const updated = manifest.filter((k) => k !== key);
  await saveManifest(updated);
  revalidatePath("/nasze-realizacje");

  return NextResponse.json({
    images: updated.map((k) => ({ key: k, url: publicUrlFor(k) })),
  });
}
