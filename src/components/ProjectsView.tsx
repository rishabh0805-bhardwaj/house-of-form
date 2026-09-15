/**
 * House Of Form — Architectural Projects Portfolio View
 * Showcasing bespoke furniture installations across India's Tier 1 cities.
 */

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { ARCHITECTURAL_PROJECTS } from '../data/projectsData';
import { ArchitecturalProject } from '../types';
import {
  Building2,
  MapPin,
  Calendar,
  Layers,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Quote,
  CheckCircle2,
  Ruler,
  Maximize2,
  X,
  PhoneCall,
} from 'lucide-react';
import { MotionFadeIn } from './MotionFadeIn';
import { ConsultationModal } from './ConsultationModal';

export const ProjectsView: React.FC = () => {
  const { setCurrentView, setSelectedProductId, setIsReservationModalOpen } = useStore();

  const [selectedCity, setSelectedCity] = useState<string>('ALL');
  const [selectedTypology, setSelectedTypology] = useState<string>('ALL');
  const [activeProjectModal, setActiveProjectModal] = useState<ArchitecturalProject | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [activeModalImageIdx, setActiveModalImageIdx] = useState(0);

  const cities = ['ALL', 'Gurugram', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Ahmedabad', 'Kolkata'];
  const typologies = ['ALL', 'Penthouse', 'Luxury Villa', 'Modernist Duplex'];

  const filteredProjects = ARCHITECTURAL_PROJECTS.filter((p) => {
    const matchCity = selectedCity === 'ALL' || p.city === selectedCity || (selectedCity === 'Gurugram' && p.city.includes('Gurugram'));
    const matchType = selectedTypology === 'ALL' || p.typology === selectedTypology;
    return matchCity && matchType;
  });

  const handleOpenProject = (project: ArchitecturalProject) => {
    setActiveProjectModal(project);
    setActiveModalImageIdx(0);
  };

  return (
    <div className="bg-[#FBF9F5] text-[#191816] min-h-screen pb-24">
      {/* Editorial Hero Header */}
      <div className="bg-[#191816] text-[#FBF9F5] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#2C2926]">
        <MotionFadeIn distance={24} duration={0.8} className="max-w-5xl mx-auto space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] font-semibold">
              Architectural Commissions & Portfolios
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl uppercase tracking-wider font-light leading-tight">
            Furniture Conceived For<br />
            <span className="text-[#C5A880] font-normal">Exceptional Architecture.</span>
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#D1C7BB] max-w-3xl">
            A curated index of bespoke residences, private penthouses, and modernist pavilions across India’s Tier 1 metropolitan enclaves.
          </p>
        </MotionFadeIn>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Filters Bar: Cities and Typologies */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#E6DFD5] pb-6">
          {/* City Filter Pills */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#736B63] block">
              Filter by Metropolitan Region:
            </span>
            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-3.5 py-1.5 text-xs tracking-wider uppercase font-medium transition-all cursor-pointer border ${
                    selectedCity === city
                      ? 'bg-[#191816] text-[#FBF9F5] border-[#191816]'
                      : 'bg-white text-[#4A453F] border-[#D1C7BB] hover:border-[#191816]'
                  }`}
                >
                  {city === 'ALL' ? 'All Metros' : city}
                </button>
              ))}
            </div>
          </div>

          {/* Typology Filter */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#736B63] block">
              Filter by Typology:
            </span>
            <div className="flex flex-wrap gap-2">
              {typologies.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTypology(t)}
                  className={`px-3 py-1.5 text-xs tracking-wider uppercase font-medium transition-all cursor-pointer border ${
                    selectedTypology === t
                      ? 'bg-[#191816] text-[#FBF9F5] border-[#191816]'
                      : 'bg-white text-[#4A453F] border-[#D1C7BB] hover:border-[#191816]'
                  }`}
                >
                  {t === 'ALL' ? 'All Spaces' : t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-[#D1C7BB] group hover:border-[#191816] transition-all flex flex-col justify-between overflow-hidden shadow-xs"
            >
              {/* Image Container with Hover zoom */}
              <div
                onClick={() => handleOpenProject(project)}
                className="aspect-16/11 overflow-hidden bg-[#191816] relative cursor-pointer"
              >
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-[#191816]/85 backdrop-blur-xs text-[#FBF9F5] px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider">
                  {project.city} · {project.typology}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 text-[#191816] p-1.5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#736B63] font-mono">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3
                    onClick={() => handleOpenProject(project)}
                    className="font-serif text-xl uppercase font-semibold text-[#191816] group-hover:text-[#A6865A] transition-colors cursor-pointer leading-tight"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#736B63] italic">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-[#4A453F] line-clamp-3 leading-relaxed pt-1">
                    {project.narrative}
                  </p>
                </div>

                {/* Footer spec tag & action */}
                <div className="pt-4 border-t border-[#E6DFD5] space-y-3">
                  <div className="text-[11px] text-[#191816] font-medium">
                    <span className="text-[#736B63] font-mono text-[10px] uppercase block">Commissioned:</span>
                    <span className="line-clamp-1">{project.furnitureCommissioned[0]}</span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => handleOpenProject(project)}
                      className="text-xs uppercase tracking-wider font-semibold text-[#191816] group-hover:text-[#A6865A] flex items-center space-x-1 cursor-pointer"
                    >
                      <span>View Dossier</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <span className="text-[10px] font-mono text-[#A6865A] bg-[#F4EFEB] px-2 py-0.5 border border-[#D1C7BB]">
                      {project.specifications.leadTimeDelivered}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ARCHITECT PARTNERSHIP CALLOUT */}
        <section className="bg-[#23201D] text-[#FBF9F5] p-8 sm:p-12 border border-[#3E3A36] space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-[10px] font-mono text-[#C5A880] uppercase tracking-wider">
              Trade & Architect Commissions
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl uppercase tracking-wider text-[#FBF9F5]">
              Are You Specifying For An Upcoming Residential Project?
            </h2>
            <p className="text-xs sm:text-sm text-[#D1C7BB] leading-relaxed">
              We collaborate directly with leading architectural practices across Delhi NCR, Mumbai, Bengaluru, Hyderabad, and Kolkata. Receive 3D CAD/Revit BIM models, customized millimeter specifications, and complimentary Material Atelier swatch libraries for your practice.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => setCurrentView('architects')}
              className="bg-[#C5A880] text-[#191816] px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors cursor-pointer"
            >
              Explore Trade & Architect Suite
            </button>
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="border border-[#736B63] text-[#FBF9F5] hover:border-white px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
            >
              Consult On Architectural Blueprint
            </button>
          </div>
        </section>

      </div>

      {/* PROJECT DOSSIER MODAL */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[#FBF9F5] border border-[#D1C7BB] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            {/* Close Button */}
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-[#191816] text-white flex items-center justify-center hover:bg-[#A6865A] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Carousel / Viewer */}
            <div className="aspect-16/9 bg-[#191816] relative overflow-hidden">
              <img
                src={activeProjectModal.galleryImages[activeModalImageIdx] || activeProjectModal.heroImage}
                alt={activeProjectModal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 flex space-x-2">
                {activeProjectModal.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveModalImageIdx(idx)}
                    className={`w-12 h-8 border overflow-hidden cursor-pointer ${
                      activeModalImageIdx === idx ? 'border-[#C5A880] ring-2 ring-[#C5A880]' : 'border-white/60 opacity-60'
                    }`}
                  >
                    <img src={img} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="border-b border-[#E6DFD5] pb-4">
                <div className="flex items-center space-x-2 text-xs font-mono text-[#A6865A]">
                  <span>{activeProjectModal.city}</span>
                  <span>·</span>
                  <span>{activeProjectModal.typology}</span>
                  <span>·</span>
                  <span>Completed {activeProjectModal.year}</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl uppercase font-semibold text-[#191816] mt-1">
                  {activeProjectModal.title}
                </h2>
                <p className="text-sm italic text-[#736B63]">{activeProjectModal.subtitle}</p>
              </div>

              {/* Narrative & Quote */}
              <div className="space-y-4 text-xs sm:text-sm text-[#4A453F] leading-relaxed">
                <p>{activeProjectModal.narrative}</p>

                {/* Architect Quote Box */}
                <div className="bg-[#F4EFEB] p-5 border-l-2 border-[#A6865A] space-y-2">
                  <Quote className="w-5 h-5 text-[#A6865A]" />
                  <p className="font-serif italic text-sm text-[#191816]">
                    "{activeProjectModal.architectQuote.quote}"
                  </p>
                  <span className="text-[11px] font-mono text-[#736B63] block">
                    — {activeProjectModal.architectQuote.author}, {activeProjectModal.architectQuote.role}
                  </span>
                </div>
              </div>

              {/* Technical Specifications Grid */}
              <div className="bg-white p-5 border border-[#D1C7BB] space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-[#191816]">
                  Project Technical Specifications:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[#736B63] block text-[10px] uppercase">Architect / Design Practice:</span>
                    <span className="font-medium text-[#191816]">{activeProjectModal.architect}</span>
                  </div>
                  <div>
                    <span className="text-[#736B63] block text-[10px] uppercase">Carpet Area:</span>
                    <span className="font-mono text-[#191816]">{activeProjectModal.specifications.carpetArea}</span>
                  </div>
                  <div>
                    <span className="text-[#736B63] block text-[10px] uppercase">Curated Palette:</span>
                    <span className="text-[#191816]">{activeProjectModal.specifications.curatedPalette}</span>
                  </div>
                  <div>
                    <span className="text-[#736B63] block text-[10px] uppercase">Custom Sizing Modifications:</span>
                    <span className="text-[#191816]">{activeProjectModal.specifications.customModifications}</span>
                  </div>
                </div>
              </div>

              {/* Furniture Commissioned */}
              <div className="space-y-2">
                <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-[#191816]">
                  Pieces Commissioned For This Space:
                </h4>
                <div className="space-y-1.5 text-xs">
                  {activeProjectModal.furnitureCommissioned.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-[#191816]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A6865A]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#E6DFD5]">
                <button
                  onClick={() => {
                    setSelectedProductId(activeProjectModal.featuredProductId);
                    setCurrentView('product-detail');
                    setActiveProjectModal(null);
                  }}
                  className="bg-[#191816] text-[#FBF9F5] px-5 py-2.5 text-xs uppercase tracking-wider font-semibold hover:bg-[#A6865A] transition-colors cursor-pointer"
                >
                  Explore {activeProjectModal.featuredProduct} Collection →
                </button>

                <button
                  onClick={() => {
                    setIsReservationModalOpen(true);
                    setActiveProjectModal(null);
                  }}
                  className="bg-[#C5A880] text-[#191816] px-5 py-2.5 text-xs uppercase tracking-wider font-semibold hover:bg-[#191816] hover:text-white transition-colors cursor-pointer"
                >
                  Order Swatches For Your Project (₹1,299)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Consultation Modal */}
      {isConsultationOpen && (
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
          productName="Architectural Project Specification"
        />
      )}
    </div>
  );
};
