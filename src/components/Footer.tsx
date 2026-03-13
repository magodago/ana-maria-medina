"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          className="font-serif text-champagne-400 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Ana Maria Medina
        </motion.p>
        <p className="text-white/50 text-sm mt-2">
          Model — Medellín, Colombia
        </p>
        <p className="text-white/30 text-xs mt-8">
          © {new Date().getFullYear()} Ana Maria Medina. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
