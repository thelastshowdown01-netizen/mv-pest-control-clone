import React from 'react';
import { motion } from 'motion/react';
import { tenant } from '../tenantConfig';

export default function Features() {
  const data = tenant.featureSection;

  if (!data) return null;

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden" id="about">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="feature-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M0 60L60 0H30L0 30M60 60V30L30 60" fill="none" stroke="currentColor" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#feature-grid)" />
        </svg>
      </div>

      {/* Floating Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-light/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 leading-tight tracking-tight drop-shadow-md"
          >
            {data.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-light/70 text-lg md:text-xl leading-relaxed"
          >
            {data.subheading}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16 text-center">
          {data.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2, type: 'spring' }}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Animated Circle */}
              <div
                className="relative w-56 h-56 rounded-full flex flex-col items-center justify-center mb-10 transition-transform duration-700 group-hover:scale-110 shadow-2xl z-10"
              >
                {/* Rotating Border */}
                <div
                  className="absolute inset-0 rounded-full border-[3px] opacity-70 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-[2s] ease-in-out"
                  style={{ borderColor: feature.colorHex, borderStyle: 'dashed' }}
                ></div>
                <div
                  className="absolute inset-2 rounded-full border-[2px] opacity-30 group-hover:opacity-50 group-hover:-rotate-90 transition-all duration-[3s] ease-in-out"
                  style={{ borderColor: feature.colorHex }}
                ></div>

                {/* Inner Glow */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl z-0"
                  style={{ backgroundColor: feature.colorHex }}
                ></div>

                <div className="relative z-10 flex flex-col items-center">
                  {feature.lines.map((line, i) => (
                    <span
                      key={i}
                      className={`font-heading font-black drop-shadow-lg transition-transform duration-500 group-hover:scale-105 ${line.small ? 'text-xs tracking-[0.3em] uppercase mb-1 mt-1 leading-tight text-white/80' : 'text-5xl my-1'}`}
                      style={{ color: line.colored ? feature.colorHex : '#ffffff' }}
                    >
                      {line.text}
                    </span>
                  ))}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-heading font-black text-white mb-4 group-hover:text-brand-accent transition-colors duration-300 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-brand-light/60 leading-relaxed px-4 text-base group-hover:text-brand-light/90 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
