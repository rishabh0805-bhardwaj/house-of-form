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

### 2. Category & Curated Collection Exploration
- **Architectural Categories**: Seamless browsing across Sofas, Lounge Chairs, Dining & Coffee Tables, Credenzas & Storage, and Sculptural Beds.
- **Detailed Specifications**: Custom dimensions in millimeters, solid timber options (Burmese Teak, American Walnut, White Oak), and Italian upholstery fabrics.
- **Live Search & Filtering**: Instant search and collection filtering across design lines.

### 3. Bespoke Made-to-Order Reservation Flow
- **Piece Reservation**: Secure reservation fee with 100% credit applied toward the final bespoke fabrication.
- **Contextual Swatch Kit Reassurance**: Complimentary tactile material swatch box delivered to client doorsteps within 48 hours to confirm textures, grains, and finishes before workshop crafting begins.
- **Architectural Consultation**: Direct appointment scheduler with dedicated spatial consultants and interior architects.

### 4. Digital Material Atelier
- Interactive visualization of premium materials including Bouclé, Italian Full-Grain Leathers, Velvet, Travertine Marble, and Solid Hardwood finishes.
- Tactile descriptors detailing Martindale abrasion ratings, origin stories, and grain characteristics.

### 5. Concierge & Client Admin Suite
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
