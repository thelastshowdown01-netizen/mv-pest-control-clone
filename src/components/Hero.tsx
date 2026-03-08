import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, Leaf } from 'lucide-react';
import { tenant } from '../tenantConfig';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-28 overflow-hidden min-h-[95vh] flex items-center bg-gradient-to-br from-brand-dark via-brand-dark to-brand-dark/95">
      {/* Decorative animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-light/10 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] animate-bounce" style={{ animationDuration: '10s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 text-white"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent font-semibold text-sm mb-6 backdrop-blur-md">
              <ShieldCheck className="w-5 h-5" />
              <span>Certified Professional Services</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6 tracking-tight">
              {tenant.heroHeadline} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-light drop-shadow-lg">
                {tenant.heroHeadlineAccent}
              </span>
            </h1>

            <p className="text-xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed">
              {tenant.heroSubheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#quote" className="cursor-pointer bg-brand-accent text-brand-dark px-8 py-4 rounded-full font-heading font-bold text-lg text-center hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.4)] relative overflow-hidden group">
                <span className="relative z-10">{tenant.heroCta1}</span>
                <div className="absolute inset-0 h-full w-full bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
              </a>
              <a href={`tel:${tenant.phoneFull}`} className="cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-heading font-bold text-lg text-center hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                <span className="animate-pulse">📞</span> {tenant.heroCta2}
              </a>
            </div>

            {/* Quick Trust Attributes */}
            <div className="mt-12 flex flex-wrap gap-6 items-center opacity-80">
              {tenant.certifications.slice(0, 3).map((cert, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold tracking-wide uppercase text-gray-300">{cert.fullTitle}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="lg:col-span-6 relative perspective-1000"
          >
            {/* The Main Image Frame */}
            <div className="relative z-10 rounded-2xl p-2 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-gpu hover:rotate-y-[-5deg] hover:rotate-x-[5deg] transition-transform duration-700">
              <img
                src={tenant.heroImage}
                alt="UTTAM Certified Professional"
                className="w-full h-auto rounded-xl object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />

              {/* Overlay Gradient for readability of floating boxes */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent rounded-xl pointer-events-none"></div>
            </div>

            {/* Floating Stats Badge */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 max-w-xs animate-bounce"
              style={{ animationDuration: '4s' }}
            >
              <h3 className="text-brand-dark font-heading text-xl font-bold mb-2">Over {tenant.stats.homesProtected} homes protected</h3>
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-6 h-6 fill-brand-orange text-brand-orange" />)}
              </div>
              <p className="text-gray-600 text-sm font-medium">{tenant.stats.avgRating} ★ from {tenant.stats.googleReviews} Reviews</p>
            </motion.div>

            {/* Floating Professional Badge */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -top-6 -right-6 z-20 bg-brand-accent p-4 rounded-xl shadow-xl border border-white/20 flex items-center justify-center transform rotate-12"
            >
              <div className="text-white font-heading font-black text-center leading-tight tracking-widest">
                <span className="text-3xl block">20+ YEARS</span>
                <span className="text-sm border-t border-white/30 pt-1 mt-1 block">PROVEN EXPERIENCE</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
