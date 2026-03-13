"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 bg-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          className="relative aspect-[3/4] min-h-[400px]"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={images.about}
            alt="Ana Maria Medina - Professional Model"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />
          <div className="absolute inset-0 border border-champagne-500/30 -m-4 md:-m-6" />
        </motion.div>

        <div>
          <motion.span
            className="text-champagne-500 text-sm tracking-[0.3em] uppercase font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            About Ana Maria
          </motion.span>
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-light mt-4 mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Elegance, presence &amp; professionalism
          </motion.h2>
          <motion.div
            className="space-y-5 text-white/80 font-light leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p>
              Ana Maria Medina is a professional model based in Medellín, Colombia, with a distinctive style that blends Latin elegance, sophistication and confidence. Her career spans fashion editorials, commercial campaigns and high-profile events.
            </p>
            <p>
              With an international presence and a strong editorial aesthetic, she brings versatility and professionalism to every project. Whether for luxury brands, fashion campaigns or exclusive events, Ana Maria delivers a polished, memorable presence.
            </p>
            <p>
              Available for fashion campaigns, brand collaborations, commercial shoots, editorial photography and luxury events worldwide. Get in touch to discuss your next project.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
