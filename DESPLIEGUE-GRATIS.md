# Dónde desplegar la web gratis (y que funcione)

El proyecto ya está en **un solo build**: lo que ves en local es lo que se publica. Sin basePath ni rutas raras.

Primero genera la carpeta para subir:

```bash
npm run build
```

Se crea la carpeta **`out/`** con la web estática. Esa carpeta es la que subes a cualquiera de estos sitios.

---

## 1. Vercel (recomendado, mismo creador que Next.js)

1. Entra en **https://vercel.com** e inicia sesión con **GitHub**.
2. Clic en **Add New…** → **Project**.
3. **Import** el repo **ana-maria-medina** (o el que uses). Si no está, conéctalo desde GitHub.
4. Vercel detecta Next.js solo. No cambies nada:
   - **Build Command:** `npm run build` (o lo que ponga por defecto).
   - **Output Directory:** `out` (importante: es static export).
5. **Deploy**. En 1–2 minutos tendrás una URL tipo:
   - **https://ana-maria-medina.vercel.app**  
   (o el nombre que te asigne).

La web se verá igual que en local (imagen de portada, colores, textos). Cada vez que hagas push a `main`, Vercel vuelve a desplegar.

---

## 2. Netlify

1. **https://netlify.com** → inicia sesión con GitHub.
2. **Add new site** → **Import an existing project** → elige el repo.
3. Configuración:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
4. **Deploy**. URL tipo: **https://nombre-random.netlify.app** (puedes cambiarla en Site settings).

---

## 3. Cloudflare Pages

1. **https://pages.cloudflare.com** → **Create a project** → **Connect to Git**.
2. Elige el repo (ana-maria-medina o el que sea).
3. Configuración:
   - **Framework preset:** None (o Next.js si lo ofrece).
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. **Save and Deploy**. URL tipo: **https://ana-maria-medina.pages.dev**.

---

## Resumen

| Sitio        | URL típica                    | Dificultad |
|-------------|--------------------------------|------------|
| **Vercel**  | proyecto.vercel.app           | Muy fácil  |
| **Netlify** | nombre.netlify.app            | Muy fácil  |
| **Cloudflare** | proyecto.pages.dev         | Fácil      |

Los tres son gratis y sirven la web en la **raíz** de la URL, sin rutas raras. Mismo resultado que en local.

Si quieres, empieza por **Vercel**: conectas el repo, pones **Output Directory: out** y desplegar.
