/**
 * House Of Form — The Material Atelier Showcase Page
 * Explaining the physical luxury kit: Rigid magnetic box, curated fabrics,
 * timber blocks, metal plates, palette cards, and the ₹1,299 reservation philosophy.
 * Featuring the interactive Material Atelier virtual tour guide with hot-spots.
 */

import React from 'react';
import { useStore } from '../context/StoreContext';
import { Box, Layers, ShieldCheck, Sparkles, CheckCircle, ArrowRight, Compass, QrCode } from 'lucide-react';
import { MaterialTourGuide } from './MaterialTourGuide';
import { MotionFadeIn } from './MotionFadeIn';

export const MaterialAtelierPage: React.FC = () => {
  const { veloraAtelier, materials, setIsReservationModalOpen, setCurrentView, settings } = useStore();

  const handleOpenReservation = () => {
    setIsReservationModalOpen(true);
  };

  return (
    <div className="bg-[#FBF9F5] text-[#191816]">
      
      {/* 1. Atelier Hero Section */}
      <section className="relative bg-[#191816] text-[#FBF9F5] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionFadeIn distance={20} duration={0.9}>
            <div className="max-w-3xl space-y-6">
              <span className="text-xs tracking-[0.3em] uppercase text-[#C5A880] font-semibold flex items-center gap-2">
                <Box className="w-4 h-4" />
                <span>A Considered Material Experience</span>
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[0.04em] uppercase font-light leading-tight">
                The Material Atelier
              </h1>
              <p className="font-serif italic text-xl text-[#D1C7BB]">
                "Luxury begins with what you choose to touch."
              </p>
              <p className="text-sm sm:text-base text-[#968E85] leading-relaxed max-w-2xl">
                Before you choose the final piece, experience the physical textures, weaves, and finishes that bring it to life in your space. Curated by House Of Form for clients making a Product Design Reservation.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  id="atelier-hero-reserve-btn"
                  onClick={handleOpenReservation}
                  className="bg-[#C5A880] hover:bg-[#A6865A] text-[#191816] px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-md"
                >
                  <span>Reserve The Material Atelier (₹{settings.reservationAmount.toLocaleString('en-IN')})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('material-virtual-tour');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border border-[#736B63] hover:border-white text-[#D1C7BB] hover:text-white px-6 py-4 text-xs tracking-[0.16em] uppercase flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                >
                  <Compass className="w-4 h-4 text-[#C5A880]" />
                  <span>Start Virtual Tour</span>
                </button>
              </div>
            </div>
          </MotionFadeIn>
        </div>
      </section>

      {/* 2. Interactive Virtual Tour Guide Component (Requirement 2) */}
      <MaterialTourGuide />

      {/* 3. The Philosophy: Why This Is NOT a "Free Sample Kit" */}
      <section className="py-16 lg:py-20 border-b border-[#E6DFD5] bg-[#F4EFEB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionFadeIn distance={24}>
            <div className="bg-white border border-[#D1C7BB] p-8 sm:p-12 space-y-6">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#A6865A] font-semibold block">
                The House Of Form Principle
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#191816] tracking-[0.06em] uppercase font-light">
                Why We Do Not Offer "Free Swatch Packets"
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-[#4A453F] leading-relaxed">
                <p>
                  In the era of mass-market ecommerce, random fabric scraps are casually tossed into generic envelopes. They create unnecessary industrial waste, attract low-intent browsing, and reduce the tactile ceremony of luxury furniture to a disposable giveaway.
                </p>
                <p>
                  At House Of Form, every piece is bespoke. A sofa like <strong>The Velora</strong> represents months of architectural design and master craftsmanship. It demands a serious, considered choice.
                </p>
                <p>
                  Therefore, the Material Atelier is unlocked through a <strong>₹{settings.reservationAmount.toLocaleString('en-IN')} Design Reservation</strong>. Your reservation is <strong>100% adjustable against your final purchase</strong>. You are not paying for samples; you are establishing a committed design dialogue with our atelier, unlocking a physical material library custom-assembled for your residence.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E6DFD5] text-xs">
                <div className="p-3 bg-[#F4EFEB]">
                  <span className="font-semibold text-[#191816] block mb-1">1. Zero Sample Waste</span>
                  <span className="text-[#736B63]">Curated exclusively for qualified clients considering a bespoke piece.</span>
                </div>
                <div className="p-3 bg-[#F4EFEB]">
                  <span className="font-semibold text-[#191816] block mb-1">2. 100% Adjustable</span>
                  <span className="text-[#736B63]">₹{settings.reservationAmount.toLocaleString('en-IN')} deducted entirely from your final product invoice.</span>
                </div>
                <div className="p-3 bg-[#F4EFEB]">
                  <span className="font-semibold text-[#191816] block mb-1">3. Designer Library</span>
                  <span className="text-[#736B63]">Hand-bound rigid presentation box, solid timber, and metal chips.</span>
                </div>
              </div>
            </div>
          </MotionFadeIn>
        </div>
      </section>

      {/* 4. The Physical Kit Specification */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <MotionFadeIn distance={24}>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#A6865A] font-semibold block">
                Architectural Packaging
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#191816] tracking-[0.06em] uppercase font-light">
                Crafted Like an Archival Library
              </h2>
              <p className="text-xs sm:text-sm text-[#736B63] leading-relaxed mt-2">
                Designed with the restraint of European art editions. Handcrafted in rigid board wrapped in deep tactile charcoal paper, with magnetic closure and debossed blind foil crest.
              </p>

              {/* Packaging Features */}
              <div className="space-y-3 text-xs text-[#2C2926] mt-6">
                <div className="p-3 border border-[#E6DFD5] bg-white flex items-start space-x-3">
                  <span className="font-mono text-[#A6865A] font-bold">01</span>
                  <div>
                    <strong className="block text-[#191816]">Rigid Magnetic Presentation Box</strong>
                    <span className="text-[#736B63]">34 × 25 × 7.5 cm archival case designed to live on your living room coffee table.</span>
                  </div>
                </div>
                <div className="p-3 border border-[#E6DFD5] bg-white flex items-start space-x-3">
                  <span className="font-mono text-[#A6865A] font-bold">02</span>
                  <div>
                    <strong className="block text-[#191816]">Debossed Opening Card</strong>
                    <span className="text-[#736B63]">Inscribed with: <em>"Luxury begins with what you choose to touch."</em></span>
                  </div>
                </div>
                <div className="p-3 border border-[#E6DFD5] bg-white flex items-start space-x-3">
                  <span className="font-mono text-[#A6865A] font-bold">03</span>
                  <div>
                    <strong className="block text-[#191816]">Organized Tactile Compartments</strong>
                    <span className="text-[#736B63]">Weighted fabric cards, solid European timber blocks, and precision metal chips.</span>
                  </div>
                </div>
                <div className="p-3 border border-[#E6DFD5] bg-white flex items-start space-x-3">
                  <span className="font-mono text-[#A6865A] font-bold">04</span>
                  <div>
                    <strong className="block text-[#191816]">The Material Passport & QR Sync</strong>
                    <span className="text-[#736B63]">Every swatch features an archival ID linking directly to its digital specification.</span>
                  </div>
                </div>
              </div>
            </MotionFadeIn>
          </div>

          <div className="lg:col-span-6">
            <MotionFadeIn distance={30} delay={0.15}>
              <div className="aspect-[4/3] bg-[#191816] p-8 border border-[#2C2926] relative overflow-hidden shadow-2xl flex flex-col justify-between text-[#FBF9F5]">
                <div className="border border-[#3E3A36] p-6 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] block">
                      House Of Form
                    </span>
                    <h3 className="font-serif text-3xl tracking-widest uppercase mt-2">
                      The Material Atelier
                    </h3>
                    <p className="font-serif italic text-xs text-[#D1C7BB] mt-1">
                      Bespoke Curated Library
                    </p>
                  </div>

                  <div className="grid grid-cols-4 gap-2 my-6">
                    {materials.slice(0, 4).map((m) => (
                      <div key={m.id} className="aspect-square bg-white/10 border border-white/20 p-1">
                        <img src={m.swatchImage} alt={m.name} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-end border-t border-[#3E3A36] pt-3 text-[10px] text-[#968E85]">
                    <span>Box Dimensions: 34 × 25 × 7.5 cm</span>
                    <span className="text-[#C5A880] font-mono">14 Fabrics • 4 Woods • 3 Metals</span>
                  </div>
                </div>
              </div>
            </MotionFadeIn>
          </div>

        </div>
      </section>

      {/* 5. Palette Suggestions */}
      <section className="bg-[#F4EFEB] py-16 border-t border-[#E6DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionFadeIn distance={20}>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#A6865A] font-semibold block">
                Architectural Harmonies
              </span>
              <h3 className="font-serif text-3xl text-[#191816] tracking-[0.06em] uppercase font-light">
                Curated Material Palettes
              </h3>
              <p className="text-xs text-[#736B63] mt-2">
                Explore how our master upholsterers pair tactile fabrics with timber bases and satin metal reveals.
              </p>
            </div>
          </MotionFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {veloraAtelier.paletteSuggestions.map((pal, idx) => (
              <MotionFadeIn key={pal.id} delay={idx * 0.1} distance={24}>
                <div className="bg-white border border-[#D1C7BB] overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={pal.image} alt={pal.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-[9px] font-mono text-[#A6865A] tracking-wider uppercase">
                        Harmony {pal.id}
                      </span>
                      <h4 className="font-serif text-lg text-[#191816] uppercase mt-1">
                        {pal.title}
                      </h4>
                      <p className="text-xs text-[#736B63] mt-2 leading-relaxed">
                        {pal.description}
                      </p>
                    </div>

                    <button
                      onClick={handleOpenReservation}
                      className="w-full border border-[#191816] hover:bg-[#191816] hover:text-white text-[#191816] py-2.5 text-xs tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      Experience in Atelier Kit
                    </button>
                  </div>
                </div>
              </MotionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final Reserve CTA */}
      <section className="py-20 bg-[#191816] text-[#FBF9F5] text-center">
        <MotionFadeIn distance={20}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] font-semibold">
              Reserve Your Piece
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider font-light">
              Experience the materials before you decide.
            </h2>
            <p className="text-sm text-[#968E85] max-w-xl mx-auto leading-relaxed">
              ₹{settings.reservationAmount.toLocaleString('en-IN')} Design Reservation is 100% adjustable against your final purchase. Unlocks your physical Atelier kit dispatched within 48 hours.
            </p>
            <div>
              <button
                onClick={handleOpenReservation}
                className="bg-[#C5A880] hover:bg-[#A6865A] text-[#191816] px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold inline-flex items-center space-x-2 transition-all cursor-pointer shadow-lg"
              >
                <span>Unlock The Material Atelier</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </MotionFadeIn>
      </section>

    </div>
  );
};
