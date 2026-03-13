"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[400px] flex flex-col justify-end overflow-hidden shrink-0"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero}
          alt="Ana Maria Medina - International Model"
          fill
          className="object-cover"
          style={{ objectPosition: "50% 25%" }}
          priority
          sizes="100vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/75" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full flex flex-col items-center pb-20 md:pb-28 pt-[52vh]">
        <motion.h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-3 opacity-100 drop-shadow-lg"
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ana Maria
          <br />
          <span className="text-champagne-300">Medina</span>
        </motion.h1>
        <motion.p
          className="font-sans text-base md:text-lg text-white font-light max-w-xl mx-auto mb-1 opacity-100 drop-shadow-md"
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          From Medellín, Colombia
        </motion.p>
        <motion.p
          className="font-serif text-champagne-400 text-xs md:text-sm tracking-[0.3em] uppercase mb-6 opacity-100"
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          International Model
        </motion.p>
        <motion.p
          className="text-white/95 text-sm max-w-lg mx-auto mb-8 font-light opacity-100 drop-shadow-md"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Available for fashion, editorial, commercial campaigns and exclusive events.
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-block px-10 py-4 border border-champagne-500 text-champagne-300 font-medium tracking-widest uppercase text-sm hover:bg-champagne-500/20 transition-all duration-300 opacity-100"
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Book Ana Maria
        </motion.a>
      </div>

      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="w-1 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
