/**
 * HOUSE OF FORM — DYNAMIC SEO & METADATA MANAGER
 * Directly synchronizes document.title, standard meta tags, Open Graph, Twitter Cards,
 * Geo targeting, and Schema.org JSON-LD structured data into document.head.
 */

import React, { useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import {
  PRODUCT_SEO_REGISTRY,
  GLOBAL_BRAND_SEO,
  SITE_BASE_URL,
  compileKeywordString,
  generateProductSchema,
  generateCollectionSchema,
} from '../data/seoArchitecture';

export const SEOHead: React.FC = () => {
  const { currentView, selectedProductId, products } = useStore();

  useEffect(() => {
    // Helper to safely set or create a meta tag by name or property
    const setMetaTag = (attr: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to set or create canonical link
    const setCanonicalLink = (url: string) => {
      let element = document.querySelector('link[rel="canonical"]');
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', 'canonical');
        document.head.appendChild(element);
      }
      element.setAttribute('href', url);
    };

    // Helper to inject JSON-LD script
    const setJsonLd = (id: string, data: object) => {
      let script = document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data, null, 2);
    };

    if (currentView === 'product-detail') {
      const activeProduct = products.find((p) => p.id === selectedProductId) || products[0];
      const seoConfig = PRODUCT_SEO_REGISTRY[activeProduct.id] || PRODUCT_SEO_REGISTRY['HOF-SF-VLR-001'];
      const heroImage = typeof activeProduct.images.hero === 'string' ? activeProduct.images.hero : '';
      const canonicalUrl = `${SITE_BASE_URL}${seoConfig.canonicalSlug}`;
      const keywordContent = compileKeywordString(seoConfig.keywords);

      // 1. Update Document Title
      document.title = seoConfig.seoTitle;

      // 2. Standard Search Meta
      setMetaTag('name', 'description', seoConfig.metaDescription);
      setMetaTag('name', 'keywords', keywordContent);
      setMetaTag('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
      setCanonicalLink(canonicalUrl);

      // 3. Open Graph (Facebook, WhatsApp, LinkedIn, iMessage)
      setMetaTag('property', 'og:title', seoConfig.openGraph.title);
      setMetaTag('property', 'og:description', seoConfig.openGraph.description);
      setMetaTag('property', 'og:type', seoConfig.openGraph.type);
      setMetaTag('property', 'og:url', canonicalUrl);
      if (heroImage) {
        setMetaTag('property', 'og:image', heroImage);
        setMetaTag('property', 'og:image:alt', seoConfig.openGraph.imageAlt);
      }
      setMetaTag('property', 'og:site_name', 'House Of Form');

      // 4. Twitter Cards
      setMetaTag('name', 'twitter:card', 'summary_large_image');
      setMetaTag('name', 'twitter:title', seoConfig.twitterCard.title);
      setMetaTag('name', 'twitter:description', seoConfig.twitterCard.description);
      if (heroImage) {
        setMetaTag('name', 'twitter:image', heroImage);
      }

      // 5. Tier 1 Indian Regional & Geo Meta Tags
      setMetaTag('name', 'geo.region', GLOBAL_BRAND_SEO.geoRegions.join(';'));
      setMetaTag('name', 'geo.placename', GLOBAL_BRAND_SEO.geoPlacenames.join(', '));
      setMetaTag('name', 'geo.position', '28.4595;77.0266');
      setMetaTag('name', 'ICBM', '28.4595, 77.0266');

      // 6. Schema.org JSON-LD Structured Product Data
      const productSchema = generateProductSchema(
        seoConfig,
        heroImage,
        activeProduct.variants.map((v) => ({
          sku: v.sku,
          name: v.name,
          basePrice: v.basePrice,
          dimensions: v.dimensions
            ? {
                widthCm: v.dimensions.widthCm,
                depthCm: v.dimensions.depthCm,
                heightCm: v.dimensions.heightCm,
              }
            : undefined,
        }))
      );
      setJsonLd('hof-structured-data', productSchema);
    } else {
      // Global Collection / Homepage View
      const pageTitle = GLOBAL_BRAND_SEO.defaultTitle;
      const pageDesc = GLOBAL_BRAND_SEO.defaultDescription;
      const pageKeywords = GLOBAL_BRAND_SEO.defaultKeywords.join(', ');
      const canonicalUrl = SITE_BASE_URL;

      document.title = pageTitle;
      setMetaTag('name', 'description', pageDesc);
      setMetaTag('name', 'keywords', pageKeywords);
      setMetaTag('name', 'robots', 'index, follow');
      setCanonicalLink(canonicalUrl);

      setMetaTag('property', 'og:title', pageTitle);
      setMetaTag('property', 'og:description', pageDesc);
      setMetaTag('property', 'og:type', 'website');
      setMetaTag('property', 'og:url', canonicalUrl);
      setMetaTag('property', 'og:site_name', 'House Of Form');

      setMetaTag('name', 'twitter:card', 'summary_large_image');
      setMetaTag('name', 'twitter:title', pageTitle);
      setMetaTag('name', 'twitter:description', pageDesc);

      // Regional Geo — Tier 1 Cities Nationwide
      setMetaTag('name', 'geo.region', GLOBAL_BRAND_SEO.geoRegions.join(';'));
      setMetaTag('name', 'geo.placename', GLOBAL_BRAND_SEO.geoPlacenames.join(', '));
      setMetaTag('name', 'geo.position', '28.4595;77.0266');
      setMetaTag('name', 'ICBM', '28.4595, 77.0266');

      // Schema.org Collection Page
      const collectionSchema = generateCollectionSchema();
      setJsonLd('hof-structured-data', collectionSchema);
    }
  }, [currentView, selectedProductId, products]);

  // Non-visual component; strictly operates on document.head
  return null;
};
