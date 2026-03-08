import os

base_dir = "/Users/ben/Anti-Gravity/Pest Control/all_india_pest_control_new/src"

components = {
    "Navbar.tsx": """import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Bug } from 'lucide-react';
import { motion } from 'motion/react';
import { tenant } from '../tenantConfig';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl ${isScrolled ? 'bg-brand-light shadow-md py-2' : 'bg-brand-light py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center gap-2">
              {tenant.logoUrl ? (
                <img src={tenant.logoUrl} alt={tenant.companyName} className="w-10 h-10 object-contain" />
              ) : (
                <div className="w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center">
                  <Bug className="text-white w-6 h-6" />
                </div>
              )}
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-brand-dark tracking-tight leading-none">{tenant.companyName}</span>
                <span className="text-[10px] text-brand-orange font-semibold tracking-widest uppercase leading-none mt-0.5">{tenant.tagline}</span>
              </div>
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-brand-dark font-medium hover:text-brand-orange transition-colors">Services</a>
            <a href="#locations" className="text-brand-dark font-medium hover:text-brand-orange transition-colors">Locations</a>
            <a href="#about" className="text-brand-dark font-medium hover:text-brand-orange transition-colors">Why Us</a>
          </nav>
          <div className="hidden md:flex items-center space-x-6">
            <a href={`tel:${tenant.phoneFull}`} className="flex items-center gap-2 text-brand-dark font-heading font-semibold text-lg hover:text-brand-orange transition-colors">
              <Phone className="w-5 h-5" />
              {tenant.phone}
            </a>
            <a href="#quote" className="cursor-pointer bg-brand-dark text-white px-6 py-2.5 rounded-full font-heading font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:-translate-y-0.5">
              Free Inspection
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="cursor-pointer text-brand-dark focus:outline-none">
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-brand-light absolute top-full left-0 w-full shadow-xl border-t border-brand-dark/10 rounded-b-2xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-brand-dark font-medium text-lg border-b border-brand-dark/10">Services</a>
            <a href="#locations" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-brand-dark font-medium text-lg border-b border-brand-dark/10">Locations</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-brand-dark font-medium text-lg border-b border-brand-dark/10">Why Us</a>
            <div className="pt-6 flex flex-col gap-4">
              <a href={`tel:${tenant.phoneFull}`} className="flex items-center justify-center gap-2 text-brand-dark font-heading font-semibold text-xl">
                <Phone className="w-6 h-6" />
                {tenant.phone}
              </a>
              <a href="#quote" onClick={() => setMobileMenuOpen(false)} className="cursor-pointer bg-brand-dark text-white text-center px-6 py-3 rounded-full font-heading font-semibold text-lg">
                Free Inspection
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
""",
    
    "Hero.tsx": """import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, Leaf } from 'lucide-react';
import { tenant } from '../tenantConfig';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-24 lg:pt-44 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img src={tenant.heroImage} alt={tenant.companyName} className="w-full h-full object-cover object-center" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-7 text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6 tracking-tight">
              {tenant.heroHeadline} <br />
              <span className="text-brand-accent">{tenant.heroHeadlineAccent}</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl font-light">{tenant.heroSubheadline}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="cursor-pointer bg-brand-accent text-brand-dark px-8 py-4 rounded-full font-heading font-bold text-lg text-center hover:bg-brand-orange transition-colors">
                {tenant.heroCta1}
              </a>
              <a href={`tel:${tenant.phoneFull}`} className="cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-heading font-bold text-lg text-center hover:bg-white/20 transition-colors">
                {tenant.heroCta2}
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-5 flex justify-start lg:justify-end">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl max-w-sm w-full shadow-2xl">
              <h3 className="text-white font-heading text-2xl font-semibold mb-4">Over {tenant.stats.homesProtected} homes protected</h3>
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-8 h-8 fill-brand-accent text-brand-accent" />)}
              </div>
              <p className="text-gray-300 text-lg font-medium">{tenant.stats.avgRating} ★ from {tenant.stats.googleReviews} Reviews</p>
              <div className="mt-6 pt-6 border-t border-white/20 space-y-4">
                {tenant.certifications.slice(0, 2).map((cert, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white font-bold text-xs">{cert.label}</div>
                    <div>
                      <p className="text-white font-semibold">{cert.fullTitle}</p>
                      <p className="text-gray-400 text-sm">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
""",

    "TrustStrip.tsx": """import React from 'react';
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
    <div className="bg-brand-dark py-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <p className="text-3xl md:text-4xl font-heading font-bold text-brand-accent mb-1">{stat.value}</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-80">
          {tenant.certifications.map((cert, i) => (
             <div key={i} className="flex items-center gap-2 text-white font-heading font-bold text-lg">
                <span className={`text-xs px-2 py-0.5 rounded border border-white/30 text-white`}>{cert.label}</span>
                {cert.value}
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
""",

    "Services.tsx": """import React from 'react';
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
""",

    "Features.tsx": """import React from 'react';
import { motion } from 'motion/react';
import { Clock, ShieldCheck, GraduationCap, RefreshCw, Leaf, Bug, ArrowRight } from 'lucide-react';
import { tenant } from '../tenantConfig';

const iconMap: Record<string, any> = { Clock, ShieldCheck, GraduationCap, RefreshCw, Leaf, Bug };

export default function Features() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6 leading-tight">
            Why {tenant.regionName} trusts us.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tenant.features.map((feature, index) => {
            const Icon = iconMap[feature.iconName] || Bug;
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-brand-light rounded-2xl p-8 flex flex-col h-full border border-transparent hover:border-brand-dark/10 transition-colors group cursor-pointer">
                <div className="w-16 h-16 bg-brand-dark rounded-xl flex items-center justify-center mb-8 text-white group-hover:bg-brand-orange transition-colors">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">{feature.description}</p>
                <a href="#" className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:text-brand-dark transition-colors mt-auto">
                  {feature.linkText} <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
""",

    "Locations.tsx": """import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';
import { tenant } from '../tenantConfig';

export default function Locations() {
  return (
    <section className="py-24 bg-brand-light" id="locations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-block bg-brand-dark/10 text-brand-dark px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
            Serving {tenant.regionName}
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6 leading-tight">
            Pest-free homes at your doorstep in {tenant.regionCities}.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tenant.serviceAreas.map((area, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="bg-white rounded-2xl p-6 border border-brand-dark/5 hover:border-brand-dark/15 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark">{area.city}</h3>
                  <p className="text-xs text-brand-orange font-semibold">{area.count} homes serviced</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {area.areas.map((a, i) => <span key={i} className="text-xs bg-brand-light px-2.5 py-1 rounded-full text-gray-600 border border-brand-dark/5">{a}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
""",

    "Steps.tsx": """import React from 'react';
import { motion } from 'motion/react';
import { PhoneCall, CalendarCheck, Home, Bug } from 'lucide-react';
import { tenant } from '../tenantConfig';

const iconMap: Record<string, any> = { PhoneCall, CalendarCheck, Home, Bug };

export default function Steps() {
  return (
    <section className="py-24 bg-brand-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6 leading-tight">
            Get pest-free in 3 simple steps.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-brand-dark/10 z-0"></div>
          {tenant.steps.map((step, index) => {
            const Icon = iconMap[step.iconName] || Bug;
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 }} className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-brand-light relative">
                    <span className="absolute -top-2 -left-2 w-10 h-10 bg-brand-dark text-white rounded-full flex items-center justify-center font-heading font-bold text-lg">{step.num}</span>
                    <Icon className="w-10 h-10 text-brand-dark" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-3xl font-heading font-bold text-brand-dark mb-4">{step.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          <a href={`tel:${tenant.phoneFull}`} className="cursor-pointer bg-transparent border-2 border-brand-dark text-brand-dark px-8 py-3.5 rounded-full font-heading font-bold text-lg text-center hover:bg-brand-dark hover:text-white transition-colors">
            Call {tenant.phone}
          </a>
          <a href="#quote" className="cursor-pointer bg-brand-dark border-2 border-brand-dark text-white px-8 py-3.5 rounded-full font-heading font-bold text-lg text-center hover:bg-opacity-90 transition-colors">
            Book Free Inspection
          </a>
        </div>
      </div>
    </section>
  );
}
""",

    "Certifications.tsx": """import React from 'react';
import { motion } from 'motion/react';
import { tenant } from '../tenantConfig';

export default function Certifications() {
  return (
    <section className="py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-6">Credentials that set us apart.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 justify-center mt-12 text-center">
          {tenant.certifications.map((cert, i) => (
             <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="flex flex-col items-center">
               <div className="w-48 h-48 border-4 border-white/30 rounded-full flex flex-col items-center justify-center mb-8 p-4">
                 <span className="font-heading font-bold text-2xl mb-1 text-white">{cert.label}</span>
                 <span className="font-heading text-xl text-white leading-none whitespace-pre-wrap">{cert.value}</span>
               </div>
               <h3 className="font-heading font-bold text-xl mb-3">{cert.fullTitle}</h3>
               <p className="text-lg text-gray-300 max-w-xs mx-auto">{cert.subtitle}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
""",

    "Testimonials.tsx": """import React from 'react';
import { motion } from 'motion/react';
import { Star, MapPin } from 'lucide-react';
import { tenant } from '../tenantConfig';

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">What our customers say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tenant.reviews.map((review, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white p-8 rounded-2xl shadow border border-gray-100 flex flex-col">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-brand-accent text-brand-accent" />)}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">"{review.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-brand-dark text-white rounded-full flex items-center justify-center font-bold text-lg">{review.initial}</div>
                <div>
                  <h4 className="font-bold text-brand-dark">{review.name}</h4>
                  <div className="flex items-center text-sm text-gray-500 gap-1"><MapPin className="w-3.5 h-3.5" />{review.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
""",

    "Footer.tsx": """import React from 'react';
import { Bug, Phone, Mail, MapPin } from 'lucide-react';
import { tenant } from '../tenantConfig';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              {tenant.logoUrl ? (
                <img src={tenant.logoUrl} alt={tenant.companyName} className="w-10 h-10 object-contain" />
              ) : (
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-brand-accent">
                  <Bug className="w-6 h-6" />
                </div>
              )}
              <span className="font-heading font-bold text-2xl tracking-tight">{tenant.companyName}</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">{tenant.heroSubheadline}</p>
          </div>
          <div>
             <h4 className="font-bold text-lg mb-6">Quick Links</h4>
             <ul className="space-y-4">
               {tenant.footerLinks.map(([label, href], i) => (
                 <li key={i}><a href={href} className="text-gray-400 hover:text-brand-accent transition-colors">{label}</a></li>
               ))}
             </ul>
          </div>
          <div>
             <h4 className="font-bold text-lg mb-6">Services</h4>
             <ul className="space-y-4">
               {tenant.footerServices.map(([label, href], i) => (
                 <li key={i}><a href={href} className="text-gray-400 hover:text-brand-accent transition-colors">{label}</a></li>
               ))}
             </ul>
          </div>
          <div>
             <h4 className="font-bold text-lg mb-6">Contact Us</h4>
             <ul className="space-y-4 text-gray-400">
               <li className="flex gap-3"><Phone className="w-5 h-5 text-brand-accent shrink-0" /><a href={`tel:${tenant.phoneFull}`}>{tenant.phone}</a></li>
               {tenant.whatsapp && <li className="flex gap-3"><Phone className="w-5 h-5 text-brand-accent shrink-0" /><a href={tenant.whatsappLink}>WhatsApp: {tenant.whatsapp}</a></li>}
               {tenant.email && <li className="flex gap-3"><Mail className="w-5 h-5 text-brand-accent shrink-0" /><a href={`mailto:${tenant.email}`}>{tenant.email}</a></li>}
             </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>{tenant.copyrightText}</p>
          <p className="mt-4 md:mt-0">{tenant.copyrightSubtext}</p>
        </div>
      </div>
    </footer>
  );
}
""",

    "FloatingContact.tsx": """import React from 'react';
import { MessageCircle } from 'lucide-react';
import { tenant } from '../tenantConfig';

export default function FloatingContact() {
  if (!tenant.whatsappLink) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a href={tenant.whatsappLink} className="cursor-pointer w-14 h-14 bg-brand-dark text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[0_0_24px_rgba(222,149,70,0.5)] hover:bg-brand-orange transition-all duration-200">
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
"""
}

# Write components
for file_name, content in components.items():
    path = os.path.join(base_dir, "components", file_name)
    with open(path, "w") as f:
        f.write(content)

# Update index.css
index_css_path = os.path.join(base_dir, "index.css")
with open(index_css_path, "r") as f:
    css_content = f.read()

from_str = """  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-heading: "Outfit", ui-sans-serif, system-ui, sans-serif;
  --color-brand-dark: #27463e;
  --color-brand-light: #f4f6eb;
  --color-brand-accent: #fed900;
  --color-brand-orange: #de9546;"""

to_str = """  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-heading: "Outfit", ui-sans-serif, system-ui, sans-serif;
  --color-brand-dark: #1a365d;
  --color-brand-light: #f0fdf4;
  --color-brand-accent: #22c55e;
  --color-brand-orange: #f59e0b;"""

css_content = css_content.replace(from_str, to_str)

with open(index_css_path, "w") as f:
    f.write(css_content)

print("Patch applied.")
