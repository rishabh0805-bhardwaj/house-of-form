# House Of Form (HOF)

> **Bespoke Contemporary Furniture House • Milan & New Delhi**  
> European design intelligence synthesized with master Indian artisanal joinery.

---

## 🏛️ Overview

**House Of Form** is a luxury digital storefront and bespoke atelier experience for made-to-order contemporary furniture. Built around the ethos of architectural permanence, refined materiality, and millimeter-precise customization, the application provides an immersive, high-touch consultation and reservation journey.

---

## ✨ Key Features

### 1. Editorial Brand Masthead with One-Time Entrance Animation
- **Hero Move-In Effect**: On first arrival or login per session, the commanding grand masthead glides upward with cubic-bezier easing (`[0.16, 1, 0.3, 1]`) and optical blur resolution.
- **Session Intelligence**: The entrance animation is recorded via `sessionStorage` (`hof_brand_animated`), ensuring an impactful first impression while maintaining friction-free subsequent navigation.
- **Two-Tier Header Architecture**: Features a scroll-reactive primary header strip and a pinned sticky category navigation bar.

### 2. The Velora — Flagship Product Master Sheet & Technical Dossier
- **Exclusive Flagship Catalogue**: Centered on **Product 01 — The Velora** (`HOF-SF-VLR-001`), an Italian-inspired curved lounge sofa synthesized with bespoke Indian craftsmanship.
- **Architectural Studio vs. Master Dossier Modes**: Toggle between an interactive studio view (360° perspective viewpoints, configuration swatches, CAD elevation diagrams) and the comprehensive **Master Technical Dossier**.
- **Comprehensive Master Dossier**: 28-section technical and editorial dossier covering:
  - **The Design Philosophy**: Core principles (Reduce unnecessary, refine proportion, amplify comfort).
  - **Ergonomic Proportions & Comfort**: 66cm deep seat, 42-45cm seat height, multi-density high-resilience foam core with feather-down envelope.
  - **4 Configurations Schedule**: Uno (1 Seater), Due (2 Seater), Tre (3 Seater Flagship), and Grande (4 Seater) with live metric (cm) and imperial (inches) conversions.
  - **Bespoke Customization**: Custom millimeter dimensions, COM (Customer's Own Material), and plinth finish adaptations.
  - **Material & Frame Construction**: Kiln-dried Indian Sal & European Birch hardwood frame, Pirelli elastic webbing, and Martindale 45,000+ upholstery.
  - **Delivery & White-Glove Installation**: 6-stage staircase-tested delivery workflow across Pan-India metro centers.
  - **WhatsApp Catalogue Generator**: Instant one-click formatted sales copy for client advisors and interior designers.
  - **JSON-LD Schema Markup**: Full schema.org Product structured data preview for search engines.

### 3. Bespoke Made-to-Order Reservation Flow
- **Piece Reservation**: Secure reservation fee with 100% credit applied toward the final bespoke fabrication.
- **Contextual Swatch Kit Reassurance**: Complimentary tactile material swatch box delivered to client doorsteps within 48 hours to confirm textures, grains, and finishes before workshop crafting begins.
- **Architectural Consultation**: Direct appointment scheduler with dedicated spatial consultants and interior architects.

### 4. Digital Material Atelier & Interactive Virtual Tour Guide
- **Interactive Tour Guide**: Architectural workbench walkthrough featuring clickable hot-spots that reveal micro-details, macro-texture zoom inspection, and technical specifications for:
  - Solid Wood Grain & Kiln-Seasoned Joinery (Canaletto Walnut & Burma Teak)
  - Loom Textiles & Como Heavy Bouclé (Martindale 45,000+ endurance)
  - Architectural Metal Finishes (High-vacuum PVD brushed brass & patinated bronze)
  - Full-Grain Italian Leathers (Semi-aniline Vicenza hides)
  - Monolithic Natural Stones (Roman Silver Travertine & Honed Calcite)
- **Atelier Kit Reservation**: Physical magnetic presentation box delivered within 48 hours for tactile confirmation.

### 5. Curated Wishlist & Spatial Planning
- **Wishlist State**: Local client curation allowing users to save and track pieces from product cards or the product detail view.
- **Wishlist Drawer**: Interactive slide-out drawer displaying curated pieces, dimensional specs, starting prices, and direct links to bespoke consultation or atelier swatch reservation.

### 6. Scroll-Triggered Fluid Motion
- **Motion Fade-In**: Subtle, architectural scroll-triggered entrance animations powered by `motion/react` across all view components (`HomeView`, `ProductDetailView`, `CategoryView`, `CollectionView`, `CraftedInIndiaView`, `MaterialAtelierPage`), enhancing the digital showroom's premium aesthetic.

### 7. Concierge & Client Admin Suite
- Comprehensive concierge desk to review bespoke consultation bookings, material requests, order statuses, and custom dimension specifications.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Motion](https://motion.dev/) (`motion/react`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: Centralized Store Context with session persistence

---

## 📁 Project Structure

```
├── index.html                  # HTML entry point with luxury typography & meta tags
├── metadata.json               # Application metadata and capability declarations
├── package.json                # Project dependencies and npm scripts
├── vite.config.ts              # Vite + Tailwind CSS plugins
├── src/
│   ├── main.tsx                # Application bootstrapping
│   ├── App.tsx                 # Root layout and view routing
│   ├── index.css               # Global Tailwind CSS directives & typography imports
│   ├── types.ts                # TypeScript domain models (Products, Swatches, Consultations)
│   ├── context/
│   │   └── StoreContext.tsx    # State management for cart, reservations, and active views
│   ├── data/
│   │   └── products.ts         # Handcrafted catalog data, finishes, and dimensional specs
│   └── components/
│       ├── Header.tsx          # Grand animated masthead + sticky category bar
│       ├── HomeView.tsx        # Hero architectural showcase, curation highlights
│       ├── CategoryView.tsx    # Dedicated category grid with filter controls
│       ├── CollectionView.tsx  # Full atelier collection catalog
│       ├── ProductDetailView.tsx # Custom dimensions, finish selector, reservation drawer
│       ├── MaterialAtelierPage.tsx # Digital materiality showcase & swatches
│       ├── CraftedInIndiaView.tsx  # Story of heritage joinery & artisan workshop
│       ├── ConsultationModal.tsx   # Bespoke design consultation scheduling dialog
│       ├── AdminCRMSuite.tsx       # Private CRM console for orders & client bookings
│       └── Footer.tsx          # Brand footer with provenance, policies, & showroom locations
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. Clone or extract the project repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local Vite development server:
```bash
npm run dev
```
The application will be accessible at `http://localhost:3000`.

### Production Build

Compile the application for production:
```bash
npm run build
```
Production assets are generated in the `dist/` directory.

### Linting & Verification

Verify TypeScript compilation and type safety:
```bash
npm run lint
```

---

## 🎨 Design System & Palette

| Token | Hex Value | Application |
| :--- | :--- | :--- |
| **Canvas Light** | `#FBF9F5` | Primary warm editorial background |
| **Parchment Surface** | `#F5F2EB` | Container card surfaces & subtle elevations |
| **Border Neutral** | `#E6DFD5` | Architectural hairline framing |
| **Muted Ochre / Brass** | `#A6865A` | Brand accent, subtle icons, active indicators |
| **Obsidian Charcoal** | `#191816` | High-contrast display typography |
| **Warm Mineral Gray** | `#736B63` | Subtitles, metadata, dimension specs |

---

## 📄 License

Private & Confidential. All rights reserved by House Of Form.
