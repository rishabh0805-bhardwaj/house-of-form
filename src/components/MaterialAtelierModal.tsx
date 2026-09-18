/**
 * House Of Form — The Material Atelier Reservation Experience Modal & Drawer
 * Unlocks the physical Material Atelier through a ₹1,299 Design Reservation
 * 100% adjustable against the final purchase of the reserved piece.
 */

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { ProjectType, PurchaseTimeline } from '../types';
import {
  X,
  Box,
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  Layers,
  ArrowRight,
  Info,
  Calendar,
  Sparkles,
} from 'lucide-react';

export const MaterialAtelierModal: React.FC = () => {
  const {
    isReservationModalOpen,
    setIsReservationModalOpen,
    selectedProductId,
    products,
    settings,
    createReservation,
    setCurrentView,
    selectedLeather,
    selectedLeatherId,
    setSelectedLeatherId,
    canyonLeathers,
  } = useStore();

  const product = products.find((p) => p.id === selectedProductId) || products[0];

  const [selectedVariantId, setSelectedVariantId] = useState<string>(
    product.variants.find((v) => v.isPopular)?.id || product.variants[0].id
  );

  const selectedVariant =
    product.variants.find((v) => v.id === selectedVariantId) || product.variants[0];

  const [step, setStep] = useState<'details' | 'payment' | 'confirmed'>('details');

  // Customer form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Gurugram');
  const [projectType, setProjectType] = useState<ProjectType>('Penthouse');
  const [purchaseTimeline, setPurchaseTimeline] = useState<PurchaseTimeline>('Within 30 days');
  const [preferredMaterialStyle, setPreferredMaterialStyle] = useState('Bouclé Ivory & Natural Warm Tones');
  const [projectNotes, setProjectNotes] = useState('');

  // Payment mock state
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [upiId, setUpiId] = useState('client@okaxis');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [confirmedReservationId, setConfirmedReservationId] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isReservationModalOpen) return null;

  const reservationAmount = settings.reservationAmount; // default ₹1,299
  const remainingPayable = selectedVariant.basePrice - reservationAmount;

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) {
      setErrorMessage('Please provide your name, mobile number, and email address.');
      return;
    }
    setErrorMessage('');
    setStep('payment');
  };

  const handleExecutePayment = async () => {
    setIsProcessingPayment(true);
    setErrorMessage('');

    try {
      // Simulate Razorpay processing latency
      await new Promise((resolve) => setTimeout(resolve, 1400));

      const res = await createReservation({
        name,
        phone,
        email,
        city,
        projectType,
        purchaseTimeline,
        preferredMaterialStyle,
        projectNotes,
        productId: product.id,
        variantId: selectedVariant.id,
        leatherId: selectedLeather.id,
        leatherName: selectedLeather.name,
        leatherHex: selectedLeather.hex,
        leatherSwatch: selectedLeather.swatchImage,
      });

      setConfirmedReservationId(res.id);
      setIsProcessingPayment(false);
      setStep('confirmed');
    } catch (err) {
      setIsProcessingPayment(false);
      setErrorMessage('Payment verification failed. Please try again.');
    }
  };

  const handleClose = () => {
    setIsReservationModalOpen(false);
    setStep('details');
  };

  const navigateToSwatches = () => {
    handleClose();
    setCurrentView('digital-swatches');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#191816]/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div className="bg-[#FBF9F5] w-full max-w-2xl border border-[#E6DFD5] shadow-2xl relative overflow-hidden transition-all my-8">
        
        {/* Modal Header Bar */}
        <div className="bg-[#191816] text-[#FBF9F5] px-6 py-4 flex items-center justify-between border-b border-[#2C2926]">
          <div className="flex items-center space-x-3">
            <Sparkles className="w-4 h-4 text-[#C5A880]" />
            <span className="text-[12px] tracking-[0.25em] uppercase font-medium">
              House Of Form — Production Reservation & Checkout
            </span>
          </div>
          <button
            id="close-atelier-modal-btn"
            onClick={handleClose}
            className="text-[#D1C7BB] hover:text-white p-1 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[82vh] overflow-y-auto">
          
          {step === 'details' && (
            <div>
              {/* Luxury Intro Copy */}
              <div className="mb-6 pb-6 border-b border-[#E6DFD5]">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#191816] tracking-[0.08em] uppercase font-light">
                  Reserve {product.name}
                </h3>
                <p className="font-serif italic text-base text-[#736B63] mt-2">
                  "A considered piece deserves a considered choice."
                </p>
                <p className="text-xs sm:text-[13px] text-[#4A453F] mt-3 leading-relaxed">
                  Lock your bespoke piece in our New Delhi fabrication schedule. Your ₹{reservationAmount.toLocaleString('en-IN')} reservation is 100% credited against your final purchase.
                </p>

                {/* Hesitation / Second Thought Swatch Kit Introduction */}
                <div className="mt-4 bg-[#F4EFEB] border border-[#D1C7BB] p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#191816]">
                        ₹{reservationAmount.toLocaleString('en-IN')} Production Reservation
                      </p>
                      <p className="text-xs text-[#736B63] mt-0.5">
                        <span className="text-[#A6865A] font-semibold">100% credited</span> towards your final furniture invoice.
                      </p>
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-[#191816] text-[#C5A880] px-2.5 py-1 font-medium">
                      Complimentary Swatch Kit
                    </span>
                  </div>

                  {/* Second thought reassurance */}
                  <div className="bg-white/80 p-3 border border-[#E6DFD5] text-xs text-[#4A453F] leading-relaxed flex items-start gap-2.5">
                    <Box className="w-4 h-4 text-[#A6865A] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#191816] block text-[11px] uppercase tracking-wider">Having second thoughts on fabric or finishes?</strong>
                      <span>You don't need to finalize your upholstery today. By paying the ₹{reservationAmount.toLocaleString('en-IN')} reservation fee, you avail the full <strong>Material Atelier Swatch Kit free of charge</strong>, dispatched in 48 hours to inspect under your home's natural light before fabrication begins.</span>
                    </div>
                  </div>

                  {/* Mathematical Balance Preview */}
                  <div className="pt-2 border-t border-[#D1C7BB]/60 grid grid-cols-3 gap-2 text-center text-xs">
                    <div>
                      <span className="text-[10px] uppercase text-[#736B63] block">Catalogue Total</span>
                      <span className="font-medium text-[#191816]">₹{selectedVariant.basePrice.toLocaleString('en-IN')}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-[#736B63] block">Reservation (Credited)</span>
                      <span className="font-medium text-[#A6865A]">−₹{reservationAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-[#736B63] block">Balance Upon Dispatch</span>
                      <span className="font-semibold text-[#191816]">₹{remainingPayable.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Body */}
              <form onSubmit={handleProceedToPayment} className="space-y-5">
                
                {/* Product & Variant Selector */}
                <div>
                  <label className="block text-[11px] tracking-[0.16em] uppercase font-medium text-[#2C2926] mb-2">
                    1. Confirm Product & Configuration
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {product.variants.map((v) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setSelectedVariantId(v.id)}
                        className={`text-left p-3 border transition-all cursor-pointer ${
                          selectedVariantId === v.id
                            ? 'border-[#191816] bg-[#191816] text-[#FBF9F5]'
                            : 'border-[#D1C7BB] bg-white text-[#2C2926] hover:border-[#191816]'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-semibold uppercase tracking-wider">{v.name}</span>
                          <span className={`text-[11px] ${selectedVariantId === v.id ? 'text-[#C5A880]' : 'text-[#736B63]'}`}>
                            ₹{v.basePrice.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <p className={`text-[10px] mt-1 ${selectedVariantId === v.id ? 'text-[#D1C7BB]' : 'text-[#736B63]'}`}>
                          {v.seatingCapacity} • {v.dimensions.widthCm} W × {v.dimensions.depthCm} D cm
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selected Leather Upholstery Section */}
                <div className="pt-2">
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-[11px] tracking-[0.16em] uppercase font-medium text-[#2C2926]">
                      2. Selected Leather Upholstery
                    </label>
                    <span className="text-[10px] text-[#A6865A] uppercase font-semibold">The Canyon Atelier (18 Swatches)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white border border-[#D1C7BB]">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-[#191816] shrink-0 shadow-xs">
                      <img src={selectedLeather.swatchImage} alt={selectedLeather.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs font-serif font-bold uppercase tracking-wide text-[#191816] truncate">
                          {selectedLeather.name}
                        </h4>
                        <span className="text-[9px] px-1.5 py-0.5 bg-[#191816] text-[#C5A880] uppercase tracking-wider font-mono">
                          {selectedLeather.sku}
                        </span>
                      </div>
                      <p className="text-[10px] text-[#736B63] truncate mt-0.5">
                        {selectedLeather.tagline} · Full-Grain Semi-Aniline
                      </p>
                    </div>
                    <select
                      aria-label="Change leather swatch"
                      value={selectedLeatherId}
                      onChange={(e) => setSelectedLeatherId(e.target.value)}
                      className="text-xs border border-[#D1C7BB] bg-[#FBF9F5] px-2 py-1.5 uppercase font-medium text-[#191816] cursor-pointer"
                    >
                      {canyonLeathers.map((l) => (
                        <option key={l.id} value={l.id}>
                          {l.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Client Contact Details */}
                <div className="space-y-3 pt-2">
                  <label className="block text-[11px] tracking-[0.16em] uppercase font-medium text-[#2C2926]">
                    3. Client & Delivery Details
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Full Name *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white border border-[#D1C7BB] px-3.5 py-2.5 text-xs text-[#191816] placeholder-[#968E85] focus:outline-none focus:border-[#191816]"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Mobile Number (+91) *"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white border border-[#D1C7BB] px-3.5 py-2.5 text-xs text-[#191816] placeholder-[#968E85] focus:outline-none focus:border-[#191816]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email Address *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white border border-[#D1C7BB] px-3.5 py-2.5 text-xs text-[#191816] placeholder-[#968E85] focus:outline-none focus:border-[#191816]"
                      />
                    </div>
                    <div>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-white border border-[#D1C7BB] px-3.5 py-2.5 text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                      >
                        <option value="Gurugram">Gurugram (NCR)</option>
                        <option value="New Delhi">New Delhi</option>
                        <option value="Noida">Noida / Greater Noida</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bengaluru">Bengaluru</option>
                        <option value="Pune">Pune</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Other">Other Metro / Tier 1 City</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Project Context (Intent Qualification) */}
                <div className="space-y-3 pt-2">
                  <label className="block text-[11px] tracking-[0.16em] uppercase font-medium text-[#2C2926]">
                    4. Project Specification & Timeline
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <span className="text-[10px] text-[#736B63] uppercase block mb-1">Project Type</span>
                      <select
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value as ProjectType)}
                        className="w-full bg-white border border-[#D1C7BB] px-3.5 py-2 text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                      >
                        <option value="Penthouse">Penthouse</option>
                        <option value="Villa">Villa / Farmhouse</option>
                        <option value="Apartment">Luxury Apartment</option>
                        <option value="Residential">Bespoke Residence</option>
                        <option value="Office">Executive Office</option>
                        <option value="Hospitality">Boutique Hospitality</option>
                        <option value="Other">Other Interior Project</option>
                      </select>
                    </div>

                    <div>
                      <span className="text-[10px] text-[#736B63] uppercase block mb-1">Expected Timeline</span>
                      <select
                        value={purchaseTimeline}
                        onChange={(e) => setPurchaseTimeline(e.target.value as PurchaseTimeline)}
                        className="w-full bg-white border border-[#D1C7BB] px-3.5 py-2 text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                      >
                        <option value="Immediately">Immediately (Ready to specify)</option>
                        <option value="Within 30 days">Within 30 days</option>
                        <option value="1–3 months">1–3 months</option>
                        <option value="3–6 months">3–6 months</option>
                        <option value="Exploring">Early Architectural Planning</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Preferred Material Palette (e.g., Bouclé Ivory, Smoked Oak, Brushed Brass)"
                      value={preferredMaterialStyle}
                      onChange={(e) => setPreferredMaterialStyle(e.target.value)}
                      className="w-full bg-white border border-[#D1C7BB] px-3.5 py-2 text-xs text-[#191816] placeholder-[#968E85] focus:outline-none focus:border-[#191816]"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={2}
                      placeholder="Optional notes for our curation atelier (architectural drawings, room dimensions, pet/kid friendly requirements)..."
                      value={projectNotes}
                      onChange={(e) => setProjectNotes(e.target.value)}
                      className="w-full bg-white border border-[#D1C7BB] px-3.5 py-2 text-xs text-[#191816] placeholder-[#968E85] focus:outline-none focus:border-[#191816]"
                    />
                  </div>
                </div>

                {errorMessage && (
                  <p className="text-xs text-red-600 bg-red-50 p-2.5 border border-red-200">
                    {errorMessage}
                  </p>
                )}

                {/* Terms Transparency Note */}
                <div className="text-[11px] text-[#736B63] leading-relaxed bg-[#F4EFEB] p-3 border border-[#E6DFD5] space-y-1">
                  <p className="font-semibold text-[#191816]">House Of Form Reservation Commitment:</p>
                  <p>• The ₹{reservationAmount.toLocaleString('en-IN')} Design Reservation is 100% adjustable against the final purchase of {product.name}.</p>
                  <p>• The physical Material Atelier is complimentary with this reservation. Due to custom curation, physical materials and white-glove logistics, the physical kit is non-returnable.</p>
                  <p>• Manufacturing begins only upon final dimension sign-off, material approval, and commercial order confirmation.</p>
                </div>

                {/* Submit CTA */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    id="modal-proceed-to-payment-btn"
                    className="flex-1 bg-[#191816] hover:bg-[#2C2926] text-[#FBF9F5] py-3.5 px-6 text-xs tracking-[0.2em] uppercase font-medium flex items-center justify-center space-x-2 transition-all cursor-pointer"
                  >
                    <span>Proceed to Secure Reservation (₹{reservationAmount.toLocaleString('en-IN')})</span>
                    <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                  </button>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="border border-[#D1C7BB] text-[#736B63] hover:text-[#191816] py-3.5 px-5 text-xs tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 'payment' && (
            <div className="space-y-6">
              <div className="border-b border-[#E6DFD5] pb-4">
                <h3 className="font-serif text-2xl text-[#191816] tracking-[0.08em] uppercase font-light">
                  Secure Design Reservation Payment
                </h3>
                <p className="text-xs text-[#736B63] mt-1">
                  House Of Form Payment Gateway Gateway Abstraction (Razorpay Luxury Node)
                </p>
              </div>

              {/* Order Ledger */}
              <div className="bg-[#F4EFEB] p-4 border border-[#D1C7BB] space-y-2 text-xs">
                <div className="flex justify-between font-medium text-[#191816]">
                  <span>Reserved Product</span>
                  <span>{product.name} — {selectedVariant.name}</span>
                </div>
                <div className="flex justify-between items-center text-[#736B63]">
                  <span>Selected Leather</span>
                  <span className="flex items-center gap-1.5 font-medium text-[#191816]">
                    <span className="w-3.5 h-3.5 rounded-full overflow-hidden border border-[#191816] inline-block shadow-2xs">
                      <img src={selectedLeather.swatchImage} alt={selectedLeather.name} className="w-full h-full object-cover" />
                    </span>
                    <span>{selectedLeather.name} ({selectedLeather.sku})</span>
                  </span>
                </div>
                <div className="flex justify-between text-[#736B63]">
                  <span>Client</span>
                  <span>{name} ({city})</span>
                </div>
                <div className="flex justify-between text-[#736B63]">
                  <span>Material Atelier Delivery</span>
                  <span className="text-[#A6865A] font-medium">Complimentary (Valued at ₹4,500)</span>
                </div>
                <div className="border-t border-[#D1C7BB] pt-2 flex justify-between font-semibold text-[#191816] text-sm">
                  <span>Design Reservation Fee (Incl. Taxes)</span>
                  <span>₹{reservationAmount.toLocaleString('en-IN')}</span>
                </div>
                <p className="text-[10px] text-[#A6865A] italic">
                  * 100% of this ₹{reservationAmount.toLocaleString('en-IN')} will be deducted from your final product invoice of ₹{selectedVariant.basePrice.toLocaleString('en-IN')}.
                </p>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-3">
                <label className="block text-[11px] tracking-[0.16em] uppercase font-medium text-[#2C2926]">
                  Select Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`py-3 px-2 text-center border text-xs tracking-wider uppercase font-medium cursor-pointer ${
                      paymentMethod === 'upi'
                        ? 'border-[#191816] bg-[#191816] text-white'
                        : 'border-[#D1C7BB] bg-white text-[#2C2926]'
                    }`}
                  >
                    UPI / QR
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-3 px-2 text-center border text-xs tracking-wider uppercase font-medium cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-[#191816] bg-[#191816] text-white'
                        : 'border-[#D1C7BB] bg-white text-[#2C2926]'
                    }`}
                  >
                    Credit / Debit Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('netbanking')}
                    className={`py-3 px-2 text-center border text-xs tracking-wider uppercase font-medium cursor-pointer ${
                      paymentMethod === 'netbanking'
                        ? 'border-[#191816] bg-[#191816] text-white'
                        : 'border-[#D1C7BB] bg-white text-[#2C2926]'
                    }`}
                  >
                    Net Banking
                  </button>
                </div>

                {paymentMethod === 'upi' && (
                  <div className="p-4 bg-white border border-[#D1C7BB] space-y-2">
                    <span className="text-[10px] text-[#736B63] uppercase block">Virtual Payment Address (UPI)</span>
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="username@okaxis"
                      className="w-full border border-[#D1C7BB] px-3 py-2 text-xs focus:outline-none focus:border-[#191816]"
                    />
                    <p className="text-[10px] text-[#736B63]">Supports Google Pay, PhonePe, Paytm, CRED & BHIM.</p>
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <div className="p-4 bg-white border border-[#D1C7BB] space-y-3">
                    <input
                      type="text"
                      placeholder="Card Number (4111 •••• •••• ••••)"
                      defaultValue="4111 2233 4455 9012"
                      className="w-full border border-[#D1C7BB] px-3 py-2 text-xs focus:outline-none focus:border-[#191816]"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="MM / YY"
                        defaultValue="08 / 29"
                        className="w-full border border-[#D1C7BB] px-3 py-2 text-xs focus:outline-none focus:border-[#191816]"
                      />
                      <input
                        type="password"
                        placeholder="CVV"
                        defaultValue="892"
                        className="w-full border border-[#D1C7BB] px-3 py-2 text-xs focus:outline-none focus:border-[#191816]"
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === 'netbanking' && (
                  <div className="p-4 bg-white border border-[#D1C7BB]">
                    <select className="w-full border border-[#D1C7BB] px-3 py-2 text-xs focus:outline-none focus:border-[#191816]">
                      <option>HDFC Bank Imperia / Corporate</option>
                      <option>ICICI Wealth Banking</option>
                      <option>Kotak Mahindra Privy League</option>
                      <option>Axis Burgundy Private</option>
                      <option>State Bank of India</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  id="confirm-payment-btn"
                  onClick={handleExecutePayment}
                  disabled={isProcessingPayment}
                  className="flex-1 bg-[#191816] hover:bg-[#2C2926] text-[#FBF9F5] py-3.5 px-6 text-xs tracking-[0.2em] uppercase font-medium flex items-center justify-center space-x-2 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isProcessingPayment ? (
                    <span>Authorizing ₹{reservationAmount.toLocaleString('en-IN')}...</span>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                      <span>Complete ₹{reservationAmount.toLocaleString('en-IN')} Reservation</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setStep('details')}
                  disabled={isProcessingPayment}
                  className="border border-[#D1C7BB] text-[#736B63] py-3.5 px-5 text-xs tracking-wider uppercase cursor-pointer"
                >
                  Back
                </button>
              </div>
            </div>
          )}

          {step === 'confirmed' && (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 bg-[#F4EFEB] rounded-full flex items-center justify-center mx-auto border border-[#C5A880]">
                <CheckCircle2 className="w-8 h-8 text-[#A6865A]" />
              </div>

              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#A6865A] font-semibold block">
                  Design Reservation Confirmed
                </span>
                <h3 className="font-serif text-3xl text-[#191816] tracking-[0.08em] uppercase font-light mt-1">
                  Your Material Atelier Is Being Curated
                </h3>
                <p className="text-xs text-[#736B63] mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#191816]">{name}</strong>. Your ₹{reservationAmount.toLocaleString('en-IN')} reservation has been logged and credited against your future purchase of <strong className="text-[#191816]">{product.name} ({selectedVariant.name})</strong>.
                </p>
              </div>

              {/* Reservation Dossier Box */}
              <div className="bg-[#F4EFEB] border border-[#D1C7BB] p-4 max-w-lg mx-auto text-left text-xs space-y-2.5">
                <div className="flex justify-between border-b border-[#D1C7BB]/70 pb-2">
                  <span className="text-[#736B63] uppercase text-[10px] tracking-wider">Reservation Reference</span>
                  <span className="font-mono font-bold text-[#191816]">{confirmedReservationId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#736B63]">Piece Reserved</span>
                  <span className="font-medium text-[#191816]">{product.name} ({selectedVariant.name})</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#736B63]">Selected Leather</span>
                  <span className="font-medium text-[#191816] flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full overflow-hidden border border-[#191816] inline-block shadow-2xs">
                      <img src={selectedLeather.swatchImage} alt={selectedLeather.name} className="w-full h-full object-cover" />
                    </span>
                    <span>{selectedLeather.name} ({selectedLeather.sku})</span>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#736B63]">Reservation Amount Paid</span>
                  <span className="font-medium text-[#191816]">₹{reservationAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#736B63]">Adjustment Credit Issued</span>
                  <span className="font-medium text-[#A6865A]">100% (₹{reservationAmount.toLocaleString('en-IN')})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#736B63]">Remaining Balance Upon Order</span>
                  <span className="font-semibold text-[#191816]">₹{remainingPayable.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between border-t border-[#D1C7BB]/70 pt-2">
                  <span className="text-[#736B63]">Physical Kit Status</span>
                  <span className="inline-flex items-center gap-1.5 text-[#A6865A] font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#A6865A] animate-pulse" />
                    Curating in Gurugram Studio
                  </span>
                </div>
              </div>

              {/* Next Steps Guide */}
              <div className="text-left text-xs text-[#4A453F] space-y-2 max-w-lg mx-auto bg-white p-4 border border-[#E6DFD5]">
                <p className="font-semibold text-[#191816] text-[11px] tracking-wider uppercase">What happens next:</p>
                <p>1. Our material specialists will hand-assemble your 14 fabric swatches, timber samples, and metal finish plates into the rigid magnetic Atelier library.</p>
                <p>2. Dispatched via White-Glove priority courier within 48 hours to {city}.</p>
                <p>3. While your physical kit travels, you can immediately begin exploring the swatches in your Digital Material Passport.</p>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <button
                  id="confirmed-view-digital-swatches-btn"
                  onClick={navigateToSwatches}
                  className="flex-1 bg-[#191816] hover:bg-[#2C2926] text-[#FBF9F5] py-3.5 px-5 text-xs tracking-[0.18em] uppercase font-medium flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <Layers className="w-4 h-4 text-[#C5A880]" />
                  <span>Explore Swatches Digitally</span>
                </button>
                <button
                  onClick={handleClose}
                  className="border border-[#D1C7BB] text-[#736B63] hover:text-[#191816] py-3.5 px-5 text-xs tracking-wider uppercase transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
