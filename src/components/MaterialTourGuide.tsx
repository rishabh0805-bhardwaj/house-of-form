/**
 * House Of Form — Interactive Material Atelier Virtual Tour Guide
 * Provides an architectural guided walkthrough across wood grain, upholstery,
 * metal finishes, and natural stone with clickable hot-spots.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Eye,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Maximize2,
  Info,
  Compass,
  ArrowRight,
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

interface Hotspot {
  id: string;
  step: number;
  category: 'wood' | 'upholstery' | 'metal' | 'leather' | 'stone';
  title: string;
  subhead: string;
  badge: string;
  x: number; // percentage from left
  y: number; // percentage from top
  description: string;
  craftNotes: string;
  specs: { label: string; value: string }[];
  image: string;
  textureZoom: string;
}

const TOUR_HOTSPOTS: Hotspot[] = [
  {
    id: 'wood-grain',
    step: 1,
    category: 'wood',
    title: 'Solid Wood Grain & Joinery',
    subhead: 'American Canaletto Walnut & Seasoned Teak',
    badge: 'Solid Timber',
    x: 24,
    y: 42,
    description:
      'Quarter-sawn American Walnut and seasoned Indian Teak timbers. Each slab is inspected for continuous linear grain flow, natural capillary pores, and hand-planed chamfers that soften architectural transitions.',
    craftNotes:
      'Seasoned in temperature-controlled dehumidification kilns until moisture stabilizes under 8%, ensuring zero warping across extreme monsoon or arid seasons.',
    specs: [
      { label: 'Species', value: 'Canaletto Walnut / Burma Teak' },
      { label: 'Moisture Seasoning', value: '7–9% Kiln Stabilized' },
      { label: 'Surface Finish', value: '0% VOC Italian Hardwax Oil' },
      { label: 'Joinery Type', value: 'Mortise & Double Tenon' },
    ],
    image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1000&q=80',
    textureZoom: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'upholstery',
    step: 2,
    category: 'upholstery',
    title: 'Tactile Upholstery Weaves',
    subhead: 'Como Heavy Bouclé & Structured Milanese Linen',
    badge: 'Loom Textiles',
    x: 52,
    y: 28,
    description:
      'Two-tone loop yarn spun on historic looms near Lake Como. Combining organic cotton and virgin wool to create high-relief textural shadows that respond warmly to natural ambient daylight.',
    craftNotes:
      'Treated with an invisible water-based nano-barrier that repels domestic spills while keeping the textile fully breathable and supple to the touch.',
    specs: [
      { label: 'Composition', value: '52% Wool, 38% Cotton, 10% Poly' },
      { label: 'Abrasion Endurance', value: '45,000 Martindale Cycles' },
      { label: 'Pilling Rating', value: 'Grade 4–5 (ISO 12945-2)' },
      { label: 'Weight Density', value: '820 g/m² Heavy Drape' },
    ],
    image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=1000&q=80',
    textureZoom: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'metal-finish',
    step: 3,
    category: 'metal',
    title: 'Architectural Metal Finishes',
    subhead: 'Brushed Champagne Brass & Patinated Bronze',
    badge: 'Precision Alloy',
    x: 76,
    y: 66,
    description:
      'Precision architectural metal components machined from solid billets. Hand-abraded with microscopic hairline brush passes, followed by vacuum Physical Vapor Deposition (PVD) to permanently bond the metallic hue.',
    craftNotes:
      'Finished with a crystalline aerospace lacquer that prevents tarnishing, fingerprint smudging, and corrosion in coastal climates.',
    specs: [
      { label: 'Base Metal', value: 'Solid C360 Architectural Brass' },
      { label: 'Brush Pattern', value: 'Uni-directional Satin Hairline' },
      { label: 'Bonding Process', value: 'High-Vacuum PVD Sputtering' },
      { label: 'Corrosion Shield', value: 'Anti-Oxidation Crystalline Seal' },
    ],
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80',
    textureZoom: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'leather-grain',
    step: 4,
    category: 'leather',
    title: 'Full-Grain Pebble Leather',
    subhead: 'Vicenza Semi-Aniline Saddle Hide',
    badge: 'Italian Hides',
    x: 36,
    y: 74,
    description:
      'Carefully selected full-grain hides tanned in Vicenza, Italy. Uncorrected grain preserves authentic neck wrinkles and natural hair follicles, creating a living surface that burnishes into a warm patina.',
    craftNotes:
      'Drum-dyed with vegetable oils for 48 continuous hours. Softened with rounded edge beveling and heavy gauge saddle-stitch thread.',
    specs: [
      { label: 'Hide Origin', value: 'Alpine European Steers' },
      { label: 'Thickness Caliber', value: '1.4 – 1.6 mm Substantial' },
      { label: 'Tannage System', value: 'Semi-Aniline Chrome-Free' },
      { label: 'Breathability', value: '100% Open Natural Capillary' },
    ],
    image: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&w=1000&q=80',
    textureZoom: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'stone-masonry',
    step: 5,
    category: 'stone',
    title: 'Monolithic Natural Stone',
    subhead: 'Roman Silver Travertine & Honed Marble',
    badge: 'Geological Stone',
    x: 64,
    y: 48,
    description:
      'Monolithic slabs quarried in Tivoli, Italy. Natural geological cavities are stabilized with transparent resin while the surface is honed to an ultra-smooth matte silk sheen.',
    craftNotes:
      'Hand-bullnosed along perimeter edges with zero sharp right angles. Sealed with penetrating food-safe fluoropolymer sealer.',
    specs: [
      { label: 'Geological Class', value: 'Sedimentary Calcite Travertine' },
      { label: 'Surface Sheen', value: 'Honed Silk Matte (No Glare)' },
      { label: 'Cavity Fill', value: 'Optically Clear Resinated' },
      { label: 'Porosity Seal', value: 'Nano Oleophobic Impregnator' },
    ],
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80',
    textureZoom: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80',
  },
];

export const MaterialTourGuide: React.FC = () => {
  const { setIsReservationModalOpen } = useStore();
  const [activeHotspotId, setActiveHotspotId] = useState<string>('wood-grain');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);

  const activeHotspot =
    TOUR_HOTSPOTS.find((h) => h.id === activeHotspotId) || TOUR_HOTSPOTS[0];

  const filteredHotspots =
    activeCategoryFilter === 'all'
      ? TOUR_HOTSPOTS
      : TOUR_HOTSPOTS.filter((h) => h.category === activeCategoryFilter);

  const handleNext = () => {
    const currentIndex = TOUR_HOTSPOTS.findIndex((h) => h.id === activeHotspot.id);
    const nextIndex = (currentIndex + 1) % TOUR_HOTSPOTS.length;
    setActiveHotspotId(TOUR_HOTSPOTS[nextIndex].id);
  };

  const handlePrev = () => {
    const currentIndex = TOUR_HOTSPOTS.findIndex((h) => h.id === activeHotspot.id);
    const prevIndex = (currentIndex - 1 + TOUR_HOTSPOTS.length) % TOUR_HOTSPOTS.length;
    setActiveHotspotId(TOUR_HOTSPOTS[prevIndex].id);
  };

  return (
    <section
      id="material-virtual-tour"
      className="py-16 sm:py-24 bg-[#191816] text-[#FBF9F5] border-y border-[#2C2926] relative overflow-hidden"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#332F2B]">
          <div className="space-y-2.5 max-w-2xl">
            <span className="inline-flex items-center space-x-2 text-[10px] tracking-[0.3em] uppercase text-[#C5A880] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Material Atelier Tour</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider font-light text-white">
              Virtual Material Walkthrough
            </h2>
            <p className="text-xs sm:text-sm text-[#968E85] leading-relaxed">
              Explore the tactile anatomy of House Of Form furniture. Click the architectural hot-spots across the workbench to inspect wood grain, loom textiles, metal finishes, and natural stones.
            </p>
          </div>

          {/* Tour Step Controller */}
          <div className="flex items-center space-x-3 bg-[#23201D] border border-[#3E3A36] px-4 py-2 self-start md:self-auto shadow-sm">
            <div className="text-right">
              <span className="text-[9px] uppercase tracking-widest text-[#736B63] block">
                Tour Position
              </span>
              <span className="font-mono text-xs text-[#C5A880] font-bold">
                0{activeHotspot.step} / 0{TOUR_HOTSPOTS.length}
              </span>
            </div>
            <div className="h-6 w-[1px] bg-[#3E3A36]" />
            <div className="flex items-center space-x-1">
              <button
                onClick={handlePrev}
                className="p-1.5 hover:bg-[#3E3A36] text-[#D1C7BB] hover:text-white transition-colors cursor-pointer rounded-xs"
                title="Previous Hotspot"
                aria-label="Previous Hotspot"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-1.5 hover:bg-[#3E3A36] text-[#D1C7BB] hover:text-white transition-colors cursor-pointer rounded-xs"
                title="Next Hotspot"
                aria-label="Next Hotspot"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Category Tabs */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-[10px] uppercase tracking-wider text-[#736B63] mr-2">
            Inspect Family:
          </span>
          {[
            { id: 'all', label: 'All Hot-Spots' },
            { id: 'wood', label: 'Wood Grain' },
            { id: 'upholstery', label: 'Loom Textiles' },
            { id: 'metal', label: 'Metal Finishes' },
            { id: 'leather', label: 'Full-Grain Leather' },
            { id: 'stone', label: 'Natural Stone' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveCategoryFilter(tab.id);
                if (tab.id !== 'all') {
                  const firstMatch = TOUR_HOTSPOTS.find((h) => h.category === tab.id);
                  if (firstMatch) setActiveHotspotId(firstMatch.id);
                }
              }}
              className={`px-3.5 py-1.5 text-[10px] tracking-[0.18em] uppercase transition-all cursor-pointer ${
                activeCategoryFilter === tab.id
                  ? 'bg-[#C5A880] text-[#191816] font-semibold'
                  : 'bg-[#23201D] text-[#968E85] border border-[#3E3A36] hover:text-white hover:border-[#C5A880]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Tour Grid: Canvas Stage + Deep Dive Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Canvas: Interactive Atelier Workbench Vignette with Hot-Spots */}
          <div className="lg:col-span-7 bg-[#23201D] border border-[#3E3A36] relative overflow-hidden shadow-2xl">
            {/* Visual Header Strip */}
            <div className="px-4 py-2.5 bg-[#191816] border-b border-[#332F2B] flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#968E85]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
                Live Material Stage
              </span>
              <span className="font-mono text-[#C5A880]">CLICK HOTSPOTS TO INSPECT</span>
            </div>

            {/* Interactive Image Frame */}
            <div className="relative aspect-[16/11] bg-[#11100F] overflow-hidden select-none">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85"
                alt="House of Form Material Atelier Workshop Studio"
                className="w-full h-full object-cover opacity-75 filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191816] via-transparent to-transparent opacity-80" />

              {/* Hot-Spot Pins Placed on the Scene */}
              {filteredHotspots.map((spot) => {
                const isActive = spot.id === activeHotspot.id;
                return (
                  <div
                    key={spot.id}
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <button
                      onClick={() => setActiveHotspotId(spot.id)}
                      className="group relative flex items-center justify-center cursor-pointer focus:outline-none"
                      aria-label={`Inspect ${spot.title}`}
                    >
                      {/* Pulsing ring */}
                      {isActive && (
                        <span className="absolute w-10 h-10 rounded-full bg-[#C5A880]/35 animate-ping" />
                      )}

                      {/* Outer target ring */}
                      <span
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-transform duration-300 shadow-lg ${
                          isActive
                            ? 'bg-[#C5A880] text-[#191816] scale-110 ring-2 ring-white/60'
                            : 'bg-[#191816]/90 text-[#FBF9F5] border border-[#C5A880]/60 hover:scale-105 hover:bg-[#C5A880] hover:text-[#191816]'
                        }`}
                      >
                        0{spot.step}
                      </span>

                      {/* Tooltip Label on Hover / Active */}
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 top-9 pointer-events-none whitespace-nowrap px-2.5 py-1 bg-[#191816]/95 border text-[9px] tracking-[0.16em] uppercase font-medium transition-all duration-300 z-30 shadow-md ${
                          isActive
                            ? 'opacity-100 translate-y-0 border-[#C5A880] text-[#C5A880]'
                            : 'opacity-0 group-hover:opacity-100 translate-y-1 border-[#3E3A36] text-[#D1C7BB]'
                        }`}
                      >
                        {spot.badge} • {spot.title}
                      </div>
                    </button>
                  </div>
                );
              })}

              {/* Canvas Overlay Footnote */}
              <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-[10px] tracking-wider uppercase text-[#D1C7BB]/80 bg-[#191816]/80 backdrop-blur-xs px-3 py-1.5 border border-[#3E3A36]">
                <span className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#C5A880]" />
                  Active Focus: <strong className="text-white ml-1">{activeHotspot.title}</strong>
                </span>
                <span className="hidden sm:inline text-[#C5A880] font-mono">
                  {activeHotspot.subhead}
                </span>
              </div>
            </div>

            {/* Carousel Thumbnails Bar */}
            <div className="p-3 bg-[#1E1C1A] border-t border-[#332F2B] grid grid-cols-5 gap-2">
              {TOUR_HOTSPOTS.map((h) => {
                const isActive = h.id === activeHotspot.id;
                return (
                  <button
                    key={h.id}
                    onClick={() => setActiveHotspotId(h.id)}
                    className={`p-2 text-left border transition-all cursor-pointer flex flex-col justify-between h-16 ${
                      isActive
                        ? 'border-[#C5A880] bg-[#2C2926]'
                        : 'border-[#332F2B] bg-[#191816] hover:border-[#736B63] opacity-75 hover:opacity-100'
                    }`}
                  >
                    <span className="text-[8px] font-mono text-[#C5A880]">0{h.step}</span>
                    <span className="text-[9px] uppercase tracking-wider text-white line-clamp-1 font-medium">
                      {h.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Material Specification & Macro Texture Inspector */}
          <div className="lg:col-span-5 bg-[#23201D] border border-[#3E3A36] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHotspot.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                {/* Header info */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] font-semibold">
                      Hot-spot 0{activeHotspot.step} • {activeHotspot.badge}
                    </span>
                    <span className="text-[9px] font-mono text-[#968E85] uppercase bg-[#191816] px-2 py-0.5 border border-[#332F2B]">
                      Verified Standard
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-white uppercase tracking-wide mt-1.5">
                    {activeHotspot.title}
                  </h3>
                  <p className="font-serif italic text-xs text-[#D1C7BB] mt-1">
                    {activeHotspot.subhead}
                  </p>
                </div>

                {/* Macro Texture Preview Banner with Magnifier */}
                <div className="relative aspect-[16/8] bg-[#191816] border border-[#3E3A36] overflow-hidden group">
                  <img
                    src={activeHotspot.image}
                    alt={activeHotspot.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191816]/90 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] text-[#D1C7BB]">
                    <span className="uppercase tracking-widest text-[#C5A880] font-mono">
                      Architectural Macro Grain
                    </span>
                    <button
                      onClick={() => setIsZoomModalOpen(true)}
                      className="inline-flex items-center gap-1 bg-[#191816]/90 hover:bg-[#C5A880] hover:text-[#191816] px-2 py-1 transition-colors text-[9px] uppercase tracking-wider cursor-pointer border border-white/20"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span>Inspect Texture</span>
                    </button>
                  </div>
                </div>

                {/* Detailed Description */}
                <div className="space-y-2">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#736B63] font-semibold block">
                    Material Story & Tactility
                  </span>
                  <p className="text-xs text-[#D1C7BB] leading-relaxed">
                    {activeHotspot.description}
                  </p>
                </div>

                {/* Craftsmanship Note */}
                <div className="p-3.5 bg-[#1C1A18] border border-[#332F2B] text-xs space-y-1">
                  <div className="flex items-center space-x-1.5 text-[#C5A880] text-[10px] font-semibold uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Atelier Joinery Standard</span>
                  </div>
                  <p className="text-[11px] text-[#968E85] leading-relaxed italic">
                    "{activeHotspot.craftNotes}"
                  </p>
                </div>

                {/* Technical Specifications Table */}
                <div className="space-y-2 border-t border-[#332F2B] pt-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#736B63] font-semibold block">
                    Technical Specifications
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {activeHotspot.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="bg-[#191816] p-2.5 border border-[#332F2B] space-y-0.5"
                      >
                        <span className="text-[9px] uppercase text-[#736B63] block font-mono">
                          {spec.label}
                        </span>
                        <span className="text-[11px] text-[#FBF9F5] font-medium">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Action CTA */}
            <div className="pt-2 border-t border-[#332F2B] flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setIsReservationModalOpen(true)}
                className="flex-1 bg-[#C5A880] hover:bg-[#A6865A] text-[#191816] py-3 px-4 text-xs tracking-[0.2em] uppercase font-semibold flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-md"
              >
                <span>Reserve Material Atelier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              
              <button
                onClick={handleNext}
                className="border border-[#3E3A36] hover:border-[#D1C7BB] text-[#D1C7BB] hover:text-white py-3 px-4 text-xs tracking-[0.16em] uppercase flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
              >
                <span>Next Hot-Spot</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Texture Magnifier Modal */}
      {isZoomModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4">
          <div className="bg-[#191816] border border-[#3E3A36] max-w-xl w-full p-6 text-[#FBF9F5] space-y-4 shadow-2xl relative">
            <div className="flex justify-between items-center border-b border-[#332F2B] pb-3">
              <div>
                <h4 className="font-serif text-lg uppercase tracking-wider text-white">
                  {activeHotspot.title}
                </h4>
                <p className="text-[10px] text-[#C5A880] uppercase tracking-widest font-mono">
                  High-Resolution Tactile Magnification
                </p>
              </div>
              <button
                onClick={() => setIsZoomModalOpen(false)}
                className="text-[#968E85] hover:text-white text-xs uppercase tracking-wider px-2 py-1 cursor-pointer"
              >
                Close ✕
              </button>
            </div>

            <div className="aspect-[4/3] bg-black overflow-hidden border border-[#332F2B]">
              <img
                src={activeHotspot.textureZoom}
                alt={`${activeHotspot.title} high resolution texture`}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xs text-[#968E85] leading-relaxed">
              Included within the physical Material Atelier archival box delivered in 48 hours for design reservations.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
