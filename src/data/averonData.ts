/**
 * HOUSE OF FORM — PRODUCT 11: THE AVERON
 * Bespoke Architectural Leather Sofa
 * Reference Code: EW26 · Master SKU: HOF-SF-AVE-011
 * European Design Sensibility · Bespoke Craftsmanship · Made in India
 */

import { Product, MaterialAtelierKit, ProductMasterSheet } from '../types';

export const AVERON_ATELIER: MaterialAtelierKit = {
  id: 'ATELIER-AVE-011',
  productId: 'HOF-SF-AVE-011',
  name: 'The Averon Material Atelier',
  tagline: 'Curated Italian semi-aniline leathers, solid American walnut plinths & brushed brass vertical trims',
  sampleCountFabrics: 8,
  sampleCountWoods: 4,
  sampleCountMetals: 3,
  includedMaterialIds: [
    'HF-LT-001', // Italian Cognac Semi-Aniline Leather
    'HF-LT-002', // Saddle Tan Full-Grain Pull-Up
    'HF-LT-003', // Espresso Dark Roast Aniline
    'HF-LT-004', // Nero Architectural Matte Leather
    'HF-FB-014', // Bouclé Avorio (Secondary accent pairing)
    'HF-FB-021', // Sabbia Calda Linen
  ],
  includedFinishIds: [
    'HF-WD-002', // Noce Canaletto
    'HF-WD-006', // Smoked Oak / Smoked Walnut
    'HF-MT-003', // Ottone Spazzolato (Brushed Brass)
    'HF-MT-004', // Blackened Bronze
  ],
  paletteSuggestions: [
    {
      id: 'PAL-AVE-01',
      title: 'Signature: Warm Cognac Leather + Smoked Walnut Plinth + Brushed Brass Accents',
      description: 'The master specification: rich semi-aniline cognac leather anchored by a deep smoked walnut perimeter base and vertical champagne brushed brass arm insets.',
      fabricId: 'HF-LT-001',
      woodId: 'HF-WD-006',
      metalId: 'HF-MT-003',
      image: '/images/averon/averon_hero.png',
    },
    {
      id: 'PAL-AVE-02',
      title: 'Monolithic: Saddle Tan Leather + Natural Canaletto Walnut + Satin Bronze',
      description: 'Lighter organic warmth with prominent natural timber graining and subdued antique bronze arm accents.',
      fabricId: 'HF-LT-002',
      woodId: 'HF-WD-002',
      metalId: 'HF-MT-004',
      image: '/images/averon/averon_lifestyle.png',
    },
    {
      id: 'PAL-AVE-03',
      title: 'Nocturne: Espresso Black Leather + Ebonized Walnut + Champagne Brass',
      description: 'High architectural drama for modern gallery residences, pairing deep espresso leather with blackened timber and gleaming vertical brass accents.',
      fabricId: 'HF-LT-003',
      woodId: 'HF-WD-006',
      metalId: 'HF-MT-003',
      image: '/images/averon/averon_detail.png',
    },
  ],
  boxSpecs: {
    dimensions: '36 W × 26 D × 8 H cm',
    construction: 'Handcrafted rigid dossier case wrapped in textured slate paper with magnetic closure and embossed House Of Form brass seal',
    lining: 'Precision velvet compartments holding large-format 15×15 cm leather swatch tiles, solid walnut plinth blocks, and tactile brushed brass metal insets',
  },
};

export const AVERON_MASTER_SHEET: ProductMasterSheet = {
  productCode: 'EW26',
  category: 'Contemporary Sofas',
  subcategory: 'Tailored Contemporary / Architectural Luxury',
  designLanguage: 'European Proportions · Architectural Plinth · Indian Bespoke Mastery',
  furnitureType: 'Bespoke Architectural Leather Sofa',
  configurationsSummary: 'Grande 3.5 Seater (260cm) · Tres 3 Seater (235cm) · Salon 2.5 Seater (205cm) · Monumental 4 Seater (290cm) · 100% Bespoke Millimeter Commissions',
  customisationStatus: '100% Bespoke Sizing, Leather Selection & Plinth Finish Available',
  craftingStatus: 'Crafted in New Delhi NCR, India · Made to Order in 6–8 Weeks',
  theDesign: {
    headline: 'THE AVERON — FURNITURE, CONSIDERED.',
    subheadline: 'Softness, Framed by Architectural Structure.',
    paragraphs: [
      'The Averon is defined by a quiet balance between soft upholstery and architectural structure. Its broad leather body is framed by a continuous dark-wood plinth, while slender brass details introduce a precise metallic accent at the arms. The result is a sofa that feels substantial and grounded, yet refined in its execution.',
      'Designed for high-ceiling contemporary living rooms, architectural residences, and executive salons, The Averon’s elongated silhouette offers generous seating without imposing visual heaviness. Every intersection—from the softened curve of the outer arm to the flush brass inlay and continuous walnut plinth—has been carefully considered to establish a permanent sense of calm.',
    ],
    closingStatement: 'Bespoke contemporary furniture, designed with European sensibility and crafted in India.',
  },
  designPhilosophyDetails: {
    headline: 'SOFTNESS, FRAMED BY STRUCTURE',
    mantra: [
      'Substantial yet refined.',
      'Anchored by continuous materiality.',
      'Metallic precision against organic warmth.',
    ],
    keyCharacteristics: [
      'Straight, elongated silhouette',
      'Rounded outer arms with flush vertical brass trim',
      'Integrated tailored upholstered back',
      'Deep, generous lounge seat geometry (68 cm depth)',
      'Continuous uninterrupted American walnut plinth perimeter',
      'Full Italian semi-aniline leather upholstery',
      'Low-profile architectural stance',
    ],
    fullDescription:
      'The Averon explores the tension between architectural mass and relaxed domestic comfort. Where conventional leather sofas often feel rigid or commercial, The Averon introduces sculptural softening at the arms and an unbroken continuous walnut perimeter that roots the piece to the floor. Slender vertical insets of brushed brass provide an intentional point of reflection against the warmth of cognac leather.',
  },
  productDescriptionSection: {
    paragraphs: [
      'At 260 cm in standard length with a generous 105 cm overall depth, The Averon commands presence in expansive living environments. The continuous walnut plinth creates a seamless horizontal datum line, while vertical brushed brass accents at the arm junctions introduce architectural rhythm.',
      'Upholstered in full-grain Italian semi-aniline leather in warm cognac/saddle tan, the surface offers a supple hand with a soft natural grain and subtle pull-up effect that deepens with age.',
    ],
    closingNotes: [
      'Every Averon is crafted to order in our dedicated Indian atelier.',
      'Custom dimensions, leather selections, and plinth finishes available on consultation.',
    ],
  },
  hofDifference: {
    headline: 'WHY HOUSE OF FORM?',
    subheadline: 'Contemporary European Design Sensibility · Crafted in India · Made Around Your Space',
    body: [
      'Why wait 16–24 weeks for European imports with rigid dimensions and transit vulnerability? House Of Form crafts contemporary European design right here in India with millimeter customization.',
    ],
    bespokePoints: [
      {
        title: 'Continuous Solid Timber Plinth',
        description: 'Milled from kiln-dried American walnut with precision 45° mitered joinery and low-sheen satin lacquer.',
      },
      {
        title: 'Brushed Brass Inset Accents',
        description: 'Solid brass vertical bars waterjet-cut and hand-brushed to a warm champagne luster, set flush into the arm facets.',
      },
      {
        title: 'Uncompromised Ergonomics',
        description: 'Generous 68 cm seat depth with multi-density foam and down-blend topper for deep salon relaxation.',
      },
      {
        title: 'White-Glove Commissioning',
        description: 'Delivered, uncrated, and placed by House Of Form dedicated technicians across Tier 1 Indian cities.',
      },
    ],
  },
  dimensionSummary: {
    technicalStatus: 'Standard Hero Specifications (Proposed Dimensions)',
    notes: 'Width: 260 cm (102 in) · Depth: 105 cm (41 in) · Height: 76 cm (30 in) · Seat Height: 42 cm (16.5 in) · Seat Depth: 68 cm (27 in). Custom sizing available.',
  },
  ergonomicProportions: {
    overallHeight: '76 cm (30 in)',
    seatHeight: '42 cm (16.5 in)',
    seatDepth: '68 cm (27 in)',
    overallDepth: '105 cm (41 in)',
    backrestAndArmFlow: 'Integrated tailored back with softened outer rounded arm contours and flush vertical brass insets.',
  },
  materialAndConstruction: {
    frame: {
      status: 'Kiln-Dried Seasoned Hardwood',
      specifications: [
        'Kiln-dried seasoned Indian sal and teak structural hardwood chassis',
        'Reinforced corner blocking with mortise-and-tenon joints',
        'Moisture content controlled below 10% for lifetime structural stability',
      ],
    },
    seating: {
      status: 'Multi-Density Core + Down-Blend Topper',
      specifications: [
        'High-resilience 45kg/m³ multi-density polyurethane core',
        'Channel-quilted down-blend envelope for luxurious surface sink-in',
        'High-tensile European elastic suspension webbing matrix',
      ],
    },
    upholstery: {
      status: 'Italian Semi-Aniline Leather',
      specifications: [
        'Premium full-grain Italian semi-aniline leather in warm cognac / saddle tan',
        'Supple hand with a soft natural grain and subtle pull-up effect',
        'Breathable finish with protective wax barrier against everyday living',
      ],
    },
    base: {
      status: 'Continuous Solid American Walnut',
      specifications: [
        'Uninterrupted solid American walnut perimeter plinth',
        'Dark espresso / smoked walnut low-sheen satin lacquer (5% sheen)',
        'Concealed non-marking acoustic glider feet beneath plinth',
      ],
    },
    specificationNote: 'Brass insets are solid brushed brass with micro-crystalline protective lacquer.',
  },
  upholsteryOptions: {
    headline: 'CURATED LEATHERS & NOBLE TACTILE MATERIALS',
    families: [
      {
        name: 'Italian Semi-Aniline Leather',
        items: 'Warm Cognac, Saddle Tan, Espresso Dark Roast, Nero Architectural Black',
        badge: 'Signature Specification',
        description: 'Supple full-grain leather with delicate natural pull-up character that patinates gracefully.',
      },
      {
        name: 'Heritage Nubuck & Suede',
        items: 'Taupe Nubuck, Tobacco Suede, Castagna Velvet Leather',
        badge: 'Atelier Reserve',
        description: 'Velvety matte handfeel for intimate salon and library installations.',
      },
    ],
  },
  finishOptions: {
    upholsteryColor: 'Warm Cognac / Saddle Tan (Standard) · Custom leather swatches via Material Atelier',
    baseFinish: 'Dark Espresso / Smoked Walnut Satin (Standard) · Natural Walnut · Ebonized Ash',
    contrastDetailing: 'Vertical Brushed Brass Trim (Standard) · Antique Bronze · Blackened Gunmetal',
    customUpholstery: 'Available upon architectural consultation with customer-own material (COM) support',
  },
  customisation: {
    headline: 'BESPOKE ARCHITECTURAL FLEXIBILITY',
    options: [
      'Custom overall length from 200 cm to 340 cm in millimeter increments',
      'Seat depth calibration (62 cm to 75 cm) based on client ergonomics',
      'Choice of leather grades, custom tannery colors, or boucle/velvet variants',
      'Plinth timber and stain matching to client interior architectural millwork',
      'Metal trim customization (Champagne Brass, Antique Bronze, Brushed Chrome)',
    ],
    customFurnitureService: 'House Of Form offers full architectural drawing support and material sample delivery.',
  },
  idealApplications: {
    residential: [
      'High-ceiling contemporary living rooms and salon pavilions',
      'Architectural residences with natural materials (travertine, raw concrete, fluted timber)',
      'Penthouse lounges with panoramic glass walls',
      'Private study and home library conversation settings',
    ],
    commercialHospitality: [
      'Executive boardroom reception salons',
      'Boutique luxury hotel presidential suites',
      'Private members clubs and architectural gallery lounges',
    ],
  },
  styleProfile: {
    designStyle: 'Contemporary European / Architectural Luxury',
    aesthetic: 'Quiet Luxury · Substantial · Grounded · Tactile · Material-First',
    silhouette: 'Straight, Elongated Body with Rounded Arm Contours and Unbroken Perimeter Plinth',
    visualWeight: 'Substantial and Grounded yet Floating via Continuous Walnut Reveal',
    comfort: 'Deep Lounge Seating (68 cm) with Down-Blend Surface Yield and Ergonomic Support',
    character: 'A piece that anchors the room with quiet architectural gravity rather than loud ornamentation.',
    interiorCompatibility: [
      'Contemporary Minimalist',
      'Modern Architectural',
      'Warm European Modernism',
      'Brutalist & Travertine Interiors',
      'Transitional Luxury',
    ],
  },
  whyWaitForItaly: {
    headline: 'WHY WAIT FOR ITALY?',
    bulletPoints: [
      'Why wait 18–24 weeks for an imported Milanese leather sofa that cannot be sized to your floor plan?',
      'House Of Form delivers identical European design sensibility in 6–8 weeks.',
      'Manufactured in New Delhi NCR with generational Indian craftsmanship.',
      'Zero international shipping damages, customs bottlenecks, or currency markups.',
      '100% adjustable ₹1,299 Material Atelier box delivered to your doorstep prior to order confirmation.',
    ],
    closingBrandLines: [
      'DESIGNED WITH GLOBAL SENSIBILITY.',
      'CRAFTED IN INDIA.',
      'MADE AROUND YOU.',
    ],
  },
  careInstructionsDetailed: {
    generalCare: [
      'Dust leather surfaces weekly with a soft dry microfiber cloth.',
      'Keep away from direct prolonged harsh sunlight and air conditioning heating vents.',
      'Wipe timber plinth with clean microfiber cloth; treat annually with natural wood balm.',
      'Dust brass insets with dry lint-free cloth; avoid abrasive metal polishes.',
    ],
    professionalCleaning: 'Condition leather annually with an approved natural beeswax leather cream. Professional leather specialist recommended for liquid spills.',
  },
  deliveryAndInstallation: {
    madeToOrderNote: 'Each Averon sofa is hand-built to order in our New Delhi NCR workshop.',
    timelineFactors: [
      'Standard production window: 6–8 weeks from material confirmation.',
      'Bespoke architectural dimensions: 7–9 weeks.',
    ],
    deliveryWorkflow: [
      'Phase 1: Material Atelier selection and 3D architectural dimension sign-off.',
      'Phase 2: Hardwood frame milling, plinth joinery, and leather cutting.',
      'Phase 3: Multi-density cushion assembly and precision hand-upholstery.',
      'Phase 4: Brass trim mounting, 24-point quality inspection, and white-glove crate packaging.',
      'Phase 5: Dedicated climate-controlled road transit and white-glove inside placement.',
    ],
    packaging: 'Multi-layer bubble wrap, moisture-resistant film, edge corner armor, and heavy-duty wooden pallet crating.',
    transportation: 'Dedicated enclosed air-suspension vehicle with tracking from Delhi NCR to your residence.',
    installation: 'White-glove delivery team carries the piece into your designated room, levels the plinth, inspects all leather seams, and removes all packaging.',
    siteAccess: 'Our logistics team verifies elevator dimensions, stairwell turns, and doorway clearances before dispatch.',
    customOrders: 'Available across Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, and Ahmedabad.',
  },
  additionalInformation: {
    'Reference Code': 'EW26',
    'Master SKU': 'HOF-SF-AVE-011',
    'Design Origin': 'Contemporary European Design Sensibility',
    'Crafting Origin': 'Handcrafted in New Delhi NCR, India',
    'Warranty': '10-Year Structural Hardwood Chassis Warranty · 2-Year Upholstery & Finish Warranty',
  },
  productTags: [
    'Contemporary Sofas',
    'Architectural Luxury',
    'Leather Sofa',
    'Cognac Leather',
    'Walnut Plinth',
    'Brass Accents',
    'Bespoke Sofa',
    'Made to Order',
    'House Of Form',
    'Made in India',
  ],
  seo: {
    title: 'The Averon — Bespoke Architectural Leather Sofa | House Of Form',
    altGeoTitle: 'The Averon Bespoke Leather Sofa in Delhi NCR, Mumbai & Bengaluru | House Of Form',
    metaDescription: 'The Averon by House Of Form is a bespoke architectural leather sofa crafted in warm cognac Italian leather, continuous American walnut plinth, and brushed brass vertical arm accents. Made to order in India.',
    primaryKeywords: [
      'The Averon sofa',
      'bespoke leather sofa India',
      'architectural leather sofa',
      'walnut plinth sofa',
      'brass accent sofa',
    ],
    secondaryKeywords: [
      'contemporary European sofa India',
      'luxury cognac leather sofa',
      'custom bespoke sofa Delhi NCR',
      'House Of Form Product 11',
    ],
    longTailKeywords: [
      'bespoke architectural cognac leather sofa with continuous walnut base',
      'Italian design sensibility leather sofa crafted in India',
      'luxury contemporary sofa with brushed brass vertical trim',
    ],
    geoLandingOpportunities: [
      'Delhi NCR',
      'Gurugram',
      'Mumbai',
      'Bengaluru',
      'Hyderabad',
      'Pune',
    ],
  },
  websiteProductCard: {
    title: 'The Averon',
    subtitle: 'Bespoke Architectural Leather Sofa',
    description: 'Straight, elongated silhouette in warm cognac semi-aniline leather, grounded by an unbroken solid walnut plinth and brushed brass arm details.',
    configurations: 'Grande (260cm) · Tres (235cm) · Monumental (290cm) · Bespoke Millimeter',
    badge: 'Product 11 · New Flagship',
    ctaText: 'Discover The Averon',
  },
  shortMobileDescription: {
    title: 'The Averon',
    subtitle: 'Architectural Cognac Leather Sofa',
    description: 'Continuous walnut plinth, vertical brushed brass trim, and generous 68 cm deep lounge seating.',
    ctaText: 'Experience The Averon',
  },
  emotionalSalesCopy: {
    headline: 'SOFTNESS, FRAMED BY ARCHITECTURAL STRUCTURE.',
    subheadline: 'The quiet gravity of rich Italian leather, solid American walnut, and brushed brass.',
    stanzas: [
      'A sofa should not merely fill a living room; it should set its architectural horizon.',
      'The Averon is drafted with an elongated body that anchors expansive spaces without clamoring for attention.',
      'From the continuous dark-wood plinth that grounds the perimeter to the delicate vertical brass insets catch the daylight, every element has been considered.',
    ],
  },
  finalBrandSignature: {
    brand: 'HOUSE OF FORM',
    lines: [
      'DESIGNED WITH GLOBAL SENSIBILITY.',
      'CRAFTED IN INDIA.',
      'MADE AROUND YOU.',
    ],
    callout: 'Experience The Averon in person through The Material Atelier.',
    cta: 'Reserve Your Atelier Kit — ₹1,299 (100% Adjustable Against Final Order)',
  },
};

export const AVERON_PRODUCT: Product = {
  id: 'HOF-SF-AVE-011',
  sku: 'HOF-SF-AVE-011',
  name: 'The Averon',
  tagline: 'Bespoke Architectural Leather Sofa',
  productNo: '11',
  productCode: 'EW26',
  primaryCategory: 'Contemporary Sofas',
  subcategory: 'Tailored Contemporary / Architectural Luxury',
  startingPrice: 385000,
  designConcept:
    'Softness, framed by structure. An elongated architectural leather sofa framed by a continuous solid walnut plinth with brushed brass vertical arm accents.',
  designTags: [
    'Contemporary Sofas',
    'Architectural Luxury',
    'Full Leather Upholstery',
    'Cognac Leather',
    'Continuous Walnut Plinth',
    'Brushed Brass Accents',
    'Straight Elongated Silhouette',
    'Sculpted Rounded Arms',
    'Deep Lounge Geometry',
    'Low-Profile Stance',
    'Bespoke Craftsmanship',
    'Made in India',
    'European Sensibility',
  ],
  attributes: {
    silhouette: 'Straight, Elongated Silhouette',
    back: 'Integrated Tailored Upholstered Back',
    arm: 'Sculpted Rounded Arms with Vertical Brass Inset',
    base: 'Continuous Solid American Walnut Plinth Base',
    seat: 'Deep, Generous Lounge Geometry (68 cm depth)',
    designEra: 'Tailored Contemporary / Architectural Luxury',
    sideSurface: 'Rounded Outer Arm with Brushed Brass Accents',
    profile: 'Low-Profile Architectural Stance',
    designCharacter: 'Substantial · Grounded · Architectural · Refined · Tactile',
    style: 'Contemporary European / Indian Master Joinery',
    customization: '100% Bespoke Millimeter Dimensions',
    statementLevel: 'Quiet Architectural Gravity',
  },
  visualClassification: {
    primaryCategory: 'Contemporary Sofas',
    subcategory: 'Tailored Contemporary / Architectural Luxury',
    silhouette: 'Straight, Elongated Silhouette',
    back: 'Integrated Tailored Upholstered Back',
    arm: 'Rounded Outer Arms with Brushed Brass Inset',
    base: 'Continuous Solid Walnut Plinth',
    seat: 'Deep Lounge Seating',
    sideSurface: 'Sculpted Rounded Arm with Vertical Brass Accent',
    profile: 'Low Profile',
    designCharacter: 'Architectural Luxury',
    style: 'Contemporary European',
    customization: 'Bespoke',
    statementLevel: 'Architectural Anchor',
  },
  materialDirection: {
    upholstery:
      'Italian Semi-Aniline Leather in Warm Cognac / Saddle Tan with Soft Natural Grain and Subtle Pull-Up Effect',
    timber: 'Continuous Solid American Walnut Base in Dark Espresso / Smoked Walnut Low-Sheen Satin Lacquer',
    base: 'Continuous Solid Walnut Plinth Base Running Uninterrupted Along Entire Perimeter',
    accent: 'Vertical Brushed Brass Trim Insets on Outer Arm Facets in Warm Champagne Brass Tone',
    notes: 'Structure crafted from kiln-dried hardwood frame with high-resilience multi-density foam core and down-blend topper.',
  },
  productStory:
    'The Averon is defined by a quiet balance between soft upholstery and architectural structure. Its broad leather body is framed by a continuous dark-wood plinth, while slender brass details introduce a precise metallic accent at the arms. The result is a sofa that feels substantial and grounded, yet refined in its execution.\n\nCrafted for high-ceiling contemporary living rooms, architectural residences with natural materials (stone, wood, concrete), and refined executive salons, The Averon’s elongated stance offers generous seating without imposing visual weight. Every intersection—from the softened curve of the outer arm to the flush brass inlay and continuous walnut plinth—has been carefully considered to establish a permanent sense of calm.',
  designPhilosophy:
    'SOFTNESS, FRAMED BY STRUCTURE.\n\nThe Averon explores the tension between architectural mass and relaxed domestic comfort. Where conventional leather sofas often feel rigid or commercial, The Averon introduces sculptural softening at the arms and an unbroken continuous walnut perimeter that roots the piece to the floor.\n\nSlender vertical insets of brushed brass provide an intentional point of reflection against the warmth of cognac semi-aniline leather. Nothing is excessive; every detail serves to anchor and articulate the form.',
  comfortStory:
    'Engineered with a generous 68 cm (27") seat depth and relaxed 42 cm (16.5") seat height, calibrated for deep conversation, reading, and unhurried evening repose. The core combines multi-density high-resilience foam with a channel-quilted down-blend topper that yields smoothly to the body while retaining its tailored silhouette over decades of use.',
  craftsmanshipNotes:
    'Designed with contemporary European sensibility, crafted in India by House Of Form master joiners and artisan leather tailors. Built on a kiln-dried seasoned hardwood chassis with hand-selected solid American walnut timber plinths and precision waterjet-cut brushed brass vertical accents.',
  materialsUsed: [
    'Full-grain Italian semi-aniline leather in warm cognac / saddle tan',
    'Continuous solid American walnut timber base in smoked espresso finish',
    'Solid brushed brass vertical insets with satin brushed protection',
    'Kiln-dried seasoned structural hardwood chassis',
    'High-resilience multi-density 45kg/m³ foam core with channel-pocketed down topper',
    'High-tensile European matrix suspension webbing',
  ],
  images: {
    // Exact user uploaded image references & clean public URLs
    hero: '/images/averon/averon_hero.png',
    front: '/images/averon/averon_front.png',
    threeQuarter: '/images/averon/averon_three_quarter.png',
    side: '/images/averon/averon_three_quarter.png',
    detail: '/images/averon/averon_detail.png',
    rear: '/images/averon/averon_rear.png',
    lifestyle: '/images/averon/averon_lifestyle.png',
    styling: '/images/averon/averon_styling.png',
    dimensionDiagram: '/images/averon/averon_dimension_sheet.svg',
    // Original uploaded filename mappings for 100% fidelity
    uploadedHero: '/images/averon/ChatGPT Image Sep 17, 2026, 01_01_28 AM.png',
    uploadedFront: '/images/averon/ChatGPT Image Sep 17, 2026, 12_52_16 AM.png',
    uploadedAngle: '/images/averon/ChatGPT Image Sep 17, 2026, 12_55_09 AM.png',
    uploadedOpposite: '/images/averon/ChatGPT Image Sep 17, 2026, 12_53_57 AM.png',
    uploadedDetail: '/images/averon/ChatGPT Image Sep 17, 2026, 01_02_33 AM.png',
    uploadedRear: '/images/averon/ChatGPT Image Sep 17, 2026, 01_03_23 AM.png',
    uploadedStyling: '/images/averon/ChatGPT Image Sep 17, 2026, 12_56_46 AM.png',
  },
  variants: [
    {
      id: 'VAR-AVE-01',
      sku: 'HOF-SF-AVE-011-3.5S',
      name: 'The Averon Grande',
      seatingCapacity: '3.5 – 4 Seater (Hero Specification)',
      conceptSubtitle: 'The definitive architectural proportion for expansive salon living',
      basePrice: 385000,
      description:
        'Standard master specification: 260 cm length with continuous American walnut plinth, deep 68 cm lounge seat, and brushed brass arm insets.',
      applicationNotes: 'High-ceiling modern living rooms, architectural residences, penthouse salons',
      isPopular: true,
      dimensions: {
        widthCm: 260,
        depthCm: 105,
        heightCm: 76,
        seatHeightCm: 42,
        seatDepthCm: 68,
        insideSeatWidthCm: 216,
        insideSeatDepthCm: 68,
        armHeightCm: 64,
        widthIn: 102,
        depthIn: 41,
        heightIn: 30,
        seatHeightIn: 16.5,
        seatDepthIn: 27,
        insideSeatWidthIn: 85,
        insideSeatDepthIn: 27,
        armHeightIn: 25,
      },
    },
    {
      id: 'VAR-AVE-02',
      sku: 'HOF-SF-AVE-011-3S',
      name: 'The Averon Tres',
      seatingCapacity: '3 Seater',
      conceptSubtitle: 'Tailored architectural stance for focused luxury apartments',
      basePrice: 355000,
      description:
        'A compact 235 cm iteration maintaining the continuous walnut plinth, generous depth, and vertical brass trim without compromise.',
      applicationNotes: 'Contemporary luxury apartments, library lounges, executive corner suites',
      dimensions: {
        widthCm: 235,
        depthCm: 105,
        heightCm: 76,
        seatHeightCm: 42,
        seatDepthCm: 68,
        insideSeatWidthCm: 191,
        insideSeatDepthCm: 68,
        armHeightCm: 64,
        widthIn: 92.5,
        depthIn: 41,
        heightIn: 30,
        seatHeightIn: 16.5,
        seatDepthIn: 27,
        insideSeatWidthIn: 75,
        insideSeatDepthIn: 27,
        armHeightIn: 25,
      },
    },
    {
      id: 'VAR-AVE-03',
      sku: 'HOF-SF-AVE-011-4S',
      name: 'The Averon Monumental',
      seatingCapacity: '4 Seater / Expansive',
      conceptSubtitle: 'Monumental architectural presence for grand villa pavilions',
      basePrice: 425000,
      description:
        'An expansive 290 cm linear silhouette designed to anchor dramatic double-height living rooms and open-plan galleries.',
      applicationNotes: 'Grand architectural villas, double-height living pavilions, luxury hotel suites',
      dimensions: {
        widthCm: 290,
        depthCm: 105,
        heightCm: 76,
        seatHeightCm: 42,
        seatDepthCm: 68,
        insideSeatWidthCm: 246,
        insideSeatDepthCm: 68,
        armHeightCm: 64,
        widthIn: 114,
        depthIn: 41,
        heightIn: 30,
        seatHeightIn: 16.5,
        seatDepthIn: 27,
        insideSeatWidthIn: 97,
        insideSeatDepthIn: 27,
        armHeightIn: 25,
      },
    },
    {
      id: 'VAR-AVE-04',
      sku: 'HOF-SF-AVE-011-2.5S',
      name: 'The Averon Salon Duo',
      seatingCapacity: '2 – 2.5 Seater',
      conceptSubtitle: 'Intimate conversation piece with full architectural gravity',
      basePrice: 315000,
      description:
        'An intimate 205 cm salon lounge pairing perfectly with low travertine coffee tables and reading spaces.',
      applicationNotes: 'Private study, master bedroom lounge, executive office conversation area',
      dimensions: {
        widthCm: 205,
        depthCm: 105,
        heightCm: 76,
        seatHeightCm: 42,
        seatDepthCm: 68,
        insideSeatWidthCm: 161,
        insideSeatDepthCm: 68,
        armHeightCm: 64,
        widthIn: 80.5,
        depthIn: 41,
        heightIn: 30,
        seatHeightIn: 16.5,
        seatDepthIn: 27,
        insideSeatWidthIn: 63.5,
        insideSeatDepthIn: 27,
        armHeightIn: 25,
      },
    },
    {
      id: 'VAR-AVE-BESPOKE',
      sku: 'HOF-SF-AVE-011-BESPOKE',
      name: 'The Averon Bespoke Commission',
      seatingCapacity: 'Bespoke Custom Capacity',
      conceptSubtitle: '100% custom millimeter dimensions calibrated to your blueprints',
      basePrice: 385000,
      description:
        'Crafted to your exact architectural space requirements. Custom lengths from 190 cm to 360 cm, tailored seat depths, and bespoke timber/leather selections.',
      applicationNotes: 'Custom architectural floor plans, private commissions, unique spatial envelopes',
      dimensions: {
        widthCm: 260,
        depthCm: 105,
        heightCm: 76,
        seatHeightCm: 42,
        seatDepthCm: 68,
        widthIn: 102,
        depthIn: 41,
        heightIn: 30,
        seatHeightIn: 16.5,
        seatDepthIn: 27,
      },
    },
  ],
  compatibleMaterialIds: [
    'HF-LT-001', // Italian Cognac Semi-Aniline Leather
    'HF-LT-002', // Saddle Tan Full-Grain
    'HF-LT-003', // Espresso Dark Roast
    'HF-LT-004', // Nero Architectural
    'HF-FB-014', // Bouclé Avorio (Secondary accent pairing)
    'HF-FB-021', // Sabbia Calda Linen
  ],
  compatibleFinishIds: [
    'HF-WD-002', // Canaletto Walnut
    'HF-WD-006', // Smoked Oak / Smoked Walnut
    'HF-MT-003', // Brushed Brass
    'HF-MT-004', // Blackened Bronze
  ],
  atelierId: 'ATELIER-AVE-011',
  careInfo: [
    'Dust leather weekly with a dry, soft microfiber cloth.',
    'Keep away from direct prolonged harsh sunlight and air conditioning heating vents.',
    'Wipe timber plinth with clean microfiber cloth; treat annually with natural wood balm.',
    'Dust brass insets with dry lint-free cloth; avoid abrasive chemical polishes.',
  ],
  deliveryInfo:
    'Hand-built to order in our New Delhi NCR workshop in 6–8 weeks. Dedicated white-glove inside delivery, room placement, plinth leveling, and packaging removal across Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, and Ahmedabad.',
  customizationScope: [
    'Overall width customizable from 190 cm to 360 cm in millimeter increments',
    'Seat depth adjustable between 62 cm and 75 cm',
    'Choice of Italian semi-aniline leather, heritage nubuck, or client-provided material (COM)',
    'Plinth timber finish matched to your architectural millwork (Walnut, Smoked Oak, Ebonized Ash)',
    'Metal vertical accent finishes: Champagne Brass, Antique Bronze, Brushed Gunmetal',
  ],
  faqs: [
    {
      question: 'What makes The Averon different from standard leather sofas?',
      answer:
        'The Averon is designed as an architectural piece rather than a utilitarian couch. Its defining continuous walnut plinth anchors it directly to the floor, while rounded outer arms with slender vertical brushed brass trim introduce quiet luxury and metallic reflection against the warm cognac leather.',
    },
    {
      question: 'Can The Averon be customized to my room’s exact dimensions?',
      answer:
        'Yes. Because every House Of Form piece is crafted in India, we offer 100% bespoke sizing. Our design team can calibrate length, seat depth, and seat height to align with your architectural blueprints.',
    },
    {
      question: 'What type of leather is used on The Averon?',
      answer:
        'The standard specification features full-grain Italian semi-aniline leather in warm cognac/saddle tan. It offers a supple hand with natural grain variations and subtle pull-up effect that develops a rich patina over decades.',
    },
    {
      question: 'How does The Material Atelier work for The Averon?',
      answer:
        'You can reserve a curated Material Atelier kit for ₹1,299. We dispatch large-format leather swatch tiles, solid walnut plinth timber blocks, and brushed brass metal samples directly to your residence. The ₹1,299 is 100% adjustable against your final furniture commission.',
    },
    {
      question: 'What is the production lead time?',
      answer:
        'Standard production lead time is 6–8 weeks from material and dimension confirmation. We eliminate international transit risks and deliver via dedicated white-glove transport.',
    },
  ],
  masterSheet: AVERON_MASTER_SHEET,
};
