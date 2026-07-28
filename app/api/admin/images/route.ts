import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getManifest, saveManifest, uploadImage, publicUrlFor } from "@/lib/s3";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

function toImageItems(keys: string[]) {
  return keys.map((key) => ({ key, url: publicUrlFor(key) }));
}

export async function GET() {
  const manifest = await getManifest();
  return NextResponse.json({ images: toImageItems(manifest) });
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const files = formData.getAll("files").filter((f): f is File => f instanceof File);

  if (files.length === 0) {
    return NextResponse.json({ error: "Brak plików" }, { status: 400 });
  }

  const newKeys: string[] = [];
  for (const file of files) {
    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: `Plik ${file.name} nie jest obrazem` },
        { status: 400 }
      );
    }
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: `Plik ${file.name} jest za duży (limit 5 MB)` },
        { status: 400 }
      );
    }
    const bytes = new Uint8Array(await file.arrayBuffer());
    const key = await uploadImage(file.name, file.type, bytes);
    newKeys.push(key);
  }

  const manifest = await getManifest();
  const updated = [...manifest, ...newKeys];
  await saveManifest(updated);
  revalidatePath("/nasze-realizacje");

  return NextResponse.json({ images: toImageItems(updated) });
}
