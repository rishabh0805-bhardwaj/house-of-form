/**
 * House Of Form — Main Application Architecture
 * Global Design. Indian Intelligence. Bespoke to You.
 */

import React, { useEffect } from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ProductDetailView } from './components/ProductDetailView';
import { MaterialAtelierPage } from './components/MaterialAtelierPage';
import { CollectionView } from './components/CollectionView';
import { CategoryView } from './components/CategoryView';
import { CraftedInIndiaView } from './components/CraftedInIndiaView';
import { DigitalMaterialExperience } from './components/DigitalMaterialExperience';
import { AdminCRMSuite } from './components/AdminCRMSuite';
import { MaterialAtelierModal } from './components/MaterialAtelierModal';
import { WishlistDrawer } from './components/WishlistDrawer';

const AppContent: React.FC = () => {
  const { currentView } = useStore();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#191816] font-sans antialiased selection:bg-[#C5A880] selection:text-[#191816]">
      {/* Brand Header & Global Navigation */}
      <Header />

      {/* Dynamic View Router */}
      <main className="flex-1">
        {currentView === 'home' && <HomeView />}
        {currentView === 'product-detail' && <ProductDetailView />}
        {(currentView === 'material-atelier' || currentView === 'atelier-experience') && (
          <MaterialAtelierPage />
        )}
        {(currentView === 'category-view' || currentView === 'category' || currentView === 'collection') && (
          <CategoryView />
        )}
        {currentView === 'collection-alt' && <CollectionView />}
        {currentView === 'crafted-in-india' && <CraftedInIndiaView />}
        {currentView === 'digital-swatches' && <DigitalMaterialExperience />}
        {(currentView === 'admin-crm' || currentView === 'admin') && <AdminCRMSuite />}
      </main>

      {/* Brand Footer */}
      {currentView !== 'admin-crm' && currentView !== 'admin' && <Footer />}

      {/* Global The Material Atelier Reservation Modal */}
      <MaterialAtelierModal />

      {/* Global Wishlist Curation Drawer */}
      <WishlistDrawer />
    </div>
  );
};

export function App() {
  return (
    <StoreProvider>
      <AppContent />
    </StoreProvider>
  );
}

export default App;
