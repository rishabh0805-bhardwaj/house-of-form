/**
 * House Of Form — Digital Material Experience & Material Passport
 * Interactive companion allowing clients to inspect swatches, review technical data,
 * and mark: ♡ Loved, ✓ Shortlisted, ✕ Not for me.
 * Automatically synchronizes with CRM Lead records and adjusts lead score.
 */

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import {
  Heart,
  Check,
  X,
  QrCode,
  Layers,
  Sparkles,
  PhoneCall,
  ArrowRight,
  Info,
  CheckCircle2,
  Share2,
} from 'lucide-react';
import { ConsultationModal } from './ConsultationModal';

export const DigitalMaterialExperience: React.FC = () => {
  const {
    materials,
    finishes,
    reservations,
    activeReservationId,
    setActiveReservationId,
    toggleMaterialStatus,
    setIsReservationModalOpen,
    settings,
  } = useStore();

  const currentReservation =
    reservations.find((r) => r.id === activeReservationId) || reservations[0];

  const [selectedMaterialId, setSelectedMaterialId] = useState<string>(materials[0].id);
  const [activeFamilyFilter, setActiveFamilyFilter] = useState<string>('ALL');
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [isQuoteFinalizeDone, setIsQuoteFinalizeDone] = useState(false);

  const selectedMaterial =
    materials.find((m) => m.id === selectedMaterialId) || materials[0];

  const shortlistedIds = currentReservation?.shortlistedMaterialIds || [];
  const lovedIds = currentReservation?.lovedMaterialIds || [];
  const rejectedIds = currentReservation?.rejectedMaterialIds || [];

  const filteredMaterials =
    activeFamilyFilter === 'ALL'
      ? materials
      : materials.filter((m) => m.family === activeFamilyFilter);

  const shortlistedMaterials = materials.filter((m) => shortlistedIds.includes(m.id));
  const shortlistedFinishes = finishes.filter((f) => shortlistedIds.includes(f.id));

  const handleAction = (id: string, type: 'loved' | 'shortlisted' | 'rejected') => {
    if (currentReservation) {
      toggleMaterialStatus(currentReservation.id, id, type);
    }
  };

  const handleFinalizeQuote = () => {
    setIsQuoteFinalizeDone(true);
  };

  return (
    <div className="bg-[#FBF9F5] text-[#191816] min-h-screen pb-20">
      
      {/* Editorial Header */}
      <div className="bg-[#191816] text-[#FBF9F5] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#2C2926]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-[10px] tracking-[0.25em] uppercase text-[#C5A880]">
              <QrCode className="w-3.5 h-3.5" />
              <span>Digital Material Passport</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl uppercase tracking-[0.06em] font-light mt-1">
              Explore Your Materials
            </h1>
            <p className="text-xs text-[#968E85] mt-1">
              Paired with your physical Material Atelier kit for{' '}
              <strong className="text-[#FBF9F5]">{currentReservation?.productName}</strong>.
            </p>
          </div>

          {/* Active Reservation Selector Banner */}
          <div className="bg-[#2C2926] p-3 border border-[#3E3A36] text-xs">
            <span className="text-[9px] uppercase tracking-wider text-[#A6865A] block">
              Active Client Dossier
            </span>
            <div className="flex items-center space-x-3 mt-1">
              <span className="font-mono text-[#FBF9F5] font-semibold">
                {currentReservation?.id}
              </span>
              <span className="text-[#968E85]">•</span>
              <span className="text-[#D1C7BB]">{currentReservation?.customerName}</span>
              <span className="text-[#968E85]">({currentReservation?.city})</span>
            </div>
            <p className="text-[10px] text-[#A6865A] mt-1">
              Status: {currentReservation?.atelierStatus} • ₹{settings.reservationAmount} adjustable
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Swatch Explorer & Triage */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Category Filter Pills */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 text-[10px] tracking-[0.16em] uppercase">
              {['ALL', 'SIGNATURE', 'TEXTURED', 'NATURAL', 'EARTH', 'DEEP', 'PERFORMANCE'].map((fam) => (
                <button
                  key={fam}
                  onClick={() => setActiveFamilyFilter(fam)}
                  className={`px-3.5 py-1.5 border whitespace-nowrap transition-all cursor-pointer ${
                    activeFamilyFilter === fam
                      ? 'bg-[#191816] text-[#FBF9F5] border-[#191816]'
                      : 'bg-white text-[#736B63] border-[#D1C7BB] hover:border-[#191816]'
                  }`}
                >
                  {fam}
                </button>
              ))}
            </div>

            {/* Detailed Selected Swatch Inspection Card */}
            <div className="bg-white border border-[#D1C7BB] p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Macro Texture Image */}
                <div className="md:col-span-6 aspect-square bg-[#F4EFEB] border border-[#E6DFD5] overflow-hidden relative group">
                  <img
                    src={selectedMaterial.image}
                    alt={selectedMaterial.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#191816]/85 backdrop-blur-sm text-[#FBF9F5] px-2.5 py-1 text-[9px] font-mono tracking-widest uppercase">
                    {selectedMaterial.id}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#FBF9F5]/90 px-2 py-1 text-[9px] uppercase tracking-wider text-[#191816]">
                    High-Res Macro Weave
                  </div>
                </div>

                {/* Technical Specifications */}
                <div className="md:col-span-6 space-y-4">
                  <div>
                    <div className="flex justify-between items-center text-[10px] text-[#A6865A] tracking-wider uppercase font-semibold">
                      <span>{selectedMaterial.family} COLLECTION</span>
                      <span>{selectedMaterial.priceCategory}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-[#191816] tracking-wider uppercase mt-0.5">
                      {selectedMaterial.name}
                    </h3>
                    <p className="text-xs text-[#736B63] mt-1">{selectedMaterial.texture}</p>
                  </div>

                  {/* Technical Spec Box */}
                  <div className="border border-[#E6DFD5] p-3 bg-[#FBF9F5] space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-[#E6DFD5]/70">
                      <span className="text-[#736B63]">Composition</span>
                      <span className="font-medium text-[#191816] text-right">{selectedMaterial.composition}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#E6DFD5]/70">
                      <span className="text-[#736B63]">Martindale Abrasion</span>
                      <span className="font-mono font-medium text-[#191816]">
                        {selectedMaterial.performance.martindaleCycles.toLocaleString()} Cycles
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#E6DFD5]/70">
                      <span className="text-[#736B63]">Pilling Rating</span>
                      <span className="font-medium text-[#191816]">{selectedMaterial.performance.pillingResistance}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#736B63]">Fire Safety</span>
                      <span className="font-medium text-[#191816]">{selectedMaterial.performance.fireRetardant}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#736B63] leading-relaxed">
                    <strong>Care Directive:</strong> {selectedMaterial.care}
                  </p>

                  {/* Interactive Triage Buttons */}
                  <div className="pt-2 border-t border-[#E6DFD5] space-y-2">
                    <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">
                      Triage This Swatch in Your Physical Kit:
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => handleAction(selectedMaterial.id, 'loved')}
                        className={`py-2 px-2 text-xs flex items-center justify-center space-x-1.5 border transition-all cursor-pointer ${
                          lovedIds.includes(selectedMaterial.id)
                            ? 'bg-[#191816] text-[#FBF9F5] border-[#191816]'
                            : 'bg-white text-[#2C2926] border-[#D1C7BB] hover:border-[#191816]'
                        }`}
                      >
                        <Heart className={`w-3.5 h-3.5 ${lovedIds.includes(selectedMaterial.id) ? 'fill-[#C5A880] text-[#C5A880]' : ''}`} />
                        <span>Love It</span>
                      </button>

                      <button
                        onClick={() => handleAction(selectedMaterial.id, 'shortlisted')}
                        className={`py-2 px-2 text-xs flex items-center justify-center space-x-1.5 border transition-all cursor-pointer ${
                          shortlistedIds.includes(selectedMaterial.id) && !lovedIds.includes(selectedMaterial.id)
                            ? 'bg-[#A6865A] text-[#FBF9F5] border-[#A6865A]'
                            : 'bg-white text-[#2C2926] border-[#D1C7BB] hover:border-[#191816]'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Shortlist</span>
                      </button>

                      <button
                        onClick={() => handleAction(selectedMaterial.id, 'rejected')}
                        className={`py-2 px-2 text-xs flex items-center justify-center space-x-1.5 border transition-all cursor-pointer ${
                          rejectedIds.includes(selectedMaterial.id)
                            ? 'bg-red-50 text-red-700 border-red-300'
                            : 'bg-white text-[#736B63] border-[#D1C7BB] hover:border-red-300'
                        }`}
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>Not for me</span>
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Swatch Matrix Grid */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#191816]">
                All Swatches in Your Atelier ({filteredMaterials.length})
              </h4>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {filteredMaterials.map((m) => {
                  const isLoved = lovedIds.includes(m.id);
                  const isShortlisted = shortlistedIds.includes(m.id);
                  const isRejected = rejectedIds.includes(m.id);

                  return (
                    <button
                      key={m.id}
                      onClick={() => setSelectedMaterialId(m.id)}
                      className={`text-left p-3 border transition-all cursor-pointer relative bg-white ${
                        selectedMaterialId === m.id
                          ? 'border-[#191816] ring-1 ring-[#191816]'
                          : 'border-[#D1C7BB] hover:border-[#736B63]'
                      }`}
                    >
                      {/* Status Badges */}
                      <div className="absolute top-2 right-2 flex space-x-1">
                        {isLoved && (
                          <span className="w-4 h-4 rounded-full bg-[#191816] text-[#C5A880] flex items-center justify-center text-[9px]">
                            ♥
                          </span>
                        )}
                        {isShortlisted && !isLoved && (
                          <span className="w-4 h-4 rounded-full bg-[#A6865A] text-white flex items-center justify-center text-[9px]">
                            ✓
                          </span>
                        )}
                        {isRejected && (
                          <span className="w-4 h-4 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center text-[9px]">
                            ✕
                          </span>
                        )}
                      </div>

                      <div className="aspect-square bg-[#E6DFD5] overflow-hidden mb-2">
                        <img src={m.swatchImage} alt={m.name} className="w-full h-full object-cover" />
                      </div>

                      <div className="text-[9px] font-mono text-[#A6865A]">{m.id}</div>
                      <h5 className="text-xs font-semibold text-[#191816] truncate">{m.name}</h5>
                      <span className="text-[9px] text-[#736B63] block uppercase mt-0.5">{m.family}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Wood & Metal Finish Samples */}
            <div className="pt-6 border-t border-[#E6DFD5] space-y-3">
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#191816]">
                Timber & Metal Finishes in Your Kit
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {finishes.map((f) => {
                  const isSelected = shortlistedIds.includes(f.id);
                  return (
                    <div
                      key={f.id}
                      className={`p-3 border bg-white ${
                        isSelected ? 'border-[#A6865A] ring-1 ring-[#A6865A]' : 'border-[#D1C7BB]'
                      }`}
                    >
                      <div className="aspect-[4/3] bg-[#E6DFD5] overflow-hidden mb-2">
                        <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[9px] font-mono text-[#A6865A] uppercase">{f.id}</span>
                      <h6 className="text-xs font-semibold text-[#191816] truncate">{f.name}</h6>
                      <p className="text-[10px] text-[#736B63] line-clamp-1 mt-0.5">{f.texture}</p>

                      <button
                        onClick={() => handleAction(f.id, isSelected ? 'rejected' : 'shortlisted')}
                        className={`mt-2 w-full py-1 text-[10px] tracking-wider uppercase border cursor-pointer ${
                          isSelected
                            ? 'bg-[#A6865A] text-white border-[#A6865A]'
                            : 'border-[#D1C7BB] text-[#2C2926] hover:border-[#191816]'
                        }`}
                      >
                        {isSelected ? '✓ In Shortlist' : '+ Add to Shortlist'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right: Live "MY SHORTLIST" Drawer & CRM Sync */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#191816] text-[#FBF9F5] p-6 border border-[#2C2926] sticky top-24 space-y-5">
              
              <div>
                <span className="text-[9px] tracking-[0.25em] uppercase text-[#C5A880] font-semibold block">
                  Live Atelier Sync
                </span>
                <h3 className="font-serif text-2xl uppercase tracking-wider font-light mt-1">
                  My Material Shortlist
                </h3>
                <p className="text-xs text-[#968E85] mt-1">
                  Selections automatically sync into your House Of Form project dossier.
                </p>
              </div>

              {/* Shortlisted Items List */}
              <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                {shortlistedMaterials.length === 0 && shortlistedFinishes.length === 0 ? (
                  <div className="p-4 border border-dashed border-[#3E3A36] text-center text-xs text-[#736B63]">
                    No materials shortlisted yet. Click "Love It" or "Shortlist" on any swatch to create your bespoke palette.
                  </div>
                ) : (
                  <>
                    {shortlistedMaterials.map((m, idx) => (
                      <div
                        key={m.id}
                        className="bg-[#2C2926] p-3 border border-[#3E3A36] flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center space-x-2.5">
                          <span className="font-mono text-[10px] text-[#C5A880]">{idx + 1}.</span>
                          <div>
                            <span className="font-mono text-[10px] text-[#968E85] block">{m.id}</span>
                            <span className="font-medium text-[#FBF9F5]">{m.name}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleAction(m.id, 'rejected')}
                          className="text-[#968E85] hover:text-white p-1"
                          title="Remove from shortlist"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}

                    {shortlistedFinishes.map((f, idx) => (
                      <div
                        key={f.id}
                        className="bg-[#2C2926] p-3 border border-[#3E3A36] flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center space-x-2.5">
                          <span className="font-mono text-[10px] text-[#C5A880]">Finish</span>
                          <div>
                            <span className="font-mono text-[10px] text-[#968E85] block">{f.id}</span>
                            <span className="font-medium text-[#FBF9F5]">{f.name}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleAction(f.id, 'rejected')}
                          className="text-[#968E85] hover:text-white p-1"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </>
                )}
              </div>

              {/* Ready to Build Callout */}
              <div className="border-t border-[#3E3A36] pt-4 space-y-3">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#C5A880] block font-semibold">
                  Ready to Build Your Piece?
                </span>

                <button
                  id="shortlist-book-consultation-btn"
                  onClick={() => setIsConsultModalOpen(true)}
                  className="w-full bg-[#C5A880] hover:bg-[#A6865A] text-[#191816] py-3 px-4 text-xs tracking-[0.2em] uppercase font-semibold flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-sm"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Book Design Consultation</span>
                </button>

                <button
                  id="shortlist-finalize-piece-btn"
                  onClick={handleFinalizeQuote}
                  className="w-full border border-[#736B63] hover:border-white text-[#D1C7BB] hover:text-white py-2.5 px-4 text-xs tracking-[0.16em] uppercase flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                >
                  <span>Finalize Spec & Request Quote</span>
                </button>

                <div className="text-[10px] text-[#968E85] space-y-1 pt-1">
                  <p>• Your ₹{settings.reservationAmount.toLocaleString('en-IN')} reservation will automatically deduct on your quote.</p>
                  <p>• Senior designer will review room layout and provide 3D visual preview.</p>
                </div>
              </div>

              {/* Quote Finalize Feedback Drawer */}
              {isQuoteFinalizeDone && (
                <div className="p-3 bg-[#2C2926] border border-[#C5A880] text-xs text-[#FBF9F5] space-y-2 animate-in fade-in">
                  <div className="flex items-center space-x-2 text-[#C5A880]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="font-semibold uppercase tracking-wider">Formal Spec Generated</span>
                  </div>
                  <p className="text-[11px] text-[#D1C7BB]">
                    Quote request dispatched to House Of Form senior studio team with your {shortlistedMaterials.length} chosen fabrics. ₹{settings.reservationAmount} reservation credit applied.
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
        defaultProduct={`${currentReservation?.productName} (${currentReservation?.variantName})`}
      />
    </div>
  );
};
