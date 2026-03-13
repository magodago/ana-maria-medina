/**
 * Rutas de imágenes. En local base="". Para GitHub Pages (deploy) base="/ana-maria-medina".
 */
const base = (typeof process !== "undefined" && process.env.NEXT_PUBLIC_BASE_PATH) || "";

export const images = {
  hero: `${base}/images/hero.png`,
  about: `${base}/images/gallery3.png`,
  gallery: [
    `${base}/images/gallery1.png`,
    `${base}/images/gallery2.png`,
    `${base}/images/gallery3.png`,
    `${base}/images/gallery4.png`,
    `${base}/images/gallery5.png`,
    `${base}/images/gallery6.png`,
    `${base}/images/gallery1.png`,
    `${base}/images/gallery2.png`,
    `${base}/images/gallery3.png`,
  ],
} as const;
