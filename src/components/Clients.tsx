import React from 'react';
import { motion } from 'motion/react';
import { tenant } from '../tenantConfig';
import { Building2, Home, Landmark, ShieldCheck, Sun, Star, Hotel, Briefcase } from 'lucide-react';

const icons = [Building2, Home, Landmark, ShieldCheck, Sun, Star, Hotel, Briefcase];

export default function Clients() {
    if (!tenant.clients || tenant.clients.length === 0) return null;

    // Create a large repeated array to allow for infinite scrolling using x: "-50%"
    // With 6 clients, we repeat it 6 times (36 items) so it's wider than any screen.
    const row1 = [...tenant.clients, ...tenant.clients, ...tenant.clients, ...tenant.clients, ...tenant.clients, ...tenant.clients];
    const row2 = [...tenant.clients, ...tenant.clients, ...tenant.clients, ...tenant.clients, ...tenant.clients, ...tenant.clients];

    return (
        <section className="py-24 bg-gradient-to-b from-brand-light/30 to-brand-light/10 overflow-hidden relative border-t border-brand-dark/5">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-3 block">Trusted Partners</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-dark mb-6">
                            Our <span className="text-brand-accent relative inline-block">
                                Prestigious Clients
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-accent/20" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="4" fill="none" /></svg>
                            </span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            We have delivered premium pest control services to prestigious organizations, businesses, and homes across the region. Here are a few.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Infinite Marquee Wrapper */}
            <div className="relative w-full overflow-hidden flex flex-col gap-8 py-4">
                {/* Fade Gradients matching the background closely (mostly white/light cyan) */}
                <div className="absolute top-0 bottom-0 left-0 w-12 md:w-48 bg-gradient-to-r from-brand-light/95 via-brand-light/50 to-transparent z-20 pointer-events-none mix-blend-screen"></div>
                <div className="absolute top-0 bottom-0 right-0 w-12 md:w-48 bg-gradient-to-l from-brand-light/95 via-brand-light/50 to-transparent z-20 pointer-events-none mix-blend-screen"></div>

                {/* ROW 1: Moves Left */}
                <motion.div
                    className="flex w-max gap-8 pr-8"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
                >
                    {row1.map((client, i) => {
                        const Icon = icons[i % icons.length];
                        return (
                            <div key={`r1-${i}`} className="group relative flex items-center justify-center p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-brand-dark/5 hover:border-brand-accent/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 w-64 flex-shrink-0 cursor-pointer overflow-hidden flex-col gap-4 text-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="h-16 w-16 rounded-full bg-brand-light flex items-center justify-center mx-auto group-hover:bg-brand-accent shadow-sm transition-colors duration-500 transform group-hover:scale-110">
                                    <Icon className="w-8 h-8 text-brand-accent group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="font-heading font-bold text-xl text-brand-dark group-hover:text-brand-accent transition-colors duration-500">{client.name}</h3>
                                <div className="h-1.5 w-12 bg-brand-dark/10 mx-auto rounded-full group-hover:w-24 group-hover:bg-brand-accent transition-all duration-500"></div>
                            </div>
                        );
                    })}
                </motion.div>

                {/* ROW 2: Moves Right */}
                <motion.div
                    className="flex w-max gap-8 pr-8"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 80 }}
                >
                    {row2.map((client, i) => {
                        const Icon = icons[(i + 3) % icons.length]; // Offset the icon for variety
                        return (
                            <div key={`r2-${i}`} className="group relative flex items-center justify-center p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-brand-dark/5 hover:border-brand-dark/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 w-64 flex-shrink-0 cursor-pointer overflow-hidden flex-col gap-4 text-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="h-16 w-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto group-hover:bg-brand-dark shadow-sm transition-colors duration-500 transform group-hover:scale-110">
                                    <Icon className="w-8 h-8 text-brand-dark group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="font-heading font-bold text-xl text-gray-800 group-hover:text-brand-dark transition-colors duration-500">{client.name}</h3>
                                <div className="h-1.5 w-12 bg-brand-dark/10 mx-auto rounded-full group-hover:w-24 group-hover:bg-brand-dark transition-all duration-500"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

