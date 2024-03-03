"use client"

import HeroSection from "@/app/_components/HeroSection";
import ProductReel from "./_components/ProductReel";

export default function Home() {

  // [x] - Sign In
  // [x] - Sign Up
  // [x] - Sign Out
  // [ ] - Add callbacks
  // [ ] - Add OAuth
  // [ ] - Email verification
  // [ ] - Forgot Password

  return (
    <main className="h-max flex flex-col items-center">
      <HeroSection />
      <div className="h-full flex flex-col my-10 space-y-10 w-3/4">
        <ProductReel title="New Arrivals" category={"newArrivals"} carousel={true} />
        <ProductReel title="Top Rated" category={"topRated"} carousel={true} />
        <ProductReel title="Best Offers" category={"bestOffers"} carousel={true} />
      </div>
    </main>
  );
}
