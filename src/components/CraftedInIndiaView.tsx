/**
 * House Of Form — Bespoke & Crafted In India Showcase
 * Articulating the strategic thesis: Global Design. Indian Intelligence. Bespoke to You.
 */

import React from 'react';
import { useStore } from '../context/StoreContext';
import {
  ShieldCheck,
  Ruler,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Truck,
  Building2,
  Hammer,
  Clock,
  Compass,
} from 'lucide-react';
import { MotionFadeIn } from './MotionFadeIn';

export const CraftedInIndiaView: React.FC = () => {
  const { setCurrentView, setIsReservationModalOpen } = useStore();

  const comparisonRows = [
    {
      parameter: 'Custom Sizing & Proportions',
      imported: 'Rigid catalogue dimensions only (fixed 240cm or 300cm; no alterations permitted)',
      hof: '100% millimeter bespoke (adjust width, seat depth, and height to match your exact floor plan)',
      hofWins: true,
    },
    {
      parameter: 'Lead Time to Residence',
      imported: '20 to 26 Weeks (Maritime container shipping, port congestion, customs clearance)',
      hof: '3 to 4 Weeks (Crafted in our dedicated New Delhi NCR atelier; fast-track dispatch)',
      hofWins: true,
    },
    {
      parameter: 'Price Transparency & Duty Overheads',
      imported: 'Up to 40% of invoice absorbed by customs tariffs, sea freight, and intermediate markups',
      hof: '100% invested directly into seasoned Sal hardwoods, Italian bouclés, and artisan joinery',
      hofWins: true,
    },
    {
      parameter: 'Indian Climate & Humidity Engineering',
      imported: 'Constructed for temperate European climates; veneers crack in dry heat; foams degrade in monsoon',
      hof: 'Kiln-dried seasoned Sal timber, breathable linen blends, and hydrophobic nanocoatings tested for India',
      hofWins: true,
    },
    {
      parameter: 'Service Elevator & Hoisting Verification',
      imported: 'Zero access verification; client stranded if a 3-meter frame cannot fit into the elevator',
      hof: 'Pre-dispatch access audit; modular internal chassis engineered for narrow elevator shafts when needed',
      hofWins: true,
    },
    {
      parameter: 'Warranty & In-Room White-Glove Support',
      imported: 'Difficult claims requiring overseas parts and multi-month email chains',
      hof: '10-Year Chassis Guarantee with local white-glove technicians in Tier 1 cities within 48 hours',
      hofWins: true,
    },
  ];

  const workshopStations = [
    {
      num: '01',
      title: 'Kiln-Dried Sal & Birch Framing',
      description:
        'Sustainably sourced Indian Sal wood seasoned to 8–10% moisture content. Mortise-and-tenon joinery with double dowel reinforcements guarantees zero frame deflection across 3+ meter spans.',
    },
    {
      num: '02',
      title: 'Italian Pirelli Webbing Grid',
      description:
        'Authentic 50mm elastomeric Italian Pirelli webbing woven in a high-tension matrix. Provides ergonomic micro-suspension that outlasts traditional coil springs by decades.',
    },
    {
      num: '03',
      title: 'Graduated Multi-Density HR Core',
      description:
        'Dual-density 40 kg/m³ high-resilience memory foam core flanked by ultra-soft comfort layers, enveloped in hypoallergenic channel-stitched micro-down to prevent cushion flattening.',
    },
    {
      num: '04',
      title: 'French Top-Stitching & Hand Tailoring',
      description:
        'Generational Indian master tailors hand-shape heavyweight bouclés, textured linens, and full-grain aniline leathers with precision double-needle French top-stitching.',
    },
  ];

  return (
    <div className="bg-[#FBF9F5] text-[#191816] min-h-screen pb-24">
      {/* Editorial Header */}
      <div className="bg-[#191816] text-[#FBF9F5] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#2C2926]">
        <MotionFadeIn distance={24} duration={0.8} className="max-w-5xl mx-auto space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] font-semibold">
              The Strategic Thesis
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl uppercase tracking-wider font-light leading-tight">
            Global Design.<br />
            Indian Intelligence.<br />
            <span className="text-[#C5A880] font-normal">Bespoke to You.</span>
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#D1C7BB] max-w-3xl">
            "We do not position ourselves as an Italian alternative in a cheap sense. We build the global luxury standard right here in India."
          </p>
        </MotionFadeIn>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Core Thesis Section */}
        <section className="bg-white border border-[#D1C7BB] p-8 sm:p-12 space-y-8 shadow-xs">
          <div className="max-w-3xl space-y-3">
            <span className="text-[10px] font-mono text-[#A6865A] uppercase tracking-wider block">
              The Problem With Imported Luxury
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl uppercase tracking-wider text-[#191816]">
              Why Buying European Furniture In India Has Historically Been A Compromise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-[#4A453F] leading-relaxed">
            <div className="space-y-2 border-t border-[#E6DFD5] pt-4">
              <span className="font-mono text-xs font-bold text-[#A6865A]">01 · TARIFF PENALTIES</span>
              <p>
                When an Indian client purchases a high-end European sofa, up to 40% of the price is absorbed by freight, maritime insurance, import customs, and multi-tier agent markups. You are paying European retail prices magnified by friction.
              </p>
            </div>

            <div className="space-y-2 border-t border-[#E6DFD5] pt-4">
              <span className="font-mono text-xs font-bold text-[#A6865A]">02 · THE 6-MONTH WAIT</span>
              <p>
                A 20 to 26-week lead time means your residence sits unfurnished for half a year. When delays occur at Mumbai or Nhava Sheva ports, there is zero visibility into arrival timelines.
              </p>
            </div>

            <div className="space-y-2 border-t border-[#E6DFD5] pt-4">
              <span className="font-mono text-xs font-bold text-[#A6865A]">03 · THE SIZING LOCK-IN</span>
              <p>
                Overseas catalogues are engineered for European domestic room footprints. They cannot adapt to Indian column spans, family seating preferences, or narrow elevator shafts.
              </p>
            </div>
          </div>
        </section>

        {/* SIDE-BY-SIDE COMPARISON TABLE */}
        <section className="space-y-6">
          <div className="border-b border-[#E6DFD5] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-[10px] font-mono text-[#A6865A] uppercase tracking-wider block">
                Comparative Analysis
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl uppercase tracking-wider text-[#191816] mt-1">
                House Of Form vs. Imported European Brands
              </h3>
            </div>
            <span className="text-xs font-mono text-[#736B63]">
              Objective benchmark for architects & luxury homeowners
            </span>
          </div>

          <div className="bg-white border border-[#D1C7BB] overflow-x-auto shadow-xs">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-[#D1C7BB] bg-[#FBF9F5] text-[#191816] font-mono uppercase tracking-wider text-[11px]">
                  <th className="p-4 w-1/4">Specification Parameter</th>
                  <th className="p-4 w-3/8 text-[#736B63]">Imported European Brands</th>
                  <th className="p-4 w-3/8 text-[#191816] bg-[#F4EFEB] font-bold">House Of Form (India)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6DFD5]">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FBF9F5]/80 transition-colors">
                    <td className="p-4 font-semibold text-[#191816] bg-white font-serif text-sm">
                      {row.parameter}
                    </td>
                    <td className="p-4 text-[#736B63] space-y-1">
                      <div className="flex items-start space-x-2">
                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>{row.imported}</span>
                      </div>
                    </td>
                    <td className="p-4 text-[#191816] bg-[#FBF9F5] font-medium space-y-1">
                      <div className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-[#137333] shrink-0 mt-0.5" />
                        <span>{row.hof}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* WORKSHOP BLUEPRINT & JOINERY ANATOMY */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[10px] font-mono text-[#A6865A] uppercase tracking-wider">
              Anatomy of Enduring Furniture
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-wider text-[#191816]">
              Inside Our New Delhi NCR Atelier
            </h2>
            <p className="text-xs sm:text-sm text-[#736B63]">
              Every piece is engineered to survive generations of daily Indian life, monsoon humidity shifts, and lively family gatherings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workshopStations.map((station, idx) => (
              <div key={idx} className="bg-white border border-[#D1C7BB] p-6 space-y-3 shadow-xs">
                <span className="font-mono text-lg font-bold text-[#A6865A] block">{station.num}</span>
                <h4 className="font-serif text-base font-semibold uppercase text-[#191816]">
                  {station.title}
                </h4>
                <p className="text-xs text-[#736B63] leading-relaxed">
                  {station.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PAN-INDIA TIER 1 PRESENCE & EXPERIENCE LOUNGES */}
        <section className="bg-[#191816] text-[#FBF9F5] p-8 sm:p-12 space-y-8 border border-[#2C2926]">
          <div className="max-w-3xl space-y-2">
            <span className="text-[10px] font-mono text-[#C5A880] uppercase tracking-wider">
              Ateliers & Experience Lounges
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl uppercase tracking-wider text-[#FBF9F5]">
              Experience The Collection In Person
            </h2>
            <p className="text-xs sm:text-sm text-[#968E85]">
              Private consultations available by appointment across India’s primary metropolitan design centers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="border border-[#3E3A36] p-5 space-y-2 bg-[#23201D]">
              <span className="text-[10px] font-mono text-[#C5A880] uppercase">Flagship Design Suite</span>
              <h4 className="font-serif text-base uppercase text-[#FBF9F5]">New Delhi NCR</h4>
              <p className="text-[#968E85]">The Gallery on MG, Sultanpur & MG Road Design Corridor</p>
              <span className="text-[11px] text-[#C5A880] font-mono block pt-1">Open Mon–Sat · By Appointment</span>
            </div>

            <div className="border border-[#3E3A36] p-5 space-y-2 bg-[#23201D]">
              <span className="text-[10px] font-mono text-[#C5A880] uppercase">Manufacturing Atelier</span>
              <h4 className="font-serif text-base uppercase text-[#FBF9F5]">Gurugram Workshop</h4>
              <p className="text-[#968E85]">Sector 66, Golf Course Extension Road Design Zone</p>
              <span className="text-[11px] text-[#C5A880] font-mono block pt-1">Workshop Tours For Architects</span>
            </div>

            <div className="border border-[#3E3A36] p-5 space-y-2 bg-[#23201D]">
              <span className="text-[10px] font-mono text-[#C5A880] uppercase">Private Salon</span>
              <h4 className="font-serif text-base uppercase text-[#FBF9F5]">South Mumbai</h4>
              <p className="text-[#968E85]">Worli Sea Face Private Residence & Sample Salon</p>
              <span className="text-[11px] text-[#C5A880] font-mono block pt-1">Private Client Consultations</span>
            </div>

            <div className="border border-[#3E3A36] p-5 space-y-2 bg-[#23201D]">
              <span className="text-[10px] font-mono text-[#C5A880] uppercase">Studio Partner</span>
              <h4 className="font-serif text-base uppercase text-[#FBF9F5]">Bengaluru</h4>
              <p className="text-[#968E85]">Lavelle Road, Central Business District</p>
              <span className="text-[11px] text-[#C5A880] font-mono block pt-1">Material Swatch Archive</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#3E3A36]">
            <button
              onClick={() => setIsReservationModalOpen(true)}
              className="bg-[#C5A880] text-[#191816] px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors cursor-pointer"
            >
              Reserve The Material Atelier Box (₹1,299)
            </button>
            <button
              onClick={() => setCurrentView('bespoke')}
              className="border border-[#736B63] text-[#FBF9F5] px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:border-white transition-colors cursor-pointer"
            >
              Open Bespoke Sizing Studio
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
