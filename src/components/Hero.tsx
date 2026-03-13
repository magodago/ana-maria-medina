"use client";

import { images } from "@/lib/images";

/**
 * Hero: imagen como capa de fondo (img con z-0), contenido encima (z-10).
 * Funciona igual en localhost y en GitHub Pages.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden bg-black"
    >
      {/* Capa 1: imagen de fondo (no usa Next/Image para evitar capas que tapen) */}
      <img
        src={images.hero}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-[50%_28%] z-0"
      />
      {/* Capa 2: gradiente */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 45%, rgba(0,0,0,0.85) 100%)",
        }}
      />
      {/* Capa 3: contenido */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center pt-[56vh] pb-24">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-2 drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]">
          Ana Maria Medina
        </h1>
        <p className="font-sans text-base md:text-lg text-white/95 font-light mb-1 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
          From Medellín, Colombia
        </p>
        <p className="font-sans text-sm tracking-[0.25em] uppercase text-white/90 mb-4 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
          International Model
        </p>
        <p className="text-white/90 text-sm max-w-lg mx-auto mb-8 font-light drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
          Available for fashion, editorial, commercial campaigns and exclusive events.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3.5 border border-champagne-500 text-champagne-300 font-medium tracking-[0.2em] uppercase text-xs hover:bg-champagne-500/15 transition-colors duration-200"
        >
          Book Ana Maria
        </a>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 border-2 border-white/70 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-1.5 bg-white/90 rounded-full" />
        </div>
      </div>
    </section>
  );
}
