/**
 * House Of Form — Design Journal View
 * Architectural essays, material science, and craftsmanship chronicles.
 */

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { JOURNAL_ARTICLES } from '../data/journalData';
import { JournalArticle } from '../types';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  Share2,
  Check,
  Tag,
  Quote,
  Layers,
  Sparkles,
} from 'lucide-react';
import { MotionFadeIn } from './MotionFadeIn';

export const JournalView: React.FC = () => {
  const { setCurrentView, setSelectedProductId, setIsReservationModalOpen } = useStore();

  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = [
    'ALL',
    'Design Philosophy',
    'Craftsmanship',
    'Material Science',
    'Interior Architecture',
    'Industry Perspectives',
  ];

  const filteredArticles = JOURNAL_ARTICLES.filter((art) => {
    if (selectedCategory === 'ALL') return true;
    return art.category === selectedCategory;
  });

  const featuredArticle = JOURNAL_ARTICLES[0];

  const handleShare = (art: JournalArticle) => {
    navigator.clipboard.writeText(`${window.location.origin}#journal/${art.slug}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // If an article is being read, render full editorial reader
  if (activeArticle) {
    return (
      <div className="bg-[#FBF9F5] text-[#191816] min-h-screen pb-24">
        {/* Article Masthead */}
        <div className="bg-[#191816] text-[#FBF9F5] pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#2C2926]">
          <div className="max-w-4xl mx-auto space-y-6">
            <button
              onClick={() => setActiveArticle(null)}
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#C5A880] hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back To Design Journal</span>
            </button>

            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#C5A880] bg-[#2C2926] px-2.5 py-1 border border-[#3E3A36]">
                {activeArticle.category}
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl uppercase tracking-wider font-light text-[#FBF9F5] leading-tight">
                {activeArticle.title}
              </h1>
              <p className="font-serif italic text-base sm:text-xl text-[#D1C7BB]">
                {activeArticle.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#3E3A36] text-xs text-[#968E85] font-mono">
              <div className="flex items-center space-x-4">
                <span>By {activeArticle.author.name} ({activeArticle.author.role})</span>
                <span>·</span>
                <span>{activeArticle.date}</span>
                <span>·</span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{activeArticle.readTime}</span>
                </span>
              </div>

              <button
                onClick={() => handleShare(activeArticle)}
                className="flex items-center space-x-1 text-[#C5A880] hover:text-white cursor-pointer"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Link Copied' : 'Share Article'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="aspect-16/9 bg-[#191816] shadow-xl overflow-hidden border border-[#D1C7BB]">
            <img
              src={activeArticle.heroImage}
              alt={activeArticle.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Body Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
          {/* Excerpt Lead */}
          <p className="font-serif text-lg sm:text-xl text-[#191816] leading-relaxed border-b border-[#E6DFD5] pb-8 font-light">
            {activeArticle.excerpt}
          </p>

          {/* Render Sections */}
          {activeArticle.content.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              {sec.sectionTitle && (
                <h2 className="font-serif text-xl sm:text-2xl uppercase tracking-wider text-[#191816] font-semibold pt-4">
                  {sec.sectionTitle}
                </h2>
              )}

              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-[#4A453F] leading-relaxed">
                  {p}
                </p>
              ))}

              {sec.pullQuote && (
                <div className="bg-[#F4EFEB] p-6 border-l-3 border-[#A6865A] my-6 space-y-2">
                  <Quote className="w-6 h-6 text-[#A6865A]" />
                  <p className="font-serif italic text-base sm:text-lg text-[#191816]">
                    "{sec.pullQuote}"
                  </p>
                </div>
              )}

              {sec.image && (
                <div className="my-6 space-y-2">
                  <div className="aspect-16/9 overflow-hidden border border-[#D1C7BB]">
                    <img src={sec.image} alt={sec.caption || 'Article illustration'} className="w-full h-full object-cover" />
                  </div>
                  {sec.caption && (
                    <p className="text-[11px] font-mono text-[#736B63] italic text-center">
                      {sec.caption}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Article Footer: Tags & Related Products */}
          <div className="border-t border-[#E6DFD5] pt-8 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase text-[#736B63]">Tags:</span>
              {activeArticle.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white border border-[#D1C7BB] px-2.5 py-1 text-[11px] text-[#4A453F] font-mono"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Related Action Box */}
            <div className="bg-[#191816] text-[#FBF9F5] p-6 sm:p-8 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A880]">
                Experience This In Your Home
              </span>
              <h3 className="font-serif text-xl uppercase font-semibold text-[#FBF9F5]">
                Order The Material Atelier Box
              </h3>
              <p className="text-xs text-[#968E85] max-w-xl">
                Experience the tactile fabrics, natural European oaks, and Italian bouclés discussed in this article directly in your residence.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => setIsReservationModalOpen(true)}
                  className="bg-[#C5A880] text-[#191816] px-5 py-2.5 text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors cursor-pointer"
                >
                  Reserve Atelier Box (₹1,299)
                </button>
                <button
                  onClick={() => setCurrentView('category-view')}
                  className="border border-[#736B63] text-[#FBF9F5] px-5 py-2.5 text-xs uppercase tracking-widest font-semibold hover:border-white transition-colors cursor-pointer"
                >
                  View Permanent Collection
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }

  // Journal Index View
  return (
    <div className="bg-[#FBF9F5] text-[#191816] min-h-screen pb-24">
      {/* Editorial Hero Header */}
      <div className="bg-[#191816] text-[#FBF9F5] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#2C2926]">
        <MotionFadeIn distance={24} duration={0.8} className="max-w-5xl mx-auto space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] font-semibold">
              The House Of Form Journal
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl uppercase tracking-wider font-light leading-tight">
            Design Philosophy &<br />
            <span className="text-[#C5A880] font-normal">Living Room Architecture.</span>
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#D1C7BB] max-w-3xl">
            Essays on spatial geometry, material science, and the generational renaissance of Indian manufacturing.
          </p>
        </MotionFadeIn>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        
        {/* Categories Bar */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar border-b border-[#E6DFD5] pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs tracking-wider uppercase font-medium transition-all cursor-pointer whitespace-nowrap border ${
                selectedCategory === cat
                  ? 'bg-[#191816] text-[#FBF9F5] border-[#191816]'
                  : 'bg-white text-[#4A453F] border-[#D1C7BB] hover:border-[#191816]'
              }`}
            >
              {cat === 'ALL' ? 'All Journal Entries' : cat}
            </button>
          ))}
        </div>

        {/* Featured Spotlight Article (Shown when "ALL" or its category is active) */}
        {(selectedCategory === 'ALL' || selectedCategory === featuredArticle.category) && (
          <div
            onClick={() => setActiveArticle(featuredArticle)}
            className="bg-white border border-[#D1C7BB] hover:border-[#191816] transition-all grid grid-cols-1 lg:grid-cols-12 cursor-pointer group shadow-xs overflow-hidden"
          >
            <div className="lg:col-span-7 aspect-16/10 lg:aspect-auto bg-[#191816] overflow-hidden">
              <img
                src={featuredArticle.heroImage}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
            </div>
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs font-mono text-[#A6865A]">
                  <span className="uppercase font-bold tracking-wider">{featuredArticle.category}</span>
                  <span>·</span>
                  <span>Featured Editorial</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl uppercase font-semibold text-[#191816] group-hover:text-[#A6865A] transition-colors leading-tight">
                  {featuredArticle.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#736B63] italic">
                  {featuredArticle.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#4A453F] line-clamp-3 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E6DFD5] flex items-center justify-between text-xs font-mono text-[#736B63]">
                <span>By {featuredArticle.author.name}</span>
                <span className="flex items-center space-x-1 text-[#191816] font-semibold group-hover:text-[#A6865A]">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="bg-white border border-[#D1C7BB] group hover:border-[#191816] transition-all flex flex-col justify-between cursor-pointer shadow-xs overflow-hidden"
            >
              <div className="aspect-16/10 bg-[#191816] overflow-hidden">
                <img
                  src={article.heroImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#A6865A] uppercase">
                    <span>{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-lg uppercase font-semibold text-[#191816] group-hover:text-[#A6865A] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#4A453F] line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6DFD5] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#736B63]">{article.date}</span>
                  <span className="text-[#191816] font-semibold group-hover:text-[#A6865A] flex items-center space-x-1">
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
