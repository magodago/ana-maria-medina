"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero}
          alt="Ana Maria Medina - International Model"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          className="font-serif text-champagne-400 text-sm md:text-base tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          International Model
        </motion.p>
        <motion.h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Ana Maria
          <br />
          <span className="text-champagne-300">Medina</span>
        </motion.h1>
        <motion.p
          className="font-sans text-lg md:text-xl text-white/90 font-light max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          From Medellín, Colombia
        </motion.p>
        <motion.p
          className="text-white/80 text-sm md:text-base max-w-lg mx-auto mb-12 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Available for fashion, editorial, commercial campaigns and exclusive events.
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-block px-10 py-4 border border-champagne-500 text-champagne-300 font-medium tracking-widest uppercase text-sm hover:bg-champagne-500/20 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Book Ana Maria
        </motion.a>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="w-1 h-2 bg-white/80 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
