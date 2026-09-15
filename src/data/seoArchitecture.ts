/**
 * HOUSE OF FORM — SEO & METADATA ARCHITECTURE
 * Structured titles, meta descriptions, and keyword architectures for all product lines.
 * Optimized for luxury design discovery across all Tier 1 cities in India:
 * Delhi NCR (Gurugram & New Delhi), Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, and Ahmedabad.
 */

export interface ProductSEOConfig {
  productId: string;
  productNo: string;
  productCode: string;
  productName: string;
  sku: string;
  category: string;
  subcategory: string;
  seoTitle: string;
  altGeoTitle: string;
  metaDescription: string;
  canonicalSlug: string;
  keywords: {
    primary: string[];
    secondary: string[];
    longTail: string[];
    geo: string[];
  };
  openGraph: {
    title: string;
    description: string;
    type: string;
    imageAlt: string;
  };
  twitterCard: {
    title: string;
    description: string;
  };
  structuredData: {
    priceRange: string;
    availability: string;
    itemCondition: string;
  };
}

export interface Tier1CityGeo {
  id: string;
  cityName: string;
  shortName: string;
  state: string;
  stateCode: string;
  regionCode: string;
  coordinates: {
    lat: number;
    lng: number;
    positionString: string;
  };
  elitePockets: string[];
  localSearchVolume: string;
  transitWorkflow: string;
  deliveryDays: string;
  sampleLocalQueries: string[];
  citySpecificTitle: (productName: string) => string;
  citySpecificDescription: (productName: string) => string;
}

export const SITE_BASE_URL = 'https://houseofform.in';

export const TIER_1_INDIAN_CITIES: Tier1CityGeo[] = [
  {
    id: 'delhi-ncr',
    cityName: 'Delhi NCR (Gurugram & New Delhi)',
    shortName: 'Delhi NCR',
    state: 'Delhi / Haryana / UP',
    stateCode: 'DL / HR / UP',
    regionCode: 'IN-DL;IN-HR;IN-UP',
    coordinates: { lat: 28.4595, lng: 77.0266, positionString: '28.4595;77.0266' },
    elitePockets: ['Golf Course Road (Gurugram)', 'DLF Phase 5', 'Chanakyapuri', 'Jor Bagh', 'Prithviraj Road', 'Noida Expressway'],
    localSearchVolume: 'High · Flagship Atelier Hub',
    transitWorkflow: 'Direct White-Glove Van Delivery & Assembly',
    deliveryDays: '48 Hours Post Atelier Commissioning',
    sampleLocalQueries: [
      'luxury sofa delhi ncr',
      'bespoke curved sofa gurugram',
      'italian luxury furniture store dlf phase 5',
      'architectural furniture studio chanakyapuri',
      'custom sofa manufacturers new delhi',
    ],
    citySpecificTitle: (productName) => `${productName} — Bespoke Luxury Sofa Gurugram & Delhi NCR | House Of Form`,
    citySpecificDescription: (productName) => `Experience ${productName} in Gurugram & Delhi NCR. Handcrafted bespoke luxury sofa tailored for villas, penthouses, and architectural homes with white-glove delivery.`,
  },
  {
    id: 'mumbai',
    cityName: 'Mumbai (South Mumbai & Suburbs)',
    shortName: 'Mumbai',
    state: 'Maharashtra',
    stateCode: 'MH',
    regionCode: 'IN-MH',
    coordinates: { lat: 18.922, lng: 72.8347, positionString: '18.9220;72.8347' },
    elitePockets: ['Worli Sea Face', 'Bandra West (Pali Hill)', 'Malabar Hill', 'Juhu Tara Road', 'Altamount Road', 'Nariman Point'],
    localSearchVolume: 'Very High · Private Penthouse Demand',
    transitWorkflow: 'Air-Suspension Freight + Private Installation Crew',
    deliveryDays: '3–4 Days Dedicated Transit',
    sampleLocalQueries: [
      'luxury sofa mumbai',
      'bespoke modular lounge sofa worli',
      'designer furniture stores bandra',
      'sea-facing penthouse sofa malabar hill',
      'italian modern furniture south mumbai',
    ],
    citySpecificTitle: (productName) => `${productName} — Luxury Designer Sofa Mumbai & South Bombay | House Of Form`,
    citySpecificDescription: (productName) => `Curated for Mumbai's finest penthouses and residences. ${productName} brings Italian proportions and bespoke craftsmanship to South Mumbai, Bandra, and Worli.`,
  },
  {
    id: 'bengaluru',
    cityName: 'Bengaluru (Bangalore)',
    shortName: 'Bengaluru',
    state: 'Karnataka',
    stateCode: 'KA',
    regionCode: 'IN-KA',
    coordinates: { lat: 12.9716, lng: 77.5946, positionString: '12.9716;77.5946' },
    elitePockets: ['Lavelle Road', 'Indiranagar (100ft Rd)', 'Sadashivnagar', 'Koramangala 3rd Block', 'Whitefield Varthur', 'Dollars Colony'],
    localSearchVolume: 'High · Modern Architectural Tech Leaders',
    transitWorkflow: 'Climate-Controlled Air-Ride Freight + Studio Crew',
    deliveryDays: '4 Days Express Transit',
    sampleLocalQueries: [
      'luxury sofa bangalore',
      'bespoke curved lounge sofa bengaluru',
      'architectural furniture stores lavelle road',
      'contemporary italian sofa indiranagar',
      'penthouse luxury furniture whitefield',
    ],
    citySpecificTitle: (productName) => `${productName} — Luxury Contemporary Sofa Bengaluru | House Of Form`,
    citySpecificDescription: (productName) => `Architectural elegance for Bengaluru's design-forward homes. ${productName} delivers tailored European curves, bespoke upholstery, and white-glove setup.`,
  },
  {
    id: 'hyderabad',
    cityName: 'Hyderabad',
    shortName: 'Hyderabad',
    state: 'Telangana',
    stateCode: 'TG',
    regionCode: 'IN-TG',
    coordinates: { lat: 17.385, lng: 78.4867, positionString: '17.3850;78.4867' },
    elitePockets: ['Jubilee Hills', 'Banjara Hills (Road No. 36)', 'Gachibowli Vistas', 'Financial District Penthouses', 'Madhapur'],
    localSearchVolume: 'Rapid Growth · Expansive Villa Estates',
    transitWorkflow: 'Crated Transit + Certified Master Technician Installation',
    deliveryDays: '3–4 Days Dedicated Logistics',
    sampleLocalQueries: [
      'luxury sofa hyderabad',
      'bespoke modular sofa jubilee hills',
      'designer furniture stores banjara hills',
      'italian modern sofa hyderabad',
      'villa furniture architectural hyderabad',
    ],
    citySpecificTitle: (productName) => `${productName} — Bespoke Luxury Sofa Hyderabad | Jubilee Hills & Banjara Hills`,
    citySpecificDescription: (productName) => `Handcrafted bespoke elegance for luxury villas and residences in Jubilee Hills & Banjara Hills. Explore ${productName} with tailored proportions.`,
  },
  {
    id: 'chennai',
    cityName: 'Chennai',
    shortName: 'Chennai',
    state: 'Tamil Nadu',
    stateCode: 'TN',
    regionCode: 'IN-TN',
    coordinates: { lat: 13.0827, lng: 80.2707, positionString: '13.0827;80.2707' },
    elitePockets: ['Boat Club Road', 'Poes Garden', 'Nungambakkam', 'Adyar (Kotturpuram)', 'East Coast Road (ECR Villas)'],
    localSearchVolume: 'Steady High-Ticket · Coastal Heritage Villas',
    transitWorkflow: 'Protective Multi-Layer Foam Wrap + Expert Assembly Team',
    deliveryDays: '4–5 Days Doorstep Delivery',
    sampleLocalQueries: [
      'luxury sofa chennai',
      'bespoke furniture boat club road chennai',
      'contemporary italian curved sofa poes garden',
      'designer lounge sofa ecr villas',
      'custom modern furniture chennai',
    ],
    citySpecificTitle: (productName) => `${productName} — Luxury Contemporary Sofa Chennai | Boat Club & Poes Garden`,
    citySpecificDescription: (productName) => `Sophisticated European design meets master Indian craftsmanship. Commission ${productName} for luxury residences across Chennai and ECR.`,
  },
  {
    id: 'pune',
    cityName: 'Pune',
    shortName: 'Pune',
    state: 'Maharashtra',
    stateCode: 'MH',
    regionCode: 'IN-MH',
    coordinates: { lat: 18.5204, lng: 73.8567, positionString: '18.5204;73.8567' },
    elitePockets: ['Koregaon Park', 'Kalyani Nagar', 'Boat Club Road', 'Bhosale Nagar', 'Baner-Pashan Link Road'],
    localSearchVolume: 'High · Sophisticated Urban Penthouses',
    transitWorkflow: 'Inter-City Express Shuttle + Direct In-Home Commissioning',
    deliveryDays: '3 Days Direct Delivery',
    sampleLocalQueries: [
      'luxury sofa pune',
      'designer furniture koregaon park',
      'bespoke curved lounge sofa kalyani nagar',
      'italian contemporary sofa pune',
      'custom penthouse furniture pune',
    ],
    citySpecificTitle: (productName) => `${productName} — Bespoke Designer Sofa Pune | Koregaon Park & Kalyani Nagar`,
    citySpecificDescription: (productName) => `Bespoke lounge furniture tailored for Pune's architectural residences. Discover ${productName} with custom upholstery, curated dimensions, and white-glove setup.`,
  },
  {
    id: 'kolkata',
    cityName: 'Kolkata',
    shortName: 'Kolkata',
    state: 'West Bengal',
    stateCode: 'WB',
    regionCode: 'IN-WB',
    coordinates: { lat: 22.5726, lng: 88.3639, positionString: '22.5726;88.3639' },
    elitePockets: ['Alipore', 'Ballygunge', "Queen's Park", 'Rawdon Street', 'New Town Eco-Park Mansions'],
    localSearchVolume: 'High Legacy Wealth · Colonial & Modern Bunglows',
    transitWorkflow: 'Reinforced Crated Rail/Road Transit + Certified White-Glove Handlers',
    deliveryDays: '4–5 Days Safe Delivery',
    sampleLocalQueries: [
      'luxury sofa kolkata',
      'bespoke luxury furniture alipore',
      'italian modern designer sofa ballygunge',
      'architectural furniture kolkata',
      'premium living room sofa kolkata',
    ],
    citySpecificTitle: (productName) => `${productName} — Luxury Bespoke Sofa Kolkata | Alipore & Ballygunge`,
    citySpecificDescription: (productName) => `Timeless European proportions crafted for prestigious Kolkata residences in Alipore, Ballygunge, and beyond. Explore ${productName} by House Of Form.`,
  },
  {
    id: 'ahmedabad',
    cityName: 'Ahmedabad',
    shortName: 'Ahmedabad',
    state: 'Gujarat',
    stateCode: 'GJ',
    regionCode: 'IN-GJ',
    coordinates: { lat: 23.0225, lng: 72.5714, positionString: '23.0225;72.5714' },
    elitePockets: ['Bodakdev', 'Ambli Road', 'Sindhu Bhavan Road (SBR)', 'Shela Luxury Estates', 'Science City Road'],
    localSearchVolume: 'Very High · Expansive Architectural Bungalows',
    transitWorkflow: 'Dedicated Logistics Corridor + White-Glove Setup',
    deliveryDays: '2–3 Days Dedicated Freight',
    sampleLocalQueries: [
      'luxury sofa ahmedabad',
      'bespoke modern sofa sindhu bhavan road',
      'designer furniture stores bodakdev ambli',
      'italian luxury curved sofa ahmedabad',
      'architectural villa furniture ahmedabad',
    ],
    citySpecificTitle: (productName) => `${productName} — Bespoke Luxury Sofa Ahmedabad | Ambli & Sindhu Bhavan Road`,
    citySpecificDescription: (productName) => `Statement contemporary European design tailored for grand architectural bungalows in Ahmedabad, Ambli, and Bodakdev. Discover ${productName}.`,
  },
];

export const GLOBAL_BRAND_SEO = {
  defaultTitle: 'House Of Form — Italian Design. Bespoke Craftsmanship. Made in India.',
  titleTemplate: '%s | House Of Form',
  defaultDescription:
    'House Of Form is a luxury bespoke furniture house crafting contemporary European lounge sofas with white-glove commissioning across Tier 1 cities in India: Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, and Ahmedabad.',
  defaultKeywords: [
    'luxury sofa india',
    'bespoke furniture india',
    'contemporary european furniture',
    'italian design sofa india',
    'made to order luxury furniture',
    'house of form',
    'luxury sofa delhi ncr',
    'designer sofas gurugram',
    'bespoke furniture mumbai',
    'penthouse furniture bengaluru',
    'luxury sofa hyderabad',
    'designer furniture chennai',
    'contemporary sofa pune',
    'bespoke luxury sofa kolkata',
    'architectural furniture ahmedabad',
  ],
  geoRegions: ['IN-DL', 'IN-HR', 'IN-UP', 'IN-MH', 'IN-KA', 'IN-TG', 'IN-TN', 'IN-WB', 'IN-GJ'],
  geoPlacenames: [
    'Delhi NCR',
    'Gurugram',
    'Mumbai',
    'Bengaluru',
    'Hyderabad',
    'Chennai',
    'Pune',
    'Kolkata',
    'Ahmedabad',
  ],
  socialHandles: {
    instagram: '@houseofform.in',
    pinterest: 'houseofform_india',
    linkedin: 'house-of-form-india',
  },
};

export const PRODUCT_SEO_REGISTRY: Record<string, ProductSEOConfig> = {
  // PRODUCT 01 — THE VELORA
  'HOF-SF-VLR-001': {
    productId: 'HOF-SF-VLR-001',
    productNo: '01',
    productCode: 'VEL-01',
    productName: 'The Velora',
    sku: 'HOF-SF-VLR-001',
    category: 'Luxury Lounge Sofas',
    subcategory: 'Soft Contemporary / Curved Profile',
    seoTitle: 'The Velora | Italian-Inspired Luxury Curved Sofa | House Of Form',
    altGeoTitle:
      'Bespoke Curved Luxury Sofa in Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata & Ahmedabad | The Velora',
    metaDescription:
      'Discover The Velora by House Of Form: An Italian-inspired bespoke curved lounge sofa available in 1, 2, 3 and 4 seater configurations. Delivered and commissioned with white-glove service across all Tier 1 cities in India including Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune, Chennai, Kolkata & Ahmedabad.',
    canonicalSlug: '/sofas/the-velora',
    keywords: {
      primary: [
        'luxury sofa india',
        'curved sofa india',
        'bespoke sofa delhi ncr',
        'italian curved sofa mumbai',
        'custom luxury sofa bengaluru',
        'designer sofa hyderabad',
        'curved lounge sofa pune',
        'luxury furniture chennai',
        'architectural sofa kolkata',
        'villa luxury sofa ahmedabad',
      ],
      secondary: [
        'curved sofa design living room',
        'luxury contemporary sofa india',
        'made to order sofa delhi',
        'modern curved lounge sofa mumbai',
        '4 seater luxury sofa india',
        'italian designer sofa bengaluru',
        'boucle curved sofa hyderabad',
        'penthouse sofa design pune',
      ],
      longTail: [
        'italian design curved sofa made in india',
        'bespoke furniture for villas gurugram',
        'custom upholstered curved sofa south mumbai',
        'luxury living room sofa 3 seater curved bengaluru',
        'designer curved couch for penthouses jubilee hills',
        'handcrafted luxury sofa delivery across tier 1 cities india',
      ],
      geo: [
        'Delhi NCR (Gurugram & South Delhi)',
        'Mumbai (Worli, Bandra & Juhu)',
        'Bengaluru (Lavelle Road & Indiranagar)',
        'Hyderabad (Jubilee Hills & Banjara Hills)',
        'Chennai (Boat Club & Poes Garden)',
        'Pune (Koregaon Park & Kalyani Nagar)',
        'Kolkata (Alipore & Ballygunge)',
        'Ahmedabad (Bodakdev & Sindhu Bhavan Road)',
      ],
    },
    openGraph: {
      title: 'The Velora — Italian-Inspired Luxury Curved Sofa | House Of Form',
      description:
        'A bespoke curved lounge sofa inspired by Italian design sensibility and handcrafted in India. Commissioned across Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata & Ahmedabad.',
      type: 'product',
      imageAlt: 'The Velora Italian-Inspired Curved Luxury Sofa in Bouclé Avorio',
    },
    twitterCard: {
      title: 'The Velora — Curved Luxury Lounge Sofa | House Of Form',
      description:
        'Where Italian design sensibility meets bespoke Indian craftsmanship. Custom configurations in 1, 2, 3 & 4 seater for Tier 1 Indian residences.',
    },
    structuredData: {
      priceRange: '₹1,65,000 – ₹2,95,000',
      availability: 'https://schema.org/PreOrder',
      itemCondition: 'https://schema.org/NewCondition',
    },
  },

  // PRODUCT 02 — THE ELYRA
  'HOF-SF-ELY-002': {
    productId: 'HOF-SF-ELY-002',
    productNo: '02',
    productCode: 'EW1',
    productName: 'The Elyra',
    sku: 'HOF-SF-ELY-002',
    category: 'Contemporary Sofas',
    subcategory: 'Architectural Contemporary / Asymmetric Sofa',
    seoTitle: 'The Elyra — Bespoke Asymmetric Lounge Sofa | House Of Form',
    altGeoTitle:
      'Bespoke Architectural Asymmetric Sofa Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata & Ahmedabad | The Elyra',
    metaDescription:
      'Discover The Elyra: An architectural lounge sofa with an asymmetric silhouette, sculptural single arm, integrated wooden side table, and continuous timber plinth. Delivered with white-glove commissioning across all Tier 1 cities in India.',
    canonicalSlug: '/sofas/the-elyra',
    keywords: {
      primary: [
        'asymmetric sofa india',
        'architectural lounge sofa delhi',
        'sofa with integrated side table mumbai',
        'contemporary european sofa bengaluru',
        'designer asymmetric couch hyderabad',
        'luxury timber plinth sofa chennai',
        'single arm modern sofa pune',
        'bespoke living room sofa kolkata',
        'modern villa sofa ahmedabad',
      ],
      secondary: [
        'wooden plinth sofa india',
        'single arm couch luxury',
        'bespoke luxury furniture mumbai',
        'house of form elyra',
        'dual material sofa wood and fabric',
        'architectural furniture architects india',
        'low profile sofa with built in table',
      ],
      longTail: [
        'custom asymmetric sofa with built-in wooden side table',
        'low profile architectural sofa for penthouse living room',
        'designer lounge sofa with timber platform base made in india',
        'bespoke contemporary sofa delivered to tier 1 cities',
        'luxury asymmetric seating for architectural residences',
      ],
      geo: [
        'Delhi NCR (DLF Golf Links & Chanakyapuri)',
        'Mumbai (Worli Sea Face & Malabar Hill)',
        'Bengaluru (Sadashivnagar & Lavelle Road)',
        'Hyderabad (Jubilee Hills & Financial District)',
        'Chennai (Boat Club Road & ECR)',
        'Pune (Koregaon Park & Boat Club Road)',
        'Kolkata (Alipore & Queen’s Park)',
        'Ahmedabad (Ambli Road & Bodakdev)',
      ],
    },
    openGraph: {
      title: 'The Elyra — Bespoke Asymmetric Lounge Sofa | House Of Form',
      description:
        'Architectural form. Integrated function. Sculptural single-arm sofa featuring an integrated solid timber side table. Commissioned across all Tier 1 cities in India.',
      type: 'product',
      imageAlt: 'The Elyra Asymmetric Lounge Sofa with Integrated Wooden Side Table',
    },
    twitterCard: {
      title: 'The Elyra — Architectural Lounge Sofa | House Of Form',
      description:
        'Asymmetric silhouette with integrated timber plinth and side table. Crafted to order in India for Tier 1 residences.',
    },
    structuredData: {
      priceRange: '₹2,10,000 – ₹2,80,000',
      availability: 'https://schema.org/PreOrder',
      itemCondition: 'https://schema.org/NewCondition',
    },
  },

  // PRODUCT 03 — THE AVORA
  'HOF-SF-AVR-003': {
    productId: 'HOF-SF-AVR-003',
    productNo: '03',
    productCode: 'EW1',
    productName: 'The Avora',
    sku: 'HOF-SF-AVR-003',
    category: 'Luxury Lounge Sofas',
    subcategory: 'Soft Contemporary / Modular Lounge',
    seoTitle: 'The Avora | Bespoke Luxury Modular Lounge Sofa | House Of Form',
    altGeoTitle:
      'Bespoke Modular Lounge Sofa across Tier 1 Metros: Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata & Ahmedabad | The Avora',
    metaDescription:
      'Discover The Avora, a bespoke modular lounge sofa by House Of Form. Low-profile contemporary design with sculpted curves, continuous upholstered body and deep comfort. Commissioned with white-glove setup across all Tier 1 cities in India.',
    canonicalSlug: '/sofas/the-avora',
    keywords: {
      primary: [
        'luxury modular sofa india',
        'bespoke modular sofa delhi ncr',
        'luxury lounge sofa mumbai',
        'designer modular sofa bengaluru',
        'premium modular couch hyderabad',
        'contemporary low profile sofa pune',
        'modular living room sofa chennai',
        'bespoke sectional sofa kolkata',
        'luxury villa modular sofa ahmedabad',
      ],
      secondary: [
        'luxury living room modular sofa',
        'contemporary luxury furniture india',
        'custom sofa makers tier 1 india',
        'designer modular sofa with rounded arms',
        'premium furniture stores india',
        'italian design inspired modular sofa',
        'european design low profile sofa',
      ],
      longTail: [
        'low profile modular lounge sofa with sculpted rounded arms',
        'bespoke contemporary sofa with discreet sculptural feet',
        'custom luxury modular sofa for penthouse living room mumbai',
        'deep comfort lounge sofa made in india with white glove delivery',
        'modular curved lounge seating for modern apartments and villas',
      ],
      geo: [
        'Delhi NCR (Gurugram, New Delhi & Noida)',
        'Mumbai (South Mumbai, Worli & Bandra)',
        'Bengaluru (Indiranagar, Lavelle Road & Whitefield)',
        'Hyderabad (Jubilee Hills & Banjara Hills)',
        'Chennai (Boat Club & Poes Garden)',
        'Pune (Koregaon Park & Kalyani Nagar)',
        'Kolkata (Alipore & Ballygunge)',
        'Ahmedabad (Ambli Road & Sindhu Bhavan Road)',
      ],
    },
    openGraph: {
      title: 'The Avora — Bespoke Luxury Modular Sofa | House Of Form',
      description:
        'Softness, given form. A low-profile modular lounge sofa with sculpted rounded arms, deep seating, and continuous body. Commissioned across all Tier 1 Indian cities.',
      type: 'product',
      imageAlt: 'The Avora Low-Profile Modular Lounge Sofa in Textured Bouclé',
    },
    twitterCard: {
      title: 'The Avora — Bespoke Modular Lounge Sofa | House Of Form',
      description:
        'Softness, given form. Low-profile silhouette with sculpted rounded arms and continuous upholstered body for Tier 1 Indian residences.',
    },
    structuredData: {
      priceRange: '₹1,95,000 – ₹3,45,000',
      availability: 'https://schema.org/PreOrder',
      itemCondition: 'https://schema.org/NewCondition',
    },
  },
};

/**
 * Builds a unified comma-separated keyword string for search engines from
 * the four distinct keyword architecture buckets.
 */
export function compileKeywordString(keywords: ProductSEOConfig['keywords']): string {
  const all = [
    ...keywords.primary,
    ...keywords.secondary,
    ...keywords.longTail,
    ...keywords.geo,
  ];
  const seen = new Set<string>();
  const result: string[] = [];
  for (const kw of all) {
    const lower = kw.toLowerCase().trim();
    if (!seen.has(lower) && lower.length > 0) {
      seen.add(lower);
      result.push(kw.trim());
    }
  }
  return result.join(', ');
}

/**
 * Generates valid Schema.org JSON-LD Product object for Google Rich Results,
 * fully mapped with areaServed across all 8 Tier 1 Indian cities.
 */
export function generateProductSchema(
  config: ProductSEOConfig,
  heroImage: string,
  variants: Array<{
    sku: string;
    name: string;
    basePrice: number;
    dimensions?: { widthCm: number; depthCm: number; heightCm: number };
  }>
) {
  const minPrice = variants.length > 0 ? Math.min(...variants.map((v) => v.basePrice)) : 195000;
  const maxPrice = variants.length > 0 ? Math.max(...variants.map((v) => v.basePrice)) : 345000;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: config.productName,
    alternateName: config.altGeoTitle,
    description: config.metaDescription,
    image: heroImage,
    sku: config.sku,
    mpn: config.productCode,
    category: config.category,
    brand: {
      '@type': 'Brand',
      name: 'House Of Form',
      logo: 'https://houseofform.in/logo.png',
      slogan: 'Italian Design. Bespoke Craftsmanship. Made in India.',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'House Of Form',
      url: SITE_BASE_URL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Gurugram',
        addressRegion: 'Haryana',
        addressCountry: 'IN',
      },
      areaServed: TIER_1_INDIAN_CITIES.map((c) => ({
        '@type': 'City',
        name: c.shortName,
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: c.state,
        },
      })),
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: minPrice,
      highPrice: maxPrice,
      offerCount: variants.length,
      availability: config.structuredData.availability,
      itemCondition: config.structuredData.itemCondition,
      url: `${SITE_BASE_URL}${config.canonicalSlug}`,
      seller: {
        '@type': 'Organization',
        name: 'House Of Form',
        areaServed: [
          'Delhi NCR',
          'Mumbai',
          'Bengaluru',
          'Hyderabad',
          'Chennai',
          'Pune',
          'Kolkata',
          'Ahmedabad',
          'India',
        ],
      },
    },
    hasVariant: variants.map((v) => ({
      '@type': 'ProductModel',
      name: `${config.productName} — ${v.name}`,
      sku: v.sku,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: v.basePrice,
        availability: 'https://schema.org/PreOrder',
        eligibleRegion: TIER_1_INDIAN_CITIES.map((city) => ({
          '@type': 'Place',
          name: city.shortName,
        })),
      },
      additionalProperty: v.dimensions
        ? [
            {
              '@type': 'PropertyValue',
              name: 'Width',
              value: `${v.dimensions.widthCm} cm`,
            },
            {
              '@type': 'PropertyValue',
              name: 'Depth',
              value: `${v.dimensions.depthCm} cm`,
            },
            {
              '@type': 'PropertyValue',
              name: 'Height',
              value: `${v.dimensions.heightCm} cm`,
            },
          ]
        : [],
    })),
  };
}

/**
 * Generates Schema.org CollectionPage / ItemList for the overall catalogue,
 * declaring nationwide Tier-1 service coverage.
 */
export function generateCollectionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'House Of Form — Luxury Lounge Sofa Collection (Tier 1 Metros India)',
    description:
      'Curated contemporary European lounge sofas crafted in India with white-glove commissioning across Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata & Ahmedabad.',
    url: `${SITE_BASE_URL}/collection`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: Object.values(PRODUCT_SEO_REGISTRY).map((prod, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: prod.productName,
        url: `${SITE_BASE_URL}${prod.canonicalSlug}`,
        description: prod.metaDescription,
      })),
    },
  };
}

