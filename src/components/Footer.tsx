/**
 * House Of Form — Luxury Editorial Footer
 */

import React from 'react';
import { useStore } from '../context/StoreContext';
import { Shield, Sparkles, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentView, setSelectedProductId, setIsReservationModalOpen, setSelectedCategory, setIsSeoDrawerOpen } = useStore();

  const navigateTo = (view: string, productId?: string) => {
    if (productId) setSelectedProductId(productId);
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#191816] text-[#D1C7BB] pt-16 sm:pt-20 pb-12 border-t border-[#2C2926]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FULL-WIDTH BRAND NAME STRIP — Monumental, architectural luxury masthead */}
        <div className="border-b border-[#2C2926] pb-10 sm:pb-14 mb-12 sm:mb-16 text-center">
          <button
            id="footer-brand-strip-btn"
            onClick={() => navigateTo('home')}
            className="group cursor-pointer inline-flex flex-col items-center justify-center transition-all"
          >
            <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[0.22em] sm:tracking-[0.3em] uppercase text-[#FBF9F5] group-hover:text-[#C5A880] transition-colors font-light select-none">
              HOUSE OF FORM
            </h2>
            <p className="text-[9.5px] sm:text-xs tracking-[0.38em] uppercase text-[#C5A880] mt-3 sm:mt-4 font-medium">
              Italian Design • Bespoke Craftsmanship • Made In India
            </p>
          </button>
        </div>

        {/* Footer Content Columns (Starts below the brand strip) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#2C2926]">
          <div className="lg:col-span-4 space-y-5">
            <p className="text-[#C5A880] text-[12px] tracking-[0.22em] uppercase font-medium">
              Bespoke Furniture House
            </p>
            <p className="text-[#968E85] text-sm leading-relaxed max-w-md">
              Contemporary European proportions shaped with Indian craftsmanship. We believe furniture should define an architectural space rather than simply occupy it.
            </p>
            <div className="pt-2">
              <button
                id="footer-reserve-cta"
                onClick={() => setIsReservationModalOpen(true)}
                className="inline-flex items-center space-x-2 text-[11px] tracking-[0.2em] uppercase text-[#FBF9F5] bg-[#2C2926] hover:bg-[#A6865A] border border-[#3E3A36] px-5 py-3 transition-colors cursor-pointer"
              >
                <span>Reserve The Material Atelier (₹1,299)</span>
                <ArrowUpRight className="w-4 h-4 text-[#C5A880]" />
              </button>
            </div>
          </div>

          {/* Experience Lounges & Ateliers */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[#FBF9F5] text-[12px] tracking-[0.2em] uppercase font-medium flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Experience Lounges</span>
            </h4>
            <div className="space-y-3 text-sm text-[#968E85]">
              <div>
                <p className="text-[#FBF9F5] font-medium text-xs tracking-wider uppercase">Gurugram Atelier</p>
                <p className="text-xs">Golf Course Extension Road, Sector 66</p>
              </div>
              <div>
                <p className="text-[#FBF9F5] font-medium text-xs tracking-wider uppercase">New Delhi Design Suite</p>
                <p className="text-xs">The Gallery on MG, Sultanpur</p>
              </div>
              <div>
                <p className="text-[#FBF9F5] font-medium text-xs tracking-wider uppercase">Mumbai Private Salon</p>
                <p className="text-xs">Worli Sea Face, Mumbai</p>
              </div>
              <div>
                <p className="text-[#FBF9F5] font-medium text-xs tracking-wider uppercase">Bengaluru Studio</p>
                <p className="text-xs">Lavelle Road, Central Bengaluru</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[#FBF9F5] text-[12px] tracking-[0.2em] uppercase font-medium">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase text-[#968E85]">
              <li>
                <button
                  onClick={() => {
                    setSelectedCategory('ALL');
                    navigateTo('category-view');
                  }}
                  className="hover:text-[#FBF9F5] transition-colors cursor-pointer"
                >
                  Furniture Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('atelier-experience')}
                  className="hover:text-[#FBF9F5] transition-colors cursor-pointer"
                >
                  The Material Atelier
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('digital-swatches')}
                  className="hover:text-[#FBF9F5] transition-colors cursor-pointer"
                >
                  Digital Swatch Passport
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('bespoke')}
                  className="hover:text-[#FBF9F5] transition-colors cursor-pointer"
                >
                  Bespoke Customization
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('crafted-in-india')}
                  className="hover:text-[#FBF9F5] transition-colors cursor-pointer"
                >
                  Crafted In India
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('projects')}
                  className="hover:text-[#FBF9F5] transition-colors cursor-pointer"
                >
                  Architectural Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('journal')}
                  className="hover:text-[#FBF9F5] transition-colors cursor-pointer"
                >
                  Design Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('architects')}
                  className="hover:text-[#FBF9F5] transition-colors cursor-pointer"
                >
                  For Trade & Architects
                </button>
              </li>
              <li>
                <button
                  id="footer-seo-suite-btn"
                  onClick={() => setIsSeoDrawerOpen(true)}
                  className="hover:text-[#FBF9F5] transition-colors cursor-pointer text-[#C5A880] flex items-center space-x-1"
                >
                  <span>SEO & Metadata Suite</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Concierge & Contact */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[#FBF9F5] text-[12px] tracking-[0.2em] uppercase font-medium">
              Client Concierge
            </h4>
            <div className="space-y-2 text-xs text-[#968E85]">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>+91 124 492 8800</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>concierge@houseofform.in</span>
              </p>
              <p className="pt-2 text-[11px] leading-relaxed text-[#736B63]">
                Available Monday – Saturday, 10:00 to 19:00 IST for private consultation and showroom bookings.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Positioning Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#736B63]">
          <p>
            © {new Date().getFullYear()} HOUSE OF FORM. All design rights, proprietary silhouettes and material library specifications reserved.
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-[#968E85]">Manufactured in India with European Design Sensibility</span>
            <button
              onClick={() => navigateTo('admin')}
              className="text-[#C5A880] hover:underline uppercase text-[10px] tracking-widest cursor-pointer"
            >
              Management CRM Access
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
