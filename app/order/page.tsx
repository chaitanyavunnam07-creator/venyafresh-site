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
  const [isOpen, setIsOpen] = useState(false);

  const filtered = activeSource === "ALL CATCH" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.source === activeSource);

  const addItem = (id: number) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === id);
      return exists ? prev.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i) : [...prev, { id, qty: 1 }];
    });
    setIsOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#0B1F2A] text-white font-sans selection:bg-sky-400/30">
      
      {/* 1. HEADER & DYNAMIC FILTER BAR */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-[#0B1F2A]/95 backdrop-blur-xl border-b border-white/5">
        <div className="px-6 py-5 flex justify-between items-center border-b border-white/5">
          <Link href="/" className="text-white hover:text-sky-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
          </Link>
          <div className="text-xl font-serif italic font-bold">Venya<span className="text-sky-400">Fresh</span></div>
          <button onClick={() => setIsOpen(true)} className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4ZM3 6h18M16 10a4 4 0 0 1-8 0"/></svg>
            <span className="absolute -top-1 -right-1 bg-sky-400 text-black text-[9px] font-black h-4 w-4 flex items-center justify-center rounded-full">{cart.length}</span>
          </button>
        </div>

        {/* SWIGGY-STYLE TAB BAR */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 px-6 py-4 bg-[#0B1F2A]/50">
          {SOURCES.map((source) => (
            <button
              key={source}
              onClick={() => setActiveSource(source)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-[10px] font-black tracking-widest transition-all duration-300 border ${
                activeSource === source 
                ? "bg-sky-400 border-sky-400 text-[#0B1F2A] shadow-[0_0_20px_rgba(56,189,248,0.3)]" 
                : "bg-white/5 border-white/10 text-white/60 hover:border-white/30"
              }`}
            >
              {source}
            </button>
          ))}
        </div>
      </nav>

      {/* 2. PRODUCT GRID */}
      <div className="pt-44 pb-20 px-6 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <div key={item.id} className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-sky-400/30 transition-all duration-500 shadow-2xl">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                  <div className="absolute top-4 right-4 bg-sky-400 text-black text-[9px] font-black px-3 py-1 rounded-full uppercase shadow-lg">{item.source}</div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-extrabold uppercase text-lg leading-tight tracking-tighter">{item.name}</h3>
                    <span className="text-sky-400 font-bold">₹{item.price}</span>
                  </div>
                  <p className="text-white/40 text-[11px] mb-6 uppercase tracking-wider leading-relaxed">{item.desc}</p>
                  <button onClick={() => addItem(item.id)} className="w-full py-4 bg-sky-400 text-black font-black rounded-2xl uppercase text-[10px] tracking-widest hover:bg-white transition-all shadow-lg active:scale-95">Add to Basket</button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-white/20 text-xs font-black uppercase tracking-[0.5em]">No catch available for this source yet</p>
            </div>
          )}
        </div>
      </div>

      {/* 3. CART DRAWER (Simplified for Build) */}
      <div className={`fixed inset-y-0 right-0 z-[100] w-full md:w-[450px] bg-[#0B1F2A] border-l border-white/10 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-black uppercase tracking-tighter">Your Basket</h2>
            <button onClick={() => setIsOpen(false)} className="text-white/40 font-bold uppercase text-[10px]">Close</button>
          </div>
          <div className="flex-1 overflow-y-auto space-y-6">
            {cart.map(item => {
              const p = PRODUCTS.find(prod => prod.id === item.id)!;
              return (
                <div key={item.id} className="flex gap-4 items-center bg-white/5 p-4 rounded-2xl">
                  <img src={p.image} className="w-16 h-16 object-cover rounded-xl" />
                  <div className="flex-1">
                    <p className="text-[11px] font-bold uppercase">{p.name}</p>
                    <p className="text-sky-400 font-bold">₹{p.price * item.qty}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="mt-auto w-full py-5 bg-sky-400 text-black font-black uppercase text-[10px] rounded-2xl shadow-xl">Secure Checkout</button>
        </div>
      </div>
      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-md" />}
    </main>
  );
}

export default function OrderPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderContent />
    </Suspense>
  );
}
