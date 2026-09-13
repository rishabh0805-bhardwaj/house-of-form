/**
 * House Of Form — Domain Types and Data Contracts
 * Luxury Furniture House, The Material Atelier, Design Reservations, CRM & Accounting
 */

export type ProjectType =
  | 'Residential'
  | 'Villa'
  | 'Apartment'
  | 'Penthouse'
  | 'Office'
  | 'Hospitality'
  | 'Other';

export type PurchaseTimeline =
  | 'Immediately'
  | 'Within 30 days'
  | '1–3 months'
  | '3–6 months'
  | 'Exploring';

export type LeadTemperature = 'HOT' | 'WARM' | 'NURTURE';

export type LeadStage =
  | 'New Lead'
  | 'Product Selected'
  | 'Design Reservation'
  | 'Atelier Curating'
  | 'Atelier Dispatched'
  | 'Atelier Delivered'
  | 'Materials Shortlisted'
  | 'Design Consultation'
  | 'Configuration Finalized'
  | 'Quote Sent'
  | 'Payment Pending'
  | 'Order Confirmed'
  | 'Production'
  | 'Quality Check'
  | 'Dispatch'
  | 'Installation'
  | 'Completed';

export type AtelierStatus =
  | 'Payment Confirmed'
  | 'Curating'
  | 'Quality Check'
  | 'Packed'
  | 'Dispatched'
  | 'Delivered';

export type ReservationStatus =
  | 'Active'
  | 'Expiring Soon'
  | 'Expired'
  | 'Converted'
  | 'Cancelled';

export type MaterialFamily =
  | 'NATURAL'
  | 'TEXTURED'
  | 'EARTH'
  | 'DEEP'
  | 'SIGNATURE'
  | 'PERFORMANCE';

export type FinishType = 'wood' | 'metal' | 'stone' | 'veneer';

export interface DimensionSpec {
  widthCm: number;
  depthCm: number;
  heightCm: number;
  seatHeightCm: number;
  seatDepthCm: number;
  armHeightCm?: number;
  widthIn: number;
  depthIn: number;
  heightIn: number;
  seatHeightIn: number;
  seatDepthIn: number;
  armHeightIn?: number;
}

export interface ProductVariant {
  id: string;
  sku: string;
  name: string; // e.g., "Velora Uno", "Velora Due", "Velora Tre", "Velora Grande"
  seatingCapacity: string; // "1 Seater", "2 Seater", "3 Seater", "4 Seater / Grande"
  dimensions: DimensionSpec;
  basePrice: number; // in INR
  description: string;
  isPopular?: boolean;
}

export interface Product {
  id: string;
  sku: string;
  name: string; // e.g. "The Velora"
  tagline: string; // "Bespoke Curved Lounge Sofa Collection"
  primaryCategory: string; // "Luxury Lounge Sofas"
  subcategory: string; // "Soft Contemporary / Curved Profile / Low Profile Lounge"
  startingPrice: number;
  attributes: {
    silhouette: string;
    back: string;
    arm: string;
    base: string;
    seat: string;
    designEra: string;
  };
  productStory: string;
  designPhilosophy: string;
  comfortStory: string;
  craftsmanshipNotes: string;
  materialsUsed: string[];
  images: {
    hero: string;
    front: string;
    threeQuarter: string;
    side: string;
    rear: string;
    detail: string;
    lifestyle: string;
    dimensionDiagram: string;
  };
  variants: ProductVariant[];
  compatibleMaterialIds: string[];
  compatibleFinishIds: string[];
  atelierId: string;
  careInfo: string[];
  deliveryInfo: string;
  customizationScope: string[];
  faqs: { question: string; answer: string }[];
}

export interface Material {
  id: string; // e.g. "HF-FB-014"
  name: string; // "Bouclé Ivory"
  family: MaterialFamily;
  type: 'fabric' | 'leather' | 'sheer';
  composition: string; // "48% Cotton, 32% Wool, 20% Acrylic"
  texture: string; // "Heavy Tactile Loop Weave"
  color: string; // "Warm Off-White / Ivory"
  colorHex: string;
  image: string;
  swatchImage: string;
  availability: string; // "In Stock - Atelier Reserve"
  care: string;
  performance: {
    martindaleCycles: number; // e.g. 45000
    pillingResistance: string; // "Grade 4-5"
    lightFastness: string; // "Grade 5"
    fireRetardant: string;
  };
  priceCategory: 'Signature' | 'Heritage' | 'Bespoke Reserve';
  leadTimeWeeks?: number;
  displayOrder: number;
  isActive: boolean;
}

export interface Finish {
  id: string; // e.g. "HF-WD-006", "HF-MT-003"
  name: string; // "Smoked Oak", "Brushed Brass"
  type: FinishType;
  description: string;
  colorHex: string;
  image: string;
  texture: string;
  care: string;
  isActive: boolean;
}

export interface PaletteSuggestion {
  id: string;
  title: string; // e.g. "Ivory + Walnut + Brushed Brass"
  description: string;
  fabricId: string;
  woodId?: string;
  metalId?: string;
  image: string;
}

export interface MaterialAtelierKit {
  id: string;
  productId: string;
  name: string; // "The Velora Material Atelier"
  tagline: string;
  sampleCountFabrics: number; // e.g. 14
  sampleCountWoods: number; // e.g. 4
  sampleCountMetals: number; // e.g. 3
  includedMaterialIds: string[];
  includedFinishIds: string[];
  paletteSuggestions: PaletteSuggestion[];
  boxSpecs: {
    dimensions: string; // "32 × 24 × 8 cm"
    construction: string; // "Rigid presentation box with magnetic opening and debossed seal"
    lining: string; // "Tactile Italian archival paper partitions"
  };
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  projectType: ProjectType;
  purchaseTimeline: PurchaseTimeline;
  preferredStyle?: string;
  projectNotes?: string;
  createdAt: string;
}

export interface Reservation {
  id: string; // e.g. "HOF-RES-2026-0042"
  customerId: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  city: string;
  projectType: ProjectType;
  purchaseTimeline: PurchaseTimeline;
  productId: string;
  productName: string;
  variantId: string;
  variantName: string;
  productPrice: number;
  reservationFeePaid: number; // ₹1,299 (configurable)
  adjustableAmount: number; // ₹1,299
  isAdjustedAgainstOrder: boolean;
  orderId?: string;
  remainingPayableAfterAdjustment: number;
  atelierStatus: AtelierStatus;
  reservationStatus: ReservationStatus;
  reservationDate: string;
  expiryDate: string; // e.g. 30 days from reservation
  dispatchTrackingNumber?: string;
  courierName?: string;
  shortlistedMaterialIds: string[];
  lovedMaterialIds: string[];
  rejectedMaterialIds: string[];
  consultationId?: string;
  paymentRef: string;
}

export interface Lead {
  id: string;
  customerId: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  city: string;
  projectType: ProjectType;
  timeline: PurchaseTimeline;
  productId: string;
  productName: string;
  variantName: string;
  stage: LeadStage;
  temperature: LeadTemperature;
  score: number;
  reservationId?: string;
  hasCompletedReservation: boolean;
  shortlistCount: number;
  hasBookedConsultation: boolean;
  estimatedBudget: number;
  lastActivityAt: string;
  notes: string[];
}

export interface LeadActivity {
  id: string;
  leadId: string;
  timestamp: string;
  action: string;
  details: string;
  scoreChange?: number;
}

export interface Consultation {
  id: string;
  reservationId?: string;
  leadId: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  type: 'In-Studio Experience (Gurugram)' | 'Private In-Home Visit' | 'Virtual Video Atelier';
  preferredDate: string;
  preferredTime: string;
  status: 'Requested' | 'Confirmed' | 'Completed' | 'Rescheduled';
  consultantAssigned?: string;
  notes?: string;
}

export interface Quote {
  id: string;
  reservationId: string;
  leadId: string;
  customerName: string;
  productName: string;
  variantName: string;
  selectedFabricId: string;
  selectedFinishId?: string;
  baseProductPrice: number;
  customizationCharge: number;
  subtotal: number;
  reservationCreditDeducted: number; // ₹1,299
  finalPayableAmount: number;
  issuedDate: string;
  validUntil: string;
  status: 'Draft' | 'Sent' | 'Approved' | 'Order Created';
}

export interface Order {
  id: string; // e.g. "HOF-ORD-2026-0012"
  reservationId: string;
  customerId: string;
  customerName: string;
  productName: string;
  variantName: string;
  dimensionsApproved: string;
  selectedFabricName: string;
  selectedFinishName: string;
  totalPrice: number;
  reservationAdjusted: number; // ₹1,299
  balancePaid: number;
  status: 'Confirmed' | 'In Production' | 'Quality Check' | 'Dispatched' | 'Installed';
  orderDate: string;
  estimatedDeliveryDate: string;
}

export interface SystemSettings {
  reservationAmount: number; // default 1299
  reservationValidityDays: number; // default 30
  leadScoring: {
    reservationCompleted: number; // +50
    shortlistCreated: number; // +30
    consultationRequested: number; // +40
    timelineImmediate: number; // +30
    timeline30Days: number; // +20
    timeline1To3Months: number; // +10
  };
  enableWhatsAppNotifications: boolean;
  courierPartner: string;
  hotScoreThreshold: number; // 70
  warmScoreThreshold: number; // 40
}

export interface AnalyticsData {
  funnel: {
    productViews: number;
    atelierInteractions: number;
    reservationsStarted: number;
    reservationsCompleted: number;
    ateliersDelivered: number;
    materialsShortlisted: number;
    consultationsBooked: number;
    quotesIssued: number;
    ordersCompleted: number;
  };
  totalReservationRevenue: number;
  totalAdjustedValue: number;
  pipelineValue: number;
}
