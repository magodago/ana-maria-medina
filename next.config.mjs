/** @type {import('next').NextConfig} */
// basePath solo cuando GITHUB_PAGES=true (script de deploy). Local no lo usa.
const forGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  ...(forGitHubPages && {
    basePath: "/ana-maria-medina",
    assetPrefix: "/ana-maria-medina/",
  }),
  images: { unoptimized: true },
};

export default nextConfig;
