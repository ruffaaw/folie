import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
  DeleteObjectCommand,
  NoSuchKey,
} from "@aws-sdk/client-s3";

const MANIFEST_KEY = "data/manifest.json";
const GALLERY_PREFIX = "gallery/";

function getBucketName(): string {
  const bucket = process.env.S3_BUCKET_NAME;
  if (!bucket) throw new Error("Brak zmiennej środowiskowej S3_BUCKET_NAME");
  return bucket;
}

function getRegion(): string {
  const region = process.env.S3_BUCKET_REGION;
  if (!region) throw new Error("Brak zmiennej środowiskowej S3_BUCKET_REGION");
  return region;
}

let client: S3Client | null = null;
function getClient(): S3Client {
  if (!client) client = new S3Client({ region: getRegion() });
  return client;
}

async function streamToString(body: unknown): Promise<string> {
  return await (
    body as { transformToString: () => Promise<string> }
  ).transformToString();
}

export async function getManifest(): Promise<string[]> {
  try {
    const result = await getClient().send(
      new GetObjectCommand({ Bucket: getBucketName(), Key: MANIFEST_KEY })
    );
    const text = await streamToString(result.Body);
    const parsed = JSON.parse(text);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if (
      error instanceof NoSuchKey ||
      (error as { name?: string }).name === "NoSuchKey"
    ) {
      return [];
    }
    throw error;
  }
}

export async function saveManifest(keys: string[]): Promise<void> {
  await getClient().send(
    new PutObjectCommand({
      Bucket: getBucketName(),
      Key: MANIFEST_KEY,
      Body: JSON.stringify(keys),
      ContentType: "application/json",
    })
  );
}

export async function uploadImage(
  fileName: string,
  contentType: string,
  body: Uint8Array
): Promise<string> {
  const safeName = fileName.replace(/[^a-zA-Z0-9._-]/g, "_");
  const key = `${GALLERY_PREFIX}${Date.now()}-${safeName}`;
  await getClient().send(
    new PutObjectCommand({
      Bucket: getBucketName(),
      Key: key,
      Body: body,
      ContentType: contentType,
    })
  );
  return key;
}

export async function deleteImage(key: string): Promise<void> {
  if (!key.startsWith(GALLERY_PREFIX)) {
    throw new Error("Nieprawidłowy klucz obrazu");
  }
  await getClient().send(
    new DeleteObjectCommand({ Bucket: getBucketName(), Key: key })
  );
}

export function publicUrlFor(key: string): string {
  return `https://${getBucketName()}.s3.${getRegion()}.amazonaws.com/${key}`;
}

export { GALLERY_PREFIX };
