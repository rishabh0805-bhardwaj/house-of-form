/**
 * House Of Form — Luxury Editorial Homepage
 * Italian Design. Bespoke Craftsmanship. Made in India.
 * Global Design. Indian Intelligence. Bespoke to You.
 */

import React from 'react';
import { useStore } from '../context/StoreContext';
import {
  ArrowRight,
  Box,
  Layers,
  Sparkles,
  Compass,
  ShieldCheck,
  Check,
  ArrowUpRight,
} from 'lucide-react';
import { MotionFadeIn } from './MotionFadeIn';

export const HomeView: React.FC = () => {
  const {
    products,
    setSelectedProductId,
    setCurrentView,
    setIsReservationModalOpen,
    settings,
    setSelectedCategory,
  } = useStore();

  const flagship = products.find((p) => p.id === 'HOF-SF-VLR-001') || products[0];

  const navigateToProduct = (id: string) => {
    setSelectedProductId(id);
    setCurrentView('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FBF9F5] text-[#191816]">
      
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="relative min-h-[88vh] flex items-center bg-[#191816] text-[#FBF9F5] overflow-hidden">
        {/* Background Atmosphere Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
            alt="House Of Form — Contemporary Luxury Furniture Pavilion"
            className="w-full h-full object-cover opacity-35 filter brightness-75 scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#191816] via-[#191816]/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <MotionFadeIn distance={28} duration={0.9} className="max-w-3xl space-y-6">
            
            <div className="inline-flex items-center space-x-2 text-[11px] tracking-[0.3em] uppercase text-[#C5A880] font-medium border-b border-[#C5A880]/40 pb-1">
              <span>Bespoke Luxury Furniture House</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl tracking-[0.06em] uppercase font-light leading-[1.08] text-white">
              Italian Design.<br />
              Bespoke Craftsmanship.<br />
              <span className="text-[#C5A880]">Made in India.</span>
            </h1>

            <p className="font-serif italic text-lg sm:text-2xl text-[#D1C7BB] max-w-2xl font-light">
              "Contemporary furniture shaped by proportion, material and the way you live."
            </p>

            <p className="text-xs sm:text-sm text-[#968E85] tracking-wide leading-relaxed max-w-xl">
              Global design language meeting Indian architectural intelligence. We eliminate international transit delays and rigid import dimensions through bespoke local manufacturing.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                id="hero-explore-collection-btn"
                onClick={() => {
                  setSelectedCategory('ALL');
                  setCurrentView('category-view');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#C5A880] hover:bg-[#A6865A] text-[#191816] px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-bespoke-services-btn"
                onClick={() => {
                  setCurrentView('bespoke');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="border border-[#736B63] hover:border-[#FBF9F5] text-[#FBF9F5] px-8 py-4 text-xs tracking-[0.18em] uppercase flex items-center justify-center space-x-2 transition-colors cursor-pointer bg-white/5 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-[#C5A880]" />
                <span>Bespoke Customization</span>
              </button>
            </div>

          </MotionFadeIn>
        </div>
      </section>

      {/* 2. BRAND PHILOSOPHY */}
      <section className="py-20 lg:py-28 border-b border-[#E6DFD5] bg-[#F4EFEB]">
        <MotionFadeIn distance={24} duration={0.8} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#A6865A] font-semibold block">
            The House Of Form Philosophy
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#191816] tracking-[0.04em] uppercase font-light leading-tight">
            "Furniture should define a space, not simply occupy it."
          </h2>

          <div className="max-w-2xl mx-auto text-xs sm:text-sm text-[#736B63] leading-relaxed space-y-4">
            <p>
              Every House Of Form piece is considered through form, proportion, material, comfort, and space. We design furniture that integrates with the architecture of Indian luxury residences—sculptural yet deeply comfortable, contemporary yet timeless.
            </p>
          </div>

          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="bg-white p-5 border border-[#D1C7BB]">
              <span className="text-[9px] font-mono text-[#A6865A] uppercase block">Pillar 01</span>
              <h4 className="font-serif text-base uppercase text-[#191816] mt-1">Form & Proportion</h4>
              <p className="text-[11px] text-[#736B63] mt-1">Curved European silhouettes drafted with mathematical harmony.</p>
            </div>
            <div className="bg-white p-5 border border-[#D1C7BB]">
              <span className="text-[9px] font-mono text-[#A6865A] uppercase block">Pillar 02</span>
              <h4 className="font-serif text-base uppercase text-[#191816] mt-1">Tactile Materials</h4>
              <p className="text-[11px] text-[#736B63] mt-1">Heavy bouclé, Italian linens, solid Canaletto walnut, brushed brass.</p>
            </div>
            <div className="bg-white p-5 border border-[#D1C7BB]">
              <span className="text-[9px] font-mono text-[#A6865A] uppercase block">Pillar 03</span>
              <h4 className="font-serif text-base uppercase text-[#191816] mt-1">Bespoke Millimeter</h4>
              <p className="text-[11px] text-[#736B63] mt-1">Custom dimensions calibrated around your specific architectural blueprints.</p>
            </div>
            <div className="bg-white p-5 border border-[#D1C7BB]">
              <span className="text-[9px] font-mono text-[#A6865A] uppercase block">Pillar 04</span>
              <h4 className="font-serif text-base uppercase text-[#191816] mt-1">Indian Mastery</h4>
              <p className="text-[11px] text-[#736B63] mt-1">Seasoned indigenous hardwoods and master Indian hand-upholstery.</p>
            </div>
          </div>
        </MotionFadeIn>
      </section>

      {/* 3. FLAGSHIP SPOTLIGHT: THE VELORA */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <MotionFadeIn distance={24} duration={0.8} className="relative group">
              <div className="aspect-[16/10] bg-[#EFECE6] border border-[#E6DFD5] overflow-hidden">
                <img
                  src={flagship.images.hero}
                  alt={flagship.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="absolute top-4 left-4 bg-[#191816] text-[#FBF9F5] px-3.5 py-1.5 text-[10px] tracking-[0.2em] uppercase font-medium">
                Flagship Collection
              </div>
            </MotionFadeIn>
          </div>

          <div className="lg:col-span-5">
            <MotionFadeIn distance={24} delay={0.15} duration={0.8} className="space-y-6">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#A6865A] font-semibold block mb-1">
                {flagship.primaryCategory}
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#191816] tracking-[0.05em] uppercase font-light">
                {flagship.name}
              </h2>
              <p className="font-serif italic text-lg text-[#736B63] mt-1">
                {flagship.tagline}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#4A453F] leading-relaxed">
              The continuous curved profile that transformed Indian luxury living spaces. Soft contemporary contours, generous wraparound back, and pocketed feather-down comfort that eliminates right angles.
            </p>

            <div className="border-t border-b border-[#E6DFD5] py-3.5 flex justify-between items-center text-xs">
              <span className="text-[#736B63] uppercase tracking-wider">Catalogue Starting Price</span>
              <span className="font-serif text-xl text-[#191816] font-medium">₹1,65,000 – ₹3,20,000</span>
            </div>

            {/* Direct Links */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                id="home-explore-velora-btn"
                onClick={() => navigateToProduct(flagship.id)}
                className="flex-1 bg-[#191816] hover:bg-[#2C2926] text-[#FBF9F5] py-3.5 px-6 text-xs tracking-[0.2em] uppercase font-medium flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <span>Discover The Velora</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880]" />
              </button>
              
              <button
                onClick={() => {
                  setSelectedCategory('SOFAS');
                  setCurrentView('category-view');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="border border-[#191816] text-[#191816] hover:bg-[#F4EFEB] py-3.5 px-5 text-xs tracking-[0.16em] uppercase flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Browse All Sofas</span>
              </button>
            </div>
            </MotionFadeIn>
          </div>

        </div>
      </section>

      {/* 4. ARCHITECTURAL CRAFTSMANSHIP & BESPOKE STANDARDS */}
      <section className="bg-[#191816] text-[#FBF9F5] py-20 lg:py-24 border-y border-[#2C2926] relative overflow-hidden">
        <MotionFadeIn distance={24} duration={0.8} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs tracking-[0.3em] uppercase text-[#C5A880] font-semibold flex items-center gap-2">
                <Compass className="w-4 h-4" />
                <span>The Architectural Standard</span>
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl uppercase tracking-wider font-light leading-tight">
                Designed for the exact contours of your home.
              </h2>

              <p className="font-serif italic text-lg text-[#D1C7BB]">
                "Every residential floor plan has its own light, volume, and rhythm. Your furniture should reflect that."
              </p>

              <div className="bg-[#2C2926] p-5 border border-[#3E3A36] space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-[#FBF9F5] uppercase tracking-wider">
                    Bespoke Millimeter Precision
                  </span>
                  <span className="text-[#C5A880] font-bold">100% CUSTOM</span>
                </div>
                <p className="text-xs text-[#968E85] leading-relaxed">
                  We customize frame lengths, seat depths, and incline ergonomics to harmonize with your living room dimensions, ceiling height, and entryway clearances.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-[11px] text-[#C5A880]">
                  <span>✓ Sal & Teak Seasoned Hardwood</span>
                  <span>✓ High-Resilience Dual-Density Core</span>
                  <span>✓ White-Glove In-Home Placement</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-1">
                <button
                  id="home-explore-categories-btn"
                  onClick={() => {
                    setSelectedCategory('ALL');
                    setCurrentView('category-view');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-[#C5A880] hover:bg-[#A6865A] text-[#191816] px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold inline-flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg"
                >
                  <span>Explore Furniture Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setCurrentView('bespoke');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="border border-[#736B63] hover:border-white text-white px-6 py-4 text-xs tracking-[0.18em] uppercase transition-colors cursor-pointer text-center"
                >
                  Bespoke Consultation
                </button>
              </div>
            </div>

            {/* Architectural Detail Callout */}
            <div className="lg:col-span-6 bg-[#23201D] border border-[#3E3A36] p-8 shadow-2xl space-y-6">
              <div className="border-b border-[#3E3A36] pb-4 flex justify-between items-center">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#968E85]">Handcrafted in New Delhi NCR</span>
                <span className="text-[10px] font-mono text-[#C5A880]">4–6 WEEKS TURNAROUND</span>
              </div>

              <div className="space-y-4">
                <p className="font-serif italic text-sm text-[#D1C7BB]">
                  "Craftsmanship refined through generations of Indian joinery and tailoring masters."
                </p>
                <div className="grid grid-cols-3 gap-3 text-center text-xs text-[#D1C7BB]">
                  <div className="bg-[#191816] p-3.5 border border-[#3E3A36]">
                    <span className="text-[#C5A880] font-mono block text-base font-bold">100%</span>
                    <span className="text-[10px] uppercase text-[#736B63]">Solid Hardwood</span>
                  </div>
                  <div className="bg-[#191816] p-3.5 border border-[#3E3A36]">
                    <span className="text-[#C5A880] font-mono block text-base font-bold">50mm</span>
                    <span className="text-[10px] uppercase text-[#736B63]">Pirelli Webbing</span>
                  </div>
                  <div className="bg-[#191816] p-3.5 border border-[#3E3A36]">
                    <span className="text-[#C5A880] font-mono block text-base font-bold">10 Yrs</span>
                    <span className="text-[10px] uppercase text-[#736B63]">Structural Warranty</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-[#968E85] border-t border-[#3E3A36] pt-4 leading-relaxed">
                Dedicated White-Glove in-home installation across Delhi NCR, Mumbai, Bengaluru, Hyderabad, and Pune. We unpack, align, and position each piece to your architectural floor plan.
              </div>
            </div>

          </div>
        </MotionFadeIn>
      </section>

      {/* 5. EDITORIAL PIECE: WHY WAIT FOR ITALY? */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFadeIn distance={24} duration={0.8} className="border border-[#E6DFD5] bg-white p-8 sm:p-14 space-y-6">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#A6865A] font-semibold block">
            Campaign Narrative
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#191816] tracking-[0.04em] uppercase font-light leading-tight">
            Why Wait For Italy?
          </h2>

          <p className="font-serif italic text-xl text-[#736B63]">
            "Luxury has never belonged to a postcode. You don't need to import the idea of luxury."
          </p>

          <div className="space-y-4 text-xs sm:text-sm text-[#4A453F] leading-relaxed pt-2">
            <p>
              For decades, Indian luxury homeowners faced a painful compromise: wait 20 weeks for imported European furniture with rigid catalogue dimensions and zero customization—or settle for domestic mass production lacking international design sensibility.
            </p>
            <p>
              <strong>House Of Form dissolves that trade-off.</strong> We pair contemporary Italian and European design language with seasoned Indian hardwood joinery and master tailoring. Your furniture is crafted specifically around your villa blueprints, your ceiling heights, and your space.
            </p>
            <p className="text-[#191816] font-semibold uppercase tracking-wider text-xs">
              Don't import the furniture. Import the standard.
            </p>
          </div>

          <div className="pt-4 border-t border-[#E6DFD5] flex flex-wrap gap-6 text-xs text-[#736B63]">
            <span>✓ 4–6 Weeks Delivery (vs 20 Weeks Import)</span>
            <span>✓ Bespoke Millimeter Proportions</span>
            <span>✓ Dedicated Local After-Sales & Re-upholstery</span>
          </div>
        </MotionFadeIn>
      </section>

      {/* 6. CRAFTED IN INDIA */}
      <section className="bg-[#F4EFEB] py-20 border-t border-[#E6DFD5]">
        <MotionFadeIn distance={24} duration={0.8} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#A6865A] font-semibold block">
                Manufacturing Excellence
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#191816] tracking-[0.05em] uppercase font-light">
                Manufactured in India. Designed Without Compromise.
              </h2>
              <p className="text-xs sm:text-sm text-[#736B63] leading-relaxed">
                India is not our cost-saving compromise; India is our bespoke advantage. In our Gurugram and Delhi NCR workshops, master artisans with generational joinery and tailoring expertise craft each frame by hand.
              </p>
              
              <button
                onClick={() => {
                  setCurrentView('crafted-in-india');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-2 text-xs tracking-[0.2em] uppercase text-[#191816] hover:text-[#A6865A] font-semibold cursor-pointer"
              >
                <span>Read Our Manufacturing Journal</span>
                <ArrowRight className="w-4 h-4 text-[#A6865A]" />
              </button>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] bg-[#E6DFD5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=80"
                  alt="Solid seasoned Indian timber joinery"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] bg-[#E6DFD5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=800&q=80"
                  alt="Master hand upholstery and seam tailoring"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </MotionFadeIn>
      </section>

      {/* 7. FINAL CALLOUT */}
      <section className="py-24 bg-[#191816] text-[#FBF9F5] text-center">
        <MotionFadeIn distance={24} duration={0.8} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] font-semibold">
            Bespoke Creation
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl uppercase tracking-wider font-light">
            Create something that belongs only to you.
          </h2>
          <p className="text-xs sm:text-sm text-[#968E85] max-w-lg mx-auto leading-relaxed">
            Begin by exploring our curated furniture categories or schedule an architectural consultation to customize dimensions, fabrics, and finishes for your residence.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                setCurrentView('category-view');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#C5A880] hover:bg-[#A6865A] text-[#191816] px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold transition-all cursor-pointer shadow-md"
            >
              Explore Furniture Catalog
            </button>
            <button
              onClick={() => {
                setCurrentView('bespoke');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="border border-[#736B63] hover:border-white text-white px-8 py-4 text-xs tracking-[0.18em] uppercase transition-colors cursor-pointer"
            >
              Schedule Bespoke Consultation
            </button>
          </div>
        </MotionFadeIn>
      </section>

    </div>
  );
};
