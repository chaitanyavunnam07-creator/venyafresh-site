"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function OrderPage() {
  const [cartCount, setCartCount] = useState(0);

  const PRODUCTS = [
    {
      id: 1,
      name: "Jumbo Tiger Prawns",
      price: "₹850",
      weight: "500g",
      tag: "Best Seller",
      image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&q=80&w=800",
      desc: "De-veined, head-off, and kitchen ready."
    },
    {
      id: 2,
      name: "Malpe Pomfret",
      price: "₹1,200",
      weight: "1kg",
      tag: "Fresh Catch",
      image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&q=80&w=800",
      desc: "Whole cleaned pomfret, perfect for tawa fry."
    },
    {
      id: 3,
      name: "Coastal Kingfish",
      price: "₹950",
      weight: "500g",
      tag: "Premium",
      image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&q=80&w=800",
      desc: "Firm steaks, descaled and vacuum sealed."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0B1F2A] text-white selection:bg-sky-400/30 overflow-x-hidden">
      <nav className="fixed top-0 left-0 z-50 w-full bg-[#0B1F2A]/80 backdrop-blur-md px-4 md:px-8 py-6">
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
          <div className="flex w-1/4 justify-end gap-6 items-center">
            <div className="relative cursor-pointer hover:text-sky-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span className="absolute -top-1 -right-1 bg-sky-400 text-black text-[10px] font-black h-4 w-4 flex items-center justify-center rounded-full">{cartCount}</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4 md:px-8 max-w-screen-xl mx-auto">
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">The <span className="text-sky-400 italic font-serif">Daily</span> List</h1>
          <p className="text-slate-400 uppercase tracking-[0.3em] text-[10px] font-bold">Sourced at 4:00 AM • Delivered by 11:00 AM</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-sky-400/50 transition-all duration-500">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                <div className="absolute top-4 left-4 bg-sky-400 text-black text-[8px] font-black uppercase px-3 py-1 rounded-full">{product.tag}</div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold uppercase tracking-tight">{product.name}</h3>
                  <span className="text-sky-400 font-bold">{product.price}</span>
                </div>
                <p className="text-slate-400 text-xs mb-4 uppercase tracking-wider">{product.weight} • {product.desc}</p>
                <button onClick={() => setCartCount(c => c + 1)} className="w-full py-4 bg-white/10 border border-white/20 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-sky-400 hover:text-black transition-all">Add to Basket</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
