/**
 * Build para https://magodago.github.io/ana-maria-medina/
 * Fija basePath y rutas de imágenes en el bundle.
 */
const { spawnSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const root = path.join(__dirname, "..");
try {
  fs.rmSync(path.join(root, ".next"), { recursive: true });
} catch (e) {}

const env = {
  ...process.env,
  GITHUB_PAGES: "true",
  NEXT_PUBLIC_BASE_PATH: "/ana-maria-medina",
};

const result = spawnSync("npx next build", {
  stdio: "inherit",
  env,
  cwd: root,
  shell: true,
});

process.exit(result.status ?? 1);
