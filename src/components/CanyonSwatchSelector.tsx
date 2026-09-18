/**
 * House Of Form — The Canyon Full-Grain Leather Swatch Atelier
 * Interactive luxury swatch selection for all sofas.
 */

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import {
  CANYON_LEATHERS,
  CANYON_LEATHER_GROUPS,
  CANYON_TECHNICAL_SPECS,
  CanyonLeather,
} from '../data/canyonLeathers';
import {
  Sparkles,
  Check,
  Maximize2,
  X,
  Info,
  Layers,
  ShieldCheck,
  ArrowRight,
  Eye,
  Compass,
} from 'lucide-react';

interface CanyonSwatchSelectorProps {
  onReserveClick?: () => void;
  className?: string;
}

export const CanyonSwatchSelector: React.FC<CanyonSwatchSelectorProps> = ({
  onReserveClick,
  className = '',
}) => {
  const { selectedLeatherId, setSelectedLeatherId, selectedLeather, setIsReservationModalOpen } =
    useStore();

  const [activeGroup, setActiveGroup] = useState<string>('ALL');
  const [isInspectorOpen, setIsInspectorOpen] = useState<boolean>(false);
  const [comparingLeatherId, setComparingLeatherId] = useState<string>('canyon-chestnut');
  const [magnifierPos, setMagnifierPos] = useState<{ x: number; y: number; show: boolean }>({
    x: 50,
    y: 50,
    show: false,
  });

  const filteredLeathers =
    activeGroup === 'ALL'
      ? CANYON_LEATHERS
      : CANYON_LEATHERS.filter((l) => l.group === activeGroup);

  const comparingLeather =
    CANYON_LEATHERS.find((l) => l.id === comparingLeatherId) || CANYON_LEATHERS[7];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMagnifierPos({ x, y, show: true });
  };

  const handleMouseLeave = () => {
    setMagnifierPos((prev) => ({ ...prev, show: false }));
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-[#E6DFD5] pb-2.5">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[#A6865A]">
              Material Atelier · The Canyon Collection
            </span>
            <span className="text-[9px] bg-[#191816] text-[#FBF9F5] px-2 py-0.5 uppercase tracking-wider font-mono">
              18 Curated Leathers
            </span>
          </div>
          <h3 className="font-serif text-lg sm:text-xl text-[#191816] uppercase tracking-wide mt-0.5">
            Select Leather Upholstery
          </h3>
        </div>

        <button
          type="button"
          onClick={() => setIsInspectorOpen(true)}
          className="inline-flex items-center space-x-1.5 text-xs text-[#736B63] hover:text-[#191816] transition-colors cursor-pointer border border-[#D1C7BB] hover:border-[#191816] px-2.5 py-1.5 bg-white shadow-xs"
          title="Compare all 18 leathers side-by-side in full view"
        >
          <Maximize2 className="w-3.5 h-3.5 text-[#C5A880]" />
          <span className="text-[10px] tracking-wider uppercase font-medium hidden sm:inline">
            Full Atelier View
          </span>
        </button>
      </div>

      {/* Group Filter Chips */}
      <div className="flex items-center space-x-1.5 overflow-x-auto pb-1.5 scrollbar-none">
        {CANYON_LEATHER_GROUPS.map((grp) => {
          const count =
            grp === 'ALL'
              ? CANYON_LEATHERS.length
              : CANYON_LEATHERS.filter((l) => l.group === grp).length;
          const isActive = activeGroup === grp;
          return (
            <button
              key={grp}
              type="button"
              onClick={() => setActiveGroup(grp)}
              className={`px-2.5 py-1 text-[10px] tracking-wider uppercase font-medium whitespace-nowrap transition-all cursor-pointer border ${
                isActive
                  ? 'bg-[#191816] text-[#FBF9F5] border-[#191816]'
                  : 'bg-[#F4EFEB] text-[#736B63] border-[#E6DFD5] hover:border-[#191816] hover:text-[#191816]'
              }`}
            >
              {grp} ({count})
            </button>
          );
        })}
      </div>

      {/* 18 Interactive Swatches Grid */}
      <div className="bg-white border border-[#D1C7BB] p-3.5 sm:p-4 shadow-xs">
        <div className="grid grid-cols-6 sm:grid-cols-9 gap-2.5 sm:gap-3">
          {filteredLeathers.map((leather) => {
            const isSelected = selectedLeatherId === leather.id;
            return (
              <button
                key={leather.id}
                type="button"
                onClick={() => setSelectedLeatherId(leather.id)}
                className="group flex flex-col items-center text-center cursor-pointer focus:outline-none"
                title={`${leather.name} — ${leather.family}`}
              >
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full relative p-0.5 transition-all duration-300 ${
                    isSelected
                      ? 'ring-2 ring-[#C5A880] ring-offset-2 ring-offset-[#FBF9F5] scale-105 shadow-md'
                      : 'border border-[#D1C7BB] hover:border-[#191816] hover:scale-102'
                  }`}
                >
                  {/* Vector Swatch Surface with Grain & Pull-Up */}
                  <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner">
                    <img
                      src={leather.swatchImage}
                      alt={leather.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Active Selected Checkmark */}
                    {isSelected && (
                      <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white drop-shadow-md stroke-[2.5]" />
                      </div>
                    )}
                  </div>

                  {/* Flagship Jewel Dot */}
                  {leather.isFlagship && !isSelected && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#C5A880] ring-1 ring-white" />
                  )}
                </div>

                <span
                  className={`text-[9px] sm:text-[10px] uppercase tracking-wider mt-1.5 transition-colors line-clamp-1 ${
                    isSelected
                      ? 'text-[#191816] font-bold border-b border-[#C5A880]'
                      : 'text-[#736B63] group-hover:text-[#191816]'
                  }`}
                >
                  {leather.colorName}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Leather Spotlight Card */}
      <div className="bg-[#F4EFEB] border border-[#D1C7BB] p-4 sm:p-5 relative transition-all">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
          {/* Tactile Macro Loupe / Swatch Preview */}
          <div className="sm:col-span-4 flex flex-col items-center sm:items-start">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-lg border-2 border-[#191816] overflow-hidden relative shadow-md cursor-crosshair group"
            >
              <img
                src={selectedLeather.swatchImage}
                alt={selectedLeather.name}
                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-125"
                style={
                  magnifierPos.show
                    ? {
                        transformOrigin: `${magnifierPos.x}% ${magnifierPos.y}%`,
                        transform: 'scale(2.2)',
                      }
                    : {}
                }
              />
              <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-[#191816]/80 backdrop-blur-xs px-2 py-0.5 text-[8px] text-[#FBF9F5] tracking-widest uppercase text-center font-mono">
                {magnifierPos.show ? 'Macro 2.2x Zoom' : 'Hover to Inspect Grain'}
              </div>
            </div>

            <span className="text-[9px] font-mono text-[#736B63] mt-2 uppercase">
              Ref: {selectedLeather.sku}
            </span>
          </div>

          {/* Leather Information & Curation Notes */}
          <div className="sm:col-span-8 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-serif font-bold uppercase tracking-wider text-[#191816]">
                {selectedLeather.name}
              </span>
              <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 bg-[#191816] text-[#C5A880] font-semibold">
                {selectedLeather.tagline}
              </span>
              {selectedLeather.isFlagship && (
                <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 bg-[#C5A880] text-[#191816] font-bold">
                  Hero Spec
                </span>
              )}
            </div>

            <p className="text-xs text-[#4A453F] leading-relaxed">
              {selectedLeather.description}
            </p>

            {/* Architectural Pairing Insights */}
            <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#D1C7BB]/70 text-[10px]">
              <div>
                <span className="text-[#736B63] block uppercase tracking-wider text-[8px]">
                  Recommended Timber
                </span>
                <span className="text-[#191816] font-medium">
                  {selectedLeather.recommendedTimber}
                </span>
              </div>
              <div>
                <span className="text-[#736B63] block uppercase tracking-wider text-[8px]">
                  Metal Accent Pairing
                </span>
                <span className="text-[#191816] font-medium">
                  {selectedLeather.recommendedMetal}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#D1C7BB]/70 text-[10px] text-[#736B63]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Full Grain · 1.4–1.6mm · 65,000 Cycles</span>
              </span>
              <button
                type="button"
                onClick={() => setIsInspectorOpen(true)}
                className="text-[#191816] font-semibold uppercase tracking-wider hover:text-[#C5A880] transition-colors cursor-pointer flex items-center gap-1 text-[9px]"
              >
                <span>Specs & Compare</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FULL SCREEN SWATCH ATELIER MODAL ================= */}
      {isInspectorOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#191816]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
          <div className="bg-[#FBF9F5] w-full max-w-5xl border border-[#D1C7BB] shadow-2xl relative overflow-hidden transition-all my-6 max-h-[92vh] flex flex-col">
            {/* Modal Header */}
            <div className="bg-[#191816] text-[#FBF9F5] px-6 py-4 flex items-center justify-between border-b border-[#2C2926] shrink-0">
              <div className="flex items-center space-x-3">
                <Sparkles className="w-4 h-4 text-[#C5A880]" />
                <span className="text-xs sm:text-sm tracking-[0.25em] uppercase font-serif">
                  The Canyon Leather Atelier · Full Collection Inspection
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsInspectorOpen(false)}
                className="text-[#D1C7BB] hover:text-white p-1 cursor-pointer transition-colors"
                title="Close atelier view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Technical Dossier Strip */}
              <div className="bg-[#EFECE6] p-4 border border-[#D1C7BB] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#736B63] block">
                    Classification
                  </span>
                  <span className="font-semibold text-[#191816]">
                    {CANYON_TECHNICAL_SPECS.classification}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#736B63] block">
                    Cattle Origin
                  </span>
                  <span className="font-semibold text-[#191816]">
                    {CANYON_TECHNICAL_SPECS.origin}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#736B63] block">
                    Thickness Gauge
                  </span>
                  <span className="font-semibold text-[#191816]">
                    {CANYON_TECHNICAL_SPECS.thickness}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#736B63] block">
                    Martindale Rubs
                  </span>
                  <span className="font-semibold text-[#191816]">
                    {CANYON_TECHNICAL_SPECS.martindaleDurability.split('(')[0]}
                  </span>
                </div>
              </div>

              {/* Side by Side Comparison Selector */}
              <div className="border border-[#D1C7BB] bg-white p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-[#E6DFD5] pb-2">
                  <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-[#191816]">
                    Side-by-Side Tone Comparison
                  </h4>
                  <span className="text-[10px] text-[#736B63]">
                    Compare your primary choice against any secondary tone
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Choice 1: Active Selected */}
                  <div className="border-2 border-[#191816] p-4 bg-[#FBF9F5] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] tracking-widest uppercase bg-[#191816] text-[#C5A880] px-2 py-0.5 font-bold">
                        Primary Selection
                      </span>
                      <span className="font-mono text-xs text-[#736B63]">{selectedLeather.sku}</span>
                    </div>
                    <div className="aspect-[16/9] w-full rounded-md overflow-hidden border border-[#D1C7BB]">
                      <img
                        src={selectedLeather.swatchImage}
                        alt={selectedLeather.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="font-serif text-lg uppercase font-semibold text-[#191816]">
                        {selectedLeather.name}
                      </h5>
                      <p className="text-xs text-[#736B63] mt-1">{selectedLeather.description}</p>
                    </div>
                    <div className="text-[11px] text-[#191816] space-y-1 border-t border-[#D1C7BB] pt-2">
                      <div>
                        <strong>Tone Family:</strong> {selectedLeather.family}
                      </div>
                      <div>
                        <strong>Timber Match:</strong> {selectedLeather.recommendedTimber}
                      </div>
                      <div>
                        <strong>Metal Match:</strong> {selectedLeather.recommendedMetal}
                      </div>
                    </div>
                  </div>

                  {/* Choice 2: Comparative Leather */}
                  <div className="border border-[#D1C7BB] p-4 bg-[#FBF9F5] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] tracking-widest uppercase bg-[#736B63] text-white px-2 py-0.5 font-semibold">
                        Comparing Tone
                      </span>
                      <select
                        aria-label="Select tone to compare"
                        value={comparingLeatherId}
                        onChange={(e) => setComparingLeatherId(e.target.value)}
                        className="text-xs border border-[#D1C7BB] bg-white px-2 py-1 uppercase font-semibold cursor-pointer"
                      >
                        {CANYON_LEATHERS.map((l) => (
                          <option key={l.id} value={l.id}>
                            {l.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="aspect-[16/9] w-full rounded-md overflow-hidden border border-[#D1C7BB]">
                      <img
                        src={comparingLeather.swatchImage}
                        alt={comparingLeather.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <h5 className="font-serif text-lg uppercase font-semibold text-[#191816]">
                          {comparingLeather.name}
                        </h5>
                        <button
                          type="button"
                          onClick={() => setSelectedLeatherId(comparingLeather.id)}
                          className="text-[10px] uppercase tracking-wider font-bold bg-[#191816] text-white px-2.5 py-1 hover:bg-[#C5A880] hover:text-[#191816] transition-colors cursor-pointer"
                        >
                          Switch to This Tone
                        </button>
                      </div>
                      <p className="text-xs text-[#736B63] mt-1">{comparingLeather.description}</p>
                    </div>
                    <div className="text-[11px] text-[#191816] space-y-1 border-t border-[#D1C7BB] pt-2">
                      <div>
                        <strong>Tone Family:</strong> {comparingLeather.family}
                      </div>
                      <div>
                        <strong>Timber Match:</strong> {comparingLeather.recommendedTimber}
                      </div>
                      <div>
                        <strong>Metal Match:</strong> {comparingLeather.recommendedMetal}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* All 18 Leathers Visual Catalog in Modal */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-[#191816]">
                    Complete 18-Swatch Palette
                  </h4>
                  <span className="text-[10px] text-[#736B63]">
                    Click any swatch to apply to your sofa configuration
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {CANYON_LEATHERS.map((l) => {
                    const isCurrent = selectedLeatherId === l.id;
                    return (
                      <div
                        key={l.id}
                        onClick={() => setSelectedLeatherId(l.id)}
                        className={`p-2.5 border transition-all cursor-pointer bg-white group ${
                          isCurrent
                            ? 'border-2 border-[#191816] ring-2 ring-[#C5A880] bg-[#FBF9F5]'
                            : 'border-[#D1C7BB] hover:border-[#191816]'
                        }`}
                      >
                        <div className="aspect-square w-full rounded-sm overflow-hidden mb-2 relative">
                          <img
                            src={l.swatchImage}
                            alt={l.name}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                          {isCurrent && (
                            <div className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#191816] text-[#C5A880] rounded-full flex items-center justify-center">
                              <Check className="w-2.5 h-2.5" />
                            </div>
                          )}
                        </div>
                        <div className="text-xs font-serif uppercase font-semibold text-[#191816] line-clamp-1">
                          {l.name}
                        </div>
                        <div className="text-[9px] text-[#736B63] line-clamp-1">{l.tagline}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-[#EFECE6] px-6 py-4 border-t border-[#D1C7BB] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <div className="text-xs text-[#736B63]">
                Selected Upholstery:{' '}
                <strong className="text-[#191816]">{selectedLeather.name}</strong> (
                {selectedLeather.family})
              </div>

              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() => setIsInspectorOpen(false)}
                  className="px-4 py-2 border border-[#736B63] text-xs uppercase tracking-wider text-[#191816] hover:bg-white transition-colors cursor-pointer"
                >
                  Done
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsInspectorOpen(false);
                    if (onReserveClick) onReserveClick();
                    else setIsReservationModalOpen(true);
                  }}
                  className="px-6 py-2 bg-[#191816] text-[#FBF9F5] hover:bg-[#C5A880] hover:text-[#191816] text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer flex items-center space-x-2"
                >
                  <span>Proceed to Reservation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
