/**
 * House Of Form — The Velora Product Master Sheet & Technical Dossier
 * Website-ready technical documentation, architectural specifications,
 * sales toolkit, and WhatsApp catalogue generator for Product 01: The Velora.
 */

import React, { useState } from 'react';
import { Product, ProductVariant } from '../types';
import {
  FileText,
  Copy,
  Check,
  Download,
  Share2,
  Printer,
  ChevronDown,
  Layers,
  Shield,
  Ruler,
  Compass,
  Sparkles,
  Truck,
  HeartHandshake,
  Tag,
  Search,
  ExternalLink,
} from 'lucide-react';
import { MotionFadeIn } from './MotionFadeIn';

interface VeloraMasterSheetProps {
  product: Product;
  onReserveClick: () => void;
  onConsultantClick: () => void;
}

export const VeloraMasterSheet: React.FC<VeloraMasterSheetProps> = ({
  product,
  onReserveClick,
  onConsultantClick,
}) => {
  const master = product.masterSheet;
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [dimensionUnit, setDimensionUnit] = useState<'cm' | 'in'>('cm');
  const [activeSectionFilter, setActiveSectionFilter] = useState<string>('all');

  if (!master) {
    return null;
  }

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  // WhatsApp formatted string generator
  const getWhatsAppCatalogueText = () => {
    return `*HOUSE OF FORM — ${product.name.toUpperCase()}*
_${product.tagline}_
Product Code: ${master.productCode}
Collection: ${master.additionalInformation['Collection'] || product.name}

*${master.theDesign.subheadline}*
${master.theDesign.paragraphs.slice(0, 2).join('\n\n')}

*CONFIGURATIONS & DIMENSIONS:*
${product.variants
  .map(
    (v) =>
      `• *${v.name}* (${v.seatingCapacity}): ${v.dimensions.widthCm}cm W × ${v.dimensions.depthCm}cm D × ${v.dimensions.heightCm}cm H — Starting from ₹${v.basePrice.toLocaleString('en-IN')}`
  )
  .join('\n')}

*KEY FEATURES:*
• Kiln-dried seasoned Sal & European Birch hardwood frame (10-Year Guarantee)
• Dual-density high-resilience foam core with micro-down comfort envelope
• Continuous wooden plinth / concealed plinth architectural base
• Bespoke millimeter dimensions calibrated to your architectural layout
• White-Glove in-home delivery & placement across Delhi NCR, Mumbai, Bengaluru, Hyderabad & Pune

*Lead Time:* 5–7 Weeks (Handcrafted in New Delhi NCR)
*Inquiries & Bespoke Blueprints:* https://houseofform.com`;
  };

  // JSON Structured Data for technical / SEO use
  const structuredDataJson = JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      image: [product.images.hero, product.images.front, product.images.threeQuarter],
      description: master.seo.metaDescription,
      sku: product.sku,
      mpn: master.productCode,
      brand: {
        '@type': 'Brand',
        name: 'House Of Form',
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: Math.min(...product.variants.map((v) => v.basePrice)),
        highPrice: Math.max(...product.variants.map((v) => v.basePrice)),
        offerCount: product.variants.length,
        availability: 'https://schema.org/PreOrder',
        itemCondition: 'https://schema.org/NewCondition',
      },
      material: 'Kiln-Dried Hardwood, Pirelli Webbing, Premium Bouclé / Italian Linen / Velvet',
      countryOfOrigin: {
        '@type': 'Country',
        name: 'India',
      },
    },
    null,
    2
  );

  return (
    <div className="bg-[#FBF9F5] text-[#191816]">
      {/* Top Action Bar for Technical Dossier */}
      <div className="bg-[#23201D] text-[#FBF9F5] border-y border-[#3E3A36] py-3 px-4 sm:px-6 sticky top-16 z-20 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#FBF9F5]">
              Master Technical Dossier: {product.sku}
            </span>
            <span className="hidden md:inline text-[10px] text-[#A6865A] font-mono border-l border-[#3E3A36] pl-3">
              Document Version: 2026.01 · Website-Ready Specification
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => copyToClipboard(getWhatsAppCatalogueText(), 'whatsapp')}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/30 text-[10px] tracking-wider uppercase font-semibold transition-colors cursor-pointer"
            >
              {copiedKey === 'whatsapp' ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedKey === 'whatsapp' ? 'WhatsApp Text Copied' : 'Copy for WhatsApp'}</span>
            </button>

            <button
              onClick={() => window.print()}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#2C2926] border border-[#736B63] text-[#D1C7BB] hover:text-white text-[10px] tracking-wider uppercase font-medium transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print Dossier</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
        
        {/* DOCUMENT HEADER BLOCK */}
        <section className="border-b-2 border-[#191816] pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="text-[11px] tracking-[0.3em] uppercase text-[#A6865A] font-semibold">
                HOUSE OF FORM · SOFA COLLECTION — PRODUCT {product.productNo || '01'}
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl text-[#191816] tracking-[0.04em] uppercase font-light mt-2">
                {product.name}
              </h1>
              <p className="font-serif italic text-xl text-[#736B63] mt-1">
                {product.tagline}
              </p>
            </div>

            <div className="bg-[#F4EFEB] border border-[#D1C7BB] p-4 text-xs space-y-1.5 min-w-[280px]">
              <div className="flex justify-between">
                <span className="text-[#736B63] uppercase text-[10px] tracking-wider">Product Code</span>
                <span className="font-mono font-bold text-[#191816]">{master.productCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#736B63] uppercase text-[10px] tracking-wider">Category</span>
                <span className="font-medium text-[#191816]">{master.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#736B63] uppercase text-[10px] tracking-wider">Subcategory</span>
                <span className="font-medium text-[#191816]">{master.subcategory}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#736B63] uppercase text-[10px] tracking-wider">Design Language</span>
                <span className="font-medium text-[#A6865A]">{master.designLanguage}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#736B63] uppercase text-[10px] tracking-wider">Configurations</span>
                <span className="font-medium text-[#191816]">{master.configurationsSummary}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#736B63] uppercase text-[10px] tracking-wider">Crafting Status</span>
                <span className="font-medium text-[#191816]">{master.craftingStatus}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 01 — THE DESIGN */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-[#E6DFD5] pb-12">
          <div className="lg:col-span-4">
            <span className="text-[11px] font-mono text-[#A6865A] uppercase tracking-wider block">
              Section 01
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-wide text-[#191816] mt-1">
              The Design
            </h2>
            <p className="font-serif italic text-[#736B63] text-base mt-2">
              "{master.theDesign.subheadline}"
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4 text-sm sm:text-[15px] leading-relaxed text-[#2C2926]">
            <h3 className="font-serif text-xl sm:text-2xl text-[#191816] font-light">
              {master.theDesign.headline}
            </h3>
            {master.theDesign.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
            <div className="p-4 bg-[#F4EFEB] border-l-2 border-[#A6865A] font-serif italic text-base text-[#191816]">
              "{master.theDesign.closingStatement}"
            </div>
          </div>
        </section>

        {/* 02 — DESIGN PHILOSOPHY */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-[#E6DFD5] pb-12">
          <div className="lg:col-span-4">
            <span className="text-[11px] font-mono text-[#A6865A] uppercase tracking-wider block">
              Section 02
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-wide text-[#191816] mt-1">
              Design Philosophy
            </h2>
            <p className="font-serif italic text-[#736B63] text-base mt-2">
              {master.designPhilosophyDetails.headline}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {/* 3 Core Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {master.designPhilosophyDetails.mantra.map((item, idx) => (
                <div key={idx} className="bg-white p-5 border border-[#D1C7BB] space-y-2">
                  <span className="text-[10px] font-mono text-[#A6865A] tracking-widest block">
                    PRINCIPLE 0{idx + 1}
                  </span>
                  <h4 className="font-serif text-base uppercase text-[#191816] font-semibold">
                    {item}
                  </h4>
                  <p className="text-xs text-[#736B63] leading-relaxed">
                    {idx === 0 && 'Eliminating aggressive 90-degree corners in favor of flowing, inviting contours.'}
                    {idx === 1 && 'Balanced seat depth, lumbar curvature, and architectural floor footprint.'}
                    {idx === 2 && 'Layered multi-density foams paired with micro-down for deep immersion.'}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-sm leading-relaxed text-[#2C2926]">
              {master.designPhilosophyDetails.fullDescription}
            </p>

            {/* Key Characteristics */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#191816] mb-3">
                Key Design Characteristics:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#2C2926]">
                {master.designPhilosophyDetails.keyCharacteristics.map((char, idx) => (
                  <div key={idx} className="flex items-start space-x-2 bg-white p-3 border border-[#E6DFD5]">
                    <Check className="w-4 h-4 text-[#A6865A] shrink-0 mt-0.5" />
                    <span>{char}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 03 & 04 — PRODUCT DESCRIPTION & THE HOF DIFFERENCE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-[#E6DFD5] pb-12">
          <div className="lg:col-span-4">
            <span className="text-[11px] font-mono text-[#A6865A] uppercase tracking-wider block">
              Section 03 & 04
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-wide text-[#191816] mt-1">
              The House of Form Difference
            </h2>
            <p className="font-serif italic text-[#736B63] text-base mt-2">
              "{master.hofDifference.subheadline}"
            </p>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <h3 className="font-serif text-2xl text-[#191816] font-light">
              {master.hofDifference.headline}
            </h3>

            <div className="space-y-3 text-sm text-[#2C2926] leading-relaxed">
              {master.hofDifference.body.map((b, idx) => (
                <p key={idx}>{b}</p>
              ))}
            </div>

            {/* Bespoke Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {master.hofDifference.bespokePoints.map((bp, idx) => (
                <div key={idx} className="bg-white p-4 border border-[#D1C7BB] space-y-1">
                  <span className="text-[10px] font-mono text-[#A6865A] uppercase font-semibold">
                    {bp.title}
                  </span>
                  <p className="text-xs text-[#736B63] leading-relaxed">
                    {bp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04B — ARCHITECTURAL VISUAL CLASSIFICATION (IF DEFINED) */}
        {product.visualClassification && (
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-[#E6DFD5] pb-12">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-mono text-[#A6865A] uppercase tracking-wider block">
                Section 04B
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-wide text-[#191816] mt-1">
                Visual Classification & Form Language
              </h2>
              <p className="text-xs text-[#736B63] mt-2">
                Standardized architectural parameters defining silhouette, plinth, arm geometry, and cantilevered elements.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                <div className="bg-white border border-[#D1C7BB] p-3.5">
                  <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Primary Category</span>
                  <span className="font-semibold text-[#191816] mt-1 block">{product.visualClassification.primaryCategory}</span>
                </div>
                <div className="bg-white border border-[#D1C7BB] p-3.5">
                  <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Subcategory</span>
                  <span className="font-semibold text-[#191816] mt-1 block">{product.visualClassification.subcategory}</span>
                </div>
                <div className="bg-white border border-[#D1C7BB] p-3.5">
                  <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Silhouette</span>
                  <span className="font-semibold text-[#191816] mt-1 block">{product.visualClassification.silhouette}</span>
                </div>
                <div className="bg-white border border-[#D1C7BB] p-3.5">
                  <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Back Detail</span>
                  <span className="font-semibold text-[#191816] mt-1 block">{product.visualClassification.back}</span>
                </div>
                <div className="bg-white border border-[#D1C7BB] p-3.5">
                  <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Arm Form</span>
                  <span className="font-semibold text-[#191816] mt-1 block">{product.visualClassification.arm}</span>
                </div>
                <div className="bg-white border border-[#D1C7BB] p-3.5">
                  <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Base Structure</span>
                  <span className="font-semibold text-[#191816] mt-1 block">{product.visualClassification.base}</span>
                </div>
                <div className="bg-white border border-[#D1C7BB] p-3.5">
                  <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Seat Construction</span>
                  <span className="font-semibold text-[#191816] mt-1 block">{product.visualClassification.seat}</span>
                </div>
                <div className="bg-white border border-[#D1C7BB] p-3.5">
                  <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Side Surface</span>
                  <span className="font-semibold text-[#191816] mt-1 block">{product.visualClassification.sideSurface}</span>
                </div>
                <div className="bg-white border border-[#D1C7BB] p-3.5">
                  <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Profile</span>
                  <span className="font-semibold text-[#191816] mt-1 block">{product.visualClassification.profile}</span>
                </div>
                <div className="bg-white border border-[#D1C7BB] p-3.5">
                  <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Design Character</span>
                  <span className="font-semibold text-[#191816] mt-1 block">{product.visualClassification.designCharacter}</span>
                </div>
                <div className="bg-white border border-[#D1C7BB] p-3.5">
                  <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Style Language</span>
                  <span className="font-semibold text-[#191816] mt-1 block">{product.visualClassification.style}</span>
                </div>
                <div className="bg-white border border-[#D1C7BB] p-3.5">
                  <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Customization</span>
                  <span className="font-semibold text-[#191816] mt-1 block">{product.visualClassification.customization}</span>
                </div>
              </div>

              {/* Design Tags */}
              {product.designTags && (
                <div className="pt-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#736B63] block mb-2 font-medium">
                    Architectural Index Tags:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.designTags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] uppercase tracking-wider bg-[#F4EFEB] border border-[#D1C7BB] text-[#191816] px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 05 & 06 — COMPREHENSIVE CONFIGURATIONS & DIMENSION SCHEDULE */}
        <section className="border-b border-[#E6DFD5] pb-12 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono text-[#A6865A] uppercase tracking-wider block">
                Section 05 & 06
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-wide text-[#191816] mt-1">
                Proposed Catalogue Dimensions Summary
              </h2>
              <p className="text-xs text-[#736B63] mt-1">
                {master.dimensionSummary.notes}
              </p>
            </div>

            {/* Unit Selector */}
            <div className="flex items-center space-x-2 bg-[#F4EFEB] p-1 border border-[#D1C7BB]">
              <button
                onClick={() => setDimensionUnit('cm')}
                className={`px-3 py-1.5 text-xs tracking-wider uppercase font-semibold cursor-pointer ${
                  dimensionUnit === 'cm' ? 'bg-[#191816] text-[#FBF9F5]' : 'text-[#736B63] hover:text-[#191816]'
                }`}
              >
                Metric (CM)
              </button>
              <button
                onClick={() => setDimensionUnit('in')}
                className={`px-3 py-1.5 text-xs tracking-wider uppercase font-semibold cursor-pointer ${
                  dimensionUnit === 'in' ? 'bg-[#191816] text-[#FBF9F5]' : 'text-[#736B63] hover:text-[#191816]'
                }`}
              >
                Imperial (Inches)
              </button>
            </div>
          </div>

          {/* Master Dimension Schedule Table */}
          <div className="overflow-x-auto border border-[#D1C7BB] bg-white shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#191816] text-[#FBF9F5] uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3.5 px-4 font-semibold">Configuration</th>
                  <th className="py-3.5 px-4 font-semibold">Seating</th>
                  <th className="py-3.5 px-4 font-semibold">Catalogue SKU</th>
                  <th className="py-3.5 px-4 font-semibold">Width</th>
                  <th className="py-3.5 px-4 font-semibold">Depth</th>
                  <th className="py-3.5 px-4 font-semibold">Height</th>
                  <th className="py-3.5 px-4 font-semibold">Seat Height</th>
                  <th className="py-3.5 px-4 font-semibold">Inside Width</th>
                  <th className="py-3.5 px-4 font-semibold">Inside Depth</th>
                  <th className="py-3.5 px-4 font-semibold">Starting Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6DFD5] text-[#2C2926]">
                {product.variants.map((v) => (
                  <tr key={v.id} className="hover:bg-[#F4EFEB]/60 transition-colors">
                    <td className="py-4 px-4 font-semibold text-[#191816]">
                      <div className="flex items-center space-x-2">
                        <span>{v.name}</span>
                        {v.isPopular && (
                          <span className="text-[9px] bg-[#C5A880] text-[#191816] px-1.5 py-0.5 font-bold uppercase">
                            Flagship
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-[#736B63] block mt-0.5">
                        {v.conceptSubtitle || v.description}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-[#736B63]">{v.seatingCapacity}</td>
                    <td className="py-4 px-4 font-mono text-[11px] text-[#A6865A]">{v.sku}</td>
                    <td className="py-4 px-4 font-mono font-medium">
                      {dimensionUnit === 'cm' ? `${v.dimensions.widthCm} cm` : `${v.dimensions.widthIn} in`}
                    </td>
                    <td className="py-4 px-4 font-mono">
                      {dimensionUnit === 'cm' ? `${v.dimensions.depthCm} cm` : `${v.dimensions.depthIn} in`}
                    </td>
                    <td className="py-4 px-4 font-mono">
                      {dimensionUnit === 'cm' ? `${v.dimensions.heightCm} cm` : `${v.dimensions.heightIn} in`}
                    </td>
                    <td className="py-4 px-4 font-mono">
                      {dimensionUnit === 'cm' ? `${v.dimensions.seatHeightCm} cm` : `${v.dimensions.seatHeightIn} in`}
                    </td>
                    <td className="py-4 px-4 font-mono">
                      {v.dimensions.insideSeatWidthCm
                        ? dimensionUnit === 'cm'
                          ? `${v.dimensions.insideSeatWidthCm} cm`
                          : `${v.dimensions.insideSeatWidthIn} in`
                        : '—'}
                    </td>
                    <td className="py-4 px-4 font-mono">
                      {v.dimensions.insideSeatDepthCm
                        ? dimensionUnit === 'cm'
                          ? `${v.dimensions.insideSeatDepthCm} cm`
                          : `${v.dimensions.insideSeatDepthIn} in`
                        : '—'}
                    </td>
                    <td className="py-4 px-4 font-mono font-semibold text-[#191816]">
                      ₹{v.basePrice.toLocaleString('en-IN')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#FBF9F5] border-l-2 border-[#A6865A] p-4 text-xs text-[#736B63]">
            <strong className="text-[#191816] uppercase tracking-wider text-[10px] block mb-1">
              Status: {master.dimensionSummary.technicalStatus}
            </strong>
            Dimensions are proposed architectural references. House Of Form supports custom millimeter modifications for specific villa layouts, bay windows, or penthouse living zones.
          </div>
        </section>

        {/* 07 — ERGONOMIC PROPORTIONS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-[#E6DFD5] pb-12">
          <div className="lg:col-span-4">
            <span className="text-[11px] font-mono text-[#A6865A] uppercase tracking-wider block">
              Section 07
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-wide text-[#191816] mt-1">
              Ergonomic Proportions
            </h2>
            <p className="text-xs text-[#736B63] mt-2">
              Engineered to strike an exact balance between formal Italian posture and relaxed conversational lounge comfort.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 border border-[#D1C7BB]">
              <span className="text-[10px] uppercase tracking-wider text-[#A6865A] font-semibold block">
                Overall Height
              </span>
              <div className="font-serif text-xl text-[#191816] mt-1">{master.ergonomicProportions.overallHeight}</div>
              <p className="text-xs text-[#736B63] mt-1">Low-profile European silhouette ensuring clear sightlines across open-concept spaces.</p>
            </div>

            <div className="bg-white p-5 border border-[#D1C7BB]">
              <span className="text-[10px] uppercase tracking-wider text-[#A6865A] font-semibold block">
                Seat Height
              </span>
              <div className="font-serif text-xl text-[#191816] mt-1">{master.ergonomicProportions.seatHeight}</div>
              <p className="text-xs text-[#736B63] mt-1">Slightly lower lounge stance delivering deep ease of entry without awkward knee flexion.</p>
            </div>

            <div className="bg-white p-5 border border-[#D1C7BB]">
              <span className="text-[10px] uppercase tracking-wider text-[#A6865A] font-semibold block">
                Seat Depth
              </span>
              <div className="font-serif text-xl text-[#191816] mt-1">{master.ergonomicProportions.seatDepth}</div>
              <p className="text-xs text-[#736B63] mt-1">Generous deep seating allowing comfortable lounging and curl-up relaxation.</p>
            </div>

            <div className="bg-white p-5 border border-[#D1C7BB]">
              <span className="text-[10px] uppercase tracking-wider text-[#A6865A] font-semibold block">
                Backrest & Arm Flow
              </span>
              <div className="font-serif text-xl text-[#191816] mt-1">Continuous Ergonomic Contour</div>
              <p className="text-xs text-[#736B63] mt-1">{master.ergonomicProportions.backrestAndArmFlow}</p>
            </div>
          </div>
        </section>

        {/* 08 — MATERIAL & CONSTRUCTION SPECIFICATIONS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-[#E6DFD5] pb-12">
          <div className="lg:col-span-4">
            <span className="text-[11px] font-mono text-[#A6865A] uppercase tracking-wider block">
              Section 08
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-wide text-[#191816] mt-1">
              Material & Construction
            </h2>
            <p className="text-xs text-[#736B63] mt-2">
              {master.materialAndConstruction.specificationNote}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white border border-[#D1C7BB] p-5 space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="font-serif text-lg uppercase text-[#191816]">Structural Frame</h4>
                <span className="text-[9px] bg-[#F4EFEB] text-[#A6865A] px-2 py-0.5 uppercase tracking-wider font-semibold">
                  {master.materialAndConstruction.frame.status}
                </span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#4A453F]">
                {master.materialAndConstruction.frame.specifications.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-[#A6865A]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-[#D1C7BB] p-5 space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="font-serif text-lg uppercase text-[#191816]">Seating & Comfort Core</h4>
                <span className="text-[9px] bg-[#F4EFEB] text-[#A6865A] px-2 py-0.5 uppercase tracking-wider font-semibold">
                  {master.materialAndConstruction.seating.status}
                </span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#4A453F]">
                {master.materialAndConstruction.seating.specifications.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-[#A6865A]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-[#D1C7BB] p-5 space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="font-serif text-lg uppercase text-[#191816]">Upholstery Engineering</h4>
                <span className="text-[9px] bg-[#F4EFEB] text-[#A6865A] px-2 py-0.5 uppercase tracking-wider font-semibold">
                  {master.materialAndConstruction.upholstery.status}
                </span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#4A453F]">
                {master.materialAndConstruction.upholstery.specifications.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-[#A6865A]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-[#D1C7BB] p-5 space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="font-serif text-lg uppercase text-[#191816]">Base & Plinth Options</h4>
                <span className="text-[9px] bg-[#F4EFEB] text-[#A6865A] px-2 py-0.5 uppercase tracking-wider font-semibold">
                  {master.materialAndConstruction.base.status}
                </span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#4A453F]">
                {master.materialAndConstruction.base.specifications.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-[#A6865A]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Material Direction Pre-Manufacturing Advisory */}
            {product.materialDirection && (
              <div className="bg-[#FBF9F5] border border-[#D1C7BB] p-5 space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="font-serif text-base uppercase text-[#191816]">Directional Palette Advisory</h4>
                  <span className="text-[9px] bg-[#C5A880]/20 text-[#A6865A] border border-[#C5A880]/40 px-2 py-0.5 uppercase font-semibold">
                    Factory Benchmark
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Upholstery</span>
                    <span className="font-medium text-[#191816] mt-0.5 block">{product.materialDirection.upholstery}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Timber Element</span>
                    <span className="font-medium text-[#191816] mt-0.5 block">{product.materialDirection.timber}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Base Structure</span>
                    <span className="font-medium text-[#191816] mt-0.5 block">{product.materialDirection.base}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">Accent Form</span>
                    <span className="font-medium text-[#191816] mt-0.5 block">{product.materialDirection.accent}</span>
                  </div>
                </div>
                {product.materialDirection.notes && (
                  <p className="text-[11px] text-[#736B63] italic pt-2 border-t border-[#E6DFD5]">
                    "{product.materialDirection.notes}"
                  </p>
                )}
              </div>
            )}
          </div>
        </section>

        {/* 09 — CURATED UPHOLSTERY FAMILIES */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-[#E6DFD5] pb-12">
          <div className="lg:col-span-4">
            <span className="text-[11px] font-mono text-[#A6865A] uppercase tracking-wider block">
              Section 09
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-wide text-[#191816] mt-1">
              Curated Upholstery Families
            </h2>
            <p className="text-xs text-[#736B63] mt-2">
              {master.upholsteryOptions.headline}
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {master.upholsteryOptions.families.map((fam, idx) => (
              <div key={idx} className="bg-white p-5 border border-[#D1C7BB] space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] uppercase tracking-wider bg-[#191816] text-[#FBF9F5] px-2 py-0.5 font-mono">
                    {fam.badge}
                  </span>
                  <span className="text-[10px] text-[#A6865A] font-semibold">Family 0{idx + 1}</span>
                </div>
                <h4 className="font-serif text-lg text-[#191816] font-semibold mt-1">{fam.name}</h4>
                <div className="text-xs font-medium text-[#736B63]">{fam.items}</div>
                <p className="text-xs text-[#4A453F] leading-relaxed">{fam.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 10, 11 & 12 — FINISH OPTIONS, CUSTOMISATION SCOPE & IDEAL APPLICATIONS */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-b border-[#E6DFD5] pb-12">
          
          {/* Finish Options */}
          <div className="bg-white p-6 border border-[#D1C7BB] space-y-3">
            <span className="text-[10px] font-mono text-[#A6865A] uppercase block">Section 10</span>
            <h3 className="font-serif text-xl uppercase text-[#191816]">Finish Options</h3>
            <div className="text-xs space-y-2 text-[#4A453F]">
              <p><strong>Upholstery:</strong> {master.finishOptions.upholsteryColor}</p>
              <p><strong>Base Plinth:</strong> {master.finishOptions.baseFinish}</p>
              <p><strong>Contrast Detailing:</strong> {master.finishOptions.contrastDetailing}</p>
              <p><strong>COM Service:</strong> {master.finishOptions.customUpholstery}</p>
            </div>
          </div>

          {/* Customisation Scope */}
          <div className="bg-white p-6 border border-[#D1C7BB] space-y-3">
            <span className="text-[10px] font-mono text-[#A6865A] uppercase block">Section 11</span>
            <h3 className="font-serif text-xl uppercase text-[#191816]">Customisation Scope</h3>
            <p className="text-xs font-serif italic text-[#736B63]">{master.customisation.headline}</p>
            <ul className="text-xs space-y-1.5 text-[#4A453F]">
              {master.customisation.options.map((opt, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <Check className="w-3.5 h-3.5 text-[#A6865A] shrink-0 mt-0.5" />
                  <span>{opt}</span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-[#736B63] pt-2 border-t border-[#E6DFD5]">
              {master.customisation.customFurnitureService}
            </p>
          </div>

          {/* Ideal Applications */}
          <div className="bg-white p-6 border border-[#D1C7BB] space-y-3">
            <span className="text-[10px] font-mono text-[#A6865A] uppercase block">Section 12</span>
            <h3 className="font-serif text-xl uppercase text-[#191816]">Ideal Applications</h3>
            <div className="space-y-3 text-xs text-[#4A453F]">
              <div>
                <strong className="text-[#191816] block uppercase tracking-wider text-[10px] mb-1">
                  Residential:
                </strong>
                <ul className="space-y-1">
                  {master.idealApplications.residential.map((r, idx) => (
                    <li key={idx}>• {r}</li>
                  ))}
                </ul>
              </div>
              <div className="pt-2 border-t border-[#E6DFD5]">
                <strong className="text-[#191816] block uppercase tracking-wider text-[10px] mb-1">
                  Commercial & Hospitality:
                </strong>
                <ul className="space-y-1">
                  {master.idealApplications.commercialHospitality.map((c, idx) => (
                    <li key={idx}>• {c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </section>

        {/* 14 — WHY WAIT FOR ITALY? */}
        <section className="bg-[#191816] text-[#FBF9F5] p-8 sm:p-12 border border-[#2C2926] shadow-lg space-y-6">
          <div className="flex items-center space-x-2 text-xs tracking-[0.25em] uppercase text-[#C5A880]">
            <Compass className="w-4 h-4" />
            <span>Section 14 · Campaign Manifesto</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-4xl text-white font-light uppercase">
            {master.whyWaitForItaly.headline}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {master.whyWaitForItaly.bulletPoints.map((bp, idx) => (
              <div key={idx} className="bg-[#2C2926] p-4 border border-[#3E3A36] flex items-center space-x-3">
                <span className="text-[#C5A880] text-sm">✕</span>
                <span className="text-xs text-[#D1C7BB]">{bp}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#3E3A36] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-xs text-[#968E85] space-y-0.5">
              {master.whyWaitForItaly.closingBrandLines.map((line, idx) => (
                <div key={idx} className="font-medium text-[#FBF9F5]">{line}</div>
              ))}
            </div>

            <button
              onClick={onReserveClick}
              className="bg-[#C5A880] hover:bg-[#A6865A] text-[#191816] px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer"
            >
              Commission Yours
            </button>
          </div>
        </section>

        {/* 15, 16 & 17 — CARE INSTRUCTIONS, DELIVERY WORKFLOW & INSTALLATION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-[#E6DFD5] pb-12">
          
          {/* Care Guidelines */}
          <div className="lg:col-span-5 bg-white p-6 border border-[#D1C7BB] space-y-4">
            <span className="text-[10px] font-mono text-[#A6865A] uppercase block">Section 15</span>
            <h3 className="font-serif text-2xl uppercase text-[#191816]">Care Instructions</h3>
            
            <div className="space-y-2 text-xs text-[#4A453F]">
              <strong className="text-[#191816] uppercase text-[10px] tracking-wider block">
                General Care Guidelines:
              </strong>
              <ul className="space-y-1.5">
                {master.careInstructionsDetailed.generalCare.map((g, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-[#A6865A]">•</span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-[#E6DFD5] text-xs text-[#736B63]">
              <strong className="text-[#191816] uppercase text-[10px] tracking-wider block mb-1">
                Professional Cleaning:
              </strong>
              {master.careInstructionsDetailed.professionalCleaning}
            </div>
          </div>

          {/* Delivery & Logistics Workflow */}
          <div className="lg:col-span-7 bg-[#F4EFEB] p-6 border border-[#D1C7BB] space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono text-[#A6865A] uppercase block">Section 16 & 17</span>
              <span className="text-[10px] bg-[#191816] text-[#FBF9F5] px-2 py-0.5 uppercase tracking-wider font-semibold">
                White-Glove Service
              </span>
            </div>

            <h3 className="font-serif text-2xl uppercase text-[#191816]">
              Delivery, Packaging & In-Home Installation
            </h3>

            <p className="text-xs text-[#736B63]">
              {master.deliveryAndInstallation.madeToOrderNote}
            </p>

            {/* Workflow steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {master.deliveryAndInstallation.deliveryWorkflow.map((step, idx) => (
                <div key={idx} className="bg-white p-3 border border-[#E6DFD5] text-xs text-[#191816] font-medium flex items-center space-x-2">
                  <span className="text-[#A6865A] font-mono font-bold">✓</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-[#D1C7BB] text-xs text-[#4A453F] space-y-1">
              <p><strong>Site Access:</strong> {master.deliveryAndInstallation.siteAccess}</p>
              <p><strong>Custom Orders:</strong> {master.deliveryAndInstallation.customOrders}</p>
            </div>
          </div>

        </section>

        {/* 18 & 19 — ADDITIONAL INFORMATION & PRODUCT TAGS */}
        <section className="bg-white border border-[#D1C7BB] p-6 sm:p-8 space-y-6">
          <div className="flex justify-between items-center border-b border-[#E6DFD5] pb-4">
            <span className="text-[10px] font-mono text-[#A6865A] uppercase tracking-wider">
              Section 18 & 19 · Technical Summary & Metadata
            </span>
            <span className="text-[10px] text-[#736B63] uppercase">
              Origin: New Delhi NCR, India
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-xs">
            {Object.entries(master.additionalInformation).map(([key, val]) => (
              <div key={key} className="bg-[#FBF9F5] p-3 border border-[#E6DFD5]">
                <span className="text-[10px] text-[#736B63] uppercase tracking-wider block">{key}</span>
                <span className="font-medium text-[#191816] mt-0.5 block">{val}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E6DFD5]">
            <span className="text-[10px] uppercase tracking-wider text-[#736B63] font-semibold block mb-2">
              Catalog Discovery Tags:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {master.productTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-[#F4EFEB] border border-[#D1C7BB] text-[#4A453F] px-2.5 py-1 text-[10px] uppercase tracking-wider"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 20–23 — SEO ARCHITECTURE & GEO LANDING TARGETS */}
        <section className="bg-[#23201D] text-[#FBF9F5] p-6 sm:p-8 border border-[#3E3A36] space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-mono text-[#C5A880] uppercase tracking-wider">
              Section 20–23 · SEO Architecture & Structured Metadata
            </span>
            <button
              onClick={() => copyToClipboard(structuredDataJson, 'json-ld')}
              className="inline-flex items-center space-x-1 text-[10px] text-[#C5A880] hover:text-white uppercase tracking-wider cursor-pointer"
            >
              {copiedKey === 'json-ld' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedKey === 'json-ld' ? 'JSON-LD Copied' : 'Copy JSON-LD Schema'}</span>
            </button>
          </div>

          <div className="space-y-2 text-xs">
            <p><strong className="text-[#C5A880]">Page Title:</strong> {master.seo.title}</p>
            <p><strong className="text-[#C5A880]">Alternate Geo Title:</strong> {master.seo.altGeoTitle}</p>
            <p><strong className="text-[#C5A880]">Meta Description:</strong> {master.seo.metaDescription}</p>
          </div>

          <div className="pt-3 border-t border-[#3E3A36] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#D1C7BB]">
            <div>
              <strong className="text-white block uppercase tracking-wider text-[10px] mb-1">
                Primary Search Queries:
              </strong>
              <div className="flex flex-wrap gap-1">
                {master.seo.primaryKeywords.map((k, idx) => (
                  <span key={idx} className="bg-[#191816] px-2 py-0.5 border border-[#3E3A36] text-[10px]">
                    {k}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <strong className="text-white block uppercase tracking-wider text-[10px] mb-1">
                Geo Landing Opportunities:
              </strong>
              <div className="flex flex-wrap gap-1">
                {master.seo.geoLandingOpportunities.map((g, idx) => (
                  <span key={idx} className="bg-[#191816] px-2 py-0.5 border border-[#3E3A36] text-[10px] text-[#C5A880]">
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 27 — EMOTIONAL SALES COPY & BRAND SIGNATURE */}
        <section className="text-center max-w-3xl mx-auto py-8 space-y-6">
          <span className="text-[11px] font-mono text-[#A6865A] uppercase tracking-widest block">
            Section 27 & 28 · Emotional Signature
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#191816] font-light leading-tight">
            {master.emotionalSalesCopy.headline}<br />
            <span className="italic text-[#736B63]">{master.emotionalSalesCopy.subheadline}</span>
          </h2>

          <div className="space-y-4 text-sm text-[#4A453F] leading-relaxed max-w-xl mx-auto">
            {master.emotionalSalesCopy.stanzas.map((stanza, idx) => (
              <p key={idx}>{stanza}</p>
            ))}
          </div>

          <div className="pt-6 border-t border-[#E6DFD5] space-y-2">
            <h4 className="font-serif text-2xl uppercase tracking-wider text-[#191816]">
              {master.finalBrandSignature.brand}
            </h4>
            <div className="flex justify-center items-center space-x-3 text-xs uppercase tracking-widest text-[#736B63]">
              {master.finalBrandSignature.lines.map((line, idx) => (
                <React.Fragment key={idx}>
                  <span>{line}</span>
                  {idx < master.finalBrandSignature.lines.length - 1 && <span>•</span>}
                </React.Fragment>
              ))}
            </div>
            <div className="pt-4 flex justify-center gap-4">
              <button
                onClick={onReserveClick}
                className="bg-[#191816] hover:bg-[#2C2926] text-[#FBF9F5] px-8 py-3 text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer transition-all shadow-md"
              >
                {master.finalBrandSignature.cta}
              </button>
              <button
                onClick={onConsultantClick}
                className="border border-[#191816] text-[#191816] hover:bg-[#F4EFEB] px-6 py-3 text-xs uppercase tracking-[0.16em] cursor-pointer transition-colors"
              >
                Design Consultation
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
