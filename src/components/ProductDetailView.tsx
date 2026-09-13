/**
 * House Of Form — Flagship Product Detail View
 * The Velora — Bespoke Curved Lounge Sofa Collection
 * Architectural editorial layout with separate photo angles,
 * proposed dimension sheets, configuration selector, and Material Atelier trigger.
 */

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { ProductVariant } from '../types';
import {
  Box,
  Check,
  ChevronRight,
  Shield,
  Ruler,
  Layers,
  Sparkles,
  PhoneCall,
  Info,
  Truck,
  HeartHandshake,
  Compass,
  ArrowUpRight,
} from 'lucide-react';
import { ConsultationModal } from './ConsultationModal';

export const ProductDetailView: React.FC = () => {
  const {
    products,
    selectedProductId,
    materials,
    finishes,
    setIsReservationModalOpen,
    settings,
    recordAnalyticsEvent,
    setCurrentView,
  } = useStore();

  const product = products.find((p) => p.id === selectedProductId) || products[0];

  const [activeVariantId, setActiveVariantId] = useState<string>(
    product.variants.find((v) => v.isPopular)?.id || product.variants[0].id
  );
  const [activeImageKey, setActiveImageKey] = useState<'hero' | 'front' | 'threeQuarter' | 'side' | 'rear' | 'detail' | 'lifestyle'>('hero');
  const [dimensionUnit, setDimensionUnit] = useState<'cm' | 'in'>('cm');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const activeVariant =
    product.variants.find((v) => v.id === activeVariantId) || product.variants[0];

  const compatibleMaterials = materials.filter((m) =>
    product.compatibleMaterialIds.includes(m.id)
  );

  const compatibleFinishes = finishes.filter((f) =>
    product.compatibleFinishIds.includes(f.id)
  );

  const handleOpenReservation = () => {
    recordAnalyticsEvent('atelierInteractions');
    setIsReservationModalOpen(true);
  };

  const reservationAmount = settings.reservationAmount; // default ₹1,299
  const remainingAmount = activeVariant.basePrice - reservationAmount;

  return (
    <div className="bg-[#FBF9F5] text-[#191816]">
      {/* Editorial Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="flex items-center space-x-2 text-[10px] tracking-[0.2em] uppercase text-[#736B63]">
          <button onClick={() => setCurrentView('home')} className="hover:text-[#191816]">
            House Of Form
          </button>
          <span>/</span>
          <button onClick={() => setCurrentView('collection')} className="hover:text-[#191816]">
            {product.primaryCategory}
          </button>
          <span>/</span>
          <span className="text-[#191816] font-medium">{product.name}</span>
        </div>
      </div>

      {/* Main Product Hero Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Separate Editorial Product Photography (Strictly separate views, NO collages) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Active Single View */}
            <div className="aspect-[4/3] bg-[#EFECE6] border border-[#E6DFD5] overflow-hidden relative group">
              <img
                src={product.images[activeImageKey]}
                alt={`${product.name} — ${activeImageKey} perspective`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute top-4 left-4 bg-[#191816]/90 backdrop-blur-sm text-[#FBF9F5] px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase font-medium">
                {activeImageKey.toUpperCase()} PERSPECTIVE
              </div>
              <div className="absolute bottom-4 right-4 bg-[#FBF9F5]/90 backdrop-blur-sm text-[#191816] px-3 py-1 text-[9px] tracking-[0.16em] uppercase">
                {product.name} • {activeVariant.name}
              </div>
            </div>

            {/* Separate View Selectors */}
            <div className="grid grid-cols-6 gap-2">
              {(['hero', 'front', 'threeQuarter', 'side', 'rear', 'detail'] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveImageKey(key)}
                  className={`aspect-square border overflow-hidden p-1 transition-all cursor-pointer ${
                    activeImageKey === key
                      ? 'border-[#191816] ring-1 ring-[#191816] bg-white'
                      : 'border-[#D1C7BB] hover:border-[#736B63] opacity-75 hover:opacity-100'
                  }`}
                  title={`${key} angle`}
                >
                  <img
                    src={product.images[key]}
                    alt={`${key} preview`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="pt-2 text-[11px] text-[#736B63] flex items-center justify-between border-t border-[#E6DFD5]">
              <span>Master SKU: <strong className="font-mono text-[#191816]">{product.sku}</strong></span>
              <span>Proprietary Hand-Sculpted Silhouette</span>
            </div>
          </div>

          {/* Right Column: Specifications, Configurations & The Material Atelier Unlock */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#A6865A] font-semibold block mb-1">
                {product.subcategory}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#191816] tracking-[0.05em] uppercase font-light">
                {product.name}
              </h1>
              <p className="font-serif italic text-lg text-[#736B63] mt-1">
                {product.tagline}
              </p>
            </div>

            {/* Price & Accounting Clarity */}
            <div className="p-4 bg-[#F4EFEB] border border-[#D1C7BB]">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#736B63] block">
                    Starting Catalogue Price ({activeVariant.name})
                  </span>
                  <div className="text-2xl sm:text-3xl font-serif text-[#191816] mt-0.5">
                    ₹{activeVariant.basePrice.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[9px] tracking-wider uppercase bg-[#191816] text-[#FBF9F5] px-2.5 py-1 inline-block">
                    Made-To-Order
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-[#736B63] mt-2 border-t border-[#D1C7BB]/60 pt-2">
                White-Glove In-Home Delivery & Placement included in Delhi NCR, Mumbai, Bengaluru, Pune & Hyderabad.
              </p>
            </div>

            {/* Configuration Selector */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#2C2926]">
                  Select Configuration
                </label>
                <span className="text-[10px] text-[#736B63] uppercase">
                  {product.variants.length} Curated Sizes
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setActiveVariantId(v.id)}
                    className={`text-left p-3.5 border transition-all cursor-pointer ${
                      activeVariantId === v.id
                        ? 'border-[#191816] bg-[#191816] text-[#FBF9F5]'
                        : 'border-[#D1C7BB] bg-white text-[#2C2926] hover:border-[#191816]'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold uppercase tracking-wider">{v.name}</span>
                      {v.isPopular && (
                        <span className="text-[9px] bg-[#C5A880] text-[#191816] px-1.5 py-0.5 font-bold uppercase tracking-wider">
                          Flagship
                        </span>
                      )}
                    </div>
                    <p className={`text-[11px] mt-1 ${activeVariantId === v.id ? 'text-[#D1C7BB]' : 'text-[#736B63]'}`}>
                      {v.seatingCapacity}
                    </p>
                    <p className={`text-[10px] font-mono mt-1 ${activeVariantId === v.id ? 'text-[#C5A880]' : 'text-[#191816]'}`}>
                      ₹{v.basePrice.toLocaleString('en-IN')}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* THE CORE MECHANISM: Furniture Reservation Box */}
            <div className="bg-[#191816] text-[#FBF9F5] p-5 sm:p-6 border border-[#2C2926] shadow-md space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2.5">
                  <Sparkles className="w-5 h-5 text-[#C5A880]" />
                  <h3 className="text-xs tracking-[0.2em] uppercase font-semibold text-[#FBF9F5]">
                    Reserve Piece & Lock Production
                  </h3>
                </div>
                <span className="text-[9px] tracking-widest uppercase bg-[#C5A880] text-[#191816] px-2 py-0.5 font-bold">
                  100% Adjustable
                </span>
              </div>

              <p className="text-xs text-[#D1C7BB] leading-relaxed">
                Secure your slot in our bespoke production queue. Each piece is individually bench-crafted to your ordered dimensions and fabric choice.
              </p>

              {/* Clarifying Reservation & Accounting */}
              <div className="bg-[#2C2926] p-3 border border-[#3E3A36] space-y-1.5 text-xs">
                <div className="flex justify-between items-center text-[#FBF9F5]">
                  <span>₹{reservationAmount.toLocaleString('en-IN')} Design Reservation</span>
                  <span className="text-[#C5A880] font-medium text-[11px]">100% Credited</span>
                </div>
                <p className="text-[11px] text-[#968E85] leading-normal">
                  Your ₹{reservationAmount.toLocaleString('en-IN')} reservation is 100% deducted from your final furniture price. (Remaining balance upon dispatch: ₹{remainingAmount.toLocaleString('en-IN')}).
                </p>
              </div>

              {/* Direct CTAs */}
              <div className="space-y-2.5 pt-1">
                <button
                  id="pdp-reserve-piece-cta"
                  onClick={handleOpenReservation}
                  className="w-full bg-[#C5A880] hover:bg-[#A6865A] text-[#191816] py-3.5 px-6 text-xs tracking-[0.2em] uppercase font-semibold flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-sm"
                >
                  <Check className="w-4 h-4" />
                  <span>Reserve Piece (₹{reservationAmount.toLocaleString('en-IN')})</span>
                </button>
                <button
                  id="pdp-speak-consultant-btn"
                  onClick={() => setIsConsultationOpen(true)}
                  className="w-full border border-[#736B63] hover:border-[#D1C7BB] text-[#D1C7BB] hover:text-white py-2.5 px-4 text-xs tracking-[0.16em] uppercase flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Speak to a Design Consultant</span>
                </button>
              </div>

              <div className="text-[10px] text-[#968E85] pt-1 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <span>Having second thoughts on fabric? Reserving this piece unlocks our complimentary tactile Swatch Kit before production begins.</span>
              </div>
            </div>

            {/* Quick Specs List */}
            <div className="border-t border-[#E6DFD5] pt-4 space-y-2.5 text-xs text-[#4A453F]">
              <div className="flex justify-between py-1 border-b border-[#E6DFD5]/60">
                <span className="text-[#736B63] uppercase text-[10px] tracking-wider">Silhouette</span>
                <span className="font-medium text-[#191816]">{product.attributes.silhouette}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E6DFD5]/60">
                <span className="text-[#736B63] uppercase text-[10px] tracking-wider">Back Construction</span>
                <span className="font-medium text-[#191816]">{product.attributes.back}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E6DFD5]/60">
                <span className="text-[#736B63] uppercase text-[10px] tracking-wider">Arm Detail</span>
                <span className="font-medium text-[#191816]">{product.attributes.arm}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E6DFD5]/60">
                <span className="text-[#736B63] uppercase text-[10px] tracking-wider">Base & Plinth</span>
                <span className="font-medium text-[#191816]">{product.attributes.base}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Editorial Section: Product Story & Design Philosophy */}
      <section className="bg-[#F4EFEB] border-y border-[#E6DFD5] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-4 space-y-4">
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#A6865A] font-semibold block">
                The Design Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#191816] tracking-[0.05em] uppercase font-light leading-tight">
                Furniture should define a space, not simply occupy it.
              </h2>
              <p className="font-serif italic text-[#736B63] text-lg">
                "We designed The Velora to eradicate the aggressive right angle from contemporary living rooms."
              </p>
            </div>

            <div className="lg:col-span-8 space-y-6 text-[#2C2926] text-sm sm:text-[15px] leading-relaxed">
              <p>{product.productStory}</p>
              <p>{product.designPhilosophy}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#D1C7BB]">
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#191816]">
                    Ergonomic Comfort Matrix
                  </h4>
                  <p className="text-xs text-[#736B63] leading-relaxed">
                    {product.comfortStory}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#191816]">
                    Indian Craftsmanship Integrity
                  </h4>
                  <p className="text-xs text-[#736B63] leading-relaxed">
                    {product.craftsmanshipNotes}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Technical Drawing & Dimension Sheet Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="border border-[#E6DFD5] bg-white p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E6DFD5] pb-6">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#A6865A] font-semibold block">
                Architectural Specifications
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#191816] tracking-[0.06em] uppercase font-light">
                Proposed Catalogue Dimensions
              </h3>
            </div>

            {/* Unit Toggle */}
            <div className="flex items-center space-x-2 bg-[#F4EFEB] p-1 border border-[#D1C7BB]">
              <button
                onClick={() => setDimensionUnit('cm')}
                className={`px-3 py-1 text-xs tracking-wider uppercase font-medium cursor-pointer ${
                  dimensionUnit === 'cm'
                    ? 'bg-[#191816] text-[#FBF9F5]'
                    : 'text-[#736B63] hover:text-[#191816]'
                }`}
              >
                Metric (CM)
              </button>
              <button
                onClick={() => setDimensionUnit('in')}
                className={`px-3 py-1 text-xs tracking-wider uppercase font-medium cursor-pointer ${
                  dimensionUnit === 'in'
                    ? 'bg-[#191816] text-[#FBF9F5]'
                    : 'text-[#736B63] hover:text-[#191816]'
                }`}
              >
                Imperial (Inches)
              </button>
            </div>
          </div>

          {/* CRITICAL LEGAL / ACCURACY DISCLAIMER */}
          <div className="mt-4 bg-[#FBF9F5] border-l-2 border-[#C5A880] p-3.5 text-xs text-[#736B63] leading-relaxed">
            <strong className="text-[#191816] uppercase tracking-wider text-[10px] block mb-0.5">
              Important Catalogue Notice:
            </strong>
            The dimensions displayed below are <strong>PROPOSED / RECOMMENDED</strong> catalogue dimensions and must not be interpreted as certified manufacturing dimensions. Because each House Of Form piece is bespoke, final approved production dimensions will replace these values during your personal Design Consultation before fabrication commences.
          </div>

          {/* Elevation Diagrams Grid */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Diagram Visualization */}
            <div className="lg:col-span-7 bg-[#F4EFEB] p-8 border border-[#D1C7BB] text-center">
              <div className="max-w-md mx-auto space-y-4">
                <svg viewBox="0 0 400 220" className="w-full h-auto text-[#191816]">
                  {/* Front Elevation Outline of Curved Velora */}
                  <path
                    d="M 30 170 Q 30 100 70 80 Q 200 65 330 80 Q 370 100 370 170 Z"
                    fill="none"
                    stroke="#191816"
                    strokeWidth="2"
                  />
                  {/* Seat Line */}
                  <path
                    d="M 45 135 Q 200 130 355 135"
                    fill="none"
                    stroke="#A6865A"
                    strokeWidth="1.5"
                    strokeDasharray="4,3"
                  />
                  {/* Base Plinth reveal */}
                  <rect x="50" y="170" width="300" height="12" fill="#C5A880" />
                  
                  {/* Dimension Annotations */}
                  <line x1="30" y1="195" x2="370" y2="195" stroke="#736B63" strokeWidth="1" />
                  <text x="200" y="210" fill="#736B63" fontSize="11" textAnchor="middle" fontFamily="sans-serif">
                    Width: {dimensionUnit === 'cm' ? `${activeVariant.dimensions.widthCm} cm` : `${activeVariant.dimensions.widthIn} in`}
                  </text>
                  <line x1="385" y1="80" x2="385" y2="170" stroke="#736B63" strokeWidth="1" />
                  <text x="390" y="130" fill="#736B63" fontSize="10" textAnchor="start" fontFamily="sans-serif">
                    Height: {dimensionUnit === 'cm' ? `${activeVariant.dimensions.heightCm} cm` : `${activeVariant.dimensions.heightIn} in`}
                  </text>
                </svg>

                <p className="text-[10px] tracking-[0.2em] uppercase text-[#736B63]">
                  Schematic Elevation • {activeVariant.name}
                </p>
              </div>
            </div>

            {/* Spec Table */}
            <div className="lg:col-span-5 space-y-3">
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#191816]">
                Dimension Schedule ({activeVariant.name})
              </h4>

              <div className="space-y-2 text-xs border border-[#E6DFD5] p-4 bg-[#FBF9F5]">
                <div className="flex justify-between py-1.5 border-b border-[#E6DFD5]">
                  <span className="text-[#736B63]">Overall Width</span>
                  <span className="font-mono font-medium text-[#191816]">
                    {dimensionUnit === 'cm' ? `${activeVariant.dimensions.widthCm} cm` : `${activeVariant.dimensions.widthIn} in`}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#E6DFD5]">
                  <span className="text-[#736B63]">Overall Depth</span>
                  <span className="font-mono font-medium text-[#191816]">
                    {dimensionUnit === 'cm' ? `${activeVariant.dimensions.depthCm} cm` : `${activeVariant.dimensions.depthIn} in`}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#E6DFD5]">
                  <span className="text-[#736B63]">Overall Height</span>
                  <span className="font-mono font-medium text-[#191816]">
                    {dimensionUnit === 'cm' ? `${activeVariant.dimensions.heightCm} cm` : `${activeVariant.dimensions.heightIn} in`}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#E6DFD5]">
                  <span className="text-[#736B63]">Seat Height from Floor</span>
                  <span className="font-mono font-medium text-[#191816]">
                    {dimensionUnit === 'cm' ? `${activeVariant.dimensions.seatHeightCm} cm` : `${activeVariant.dimensions.seatHeightIn} in`}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#E6DFD5]">
                  <span className="text-[#736B63]">Internal Seat Depth</span>
                  <span className="font-mono font-medium text-[#191816]">
                    {dimensionUnit === 'cm' ? `${activeVariant.dimensions.seatDepthCm} cm` : `${activeVariant.dimensions.seatDepthIn} in`}
                  </span>
                </div>
                {activeVariant.dimensions.armHeightCm && (
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#736B63]">Armrest Height</span>
                    <span className="font-mono font-medium text-[#191816]">
                      {dimensionUnit === 'cm' ? `${activeVariant.dimensions.armHeightCm} cm` : `${activeVariant.dimensions.armHeightIn} in`}
                    </span>
                  </div>
                )}
              </div>

              <p className="text-[11px] text-[#736B63]">
                * Need custom millimeter dimensions for a specific villa layout or architectural niche? House Of Form crafts bespoke sizing upon request.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Curated Material Swatches Available for The Piece */}
      <section className="bg-[#F4EFEB] border-t border-[#E6DFD5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#A6865A] font-semibold block">
                Tactile Library
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#191816] tracking-[0.06em] uppercase font-light">
                Compatible Material Specifications
              </h3>
              <p className="text-xs text-[#736B63] mt-1">
                A selection of certified fabrics and hand-rubbed timber finishes compatible with {product.name}.
              </p>
            </div>

            <button
              onClick={() => {
                setCurrentView('digital-swatches');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-2 text-xs tracking-[0.18em] uppercase text-[#191816] hover:text-[#A6865A] font-medium transition-colors cursor-pointer"
            >
              <span>View Full Swatch Archive</span>
              <ArrowUpRight className="w-4 h-4 text-[#A6865A]" />
            </button>
          </div>

          {/* Swatches Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {compatibleMaterials.slice(0, 4).map((m) => (
              <div key={m.id} className="bg-white border border-[#D1C7BB] p-3 space-y-2">
                <div className="aspect-[4/3] overflow-hidden bg-[#E6DFD5]">
                  <img src={m.swatchImage} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="font-mono text-[#A6865A] font-medium">{m.id}</span>
                    <span className="text-[#736B63] uppercase">{m.family}</span>
                  </div>
                  <h5 className="text-xs font-semibold text-[#191816] mt-0.5">{m.name}</h5>
                  <p className="text-[10px] text-[#736B63] line-clamp-1 mt-0.5">{m.composition}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frame Integrity & Construction Detail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="border border-[#E6DFD5] bg-white p-6 space-y-3">
            <Shield className="w-6 h-6 text-[#A6865A]" />
            <h4 className="font-serif text-xl uppercase tracking-wider text-[#191816]">Kiln-Dried Hardwood Frame</h4>
            <p className="text-xs text-[#736B63] leading-relaxed">
              Constructed from indigenous seasoned Sal and European Birch, double-doweled and reinforced with solid corner glue-blocks for generational stability in Indian climates.
            </p>
          </div>
          <div className="border border-[#E6DFD5] bg-white p-6 space-y-3">
            <Layers className="w-6 h-6 text-[#A6865A]" />
            <h4 className="font-serif text-xl uppercase tracking-wider text-[#191816]">Dual-Density Memory Core</h4>
            <p className="text-xs text-[#736B63] leading-relaxed">
              Combines 42kg/m³ structural memory polyfoam with an upper channel-stitched micro-down envelope, providing immediate soft immersion without surface sagging.
            </p>
          </div>
          <div className="border border-[#E6DFD5] bg-white p-6 space-y-3">
            <Sparkles className="w-6 h-6 text-[#A6865A]" />
            <h4 className="font-serif text-xl uppercase tracking-wider text-[#191816]">Pirelli High-Tensile Webbing</h4>
            <p className="text-xs text-[#736B63] leading-relaxed">
              Italian-manufactured Pirelli elastic suspension webbing crossed at 50mm pitch delivers continuous load distribution and zero mechanical creak over decades of use.
            </p>
          </div>
        </div>
      </section>

      {/* Architectural FAQs */}
      <section className="bg-[#F4EFEB] border-t border-[#E6DFD5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#A6865A] font-semibold block">
              Architectural Queries
            </span>
            <h3 className="font-serif text-3xl text-[#191816] tracking-[0.06em] uppercase font-light">
              Frequently Considered Details
            </h3>
          </div>

          <div className="space-y-4">
            {product.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-[#D1C7BB] p-5 space-y-2">
                <h5 className="text-xs sm:text-[13px] font-semibold text-[#191816] uppercase tracking-wider">
                  {faq.question}
                </h5>
                <p className="text-xs text-[#736B63] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Sticky Bottom Bar for Mobile & Desktop conversion */}
      <div className="sticky bottom-0 z-30 bg-[#191816]/95 backdrop-blur-md border-t border-[#2C2926] py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <div className="flex items-center space-x-2">
              <span className="font-serif text-lg text-[#FBF9F5]">{product.name}</span>
              <span className="text-[#C5A880] text-xs font-mono">• {activeVariant.name}</span>
            </div>
            <p className="text-[11px] text-[#968E85]">
              Starting at ₹{activeVariant.basePrice.toLocaleString('en-IN')} (₹{reservationAmount} reservation is 100% adjustable)
            </p>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="hidden md:inline-flex items-center space-x-1.5 border border-[#736B63] text-[#D1C7BB] hover:text-white px-4 py-2.5 text-[11px] tracking-wider uppercase cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Consultant</span>
            </button>
            <button
              id="sticky-reserve-piece-cta"
              onClick={handleOpenReservation}
              className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#A6865A] text-[#191816] px-5 sm:px-6 py-2.5 text-xs tracking-[0.2em] uppercase font-semibold flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Reserve Piece (₹{reservationAmount.toLocaleString('en-IN')} Credited)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultProduct={`${product.name} (${activeVariant.name})`}
      />
    </div>
  );
};
