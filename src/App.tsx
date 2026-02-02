import React, { useState, useEffect } from "react";
import { Ticker } from "./components/Ticker";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { IconStrip } from "./components/IconStrip";
import { ProductStrip, Product } from "./components/ProductStrip";
import { MediaGrid } from "./components/MediaGrid";
import { CollectionGrid } from "./components/CollectionGrid";
import { HeritageTicker } from "./components/HeritageTicker";
import { Testimonials } from "./components/Testimonials";
import { StoreLocator } from "./components/StoreLocator";
import { FeaturedLogos } from "./components/FeaturedLogos";
import { FounderStory } from "./components/FounderStory";
import { Footer } from "./components/Footer";
import { BestSellers } from "./pages/BestSellers";
import { MadeForUSA } from "./pages/MadeForUSA";
import { CategoryPage } from "./pages/CategoryPage";
import { Slides } from "./pages/Slides";
import { Apparel } from "./pages/Apparel";

// --- IMAGE ASSETS ---
const SET_1 = [
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-28-2026-01_18_25-AM.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-28-2026-01_18_31-AM.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-28-2026-01_18_23-AM.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-28-2026-01_18_27-AM.webp",
];

const SET_2 = [
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-28-2026-11_11_55-PM.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-28-2026-11_11_59-PM.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-28-2026-11_11_57-PM.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-28-2026-11_11_53-PM.webp",
];

const SET_3 = [
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-29-2026-02_10_17-AM.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-29-2026-02_10_19-AM.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-29-2026-02_10_23-AM.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-29-2026-02_10_24-AM.webp",
];

const SET_4 = [
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-29-2026-02_10_30-AM.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-29-2026-02_10_34-AM.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-29-2026-02_10_32-AM.webp",
];

const SET_5 = [
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-29-2026-02_10_26-AM.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-29-2026-02_10_28-AM.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-29-2026-02_10_29-AM.webp",
];

const SET_6 = [
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-29-2026-02_10_44-AM.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-29-2026-02_10_41-AM.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-29-2026-02_10_39-AM.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-29-2026-02_10_41-AM-1.webp",
];

const SET_7 = [
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-29-2026-02_10_36-AM.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-29-2026-02_10_35-AM.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-29-2026-02_10_37-AM.webp",
];

// --- MOCK DATA MAPPING ---
const featuredProducts: Product[] = [
  { id: 1, name: "Canyon Number 001", price: "$185.00", images: SET_1 },
  { id: 2, name: "Frontier Turf Olive", price: "$195.00", images: SET_2 },
  { id: 3, name: "Eagle Sun Yellow", price: "$175.00", images: SET_3 },
  { id: 4, name: "Dakota Heritage", price: "$210.00", images: SET_4 },
  { id: 5, name: "Canyon Runner Red", price: "$165.00", images: SET_5 },
  { id: 6, name: "Desert Low Bone", price: "$155.00", images: SET_6 },
];

const newArrivals: Product[] = [
  { id: 8, name: "Mesa Runner", price: "$180.00", images: SET_1 },
  { id: 9, name: "Sage Brush Low", price: "$160.00", images: SET_2 },
  { id: 10, name: "Dusk Patrol", price: "$195.00", images: SET_3 },
  { id: 11, name: "Clay Court", price: "$170.00", images: SET_4 },
];

// Mock Apparel Data (Reusing images as placeholders, but named appropriately)
const apparelProducts: Product[] = [
  { id: 101, name: "Heritage Tee - Bone", price: "$45.00", images: SET_1 },
  { id: 102, name: "Canyon Hoodie - Clay", price: "$85.00", images: SET_2 },
  { id: 103, name: "Workwear Jacket", price: "$120.00", images: SET_3 },
  { id: 104, name: "Utility Cargo Pant", price: "$95.00", images: SET_4 },
  { id: 105, name: "Logo Cap - Navy", price: "$35.00", images: SET_5 },
];

// Mock Slides Data
const slideProducts: Product[] = [
  { id: 201, name: "Canyon Slide - Tan", price: "$55.00", images: SET_6 },
  { id: 202, name: "Recovery Slide - Black", price: "$55.00", images: SET_7 },
  { id: 203, name: "Heritage Mule", price: "$75.00", images: SET_1 },
];

// Combine for larger grids
const allProducts = [...featuredProducts, ...newArrivals];

// Subsets for categories
const everydayProducts = [
  featuredProducts[0],
  featuredProducts[1],
  newArrivals[0],
  newArrivals[1],
];
const functionalProducts = [
  featuredProducts[2],
  featuredProducts[3],
  newArrivals[2],
  newArrivals[3],
];
const designProducts = [
  featuredProducts[4],
  featuredProducts[5],
  newArrivals[4],
  featuredProducts[0],
];

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case "bestsellers":
        return <BestSellers products={allProducts} />;
      case "made-for-usa":
        return <MadeForUSA products={allProducts} />;
      case "slides":
        return <Slides products={slideProducts} />;
      case "apparel":
        return <Apparel products={apparelProducts} />;
      case "everyday":
        return (
          <CategoryPage title="Everyday Sneakers" products={everydayProducts} />
        );
      case "functional":
        return (
          <CategoryPage
            title="Functional Sneakers"
            products={functionalProducts}
          />
        );
      case "design-led":
        return (
          <CategoryPage title="Design-led Sneakers" products={designProducts} />
        );
      case "home":
      default:
        return (
          <>
            <Hero />
            <IconStrip />
            <ProductStrip products={featuredProducts} />
            <ProductStrip
              title="New Arrivals"
              products={newArrivals}
              className="border-t-0"
            />
            <MediaGrid />
            <CollectionGrid />
            <HeritageTicker />
            <Testimonials />
            <StoreLocator />
            <FeaturedLogos />
            <FounderStory />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-heritage-bone selection:bg-heritage-clay selection:text-white">
      <Ticker />
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>{renderContent()}</main>
      <Footer />
    </div>
  );
}

export default App;

