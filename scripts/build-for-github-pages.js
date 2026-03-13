/**
 * Build SOLO para GitHub Pages (magodago.github.io/ana-maria-medina/).
 * Las variables se fijan aquí para que en Windows no falle el paso de env.
 */
const { spawnSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const root = path.join(__dirname, "..");

// Limpiar caché para que no quede nada de un build anterior
try {
  fs.rmSync(path.join(root, ".next"), { recursive: true });
} catch (e) {}

const env = {
  ...process.env,
  GITHUB_PAGES: "true",
  NEXT_PUBLIC_BASE_PATH: "/ana-maria-medina",
};

const r = spawnSync("npx", ["next", "build"], {
  stdio: "inherit",
  env,
  cwd: root,
  shell: true,
});

process.exit(r.status !== null ? r.status : 1);
