# Ana Maria Medina — Model Portfolio

Professional, elegant website for **Ana Maria Medina**, international model from Medellín, Colombia.

## Tech Stack

- **Next.js 14** (App Router, static export)
- **React 18**
- **TailwindCSS**
- **Framer Motion** (animations)
- SEO optimized, mobile-first, responsive

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (static export)

```bash
npm run build
```

Output is in the `out/` folder. Deploy `out/` to GitHub Pages, Vercel, or any static host.

## Replacing placeholder images

Edit **`src/lib/images.ts`**:

- **Hero**: change `hero` to your main image URL or path (e.g. `/images/hero.jpg`).
- **About**: change `about` to your about section image.
- **Gallery**: replace the `gallery` array with your portfolio image URLs or paths.

For local images, place files in `public/images/` and use paths like `/images/hero.jpg`.

## Push to GitHub

The initial commit is done. To publish:

1. Create a new repository on [GitHub](https://github.com/new) named **ana-maria-medina-model** (leave it empty, no README).
2. If your GitHub username is **magodago**, the remote is already set. Run:

```bash
git push -u origin main
```

Otherwise add your remote and push:

```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/ana-maria-medina-model.git
git push -u origin main
```

## GitHub Pages (ver la web en vivo)

**Opción recomendada (desde tu PC):**

1. Instala dependencias (si no lo has hecho): `npm install`
2. Publica el sitio en GitHub Pages:
   ```bash
   npm run deploy:pages
   ```
   Esto construye la web y la sube a la rama `gh-pages`.

3. En GitHub: **Settings** → **Pages**.
4. En **Build and deployment** → **Source** elige **Deploy from a branch**.
5. **Branch**: `gh-pages`, **Folder**: `/ (root)`. Guarda.
6. En 1–2 minutos la web estará en: **https://magodago.github.io/ana-maria-medina-model/**  
   (cambia `magodago` por tu usuario si es otro).

Cada vez que quieras actualizar la web, vuelve a ejecutar `npm run deploy:pages`.

## Deployment (otros)

- **Vercel**: Conectar el repo; usa `next build` y carpeta `out` para static export.

## Contact form

The booking form currently shows a thank-you message on submit. To receive real leads, connect it to [Formspree](https://formspree.io), [Getform](https://getform.io), or your own API and set the form `action` in `src/components/Contact.tsx`.

## Contact

Professional inquiries: **contact@anamariamedina.com**
