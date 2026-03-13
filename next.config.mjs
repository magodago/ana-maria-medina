/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/ana-maria-medina-model" : "";
const assetPrefix = isGitHubPages ? "/ana-maria-medina-model/" : "";

const nextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: assetPrefix || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
