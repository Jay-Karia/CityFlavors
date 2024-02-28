"use client"

import HeroSection from "@/app/_components/HeroSection";
import ProductReel from "./_components/ProductReel";

export default function Home() {
  return (
    <main className="h-screen">
      <HeroSection />

      <div className="flex flex-col space-y-10 mt-5">
        <ProductReel title="New Arrivals" category={"newArrivals"} carousel={true} />
        <ProductReel title="Top Rated" category={"topRated"} carousel={true} />
        <ProductReel title="Best Offers" category={"bestOffers"} carousel={true} />
      </div>
    </main>
  );
}
