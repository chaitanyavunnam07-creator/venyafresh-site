"use client";
import React, { useState, Suspense } from "react";
import Link from "next/link";

const SOURCES = ["ALL CATCH", "ARABIAN SEA", "AGHANASHINI ESTUARY", "ANDAMAN SEA", "RIVER CATCH"];

const PRODUCTS = [
  { id: 1, name: "Tiger Prawns", price: 850, source: "ARABIAN SEA", image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&q=80&w=800", desc: "Caught 4 AM. Frozen by 6 AM." },
  { id: 2, name: "Malpe Pomfret", price: 1200, source: "ARABIAN SEA", image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&q=80&w=800", desc: "Cleaned and blast-frozen." },
  { id: 3, name: "Estuary Red Snapper", price: 950, source: "AGHANASHINI ESTUARY", image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&q=80&w=800", desc: "Freshwater-Saltwater mix catch." }
];

function OrderContent() {
  const [activeSource, setActiveSource] = useState("ALL CATCH");
  const [cart, setCart] = useState<{id: number, qty: number}[]>([]);

  const filtered = activeSource === "ALL CATCH" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.source === activeSource);

  const addItem = (id: number) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === id);
      return exists ? prev.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i) : [...prev, { id, qty: 1 }];
    });
  };

  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart.reduce((acc, item) => {
    const p = PRODUCTS.find(prod => prod.id === item.id);
    return acc + (p ? p.price * item.qty : 0);
  }, 0);

  return (
    <main className="min-h-screen bg-[#0B1F2A] text-white font-sans selection:bg-sky-400/30 relative">
      
      {/* 1. HEADER & TOP NAV */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-[#0B1F2A]/95 backdrop-blur-xl border-b border-white/5">
        <div className="px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-white hover:text-sky-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
          </Link>
          <div className="text-xl font-serif italic font-bold">Venya<span className="text-sky-400">Fresh</span></div>
          <div className="w-6" /> {/* Spacer */}
        </div>

        {/* HORIZONTAL TAB BAR */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 px-6 py-4 border-t border-white/5 bg-[#0B1F2A]/50">
          {SOURCES.map((source) => (
            <button
              key={source}
              onClick={() => setActiveSource(source)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-[10px] font-black tracking-widest transition-all duration-300 border ${
                activeSource === source 
                ? "bg-sky-400 border-sky-400 text-[#0B1F2A]" 
                : "bg-white/5 border-white/10 text-white/60 hover:border-white/30"
              }`}
            >
              {source}
            </button>
          ))}
        </div>
      </nav>

      {/* 2. PRODUCT GRID */}
      <div className="pt-44 px-6 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div key={item.id} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] relative">
                <img src={item.image} className="w-full h-full object-cover opacity-90" />
                <div className="absolute top-4 right-4 bg-sky-400 text-black text-[9px] font-black px-3 py-1 rounded-full uppercase">{item.source}</div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-extrabold uppercase text-lg leading-tight">{item.name}</h3>
                  <span className="text-sky-400 font-bold">₹{item.price}</span>
                </div>
                <p className="text-white/40 text-[11px] mb-6 uppercase tracking-wider">{item.desc}</p>
                <button onClick={() => addItem(item.id)} className="w-full py-4 bg-sky-400 text-black font-black rounded-2xl uppercase text-[10px] tracking-widest active:scale-95 transition-all">Add to Basket</button>
              </div>
            </div>
          ))}
        </div>

        {/* 3. SCROLL BUFFER (So the last card isn't hidden by the floating cart) */}
        <div className="h-40 w-full" />
      </div>

      {/* 4. PERSISTENT BOTTOM CART (Instamart Style) */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 left-0 w-full px-6 z-[60] animate-in slide-in-from-bottom-10 duration-300">
          <div className="max-w-md mx-auto bg-sky-400 p-4 rounded-2xl flex justify-between items-center shadow-[0_20px_50px_rgba(56,189,248,0.4)]">
            <div className="flex flex-col">
              <span className="text-[#0B1F2A] text-[10px] font-black uppercase tracking-widest">{totalQty} ITEMS</span>
              <span className="text-[#0B1F2A] text-lg font-black tracking-tighter">₹{totalPrice}</span>
            </div>
            <button className="flex items-center gap-2 bg-[#0B1F2A] text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-colors">
              View Basket
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default function OrderPage() {
  return (
    <Suspense fallback={<div className="bg-[#0B1F2A] min-h-screen" />}>
      <OrderContent />
    </Suspense>
  );
}
