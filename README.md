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

## Deployment

- **Vercel**: Connect this repo; Vercel will detect Next.js. Use build command `next build` and output directory `out` for static export.
- **GitHub Pages**: Build with `npm run build`, then upload the contents of `out/` to a `gh-pages` branch or use a GitHub Action.

## Contact form

The booking form currently shows a thank-you message on submit. To receive real leads, connect it to [Formspree](https://formspree.io), [Getform](https://getform.io), or your own API and set the form `action` in `src/components/Contact.tsx`.

## Contact

Professional inquiries: **contact@anamariamedina.com**
