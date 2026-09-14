/**
 * House Of Form — Bespoke & Crafted In India Showcase
 * Articulating the strategic thesis: Global Design. Indian Intelligence. Bespoke to You.
 */

import React from 'react';
import { useStore } from '../context/StoreContext';
import { ShieldCheck, Ruler, Layers, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MotionFadeIn } from './MotionFadeIn';

export const CraftedInIndiaView: React.FC = () => {
  const { setCurrentView, setIsReservationModalOpen } = useStore();

  return (
    <div className="bg-[#FBF9F5] text-[#191816] min-h-screen pb-20">
      
      {/* Editorial Header */}
      <div className="bg-[#191816] text-[#FBF9F5] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#2C2926]">
        <MotionFadeIn distance={24} duration={0.8} className="max-w-4xl mx-auto space-y-4">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] font-semibold">
            Bespoke Philosophy
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl uppercase tracking-wider font-light leading-tight">
            Global Design.<br />Indian Intelligence.<br /><span className="text-[#C5A880]">Bespoke to You.</span>
          </h1>
          <p className="font-serif italic text-lg text-[#D1C7BB]">
            "We do not position ourselves as an Italian alternative in a cheap sense. We build the standard right here."
          </p>
        </MotionFadeIn>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Core Thesis */}
        <MotionFadeIn distance={20} duration={0.7} delay={0.1}>
          <section className="bg-white border border-[#D1C7BB] p-8 sm:p-12 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-wider text-[#191816]">
              The Problem With Imported Luxury
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#4A453F] leading-relaxed">
              <p>
                When an Indian client purchases high-end European furniture from Milan or Paris, the invoice is loaded with 40% international freight, import tariffs, and multi-tier agent markups. Then comes the 18 to 24-week shipping wait.
              </p>
              <p>
                Worst of all: the sofa arrives in predetermined European catalogue sizes that cannot adapt to Indian room layouts, elevator service shafts, or seasonal humidity shifts. If upholstery tears five years later, service is practically nonexistent.
              </p>
              <p>
                <strong>House Of Form was founded to resolve this contradiction.</strong> We design with pure European contemporary restraint, but build every piece in our state-of-the-art Delhi NCR atelier. You get millimeter customization, faster delivery, and direct relationship with the makers.
              </p>
            </div>
          </section>
        </MotionFadeIn>

        {/* 4 Pillars of Bespoke */}
        <MotionFadeIn distance={20} duration={0.7} delay={0.15}>
          <section className="space-y-6">
            <h3 className="font-serif text-2xl uppercase tracking-wider text-[#191816]">
              Bespoke by House Of Form
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#E6DFD5] p-6 space-y-3">
                <Ruler className="w-5 h-5 text-[#A6865A]" />
                <h4 className="font-serif text-lg uppercase text-[#191816]">Custom Millimeter Dimensions</h4>
                <p className="text-xs text-[#736B63] leading-relaxed">
                  Extend a sofa by 35cm to balance an expansive living room gallery, adjust seat height for senior family members, or customize depth for deep lounging.
                </p>
              </div>

              <div className="bg-white border border-[#E6DFD5] p-6 space-y-3">
                <Layers className="w-5 h-5 text-[#A6865A]" />
                <h4 className="font-serif text-lg uppercase text-[#191816]">Curated Tactile Materials</h4>
                <p className="text-xs text-[#736B63] leading-relaxed">
                  Choose from heavyweight Italian bouclés, structured textured linens, Nubuck top-grain hides, and water-repellent performance fabrics tested for Indian lifestyles.
                </p>
              </div>

              <div className="bg-white border border-[#E6DFD5] p-6 space-y-3">
                <Sparkles className="w-5 h-5 text-[#A6865A]" />
                <h4 className="font-serif text-lg uppercase text-[#191816]">Hardwood & Finish Revelations</h4>
                <p className="text-xs text-[#736B63] leading-relaxed">
                  Plinths and exposed timber elements crafted in solid Canaletto walnut or natural smoked oak, finished with brushed brass, champagne bronze, or blackened gunmetal.
                </p>
              </div>

              <div className="bg-white border border-[#E6DFD5] p-6 space-y-3">
                <ShieldCheck className="w-5 h-5 text-[#A6865A]" />
                <h4 className="font-serif text-lg uppercase text-[#191816]">10-Year Generational Warranty</h4>
                <p className="text-xs text-[#736B63] leading-relaxed">
                  Every seasoned Sal and Birch internal frame is structurally guaranteed for 10 years, backed by in-house white-glove maintenance in major Indian metros.
                </p>
              </div>
            </div>
          </section>
        </MotionFadeIn>

        {/* Call to Action */}
        <MotionFadeIn distance={20} duration={0.7} delay={0.2}>
          <section className="bg-[#191816] text-[#FBF9F5] p-8 sm:p-12 text-center space-y-6">
            <h3 className="font-serif text-3xl uppercase tracking-wider font-light">
              Start With The Material Atelier
            </h3>
            <p className="text-xs sm:text-sm text-[#968E85] max-w-md mx-auto">
              Order your curated physical kit. Your ₹1,299 Design Reservation is 100% credited against your final bespoke piece.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsReservationModalOpen(true)}
                className="bg-[#C5A880] hover:bg-[#A6865A] text-[#191816] px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold transition-all cursor-pointer"
              >
                Order Material Atelier (₹1,299)
              </button>
            </div>
          </section>
        </MotionFadeIn>

      </div>
    </div>
  );
};
