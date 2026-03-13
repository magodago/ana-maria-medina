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

## Deployment

- **Vercel**: Connect this repo; Vercel will detect Next.js and build with `next build`. For static export, the build output is in `out/`.
- **GitHub Pages**: Build with `npm run build`, then upload the contents of `out/` to a `gh-pages` branch or use a GitHub Action.

## Contact

Professional inquiries: **contact@anamariamedina.com**
