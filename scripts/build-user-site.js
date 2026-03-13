/**
 * Build único: mismo que local. Sin basePath, rutas en raíz.
 * Para publicar en https://magodago.github.io
 */
const { spawnSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const root = path.join(__dirname, "..");
try {
  fs.rmSync(path.join(root, ".next"), { recursive: true });
} catch (e) {}

const result = spawnSync("npx next build", {
  stdio: "inherit",
  env: process.env,
  cwd: root,
  shell: true,
});

process.exit(result.status ?? 1);
