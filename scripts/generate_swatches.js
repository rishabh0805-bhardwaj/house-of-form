import fs from 'fs';
import path from 'path';

const swatches = [
  {
    id: 'canyon-canvas',
    name: 'Canyon Canvas',
    tone: 'Canvas',
    family: 'Warm Whites & Creams',
    hex: '#DDD4C2',
    highlight: '#E9E2D4',
    shadow: '#C5BAA5',
    grainColor: '#C0B39D',
    desc: 'Luminous alabaster cream with soft warm undertones. Lifts architectural spaces with soft, understated light.',
    spec: 'Full Grain Semi-Aniline · 1.4–1.6mm · Wax Protective Finish',
  },
  {
    id: 'canyon-sandstone',
    name: 'Canyon Sandstone',
    tone: 'Sandstone',
    family: 'Warm Neutrals & Greige',
    hex: '#B9AC98',
    highlight: '#C7BAA7',
    shadow: '#A39580',
    grainColor: '#958772',
    desc: 'Subtle desert sandstone with a calm organic grain. A tranquil, versatile architectural neutral.',
    spec: 'Full Grain Semi-Aniline · 1.4–1.6mm · Supple Handfeel',
  },
  {
    id: 'canyon-wheat',
    name: 'Canyon Wheat',
    tone: 'Wheat',
    family: 'Warm Ambers & Golds',
    hex: '#C2A572',
    highlight: '#CEB482',
    shadow: '#A88D5A',
    grainColor: '#9C814F',
    desc: 'Sun-cured golden amber and blonde wheat. Radiates warmth across timber and travertine interiors.',
    spec: 'Full Grain Semi-Aniline · 1.4–1.6mm · Natural Pull-Up',
  },
  {
    id: 'canyon-toffee',
    name: 'Canyon Toffee',
    tone: 'Toffee',
    family: 'Warm Ambers & Golds',
    hex: '#9A6938',
    highlight: '#AB7A47',
    shadow: '#825325',
    grainColor: '#72461D',
    desc: 'Rich honeyed caramel and warm toffee with striking pull-up depth that reveals lighter golden undertones when tensioned.',
    spec: 'Full Grain Semi-Aniline · 1.4–1.6mm · Oil-Infused Wax Finish',
  },
  {
    id: 'canyon-tan',
    name: 'Canyon Tan',
    tone: 'Tan',
    family: 'Classic Tans & Cognacs',
    hex: '#8C6345',
    highlight: '#9C7253',
    shadow: '#754E32',
    grainColor: '#674127',
    desc: 'Classic heritage saddle tan. Warm, timeless, and calibrated to patinate into an heirloom finish over decades.',
    spec: 'Full Grain Semi-Aniline · 1.4–1.6mm · Patinating Character',
  },
  {
    id: 'canyon-saddle',
    name: 'Canyon Saddle',
    tone: 'Saddle',
    family: 'Classic Tans & Cognacs',
    hex: '#7E482D',
    highlight: '#90573A',
    shadow: '#67361D',
    grainColor: '#592C15',
    desc: 'Burnished reddish saddle and warm terracotta cognac. The definitive Italian-inspired salon leather.',
    spec: 'Full Grain Semi-Aniline · 1.4–1.6mm · Warm Cognac Sheen',
  },
  {
    id: 'canyon-russet',
    name: 'Canyon Russet',
    tone: 'Russet',
    family: 'Earthy Terracotta & Browns',
    hex: '#583D33',
    highlight: '#684A3F',
    shadow: '#442C23',
    grainColor: '#3A231B',
    desc: 'Deep auburn-tinted russet and spiced cocoa. Sits handsomely alongside dark walnut and bronze accents.',
    spec: 'Full Grain Semi-Aniline · 1.4–1.6mm · Deep Natural Pull-Up',
  },
  {
    id: 'canyon-chestnut',
    name: 'Canyon Chestnut',
    tone: 'Chestnut',
    family: 'Earthy Terracotta & Browns',
    hex: '#553928',
    highlight: '#644633',
    shadow: '#412818',
    grainColor: '#361F11',
    desc: 'Robust warm roasted chestnut brown. Generous natural grain with deep organic warmth.',
    spec: 'Full Grain Semi-Aniline · 1.4–1.6mm · Organic Pebble Grain',
  },
  {
    id: 'canyon-walnut',
    name: 'Canyon Walnut',
    tone: 'Walnut',
    family: 'Deep Chocolates & Espressos',
    hex: '#443831',
    highlight: '#53453D',
    shadow: '#312721',
    grainColor: '#281F1A',
    desc: 'Velvety dark chocolate walnut. Deep, rich, and tailored for moody, architectural living environments.',
    spec: 'Full Grain Semi-Aniline · 1.4–1.6mm · Deep Low-Sheen Satin',
  },
  {
    id: 'canyon-clove',
    name: 'Canyon Clove',
    tone: 'Clove',
    family: 'Warm Neutrals & Greige',
    hex: '#716055',
    highlight: '#806E63',
    shadow: '#5C4C42',
    grainColor: '#4F4037',
    desc: 'Earthy mushroom and warm aromatic clove. A sophisticated bridge between brown, taupe, and mineral grey.',
    spec: 'Full Grain Semi-Aniline · 1.4–1.6mm · Matte Velvety Touch',
  },
  {
    id: 'canyon-baison',
    name: 'Canyon Baison',
    tone: 'Baison',
    family: 'Deep Chocolates & Espressos',
    hex: '#372D28',
    highlight: '#463A34',
    shadow: '#271E1A',
    grainColor: '#1E1612',
    desc: 'Deep bison espresso and smoked dark roast. An exceptionally dark, grounding leather with quiet authority.',
    spec: 'Full Grain Semi-Aniline · 1.4–1.6mm · Smoked Dark Roast Hand',
  },
  {
    id: 'canyon-bordeaux',
    name: 'Canyon Bordeaux',
    tone: 'Bordeaux',
    family: 'Noble Statement Colors',
    hex: '#4E2F33',
    highlight: '#5F3B40',
    shadow: '#3C2024',
    grainColor: '#30161A',
    desc: 'Decadent vintage wine and dark oxblood bordeaux. Subtle ruby reflections bring dramatic opulence to the room.',
    spec: 'Full Grain Semi-Aniline · 1.4–1.6mm · Vintage Oxblood Pull-Up',
  },
  {
    id: 'canyon-cypress',
    name: 'Canyon Cypress',
    tone: 'Cypress',
    family: 'Noble Statement Colors',
    hex: '#424843',
    highlight: '#505851',
    shadow: '#323733',
    grainColor: '#272B28',
    desc: 'Deep architectural cypress and muted woodland olive. A refined botanical neutral that pairs with natural timber.',
    spec: 'Full Grain Semi-Aniline · 1.4–1.6mm · Forest Mineral Dye',
  },
  {
    id: 'canyon-ink',
    name: 'Canyon Ink',
    tone: 'Ink',
    family: 'Architectural Darks & Charcoals',
    hex: '#232930',
    highlight: '#2F363F',
    shadow: '#161B21',
    grainColor: '#101418',
    desc: 'Moody midnight ink with deep indigo-black undertones. Imparts European gallery elegance to low-profile seating.',
    spec: 'Full Grain Semi-Aniline · 1.4–1.6mm · Indigo-Midnight Cast',
  },
  {
    id: 'canyon-dove',
    name: 'Canyon Dove',
    tone: 'Dove',
    family: 'Cool Mineral Stones',
    hex: '#5B5E61',
    highlight: '#6A6D71',
    shadow: '#4A4C4F',
    grainColor: '#3C3E40',
    desc: 'Serene dove grey and weathered limestone. Crisp, modern, and harmonious in concrete or stone spaces.',
    spec: 'Full Grain Semi-Aniline · 1.4–1.6mm · Cool Mineral Tone',
  },
  {
    id: 'canyon-elephant',
    name: 'Canyon Elephant',
    tone: 'Elephant',
    family: 'Warm Neutrals & Greige',
    hex: '#A49C91',
    highlight: '#B3AAA0',
    shadow: '#8F867C',
    grainColor: '#80776E',
    desc: 'Soft elephant greige with warm mineral undertones. An understated, tactile favorite of interior architects.',
    spec: 'Full Grain Semi-Aniline · 1.4–1.6mm · Architectural Greige',
  },
  {
    id: 'canyon-earth',
    name: 'Canyon Earth',
    tone: 'Earth',
    family: 'Architectural Darks & Charcoals',
    hex: '#343639',
    highlight: '#414447',
    shadow: '#252729',
    grainColor: '#1B1C1D',
    desc: 'Anthracite slate and volcanic earth. A softened black with subtle charcoal nuances that preserve form articulation.',
    spec: 'Full Grain Semi-Aniline · 1.4–1.6mm · Anthracite Satin',
  },
  {
    id: 'canyon-onyx',
    name: 'Canyon Onyx',
    tone: 'Onyx',
    family: 'Architectural Darks & Charcoals',
    hex: '#1F2022',
    highlight: '#2A2B2E',
    shadow: '#131415',
    grainColor: '#0A0A0B',
    desc: 'Pure architectural onyx black. Commandingly bold with a subtle matte satin sheen that catches ambient light.',
    spec: 'Full Grain Semi-Aniline · 1.4–1.6mm · Jet Architectural Matte',
  },
];

const targetDir = path.resolve(process.cwd(), 'public/images/swatches/canyon');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

swatches.forEach((s) => {
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <!-- Procedural Leather Grain Texture -->
    <filter id="leatherGrain-${s.id}" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
      <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" seed="42" result="noise" />
      <feColorMatrix type="matrix" values="0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 1 0" in="noise" result="monoNoise"/>
      <feComponentTransfer in="monoNoise" result="contrastNoise">
        <feFuncR type="linear" slope="1.4" intercept="-0.2"/>
        <feFuncG type="linear" slope="1.4" intercept="-0.2"/>
        <feFuncB type="linear" slope="1.4" intercept="-0.2"/>
      </feComponentTransfer>
      <feDiffuseLighting in="contrastNoise" lightingColor="#ffffff" surfaceScale="1.2" result="light">
        <feDistantLight azimuth="125" elevation="55"/>
      </feDiffuseLighting>
      <feBlend mode="multiply" in="SourceGraphic" in2="light" result="textured"/>
    </filter>

    <!-- Natural Leather Curvature & Ambient Roll Highlight -->
    <linearGradient id="lighting-${s.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${s.highlight}" stop-opacity="0.9" />
      <stop offset="45%" stop-color="${s.hex}" stop-opacity="1" />
      <stop offset="75%" stop-color="${s.hex}" stop-opacity="1" />
      <stop offset="100%" stop-color="${s.shadow}" stop-opacity="0.95" />
    </linearGradient>

    <!-- Diagonal Pull-Up Sheen -->
    <linearGradient id="pullUpSheen-${s.id}" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.08" />
      <stop offset="45%" stop-color="#ffffff" stop-opacity="0.14" />
      <stop offset="55%" stop-color="#ffffff" stop-opacity="0.03" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0.15" />
    </linearGradient>

    <!-- Vignette Shadow for Depth -->
    <radialGradient id="vignette-${s.id}" cx="50%" cy="50%" r="70%">
      <stop offset="60%" stop-color="#000000" stop-opacity="0" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0.22" />
    </radialGradient>
  </defs>

  <!-- Base Leather Body with Grain Shader -->
  <rect width="600" height="600" fill="url(#lighting-${s.id})" />
  <rect width="600" height="600" fill="${s.hex}" filter="url(#leatherGrain-${s.id})" opacity="0.82" />
  <rect width="600" height="600" fill="url(#pullUpSheen-${s.id})" />
  <rect width="600" height="600" fill="url(#vignette-${s.id})" />

  <!-- Atelier Perforated / Blind-Debossed Border Accent -->
  <rect x="24" y="24" width="552" height="552" fill="none" stroke="${s.grainColor}" stroke-width="1" stroke-dasharray="6 4" opacity="0.35" />
  <rect x="20" y="20" width="560" height="560" fill="none" stroke="#000000" stroke-width="0.75" opacity="0.15" />

  <!-- Subtle Corner Bracket Accents -->
  <path d="M 40 50 L 50 50 L 50 40" fill="none" stroke="${s.highlight}" stroke-width="1.2" opacity="0.4" />
  <path d="M 560 50 L 550 50 L 550 40" fill="none" stroke="${s.highlight}" stroke-width="1.2" opacity="0.4" />
  <path d="M 40 550 L 50 550 L 50 560" fill="none" stroke="${s.highlight}" stroke-width="1.2" opacity="0.4" />
  <path d="M 560 550 L 550 550 L 550 560" fill="none" stroke="${s.highlight}" stroke-width="1.2" opacity="0.4" />
</svg>`;

  const fileName = `${s.id}.svg`;
  fs.writeFileSync(path.join(targetDir, fileName), svgContent, 'utf-8');
});

console.log(`Generated ${swatches.length} luxury leather swatch SVG assets in public/images/swatches/canyon/`);
