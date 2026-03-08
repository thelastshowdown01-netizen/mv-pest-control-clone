import React from 'react';
import { motion } from 'motion/react';
import { Star, MapPin } from 'lucide-react';
import { tenant } from '../tenantConfig';

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-light/30 to-brand-light"></div>

      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-3 block"
          >
            Success Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-black text-brand-dark mb-6"
          >
            What our customers say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tenant.reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, type: 'spring' }}
              className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white flex flex-col hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 relative group"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-8 text-7xl font-sans text-brand-accent/10 font-bold leading-none group-hover:text-brand-accent/20 transition-colors duration-500 pointer-events-none">
                "
              </div>

              <div className="flex items-center gap-1 mb-6 relative z-10">
                {[1, 2, 3, 4, 5].map((s) => (
                  <motion.div
                    key={s}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.1 + s * 0.1, type: "spring" }}
                  >
                    <Star className="w-5 h-5 fill-brand-orange text-brand-orange" />
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-8 flex-grow relative z-10 text-lg">"{review.text}"</p>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100 relative z-10">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-accent/20 shadow-sm flex-shrink-0 group-hover:border-brand-accent transition-colors duration-500">
                  {review.image ?
                    <img src={review.image} alt={review.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /> :
                    <div className="w-full h-full bg-gradient-to-br from-brand-dark to-brand-accent text-white flex items-center justify-center font-bold text-xl">{review.initial}</div>
                  }
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg group-hover:text-brand-accent transition-colors">{review.name}</h4>
                  <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-accent/70" />
                    <span>{review.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
