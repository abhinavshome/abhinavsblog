import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const basePath = process.env.BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // assetPrefix: basePath || undefined,
  // basePath,
  basePath: '',
  assetPrefix: '',
  output: "export",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  turbopack: {
    root: rootDir
  }
};

export default nextConfig;
