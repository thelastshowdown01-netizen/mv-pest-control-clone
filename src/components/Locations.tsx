import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';
import { tenant } from '../tenantConfig';

export default function Locations() {
  return (
    <section className="py-24 bg-brand-light relative overflow-hidden" id="locations">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-brand-dark/10 text-brand-dark px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-6 shadow-sm"
          >
            <MapPin className="w-4 h-4 text-brand-accent" />
            Serving {tenant.regionName}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-black text-brand-dark mb-8 leading-tight max-w-3xl mx-auto"
            style={{ textWrap: 'balance' }}
          >
            Pest-free homes at your doorstep in <span className="text-brand-accent whitespace-nowrap">{tenant.regionCities}</span>
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 items-stretch max-w-4xl mx-auto">
          {tenant.serviceAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15, type: 'spring' }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 cursor-pointer group flex flex-col relative overflow-hidden w-full md:max-w-md"
            >
              {/* Decorative Map Background */}
              <div className="absolute -right-12 -bottom-12 opacity-5 text-brand-dark pointer-events-none group-hover:scale-110 transition-transform duration-700 group-hover:opacity-10">
                <MapPin className="w-64 h-64" />
              </div>

              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-dark to-brand-dark/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:from-brand-accent group-hover:to-brand-accent/80 transition-all duration-500 group-hover:-rotate-6 transform">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-heading font-black text-brand-dark mb-1">{area.city}</h3>
                  <p className="text-sm text-brand-orange font-bold tracking-widest uppercase">{area.count} homes serviced</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto relative z-10">
                {area.areas.map((a, i) => (
                  <span
                    key={i}
                    className="text-sm bg-brand-light/80 px-4 py-2 rounded-xl text-gray-700 font-bold border border-brand-dark/5 hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-colors duration-300 shadow-sm"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
