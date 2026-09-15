/**
 * House Of Form — Trade & Architects Partnership Data
 * Resources, BIM/CAD libraries, and trade program specifications.
 */

export interface TradeCadModel {
  id: string;
  productName: string;
  sku: string;
  thumbnail: string;
  formats: string[];
  fileSize: string;
  polygonCount: string;
  description: string;
  downloadUrl: string;
}

export const TRADE_CAD_MODELS: TradeCadModel[] = [
  {
    id: 'cad-vlr-01',
    productName: 'The Velora Curved Lounge Sofa (Full Collection)',
    sku: 'HOF-SF-VLR-001',
    thumbnail: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
    formats: ['.3DS', '.OBJ', '.FBX', '.SKP (SketchUp)', '.RFA (Revit BIM)', '.DWG (2D/3D)'],
    fileSize: '48.2 MB',
    polygonCount: '124,000 Polys (Quad-optimized)',
    description: 'Includes 1, 2, 3, and 4-Seater configurations with high-res 4K PBR textures (Bouclé, Walnut, Brass).',
    downloadUrl: '#cad-velora',
  },
  {
    id: 'cad-ely-02',
    productName: 'The Elyra Asymmetric Lounge Sofa',
    sku: 'HOF-SF-ELY-002',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    formats: ['.3DS', '.OBJ', '.FBX', '.SKP (SketchUp)', '.RFA (Revit BIM)'],
    fileSize: '36.8 MB',
    polygonCount: '98,000 Polys (Clean Topology)',
    description: 'Left-arm and right-arm variants with integrated timber plinth surface and material slots.',
    downloadUrl: '#cad-elyra',
  },
  {
    id: 'cad-avr-03',
    productName: 'The Avora Sculptural Curved Sofa',
    sku: 'HOF-SF-AVR-003',
    thumbnail: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80',
    formats: ['.3DS', '.OBJ', '.FBX', '.SKP', '.DWG'],
    fileSize: '41.5 MB',
    polygonCount: '110,000 Polys',
    description: 'Continuous organic fluid curve with recessed plinth reveal and high-poly upholstery wrinkles.',
    downloadUrl: '#cad-avora',
  },
];

export const TRADE_BENEFITS = [
  {
    id: 'tier-pricing',
    title: 'Tiered Trade Commission & Direct Invoicing',
    description: 'Up to 22% trade concession on all catalogue and custom commissions, with GST-compliant billing directly to your practice or client.',
    badge: 'Financial Advantage',
  },
  {
    id: 'cad-bim',
    title: 'Instant 3D & BIM Asset Suite',
    description: 'Clean-geometry SketchUp, Revit, 3ds Max, and Rhino 3D models with pre-mapped 4K PBR material channels for photorealistic rendering.',
    badge: 'Design Productivity',
  },
  {
    id: 'complimentary-box',
    title: 'Complimentary Material Atelier Swatch Box',
    description: 'Full physical library delivered directly to your architectural office containing 14 fabric cards, 4 wood blocks, and 3 metal chips.',
    badge: 'Studio Tool',
  },
  {
    id: 'millimeter-sizing',
    title: 'Millimeter Dimensional Tailoring',
    description: 'Alter widths, depths, and seat heights to match your exact AutoCAD plans, ensuring flawless alignment between walls and furniture.',
    badge: 'Precision Fit',
  },
  {
    id: 'dedicated-liaison',
    title: 'Dedicated Atelier Project Liaison',
    description: 'One-on-one coordination with our Delhi NCR engineering team, with factory progress photos and milestone dispatch updates.',
    badge: 'Direct Concierge',
  },
  {
    id: 'white-glove-tier1',
    title: 'Pan-India White-Glove Commissioning',
    description: 'Full handling, elevator/crane survey, in-room staging, and post-installation packaging clearance across all 8 Tier 1 cities.',
    badge: 'Zero Client Friction',
  },
];
