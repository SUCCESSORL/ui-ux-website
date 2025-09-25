import path from "node:path";

const LOADER = path.resolve(process.cwd(), "src/visual-edits/component-tagger-loader.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },
  outputFileTracingRoot: path.resolve(process.cwd(), "../../"),
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER],
      },
    },
  },
};

export default nextConfig;