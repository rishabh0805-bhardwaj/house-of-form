/**
 * House Of Form — Flagship Product Detail View
 * The Velora — Bespoke Curved Lounge Sofa Collection
 * Architectural editorial layout with separate photo angles,
 * proposed dimension sheets, configuration selector, and Material Atelier trigger.
 */

import React, { useState, useEffect } from 'react';
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
  Heart,
  FileText,
  Eye,
  Sliders,
  Maximize2,
} from 'lucide-react';
import { ConsultationModal } from './ConsultationModal';
import { MotionFadeIn } from './MotionFadeIn';
import { VeloraMasterSheet } from './VeloraMasterSheet';

export const ProductDetailView: React.FC = () => {
  const {
    products,
    selectedProductId,
    setSelectedProductId,
    materials,
    finishes,
    setIsReservationModalOpen,
    settings,
    recordAnalyticsEvent,
    setCurrentView,
    wishlist,
    toggleWishlist,
    isInWishlist,
    setIsWishlistDrawerOpen,
  } = useStore();

  const product = products.find((p) => p.id === selectedProductId) || products[0];

  const [activeVariantId, setActiveVariantId] = useState<string>(
    product.variants.find((v) => v.isPopular)?.id || product.variants[0].id
  );
  const [activeImageKey, setActiveImageKey] = useState<'hero' | 'front' | 'threeQuarter' | 'side' | 'rear' | 'detail' | 'lifestyle'>('hero');
  const [dimensionUnit, setDimensionUnit] = useState<'cm' | 'in'>('cm');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'studio' | 'mastersheet'>('studio');

  // Synchronize active variant when product selection changes
  useEffect(() => {
    const popularVar = product.variants.find((v) => v.isPopular)?.id || product.variants[0]?.id;
    if (popularVar) {
      setActiveVariantId(popularVar);
    }
    setActiveImageKey('hero');
  }, [product.id]);

  const activeVariant =
    product.variants.find((v) => v.id === activeVariantId) || product.variants[0];

  const hasOrientationVariants = product.variants.some((v) => !!v.armOrientation);

  // Derived capacities for asymmetric/architectural sofas
  const availableCapacities = Array.from(
    new Set(product.variants.map((v) => v.configurationType || v.seatingCapacity))
  );

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
      {/* Editorial Breadcrumb & Dossier Mode Switcher */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E6DFD5] pb-4">
          <div className="flex flex-wrap items-center gap-3">
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

            {/* Quick Product Switcher for Catalogue */}
            <div className="flex items-center space-x-1 pl-0 sm:pl-3 sm:border-l sm:border-[#D1C7BB]">
              {products.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setSelectedProductId(p.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-2.5 py-1 text-[10px] tracking-wider uppercase transition-all cursor-pointer font-medium ${
                    p.id === product.id
                      ? 'bg-[#191816] text-[#FBF9F5]'
                      : 'bg-white text-[#736B63] border border-[#D1C7BB] hover:border-[#191816] hover:text-[#191816]'
                  }`}
                >
                  {p.productNo ? `0${p.productNo.replace(/^0+/, '')} ` : ''}{p.name}
                </button>
              ))}
            </div>
          </div>

          {/* Master View Switcher: Studio View vs Master Technical Dossier */}
          <div className="flex items-center space-x-2">
            <div className="inline-flex items-center bg-[#F4EFEB] p-1 border border-[#D1C7BB]">
              <button
                id="pdp-studio-view-toggle"
                onClick={() => {
                  setViewMode('studio');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex items-center space-x-1.5 px-3.5 py-1.5 text-xs tracking-wider uppercase font-semibold transition-all cursor-pointer ${
                  viewMode === 'studio'
                    ? 'bg-[#191816] text-[#FBF9F5] shadow-sm'
                    : 'text-[#736B63] hover:text-[#191816]'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Architectural Studio</span>
              </button>

              <button
                id="pdp-mastersheet-view-toggle"
                onClick={() => {
                  setViewMode('mastersheet');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex items-center space-x-1.5 px-3.5 py-1.5 text-xs tracking-wider uppercase font-semibold transition-all cursor-pointer ${
                  viewMode === 'mastersheet'
                    ? 'bg-[#191816] text-[#FBF9F5] shadow-sm'
                    : 'text-[#736B63] hover:text-[#191816]'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Master Sheet & Dossier</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RENDER MASTER TECHNICAL DOSSIER IF SELECTED */}
      {viewMode === 'mastersheet' ? (
        <VeloraMasterSheet
          product={product}
          onReserveClick={handleOpenReservation}
          onConsultantClick={() => setIsConsultationOpen(true)}
        />
      ) : (
        <>
          {/* Main Product Hero Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Separate Editorial Product Photography (Strictly separate views, NO collages) */}
          <div className="lg:col-span-7">
            <MotionFadeIn distance={20} duration={0.8} className="space-y-4">
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
            </MotionFadeIn>
          </div>

          {/* Right Column: Specifications, Configurations & The Material Atelier Unlock */}
          <div className="lg:col-span-5">
            <MotionFadeIn distance={24} delay={0.1} duration={0.8} className="space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-[#191816] text-[#C5A880] px-2 py-0.5 font-semibold">
                    Product {product.productNo || '01'} · Code: {product.productCode || 'VEL-01'}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#A6865A] font-semibold">
                    {product.subcategory}
                  </span>
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#191816] tracking-[0.05em] uppercase font-light">
                  {product.name}
                </h1>
                <p className="font-serif italic text-lg text-[#736B63] mt-1">
                  {product.tagline}
                </p>

                {/* Design Tags */}
                {product.designTags && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {product.designTags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] uppercase tracking-wider bg-[#F4EFEB] border border-[#D1C7BB] text-[#736B63] px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick Wishlist Icon Button */}
              <button
                id="pdp-quick-wishlist-btn"
                onClick={() => toggleWishlist(product.id)}
                className={`p-3 border transition-colors cursor-pointer rounded-full shrink-0 ml-4 ${
                  isInWishlist(product.id)
                    ? 'border-[#C5A880] bg-[#F7F4EE] text-[#C5A880]'
                    : 'border-[#D1C7BB] hover:border-[#191816] text-[#736B63] hover:text-[#191816] bg-white'
                }`}
                title={isInWishlist(product.id) ? 'Saved in Wishlist' : 'Save to Wishlist'}
                aria-label="Save to Wishlist"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isInWishlist(product.id) ? 'fill-[#C5A880] text-[#C5A880]' : ''
                  }`}
                />
              </button>
            </div>

            {/* Design Concept Callout if defined */}
            {product.designConcept && (
              <div className="bg-[#F4EFEB] border-l-2 border-[#A6865A] p-3 text-xs text-[#2C2926] italic font-serif leading-relaxed">
                "{product.designConcept}"
              </div>
            )}

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

            {/* If Asymmetric/Orientation Product (like Elyra), show Orientation & Size Selectors */}
            {hasOrientationVariants && (
              <div className="space-y-4 bg-white border border-[#D1C7BB] p-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#191816]">
                      1. Seating Capacity / Dimension
                    </label>
                    <span className="text-[9px] text-[#A6865A] font-medium uppercase">
                      Architectural Size
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {availableCapacities.map((cap) => {
                      const isCapActive = activeVariant.configurationType === cap || activeVariant.seatingCapacity === cap;
                      return (
                        <button
                          key={cap}
                          onClick={() => {
                            const match = product.variants.find(
                              (v) =>
                                (v.configurationType === cap || v.seatingCapacity === cap) &&
                                v.armOrientation === (activeVariant.armOrientation || 'Left Arm')
                            ) || product.variants.find((v) => v.configurationType === cap || v.seatingCapacity === cap);
                            if (match) setActiveVariantId(match.id);
                          }}
                          className={`py-2 px-2 text-center border text-xs uppercase tracking-wider transition-all cursor-pointer ${
                            isCapActive
                              ? 'bg-[#191816] text-white border-[#191816] font-semibold'
                              : 'bg-[#FBF9F5] text-[#736B63] border-[#D1C7BB] hover:border-[#191816]'
                          }`}
                        >
                          <div>{cap}</div>
                          {cap.includes('2.5') && (
                            <span className="text-[8px] bg-[#C5A880] text-[#191816] px-1 py-0.2 uppercase font-bold mt-0.5 inline-block">
                              Flagship
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#E6DFD5]">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#191816]">
                      2. Architectural Layout & Orientation
                    </label>
                    <span className="text-[9px] text-[#736B63] uppercase">
                      Single Arm + Table
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        const currentCap = activeVariant.configurationType || activeVariant.seatingCapacity;
                        const match = product.variants.find(
                          (v) =>
                            (v.configurationType === currentCap || v.seatingCapacity === currentCap) &&
                            v.armOrientation === 'Left Arm'
                        );
                        if (match) setActiveVariantId(match.id);
                      }}
                      className={`p-2.5 text-left border transition-all cursor-pointer ${
                        activeVariant.armOrientation === 'Left Arm'
                          ? 'border-[#191816] bg-[#191816] text-white'
                          : 'border-[#D1C7BB] bg-[#FBF9F5] text-[#2C2926] hover:border-[#191816]'
                      }`}
                    >
                      <div className="text-xs font-semibold uppercase">Left Arm · Right Table</div>
                      <p className={`text-[10px] mt-0.5 ${activeVariant.armOrientation === 'Left Arm' ? 'text-[#D1C7BB]' : 'text-[#736B63]'}`}>
                        Arm on left, cantilevered wooden table on right
                      </p>
                    </button>

                    <button
                      onClick={() => {
                        const currentCap = activeVariant.configurationType || activeVariant.seatingCapacity;
                        const match = product.variants.find(
                          (v) =>
                            (v.configurationType === currentCap || v.seatingCapacity === currentCap) &&
                            v.armOrientation === 'Right Arm'
                        );
                        if (match) setActiveVariantId(match.id);
                      }}
                      className={`p-2.5 text-left border transition-all cursor-pointer ${
                        activeVariant.armOrientation === 'Right Arm'
                          ? 'border-[#191816] bg-[#191816] text-white'
                          : 'border-[#D1C7BB] bg-[#FBF9F5] text-[#2C2926] hover:border-[#191816]'
                      }`}
                    >
                      <div className="text-xs font-semibold uppercase">Right Arm · Left Table</div>
                      <p className={`text-[10px] mt-0.5 ${activeVariant.armOrientation === 'Right Arm' ? 'text-[#D1C7BB]' : 'text-[#736B63]'}`}>
                        Cantilevered table on left, arm on right
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Configuration Selector */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#2C2926]">
                  {hasOrientationVariants ? 'Catalogue Variant Direct Selection' : 'Select Configuration'}
                </label>
                <span className="text-[10px] text-[#736B63] uppercase">
                  {product.variants.length} Curated Options
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setActiveVariantId(v.id)}
                    className={`text-left p-3 border transition-all cursor-pointer ${
                      activeVariantId === v.id
                        ? 'border-[#191816] bg-[#191816] text-[#FBF9F5]'
                        : 'border-[#D1C7BB] bg-white text-[#2C2926] hover:border-[#191816]'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold uppercase tracking-wider line-clamp-1">{v.name}</span>
                      {v.isPopular && (
                        <span className="text-[9px] bg-[#C5A880] text-[#191816] px-1.5 py-0.5 font-bold uppercase tracking-wider shrink-0 ml-1">
                          Flagship
                        </span>
                      )}
                    </div>
                    <p className={`text-[10px] mt-1 ${activeVariantId === v.id ? 'text-[#D1C7BB]' : 'text-[#736B63]'}`}>
                      {v.seatingCapacity} {v.armOrientation ? `· ${v.armOrientation}` : ''}
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    id="pdp-speak-consultant-btn"
                    onClick={() => setIsConsultationOpen(true)}
                    className="w-full border border-[#736B63] hover:border-[#D1C7BB] text-[#D1C7BB] hover:text-white py-2.5 px-3 text-xs tracking-[0.14em] uppercase flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>Consultant</span>
                  </button>
                  <button
                    id="pdp-save-to-wishlist-btn"
                    onClick={() => toggleWishlist(product.id)}
                    className={`w-full py-2.5 px-3 text-xs tracking-[0.14em] uppercase flex items-center justify-center space-x-1.5 transition-all cursor-pointer border ${
                      isInWishlist(product.id)
                        ? 'bg-[#23201D] text-[#C5A880] border-[#C5A880]'
                        : 'border-[#736B63] hover:border-[#D1C7BB] text-[#D1C7BB] hover:text-white'
                    }`}
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${
                        isInWishlist(product.id) ? 'fill-[#C5A880] text-[#C5A880]' : 'text-[#C5A880]'
                      }`}
                    />
                    <span>{isInWishlist(product.id) ? 'Saved' : 'Wishlist'}</span>
                  </button>
                </div>
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
            </MotionFadeIn>
          </div>
        </div>
      </section>

      {/* Editorial Section: Product Story & Design Philosophy */}
      <section className="bg-[#F4EFEB] border-y border-[#E6DFD5] py-16 lg:py-20">
        <MotionFadeIn distance={24} duration={0.8} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-4 space-y-4">
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#A6865A] font-semibold block">
                The Design Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#191816] tracking-[0.05em] uppercase font-light leading-tight">
                Furniture should define a space, not simply occupy it.
              </h2>
              <p className="font-serif italic text-[#736B63] text-lg">
                "Where Italian design sensibility meets bespoke Indian craftsmanship."
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setViewMode('mastersheet')}
                  className="inline-flex items-center space-x-1.5 text-xs text-[#A6865A] hover:text-[#191816] font-semibold uppercase tracking-wider cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Read Full Master Sheet Dossier →</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6 text-[#2C2926] text-sm sm:text-[15px] leading-relaxed">
              <p>{product.productStory}</p>
              <p>{product.designPhilosophy}</p>

              {/* 3 Core Principles from Master Sheet */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-4 border border-[#D1C7BB]">
                  <span className="text-[10px] font-mono text-[#A6865A] uppercase block">Principle 01</span>
                  <h5 className="font-serif text-sm uppercase text-[#191816] font-semibold mt-1">Reduce Unnecessary</h5>
                  <p className="text-[11px] text-[#736B63] mt-1">Eliminating sharp corners for continuous, sculptural flow.</p>
                </div>
                <div className="bg-white p-4 border border-[#D1C7BB]">
                  <span className="text-[10px] font-mono text-[#A6865A] uppercase block">Principle 02</span>
                  <h5 className="font-serif text-sm uppercase text-[#191816] font-semibold mt-1">Refine Proportion</h5>
                  <p className="text-[11px] text-[#736B63] mt-1">Balanced 66cm lounge depth and low-profile European backrest.</p>
                </div>
                <div className="bg-white p-4 border border-[#D1C7BB]">
                  <span className="text-[10px] font-mono text-[#A6865A] uppercase block">Principle 03</span>
                  <h5 className="font-serif text-sm uppercase text-[#191816] font-semibold mt-1">Amplify Comfort</h5>
                  <p className="text-[11px] text-[#736B63] mt-1">42kg/m³ high-resilience core with plush micro-down wrap.</p>
                </div>
              </div>

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
        </MotionFadeIn>
      </section>

      {/* Technical Drawing & Dimension Sheet Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <MotionFadeIn distance={24} duration={0.8} className="border border-[#E6DFD5] bg-white p-6 sm:p-10 space-y-8">
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
          <div className="bg-[#FBF9F5] border-l-2 border-[#C5A880] p-3.5 text-xs text-[#736B63] leading-relaxed">
            <strong className="text-[#191816] uppercase tracking-wider text-[10px] block mb-0.5">
              Important Catalogue Notice:
            </strong>
            The dimensions displayed below are <strong>PROPOSED / RECOMMENDED</strong> catalogue dimensions and must not be interpreted as certified manufacturing dimensions. Because each House Of Form piece is bespoke, final approved production dimensions will replace these values during your personal Design Consultation before fabrication commences.
          </div>

          {/* Elevation Diagrams Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Diagram Visualization */}
            <div className="lg:col-span-7 bg-[#F4EFEB] p-8 border border-[#D1C7BB] text-center">
              <div className="max-w-md mx-auto space-y-4">
                <svg viewBox="0 0 400 220" className="w-full h-auto text-[#191816]">
                  {hasOrientationVariants ? (
                    /* Architectural Asymmetric Elevation for Elyra */
                    activeVariant.armOrientation === 'Right Arm' ? (
                      /* Table Left, Arm Right */
                      <g>
                        {/* Continuous Wooden Plinth */}
                        <rect x="35" y="166" width="330" height="12" fill="#A6865A" stroke="#191816" strokeWidth="1.5" />
                        
                        {/* Integrated Wooden Side Table (Left) */}
                        <rect x="35" y="132" width="75" height="34" fill="#C5A880" fillOpacity="0.35" stroke="#191816" strokeWidth="1.5" />
                        <line x1="35" y1="132" x2="110" y2="132" stroke="#A6865A" strokeWidth="2.5" />
                        <text x="72" y="152" fill="#736B63" fontSize="8" textAnchor="middle" fontFamily="sans-serif">TABLE</text>
                        
                        {/* Main Upholstered Seat Cushion */}
                        <rect x="110" y="126" width="215" height="40" rx="3" fill="#FBF9F5" stroke="#191816" strokeWidth="1.5" />
                        <line x1="110" y1="126" x2="325" y2="126" stroke="#A6865A" strokeWidth="1.5" strokeDasharray="3,3" />

                        {/* Low Architectural Backrest */}
                        <path d="M 110 126 L 110 78 Q 110 72 120 72 L 320 72 Q 325 72 325 78 L 325 126 Z" fill="#EFECE6" stroke="#191816" strokeWidth="1.5" />
                        
                        {/* Sculptural Rounded Single Arm (Right) */}
                        <path d="M 320 166 L 320 102 Q 320 90 342 90 Q 365 90 365 102 L 365 166 Z" fill="#FBF9F5" stroke="#191816" strokeWidth="1.5" />
                        <text x="342" y="135" fill="#736B63" fontSize="8" textAnchor="middle" fontFamily="sans-serif">ARM</text>
                      </g>
                    ) : (
                      /* Table Right, Arm Left (Default Flagship) */
                      <g>
                        {/* Continuous Wooden Plinth */}
                        <rect x="35" y="166" width="330" height="12" fill="#A6865A" stroke="#191816" strokeWidth="1.5" />

                        {/* Sculptural Rounded Single Arm (Left) */}
                        <path d="M 35 166 L 35 102 Q 35 90 58 90 Q 80 90 80 102 L 80 166 Z" fill="#FBF9F5" stroke="#191816" strokeWidth="1.5" />
                        <text x="58" y="135" fill="#736B63" fontSize="8" textAnchor="middle" fontFamily="sans-serif">ARM</text>

                        {/* Low Architectural Backrest */}
                        <path d="M 75 126 L 75 78 Q 75 72 85 72 L 285 72 Q 290 72 290 78 L 290 126 Z" fill="#EFECE6" stroke="#191816" strokeWidth="1.5" />

                        {/* Main Upholstered Seat Cushion */}
                        <rect x="75" y="126" width="215" height="40" rx="3" fill="#FBF9F5" stroke="#191816" strokeWidth="1.5" />
                        <line x1="75" y1="126" x2="290" y2="126" stroke="#A6865A" strokeWidth="1.5" strokeDasharray="3,3" />

                        {/* Integrated Wooden Side Table (Right) */}
                        <rect x="290" y="132" width="75" height="34" fill="#C5A880" fillOpacity="0.35" stroke="#191816" strokeWidth="1.5" />
                        <line x1="290" y1="132" x2="365" y2="132" stroke="#A6865A" strokeWidth="2.5" />
                        <text x="328" y="152" fill="#736B63" fontSize="8" textAnchor="middle" fontFamily="sans-serif">TABLE</text>
                      </g>
                    )
                  ) : (
                    /* Front Elevation Outline of Curved Velora */
                    <g>
                      <path
                        d="M 30 170 Q 30 100 70 80 Q 200 65 330 80 Q 370 100 370 170 Z"
                        fill="none"
                        stroke="#191816"
                        strokeWidth="2"
                      />
                      <path
                        d="M 45 135 Q 200 130 355 135"
                        fill="none"
                        stroke="#A6865A"
                        strokeWidth="1.5"
                        strokeDasharray="4,3"
                      />
                      <rect x="50" y="170" width="300" height="12" fill="#C5A880" />
                    </g>
                  )}
                  
                  {/* Dimension Annotations */}
                  <line x1="35" y1="195" x2="365" y2="195" stroke="#736B63" strokeWidth="1" />
                  <text x="200" y="210" fill="#736B63" fontSize="11" textAnchor="middle" fontFamily="sans-serif">
                    Width: {dimensionUnit === 'cm' ? `${activeVariant.dimensions.widthCm} cm` : `${activeVariant.dimensions.widthIn} in`}
                  </text>
                  <line x1="385" y1="72" x2="385" y2="178" stroke="#736B63" strokeWidth="1" />
                  <text x="390" y="128" fill="#736B63" fontSize="10" textAnchor="start" fontFamily="sans-serif">
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

          {/* ALL CONFIGURATIONS COMPARISON TABLE */}
          <div className="pt-6 border-t border-[#E6DFD5] space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#191816]">
                All Configurations Comparison ({product.variants.length} Curated Options)
              </h4>
              <span className="text-[10px] text-[#A6865A] uppercase font-semibold">
                Catalogue Matrix
              </span>
            </div>

            <div className="overflow-x-auto border border-[#E6DFD5]">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#F4EFEB] text-[#191816] uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Configuration</th>
                    <th className="p-3">Seating</th>
                    {hasOrientationVariants && <th className="p-3">Orientation</th>}
                    <th className="p-3">Width</th>
                    <th className="p-3">Depth</th>
                    <th className="p-3">Height</th>
                    <th className="p-3">Seat Depth</th>
                    <th className="p-3">Catalogue Price</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6DFD5]">
                  {product.variants.map((v) => (
                    <tr key={v.id} className={activeVariantId === v.id ? 'bg-[#FBF9F5] font-medium' : ''}>
                      <td className="p-3 font-semibold text-[#191816]">
                        {v.name}
                        {v.isPopular && <span className="ml-2 text-[9px] bg-[#C5A880] text-[#191816] px-1 py-0.5 uppercase">Flagship</span>}
                      </td>
                      <td className="p-3 text-[#736B63]">{v.seatingCapacity}</td>
                      {hasOrientationVariants && (
                        <td className="p-3 text-[#736B63] font-mono text-[11px]">
                          {v.armOrientation || 'Symmetrical'}
                        </td>
                      )}
                      <td className="p-3 font-mono">{dimensionUnit === 'cm' ? `${v.dimensions.widthCm}cm` : `${v.dimensions.widthIn}in`}</td>
                      <td className="p-3 font-mono">{dimensionUnit === 'cm' ? `${v.dimensions.depthCm}cm` : `${v.dimensions.depthIn}in`}</td>
                      <td className="p-3 font-mono">{dimensionUnit === 'cm' ? `${v.dimensions.heightCm}cm` : `${v.dimensions.heightIn}in`}</td>
                      <td className="p-3 font-mono">{dimensionUnit === 'cm' ? `${v.dimensions.seatDepthCm}cm` : `${v.dimensions.seatDepthIn}in`}</td>
                      <td className="p-3 font-mono font-semibold text-[#191816]">₹{v.basePrice.toLocaleString('en-IN')}</td>
                      <td className="p-3">
                        <button
                          onClick={() => setActiveVariantId(v.id)}
                          className={`px-2.5 py-1 text-[10px] uppercase font-semibold cursor-pointer ${
                            activeVariantId === v.id
                              ? 'bg-[#191816] text-white'
                              : 'border border-[#D1C7BB] text-[#736B63] hover:text-[#191816]'
                          }`}
                        >
                          {activeVariantId === v.id ? 'Selected' : 'Select'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ARCHITECTURAL VISUAL CLASSIFICATION & MATERIAL DIRECTION */}
          {product.visualClassification && (
            <div className="pt-8 border-t border-[#E6DFD5] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#A6865A] font-semibold block">
                    Architectural Taxonomy
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-[#191816] uppercase tracking-wider font-light">
                    Visual Classification Schedule
                  </h4>
                </div>
                <span className="text-[11px] font-mono text-[#736B63]">
                  Reference No: {product.productCode || product.sku}
                </span>
              </div>

              {/* 13-point Visual Classification Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                <div className="bg-[#FBF9F5] border border-[#D1C7BB] p-3">
                  <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Primary Category</span>
                  <span className="font-semibold text-[#191816] mt-0.5 block">{product.visualClassification.primaryCategory}</span>
                </div>
                <div className="bg-[#FBF9F5] border border-[#D1C7BB] p-3">
                  <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Subcategory</span>
                  <span className="font-semibold text-[#191816] mt-0.5 block">{product.visualClassification.subcategory}</span>
                </div>
                <div className="bg-[#FBF9F5] border border-[#D1C7BB] p-3">
                  <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Silhouette</span>
                  <span className="font-semibold text-[#191816] mt-0.5 block">{product.visualClassification.silhouette}</span>
                </div>
                <div className="bg-[#FBF9F5] border border-[#D1C7BB] p-3">
                  <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Back Detail</span>
                  <span className="font-semibold text-[#191816] mt-0.5 block">{product.visualClassification.back}</span>
                </div>
                <div className="bg-[#FBF9F5] border border-[#D1C7BB] p-3">
                  <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Arm Form</span>
                  <span className="font-semibold text-[#191816] mt-0.5 block">{product.visualClassification.arm}</span>
                </div>
                <div className="bg-[#FBF9F5] border border-[#D1C7BB] p-3">
                  <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Base Structure</span>
                  <span className="font-semibold text-[#191816] mt-0.5 block">{product.visualClassification.base}</span>
                </div>
                <div className="bg-[#FBF9F5] border border-[#D1C7BB] p-3">
                  <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Seat Construction</span>
                  <span className="font-semibold text-[#191816] mt-0.5 block">{product.visualClassification.seat}</span>
                </div>
                <div className="bg-[#FBF9F5] border border-[#D1C7BB] p-3">
                  <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Side Surface</span>
                  <span className="font-semibold text-[#191816] mt-0.5 block">{product.visualClassification.sideSurface}</span>
                </div>
                <div className="bg-[#FBF9F5] border border-[#D1C7BB] p-3">
                  <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Profile</span>
                  <span className="font-semibold text-[#191816] mt-0.5 block">{product.visualClassification.profile}</span>
                </div>
                <div className="bg-[#FBF9F5] border border-[#D1C7BB] p-3">
                  <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Design Character</span>
                  <span className="font-semibold text-[#191816] mt-0.5 block">{product.visualClassification.designCharacter}</span>
                </div>
                <div className="bg-[#FBF9F5] border border-[#D1C7BB] p-3">
                  <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Style Language</span>
                  <span className="font-semibold text-[#191816] mt-0.5 block">{product.visualClassification.style}</span>
                </div>
                <div className="bg-[#FBF9F5] border border-[#D1C7BB] p-3">
                  <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Customization Level</span>
                  <span className="font-semibold text-[#191816] mt-0.5 block">{product.visualClassification.customization}</span>
                </div>
              </div>
            </div>
          )}

          {/* MATERIAL DIRECTION & MANUFACTURING ADVISORY */}
          {product.materialDirection && (
            <div className="pt-6 border-t border-[#E6DFD5] space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#191816]">
                  Material Direction & Palette Compatibility
                </h4>
                <span className="text-[10px] bg-[#C5A880]/20 text-[#A6865A] border border-[#C5A880]/40 px-2 py-0.5 uppercase font-semibold">
                  Pre-Manufacturing Spec
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="border border-[#D1C7BB] p-4 bg-[#FBF9F5]">
                  <span className="text-[10px] uppercase text-[#736B63] tracking-wider block">Upholstery</span>
                  <span className="font-medium text-[#191816] mt-1 block">{product.materialDirection.upholstery}</span>
                </div>
                <div className="border border-[#D1C7BB] p-4 bg-[#FBF9F5]">
                  <span className="text-[10px] uppercase text-[#736B63] tracking-wider block">Timber Element</span>
                  <span className="font-medium text-[#191816] mt-1 block">{product.materialDirection.timber}</span>
                </div>
                <div className="border border-[#D1C7BB] p-4 bg-[#FBF9F5]">
                  <span className="text-[10px] uppercase text-[#736B63] tracking-wider block">Base Plinth</span>
                  <span className="font-medium text-[#191816] mt-1 block">{product.materialDirection.base}</span>
                </div>
                <div className="border border-[#D1C7BB] p-4 bg-[#FBF9F5]">
                  <span className="text-[10px] uppercase text-[#736B63] tracking-wider block">Accent Arm</span>
                  <span className="font-medium text-[#191816] mt-1 block">{product.materialDirection.accent}</span>
                </div>
              </div>

              {product.materialDirection.notes && (
                <div className="bg-[#F4EFEB] border-l-2 border-[#A6865A] p-3 text-[11px] text-[#736B63] leading-relaxed">
                  <strong className="text-[#191816] uppercase text-[10px] block mb-0.5">Manufacturing Note:</strong>
                  {product.materialDirection.notes}
                </div>
              )}
            </div>
          )}
        </MotionFadeIn>
      </section>

      {/* Curated Material Swatches Available for The Piece */}
      <section className="bg-[#F4EFEB] border-t border-[#E6DFD5] py-16">
        <MotionFadeIn distance={24} duration={0.8} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </MotionFadeIn>
      </section>

      {/* Frame Integrity & Construction Detail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MotionFadeIn distance={24} duration={0.8} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
        </MotionFadeIn>
      </section>

      {/* Architectural FAQs */}
      <section className="bg-[#F4EFEB] border-t border-[#E6DFD5] py-16">
        <MotionFadeIn distance={24} duration={0.8} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </MotionFadeIn>
      </section>
        </>
      )}

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
              onClick={() => toggleWishlist(product.id)}
              className={`p-2.5 border transition-colors cursor-pointer ${
                isInWishlist(product.id)
                  ? 'border-[#C5A880] text-[#C5A880] bg-[#23201D]'
                  : 'border-[#736B63] text-[#D1C7BB] hover:text-white'
              }`}
              title={isInWishlist(product.id) ? 'Saved in Wishlist' : 'Save to Wishlist'}
              aria-label="Wishlist toggle"
            >
              <Heart
                className={`w-4 h-4 ${
                  isInWishlist(product.id) ? 'fill-[#C5A880] text-[#C5A880]' : ''
                }`}
              />
            </button>
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
