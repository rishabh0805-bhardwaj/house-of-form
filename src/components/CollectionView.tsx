/**
 * House Of Form — The Furniture Collection View
 * Curated contemporary pieces shaped by proportion, material, and space.
 */

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { ArrowRight, Box } from 'lucide-react';

export const CollectionView: React.FC = () => {
  const {
    products,
    setSelectedProductId,
    setCurrentView,
    setIsReservationModalOpen,
    selectedCategory,
    setSelectedCategory,
  } = useStore();

  const categories = ['ALL', 'SOFAS', 'CHAIRS', 'TABLES', 'BEDS', 'STORAGE'];

  const filteredProducts =
    selectedCategory === 'ALL'
      ? products
      : products.filter((p) => {
          const cat = p.primaryCategory.toUpperCase();
          if (selectedCategory === 'SOFAS') return cat.includes('SOFA') || cat.includes('LOUNGE');
          if (selectedCategory === 'CHAIRS') return cat.includes('CHAIR') || cat.includes('SEATING');
          if (selectedCategory === 'TABLES') return cat.includes('TABLE');
          if (selectedCategory === 'BEDS') return cat.includes('BED');
          if (selectedCategory === 'STORAGE') return cat.includes('STORAGE') || cat.includes('CONSOLE');
          return true;
        });

  const handleProductClick = (id: string) => {
    setSelectedProductId(id);
    setCurrentView('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FBF9F5] text-[#191816] min-h-screen pb-20">
      
      {/* Header Banner */}
      <div className="bg-[#191816] text-[#FBF9F5] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#2C2926]">
        <div className="max-w-7xl mx-auto space-y-3">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] font-semibold">
            House Of Form Catalogue
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl uppercase tracking-wider font-light">
            The Collection
          </h1>
          <p className="text-xs sm:text-sm text-[#968E85] max-w-xl leading-relaxed">
            Contemporary silhouettes crafted with European design intelligence and bespoke Indian artisanal joinery. Every piece is made to order around your architectural dimensions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Category Filters */}
        <div className="flex items-center space-x-2 border-b border-[#E6DFD5] pb-4 mb-8 overflow-x-auto text-[10px] tracking-[0.2em] uppercase">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 border transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#191816] text-[#FBF9F5] border-[#191816]'
                  : 'bg-white text-[#736B63] border-[#D1C7BB] hover:border-[#191816]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div id="collection-products-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p) => {
            const minPrice = Math.min(...p.variants.map((v) => v.basePrice));
            const maxPrice = Math.max(...p.variants.map((v) => v.basePrice));

            return (
              <div
                key={p.id}
                className="bg-white border border-[#D1C7BB] overflow-hidden flex flex-col group transition-all hover:shadow-lg"
              >
                {/* Image */}
                <div
                  onClick={() => handleProductClick(p.id)}
                  className="aspect-[4/3] bg-[#EFECE6] overflow-hidden cursor-pointer relative"
                >
                  <img
                    src={p.images.hero}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#191816]/90 text-[#FBF9F5] px-2.5 py-1 text-[9px] font-mono tracking-widest uppercase">
                    {p.sku}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#A6865A] font-medium block">
                      {p.subcategory}
                    </span>
                    <h3
                      onClick={() => handleProductClick(p.id)}
                      className="font-serif text-2xl text-[#191816] tracking-wider uppercase mt-1 cursor-pointer hover:text-[#A6865A] transition-colors"
                    >
                      {p.name}
                    </h3>
                    <p className="text-xs text-[#736B63] italic mt-1">{p.tagline}</p>
                    <p className="text-xs text-[#4A453F] mt-3 line-clamp-2 leading-relaxed">
                      {p.productStory}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E6DFD5] space-y-3">
                    <div className="flex justify-between items-baseline">
                      <span className="text-[10px] text-[#736B63] uppercase">Starting From</span>
                      <span className="font-serif text-lg text-[#191816] font-medium">
                        ₹{minPrice.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleProductClick(p.id)}
                        className="w-full bg-[#191816] hover:bg-[#2C2926] text-[#FBF9F5] py-2.5 text-[11px] tracking-wider uppercase text-center transition-all cursor-pointer"
                      >
                        View Piece
                      </button>
                      <button
                        onClick={() => {
                          setSelectedProductId(p.id);
                          setIsReservationModalOpen(true);
                        }}
                        className="w-full border border-[#D1C7BB] text-[#191816] hover:border-[#191816] py-2.5 text-[11px] tracking-wider uppercase text-center transition-colors cursor-pointer"
                      >
                        Atelier Kit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
