"use client";
import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

const PRODUCTS = [
  { id: 1, name: "Flash-Frozen Tiger Prawns", price: 850, weight: "500g", source: "MALPE", image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&q=80&w=800", desc: "Caught 4 AM. Processed & Flash Frozen by 6 AM." },
  { id: 2, name: "Malpe Pomfret (Whole)", price: 1200, weight: "1kg", source: "MALPE", image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&q=80&w=800", desc: "Cleaned, descaled, and blast-frozen within 120 mins." },
  { id: 3, name: "Premium Kingfish Steaks", price: 950, weight: "500g", source: "ANDAMAN", image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&q=80&w=800", desc: "Steaked and vacuum sealed at peak freshness." }
];

function OrderContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [cart, setCart] = useState<{id: number, qty: number}[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  
  const sourceFilter = searchParams.get("source")?.toUpperCase();
  const filtered = sourceFilter ? PRODUCTS.filter(p => p.source === sourceFilter) : PRODUCTS;

  const handleQty = (id: number, delta: number) => {
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i).filter(i => i.qty > 0));
  };

  const addItem = (id: number) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === id);
      return exists ? prev.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i) : [...prev, { id, qty: 1 }];
    });
    setIsOpen(true);
  };

  const total = cart.reduce((acc, i) => acc + (PRODUCTS.find(p => p.id === i.id)?.price || 0) * i.qty, 0);
  const totalItems = cart.reduce((acc, i) => acc + i.qty, 0);

  return (
    <main className="min-h-screen bg-[#0B1F2A] text-white font-sans selection:bg-sky-400/30 overflow-x-hidden">
      
      {/* 1. CART DRAWER */}
      <div className={`fixed inset-y-0 right-0 z-[100] w-full md:w-[450px] bg-[#0B1F2A]/95 backdrop-blur-3xl border-l border-white/10 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-black uppercase tracking-tighter">Your Basket</h2>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white uppercase text-[10px] font-bold">Close</button>
          </div>
          <div className="flex-1 overflow-y-auto space-y-6">
            {cart.map(item => {
              const p = PRODUCTS.find(prod => prod.id === item.id)!;
              return (
                <div key={item.id} className="flex gap-4 items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                  <img src={p.image} className="w-16 h-16 object-cover rounded-xl" />
                  <div className="flex-1">
                    <p className="text-[11px] font-bold uppercase">{p.name}</p>
                    <p className="text-sky-400 font-bold mb-2">₹{p.price * item.qty}</p>
                    <div className="flex items-center gap-3 bg-black/40 w-fit px-3 py-1 rounded-full border border-white/10">
                      <button onClick={() => handleQty(item.id, -1)} className="text-white/60 hover:text-sky-400 font-bold px-1">-</button>
                      <span className="text-[10px] font-black">{item.qty}</span>
                      <button onClick={() => handleQty(item.id, 1)} className="text-white/60 hover:text-sky-400 font-bold px-1">+</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pt-8 border-t border-white/10">
            <div className="flex justify-between items-end mb-6">
              <span className="text-white/40 text-[9px] font-black uppercase">Logistics Total</span>
              <span className="text-3xl font-black text-sky-400">₹{total}</span>
            </div>
            <button className="w-full py-5 bg-sky-400 text-black font-black uppercase text-[10px] rounded-2xl hover:bg-white transition-all">Secure Checkout</button>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-md" />}

      {/* 2. NAVIGATION - RESTORED ICONS */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-[#0B1F2A]/90 backdrop-blur-xl border-b border-white/5 px-4 md:px-8 py-6 flex justify-between items-center">
        <Link href="/" className="w-1/4 flex items-center text-white hover:text-sky-400 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          <span className="hidden md:inline text-[10px] font-bold uppercase ml-1">Home</span>
        </Link>
        
        <div className="flex-1 flex justify-center items-center">
          <Link href="/" className="text-xl md:text-2xl font-serif italic font-bold tracking-tighter">
            Venya<span className="text-sky-400 ml-0.5">Fresh</span>
          </Link>
        </div>

        <div className="flex w-1/4 justify-end">
          <button onClick={() => setIsOpen(true)} className="relative hover:text-sky-400 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-sky-400 text-black text-[9px] font-black h-4 w-4 flex items-center justify-center rounded-full">{totalItems}</span>
            )}
          </button>
        </div>
      </nav>

      {/* 3. PRODUCT GRID */}
      <div className="pt-32 pb-20 px-6 max-w-screen-xl mx-auto">
        <header className="mb-12 border-l-4 border-sky-400 pl-6 py-2">
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-2">
            {sourceFilter ? `${sourceFilter} SIGNATURE` : "THE CATALOG"}
          </h1>
          <p className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-bold">120-Minute Sub-Zero Lock</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(item => (
            <div key={item.id} className="group bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-sky-400/40 transition-all shadow-2xl">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-sky-400 text-black text-[9px] font-black px-3 py-1 rounded-full uppercase">{item.source}</div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold uppercase text-lg">{item.name}</h3>
                  <span className="text-sky-400 font-bold">₹{item.price}</span>
                </div>
                <p className="text-white/40 text-[11px] mb-6 uppercase tracking-wider">{item.weight} • {item.desc}</p>
                <button onClick={() => addItem(item.id)} className="w-full py-4 bg-sky-400 text-black font-black rounded-2xl uppercase text-[10px] hover:bg-white transition-all shadow-lg">Add to Basket</button>
              </div>
            </div>
          ))}
        </div>

        {sourceFilter && (
          <button onClick={() => router.push("/order")} className="mt-16 mx-auto block px-10 py-4 border border-white/20 rounded-full uppercase text-[10px] font-bold hover:border-sky-400 hover:text-sky-400 transition-all">Explore All Sources</button>
        )}
      </div>
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
