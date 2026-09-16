/**
 * Central State Store for HOUSE OF FORM
 * LocalStorage persistence with reactivity, analytics tracking,
 * and reservation-to-CRM pipeline synchronization.
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Product,
  Material,
  Finish,
  MaterialAtelierKit,
  Reservation,
  Lead,
  SystemSettings,
  AnalyticsData,
  ProjectType,
  PurchaseTimeline,
  AtelierStatus,
  LeadStage,
  LeadTemperature,
} from '../types';
import {
  INITIAL_PRODUCTS,
  INITIAL_MATERIALS,
  INITIAL_FINISHES,
  VELORA_ATELIER,
  INITIAL_RESERVATIONS,
  INITIAL_LEADS,
  INITIAL_SETTINGS,
  INITIAL_ANALYTICS,
} from '../data/seedData';

interface ReservationSubmission {
  name: string;
  phone: string;
  email: string;
  city: string;
  projectType: ProjectType;
  purchaseTimeline: PurchaseTimeline;
  preferredMaterialStyle?: string;
  projectNotes?: string;
  productId: string;
  variantId: string;
}

interface StoreContextType {
  // Navigation & View State
  currentView: string;
  setCurrentView: (view: string) => void;
  adminSubView: string;
  setAdminSubView: (subView: string) => void;
  selectedProductId: string;
  setSelectedProductId: (id: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  isScrolled: boolean;
  setIsScrolled: (scrolled: boolean) => void;
  isReservationModalOpen: boolean;
  setIsReservationModalOpen: (open: boolean) => void;
  activeReservationId: string | null;
  setActiveReservationId: (id: string | null) => void;

  // Data
  products: Product[];
  materials: Material[];
  finishes: Finish[];
  veloraAtelier: MaterialAtelierKit;
  reservations: Reservation[];
  leads: Lead[];
  settings: SystemSettings;
  analytics: AnalyticsData;

  // Wishlist State
  wishlist: string[];
  isWishlistDrawerOpen: boolean;
  setIsWishlistDrawerOpen: (open: boolean) => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;

  // SEO & Metadata Discovery Suite
  isSeoDrawerOpen: boolean;
  setIsSeoDrawerOpen: (open: boolean) => void;

  // Actions
  createReservation: (submission: ReservationSubmission) => Promise<Reservation>;
  updateAtelierStatus: (reservationId: string, status: AtelierStatus) => void;
  toggleMaterialStatus: (
    reservationId: string,
    materialId: string,
    type: 'loved' | 'shortlisted' | 'rejected'
  ) => void;
  bookConsultation: (data: {
    reservationId?: string;
    customerName: string;
    customerPhone: string;
    customerEmail: string;
    type: string;
    preferredDate: string;
    preferredTime: string;
  }) => void;
  markOrderCompletedWithAdjustment: (reservationId: string) => void;
  updateSettings: (newSettings: SystemSettings) => void;
  updateLeadStage: (leadId: string, stage: LeadStage) => void;
  recordAnalyticsEvent: (event: keyof AnalyticsData['funnel']) => void;
  resetAllData: () => void;
  resetToSeedData: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const STORAGE_KEY_RESERVATIONS = 'hof_reservations_v1';
const STORAGE_KEY_LEADS = 'hof_leads_v1';
const STORAGE_KEY_SETTINGS = 'hof_settings_v1';
const STORAGE_KEY_ANALYTICS = 'hof_analytics_v1';
const STORAGE_KEY_WISHLIST = 'hof_wishlist_v1';

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<string>('home');
  const [adminSubView, setAdminSubView] = useState<string>('crm');
  const [selectedProductId, setSelectedProductId] = useState<string>('HOF-SF-VLR-001');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState<boolean>(false);
  const [activeReservationId, setActiveReservationId] = useState<string | null>('HOF-RES-2026-0042');

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled((prev) => {
        if (!prev && y > 85) return true;
        if (prev && y < 45) return false;
        return prev;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [materials] = useState<Material[]>(INITIAL_MATERIALS);
  const [finishes] = useState<Finish[]>(INITIAL_FINISHES);
  const [veloraAtelier] = useState<MaterialAtelierKit>(VELORA_ATELIER);

  // Persistent States
  const [reservations, setReservations] = useState<Reservation[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_RESERVATIONS);
      return saved ? JSON.parse(saved) : INITIAL_RESERVATIONS;
    } catch {
      return INITIAL_RESERVATIONS;
    }
  });

  const [leads, setLeads] = useState<Lead[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LEADS);
      return saved ? JSON.parse(saved) : INITIAL_LEADS;
    } catch {
      return INITIAL_LEADS;
    }
  });

  const [settings, setSettings] = useState<SystemSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SETTINGS);
      return saved ? JSON.parse(saved) : INITIAL_SETTINGS;
    } catch {
      return INITIAL_SETTINGS;
    }
  });

  const [analytics, setAnalytics] = useState<AnalyticsData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ANALYTICS);
      return saved ? JSON.parse(saved) : INITIAL_ANALYTICS;
    } catch {
      return INITIAL_ANALYTICS;
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_WISHLIST);
      return saved ? JSON.parse(saved) : ['HOF-SF-VLR-001'];
    } catch {
      return ['HOF-SF-VLR-001'];
    }
  });
  const [isWishlistDrawerOpen, setIsWishlistDrawerOpen] = useState<boolean>(false);
  const [isSeoDrawerOpen, setIsSeoDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_WISHLIST, JSON.stringify(wishlist));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, [wishlist]);

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        return prev.filter((id) => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string): boolean => {
    return wishlist.includes(productId);
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_RESERVATIONS, JSON.stringify(reservations));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, [reservations]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_LEADS, JSON.stringify(leads));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, [leads]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(settings));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, [settings]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_ANALYTICS, JSON.stringify(analytics));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, [analytics]);

  const recordAnalyticsEvent = (event: keyof AnalyticsData['funnel']) => {
    setAnalytics((prev) => ({
      ...prev,
      funnel: {
        ...prev.funnel,
        [event]: (prev.funnel[event] || 0) + 1,
      },
    }));
  };

  // Helper to compute lead score
  const calculateLeadScore = (
    hasRes: boolean,
    shortlistLen: number,
    hasConsult: boolean,
    timeline: PurchaseTimeline
  ): { score: number; temperature: LeadTemperature } => {
    let score = 0;
    if (hasRes) score += settings.leadScoring.reservationCompleted;
    if (shortlistLen > 0) score += settings.leadScoring.shortlistCreated;
    if (hasConsult) score += settings.leadScoring.consultationRequested;

    if (timeline === 'Immediately') score += settings.leadScoring.timelineImmediate;
    else if (timeline === 'Within 30 days') score += settings.leadScoring.timeline30Days;
    else if (timeline === '1–3 months') score += settings.leadScoring.timeline1To3Months;

    let temperature: LeadTemperature = 'NURTURE';
    if (score >= settings.hotScoreThreshold) temperature = 'HOT';
    else if (score >= settings.warmScoreThreshold) temperature = 'WARM';

    return { score, temperature };
  };

  const createReservation = async (sub: ReservationSubmission): Promise<Reservation> => {
    const product = products.find((p) => p.id === sub.productId) || products[0];
    const variant = product.variants.find((v) => v.id === sub.variantId) || product.variants[0];

    // Compute unique Reservation ID
    const count = reservations.length + 45;
    const resId = `HOF-RES-2026-00${count}`;
    const custId = `CUST-${Date.now().toString().slice(-4)}`;

    const now = new Date();
    const expiry = new Date();
    expiry.setDate(now.getDate() + settings.reservationValidityDays);

    const newRes: Reservation = {
      id: resId,
      customerId: custId,
      customerName: sub.name,
      customerPhone: sub.phone,
      customerEmail: sub.email,
      city: sub.city,
      projectType: sub.projectType,
      purchaseTimeline: sub.purchaseTimeline,
      productId: product.id,
      productName: product.name,
      variantId: variant.id,
      variantName: `${variant.name} (${variant.seatingCapacity})`,
      productPrice: variant.basePrice,
      reservationFeePaid: settings.reservationAmount,
      adjustableAmount: settings.reservationAmount,
      isAdjustedAgainstOrder: false,
      remainingPayableAfterAdjustment: variant.basePrice - settings.reservationAmount,
      atelierStatus: 'Payment Confirmed',
      reservationStatus: 'Active',
      reservationDate: now.toISOString(),
      expiryDate: expiry.toISOString(),
      shortlistedMaterialIds: [],
      lovedMaterialIds: [],
      rejectedMaterialIds: [],
      paymentRef: `pay_rzp_${Date.now().toString().slice(-8)}`,
    };

    // Calculate score
    const { score, temperature } = calculateLeadScore(
      true,
      0,
      false,
      sub.purchaseTimeline
    );

    const newLead: Lead = {
      id: `LEAD-${Date.now().toString().slice(-4)}`,
      customerId: custId,
      customerName: sub.name,
      customerPhone: sub.phone,
      customerEmail: sub.email,
      city: sub.city,
      projectType: sub.projectType,
      timeline: sub.purchaseTimeline,
      productId: product.id,
      productName: product.name,
      variantName: variant.name,
      stage: 'Design Reservation',
      temperature,
      score,
      reservationId: resId,
      hasCompletedReservation: true,
      shortlistCount: 0,
      hasBookedConsultation: false,
      estimatedBudget: variant.basePrice,
      lastActivityAt: now.toISOString(),
      notes: [
        `Paid ₹${settings.reservationAmount.toLocaleString('en-IN')} Design Reservation for ${product.name} — ${variant.name}.`,
        `100% adjustable credit created against ₹${variant.basePrice.toLocaleString('en-IN')}. Remaining: ₹${(variant.basePrice - settings.reservationAmount).toLocaleString('en-IN')}.`,
        sub.projectNotes ? `Client project notes: "${sub.projectNotes}"` : 'Client project notes: Standard inquiry',
      ],
    };

    setReservations((prev) => [newRes, ...prev]);
    setLeads((prev) => [newLead, ...prev]);
    setActiveReservationId(resId);

    // Update analytics
    setAnalytics((prev) => ({
      ...prev,
      funnel: {
        ...prev.funnel,
        reservationsCompleted: prev.funnel.reservationsCompleted + 1,
      },
      totalReservationRevenue: prev.totalReservationRevenue + settings.reservationAmount,
      pipelineValue: prev.pipelineValue + variant.basePrice,
    }));

    return newRes;
  };

  const updateAtelierStatus = (reservationId: string, status: AtelierStatus) => {
    setReservations((prev) =>
      prev.map((r) => {
        if (r.id === reservationId) {
          return {
            ...r,
            atelierStatus: status,
            dispatchTrackingNumber:
              status === 'Dispatched' && !r.dispatchTrackingNumber
                ? `BLUEDART-LUXE-${Math.floor(1000000 + Math.random() * 9000000)}`
                : r.dispatchTrackingNumber,
            courierName: status === 'Dispatched' ? settings.courierPartner : r.courierName,
          };
        }
        return r;
      })
    );

    // Update corresponding lead stage
    let leadStage: LeadStage = 'Atelier Curating';
    if (status === 'Dispatched') leadStage = 'Atelier Dispatched';
    if (status === 'Delivered') leadStage = 'Atelier Delivered';

    setLeads((prev) =>
      prev.map((l) => {
        if (l.reservationId === reservationId) {
          return {
            ...l,
            stage: leadStage,
            lastActivityAt: new Date().toISOString(),
            notes: [`Material Atelier status updated to ${status}.`, ...l.notes],
          };
        }
        return l;
      })
    );

    if (status === 'Delivered') {
      recordAnalyticsEvent('ateliersDelivered');
    }
  };

  const toggleMaterialStatus = (
    reservationId: string,
    materialId: string,
    type: 'loved' | 'shortlisted' | 'rejected'
  ) => {
    setReservations((prev) =>
      prev.map((r) => {
        if (r.id !== reservationId) return r;

        let loved = [...r.lovedMaterialIds];
        let shortlisted = [...r.shortlistedMaterialIds];
        let rejected = [...r.rejectedMaterialIds];

        // Remove from all first
        loved = loved.filter((id) => id !== materialId);
        shortlisted = shortlisted.filter((id) => id !== materialId);
        rejected = rejected.filter((id) => id !== materialId);

        if (type === 'loved') {
          loved.push(materialId);
          shortlisted.push(materialId); // loved also belongs to shortlist
        } else if (type === 'shortlisted') {
          shortlisted.push(materialId);
        } else if (type === 'rejected') {
          rejected.push(materialId);
        }

        return {
          ...r,
          lovedMaterialIds: loved,
          shortlistedMaterialIds: shortlisted,
          rejectedMaterialIds: rejected,
        };
      })
    );

    // Update Lead
    setLeads((prev) =>
      prev.map((l) => {
        if (l.reservationId === reservationId) {
          const currentShortlistCount = l.shortlistCount + 1;
          const { score, temperature } = calculateLeadScore(
            true,
            currentShortlistCount,
            l.hasBookedConsultation,
            l.timeline
          );

          return {
            ...l,
            shortlistCount: currentShortlistCount,
            stage: 'Materials Shortlisted',
            score,
            temperature,
            lastActivityAt: new Date().toISOString(),
            notes: [`Client interacted with swatch ${materialId} (marked as ${type}).`, ...l.notes],
          };
        }
        return l;
      })
    );

    recordAnalyticsEvent('materialsShortlisted');
  };

  const bookConsultation = (data: {
    reservationId?: string;
    customerName: string;
    customerPhone: string;
    customerEmail: string;
    type: string;
    preferredDate: string;
    preferredTime: string;
  }) => {
    setLeads((prev) =>
      prev.map((l) => {
        if (
          (data.reservationId && l.reservationId === data.reservationId) ||
          l.customerEmail.toLowerCase() === data.customerEmail.toLowerCase()
        ) {
          const { score, temperature } = calculateLeadScore(
            l.hasCompletedReservation,
            l.shortlistCount,
            true,
            l.timeline
          );
          return {
            ...l,
            stage: 'Design Consultation',
            hasBookedConsultation: true,
            score,
            temperature,
            lastActivityAt: new Date().toISOString(),
            notes: [
              `Booked ${data.type} for ${data.preferredDate} at ${data.preferredTime}.`,
              ...l.notes,
            ],
          };
        }
        return l;
      })
    );

    recordAnalyticsEvent('consultationsBooked');
  };

  const updateLeadStage = (leadId: string, stage: LeadStage) => {
    setLeads((prev) =>
      prev.map((l) => {
        if (l.id === leadId) {
          return {
            ...l,
            stage,
            lastActivityAt: new Date().toISOString(),
            notes: [`Lead stage updated to ${stage}.`, ...l.notes],
          };
        }
        return l;
      })
    );
  };

  const markOrderCompletedWithAdjustment = (reservationId: string) => {
    const orderId = `HOF-ORD-2026-00${Math.floor(10 + Math.random() * 89)}`;

    setReservations((prev) =>
      prev.map((r) => {
        if (r.id === reservationId) {
          return {
            ...r,
            isAdjustedAgainstOrder: true,
            orderId,
            reservationStatus: 'Converted',
          };
        }
        return r;
      })
    );

    setLeads((prev) =>
      prev.map((l) => {
        if (l.reservationId === reservationId) {
          return {
            ...l,
            stage: 'Order Confirmed',
            temperature: 'HOT',
            score: 100,
            lastActivityAt: new Date().toISOString(),
            notes: [
              `Order ${orderId} finalized! ₹${settings.reservationAmount} reservation adjusted against final bill.`,
              ...l.notes,
            ],
          };
        }
        return l;
      })
    );

    setAnalytics((prev) => ({
      ...prev,
      funnel: {
        ...prev.funnel,
        ordersCompleted: prev.funnel.ordersCompleted + 1,
      },
      totalAdjustedValue: prev.totalAdjustedValue + settings.reservationAmount,
    }));
  };

  const resetAllData = () => {
    localStorage.removeItem(STORAGE_KEY_RESERVATIONS);
    localStorage.removeItem(STORAGE_KEY_LEADS);
    localStorage.removeItem(STORAGE_KEY_SETTINGS);
    localStorage.removeItem(STORAGE_KEY_ANALYTICS);
    localStorage.removeItem(STORAGE_KEY_WISHLIST);
    setReservations(INITIAL_RESERVATIONS);
    setLeads(INITIAL_LEADS);
    setSettings(INITIAL_SETTINGS);
    setAnalytics(INITIAL_ANALYTICS);
    setWishlist(['HOF-SF-VLR-001']);
    setActiveReservationId('HOF-RES-2026-0042');
  };

  return (
    <StoreContext.Provider
      value={{
        currentView,
        setCurrentView,
        adminSubView,
        setAdminSubView,
        selectedProductId,
        setSelectedProductId,
        selectedCategory,
        setSelectedCategory,
        isScrolled,
        setIsScrolled,
        isReservationModalOpen,
        setIsReservationModalOpen,
        activeReservationId,
        setActiveReservationId,
        wishlist,
        isWishlistDrawerOpen,
        setIsWishlistDrawerOpen,
        toggleWishlist,
        isInWishlist,
        clearWishlist,
        isSeoDrawerOpen,
        setIsSeoDrawerOpen,
        products,
        materials,
        finishes,
        veloraAtelier,
        reservations,
        leads,
        settings,
        analytics,
        createReservation,
        updateAtelierStatus,
        toggleMaterialStatus,
        bookConsultation,
        markOrderCompletedWithAdjustment,
        updateSettings: setSettings,
        updateLeadStage,
        recordAnalyticsEvent,
        resetAllData,
        resetToSeedData: resetAllData,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = (): StoreContextType => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
