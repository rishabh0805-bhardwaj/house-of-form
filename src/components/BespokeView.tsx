/**
 * House Of Form — Bespoke Customization View
 * Articulating custom sizing, architectural millimeter tailoring,
 * tactile material selection, and made-to-order manufacturing.
 */

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import {
  Ruler,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sliders,
  Compass,
  Truck,
  PhoneCall,
  Share2,
  Check,
  Building2,
  Scissors,
} from 'lucide-react';
import { MotionFadeIn } from './MotionFadeIn';
import { ConsultationModal } from './ConsultationModal';

export const BespokeView: React.FC = () => {
  const { setCurrentView, setIsReservationModalOpen, setSelectedProductId } = useStore();

  const [selectedModel, setSelectedModel] = useState<'velora' | 'elyra' | 'avora' | 'architectural'>('velora');
  const [seatingSize, setSeatingSize] = useState<'2s' | '3s' | '4s' | 'custom'>('3s');
  const [customWidthCm, setCustomWidthCm] = useState<number>(245);
  const [customDepthCm, setCustomDepthCm] = useState<number>(92);
  const [customHeightCm, setCustomHeightCm] = useState<number>(44);
  const [fabricChoice, setFabricChoice] = useState<'boucle' | 'linen' | 'chenille' | 'performance' | 'com'>('boucle');
  const [plinthChoice, setPlinthChoice] = useState<'walnut' | 'oak' | 'brass' | 'recessed'>('walnut');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [copiedSpec, setCopiedSpec] = useState(false);

  // Model metadata
  const models = [
    {
      id: 'velora',
      name: 'The Velora',
      type: 'Italian Curved Lounge Sofa',
      productId: 'HOF-SF-VLR-001',
      basePrice: 245000,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=85',
      tagline: 'Continuous soft organic contours with 360° architectural presence.',
    },
    {
      id: 'elyra',
      name: 'The Elyra',
      type: 'Asymmetric Sofa + Timber Table',
      productId: 'HOF-SF-ELY-002',
      basePrice: 285000,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85',
      tagline: 'Sculptural single arm paired with cantilevered natural timber occasional surface.',
    },
    {
      id: 'avora',
      name: 'The Avora',
      type: 'Sculptural Organic Sofa',
      productId: 'HOF-SF-AVR-003',
      basePrice: 265000,
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=85',
      tagline: 'Flowing serpentine lines engineered for double-height architectural salons.',
    },
    {
      id: 'architectural',
      name: 'Full Custom Commission',
      type: 'Bespoke Blueprint Design',
      productId: 'HOF-SF-VLR-001',
      basePrice: 320000,
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85',
      tagline: 'Manufactured to your exact AutoCAD or Revit floor plans and unique client contours.',
    },
  ];

  const activeModelData = models.find((m) => m.id === selectedModel) || models[0];

  const fabrics = [
    { id: 'boucle', name: 'Bouclé Avorio (Ivory Loop)', note: 'Tactile virgin wool blend · 55,000 Martindale', hex: '#F2EDE4' },
    { id: 'linen', name: 'Sabbia Calda (Natural Slub)', note: 'Natural Italian linen-cotton · Cool breathable hand', hex: '#DDD3C4' },
    { id: 'chenille', name: 'Terracotta Antica (Earth Velvet)', note: 'Micro-ribbed chenille · Rich vintage depth', hex: '#B26F56' },
    { id: 'performance', name: 'Scudo Resiliente (Chalk Bone)', note: 'Hydrophobic nanocoat · 100,000 Martindale cycles', hex: '#EAE5DF' },
    { id: 'com', name: 'Customer’s Own Material (COM)', note: 'Provide your curated fabric · We calculate yardage', hex: '#A6865A' },
  ];

  const plinths = [
    { id: 'walnut', name: 'Solid Canaletto Walnut', note: 'Hand-rubbed Italian walnut with espresso grain' },
    { id: 'oak', name: 'European Smoked Oak', note: 'Wire-brushed open-pore natural timber' },
    { id: 'brass', name: 'Brushed Brass Plinth Reveal', note: 'Satin architectural metal perimeter' },
    { id: 'recessed', name: 'Concealed Floating Shadowline', note: 'Monolithic floating aesthetic 4cm recessed' },
  ];

  const bespokeSteps = [
    {
      num: '01',
      title: 'Architectural Blueprint & Spatial Discovery',
      description:
        'Share your floor plan, 3D render, or elevator dimensions. Our technical liaisons evaluate wall sightlines, door thresholds, and ceiling ratios to recommend the optimal curve and length.',
    },
    {
      num: '02',
      title: 'The Material Atelier Swatch Box',
      description:
        'Receive the physical atelier presentation box at your residence within 48 hours. Experience 14 weighted fabric cards, solid timber blocks, and brass chips under your room’s actual morning and evening light.',
    },
    {
      num: '03',
      title: 'Millimeter Dimensional Tailoring',
      description:
        'Every cushion depth, seat height, and overall curve radius is tailored to your family’s posture and living room scale. If your elevator has a 220 cm clearance, we engineer concealed modular steel couplings.',
    },
    {
      num: '04',
      title: 'Master Joinery in New Delhi NCR',
      description:
        'Kiln-dried seasoned Sal hardwood frames, hand-tensioned Pirelli webbing matrices, and dual-density memory foam core enveloped in channel-stitched micro-down, crafted by generational artisans.',
    },
    {
      num: '05',
      title: 'White-Glove Pan-India Commissioning',
      description:
        'Delivered in dedicated climate-protected transit to your home in Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, or Ahmedabad, with complete in-room positioning and packaging removal.',
    },
  ];

  const handleShareCustomization = () => {
    const spec = `HOUSE OF FORM — BESPOKE INQUIRY\nModel: ${activeModelData.name}\nDimensions: ${customWidthCm}cm W × ${customDepthCm}cm D × 76cm H (Seat: ${customHeightCm}cm)\nUpholstery: ${fabrics.find((f) => f.id === fabricChoice)?.name}\nPlinth: ${plinths.find((p) => p.id === plinthChoice)?.name}\nEstimated Lead Time: 3–4 Weeks`;
    navigator.clipboard.writeText(spec);
    setCopiedSpec(true);
    setTimeout(() => setCopiedSpec(false), 3000);
  };

  return (
    <div className="bg-[#FBF9F5] text-[#191816] min-h-screen pb-24">
      {/* Editorial Hero Header */}
      <div className="bg-[#191816] text-[#FBF9F5] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#2C2926]">
        <MotionFadeIn distance={24} duration={0.8} className="max-w-5xl mx-auto space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] font-semibold">
              Bespoke Architecture & Atelier Customization
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl uppercase tracking-wider font-light leading-tight">
            Furniture Should Belong To The Room.<br />
            <span className="text-[#C5A880] font-normal">Not The Other Way Around.</span>
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#D1C7BB] max-w-3xl">
            "We reject the compromise of rigid European import catalogues. We build your piece to the exact millimeter, upholstered in authentic Italian textiles, in our dedicated New Delhi NCR workshop."
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => setIsReservationModalOpen(true)}
              className="bg-[#C5A880] text-[#191816] px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors cursor-pointer"
            >
              Reserve The Material Atelier (₹1,299)
            </button>
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="border border-[#736B63] text-[#FBF9F5] hover:border-white px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
            >
              Book Bespoke Consultation
            </button>
          </div>
        </MotionFadeIn>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* INTERACTIVE BESPOKE STUDIO CONFIGURATOR */}
        <section className="bg-white border border-[#D1C7BB] p-6 sm:p-10 lg:p-12 space-y-10 shadow-xs">
          <div className="border-b border-[#E6DFD5] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono text-[#A6865A] uppercase tracking-wider block">
                Atelier Tool 01 · Interactive Specification Engine
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl uppercase tracking-wider text-[#191816] mt-1">
                Configure Your Bespoke Commission
              </h2>
              <p className="text-xs sm:text-sm text-[#736B63] mt-1 max-w-xl">
                Test custom dimensions, upholstery weights, and plinth options. Receive an immediate specification code for your architects or home consultation.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-[11px] font-mono text-[#137333] bg-[#E6F4EA] px-2.5 py-1 border border-[#CEEAD6] font-semibold">
                ✓ 3–4 Weeks Workshop Lead Time
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Configuration Controls */}
            <div className="lg:col-span-7 space-y-8">
              {/* Step 1: Model Silhouette Selection */}
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-wider font-semibold text-[#191816] flex items-center justify-between">
                  <span>1. Select Architectural Silhouette:</span>
                  <span className="text-[11px] font-mono text-[#A6865A] font-normal">{activeModelData.type}</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {models.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedModel(m.id as any)}
                      className={`p-3.5 text-left border transition-all cursor-pointer ${
                        selectedModel === m.id
                          ? 'bg-[#191816] text-[#FBF9F5] border-[#191816] shadow-sm'
                          : 'bg-[#FBF9F5] text-[#191816] border-[#D1C7BB] hover:border-[#191816]'
                      }`}
                    >
                      <span className="font-serif text-sm font-semibold uppercase block">{m.name}</span>
                      <span className={`text-[10px] line-clamp-1 mt-0.5 ${selectedModel === m.id ? 'text-[#C5A880]' : 'text-[#736B63]'}`}>
                        {m.type}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Custom Millimeter Dimensions */}
              <div className="space-y-4 bg-[#FBF9F5] p-5 border border-[#E6DFD5]">
                <div className="flex items-center justify-between">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#191816] flex items-center space-x-1.5">
                    <Ruler className="w-3.5 h-3.5 text-[#A6865A]" />
                    <span>2. Millimeter Dimensional Customization:</span>
                  </label>
                  <span className="text-[10px] font-mono text-[#736B63]">Direct joinery input</span>
                </div>

                {/* Width Slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#4A453F]">Overall Width:</span>
                    <span className="font-mono font-bold text-[#191816]">
                      {customWidthCm} cm ({Math.round(customWidthCm / 2.54)} inches)
                    </span>
                  </div>
                  <input
                    type="range"
                    min={170}
                    max={360}
                    step={5}
                    value={customWidthCm}
                    onChange={(e) => setCustomWidthCm(Number(e.target.value))}
                    className="w-full accent-[#191816] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-[#736B63]">
                    <span>170 cm (Compact 2S)</span>
                    <span>245 cm (Standard 3S)</span>
                    <span>360 cm (Expansive Salon)</span>
                  </div>
                </div>

                {/* Depth Slider */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#4A453F]">Seat Depth:</span>
                    <span className="font-mono font-bold text-[#191816]">
                      {customDepthCm} cm ({Math.round(customDepthCm / 2.54)} inches)
                    </span>
                  </div>
                  <input
                    type="range"
                    min={85}
                    max={110}
                    step={2}
                    value={customDepthCm}
                    onChange={(e) => setCustomDepthCm(Number(e.target.value))}
                    className="w-full accent-[#191816] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-[#736B63]">
                    <span>85 cm (Upright Salon)</span>
                    <span>92 cm (Ergonomic Balance)</span>
                    <span>110 cm (Deep Daybed Lounging)</span>
                  </div>
                </div>

                {/* Seat Height */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#4A453F]">Seat Height:</span>
                    <span className="font-mono font-bold text-[#191816]">
                      {customHeightCm} cm ({Math.round(customHeightCm / 2.54)} inches)
                    </span>
                  </div>
                  <input
                    type="range"
                    min={40}
                    max={48}
                    step={1}
                    value={customHeightCm}
                    onChange={(e) => setCustomHeightCm(Number(e.target.value))}
                    className="w-full accent-[#191816] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-[#736B63]">
                    <span>40 cm (Low Lounge)</span>
                    <span>44 cm (Universal Standard)</span>
                    <span>48 cm (Senior Family Comfort)</span>
                  </div>
                </div>
              </div>

              {/* Step 3: Tactile Fabric Selection */}
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-wider font-semibold text-[#191816] flex items-center justify-between">
                  <span>3. Curated Textile / Leather:</span>
                  <span className="text-[10px] text-[#A6865A] font-mono">Swatches available in Atelier Box</span>
                </label>
                <div className="space-y-2">
                  {fabrics.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFabricChoice(f.id as any)}
                      className={`w-full p-3 text-left border flex items-center justify-between transition-all cursor-pointer ${
                        fabricChoice === f.id
                          ? 'bg-[#191816] text-[#FBF9F5] border-[#191816]'
                          : 'bg-white text-[#191816] border-[#E6DFD5] hover:border-[#191816]'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span
                          className="w-5 h-5 rounded-full border border-[#D1C7BB] shrink-0"
                          style={{ backgroundColor: f.hex }}
                        />
                        <div>
                          <span className="text-xs font-semibold block uppercase">{f.name}</span>
                          <span className={`text-[10px] ${fabricChoice === f.id ? 'text-[#C5A880]' : 'text-[#736B63]'}`}>
                            {f.note}
                          </span>
                        </div>
                      </div>
                      {fabricChoice === f.id && <Check className="w-4 h-4 text-[#C5A880]" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Plinth & Timber Selection */}
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-wider font-semibold text-[#191816]">
                  4. Base Plinth & Perimeter Reveal:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {plinths.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setPlinthChoice(p.id as any)}
                      className={`p-3 text-left border transition-all cursor-pointer ${
                        plinthChoice === p.id
                          ? 'bg-[#191816] text-[#FBF9F5] border-[#191816]'
                          : 'bg-white text-[#191816] border-[#E6DFD5] hover:border-[#191816]'
                      }`}
                    >
                      <span className="text-xs font-semibold uppercase block">{p.name}</span>
                      <span className={`text-[10px] line-clamp-1 mt-0.5 ${plinthChoice === p.id ? 'text-[#C5A880]' : 'text-[#736B63]'}`}>
                        {p.note}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Real-time Specification Dossier & Direct Actions */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#23201D] text-[#FBF9F5] p-6 border border-[#3E3A36] space-y-5 sticky top-24">
                <div className="flex justify-between items-start border-b border-[#3E3A36] pb-4">
                  <div>
                    <span className="text-[10px] font-mono text-[#C5A880] uppercase tracking-wider block">
                      Custom Dossier
                    </span>
                    <h3 className="font-serif text-xl uppercase font-semibold text-[#FBF9F5] mt-0.5">
                      {activeModelData.name}
                    </h3>
                  </div>
                  <span className="bg-[#C5A880]/20 text-[#C5A880] border border-[#C5A880]/40 px-2 py-0.5 text-[10px] font-mono uppercase">
                    Bespoke Sizing
                  </span>
                </div>

                <div className="aspect-16/9 bg-[#191816] overflow-hidden relative border border-[#3E3A36]">
                  <img
                    src={activeModelData.image}
                    alt={activeModelData.name}
                    className="w-full h-full object-cover opacity-85"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-1 text-[10px] font-mono text-white">
                    {customWidthCm} W × {customDepthCm} D × {customHeightCm} SH cm
                  </div>
                </div>

                {/* Summary Metrics */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between border-b border-[#3E3A36]/60 pb-1.5">
                    <span className="text-[#968E85]">Dimensions:</span>
                    <span className="font-mono text-[#FBF9F5]">
                      {customWidthCm} × {customDepthCm} × 76 cm
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-[#3E3A36]/60 pb-1.5">
                    <span className="text-[#968E85]">Imperial Size:</span>
                    <span className="font-mono text-[#FBF9F5]">
                      {Math.round(customWidthCm / 2.54)}" W × {Math.round(customDepthCm / 2.54)}" D × 30" H
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-[#3E3A36]/60 pb-1.5">
                    <span className="text-[#968E85]">Selected Textile:</span>
                    <span className="text-[#C5A880] font-medium text-right max-w-[180px] truncate">
                      {fabrics.find((f) => f.id === fabricChoice)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-[#3E3A36]/60 pb-1.5">
                    <span className="text-[#968E85]">Base Finish:</span>
                    <span className="text-[#FBF9F5] text-right">
                      {plinths.find((p) => p.id === plinthChoice)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-[#3E3A36]/60 pb-1.5">
                    <span className="text-[#968E85]">Production Origin:</span>
                    <span className="text-[#FBF9F5]">New Delhi NCR Atelier, India</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-[#968E85]">Chassis Warranty:</span>
                    <span className="text-[#137333] font-semibold">10-Year Generational Structural</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="space-y-2.5 pt-2">
                  <button
                    onClick={() => {
                      setSelectedProductId(activeModelData.productId);
                      setIsReservationModalOpen(true);
                    }}
                    className="w-full bg-[#C5A880] text-[#191816] py-3 text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors cursor-pointer text-center block"
                  >
                    Reserve Atelier & Freeze Sizing (₹1,299)
                  </button>

                  <button
                    onClick={() => setIsConsultationOpen(true)}
                    className="w-full bg-[#2C2926] border border-[#736B63] hover:border-white text-[#FBF9F5] py-2.5 text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer text-center block"
                  >
                    Schedule Architectural Consultation
                  </button>

                  <button
                    onClick={handleShareCustomization}
                    className="w-full text-center text-[11px] text-[#A6865A] hover:underline cursor-pointer flex items-center justify-center space-x-1 pt-1"
                  >
                    {copiedSpec ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span>{copiedSpec ? 'Customization Specs Copied!' : 'Copy Specification For Your Architect'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5-STAGE BESPOKE JOURNEY */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[10px] font-mono text-[#A6865A] uppercase tracking-wider">
              From Blueprint To In-Room Commissioning
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-wider text-[#191816]">
              The 5-Stage Bespoke Journey
            </h2>
            <p className="text-xs sm:text-sm text-[#736B63]">
              Every commission is treated as an individual architectural project, eliminating the uncertainties of overseas catalog shopping.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {bespokeSteps.map((step, idx) => (
              <div key={idx} className="bg-white border border-[#D1C7BB] p-5 space-y-3 relative">
                <span className="font-mono text-xl font-bold text-[#A6865A] block">{step.num}</span>
                <h3 className="font-serif text-sm font-semibold uppercase text-[#191816] leading-snug">
                  {step.title}
                </h3>
                <p className="text-[11px] text-[#736B63] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4 REASONS BESPOKE BEATS IMPORTED LUXURY */}
        <section className="bg-[#191816] text-[#FBF9F5] p-8 sm:p-12 space-y-8 border border-[#2C2926]">
          <div className="max-w-3xl space-y-2">
            <span className="text-[10px] font-mono text-[#C5A880] uppercase tracking-wider">
              Strategic Advantages
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl uppercase tracking-wider text-[#FBF9F5]">
              Why Bespoke Outperforms European Imports
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2 border-t border-[#3E3A36] pt-4">
              <span className="text-xs font-mono text-[#C5A880] font-bold">01 · NO 40% IMPORT DUTY</span>
              <h4 className="font-serif text-base uppercase text-[#FBF9F5]">100% Value Into Materials</h4>
              <p className="text-xs text-[#968E85] leading-relaxed">
                Rather than paying maritime freight containers and import agents, your investment funds genuine kiln-dried Sal wood, Italian virgin bouclé, and Pirelli webbing.
              </p>
            </div>

            <div className="space-y-2 border-t border-[#3E3A36] pt-4">
              <span className="text-xs font-mono text-[#C5A880] font-bold">02 · ZERO FIXED SIZES</span>
              <h4 className="font-serif text-base uppercase text-[#FBF9F5]">Millimeter Exact Match</h4>
              <p className="text-xs text-[#968E85] leading-relaxed">
                Extend by 35 cm, lower by 3 cm, or angle by 12 degrees to respect your architect's plans and awkward column bays without surcharge.
              </p>
            </div>

            <div className="space-y-2 border-t border-[#3E3A36] pt-4">
              <span className="text-xs font-mono text-[#C5A880] font-bold">03 · 3 WEEKS VS 24 WEEKS</span>
              <h4 className="font-serif text-base uppercase text-[#FBF9F5]">Move-In Ready Timeline</h4>
              <p className="text-xs text-[#968E85] leading-relaxed">
                European imports take 5 to 6 months to clear shipping lanes and Indian ports. Our New Delhi workshop crafts and delivers in under 30 days.
              </p>
            </div>

            <div className="space-y-2 border-t border-[#3E3A36] pt-4">
              <span className="text-xs font-mono text-[#C5A880] font-bold">04 · DIRECT ATELIER CARE</span>
              <h4 className="font-serif text-base uppercase text-[#FBF9F5]">Generational Service</h4>
              <p className="text-xs text-[#968E85] leading-relaxed">
                Backed by our 10-year chassis structural guarantee with in-room maintenance teams across Delhi NCR, Mumbai, Bengaluru, Hyderabad, and Pune.
              </p>
            </div>
          </div>
        </section>

        {/* PAN-INDIA TIER 1 WHITE-GLOVE COMMISSIONING BANNER */}
        <section className="bg-white border border-[#D1C7BB] p-8 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E6DFD5] pb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#191816] text-[#C5A880] flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl uppercase font-semibold text-[#191816]">
                  Dedicated Tier 1 White-Glove Transit Corridors
                </h3>
                <span className="text-xs text-[#736B63]">
                  Direct delivery & in-room staging across all major Indian metropolitan areas
                </span>
              </div>
            </div>

            <button
              onClick={() => setCurrentView('category-view')}
              className="text-xs uppercase tracking-wider font-semibold text-[#191816] hover:text-[#A6865A] flex items-center space-x-1 cursor-pointer"
            >
              <span>Explore Collection Pieces</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-[#FBF9F5] border border-[#E6DFD5]">
              <span className="font-serif font-bold text-sm text-[#191816] block">Delhi NCR</span>
              <span className="text-[11px] text-[#736B63]">Gurugram, New Delhi, Noida (Dedicated 24-hr vans)</span>
            </div>
            <div className="p-3 bg-[#FBF9F5] border border-[#E6DFD5]">
              <span className="font-serif font-bold text-sm text-[#191816] block">Mumbai</span>
              <span className="text-[11px] text-[#736B63]">South Mumbai, Bandra, Juhu (Pre-survey hoist team)</span>
            </div>
            <div className="p-3 bg-[#FBF9F5] border border-[#E6DFD5]">
              <span className="font-serif font-bold text-sm text-[#191816] block">Bengaluru</span>
              <span className="text-[11px] text-[#736B63]">Lavelle Rd, Indiranagar, Whitefield (Air-ride logistics)</span>
            </div>
            <div className="p-3 bg-[#FBF9F5] border border-[#E6DFD5]">
              <span className="font-serif font-bold text-sm text-[#191816] block">Hyderabad</span>
              <span className="text-[11px] text-[#736B63]">Jubilee Hills, Banjara Hills, Financial District</span>
            </div>
            <div className="p-3 bg-[#FBF9F5] border border-[#E6DFD5]">
              <span className="font-serif font-bold text-sm text-[#191816] block">Chennai</span>
              <span className="text-[11px] text-[#736B63]">Boat Club, Poes Garden, ECR Coastal Enclaves</span>
            </div>
            <div className="p-3 bg-[#FBF9F5] border border-[#E6DFD5]">
              <span className="font-serif font-bold text-sm text-[#191816] block">Pune</span>
              <span className="text-[11px] text-[#736B63]">Koregaon Park, Kalyani Nagar, Boat Club Rd</span>
            </div>
            <div className="p-3 bg-[#FBF9F5] border border-[#E6DFD5]">
              <span className="font-serif font-bold text-sm text-[#191816] block">Kolkata</span>
              <span className="text-[11px] text-[#736B63]">Alipore, Ballygunge, Queens Park Estates</span>
            </div>
            <div className="p-3 bg-[#FBF9F5] border border-[#E6DFD5]">
              <span className="font-serif font-bold text-sm text-[#191816] block">Ahmedabad</span>
              <span className="text-[11px] text-[#736B63]">Bodakdev, Ambli Road, Sindhu Bhavan Estates</span>
            </div>
          </div>
        </section>

      </div>

      {/* Consultation Modal */}
      {isConsultationOpen && (
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
          productName={`Bespoke ${activeModelData.name} (${customWidthCm}cm)`}
        />
      )}
    </div>
  );
};
