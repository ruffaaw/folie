import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getManifest, saveManifest } from "@/lib/s3";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const { order } = await request.json();
  if (!Array.isArray(order) || !order.every((k) => typeof k === "string")) {
    return NextResponse.json({ error: "Nieprawidłowa kolejność" }, { status: 400 });
  }

  const manifest = await getManifest();
  const sameSet =
    order.length === manifest.length &&
    manifest.every((k) => order.includes(k));

  if (!sameSet) {
    return NextResponse.json(
      { error: "Kolejność nie zgadza się z aktualną listą zdjęć" },
      { status: 409 }
    );
  }

  await saveManifest(order);
  revalidatePath("/nasze-realizacje");

  return NextResponse.json({ images: order });
}
