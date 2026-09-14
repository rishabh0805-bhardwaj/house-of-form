/**
 * House Of Form — Luxury Wishlist Curation Drawer
 * Allows discerning clients to curate and review their architectural selections,
 * explore custom configurations, and seamlessly transition into the Design Reservation flow.
 */

import React from 'react';
import { useStore } from '../context/StoreContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ArrowRight, Trash2, Sparkles, Box, Check, Compass } from 'lucide-react';

export const WishlistDrawer: React.FC = () => {
  const {
    wishlist,
    isWishlistDrawerOpen,
    setIsWishlistDrawerOpen,
    toggleWishlist,
    clearWishlist,
    products,
    setSelectedProductId,
    setCurrentView,
    setIsReservationModalOpen,
  } = useStore();

  const curatedProducts = products.filter((p) => wishlist.includes(p.id));

  const handleSelectProduct = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentView('product-detail');
    setIsWishlistDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReservePiece = (productId: string) => {
    setSelectedProductId(productId);
    setIsWishlistDrawerOpen(false);
    setIsReservationModalOpen(true);
  };

  return (
    <AnimatePresence>
      {isWishlistDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsWishlistDrawerOpen(false)}
            className="fixed inset-0 bg-[#191816]/60 backdrop-blur-xs cursor-pointer"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md bg-[#FBF9F5] text-[#191816] h-full shadow-2xl flex flex-col z-10 border-l border-[#E6DFD5]"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#E6DFD5] bg-[#F7F4EE] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#191816] text-[#C5A880] flex items-center justify-center shadow-xs">
                  <Heart className="w-4 h-4 fill-[#C5A880]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg uppercase tracking-[0.1em] text-[#191816]">
                    Curated Wishlist
                  </h3>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#736B63] font-medium">
                    {curatedProducts.length} {curatedProducts.length === 1 ? 'Selected Piece' : 'Selected Pieces'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsWishlistDrawerOpen(false)}
                className="p-2 text-[#736B63] hover:text-[#191816] transition-colors rounded-full hover:bg-black/5 cursor-pointer"
                aria-label="Close Wishlist Drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {curatedProducts.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center px-4 space-y-4 py-16">
                  <div className="w-16 h-16 rounded-full bg-[#EFECE6] border border-[#D1C7BB] flex items-center justify-center text-[#968E85]">
                    <Heart className="w-7 h-7 stroke-[1.2]" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-serif text-xl uppercase tracking-wider text-[#191816]">
                      Your Wishlist is Empty
                    </h4>
                    <p className="text-xs text-[#736B63] max-w-xs leading-relaxed">
                      Save pieces from our permanent collection to compare dimensions, materials, and curate your bespoke interior.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setIsWishlistDrawerOpen(false);
                      setCurrentView('category-view');
                    }}
                    className="bg-[#191816] text-[#FBF9F5] px-6 py-3 text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#A6865A] transition-colors cursor-pointer"
                  >
                    Explore Collection
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[11px] text-[#736B63] pb-2 border-b border-[#E6DFD5]/60">
                    <span className="uppercase tracking-widest text-[9px] text-[#A6865A] font-semibold">
                      Architectural Curations
                    </span>
                    <button
                      onClick={clearWishlist}
                      className="hover:text-red-700 transition-colors flex items-center gap-1 cursor-pointer text-[10px] uppercase tracking-wider"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Clear All</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {curatedProducts.map((product) => {
                      const minPrice = Math.min(...product.variants.map((v) => v.basePrice));
                      return (
                        <div
                          key={product.id}
                          className="bg-white border border-[#E6DFD5] p-3.5 flex gap-3.5 group hover:border-[#A6865A] transition-all shadow-xs"
                        >
                          {/* Thumbnail */}
                          <div
                            onClick={() => handleSelectProduct(product.id)}
                            className="w-24 h-24 aspect-square bg-[#EFECE6] overflow-hidden shrink-0 cursor-pointer border border-[#E6DFD5]"
                          >
                            <img
                              src={product.images.hero}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>

                          {/* Info */}
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex items-start justify-between">
                                <span className="text-[9px] tracking-[0.18em] uppercase text-[#A6865A] font-medium">
                                  {product.primaryCategory}
                                </span>
                                <button
                                  onClick={() => toggleWishlist(product.id)}
                                  className="text-[#968E85] hover:text-red-600 transition-colors p-1 -mr-1 -mt-1 cursor-pointer"
                                  title="Remove from Wishlist"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              <h5
                                onClick={() => handleSelectProduct(product.id)}
                                className="font-serif text-base text-[#191816] uppercase hover:text-[#A6865A] transition-colors cursor-pointer"
                              >
                                {product.name}
                              </h5>

                              <p className="text-[10px] text-[#736B63] line-clamp-1 italic mt-0.5">
                                {product.tagline}
                              </p>
                            </div>

                            <div className="pt-2 flex items-baseline justify-between border-t border-[#E6DFD5]/60 mt-1">
                              <div>
                                <span className="text-[9px] text-[#968E85] uppercase tracking-wider block">
                                  Starting from
                                </span>
                                <span className="text-xs font-mono font-semibold text-[#191816]">
                                  ₹{minPrice.toLocaleString('en-IN')}
                                </span>
                              </div>

                              <div className="flex items-center gap-1.5">
                                <button
                                  onClick={() => handleSelectProduct(product.id)}
                                  className="text-[10px] uppercase tracking-wider text-[#736B63] hover:text-[#191816] underline underline-offset-2 px-1.5 py-1 cursor-pointer"
                                >
                                  Specs
                                </button>
                                <button
                                  onClick={() => handleReservePiece(product.id)}
                                  className="bg-[#191816] hover:bg-[#A6865A] text-[#FBF9F5] text-[10px] tracking-wider uppercase px-2.5 py-1 transition-colors cursor-pointer"
                                >
                                  Reserve
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Footer Summary & Direct Concierge Action */}
            {curatedProducts.length > 0 && (
              <div className="p-6 border-t border-[#E6DFD5] bg-[#F7F4EE] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#736B63] uppercase tracking-wider text-[10px]">
                    Curated Pieces
                  </span>
                  <span className="font-serif text-sm text-[#191816] font-medium">
                    {curatedProducts.length} Items Shortlisted
                  </span>
                </div>

                <div className="bg-white p-3 border border-[#E6DFD5] text-[11px] text-[#4A453F] flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-[#A6865A] shrink-0 mt-0.5" />
                  <span>
                    Each piece is 100% made to order. Sizing, wood stain, and fabric selections are calibrated to your residential blueprints.
                  </span>
                </div>

                <button
                  onClick={() => {
                    setIsWishlistDrawerOpen(false);
                    setCurrentView('bespoke');
                  }}
                  className="w-full bg-[#C5A880] hover:bg-[#A6865A] text-[#191816] py-3 text-xs tracking-[0.2em] uppercase font-semibold flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-sm"
                >
                  <Compass className="w-4 h-4" />
                  <span>Consult Atelier on Wishlist</span>
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
