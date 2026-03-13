"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Press", href: "#press" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-black/30 py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#hero" className="font-serif text-xl text-white tracking-wide">
            A.M.M.
          </a>
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-champagne-400 text-sm tracking-widest uppercase transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? (
              <span className="text-2xl">&times;</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-30 bg-black/95 md:hidden flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-white text-xl font-serif"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
