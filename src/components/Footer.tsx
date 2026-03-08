import React from 'react';
import { Phone, Mail, MapPin, ChevronRight, User, UserPlus, Clock } from 'lucide-react';
import { tenant } from '../tenantConfig';

export default function Footer() {
  return (
    <footer className="bg-[#111b2b] text-white pt-16 pb-12 font-sans relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1.2fr] gap-12 lg:gap-16">

          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              {tenant.logoUrl && (
                <img src={tenant.logoUrl} alt={tenant.companyName} className="h-16 w-auto object-contain bg-white rounded-lg p-0.5" />
              )}
              <div>
                <h3 className="text-3xl font-heading font-black text-white leading-none tracking-tight">M V</h3>
                <h3 className="text-xl font-heading font-bold text-red-500 leading-none mt-1">Pest Control</h3>
                <p className="text-xs text-brand-light/60 mt-1.5 font-medium tracking-wide">Trusted Brand Since 2015</p>
              </div>
            </div>

            <div className="flex gap-4 mb-10">
              <a href={`tel:${tenant.phoneFull}`} className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2.5 rounded font-bold flex items-center justify-center gap-2 transition-colors text-sm shadow-md">
                <Phone className="w-4 h-4" fill="currentColor" /> Call Now
              </a>
              <a href={`mailto:${tenant.email}`} className="flex-1 bg-white hover:bg-gray-100 text-[#111b2b] px-4 py-2.5 rounded font-bold flex items-center justify-center gap-2 transition-colors text-sm shadow-md">
                <Mail className="w-4 h-4" /> Email Us
              </a>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-10 text-[13px] font-medium">
              <a href="#about" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"><ChevronRight className="w-3.5 h-3.5 text-gray-500" /> About Us</a>
              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"><ChevronRight className="w-3.5 h-3.5 text-gray-500" /> Careers</a>
              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"><ChevronRight className="w-3.5 h-3.5 text-gray-500" /> Blog</a>
              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"><ChevronRight className="w-3.5 h-3.5 text-gray-500" /> FAQs</a>
              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"><ChevronRight className="w-3.5 h-3.5 text-gray-500" /> AMC Plans</a>
              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"><ChevronRight className="w-3.5 h-3.5 text-gray-500" /> Privacy Policy</a>
              <a href="#locations" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"><ChevronRight className="w-3.5 h-3.5 text-gray-500" /> Service Areas</a>
              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"><ChevronRight className="w-3.5 h-3.5 text-gray-500" /> Google Reviews</a>
              <a href="#quote" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"><ChevronRight className="w-3.5 h-3.5 text-gray-500" /> Appointment</a>
              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"><ChevronRight className="w-3.5 h-3.5 text-gray-500" /> Sitemap</a>
            </div>

            <h4 className="font-black text-[15px] mb-4 uppercase tracking-widest text-white">PESTS WE TREAT</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-[13px] font-medium">
              {tenant.services.slice(0, 6).map((service, i) => (
                <a href="#services" key={i} className="flex items-start gap-2 text-gray-400 hover:text-white leading-tight transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500 shrink-0 mt-0.5" />
                  {service.title}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="lg:pl-4">
            <h4 className="flex items-center gap-2 font-black text-xl mb-8 text-white">
              <MapPin className="w-5 h-5 text-red-500 shrink-0" /> Our Locations
            </h4>

            <div className="space-y-6 mb-8">
              <div>
                <h5 className="text-red-500 font-bold mb-1 text-sm">Delhi (HQ)</h5>
                <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
                  12th Street, Connaught Place, New Delhi, Delhi 110001
                </p>
              </div>

              <div>
                <h5 className="text-red-500 font-bold mb-1 text-sm">Lucknow</h5>
                <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
                  Branch offices across Gomti Nagar, Alambagh, Indira Nagar, and Hazratganj.
                </p>
              </div>

              <div>
                <h5 className="text-red-500 font-bold mb-1 text-sm">Delhi NCR</h5>
                <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
                  Noida · Greater Noida · Ghaziabad · Faridabad · Gurugram
                </p>
              </div>
            </div>

            <div className="bg-[#1e293b] rounded-xl p-5 border border-[#334155] max-w-sm shadow-xl">
              <h5 className="flex items-center gap-2 text-white mb-3 text-sm font-bold">
                <Mail className="w-4 h-4 text-red-500" /> Contact Info
              </h5>
              <div className="space-y-2 text-xs text-gray-300">
                <p><strong className="text-white">Primary:</strong> {tenant.phoneFull}</p>
                <p><strong className="text-white">Alt 1:</strong> +91 8076 333 896</p>
                {tenant.email && <p><strong className="text-white">Email:</strong> {tenant.email}</p>}
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-black text-xl mb-10 text-white">Customer Service</h4>

            <div className="flex justify-between items-start gap-3 mb-8">
              {/* Existing Customer */}
              <div className="flex-1 text-center bg-[#1e293b]/50 p-4 rounded-2xl border border-blue-500/20">
                <div className="w-16 h-16 mx-auto rounded-full border-[1.5px] border-blue-500 flex items-center justify-center mb-3 text-blue-500 shrink-0">
                  <User className="w-7 h-7" />
                </div>
                <h5 className="font-black text-[17px] text-white leading-tight">Existing</h5>
                <p className="text-gray-400 text-xs mb-4">Customer</p>
                <a href={`tel:${tenant.phoneFull}`} className="block w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-bold transition-colors text-sm shadow-md">
                  Contact Us
                </a>
                <p className="font-bold text-sm mt-5 text-white tracking-wide">{tenant.phoneFull}</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Mon-Sat, 9AM-9PM</p>
              </div>

              {/* New Customer */}
              <div className="flex-1 text-center bg-[#1e293b]/50 p-4 rounded-2xl border border-red-500/20">
                <div className="w-16 h-16 mx-auto rounded-full border-[1.5px] border-red-500 flex items-center justify-center mb-3 text-red-500 shrink-0">
                  <UserPlus className="w-7 h-7" />
                </div>
                <h5 className="font-black text-[17px] text-white leading-tight">New</h5>
                <p className="text-gray-400 text-xs mb-4">Customer</p>
                <a href="#quote" className="block w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded font-bold transition-colors text-sm shadow-md">
                  Free Quote
                </a>
                <p className="font-bold text-sm mt-5 text-white tracking-wide">{tenant.phoneFull}</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Mon-Sat, 9AM-9PM</p>
              </div>
            </div>

            {/* Hours & Enquiries */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#334155]">
              <div className="text-center">
                <h6 className="flex items-center justify-center gap-1.5 text-white font-bold mb-2 text-sm">
                  <Clock className="w-3.5 h-3.5 text-blue-400" /> Hours
                </h6>
                <p className="text-xs text-white">Monday-Saturday</p>
                <p className="text-[11px] text-gray-500 mb-2">9 AM - 9 PM IST</p>
                <p className="text-xs text-white">Sunday</p>
                <p className="text-[11px] text-gray-500">9 AM - 9 PM IST</p>
              </div>
              <div className="text-center border-l border-[#334155]/50 pl-4">
                <h6 className="flex items-center justify-center gap-1.5 text-white font-bold mb-2 text-sm">
                  <Phone className="w-3.5 h-3.5 text-red-400" /> Enquiry
                </h6>
                <p className="text-xs font-medium text-white">{tenant.phoneFull}</p>
                <p className="text-[11px] text-gray-500 mb-2">Primary Line</p>
                <p className="text-xs font-medium text-white">+91 8076 333 896</p>
                <p className="text-[11px] text-gray-500">Alternate Line</p>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-[#334155] mt-16 pt-5 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-500">
          <p>{tenant.copyrightText}</p>
          <p className="mt-2 text-center md:text-left md:mt-0 max-w-2xl">{tenant.copyrightSubtext}</p>
        </div>
      </div>

      {/* Floating Chat Button bottom right */}
      <a href={tenant.whatsappLink || `tel:${tenant.phoneFull}`} className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-red-500 hover:bg-red-600 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border-[3px] border-[#111b2b]">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </a>
    </footer>
  );
}
