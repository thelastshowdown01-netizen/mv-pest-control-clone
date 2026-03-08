import React from 'react';
import { motion } from 'motion/react';
import { PhoneCall, CalendarCheck, Home, Bug } from 'lucide-react';
import { tenant } from '../tenantConfig';

const iconMap: Record<string, any> = { PhoneCall, CalendarCheck, Home, Bug };

export default function Steps() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="process">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light/50 rounded-full blur-3xl rounded-tl-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-20 text-center mx-auto md:text-left md:mx-0">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-3 block"
          >
            How it works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-black text-brand-dark mb-6 leading-tight"
          >
            Get pest-free in <span className="text-brand-accent">3 simple steps.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative lg:px-10">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-1 bg-gradient-to-r from-brand-accent/0 via-brand-dark/10 to-brand-accent/0 z-0"></div>

          {tenant.steps.map((step, index) => {
            const Icon = iconMap[step.iconName] || Bug;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2, type: 'spring', bounce: 0.4 }}
                className="relative z-10 flex flex-col items-center md:items-start group"
              >
                <div className="flex items-center mb-8 relative">
                  {/* Glowing background */}
                  <div className="absolute inset-0 bg-brand-accent blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></div>

                  <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-brand-light relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                    <span className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-brand-dark to-brand-accent text-white rounded-full flex items-center justify-center font-heading font-bold text-xl shadow-lg border-2 border-white transform group-hover:rotate-12 transition-transform duration-300">
                      {step.num}
                    </span>
                    <Icon className="w-12 h-12 text-brand-dark group-hover:text-brand-accent transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-black text-brand-dark mb-4 group-hover:text-brand-accent transition-colors duration-300 text-center md:text-left">{step.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed text-center md:text-left">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 flex flex-col sm:flex-row justify-center md:justify-start gap-4 lg:px-10"
        >
          <a href={`tel:${tenant.phoneFull}`} className="cursor-pointer bg-transparent border-2 border-brand-dark text-brand-dark px-10 py-4 rounded-full font-heading font-bold text-lg text-center hover:bg-brand-dark hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
            <PhoneCall className="w-5 h-5" />
            Call {tenant.phone}
          </a>
          <a href="#quote" className="cursor-pointer bg-brand-accent text-white px-10 py-4 rounded-full font-heading font-bold text-lg text-center hover:bg-brand-orange hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            Book Free Inspection
          </a>
        </motion.div>
      </div>
    </section>
  );
}
