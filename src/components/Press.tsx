"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Ana Maria brings elegance, presence and professionalism to every shoot. A true pleasure to work with.",
    author: "Photographer, Fashion Editorial",
  },
  {
    quote:
      "Her ability to adapt to different concepts while maintaining her distinctive style is remarkable.",
    author: "Creative Director, Luxury Brand",
  },
  {
    quote:
      "From the first frame to the last, Ana Maria delivered exactly what we needed. Highly recommended.",
    author: "Brand Manager, Commercial Campaign",
  },
];

export default function Press() {
  return (
    <section id="press" className="py-24 md:py-32 px-6 bg-[#0f0f0f]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-champagne-500 text-sm tracking-[0.3em] uppercase font-medium">
            Press &amp; Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light mt-4 text-white">
            What they say
          </h2>
        </motion.div>

        <div className="space-y-12 md:space-y-16">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={index}
              className="text-center"
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="font-serif text-2xl md:text-3xl font-light text-white/95 leading-relaxed italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 text-champagne-500/90 text-sm tracking-widest uppercase">
                — {item.author}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
