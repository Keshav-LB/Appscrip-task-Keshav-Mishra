"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FilterBar from "@/components/FilterBar";
import FilterSidebar from "@/components/FilterSidebar";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

export default function HomePage() {
  const [showFilters, setShowFilters] = useState(true);

  return (
    <>
      <Header />
      <main>
        <Hero />

        <FilterBar
          showFilters={showFilters}
          onToggleFilters={() => setShowFilters((prev) => !prev)}
        />

        <section className="page-section products-section">
          <div
            className={`container products-layout ${
              showFilters
                ? "products-layout--with-sidebar"
                : "products-layout--full"
            }`}
          >
            {showFilters && <FilterSidebar />}
            <ProductGrid products={products} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}