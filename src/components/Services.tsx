"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Fashion Campaigns",
    description: "High-end fashion and runway campaigns for designers and brands.",
    icon: "✦",
  },
  {
    title: "Brand Collaborations",
    description: "Long-term partnerships and ambassador roles with luxury and lifestyle brands.",
    icon: "◆",
  },
  {
    title: "Commercial Shoots",
    description: "Advertising, product launches and commercial photography.",
    icon: "◇",
  },
  {
    title: "Editorial Photography",
    description: "Magazine editorials, lookbooks and fashion stories.",
    icon: "◈",
  },
  {
    title: "Luxury Events",
    description: "VIP events, galas, launches and exclusive appearances.",
    icon: "◎",
  },
  {
    title: "Social Media Promotions",
    description: "Content creation and sponsored campaigns for digital platforms.",
    icon: "◉",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-champagne-500 text-sm tracking-[0.3em] uppercase font-medium">
            Services
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light mt-4 text-white">
            Bookings &amp; Collaborations
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="border border-white/10 p-8 hover:border-champagne-500/40 transition-colors duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <span className="text-champagne-500 text-2xl group-hover:text-champagne-400 transition-colors">
                {service.icon}
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-light mt-4 mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-white/70 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
