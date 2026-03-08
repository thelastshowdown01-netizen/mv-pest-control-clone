import React from 'react';
import { motion } from 'motion/react';
import { tenant } from '../tenantConfig';

export default function TrustStrip() {
  const stats = [
    { value: tenant.stats.homesProtected, label: "Homes Protected" },
    { value: tenant.stats.successRate, label: "Pest Removal Success" },
    { value: tenant.stats.googleReviews, label: "Reviews" },
    { value: tenant.stats.responseTime, label: "Response Time" },
  ];

  return (
    <div className="bg-brand-dark py-12 border-b border-white/5 relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
            >
              <p className="text-4xl md:text-5xl font-heading font-black text-brand-accent mb-2 drop-shadow-[0_2px_10px_rgba(16,185,129,0.3)] tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-80">
          {tenant.certifications.map((cert, i) => (
            <div key={i} className="flex items-center gap-3 text-white font-heading font-bold text-lg hover:text-brand-accent transition-colors duration-300">
              <span className={`text-xs px-3 py-1 rounded-md border-2 border-brand-accent/30 bg-brand-accent/10 text-brand-light font-black tracking-widest uppercase`}>
                {cert.label}
              </span>
              <span className="tracking-wide">{cert.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
