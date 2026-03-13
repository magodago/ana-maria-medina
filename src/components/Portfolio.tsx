"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";

export default function Portfolio() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-champagne-500 text-sm tracking-[0.3em] uppercase font-medium">
            Portfolio
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light mt-4 text-white">
            Editorial &amp; Fashion
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.gallery.map((src, index) => (
            <motion.div
              key={index}
              className="relative aspect-[3/4] overflow-hidden cursor-pointer group"
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setLightboxIndex(index)}
            >
              <Image
                src={src}
                alt={`Ana Maria Medina - Portfolio ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl z-10"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
            >
              ×
            </button>
            <motion.div
              className="relative w-full max-w-4xl aspect-[3/4]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images.gallery[lightboxIndex]}
                alt={`Portfolio image ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                unoptimized
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
