/**
 * House Of Form — Architectural Projects Portfolio Data
 * Showcasing bespoke furniture installations across India's Tier 1 cities.
 */

import { ArchitecturalProject } from '../types';

export const ARCHITECTURAL_PROJECTS: ArchitecturalProject[] = [
  {
    id: 'proj-camellias-dlf5',
    title: 'The Camellias Sky Penthouse',
    subtitle: 'Expansive Double-Height Formal Salon',
    location: 'Golf Course Road, DLF Phase 5',
    city: 'Gurugram',
    state: 'Delhi NCR',
    year: '2025',
    typology: 'Penthouse',
    architect: 'Studio Lotus & House Of Form Atelier',
    interiorDesign: 'Atelier HOF Private Client Division',
    featuredProduct: 'The Velora',
    featuredProductId: 'HOF-SF-VLR-001',
    furnitureCommissioned: [
      'The Velora 4-Seater (320 cm Custom Extended) in Bouclé Avorio',
      'Dual Velora Uno Swivel Lounge Chairs in Canaletto Walnut & Brushed Brass',
      'Integrated Travertine Low Center Platform',
    ],
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85',
    ],
    narrative:
      'Commissioned for an 8,500 sq.ft penthouse overlooking the Aravalli hills, this formal reception salon required a central sculptural presence that could hold tension against 20-foot glass curtain walls. The Velora was engineered with a custom 320 cm extended radius in Italian Bouclé Avorio, flanked by solid Canaletto Walnut recessed plinths. Hand-hoisted via a coordinated service crane and assembled in-room by the New Delhi NCR white-glove team.',
    architectQuote: {
      quote:
        'Standard imported European catalogues gave us 260 cm maximums and a 6-month delay. House Of Form engineered a 3.2m continuous curve in 3 weeks that fits the architectural scale flawlessly.',
      author: 'A. Singhal',
      role: 'Principal Architect, Studio Lotus Partner',
    },
    specifications: {
      carpetArea: '8,500 sq. ft',
      curatedPalette: 'Bouclé Avorio, Canaletto Walnut, Brushed Brass',
      leadTimeDelivered: '24 Working Days',
      customModifications: '+40 cm width extension, reinforced high-tensile internal chassis, crane hoist delivery',
    },
  },
  {
    id: 'proj-worli-seaface',
    title: 'Worli Sea Face Modernist Duplex',
    subtitle: 'Minimalist Coastal Horizon Residence',
    location: 'Worli Sea Face, South Mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    year: '2025',
    typology: 'Modernist Duplex',
    architect: 'Morphogenesis / Private Commission',
    interiorDesign: 'House Of Form Design Liaison',
    featuredProduct: 'The Elyra',
    featuredProductId: 'HOF-SF-ELY-002',
    furnitureCommissioned: [
      'The Elyra Asymmetric Lounge Sofa (Left Arm, Right Table) in Sabbia Calda Linen',
      'Integrated Natural Smoked Oak Occasional Surface with Concealed Qi Charging',
      'Monolithic Belgian Linen Ottomans',
    ],
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    ],
    narrative:
      'Framing panoramic Arabian Sea sunsets, this open-plan modernist duplex in South Mumbai demanded furniture that embraced the horizon rather than obstructing it. The low horizontal profile of The Elyra paired with a natural Smoked Oak cantilevered plinth created a tranquil salon where seating and surface merge into a single sculptural gesture. Custom maritime anti-humidity fabric treatment applied at the atelier.',
    architectQuote: {
      quote:
        'The integrated timber occasional table eliminated the need for side tables, keeping sightlines to the sea completely unobstructed.',
      author: 'Rohit Merchant',
      role: 'Lead Interior Architect, Mumbai',
    },
    specifications: {
      carpetArea: '5,200 sq. ft',
      curatedPalette: 'Sabbia Calda Textured Linen, Natural Smoked Oak, Matte Blackened Bronze',
      leadTimeDelivered: '21 Working Days',
      customModifications: 'Maritime salt-mist resistant fabric coating, low 41 cm seat height',
    },
  },
  {
    id: 'proj-jubilee-hills',
    title: 'Jubilee Hills Sanctuary Villa',
    subtitle: 'Courtyard Pavilion for Art Collectors',
    location: 'Road No. 36, Jubilee Hills',
    city: 'Hyderabad',
    state: 'Telangana',
    year: '2024',
    typology: 'Luxury Villa',
    architect: 'Khosla Associates Collaborator',
    interiorDesign: 'Studio Deccan & House Of Form',
    featuredProduct: 'The Avora',
    featuredProductId: 'HOF-SF-AVR-003',
    furnitureCommissioned: [
      'The Avora Sculptural Curved 3-Seater in Terracotta Antica Chenille',
      'The Velora Uno Accent Chairs in Bouclé Avorio',
      'Solid Fluted Canaletto Walnut Credenza',
    ],
    heroImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=1200&q=85',
    ],
    narrative:
      'Set against rough-hewn Deccan granite walls and sheltered internal courtyards, this Jubilee Hills villa required an organic, grounding aesthetic. The Avora in Terracotta Antica chenille echoes the earthy warm tones of Indian architectural stone, softened with channel-stitched goose micro-down cushioning. Delivered via dedicated air-ride express transit from New Delhi to Hyderabad.',
    architectQuote: {
      quote:
        'The tactility of the chenille and the sweeping curve brought warmth to our monumental stone pavilion. It is the talking point of every gathering.',
      author: 'P. Reddy',
      role: 'Homeowner & Contemporary Art Collector',
    },
    specifications: {
      carpetArea: '11,000 sq. ft',
      curatedPalette: 'Terracotta Antica, Fluted Walnut, Champagne Bronze',
      leadTimeDelivered: '26 Working Days',
      customModifications: 'Custom 290 cm curvature, dual-density memory foam core with 30% feather top',
    },
  },
  {
    id: 'proj-lavelle-road',
    title: 'Lavelle Road Modernist Residence',
    subtitle: 'Bespoke Conversational Salon',
    location: 'Lavelle Road, Central District',
    city: 'Bengaluru',
    state: 'Karnataka',
    year: '2025',
    typology: 'Penthouse',
    architect: 'Cadence Architects Liaison',
    interiorDesign: 'Atelier House Of Form',
    featuredProduct: 'The Velora',
    featuredProductId: 'HOF-SF-VLR-001',
    furnitureCommissioned: [
      'Dual Velora Due (2-Seaters) Facing Conversational Layout in Warm Sand Weave',
      'Low Travertine Plinth Tables with Brass Shadow Inset',
    ],
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    ],
    narrative:
      'In a lush, high-ceilinged residence nestled amidst Bengaluru’s rain trees, the client requested a salon setting designed for intimate literary conversations. Instead of a single monolithic couch, twin Velora Due 2-seaters were arranged facing each other across an organic travertine low slab, fostering immediate eye contact and warmth.',
    architectQuote: {
      quote:
        'The proportions are so gentle and resolved. Guests settle in and do not want to leave.',
      author: 'Vikram Sundaram',
      role: 'Architect & Design Director, Bengaluru',
    },
    specifications: {
      carpetArea: '4,800 sq. ft',
      curatedPalette: 'Warm Sand Weave, Raw Honed Travertine, Smoked Oak',
      leadTimeDelivered: '20 Working Days',
      customModifications: 'Matched pair geometry, high-resilience ergonomic pitch',
    },
  },
  {
    id: 'proj-ambli-road',
    title: 'Ambli Road Brutalist Bungalow',
    subtitle: 'Tactile Warmth in Cast Concrete',
    location: 'Sindhu Bhavan & Ambli Road',
    city: 'Ahmedabad',
    state: 'Gujarat',
    year: '2024',
    typology: 'Luxury Villa',
    architect: 'HCP Design Collaborator / Private Residence',
    interiorDesign: 'House Of Form Bespoke Team',
    featuredProduct: 'The Elyra',
    featuredProductId: 'HOF-SF-ELY-002',
    furnitureCommissioned: [
      'The Elyra 3-Seater in Scudo Resiliente Chalk Bone',
      'Solid Smoked Oak Plinth Base with Continuous Reveal',
      'Custom Deep-Fluted Media Monolith',
    ],
    heroImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85',
    ],
    narrative:
      'Ahmedabad’s legacy of exposed concrete and Corbusian light corridors finds its counterpart in this bespoke commission. The architectural clarity of The Elyra in hydrophobic chalk performance weave provides a serene sanctuary against the intense Gujarat sunlight, with deep timber grain anchoring the composition.',
    architectQuote: {
      quote:
        'The quality of European joinery matched with Indian climate resilience makes House Of Form our first recommendation for contemporary estates.',
      author: 'Nehal Patel',
      role: 'Architectural Consultant, Ahmedabad',
    },
    specifications: {
      carpetArea: '9,200 sq. ft',
      curatedPalette: 'Chalk Bone Performance Weave, European Smoked Oak',
      leadTimeDelivered: '22 Working Days',
      customModifications: 'Hydrophobic UV-stabilized nanocoating, reinforced 10-year Sal chassis',
    },
  },
  {
    id: 'proj-alipore-estate',
    title: 'Alipore Heritage Modern Estate',
    subtitle: 'Contemporary Comfort in Heritage Architecture',
    location: 'Queens Park, Alipore',
    city: 'Kolkata',
    state: 'West Bengal',
    year: '2025',
    typology: 'Luxury Villa',
    architect: 'Heritage Atelier & HOF',
    interiorDesign: 'Private Client Commission',
    featuredProduct: 'The Velora',
    featuredProductId: 'HOF-SF-VLR-001',
    furnitureCommissioned: [
      'The Velora 3-Seater in Italian Caramel Aniline Leather',
      'Solid Teak Plinth Reveal',
      'Custom Bouclé Poufs',
    ],
    heroImage: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1200&q=85',
    ],
    narrative:
      'High 16-foot ceilings, period molding, and Burma teak parquetry in historic Alipore presented a unique spatial challenge: how to introduce contemporary European comfort without clashing with classical pedigree. The Velora’s quiet organic contours in hand-rubbed aniline leather bridges century-old craftsmanship with modern living.',
    architectQuote: {
      quote:
        'It honours the weight of the room while bringing effortless, cloud-like contemporary comfort.',
      author: 'S. Banerjee',
      role: 'Conservation Architect & Collector, Kolkata',
    },
    specifications: {
      carpetArea: '7,400 sq. ft',
      curatedPalette: 'Italian Caramel Aniline Leather, Seasoned Teak, Aged Brass',
      leadTimeDelivered: '25 Working Days',
      customModifications: 'Full-grain Italian aniline hide selection with bespoke stitch cadence',
    },
  },
];
