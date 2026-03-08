import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Home, Building2, Stethoscope, UtensilsCrossed, Factory, Warehouse, Bug } from 'lucide-react';
import { tenant } from '../tenantConfig';

const iconMap: Record<string, any> = { Home, Building2, Stethoscope, UtensilsCrossed, Factory, Warehouse, Bug };

export default function Services() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6 leading-tight">
            Comprehensive Pest Control
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Specialized treatment protocols designed for every environment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tenant.services.map((item, index) => {
            const Icon = iconMap[item.iconName] || Bug;
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} className="cursor-pointer group bg-brand-light rounded-2xl p-8 border border-transparent hover:border-brand-dark/10 transition-all hover:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-brand-dark rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:bg-brand-orange transition-colors duration-200">
                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-brand-orange font-semibold text-sm group-hover:text-brand-dark transition-colors">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
