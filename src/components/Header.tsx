/**
 * House Of Form — Luxury Header Architecture
 * Features Primary Brand Header + Sticky Secondary Furniture Categories Sub-Header.
 * Uses global `isScrolled` state from StoreContext to smoothly hide the primary brand header on scroll
 * while the category navigation bar remains fixed at the top, preventing layout shifts.
 */

import React, { useState, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { ChevronRight, Menu, X, ArrowRight, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface FurnitureCategoryItem {
  id: string;
  label: string;
}

const FURNITURE_CATEGORIES: FurnitureCategoryItem[] = [
  { id: 'ALL', label: 'All Pieces' },
  { id: 'SOFAS', label: 'Sofas' },
  { id: 'CHAIRS', label: 'Chairs' },
  { id: 'TABLES', label: 'Tables' },
  { id: 'BEDS', label: 'Beds' },
  { id: 'STORAGE', label: 'Storage' },
];

export const Header: React.FC = () => {
  const {
    currentView,
    setCurrentView,
    setSelectedProductId,
    selectedCategory,
    setSelectedCategory,
    isScrolled,
    wishlist,
    setIsWishlistDrawerOpen,
  } = useStore();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track one-time initial move-in animation on first login / visit per session
  const [hasAnimated, setHasAnimated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('hof_brand_animated') === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (!hasAnimated) {
      try {
        sessionStorage.setItem('hof_brand_animated', 'true');
      } catch {
        // ignore
      }
    }
  }, [hasAnimated]);

  const navigateTo = (view: string, productId?: string) => {
    if (productId) {
      setSelectedProductId(productId);
    }
    setCurrentView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentView('category-view');
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full relative">
      
      {/* 1. BIG BRAND NAME STRIP — ONLY the brand name, architectural, serene & iconic */}
      <div className="w-full bg-[#FBF9F5] border-b border-[#E6DFD5] py-8 sm:py-10 md:py-12 px-4 flex items-center justify-center">
        <button
          id="brand-hero-strip-btn"
          onClick={() => navigateTo('home')}
          className="text-center group cursor-pointer flex flex-col items-center max-w-full focus:outline-none"
        >
          <motion.h1
            initial={!hasAnimated ? { opacity: 0, y: 20, filter: 'blur(3px)' } : false}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.05,
            }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.18em] sm:tracking-[0.24em] font-light text-[#191816] group-hover:text-[#A6865A] transition-colors uppercase select-none leading-none"
          >
            HOUSE OF FORM
          </motion.h1>
        </button>
      </div>

      {/* 2 & 3. STICKY DUAL NAVIGATION CONTAINER (Sticky at top with smooth scroll transition) */}
      <div
        id="sticky-header-container"
        className={`sticky top-0 z-40 bg-[#FBF9F5]/98 backdrop-blur-md transition-shadow duration-500 ${
          isScrolled
            ? 'shadow-[0_8px_30px_rgba(25,24,22,0.08)]'
            : 'shadow-none'
        }`}
      >
        {/* HEADER 1: PRIMARY BRAND NAVIGATION (Smoothly slides up & fades out when scrolled down) */}
        <motion.div
          id="primary-brand-header-motion"
          initial={false}
          animate={{
            height: isScrolled ? 0 : 'auto',
            opacity: isScrolled ? 0 : 1,
            y: isScrolled ? -8 : 0,
          }}
          transition={{
            duration: 0.42,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="overflow-hidden border-b border-[#E6DFD5]/70 bg-[#FBF9F5]"
        >
          <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            
            {/* Desktop Left Brand Accent / Atelier Stamp */}
            <div className="hidden xl:flex items-center text-[10px] tracking-[0.25em] uppercase text-[#8C8379] font-medium w-48 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A6865A] mr-2 shrink-0" />
              <span>Bespoke Atelier</span>
            </div>

            {/* Desktop Primary Navigation Links (Centered, balanced, elegant) */}
            <nav className="hidden xl:flex items-center justify-center space-x-7 2xl:space-x-9 text-[12px] tracking-[0.2em] uppercase font-medium text-[#2C2926] flex-1">
              <button
                id="nav-collection"
                onClick={() => {
                  setSelectedCategory('ALL');
                  navigateTo('category-view');
                }}
                className={`hover:text-[#A6865A] transition-colors cursor-pointer py-1 relative ${
                  (currentView === 'category-view' || currentView === 'collection') && selectedCategory === 'ALL'
                    ? 'text-[#A6865A] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#A6865A]'
                    : ''
                }`}
              >
                Collection
              </button>
              <button
                id="nav-bespoke"
                onClick={() => navigateTo('bespoke')}
                className={`hover:text-[#A6865A] transition-colors cursor-pointer py-1 relative ${
                  currentView === 'bespoke'
                    ? 'text-[#A6865A] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#A6865A]'
                    : ''
                }`}
              >
                Bespoke
              </button>
              <button
                id="nav-crafted-in-india"
                onClick={() => navigateTo('crafted-in-india')}
                className={`hover:text-[#A6865A] transition-colors cursor-pointer py-1 relative ${
                  currentView === 'crafted-in-india'
                    ? 'text-[#A6865A] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#A6865A]'
                    : ''
                }`}
              >
                Crafted in India
              </button>
              <button
                id="nav-projects"
                onClick={() => navigateTo('projects')}
                className={`hover:text-[#A6865A] transition-colors cursor-pointer py-1 relative ${
                  currentView === 'projects'
                    ? 'text-[#A6865A] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#A6865A]'
                    : ''
                }`}
              >
                Projects
              </button>
              <button
                id="nav-journal"
                onClick={() => navigateTo('journal')}
                className={`hover:text-[#A6865A] transition-colors cursor-pointer py-1 relative ${
                  currentView === 'journal'
                    ? 'text-[#A6865A] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#A6865A]'
                    : ''
                }`}
              >
                Journal
              </button>
              <button
                id="nav-architects"
                onClick={() => navigateTo('architects')}
                className={`hover:text-[#A6865A] transition-colors cursor-pointer py-1 relative ${
                  currentView === 'architects'
                    ? 'text-[#A6865A] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#A6865A]'
                    : ''
                }`}
              >
                Trade & Architects
              </button>
            </nav>

            {/* Desktop Right: Bespoke Concierge (Single Wishlist button is kept exclusively in Header 2 below) */}
            <div className="hidden xl:flex items-center justify-end w-48 shrink-0">
              <button
                onClick={() => navigateTo('bespoke')}
                className="inline-flex items-center space-x-1.5 text-[10.5px] tracking-[0.22em] uppercase font-medium text-[#736B63] hover:text-[#191816] transition-colors cursor-pointer group"
              >
                <span>Bespoke Concierge</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#A6865A] transform group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Header 1 bar */}
            <div className="xl:hidden flex items-center justify-between w-full">
              <span className="text-[10px] tracking-[0.24em] uppercase text-[#8C8379] font-medium">
                House Of Form Atelier
              </span>
              <button
                onClick={() => navigateTo('bespoke')}
                className="text-[10px] tracking-[0.18em] uppercase text-[#A6865A] font-medium hover:text-[#191816]"
              >
                Bespoke Concierge →
              </button>
            </div>

          </header>
        </motion.div>

        {/* HEADER 2: FURNITURE CATEGORIES & SINGLE FANCY WISHLIST BUTTON (Remains fixed at top with smooth transitions) */}
        <nav
          id="furniture-categories-header"
          className={`border-b border-[#E6DFD5] transition-all duration-300 ${
            isScrolled ? 'py-2 sm:py-2.5' : 'py-2.5 sm:py-3.5'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            
            {/* Compact brand logo revealed smoothly when primary header is scrolled */}
            <motion.div
              initial={false}
              animate={{
                width: isScrolled ? 'auto' : 0,
                opacity: isScrolled ? 1 : 0,
                x: isScrolled ? 0 : -14,
              }}
              transition={{
                duration: 0.38,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden flex items-center shrink-0"
            >
              <button
                onClick={() => {
                  navigateTo('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex flex-col text-left group cursor-pointer whitespace-nowrap pr-4 sm:pr-6 border-r border-[#E6DFD5]"
              >
                <span className="font-serif text-base tracking-[0.16em] uppercase text-[#191816] group-hover:text-[#A6865A] transition-colors leading-none">
                  HOUSE OF FORM
                </span>
                <span className="text-[7.5px] tracking-[0.25em] uppercase text-[#736B63] font-medium mt-0.5">
                  Bespoke Atelier
                </span>
              </button>
            </motion.div>

            {/* Furniture Category Links (All Pieces, Sofas, Chairs, Tables, Beds, Storage) */}
            <div className="flex-1 flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar space-x-1 sm:space-x-2 md:space-x-3 text-[11px] sm:text-[12px] tracking-[0.18em] uppercase font-medium">
              {FURNITURE_CATEGORIES.map((category) => {
                const isActive =
                  (currentView === 'category-view' || currentView === 'collection') &&
                  selectedCategory === category.id;

                return (
                  <button
                    key={category.id}
                    id={`cat-nav-${category.id.toLowerCase()}`}
                    onClick={() => handleCategorySelect(category.id)}
                    className={`relative px-3 sm:px-4 py-1.5 transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'text-[#191816] font-semibold'
                        : 'text-[#736B63] hover:text-[#191816]'
                    }`}
                  >
                    <span>{category.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#A6865A] rounded-full transition-all" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right side action: The SINGLE, EXTREMELY FANCY WISHLIST BUTTON + Mobile Menu Toggle */}
            <div className="flex items-center space-x-2.5 sm:space-x-3 pl-2 sm:pl-4 shrink-0">
              <motion.button
                id="main-fancy-wishlist-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setIsWishlistDrawerOpen(true)}
                className={`group relative inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full cursor-pointer transition-all duration-300 border select-none ${
                  wishlist.length > 0
                    ? 'bg-[#FDFBF7] border-[#C5A880] text-[#191816] hover:border-[#967246] hover:bg-white shadow-[0_2px_12px_rgba(197,168,128,0.2)] hover:shadow-[0_4px_18px_rgba(197,168,128,0.3)]'
                    : 'bg-white/90 border-[#D1C7BB] text-[#4A453F] hover:border-[#C5A880] hover:text-[#191816] hover:bg-white shadow-xs hover:shadow-[0_2px_10px_rgba(25,24,22,0.06)]'
                }`}
                title={wishlist.length > 0 ? `Curated Wishlist (${wishlist.length} pieces)` : 'Curated Wishlist'}
              >
                {/* Fancy jewel heart icon with active beacon */}
                <span className="relative flex items-center justify-center">
                  <Heart
                    className={`w-3.5 h-3.5 transition-all duration-300 ${
                      wishlist.length > 0
                        ? 'fill-[#A6865A] text-[#A6865A] scale-105'
                        : 'text-[#8C8379] group-hover:text-[#A6865A] group-hover:scale-110'
                    }`}
                  />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-ping opacity-75 pointer-events-none" />
                  )}
                </span>

                {/* Editorial typography */}
                <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-medium">
                  Wishlist
                </span>

                {/* Horology-inspired luxury counter badge (01, 02, etc.) */}
                {wishlist.length > 0 ? (
                  <span className="inline-flex items-center justify-center min-w-[22px] h-[20px] px-1.5 text-[9.5px] font-mono font-bold tracking-wider text-[#FBF9F5] bg-[#191816] group-hover:bg-[#A6865A] border border-[#C5A880]/40 rounded-full transition-all duration-300 shadow-xs">
                    {wishlist.length < 10 ? `0${wishlist.length}` : wishlist.length}
                  </span>
                ) : (
                  <span className="inline-flex items-center justify-center w-[18px] h-[18px] text-[9px] font-mono text-[#968E85] bg-[#F4EFEB] rounded-full group-hover:text-[#191816] transition-colors">
                    0
                  </span>
                )}
              </motion.button>

              {/* Mobile menu toggle button */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-1.5 text-[#191816] hover:text-[#A6865A] cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </nav>
      </div>

      {/* 4. MOBILE NAVIGATION DRAWER */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-[#FBF9F5] border-b border-[#E6DFD5] px-6 py-6 space-y-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          
          {/* Furniture Categories Quick Select */}
          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#A6865A] font-semibold block">
              Browse Furniture By Category
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs tracking-wider uppercase font-medium">
              {FURNITURE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`text-left p-2.5 border transition-all cursor-pointer ${
                    selectedCategory === cat.id && (currentView === 'category-view' || currentView === 'collection')
                      ? 'bg-[#191816] text-[#FBF9F5] border-[#191816]'
                      : 'bg-white text-[#2C2926] border-[#E6DFD5] hover:border-[#A6865A]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Primary Brand Pages */}
          <div className="grid grid-cols-1 gap-2.5 text-[13px] tracking-[0.16em] uppercase font-medium text-[#191816] border-t border-[#E6DFD5] pt-4">
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                navigateTo('category-view');
              }}
              className="text-left py-2 border-b border-[#E6DFD5] flex items-center justify-between"
            >
              <span>Full Collection</span>
              <ChevronRight className="w-4 h-4 text-[#736B63]" />
            </button>
            <button
              onClick={() => navigateTo('bespoke')}
              className="text-left py-2 border-b border-[#E6DFD5] flex items-center justify-between"
            >
              <span>Bespoke Customization</span>
              <ChevronRight className="w-4 h-4 text-[#736B63]" />
            </button>
            <button
              onClick={() => navigateTo('crafted-in-india')}
              className="text-left py-2 border-b border-[#E6DFD5] flex items-center justify-between"
            >
              <span>Crafted in India</span>
              <ChevronRight className="w-4 h-4 text-[#736B63]" />
            </button>
            <button
              onClick={() => navigateTo('projects')}
              className="text-left py-2 border-b border-[#E6DFD5] flex items-center justify-between"
            >
              <span>Architectural Projects</span>
              <ChevronRight className="w-4 h-4 text-[#736B63]" />
            </button>
            <button
              onClick={() => navigateTo('journal')}
              className="text-left py-2 border-b border-[#E6DFD5] flex items-center justify-between"
            >
              <span>Design Journal</span>
              <ChevronRight className="w-4 h-4 text-[#736B63]" />
            </button>
            <button
              onClick={() => navigateTo('architects')}
              className="text-left py-2 border-b border-[#E6DFD5] flex items-center justify-between"
            >
              <span>For Architects & Trade</span>
              <ChevronRight className="w-4 h-4 text-[#736B63]" />
            </button>
          </div>

          {/* Curated Wishlist Quick Trigger */}
          <div>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsWishlistDrawerOpen(true);
              }}
              className="w-full flex items-center justify-between p-3.5 bg-white border border-[#D1C7BB] hover:border-[#A6865A] text-xs uppercase tracking-wider font-semibold text-[#191816] transition-colors cursor-pointer"
            >
              <span className="flex items-center space-x-2">
                <Heart className={`w-4 h-4 ${wishlist.length > 0 ? 'fill-[#A6865A] text-[#A6865A]' : 'text-[#736B63]'}`} />
                <span>Curated Wishlist</span>
              </span>
              <span className="font-mono text-[11px] text-[#A6865A] bg-[#F4EFEB] px-2.5 py-0.5 rounded-full font-bold">
                {wishlist.length} {wishlist.length === 1 ? 'Piece' : 'Pieces'}
              </span>
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => navigateTo('bespoke')}
              className="w-full bg-[#191816] text-[#FBF9F5] py-3.5 text-center text-[11px] tracking-[0.2em] uppercase font-medium"
            >
              Schedule Bespoke Consultation
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
