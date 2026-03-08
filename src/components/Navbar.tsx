import React, { useState, useEffect } from 'react';
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
            <a href="/" className="flex items-center gap-3">
              {tenant.logoUrl ? (
                <>
                  <img src={tenant.logoUrl} alt={tenant.companyName} className="h-16 md:h-20 w-auto object-contain" />
                  <div className="flex flex-col ml-3 hidden sm:flex border-l-2 pl-3 border-brand-accent/20">
                    <span className="font-heading font-black text-2xl text-brand-dark tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-brand-dark to-brand-dark/70 drop-shadow-sm">M V <span className="text-brand-accent">PEST CONTROL</span></span>
                    <span className="text-[10px] text-brand-orange font-bold tracking-widest uppercase leading-none mt-1.5 pl-0.5">{tenant.tagline}</span>
                  </div>
                </>
              ) : (
                <>
                  <motion.div
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="relative w-12 h-12 flex items-center justify-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark to-brand-accent rounded-xl shadow-[0_4px_15px_rgba(16,185,129,0.3)] rotate-3 group-hover:rotate-12 transition-transform duration-300"></div>
                    <Bug className="text-white w-7 h-7 relative z-10" />
                    <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full shadow-md z-20">
                      <div className="bg-brand-orange w-3 h-3 rounded-full animate-ping"></div>
                      <div className="absolute inset-[2px] bg-brand-orange w-3 h-3 rounded-full"></div>
                    </div>
                  </motion.div>
                  <div className="flex flex-col">
                    <span className="font-heading font-black text-2xl text-brand-dark tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-brand-dark to-brand-dark/70 drop-shadow-sm">M V <span className="text-brand-accent">PEST</span></span>
                    <span className="text-[10px] text-brand-orange font-bold tracking-widest uppercase leading-none mt-1 pl-0.5">{tenant.tagline}</span>
                  </div>
                </>
              )}
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
