import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
    S3_BUCKET_REGION: process.env.S3_BUCKET_REGION,
    AUTH_SECRET: process.env.AUTH_SECRET,
    ADMIN_PASSWORD_HASH: process.env.ADMIN_PASSWORD_HASH,
  },
};

export default nextConfig;
