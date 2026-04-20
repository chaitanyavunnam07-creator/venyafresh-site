"use client";
import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

const PRODUCTS_LIST = [
  { id: 1, name: "Flash-Frozen Tiger Prawns", price: 850, weight: "500g", source: "MALPE", image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&q=80&w=800", desc: "Caught 4 AM. Processed & Flash Frozen by 6 AM." },
  { id: 2, name: "Malpe Pomfret (Whole)", price: 1200, weight: "1kg", source: "MALPE", image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&q=80&w=800", desc: "Cleaned, descaled, and blast-frozen within 120 mins." },
  { id: 3, name: "Premium Kingfish Steaks", price: 950, weight: "500g", source: "ANDAMAN", image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&q=80&w=800", desc: "Steaked and vacuum sealed at peak freshness." }
];

function OrderContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [cart, setCart] = useState<{id: number, qty: number}[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const sourceFilter = searchParams.get("source")?.toUpperCase();
  const filteredProducts = sourceFilter ? PRODUCTS_LIST.filter(p => p.source === sourceFilter) : PRODUCTS_LIST;

  const addToCart = (id: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing) return prev.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item);
      return [...prev, { id, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const cartTotal = cart.reduce((acc, item) => {
    const product = PRODUCTS_LIST.find(p => p.id === item.id);
    return acc + (product?.price || 0) * item.qty;
  }, 0);

  return (
    <div className="min-h-screen bg-[#0B1F2A] text-white selection:bg-sky-400/30 font-sans">
      
      {/* QUICK CART DRAWER */}
      <div className={`fixed inset-y-0 right-0 z-[100] w-full md:w-[400px] bg-[#0B1F2A]/95 backdrop-blur-2xl border-l border-white/10 transform transition-transform duration-500 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full shadow-none'}`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-black uppercase tracking-tighter">Your Basket</h2>
            <button onClick={() => setIsCartOpen(false)} className="text-white/50 hover:text-white uppercase text-[10px] font-bold tracking-widest">Close</button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-6 pr-2">
            {cart.length === 0 ? (
              <p className="text-white/30 text-xs uppercase tracking-widest text-center mt-20">Your basket is empty</p>
            ) : (
              cart.map(item => {
                const p = PRODUCTS_LIST.find(prod => prod.id === item.id)!;
                return (
                  <div key={item.id} className="flex gap-4 items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                    <img src={p.image} className="w-16 h-16 object-cover rounded-xl" />
                    <div className="flex-1">
                      <h4 className="text-[11px] font-bold uppercase tracking-tight leading-tight">{p.name}</h4>
                      <p className="text-sky-400 text-xs font-bold mt-1">₹{p.price} x {item.qty}</p>
                    </div>
                  </div>
                )
              })
            )}
          </div>

          <div className="mt-auto pt-8 border-t border-white/10">
            <div className="flex justify-between items-end mb-6">
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Total Amount</span>
              <span className="text-3xl font-black text-sky-400 tracking-tighter">₹{cartTotal}</span>
            </div>
            <button className="w-full py-5 bg-sky-400 text-black rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white transition-all shadow-xl">
              Proceed to Logistics
            </button>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {isCartOpen && <div onClick={() => setIsCartOpen(false)} className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm transition-opacity" />}

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-[#0B1F2A]/90 backdrop-blur-xl border-b border-white/5 px-4 md:px-8 py-6">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="w-1/4 flex items-center gap-2 text-white hover:text-sky-400 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            <span className="hidden md:inline text-[10px] font-bold uppercase tracking-widest">Back</span>
          </Link>
          <div className="flex-1 flex justify-center">
            <Link href="/" className="text-xl md:text-2xl font-serif italic font-bold tracking-tighter"><span className="text-slate-100">Venya</span><span className="text-sky-400 ml-1">Fresh</span></Link>
          </div>
          <div className="flex w-1/4 justify-end">
            <button onClick={() => setIsCartOpen(true)} className="relative hover:text-sky-400 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span className="absolute -top-1 -right-1 bg-sky-400 text-black text-[9px] font-black h-4 w-4 flex items-center justify-center rounded-full">{cart.reduce((a, b) => a + b.qty, 0)}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* PRODUCTS GRID */}
      <div className="pt-32 pb-20 px-4 md:px-8 max-w-screen-xl mx-auto">
        <header className="mb-16 border-l-4 border-sky-400 pl-6 py-2 bg-white/5 backdrop-blur-md rounded-r-2xl">
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-2">
            {sourceFilter ? `${sourceFilter} SIGNATURE` : "THE SUB-ZERO CATALOG"}
          </h1>
          <p className="text-slate-300 uppercase tracking-[0.2em] text-[10px] font-bold">Processed & Locked Within 120 Minutes of Catch</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((item) => (
            <div key={item.id} className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-sky-400/40 transition-all shadow-2xl">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-sky-400 text-black text-[10px] font-black uppercase px-3 py-1 rounded-full">{item.source}</div>
              </div>
              <div className="p-8 text-left">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-extrabold uppercase leading-tight max-w-[70%]">{item.name}</h3>
                  <span className="text-sky-400 font-bold text-xl">₹{item.price}</span>
                </div>
                <p className="text-slate-400 text-xs mb-6 uppercase tracking-wider">{item.weight} • {item.desc}</p>
                <button onClick={() => addToCart(item.id)} className="w-full py-4 bg-sky-400 text-black rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white transition-all">Add to Basket</button>
              </div>
            </div>
          ))}
        </div>

        {sourceFilter && (
          <div className="mt-20 flex justify-center">
            <button onClick={() => router.push("/order")} className="px-10 py-4 border border-white/20 text-white hover:border-sky-400 hover:text-sky-400 transition-all rounded-full text-[10px] font-bold uppercase tracking-[0.3em]">Explore All Sources</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function OrderPage() {
  return (
    <Suspense fallback={<div className="bg-[#0B1F2A] min-h-screen" />}>
      <OrderContent />
    </Suspense>
  );
}
