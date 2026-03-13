/**
 * Images - All paths point to /public/images/
 * HERO = portada (debe ser hero.png: retrato dramático luces azul/roja).
 * Reemplaza los archivos en public/images/ según necesites.
 * Base path para GitHub Pages (build:pages).
 */
const base = (typeof process !== "undefined" && process.env.NEXT_PUBLIC_BASE_PATH) || "";

export const images = {
  /** Imagen de portada: usar siempre hero.png (retrato luces azul/roja) */
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
