# Enlazar el repo a Vercel (en el orden correcto)

El código que tienes **ahora en tu PC** (sin basePath, una sola build) es el bueno. GitHub tiene una versión antigua. Hay que **subir primero** esa versión al repo y **después** conectar el repo a Vercel.

---

## Paso 1: Subir el código actual a GitHub

En la carpeta del proyecto (PowerShell):

```powershell
cd "C:\Users\dorti\Desktop\pagina Ana\ana-maria-medina-model"

git add -A
git status
git commit -m "Build único para raíz, listo para Vercel"
git push origin main
```

Así el repo **ana-maria-medina** (o el que uses) en GitHub queda con el mismo código que tienes en local y que ya funciona.

---

## Paso 2: Conectar ese repo a Vercel

1. Entra en **https://vercel.com** e inicia sesión con **GitHub**.
2. **Add New…** → **Project**.
3. En la lista, elige el repo **ana-maria-medina** (o el nombre que tenga).
4. En la configuración del proyecto:
   - **Framework Preset:** Next.js (o lo que detecte).
   - **Build Command:** `npm run build`
   - **Output Directory:** `out`  ← importante para static export.
5. **Deploy**.

Vercel clonará el repo (ya con el código bueno), hará `npm run build`, usará la carpeta `out` y te dará una URL. La web se verá igual que en local.

---

Resumen: **primero** `git add` + `commit` + `push` para que GitHub tenga el código correcto; **después** enlazas ese repo en Vercel.
