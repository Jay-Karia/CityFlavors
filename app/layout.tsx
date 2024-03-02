import type { Metadata } from "next";
import { Roboto_Condensed as FontSans, Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"

import "./globals.css";

import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";

import { cn } from "@/lib/utils";

export const inter = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "CityFlavors",
  description: "A Dynamic Food Ordering App 🍴",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "h-screen bg-background font-sans antialiased flex flex-col",
          inter.variable
        )}>
          <Navbar/>
            {children}
          <Footer/>
          <Toaster />
        </body>
    </html>
  );
}
