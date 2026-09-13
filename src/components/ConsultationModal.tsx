/**
 * House Of Form — Design Consultation Booking Modal
 * Private studio visits in Gurugram, In-home consultations, and Virtual video atelier.
 */

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { X, Calendar, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultProduct = 'The Velora',
}) => {
  const { bookConsultation, activeReservationId } = useStore();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('In-Studio Experience (Gurugram)');
  const [preferredDate, setPreferredDate] = useState('2026-09-20');
  const [preferredTime, setPreferredTime] = useState('11:30 AM');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    bookConsultation({
      reservationId: activeReservationId || undefined,
      customerName: name,
      customerPhone: phone,
      customerEmail: email,
      type,
      preferredDate,
      preferredTime,
    });
    setIsSubmitted(true);
  };

  const handleDone = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#191816]/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#FBF9F5] w-full max-w-lg border border-[#E6DFD5] shadow-2xl relative">
        <div className="bg-[#191816] text-[#FBF9F5] px-6 py-4 flex items-center justify-between">
          <span className="text-[11px] tracking-[0.2em] uppercase font-medium">
            House Of Form — Design Consultation
          </span>
          <button onClick={onClose} className="text-[#D1C7BB] hover:text-white p-1 cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-[#E6DFD5] pb-4">
                <h3 className="font-serif text-2xl text-[#191816] tracking-[0.06em] uppercase">
                  Speak to a Senior Design Consultant
                </h3>
                <p className="text-xs text-[#736B63] mt-1">
                  Discuss architectural room layout, custom dimensions, upholstery tailoring, and material pairings for {defaultProduct}.
                </p>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#2C2926] mb-1">
                  Consultation Format
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full bg-white border border-[#D1C7BB] p-2.5 text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                >
                  <option value="In-Studio Experience (Gurugram)">In-Studio Private Salon (Gurugram Atelier)</option>
                  <option value="Private In-Home Visit">Private In-Home Architectural Visit (Delhi NCR / Mumbai / Bengaluru)</option>
                  <option value="Virtual Video Atelier">High-Definition Virtual Video Atelier</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#2C2926] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-[#D1C7BB] p-2.5 text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#2C2926] mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-[#D1C7BB] p-2.5 text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#2C2926] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-[#D1C7BB] p-2.5 text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#2C2926] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-white border border-[#D1C7BB] p-2 text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#2C2926] mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-white border border-[#D1C7BB] p-2 text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                  >
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="01:30 PM">01:30 PM</option>
                    <option value="03:30 PM">03:30 PM</option>
                    <option value="05:30 PM">05:30 PM</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#191816] hover:bg-[#2C2926] text-[#FBF9F5] py-3 px-4 text-xs tracking-[0.2em] uppercase font-medium flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <span>Confirm Consultation Request</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#A6865A] mx-auto" />
              <h3 className="font-serif text-2xl text-[#191816] tracking-wider uppercase">
                Consultation Requested
              </h3>
              <p className="text-xs text-[#736B63] max-w-sm mx-auto leading-relaxed">
                Our Senior Design Director will connect with you on {phone} within 24 hours to confirm your {type} session for {preferredDate} at {preferredTime}.
              </p>
              <button
                onClick={handleDone}
                className="mt-4 bg-[#191816] text-[#FBF9F5] px-6 py-2.5 text-xs tracking-wider uppercase cursor-pointer"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
