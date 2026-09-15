/**
 * House Of Form — Design Journal Articles Data
 * Architectural essays, craftsmanship deep dives, and living room curation guides.
 */

import { JournalArticle } from '../types';

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'art-01-geometry-of-curves',
    slug: 'geometry-of-curves-living-rooms',
    title: 'The Geometry of Curves: Why Living Rooms Are Leaving Rigid Angles Behind',
    subtitle: 'An Architectural Essay on Ergonomics, Flow, and Tactile Sanctuary',
    category: 'Design Philosophy',
    author: {
      name: 'Marco Bellini',
      role: 'Design Director, Milan & New Delhi',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    date: 'February 2026',
    readTime: '6 min read',
    heroImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=85',
    excerpt:
      'For decades, high-end residential interiors were governed by the rectangular block sofa. Today, European contemporary architecture has pivoted definitively toward soft curvature. Here is why.',
    content: [
      {
        sectionTitle: 'The Rigidity of the Modernist Box',
        paragraphs: [
          'For nearly thirty years, the luxury living room was dominated by the monolithic rectangular sofa. Sharp 90-degree corners, deep linear chaises, and boxy profiles were treated as the default vocabulary of modernism.',
          'Yet anyone who has lived with a rigid box sofa knows its unspoken limitations: it enforces rigid seating orientations, blocks sightlines in open-plan spaces, and creates dead corners that feel cold rather than welcoming.',
        ],
        pullQuote:
          'A curve is not a decorative indulgence; it is the most natural geometric path for human dialogue.',
      },
      {
        sectionTitle: 'Organic Ergonomics and Spatial Fluidity',
        paragraphs: [
          'When people gather, they never naturally sit in a straight line. They pivot inward. They form an arc. The curved sofa honors this primal instinct.',
          'In pieces like The Velora, the continuous wraparound backrest cradles the posture without requiring aggressive scatter cushions. Whether you are leaning back for an intimate evening aperitif or sitting upright during an architectural presentation, the geometry supports the body organically.',
          'Furthermore, in today’s open-plan residences across Delhi NCR, Mumbai, and Bengaluru, a curved sofa acts as an organic island. It does not divide a room like a wall; it gently circulates movement around it.',
        ],
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
        caption: 'The Velora 4-Seater in Bouclé Avorio: Organic geometry harmonizes high-rise architecture.',
      },
      {
        sectionTitle: 'Sculptural Presence From 360 Degrees',
        paragraphs: [
          'Most conventional sofas are designed to be pushed against a wall; their backs are flat, unconsidered surfaces. A true architectural sofa, however, is meant to be floated in the center of the room.',
          'Every contour of the back, arm transition, and recessed plinth reveal is sculpted to be beautiful from all 360 degrees. As you walk through an entrance gallery, the sofa greets you with a sculpted horizon rather than a sharp block.',
        ],
      },
    ],
    relatedProductIds: ['HOF-SF-VLR-001', 'HOF-SF-AVR-003'],
    tags: ['Curved Sofas', 'Italian Design', 'Living Room Architecture', 'Ergonomics'],
  },
  {
    id: 'art-02-true-cost-imported-luxury',
    slug: 'true-cost-imported-furniture-india',
    title: 'The True Cost of Imported Italian Luxury in India',
    subtitle: 'Tariffs, 24-Week Delays, Rigid Sizing, and The In-Country Renaissance',
    category: 'Industry Perspectives',
    author: {
      name: 'Raghav Sharma',
      role: 'Co-Founder & Head of Manufacture, New Delhi',
    },
    date: 'January 2026',
    readTime: '7 min read',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    excerpt:
      'Buying European designer furniture in India has historically meant paying 40% in import overheads and waiting half a year for a piece that cannot be customized. It is time to rethink luxury.',
    content: [
      {
        sectionTitle: 'The Arithmetic of the Import Invoice',
        paragraphs: [
          'When an Indian client purchases an imported sofa from a luxury showroom in Milan or Mumbai, the transaction begins with immense promise. But look beneath the surface:',
          'Upwards of 35% to 45% of the final invoice is absorbed by international marine freight, port handling, customs duties, insurance, and multi-tier intermediary brokerages. You are paying European retail prices magnified by logistical friction.',
        ],
        pullQuote:
          'Luxury is no longer about where a shipping container originated; it is about who holds accountability when the piece arrives in your home.',
      },
      {
        sectionTitle: 'The Tyranny of the Fixed Catalogue Size',
        paragraphs: [
          'Imported catalogues are engineered for European domestic room footprints. When an architect in Gurugram needs a sofa to be 315 cm to center perfectly between two structural columns, an imported brand will politely refuse: it is 280 cm or 350 cm, take it or leave it.',
          'And if the sofa arrives and fails to fit into the service elevator shaft of a 40th-floor apartment in Worli, the client is left stranded with a piece that cannot be hoisted or returned.',
          'At House Of Form, we build in our dedicated New Delhi NCR workshop. Every single piece is made-to-order down to the millimeter. If you need +15 cm width, a 42 cm seat height for elderly parents, or modular assembly for elevator clearance, we engineer it without penalty.',
        ],
      },
      {
        sectionTitle: 'The Service Vacuum',
        paragraphs: [
          'Furniture is living architecture. Over years of daily family use, fabrics will absorb spills, cushions may need seasonal re-fluffing, or a plinth might need re-polishing.',
          'With an overseas import, warranty claims require months of email chains and overseas shipping. With House Of Form, our white-glove atelier team arrives at your door in Delhi, Mumbai, or Bengaluru within 48 hours. That is real generational luxury.',
        ],
      },
    ],
    relatedProductIds: ['HOF-SF-VLR-001', 'HOF-SF-ELY-002'],
    tags: ['Imported Luxury', 'Crafted In India', 'Bespoke Manufacture', 'Economics'],
  },
  {
    id: 'art-03-tactile-materials-indian-climate',
    slug: 'tactile-materials-boucle-linen-performance-india',
    title: 'The Tactile Sanctuary: Choosing Fabrics for the Indian Climate',
    subtitle: 'From Virgin Wool Bouclés to Solution-Dyed Performance Weaves',
    category: 'Material Science',
    author: {
      name: 'Elena Rostova',
      role: 'Textile Curator & Material Specialist',
    },
    date: 'February 2026',
    readTime: '5 min read',
    heroImage: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=1600&q=85',
    excerpt:
      'India’s climate demands textiles that balance supreme European handfeel with high Martindale abrasion cycles, breathability, and stain resilience. Here is our curated guide.',
    content: [
      {
        sectionTitle: 'The Bouclé Renaissance',
        paragraphs: [
          'Few fabrics have captured the architectural imagination like Bouclé. Originating in French and Italian ateliers in the 1950s, its looped yarn structure creates a deep micro-shadow that brings curved furniture to life.',
          'However, low-grade bouclé pills rapidly and traps dust in Indian climates. Our Bouclé Avorio uses 48% long-staple virgin wool blended with technical polyamides, achieving 55,000 Martindale abrasion cycles while remaining remarkably breathable during humid monsoon months.',
        ],
      },
      {
        sectionTitle: 'Textured Linens and Climate Breathing',
        paragraphs: [
          'Natural Belgian and Italian linen remains the benchmark for tactile comfort. Linen fibers are hollow, naturally wicking away ambient humidity and staying cool to the touch.',
          'In Sabbia Calda, we blend 60% natural linen with cotton and viscose to prevent the excessive creasing of pure linen while retaining its lived-in, relaxed organic texture.',
        ],
        pullQuote:
          'A textile must not only look sublime on day one; it must age with dignity through thousands of evening gatherings.',
      },
      {
        sectionTitle: 'The Rise of Stealth Performance Weaves',
        paragraphs: [
          'For homes with young children, beloved pets, or frequent banquet entertaining, our Scudo Resiliente performance weave offers 100,000 Martindale cycles with an invisible hydrophobic nanocoating.',
          'Red wine, coffee, or olive oil beads up on the surface and wipes clean with plain distilled water—without the stiff, plasticky handfeel of legacy commercial fabrics.',
        ],
      },
    ],
    relatedProductIds: ['HOF-SF-VLR-001', 'HOF-SF-ELY-002', 'HOF-SF-AVR-003'],
    tags: ['Bouclé', 'Linen', 'Performance Fabrics', 'Material Atelier'],
  },
  {
    id: 'art-04-architecture-of-elyra-asymmetry',
    slug: 'architecture-behind-elyra-asymmetry',
    title: 'Architecture in Furniture: The Design Philosophy of The Elyra',
    subtitle: 'Where Seating, Support, and Surface Merge Into One Continuous Form',
    category: 'Craftsmanship',
    author: {
      name: 'Marco Bellini',
      role: 'Design Director, Milan & New Delhi',
    },
    date: 'January 2026',
    readTime: '5 min read',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
    excerpt:
      'Why add a side table next to a sofa when you can architect it directly into the plinth? Inside the engineering and sculpted asymmetry of The Elyra.',
    content: [
      {
        sectionTitle: 'Form With a Purpose',
        paragraphs: [
          'Too often, furniture collections treat occasional tables as afterthoughts—separate objects bought from different stores that crowd the living room perimeter.',
          'With The Elyra, we posed a fundamental question: What if the sofa and its resting surface were born from a single continuous architectural gesture?',
        ],
      },
      {
        sectionTitle: 'The Asymmetric Tension',
        paragraphs: [
          'Symmetry can feel static. Asymmetry, when balanced with mathematical precision, introduces dynamic energy to a room.',
          'On the left, a sculptural upholstered arm welcomes deep lounging; on the right, the seating dissolves into a cantilevered timber platform in American Walnut or European Smoked Oak. The continuous wooden plinth ties the composition together into an anchored architectural monolith.',
        ],
        pullQuote:
          'When furniture becomes part of the room’s architecture, clutter disappears naturally.',
      },
    ],
    relatedProductIds: ['HOF-SF-ELY-002'],
    tags: ['Asymmetric Design', 'The Elyra', 'Timber Plinth', 'Integrated Table'],
  },
  {
    id: 'art-05-proportioning-penthouses-tier1',
    slug: 'proportioning-luxury-sofa-penthouses-india',
    title: 'Proportioning a Statement Sofa for Indian High-Rise Penthouses',
    subtitle: 'Ceiling Ratios, Sightlines, and Elevator Shaft Logistics in Tier 1 Metros',
    category: 'Interior Architecture',
    author: {
      name: 'Raghav Sharma',
      role: 'Co-Founder & Head of Manufacture',
    },
    date: 'February 2026',
    readTime: '6 min read',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
    excerpt:
      'From 18-foot ceilings in Gurugram to sea-facing balconies in South Mumbai, here is the architectural methodology for sizing a statement sofa correctly.',
    content: [
      {
        sectionTitle: 'The Ceiling Height Trap',
        paragraphs: [
          'In ultra-luxury penthouses at The Camellias (Gurugram) or Lodha Altamount (Mumbai), living room ceiling heights frequently reach 12 to 18 feet. Standard consumer sofas look tiny and lost against these proportions.',
          'To anchor a voluminous double-height space, a sofa requires horizontal continuity (280–340 cm width) and a low-slung, grounded stance (74–76 cm overall height). This prevents the furniture from competing with panoramic views while establishing an inviting human-scaled sanctuary beneath high ceilings.',
        ],
      },
      {
        sectionTitle: 'Service Elevator and Hoisting Realities',
        paragraphs: [
          'Every week, luxury homeowners in Mumbai, Bengaluru, and Delhi NCR face a crisis: their imported 3-meter sofa cannot fit into the building’s passenger or service lift.',
          'At House Of Form, our engineering team conducts a pre-dispatch access clearance audit. When required, we manufacture our hardwood chassis in precision modular sections with concealed interior steel couplers, allowing the sofa to navigate narrow staircases and reassemble seamlessly in-room.',
        ],
      },
    ],
    relatedProductIds: ['HOF-SF-VLR-001', 'HOF-SF-ELY-002', 'HOF-SF-AVR-003'],
    tags: ['Penthouse Design', 'Tier 1 Cities', 'Elevator Logistics', 'Proportions'],
  },
  {
    id: 'art-06-inside-the-atelier-sal-wood-joinery',
    slug: 'inside-the-atelier-hardwood-joinery-craft',
    title: 'Inside the Atelier: From Seasoned Hardwood to Micro-Down Envelopes',
    subtitle: 'The 10-Year Generational Chassis Engineered in New Delhi NCR',
    category: 'Craftsmanship',
    author: {
      name: 'Master Joiner Balvinder Singh',
      role: 'Atelier Workshop Director',
    },
    date: 'January 2026',
    readTime: '8 min read',
    heroImage: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1600&q=85',
    excerpt:
      'What lies beneath the bouclé? A deep dive into our kiln-dried Sal timber frames, Pirelli webbing matrices, and hand-stitched hypoallergenic feather channels.',
    content: [
      {
        sectionTitle: 'The Skeletal Foundation',
        paragraphs: [
          'The greatest luxury in furniture is the part you never see. While mass-manufactured sofas rely on low-density particle board and elastic bands that sag within three years, every House Of Form sofa begins with kiln-dried seasoned hardwood (Sal and structural Birch).',
          'Each joint is mortise-and-tenon joined, glued with industrial resin, and reinforced with corner blocks. This rigidity is what allows our curved sofas to span over 3 meters without center legs or bowing.',
        ],
      },
      {
        sectionTitle: 'Suspension and Dual-Density Memory Foam',
        paragraphs: [
          'Over the hardwood frame, we weave authentic Italian Pirelli 50mm rubberized webbing at 75mm grid intervals. This distributes body weight with graduated compliance.',
          'The cushioning is composed of high-resilience polyurethane memory foam (38–42 kg/m³ density) enveloped in channel-stitched hypoallergenic micro-down. The result is an immediate feather-soft embrace followed by firm, unyielding orthopedic support.',
        ],
      },
    ],
    relatedProductIds: ['HOF-SF-VLR-001', 'HOF-SF-ELY-002'],
    tags: ['Workshop Tour', 'Hardwood Joinery', 'Pirelli Webbing', '10-Year Warranty'],
  },
];
