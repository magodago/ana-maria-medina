/**
 * Build para /ana-maria-medina/ y subida al repo ana-maria-medina (gh-pages).
 * URL: https://magodago.github.io/ana-maria-medina/
 */
const { spawnSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const root = path.join(__dirname, "..");
const repo = process.env.GITHUB_PAGES_REPO || "https://github.com/magodago/ana-maria-medina.git";

console.log("1/4 Build para GitHub Pages (/ana-maria-medina/)...");
let r = spawnSync("node", ["scripts/build-for-github-pages.js"], { stdio: "inherit", cwd: root });
if (r.status !== 0) process.exit(r.status);

console.log("2/4 .nojekyll...");
fs.writeFileSync(path.join(root, "out", ".nojekyll"), "");

console.log("3/4 Subiendo a gh-pages...");
r = spawnSync("npx", ["gh-pages", "-d", "out", "-r", repo], { stdio: "inherit", cwd: root, shell: true });
if (r.status !== 0) {
  console.error("\nError al subir. Comprueba que el repo existe: magodago/ana-maria-medina");
  process.exit(r.status);
}

try { fs.rmSync(path.join(root, ".next"), { recursive: true }); } catch (e) {}
console.log("4/4 Listo. Web: https://magodago.github.io/ana-maria-medina/");
process.exit(0);
