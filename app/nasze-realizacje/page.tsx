import { getManifest, publicUrlFor } from "@/lib/s3";
import Gallery from "./Gallery";

export const dynamic = "force-dynamic";

export default async function Page() {
  const manifest = await getManifest();
  const images = manifest.map((key) => publicUrlFor(key));

  return <Gallery images={images} />;
}
