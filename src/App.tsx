/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import Features from './components/Features';
import Locations from './components/Locations';
import Steps from './components/Steps';
import Certifications from './components/Certifications';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-brand-dark selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustStrip />
        <Services />
        <Features />
        <Locations />
        <Steps />
        <Certifications />
        <Clients />
        <Testimonials />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
