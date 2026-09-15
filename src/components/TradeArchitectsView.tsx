/**
 * House Of Form — Trade & Architects Partnership Portal
 * 3D/BIM asset downloads, trade registration, millimeter specification support.
 */

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { TRADE_CAD_MODELS, TRADE_BENEFITS } from '../data/tradeData';
import {
  Building,
  Download,
  CheckCircle2,
  Box,
  FileCode,
  ShieldCheck,
  Sparkles,
  PhoneCall,
  Mail,
  ArrowRight,
  Layers,
  Ruler,
  Check,
  ExternalLink,
} from 'lucide-react';
import { MotionFadeIn } from './MotionFadeIn';

export const TradeArchitectsView: React.FC = () => {
  const { setCurrentView, setIsReservationModalOpen } = useStore();

  // Registration Form State
  const [firmName, setFirmName] = useState('');
  const [principalName, setPrincipalName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Delhi NCR');
  const [gstin, setGstin] = useState('');
  const [projectTypology, setProjectTypology] = useState('Luxury Private Penthouse');
  const [timeline, setTimeline] = useState('Immediate (30 Days)');
  const [requestAtelierBox, setRequestAtelierBox] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [downloadingModelId, setDownloadingModelId] = useState<string | null>(null);
  const [downloadedModels, setDownloadedModels] = useState<string[]>([]);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setRegistrationSuccess(true);
    }, 800);
  };

  const handleDownloadCad = (id: string, name: string) => {
    setDownloadingModelId(id);

    // Simulate instant CAD generation & download
    setTimeout(() => {
      setDownloadingModelId(null);
      if (!downloadedModels.includes(id)) {
        setDownloadedModels((prev) => [...prev, id]);
      }

      // Generate text manifest for the architect as a mock CAD bundle
      const cadManifest = `HOUSE OF FORM — 3D/BIM CAD ASSET BUNDLE\nProduct: ${name}\nFormats: .OBJ, .FBX, .SKP (SketchUp), .RFA (Revit BIM), .DWG\nCoordinate System: Millimeter True-Scale\nRender Engine: 4K PBR Ready (V-Ray, Corona, Lumion, Blender)\nLicense: House Of Form Trade Specification License 2026`;
      const blob = new Blob([cadManifest], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${name.replace(/\s+/g, '_')}_CAD_Package.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 1000);
  };

  return (
    <div className="bg-[#FBF9F5] text-[#191816] min-h-screen pb-24">
      {/* Editorial Hero Header */}
      <div className="bg-[#191816] text-[#FBF9F5] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#2C2926]">
        <MotionFadeIn distance={24} duration={0.8} className="max-w-5xl mx-auto space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] font-semibold">
              Trade & Architect Partnership Program
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl uppercase tracking-wider font-light leading-tight">
            Designed For Professionals Who<br />
            <span className="text-[#C5A880] font-normal">Define Luxury Spaces.</span>
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#D1C7BB] max-w-3xl">
            Direct workshop collaboration for architects, interior designers, and real estate developers across India's Tier 1 metropolitan enclaves.
          </p>
        </MotionFadeIn>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* 6 CORE TRADE BENEFITS */}
        <section className="space-y-8">
          <div className="border-b border-[#E6DFD5] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6865A]">
                The Trade Advantage
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl uppercase tracking-wider text-[#191816] mt-1">
                The Four Pillars of Trade Collaboration
              </h2>
            </div>
            <span className="text-xs font-mono text-[#736B63]">
              Active across Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRADE_BENEFITS.map((b) => (
              <div
                key={b.id}
                className="bg-white border border-[#D1C7BB] p-6 space-y-3 hover:border-[#191816] transition-all shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#A6865A] uppercase tracking-wider bg-[#F4EFEB] px-2 py-0.5 border border-[#D1C7BB]">
                    {b.badge}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#A6865A]" />
                </div>
                <h3 className="font-serif text-lg font-semibold uppercase text-[#191816]">
                  {b.title}
                </h3>
                <p className="text-xs text-[#736B63] leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3D BIM & CAD DOWNLOAD ASSET REPOSITORY */}
        <section className="bg-white border border-[#D1C7BB] p-6 sm:p-10 space-y-8 shadow-xs">
          <div className="border-b border-[#E6DFD5] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono text-[#A6865A] uppercase tracking-wider block">
                Resource Suite 02 · 3D Asset Repository
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-wider text-[#191816] mt-1">
                Download 3D CAD & BIM Models
              </h2>
              <p className="text-xs sm:text-sm text-[#736B63] mt-1 max-w-xl">
                True-to-scale, quad-optimized 3D models with pre-configured 4K PBR materials for SketchUp, Revit, 3ds Max, Rhino, and AutoCAD.
              </p>
            </div>
            <span className="text-xs font-mono text-[#137333] bg-[#E6F4EA] px-3 py-1 border border-[#CEEAD6] font-semibold">
              ✓ Open Access For Design Practices
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRADE_CAD_MODELS.map((cad) => {
              const isDownloaded = downloadedModels.includes(cad.id);
              const isDownloading = downloadingModelId === cad.id;

              return (
                <div
                  key={cad.id}
                  className="bg-[#FBF9F5] border border-[#D1C7BB] p-5 flex flex-col justify-between space-y-4 hover:border-[#191816] transition-all"
                >
                  <div className="space-y-3">
                    <div className="aspect-16/10 bg-[#191816] overflow-hidden relative">
                      <img src={cad.thumbnail} alt={cad.productName} className="w-full h-full object-cover" />
                      <div className="absolute bottom-2 right-2 bg-black/80 text-[10px] font-mono text-white px-2 py-0.5">
                        {cad.fileSize}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-[#736B63] block">{cad.sku}</span>
                      <h3 className="font-serif text-base font-semibold uppercase text-[#191816]">
                        {cad.productName}
                      </h3>
                      <p className="text-xs text-[#736B63] mt-1">{cad.description}</p>
                    </div>

                    <div className="space-y-1 pt-1">
                      <span className="text-[10px] font-mono uppercase text-[#736B63] block">Included Formats:</span>
                      <div className="flex flex-wrap gap-1">
                        {cad.formats.map((f, fIdx) => (
                          <span
                            key={fIdx}
                            className="bg-white border border-[#D1C7BB] text-[10px] font-mono px-1.5 py-0.5 text-[#191816]"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDownloadCad(cad.id, cad.productName)}
                    disabled={isDownloading}
                    className={`w-full py-2.5 px-4 text-xs font-mono uppercase tracking-wider font-semibold flex items-center justify-center space-x-2 transition-all cursor-pointer border ${
                      isDownloaded
                        ? 'bg-[#E6F4EA] border-[#CEEAD6] text-[#137333]'
                        : 'bg-[#191816] border-[#191816] text-[#FBF9F5] hover:bg-[#A6865A] hover:border-[#A6865A]'
                    }`}
                  >
                    {isDownloading ? (
                      <span className="animate-pulse">Packaging 3D Bundle...</span>
                    ) : isDownloaded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Package Downloaded</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Download 3D CAD Bundle</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* TRADE PARTNER REGISTRATION FORM */}
        <section className="bg-white border border-[#D1C7BB] p-6 sm:p-10 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Program Description */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-[#A6865A] uppercase tracking-wider block">
                  Studio Accreditation
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl uppercase tracking-wider text-[#191816]">
                  Register Your Practice
                </h2>
                <p className="text-xs sm:text-sm text-[#736B63] leading-relaxed">
                  Join hundreds of premier architectural studios across Delhi NCR, Mumbai, and Bengaluru. Receive your accredited Trade Partner ID, direct wholesale tariff sheet, and complimentary Material Atelier box.
                </p>
              </div>

              <div className="space-y-3 bg-[#FBF9F5] p-5 border border-[#E6DFD5] text-xs">
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-[#A6865A] shrink-0 mt-0.5" />
                  <span>Trade concession pricing applied to initial quote</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-[#A6865A] shrink-0 mt-0.5" />
                  <span>Complimentary swatch box delivered to your studio within 48 hours</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-[#A6865A] shrink-0 mt-0.5" />
                  <span>Millimeter bespoke CAD tailoring with no prototype penalties</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-[#A6865A] shrink-0 mt-0.5" />
                  <span>White-glove in-room installation across all 8 Tier 1 cities</span>
                </div>
              </div>

              <div className="space-y-1 text-xs font-mono text-[#736B63]">
                <p>Architect Trade Hotline: <span className="text-[#191816] font-bold">+91 98100 00000</span></p>
                <p>Studio Inquiries: <span className="text-[#191816] font-bold">trade@houseofform.in</span></p>
              </div>
            </div>

            {/* Right: Registration Form */}
            <div className="lg:col-span-7 bg-[#FBF9F5] p-6 sm:p-8 border border-[#E6DFD5]">
              {registrationSuccess ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 bg-[#E6F4EA] text-[#137333] rounded-full flex items-center justify-center mx-auto border border-[#CEEAD6]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl uppercase font-semibold text-[#191816]">
                    Practice Accredited
                  </h3>
                  <p className="text-xs text-[#736B63] max-w-md mx-auto">
                    Thank you, {principalName || 'Architect'}. Your practice <strong className="text-[#191816]">{firmName}</strong> has been registered. Your Dedicated Atelier Trade Liaison will contact you via WhatsApp shortly with your Trade Pricing Schedule.
                  </p>
                  <div className="inline-block bg-white border border-[#D1C7BB] px-4 py-2 font-mono text-xs text-[#191816]">
                    Trade Partner ID: <strong>HOF-TRADE-7092</strong>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => setRegistrationSuccess(false)}
                      className="text-xs text-[#A6865A] underline hover:text-[#191816] cursor-pointer"
                    >
                      Register Another Practice / Project
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#191816] mb-1">
                        Architecture / Design Firm Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={firmName}
                        onChange={(e) => setFirmName(e.target.value)}
                        placeholder="e.g. Studio Lotus / Morphogenesis"
                        className="w-full bg-white border border-[#D1C7BB] px-3.5 py-2.5 text-xs text-[#191816] focus:border-[#191816] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#191816] mb-1">
                        Principal / Lead Designer Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={principalName}
                        onChange={(e) => setPrincipalName(e.target.value)}
                        placeholder="e.g. Ar. Rajesh Sharma"
                        className="w-full bg-white border border-[#D1C7BB] px-3.5 py-2.5 text-xs text-[#191816] focus:border-[#191816] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#191816] mb-1">
                        Professional Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rajesh@studiolotus.in"
                        className="w-full bg-white border border-[#D1C7BB] px-3.5 py-2.5 text-xs text-[#191816] focus:border-[#191816] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#191816] mb-1">
                        Direct Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98100 00000"
                        className="w-full bg-white border border-[#D1C7BB] px-3.5 py-2.5 text-xs text-[#191816] focus:border-[#191816] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#191816] mb-1">
                        Studio City *
                      </label>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-white border border-[#D1C7BB] px-3.5 py-2.5 text-xs text-[#191816] focus:border-[#191816] focus:outline-hidden"
                      >
                        <option value="Delhi NCR">Delhi NCR (Delhi, Gurugram, Noida)</option>
                        <option value="Mumbai">Mumbai & MMR</option>
                        <option value="Bengaluru">Bengaluru</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Pune">Pune</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Other">Other City</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#191816] mb-1">
                        GSTIN / Tax ID (Optional)
                      </label>
                      <input
                        type="text"
                        value={gstin}
                        onChange={(e) => setGstin(e.target.value)}
                        placeholder="07AAAAA0000A1Z5"
                        className="w-full bg-white border border-[#D1C7BB] px-3.5 py-2.5 text-xs text-[#191816] focus:border-[#191816] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#191816] mb-1">
                        Current Project Typology
                      </label>
                      <select
                        value={projectTypology}
                        onChange={(e) => setProjectTypology(e.target.value)}
                        className="w-full bg-white border border-[#D1C7BB] px-3.5 py-2.5 text-xs text-[#191816] focus:border-[#191816] focus:outline-hidden"
                      >
                        <option value="Luxury Private Penthouse">Luxury Private Penthouse</option>
                        <option value="Contemporary Villa / Bungalow">Contemporary Villa / Bungalow</option>
                        <option value="Modernist Duplex Apartment">Modernist Duplex Apartment</option>
                        <option value="Boutique Hospitality / Executive Suite">Boutique Hospitality / Executive Suite</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#191816] mb-1">
                        Project Execution Timeline
                      </label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full bg-white border border-[#D1C7BB] px-3.5 py-2.5 text-xs text-[#191816] focus:border-[#191816] focus:outline-hidden"
                      >
                        <option value="Immediate (30 Days)">Immediate (30 Days)</option>
                        <option value="1 to 3 Months">1 to 3 Months</option>
                        <option value="3 to 6 Months">3 to 6 Months</option>
                        <option value="Design Planning Phase">Design Planning Phase</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="flex items-center space-x-2.5 text-xs text-[#191816] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={requestAtelierBox}
                        onChange={(e) => setRequestAtelierBox(e.target.checked)}
                        className="w-4 h-4 accent-[#191816] cursor-pointer"
                      />
                      <span className="font-medium">
                        Dispatch a complimentary physical Material Atelier Box to our studio address.
                      </span>
                    </label>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#191816] text-[#FBF9F5] py-3 text-xs uppercase tracking-widest font-semibold hover:bg-[#A6865A] transition-colors cursor-pointer"
                    >
                      {isSubmitting ? 'Accrediting Practice...' : 'Register For Trade Partnership'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
