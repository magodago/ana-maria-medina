/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";
const isGitHubPages = process.env.GITHUB_PAGES === "true";
// En desarrollo nunca usar basePath para que localhost funcione siempre
const basePath = !isDev && isGitHubPages ? "/ana-maria-medina-model" : "";
const assetPrefix = !isDev && isGitHubPages ? "/ana-maria-medina-model/" : "";

const nextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: assetPrefix || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
