"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CONTACT_EMAIL = "contact@anamariamedina.com";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-champagne-500 text-sm tracking-[0.3em] uppercase font-medium">
            Contact
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light mt-4 text-white">
            Book Ana Maria
          </h2>
        </motion.div>

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-white/80 font-light mb-2">Professional inquiries:</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-champagne-400 hover:text-champagne-300 text-lg md:text-xl font-medium transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
        </motion.div>

        {submitted ? (
          <motion.div
            className="text-center py-12 border border-champagne-500/30"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <p className="text-champagne-400 font-medium">
              Thank you. Your booking request has been sent.
            </p>
            <p className="text-white/70 text-sm mt-2">
              We will get back to you shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <label htmlFor="name" className="block text-sm text-white/70 mb-2 uppercase tracking-wider">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:border-champagne-500/50 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-white/70 mb-2 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:border-champagne-500/50 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm text-white/70 mb-2 uppercase tracking-wider">
                Company / Brand
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:border-champagne-500/50 focus:outline-none transition-colors"
                placeholder="Company or brand name"
              />
            </div>
            <div>
              <label htmlFor="project" className="block text-sm text-white/70 mb-2 uppercase tracking-wider">
                Project description
              </label>
              <textarea
                id="project"
                name="project"
                rows={5}
                required
                className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:border-champagne-500/50 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project, dates and requirements..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 border border-champagne-500 text-champagne-300 font-medium tracking-widest uppercase text-sm hover:bg-champagne-500/20 transition-all duration-300"
            >
              Send Booking Request
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
