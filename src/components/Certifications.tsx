import React from 'react';
import { motion } from 'motion/react';
import { tenant } from '../tenantConfig';

export default function Certifications() {
  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Abstract Background Vectors */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-light"
          >
            Credentials that set us apart.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-light/70"
          >
            Ensuring maximum safety and compliance for every property we treat.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {tenant.certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: "spring" }}
              className="flex flex-col items-center group"
            >
              <div className="w-48 h-48 border border-white/10 rounded-full flex flex-col items-center justify-center mb-8 p-4 bg-gradient-to-br from-white/5 to-transparent relative shadow-2xl group-hover:border-brand-accent/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-500 overflow-hidden">
                {/* Rotating gradient border effect */}
                <div className="absolute inset-[-50%] bg-[conic-gradient(transparent,transparent,#10b981_50%,transparent_100%)] opacity-0 group-hover:opacity-30 group-hover:animate-[spin_4s_linear_infinite] pointer-events-none"></div>
                <div className="absolute inset-1 bg-brand-dark rounded-full z-0"></div>

                <div className="relative z-10 flex flex-col text-center">
                  <span className="font-heading font-black text-2xl mb-1 text-brand-accent tracking-wider">{cert.label}</span>
                  <span className="font-heading text-xl text-white leading-tight font-medium uppercase">{cert.value}</span>
                </div>
              </div>

              <h3 className="font-heading font-bold text-2xl mb-3 text-center group-hover:text-brand-accent transition-colors duration-300">{cert.fullTitle}</h3>
              <p className="text-base text-gray-400 max-w-xs mx-auto text-center leading-relaxed group-hover:text-gray-300 transition-colors">{cert.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
