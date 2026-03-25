"use client";

import "./globals.css";
import React from "react";
import { Search, ShoppingBag, User, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <html lang="en">
      <body className="bg-teal-50 text-slate-900 antialiased selection:bg-teal-200">
        {/* OCEANIC GLASS NAVIGATION */}
        <nav className="fixed top-0 left-0 z-[100] w-full bg-teal-50/80 backdrop-blur-md border-b border-teal-100 px-6 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between relative">
            
            {/* Left Section: Contextual Icon */}
            <div className="flex items-center gap-6 z-10 text-teal-900/70">
              {isHomePage ? (
                <User size={22} strokeWidth={1.5} className="cursor-pointer hover:text-teal-600 transition-colors" />
              ) : (
                <Link href="/" className="hover:text-teal-600 transition-colors">
                  <Home size={22} strokeWidth={1.5} />
                </Link>
              )}
            </div>
            
            {/* Center: THE BRAND SIGNATURE */}
            <Link 
              href="/" 
              className="absolute left-1/2 -translate-x-1/2 flex items-center no-underline group"
            >
              <span className="font-serif italic font-bold text-2xl md:text-3xl tracking-tighter text-teal-900 group-hover:text-teal-700 transition-colors">Venya</span>
              <span className="font-serif italic font-bold text-2xl md:text-3xl tracking-tighter ml-1 text-orange-500">Fresh</span>
            </Link>

            {/* Right Section: Utilities */}
            <div className="flex gap-6 items-center z-10 text-teal-900/70">
              <Search size={22} strokeWidth={1.5} className="cursor-pointer hover:text-teal-600 transition-colors" />
              <Link href="/order" className="relative hover:text-teal-600 transition-colors">
                <ShoppingBag size={22} strokeWidth={1.5} />
                <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-[9px] font-black h-4 w-4 flex items-center justify-center rounded-full shadow-sm">
                  0
                </span>
              </Link>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
