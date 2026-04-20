"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function OrderPage() {
  const [cartCount, setCartCount] = useState(0);

  const PRODUCTS = [
    {
      id: 1,
      name: "Flash-Frozen Tiger Prawns",
      price: "₹850",
      weight: "500g",
      tag: "Frozen at -18°C",
      image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&q=80&w=800",
      desc: "Caught 4 AM. Processed & Flash Frozen by 6 AM. Zero ice crystals."
    },
    {
      id: 2,
      name: "Malpe Pomfret (Whole)",
      price: "₹1,200",
      weight: "1kg",
      tag: "2-Hour Lock",
      image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&q=80&w=800",
      desc: "Cleaned, descaled, and blast-frozen within 120 mins of catch."
    },
    {
      id: 3,
      name: "Premium Kingfish Steaks",
      price: "₹950",
      weight: "500g",
      tag: "Odor-Lock",
      image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&q=80&w=800",
      desc: "Steaked and vacuum sealed at peak freshness. No mess, no smell."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0B1F2A] text-white selection:bg-sky-400/30 overflow-x-hidden font-sans">
      {/* 1. NAVIGATION */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-[#0B1F2A]/90 backdrop-blur-xl border-b border-white/5 px-4 md:px-8 py-6">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <div className="flex w-1/4 justify-start">
            <Link href="/" className="text-white hover:text-sky-400 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            </Link>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Link href="/" className="flex items-center text-xl md:text-2xl font-serif italic tracking-tighter">
              <span className="text-slate-100 font-bold">Venya</span>
              <span className="text-sky-400 ml-1">Fresh</span>
            </Link>
          </div>
          <div className="flex w-1/4 justify-end">
            <div className="relative cursor-pointer hover:text-sky-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span className="absolute -top-1 -right-1 bg-sky-400 text-black text-[10px] font-black h-4 w-4 flex items-center justify-center rounded-full">{cartCount}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. PAGE CONTENT */}
      <div className="pt-32 pb-20 px-4 md:px-8 max-w-screen-xl mx-auto">
        <header className="mb-16 border-l-4 border-sky-400 pl-6 py-2 bg-white/5 backdrop-blur-md rounded-r-2xl">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-2">The <span className="text-sky-400 italic font-serif">Sub-Zero</span> Catalog</h1>
          <p className="text-slate-300 uppercase tracking-[0.2em] text-[10px] font-bold leading-relaxed">
            Flash Frozen Within <span className="text-sky-400">120 Minutes</span> of Catch • Zero Preservatives • Odor-Locked Packaging
          </p>
        </header>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-sky-400/40 transition-all duration-500 shadow-2xl">
              {/* Image with Frost Effect Overlay */}
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A] via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[8px] font-black uppercase px-3 py-1.5 rounded-full">
                  {product.tag}
                </div>
              </div>

              {/* Info Container */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-extrabold uppercase tracking-tight leading-tight max-w-[70%]">{product.name}</h3>
                  <span className="text-sky-400 font-bold text-xl">{product.price}
