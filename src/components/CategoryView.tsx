/**
 * House Of Form — CategoryView Component
 * Dynamically filters and displays products based on furniture categories
 * (Sofas, Chairs, Tables, Beds, Storage, All Pieces) with architectural editorial presentation.
 */

import React, { useState, useMemo } from 'react';
import { useStore } from '../context/StoreContext';
import { ArrowRight, SlidersHorizontal, Sparkles, Check, Compass, ShieldCheck } from 'lucide-react';

interface CategoryMetadata {
  id: string;
  title: string;
  subheading: string;
  editorial: string;
  designPhilosophy: string;
  badge: string;
}

const CATEGORY_META: Record<string, CategoryMetadata> = {
  ALL: {
    id: 'ALL',
    title: 'The Permanent Collection',
    subheading: 'Global Contemporary Design. Indian Craftsmanship. Bespoke to You.',
    editorial:
      'Every piece in the House Of Form catalogue is conceived as an architectural dialogue between soft European curves and the lived domestic reality of contemporary Indian homes.',
    designPhilosophy: 'Handcrafted in seasoned hardwood with 100% custom sizing flexibility.',
    badge: 'Curated Catalogue',
  },
  SOFAS: {
    id: 'SOFAS',
    title: 'Sofas & Modular Seating',
    subheading: 'Low-Profile Architectural Lounges & Curved Pavilions',
    editorial:
      'Sculptural curved silhouettes engineered with graduated high-resilience memory foam and internal Pirelli webbing. Designed for deep hospitality and effortless conversational flow.',
    designPhilosophy: 'Pitched backrests, continuous tactile curves, and generous 90–110cm seat depths.',
    badge: 'Living & Salons',
  },
  CHAIRS: {
    id: 'CHAIRS',
    title: 'Lounge & Accent Chairs',
    subheading: 'Sculptural Statement Seating & Swivel Pavilions',
    editorial:
      'Individually handcrafted statement armchairs pairing warm Italian bouclé and full-grain leathers with hand-turned teak, smoked oak, or brushed bronze swivel bases.',
    designPhilosophy: '360° architectural presence designed to anchor salon corners or open-plan libraries.',
    badge: 'Accent & Study',
  },
  TABLES: {
    id: 'TABLES',
    title: 'Dining & Center Tables',
    subheading: 'Monolithic Travertine, Marble & Fluted Hardwood Slabs',
    editorial:
      'Enduring geological mass softened by hand-honed bullnose contours. Sourced from authentic Roman travertine quarries and paired with solid fluted Canaletto walnut plinths.',
    designPhilosophy: 'Natural stone sealed with anti-stain matte finishes for modern Indian gatherings.',
    badge: 'Dining & Living',
  },
  BEDS: {
    id: 'BEDS',
    title: 'Sanctuary Beds & Platforms',
    subheading: 'Low-Profile Bouclé Platform Beds with Integrated Wings',
    editorial:
      'Acoustically softened bedroom architecture. Wraparound padded wing headboards and floating cantilevered timber nightstands create an uninterrupted horizon of rest.',
    designPhilosophy: 'Recessed shadow plinths create a gentle floating illusion above hardwood floors.',
    badge: 'Private Suites',
  },
  STORAGE: {
    id: 'STORAGE',
    title: 'Storage & Architectural Consoles',
    subheading: 'Fluted Smoked Oak & Brushed Brass Credenzas',
    editorial:
      'Low-slung linear storage monoliths engineered with German push-to-open hardware, concealed cable routing, and continuous grain matching across full-width doors.',
    designPhilosophy: 'Designed to function equally as freestanding room dividers or anchored wall art.',
    badge: 'Consoles & Media',
  },
};

export const CategoryView: React.FC = () => {
  const {
    products,
    selectedCategory,
    setSelectedCategory,
    setSelectedProductId,
    setCurrentView,
  } = useStore();

  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const categories = ['ALL', 'SOFAS', 'CHAIRS', 'TABLES', 'BEDS', 'STORAGE'];

  const currentMeta = CATEGORY_META[selectedCategory] || CATEGORY_META.ALL;

  // Filter products by active category
  const filteredProducts = useMemo(() => {
    let list = products.filter((p) => {
      if (selectedCategory === 'ALL') return true;
      const cat = `${p.primaryCategory} ${p.subcategory} ${p.name}`.toUpperCase();
      if (selectedCategory === 'SOFAS') return cat.includes('SOFA') || cat.includes('LOUNGE');
      if (selectedCategory === 'CHAIRS') return cat.includes('CHAIR') || cat.includes('SEATING') || cat.includes('CLUB');
      if (selectedCategory === 'TABLES') return cat.includes('TABLE') || cat.includes('TAVOLA');
      if (selectedCategory === 'BEDS') return cat.includes('BED') || cat.includes('SOMNIA');
      if (selectedCategory === 'STORAGE') return cat.includes('STORAGE') || cat.includes('CONSOLE') || cat.includes('CREDENZA');
      return true;
    });

    if (sortBy === 'price-asc') {
      list = [...list].sort((a, b) => a.startingPrice - b.startingPrice);
    } else if (sortBy === 'price-desc') {
      list = [...list].sort((a, b) => b.startingPrice - a.startingPrice);
    }

    return list;
  }, [products, selectedCategory, sortBy]);

  const handleProductClick = (id: string) => {
    setSelectedProductId(id);
    setCurrentView('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#191816]">
      
      {/* 1. EDITORIAL CATEGORY HERO HEADER */}
      <section className="border-b border-[#E6DFD5] bg-[#F7F4EE] pt-14 pb-12 sm:pt-20 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumb path */}
          <div className="flex items-center space-x-2 text-[10px] tracking-[0.25em] uppercase text-[#736B63] mb-4">
            <button
              onClick={() => setCurrentView('home')}
              className="hover:text-[#191816] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span>Furniture Categories</span>
            <span>/</span>
            <span className="text-[#A6865A] font-semibold">{currentMeta.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white border border-[#E6DFD5] text-[10px] tracking-[0.2em] uppercase text-[#A6865A] font-medium">
                <Compass className="w-3 h-3 text-[#A6865A]" />
                <span>{currentMeta.badge} • {filteredProducts.length} Bespoke Designs</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#191816] tracking-tight uppercase leading-[1.08]">
                {currentMeta.title}
              </h1>

              <p className="text-sm sm:text-base text-[#4A453F] max-w-2xl font-light leading-relaxed">
                {currentMeta.editorial}
              </p>
            </div>

            <div className="lg:col-span-4 bg-white/70 backdrop-blur-sm p-6 border border-[#E6DFD5] space-y-3">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#736B63] font-semibold block">
                Atelier Guarantee
              </span>
              <p className="text-xs text-[#2C2926] leading-relaxed italic">
                "{currentMeta.designPhilosophy}"
              </p>
              <div className="pt-2 border-t border-[#E6DFD5] flex items-center justify-between text-[10px] text-[#736B63] tracking-wider uppercase">
                <span>100% Bespoke Dimensions</span>
                <span className="text-[#A6865A] font-medium">Made in India</span>
              </div>
            </div>

          </div>

          {/* Category In-Page Filter Pills */}
          <div className="mt-10 pt-6 border-t border-[#E6DFD5] flex flex-wrap gap-2 items-center justify-between">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                const label =
                  cat === 'ALL'
                    ? 'All Pieces'
                    : cat === 'SOFAS'
                    ? 'Sofas'
                    : cat === 'CHAIRS'
                    ? 'Lounge Chairs'
                    : cat === 'TABLES'
                    ? 'Tables'
                    : cat === 'BEDS'
                    ? 'Beds'
                    : 'Storage';

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-[11px] tracking-[0.16em] uppercase font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#191816] text-[#FBF9F5] shadow-sm'
                        : 'bg-white text-[#736B63] border border-[#E6DFD5] hover:border-[#A6865A] hover:text-[#191816]'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center space-x-2 text-xs text-[#736B63]">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#A6865A]" />
              <span className="text-[10px] uppercase tracking-wider">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-[#E6DFD5] px-3 py-1.5 text-xs text-[#191816] focus:outline-none focus:border-[#A6865A]"
              >
                <option value="featured">Editorial Curation</option>
                <option value="price-asc">Price: Modest to Investment</option>
                <option value="price-desc">Price: Investment to Modest</option>
              </select>
            </div>

          </div>

        </div>
      </section>

      {/* 2. PRODUCT CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white border border-[#E6DFD5] p-8 space-y-4">
            <h3 className="font-serif text-2xl text-[#191816]">No Pieces in this Category</h3>
            <p className="text-xs text-[#736B63] max-w-md mx-auto">
              Our master artisans are currently prototyping new pieces for this category.
              Explore our full collection or schedule a custom bespoke commission.
            </p>
            <button
              onClick={() => setSelectedCategory('ALL')}
              className="bg-[#191816] text-[#FBF9F5] px-6 py-2.5 text-xs uppercase tracking-widest font-medium cursor-pointer"
            >
              View All Pieces
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredProducts.map((p) => {
              const minPrice = Math.min(...p.variants.map((v) => v.basePrice));
              const isHovered = hoveredProduct === p.id;
              const displayImage = isHovered ? (p.images.detail || p.images.hero) : p.images.hero;

              return (
                <div
                  key={p.id}
                  id={`product-card-${p.id}`}
                  onMouseEnter={() => setHoveredProduct(p.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  onClick={() => handleProductClick(p.id)}
                  className="group bg-white border border-[#E6DFD5] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_40px_-15px_rgba(0,0,0,0.08)] cursor-pointer"
                >
                  {/* Image Container with Zoom Feedback */}
                  <div className="relative aspect-[4/3] bg-[#EBE7DF] overflow-hidden">
                    <img
                      src={displayImage}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Subtle Category Badge */}
                    <div className="absolute top-4 left-4 bg-[#191816]/85 backdrop-blur-sm text-[#FBF9F5] text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 font-medium">
                      {p.subcategory}
                    </div>

                    {/* Subtle hover quick view badge */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95 text-[#191816] text-[10px] tracking-[0.16em] uppercase px-3 py-1.5 shadow-md flex items-center space-x-1 font-medium">
                      <span>View Specifications</span>
                      <ArrowRight className="w-3 h-3 text-[#A6865A]" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    
                    <div>
                      <div className="flex justify-between items-baseline">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-[#A6865A] font-medium">
                          {p.primaryCategory}
                        </span>
                        <span className="text-[10px] text-[#968E85] font-mono">
                          {p.variants.length} {p.variants.length > 1 ? 'Configurations' : 'Configuration'}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl text-[#191816] tracking-wide uppercase mt-1 group-hover:text-[#A6865A] transition-colors">
                        {p.name}
                      </h3>

                      <p className="text-xs text-[#736B63] italic mt-0.5">{p.tagline}</p>

                      <p className="text-xs text-[#4A453F] mt-3 line-clamp-2 leading-relaxed">
                        {p.productStory}
                      </p>
                    </div>

                    {/* Pricing & Customization Guarantee */}
                    <div className="pt-4 border-t border-[#E6DFD5] space-y-3">
                      
                      <div className="flex justify-between items-baseline">
                        <div>
                          <span className="text-[9px] text-[#736B63] tracking-widest uppercase block">
                            Starting From
                          </span>
                          <span className="font-serif text-xl text-[#191816] font-medium">
                            ₹{minPrice.toLocaleString('en-IN')}
                          </span>
                        </div>

                        <span className="text-[9px] text-[#A6865A] bg-[#F7F4EE] px-2 py-0.5 border border-[#E6DFD5] uppercase tracking-wider font-semibold">
                          Bespoke Sizing
                        </span>
                      </div>

                      {/* Action button */}
                      <div className="pt-1">
                        <button
                          onClick={() => handleProductClick(p.id)}
                          className="w-full bg-[#191816] hover:bg-[#A6865A] text-[#FBF9F5] text-[11px] tracking-[0.18em] uppercase py-3 font-medium transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-sm"
                        >
                          <span>Explore Piece & Customise</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </section>

      {/* 3. BESPOKE COMMISSION CALLOUT */}
      <section className="bg-[#191816] text-[#FBF9F5] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#2C2926]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] font-semibold">
              The House Of Form Standard
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#FBF9F5] uppercase tracking-wide">
              Every Piece Made to Your Architectural Floor Plan
            </h2>
            <p className="text-xs sm:text-sm text-[#D1C7BB] leading-relaxed max-w-2xl font-light">
              We do not mass manufacture or warehouse generic inventory. Once your piece is selected,
              our New Delhi atelier calibrates exact dimensions, foam densities, and upholstery nuances
              for your specific home before commencing hand-shaping.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <button
              onClick={() => {
                setCurrentView('bespoke');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#C5A880] hover:bg-[#D8BE96] text-[#191816] px-6 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold text-center transition-colors cursor-pointer"
            >
              Book Design Consultation
            </button>
            <button
              onClick={() => {
                setCurrentView('crafted-in-india');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-transparent hover:bg-white/10 text-[#FBF9F5] border border-[#3E3A36] px-6 py-3.5 text-xs tracking-[0.2em] uppercase font-medium text-center transition-colors cursor-pointer"
            >
              Read Craftsmanship Story
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
