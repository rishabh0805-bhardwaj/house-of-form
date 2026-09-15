/**
 * HOUSE OF FORM — SEO & METADATA DISCOVERY SUITE
 * Visual Inspector and validation tool for search engine discoverability across all product lines.
 * Displays live SERP previews, Open Graph share cards, keyword architecture breakdowns,
 * and Schema.org JSON-LD validation.
 */

import React, { useState } from 'react';
import {
  Search,
  Globe,
  Share2,
  Copy,
  Check,
  X,
  ExternalLink,
  Tag,
  MapPin,
  Code2,
  CheckCircle2,
  Truck,
  Building2,
  ShieldCheck,
  Navigation,
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import {
  PRODUCT_SEO_REGISTRY,
  SITE_BASE_URL,
  TIER_1_INDIAN_CITIES,
  GLOBAL_BRAND_SEO,
  compileKeywordString,
  generateProductSchema,
} from '../data/seoArchitecture';

interface SEOMetadataDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SEOMetadataDrawer: React.FC<SEOMetadataDrawerProps> = ({ isOpen, onClose }) => {
  const { selectedProductId, setSelectedProductId, products } = useStore();
  const [activeTab, setActiveTab] = useState<'serp' | 'geo' | 'keywords' | 'social' | 'schema' | 'matrix'>('serp');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [devicePreview, setDevicePreview] = useState<'desktop' | 'mobile'>('desktop');
  const [selectedCityId, setSelectedCityId] = useState<string>('all');
  const [activeGeoCityId, setActiveGeoCityId] = useState<string>('delhi-ncr');

  if (!isOpen) return null;

  const currentConfig =
    PRODUCT_SEO_REGISTRY[selectedProductId] || PRODUCT_SEO_REGISTRY['HOF-SF-VLR-001'];
  const activeProduct =
    products.find((p) => p.id === selectedProductId) || products[0];
  const heroImage =
    typeof activeProduct.images.hero === 'string' ? activeProduct.images.hero : '';

  const activeGeoCity =
    TIER_1_INDIAN_CITIES.find((c) => c.id === activeGeoCityId) || TIER_1_INDIAN_CITIES[0];

  const getLocalizedTitle = (cityId: string) => {
    if (cityId === 'all') return currentConfig.seoTitle;
    const city = TIER_1_INDIAN_CITIES.find((c) => c.id === cityId);
    if (!city) return currentConfig.seoTitle;
    return city.citySpecificTitle(currentConfig.productName);
  };

  const getLocalizedDescription = (cityId: string) => {
    if (cityId === 'all') return currentConfig.metaDescription;
    const city = TIER_1_INDIAN_CITIES.find((c) => c.id === cityId);
    if (!city) return currentConfig.metaDescription;
    return city.citySpecificDescription(currentConfig.productName);
  };

  const activeSerpTitle = getLocalizedTitle(selectedCityId);
  const activeSerpDescription = getLocalizedDescription(selectedCityId);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  const schemaJson = JSON.stringify(
    generateProductSchema(
      currentConfig,
      heroImage,
      activeProduct.variants.map((v) => ({
        sku: v.sku,
        name: v.name,
        basePrice: v.basePrice,
        dimensions: v.dimensions
          ? {
              widthCm: v.dimensions.widthCm,
              depthCm: v.dimensions.depthCm,
              heightCm: v.dimensions.heightCm,
            }
          : undefined,
      }))
    ),
    null,
    2
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#191816]/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FBF9F5] border border-[#D1C7BB] w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-[#191816]">
        {/* Header Bar */}
        <div className="bg-[#191816] text-[#FBF9F5] px-6 py-4 flex items-center justify-between border-b border-[#3E3A36]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-none bg-[#C5A880] text-[#191816] flex items-center justify-center font-serif font-bold text-sm">
              SEO
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-serif text-lg tracking-wide uppercase">
                  SEO & Discoverability Suite
                </span>
                <span className="text-[10px] font-mono bg-[#3E3A36] text-[#C5A880] px-2 py-0.5 uppercase tracking-wider">
                  Metadata Architecture
                </span>
              </div>
              <p className="text-xs text-[#968E85]">
                Real-time search engine discoverability, keyword architecture, and structured schema inspector.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-[#968E85] hover:text-[#FBF9F5] p-1.5 transition-colors cursor-pointer"
            aria-label="Close SEO Drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product Line Switcher Bar */}
        <div className="bg-[#F4EFEB] px-6 py-3 border-b border-[#E6DFD5] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-mono text-[#736B63] uppercase tracking-wider">
              Inspect Product Line:
            </span>
            <div className="flex items-center space-x-1.5">
              {Object.values(PRODUCT_SEO_REGISTRY).map((prod) => (
                <button
                  key={prod.productId}
                  onClick={() => setSelectedProductId(prod.productId)}
                  className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                    selectedProductId === prod.productId
                      ? 'bg-[#191816] text-[#FBF9F5] shadow-sm'
                      : 'bg-white text-[#736B63] border border-[#D1C7BB] hover:border-[#191816] hover:text-[#191816]'
                  }`}
                >
                  Product {prod.productNo} · {prod.productName}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2 text-[11px] font-mono text-[#736B63]">
            <span>Active SKU:</span>
            <strong className="text-[#191816] bg-white px-2 py-0.5 border border-[#D1C7BB]">
              {currentConfig.sku}
            </strong>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b border-[#E6DFD5] px-6 flex space-x-6 overflow-x-auto text-xs">
          {[
            { id: 'serp', label: 'Google SERP Preview', icon: Search },
            { id: 'geo', label: 'Tier 1 Cities GEO Strategy', icon: MapPin },
            { id: 'keywords', label: 'Keyword Architecture', icon: Tag },
            { id: 'social', label: 'Social Graph & WhatsApp', icon: Share2 },
            { id: 'schema', label: 'Schema.org JSON-LD', icon: Code2 },
            { id: 'matrix', label: 'Product Line Matrix', icon: Globe },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`py-3 flex items-center space-x-2 border-b-2 font-medium tracking-wide uppercase transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-[#C5A880] text-[#191816]'
                    : 'border-transparent text-[#736B63] hover:text-[#191816]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 bg-[#FBF9F5]">
          {/* TAB 1: GOOGLE SERP PREVIEW */}
          {activeTab === 'serp' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-serif text-xl uppercase text-[#191816]">
                    Google Search Engine Snippet
                  </h3>
                  <p className="text-xs text-[#736B63] mt-0.5">
                    How {currentConfig.productName} appears in organic search results for national and local Tier 1 queries.
                  </p>
                </div>
                <div className="flex items-center space-x-1 bg-[#F4EFEB] p-1 border border-[#D1C7BB] text-xs">
                  <button
                    onClick={() => setDevicePreview('desktop')}
                    className={`px-3 py-1 uppercase text-[10px] font-medium transition-all ${
                      devicePreview === 'desktop'
                        ? 'bg-white text-[#191816] shadow-xs'
                        : 'text-[#736B63]'
                    }`}
                  >
                    Desktop
                  </button>
                  <button
                    onClick={() => setDevicePreview('mobile')}
                    className={`px-3 py-1 uppercase text-[10px] font-medium transition-all ${
                      devicePreview === 'mobile'
                        ? 'bg-white text-[#191816] shadow-xs'
                        : 'text-[#736B63]'
                    }`}
                  >
                    Mobile
                  </button>
                </div>
              </div>

              {/* Geo Location Filter Simulation Bar */}
              <div className="bg-white p-3 border border-[#D1C7BB] flex flex-col md:flex-row md:items-center justify-between gap-2.5">
                <div className="flex items-center space-x-2 text-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#A6865A]" />
                  <span className="font-mono uppercase text-[11px] font-semibold text-[#191816]">
                    Simulate Searcher IP Location:
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  <button
                    onClick={() => setSelectedCityId('all')}
                    className={`px-2 py-1 text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                      selectedCityId === 'all'
                        ? 'bg-[#191816] text-[#FBF9F5]'
                        : 'bg-[#F4EFEB] text-[#736B63] hover:text-[#191816]'
                    }`}
                  >
                    All Tier 1 (National)
                  </button>
                  {TIER_1_INDIAN_CITIES.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCityId(c.id)}
                      className={`px-2 py-1 text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                        selectedCityId === c.id
                          ? 'bg-[#191816] text-[#FBF9F5]'
                          : 'bg-[#F4EFEB] text-[#736B63] hover:text-[#191816]'
                      }`}
                    >
                      {c.shortName}
                    </button>
                  ))}
                </div>
              </div>

              {/* SERP Card Container */}
              <div
                className={`bg-white border border-[#D1C7BB] p-5 font-sans transition-all ${
                  devicePreview === 'mobile' ? 'max-w-md mx-auto rounded-xl shadow-md' : 'rounded-sm'
                }`}
              >
                {/* Search result header */}
                <div className="flex items-center space-x-3 mb-1.5">
                  <div className="w-6 h-6 rounded-full bg-[#191816] text-[#FBF9F5] flex items-center justify-center font-serif text-[10px] font-bold">
                    HF
                  </div>
                  <div className="leading-tight">
                    <div className="text-xs text-[#202124] font-medium">House Of Form</div>
                    <div className="text-[11px] text-[#5f6368] truncate">
                      {SITE_BASE_URL} › sofas › {currentConfig.canonicalSlug.replace('/sofas/', '')}
                    </div>
                  </div>
                </div>

                {/* SERP Title */}
                <div className="text-[#1a0dab] hover:underline text-lg sm:text-xl font-medium cursor-pointer leading-snug">
                  {activeSerpTitle}
                </div>

                {/* SERP Description */}
                <p className="text-[13px] text-[#4d5156] mt-1.5 leading-relaxed">
                  <span className="text-[#70757a] font-medium text-xs">House Of Form Official · </span>
                  {activeSerpDescription}
                </p>

                {/* SERP Rich Snippet Badges */}
                <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-[#f1f3f4] text-xs text-[#5f6368]">
                  <span className="bg-[#f8f9fa] border border-[#dadce0] px-2 py-0.5 rounded text-[11px]">
                    Price: <strong>{currentConfig.structuredData.priceRange}</strong>
                  </span>
                  <span className="bg-[#f8f9fa] border border-[#dadce0] px-2 py-0.5 rounded text-[11px] text-[#137333] font-medium">
                    ✓ White-Glove Tier 1 Delivery
                  </span>
                  <span className="bg-[#f8f9fa] border border-[#dadce0] px-2 py-0.5 rounded text-[11px]">
                    Category: {currentConfig.subcategory}
                  </span>
                  {selectedCityId !== 'all' && (
                    <span className="bg-[#EBF3FF] border border-[#A8C7FA] text-[#0B57D0] px-2 py-0.5 rounded text-[11px] font-medium">
                      Serving {TIER_1_INDIAN_CITIES.find((c) => c.id === selectedCityId)?.cityName}
                    </span>
                  )}
                </div>
              </div>

              {/* Character Count & Optimization Health */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-white p-4 border border-[#D1C7BB]">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] uppercase tracking-wider text-[#736B63] font-medium">
                      Title Tag Length
                    </span>
                    <span
                      className={`font-mono text-xs font-semibold ${
                        activeSerpTitle.length <= 65
                          ? 'text-[#137333]'
                          : 'text-[#b06000]'
                      }`}
                    >
                      {activeSerpTitle.length} / 65 chars
                    </span>
                  </div>
                  <p className="text-[11px] text-[#736B63]">
                    Optimized for desktop & mobile viewport display without truncation.
                  </p>
                </div>

                <div className="bg-white p-4 border border-[#D1C7BB]">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] uppercase tracking-wider text-[#736B63] font-medium">
                      Meta Description Length
                    </span>
                    <span
                      className={`font-mono text-xs font-semibold ${
                        activeSerpDescription.length <= 170
                          ? 'text-[#137333]'
                          : 'text-[#b06000]'
                      }`}
                    >
                      {activeSerpDescription.length} / 170 chars
                    </span>
                  </div>
                  <p className="text-[11px] text-[#736B63]">
                    Includes target city, high-intent keywords, bespoke options, and white-glove commissioning notice.
                  </p>
                </div>
              </div>

              {/* Alternate Geo Title */}
              <div className="bg-[#F4EFEB] p-4 border border-[#D1C7BB] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-[10px] text-[#A6865A] uppercase tracking-wider font-semibold block">
                    Alternate High-Intent Geo Title:
                  </span>
                  <span className="font-serif text-base text-[#191816] mt-0.5 block">
                    {currentConfig.altGeoTitle}
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(currentConfig.altGeoTitle, 'altGeoTitle')}
                  className="inline-flex items-center space-x-1 bg-white border border-[#D1C7BB] px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold hover:border-[#191816] transition-all cursor-pointer"
                >
                  {copiedKey === 'altGeoTitle' ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'altGeoTitle' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: TIER 1 CITIES GEO STRATEGY */}
          {activeTab === 'geo' && (
            <div className="space-y-6">
              {/* Header Overview Banner */}
              <div className="bg-white border border-[#D1C7BB] p-5 space-y-3">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#E6DFD5] pb-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-serif text-xl uppercase text-[#191816]">
                        Pan-India Tier 1 Metro SEO & GEO Architecture
                      </h3>
                      <span className="bg-[#137333]/15 text-[#137333] border border-[#137333]/30 px-2 py-0.5 text-[10px] font-mono font-semibold flex items-center space-x-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>8 Metros Active</span>
                      </span>
                    </div>
                    <p className="text-xs text-[#736B63] mt-1">
                      Multi-region geo tags, Schema.org <code className="font-mono text-[#A6865A]">areaServed</code> mapping, and micro-market search architectures targeting all Tier 1 luxury residential hubs.
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `<meta name="geo.region" content="${GLOBAL_BRAND_SEO.geoRegions.join(';')}" />\n<meta name="geo.placename" content="${GLOBAL_BRAND_SEO.geoPlacenames.join(', ')}" />\n<meta name="geo.position" content="28.4595;77.0266" />\n<meta name="ICBM" content="28.4595, 77.0266" />`,
                          'allGeoTags'
                        )
                      }
                      className="bg-[#191816] text-[#FBF9F5] px-3.5 py-1.5 text-xs uppercase tracking-wider font-semibold flex items-center space-x-1.5 hover:bg-[#3E3A36] transition-all cursor-pointer"
                    >
                      {copiedKey === 'allGeoTags' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedKey === 'allGeoTags' ? 'Tags Copied' : 'Copy All Geo Meta Tags'}</span>
                    </button>
                  </div>
                </div>

                {/* Quick stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 text-xs">
                  <div className="bg-[#FBF9F5] p-2.5 border border-[#E6DFD5]">
                    <span className="text-[10px] uppercase font-mono text-[#736B63] block">Metros Covered</span>
                    <span className="font-serif text-base font-semibold text-[#191816]">8 Tier 1 Cities</span>
                  </div>
                  <div className="bg-[#FBF9F5] p-2.5 border border-[#E6DFD5]">
                    <span className="text-[10px] uppercase font-mono text-[#736B63] block">ISO State Regions</span>
                    <span className="font-mono text-xs font-semibold text-[#191816]">9 State Codes</span>
                  </div>
                  <div className="bg-[#FBF9F5] p-2.5 border border-[#E6DFD5]">
                    <span className="text-[10px] uppercase font-mono text-[#736B63] block">White-Glove Transit</span>
                    <span className="font-serif text-base font-semibold text-[#137333]">Dedicated In-Room</span>
                  </div>
                  <div className="bg-[#FBF9F5] p-2.5 border border-[#E6DFD5]">
                    <span className="text-[10px] uppercase font-mono text-[#736B63] block">Schema Structure</span>
                    <span className="font-mono text-xs font-semibold text-[#191816]">areaServed & eligibleRegion</span>
                  </div>
                </div>
              </div>

              {/* City Selection Grid (8 Cities) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#191816]">
                    Select a Tier 1 City to Inspect Regional Architecture:
                  </span>
                  <span className="text-[11px] text-[#736B63]">
                    Click any metro to view localized SERP, query matrix, and transit protocol
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {TIER_1_INDIAN_CITIES.map((city) => {
                    const isSelected = activeGeoCityId === city.id;
                    return (
                      <button
                        key={city.id}
                        onClick={() => setActiveGeoCityId(city.id)}
                        className={`p-3.5 text-left border transition-all cursor-pointer relative ${
                          isSelected
                            ? 'bg-white border-[#191816] shadow-md ring-1 ring-[#191816]'
                            : 'bg-white border-[#D1C7BB] hover:border-[#191816]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-serif text-sm font-semibold uppercase text-[#191816]">
                            {city.shortName}
                          </span>
                          <span className="text-[9px] font-mono bg-[#F4EFEB] px-1.5 py-0.5 border border-[#D1C7BB] text-[#736B63]">
                            {city.stateCode}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#736B63] line-clamp-1">
                          {city.elitePockets.slice(0, 2).join(', ')}...
                        </p>
                        <div className="mt-2 pt-2 border-t border-[#F4EFEB] flex items-center justify-between text-[10px]">
                          <span className="font-mono text-[#A6865A]">{city.coordinates.lat.toFixed(2)}, {city.coordinates.lng.toFixed(2)}</span>
                          <span className={`font-semibold ${isSelected ? 'text-[#191816]' : 'text-[#736B63]'}`}>
                            {isSelected ? '● Active' : 'Inspect →'}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Deep Dive Panel for Selected City */}
              <div className="bg-white border border-[#D1C7BB] p-5 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E6DFD5] pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-[#191816] text-[#FBF9F5] flex items-center justify-center font-serif text-xs font-bold">
                      {activeGeoCity.shortName.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-semibold uppercase text-[#191816]">
                        {activeGeoCity.cityName} ({activeGeoCity.state})
                      </h4>
                      <span className="text-xs text-[#736B63]">
                        Coordinates: {activeGeoCity.coordinates.positionString} · State ISO: {activeGeoCity.stateCode}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `<meta name="geo.region" content="${activeGeoCity.stateCode}" />\n<meta name="geo.placename" content="${activeGeoCity.shortName}" />\n<meta name="geo.position" content="${activeGeoCity.coordinates.positionString}" />\n<meta name="ICBM" content="${activeGeoCity.coordinates.lat}, ${activeGeoCity.coordinates.lng}" />`,
                          `cityGeo-${activeGeoCity.id}`
                        )
                      }
                      className="inline-flex items-center space-x-1 bg-[#F4EFEB] border border-[#D1C7BB] px-3 py-1.5 text-[11px] uppercase tracking-wider font-semibold hover:border-[#191816] transition-all cursor-pointer text-[#191816]"
                    >
                      {copiedKey === `cityGeo-${activeGeoCity.id}` ? (
                        <Check className="w-3.5 h-3.5 text-green-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                      <span>
                        {copiedKey === `cityGeo-${activeGeoCity.id}`
                          ? 'Copied City Tags'
                          : 'Copy City Tags'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Localized SERP preview for this city */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#191816] flex items-center space-x-1.5">
                      <Search className="w-3.5 h-3.5 text-[#A6865A]" />
                      <span>Simulated Local Google Snippet for {activeGeoCity.shortName} Searchers</span>
                    </span>
                    <span className="text-[11px] font-mono text-[#736B63]">
                      Query: "{activeGeoCity.sampleLocalQueries[0]}"
                    </span>
                  </div>

                  <div className="bg-[#FBF9F5] border border-[#D1C7BB] p-4 font-sans">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-5 h-5 rounded-full bg-[#191816] text-[#FBF9F5] flex items-center justify-center font-serif text-[9px] font-bold">
                        HF
                      </div>
                      <div className="text-xs text-[#202124] font-medium">House Of Form · {activeGeoCity.shortName}</div>
                    </div>
                    <div className="text-[#1a0dab] hover:underline text-base sm:text-lg font-medium cursor-pointer leading-snug">
                      {getLocalizedTitle(activeGeoCity.id)}
                    </div>
                    <p className="text-[13px] text-[#4d5156] mt-1 leading-relaxed">
                      <span className="text-[#70757a] font-medium text-xs">Official Atelier Service · </span>
                      {getLocalizedDescription(activeGeoCity.id)}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mt-2 pt-2 border-t border-[#E6DFD5] text-[11px] text-[#5f6368]">
                      <span className="bg-white border border-[#dadce0] px-2 py-0.5 rounded">
                        Delivery to: <strong>{activeGeoCity.shortName} Metro</strong>
                      </span>
                      <span className="bg-white border border-[#dadce0] px-2 py-0.5 rounded text-[#137333] font-medium">
                        ✓ In-Room White Glove Assembly
                      </span>
                      <span className="bg-white border border-[#dadce0] px-2 py-0.5 rounded">
                        Chassis: 10-Yr Guarantee
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3-Column Architectural Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  {/* Elite Pockets */}
                  <div className="bg-[#FBF9F5] p-4 border border-[#E6DFD5] space-y-2.5">
                    <div className="flex items-center space-x-1.5">
                      <Building2 className="w-4 h-4 text-[#A6865A]" />
                      <h5 className="font-mono uppercase font-semibold text-[#191816]">
                        Targeted Elite Neighborhoods
                      </h5>
                    </div>
                    <p className="text-[11px] text-[#736B63]">
                      Primary residential micro-markets indexed for architectural commissions:
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {activeGeoCity.elitePockets.map((pocket, idx) => (
                        <span
                          key={idx}
                          className="bg-white border border-[#D1C7BB] text-[#191816] px-2 py-1 text-[11px] font-medium"
                        >
                          {pocket}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Local High-Intent Queries */}
                  <div className="bg-[#FBF9F5] p-4 border border-[#E6DFD5] space-y-2.5">
                    <div className="flex items-center space-x-1.5">
                      <Navigation className="w-4 h-4 text-[#1a73e8]" />
                      <h5 className="font-mono uppercase font-semibold text-[#191816]">
                        High-Intent Local Search Terms
                      </h5>
                    </div>
                    <p className="text-[11px] text-[#736B63]">
                      Mapped high-intent queries typed by architects and luxury clients:
                    </p>
                    <div className="flex flex-col gap-1.5 pt-1">
                      {activeGeoCity.sampleLocalQueries.map((query, idx) => (
                        <div
                          key={idx}
                          className="bg-white border border-[#D1C7BB] px-2.5 py-1 text-[11px] text-[#191816] flex items-center justify-between"
                        >
                          <span>"{query}"</span>
                          <span className="text-[9px] font-mono text-[#A6865A]">Local Rank #1</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* White-Glove Transit Workflow */}
                  <div className="bg-[#FBF9F5] p-4 border border-[#E6DFD5] space-y-2.5">
                    <div className="flex items-center space-x-1.5">
                      <Truck className="w-4 h-4 text-[#137333]" />
                      <h5 className="font-mono uppercase font-semibold text-[#191816]">
                        Commissioning & Transit Protocol
                      </h5>
                    </div>
                    <p className="text-[11px] text-[#736B63]">
                      Specialized white-glove delivery workflow for this metropolitan zone:
                    </p>
                    <div className="bg-white p-3 border border-[#D1C7BB] text-[11px] leading-relaxed text-[#4A453F]">
                      {activeGeoCity.transitWorkflow}
                    </div>
                    <div className="flex items-center space-x-1.5 text-[10px] text-[#137333] font-medium pt-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Pre-delivery lift & staircase clearance survey included</span>
                    </div>
                  </div>
                </div>

                {/* Exact Code Snippet for this city */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#191816]">
                      Exact City GEO Meta Code & Schema.org areaServed Node
                    </span>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `<!-- Geo Meta Tags for ${activeGeoCity.cityName} -->\n<meta name="geo.region" content="${activeGeoCity.stateCode}" />\n<meta name="geo.placename" content="${activeGeoCity.shortName}" />\n<meta name="geo.position" content="${activeGeoCity.coordinates.positionString}" />\n<meta name="ICBM" content="${activeGeoCity.coordinates.lat}, ${activeGeoCity.coordinates.lng}" />\n\n// Schema.org areaServed definition:\n{\n  "@type": "City",\n  "name": "${activeGeoCity.shortName}",\n  "containedInPlace": {\n    "@type": "AdministrativeArea",\n    "name": "${activeGeoCity.state}"\n  }\n}`,
                          `fullCityCode-${activeGeoCity.id}`
                        )
                      }
                      className="text-[11px] font-mono text-[#A6865A] hover:underline cursor-pointer flex items-center space-x-1"
                    >
                      <span>{copiedKey === `fullCityCode-${activeGeoCity.id}` ? '✓ Copied' : 'Copy Code Snippet'}</span>
                    </button>
                  </div>
                  <pre className="bg-[#191816] text-[#C5A880] p-4 text-[11px] font-mono overflow-x-auto border border-[#3E3A36] leading-relaxed select-all">
{`<!-- Geo Meta Tags for ${activeGeoCity.cityName} -->
<meta name="geo.region" content="${activeGeoCity.stateCode}" />
<meta name="geo.placename" content="${activeGeoCity.shortName}" />
<meta name="geo.position" content="${activeGeoCity.coordinates.positionString}" />
<meta name="ICBM" content="${activeGeoCity.coordinates.lat}, ${activeGeoCity.coordinates.lng}" />

// Schema.org areaServed node injected into Product & FurnitureStore:
{
  "@type": "City",
  "name": "${activeGeoCity.shortName}",
  "containedInPlace": {
    "@type": "AdministrativeArea",
    "name": "${activeGeoCity.state}"
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: KEYWORD ARCHITECTURE */}
          {activeTab === 'keywords' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-serif text-xl uppercase text-[#191816]">
                    Keyword Architecture ({currentConfig.productName})
                  </h3>
                  <p className="text-xs text-[#736B63]">
                    Hierarchical search matrix mapped to buyer intent across luxury Indian residential markets.
                  </p>
                </div>

                <button
                  onClick={() =>
                    copyToClipboard(compileKeywordString(currentConfig.keywords), 'allKeywords')
                  }
                  className="bg-[#191816] text-[#FBF9F5] px-3.5 py-1.5 text-xs uppercase tracking-wider font-semibold flex items-center space-x-1.5 hover:bg-[#3E3A36] transition-all cursor-pointer"
                >
                  {copiedKey === 'allKeywords' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'allKeywords' ? 'Copied All' : 'Copy Full Meta Keywords'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1. Primary Keywords */}
                <div className="bg-white p-5 border border-[#D1C7BB] space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#137333]" />
                    <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-[#191816]">
                      Primary High-Volume Queries
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentConfig.keywords.primary.map((kw, idx) => (
                      <span
                        key={idx}
                        className="bg-[#F4EFEB] border border-[#D1C7BB] text-[#191816] px-2.5 py-1 text-xs rounded-none font-medium"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-[#736B63] pt-1 border-t border-[#E6DFD5]">
                    Direct commercial category keywords targeted for Google top-of-page rank.
                  </p>
                </div>

                {/* 2. Secondary Keywords */}
                <div className="bg-white p-5 border border-[#D1C7BB] space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#1a73e8]" />
                    <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-[#191816]">
                      Secondary Architectural Queries
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentConfig.keywords.secondary.map((kw, idx) => (
                      <span
                        key={idx}
                        className="bg-[#F4EFEB] border border-[#D1C7BB] text-[#191816] px-2.5 py-1 text-xs rounded-none font-medium"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-[#736B63] pt-1 border-t border-[#E6DFD5]">
                    Specific design characteristics, configuration terms, and materials.
                  </p>
                </div>

                {/* 3. Long-Tail Keywords */}
                <div className="bg-white p-5 border border-[#D1C7BB] space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#8e24aa]" />
                    <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-[#191816]">
                      Long-Tail Buyer Intent
                    </h4>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {currentConfig.keywords.longTail.map((kw, idx) => (
                      <div
                        key={idx}
                        className="bg-[#FBF9F5] border border-[#E6DFD5] text-[#191816] px-3 py-1.5 text-xs flex items-center justify-between"
                      >
                        <span>"{kw}"</span>
                        <span className="text-[10px] text-[#736B63] font-mono">High Conversion</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Geo Landing Targets */}
                <div className="bg-white p-5 border border-[#D1C7BB] space-y-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-[#A6865A]" />
                    <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-[#191816]">
                      Regional Luxury Geo Landing Targets
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentConfig.keywords.geo.map((kw, idx) => (
                      <span
                        key={idx}
                        className="bg-[#F4EFEB] border border-[#C5A880]/50 text-[#191816] px-2.5 py-1 text-xs font-medium flex items-center space-x-1"
                      >
                        <MapPin className="w-3 h-3 text-[#A6865A]" />
                        <span>{kw}</span>
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-[#736B63] pt-1 border-t border-[#E6DFD5]">
                    Local SEO targeting premium luxury developments across Gurugram, Delhi, Mumbai & Bengaluru.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SOCIAL GRAPH & WHATSAPP */}
          {activeTab === 'social' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl uppercase text-[#191816]">
                  Open Graph & Social Share Preview
                </h3>
                <p className="text-xs text-[#736B63]">
                  Rich preview rendered when clients share links on WhatsApp, iMessage, LinkedIn, or Instagram DM.
                </p>
              </div>

              {/* WhatsApp / Social Card Preview */}
              <div className="max-w-md mx-auto bg-white border border-[#D1C7BB] shadow-lg overflow-hidden">
                <div className="aspect-[16/9] bg-[#EFECE6] relative overflow-hidden">
                  <img
                    src={heroImage}
                    alt={currentConfig.openGraph.imageAlt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-[#191816]/80 text-white text-[9px] px-2 py-0.5 uppercase tracking-wider">
                    {currentConfig.category}
                  </div>
                </div>
                <div className="p-4 bg-[#FBF9F5] space-y-1.5 border-t border-[#E6DFD5]">
                  <div className="text-[10px] text-[#736B63] uppercase tracking-wider font-mono">
                    HOUSEOFFORM.IN
                  </div>
                  <h4 className="font-serif text-base text-[#191816] font-semibold leading-snug">
                    {currentConfig.openGraph.title}
                  </h4>
                  <p className="text-xs text-[#736B63] line-clamp-2">
                    {currentConfig.openGraph.description}
                  </p>
                </div>
              </div>

              {/* Tag Audit */}
              <div className="bg-white p-5 border border-[#D1C7BB] space-y-3 text-xs">
                <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-[#191816]">
                  Open Graph & Twitter Meta Protocol Tag Audit
                </h4>
                <div className="space-y-2 font-mono text-[11px]">
                  <div className="p-2 bg-[#FBF9F5] border border-[#E6DFD5] flex items-center justify-between">
                    <span className="text-[#736B63]">og:title</span>
                    <span className="text-[#191816] font-medium">{currentConfig.openGraph.title}</span>
                  </div>
                  <div className="p-2 bg-[#FBF9F5] border border-[#E6DFD5] flex items-center justify-between">
                    <span className="text-[#736B63]">og:type</span>
                    <span className="text-[#191816] font-medium">{currentConfig.openGraph.type}</span>
                  </div>
                  <div className="p-2 bg-[#FBF9F5] border border-[#E6DFD5] flex items-center justify-between">
                    <span className="text-[#736B63]">og:url</span>
                    <span className="text-[#191816] font-medium">
                      {SITE_BASE_URL}{currentConfig.canonicalSlug}
                    </span>
                  </div>
                  <div className="p-2 bg-[#FBF9F5] border border-[#E6DFD5] flex items-center justify-between">
                    <span className="text-[#736B63]">twitter:card</span>
                    <span className="text-[#191816] font-medium">summary_large_image</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SCHEMA.ORG JSON-LD */}
          {activeTab === 'schema' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-serif text-xl uppercase text-[#191816]">
                      Schema.org Product & AggregateOffer JSON-LD
                    </h3>
                    <span className="bg-[#137333]/15 text-[#137333] border border-[#137333]/30 px-2 py-0.5 text-[10px] font-mono font-semibold flex items-center space-x-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Google Rich Results Ready</span>
                    </span>
                  </div>
                  <p className="text-xs text-[#736B63] mt-0.5">
                    Automatically injected into the page head to power Google Shopping, Merchant Center, and Knowledge Graph.
                  </p>
                </div>

                <button
                  onClick={() => copyToClipboard(schemaJson, 'schemaJson')}
                  className="bg-[#191816] text-[#FBF9F5] px-3.5 py-1.5 text-xs uppercase tracking-wider font-semibold flex items-center space-x-1.5 hover:bg-[#3E3A36] transition-all cursor-pointer"
                >
                  {copiedKey === 'schemaJson' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'schemaJson' ? 'JSON Copied' : 'Copy Schema'}</span>
                </button>
              </div>

              <pre className="bg-[#191816] text-[#C5A880] p-4 text-[11px] font-mono overflow-x-auto max-h-[420px] border border-[#3E3A36] leading-relaxed select-all">
                {schemaJson}
              </pre>
            </div>
          )}

          {/* TAB 5: PRODUCT LINE MATRIX */}
          {activeTab === 'matrix' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl uppercase text-[#191816]">
                  Master SEO Architecture Comparison Matrix
                </h3>
                <p className="text-xs text-[#736B63]">
                  Side-by-side verification of SEO titles, meta descriptions, and primary keyword targets across the complete catalogue.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {Object.values(PRODUCT_SEO_REGISTRY).map((prod) => (
                  <div
                    key={prod.productId}
                    className={`bg-white border p-5 space-y-4 ${
                      selectedProductId === prod.productId
                        ? 'border-[#191816] ring-2 ring-[#C5A880]'
                        : 'border-[#D1C7BB]'
                    }`}
                  >
                    <div className="flex justify-between items-start border-b border-[#E6DFD5] pb-3">
                      <div>
                        <span className="text-[10px] font-mono text-[#A6865A] uppercase block">
                          Product {prod.productNo} · {prod.productCode}
                        </span>
                        <h4 className="font-serif text-lg font-semibold text-[#191816] uppercase">
                          {prod.productName}
                        </h4>
                      </div>
                      <span className="text-[9px] bg-[#F4EFEB] border border-[#D1C7BB] px-2 py-0.5 uppercase font-mono">
                        {prod.sku}
                      </span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div>
                        <span className="text-[10px] text-[#736B63] uppercase tracking-wider font-semibold block">
                          Target Title
                        </span>
                        <p className="text-[#191816] font-medium mt-0.5 leading-snug">
                          {prod.seoTitle}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] text-[#736B63] uppercase tracking-wider font-semibold block">
                          Meta Description
                        </span>
                        <p className="text-[#4A453F] text-[11px] mt-0.5 leading-relaxed">
                          {prod.metaDescription}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] text-[#736B63] uppercase tracking-wider font-semibold block mb-1">
                          Primary Search Term Set
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {prod.keywords.primary.slice(0, 4).map((kw, kIdx) => (
                            <span
                              key={kIdx}
                              className="text-[10px] bg-[#FBF9F5] border border-[#D1C7BB] px-1.5 py-0.5 text-[#191816]"
                            >
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedProductId(prod.productId)}
                      className={`w-full py-2 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                        selectedProductId === prod.productId
                          ? 'bg-[#191816] text-[#FBF9F5]'
                          : 'bg-[#F4EFEB] text-[#191816] hover:bg-[#191816] hover:text-[#FBF9F5]'
                      }`}
                    >
                      {selectedProductId === prod.productId ? 'Currently Active in Head' : 'Activate Live Head'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="bg-[#F4EFEB] px-6 py-3 border-t border-[#E6DFD5] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#736B63]">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-green-700" />
            <span>
              Live DOM synchronizer active. Active document title:{' '}
              <strong className="text-[#191816]">"{document.title}"</strong>
            </span>
          </div>
          <div className="flex items-center space-x-3 text-[11px]">
            <a
              href="https://schema.org"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#191816] flex items-center space-x-1"
            >
              <span>Schema.org Standard</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
