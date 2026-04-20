"use client";
import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

const PRODUCTS_LIST = [
  {
    id: 1,
    name: "Flash-Frozen Tiger Prawns",
    price: "850",
    weight: "500g",
    source: "MALPE",
    image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&q=80&w=800",
    desc: "Caught 4 AM. Processed & Flash Frozen by 6 AM. Zero ice crystals."
  },
  {
    id: 2,
    name: "Malpe Pomfret (Whole)",
    price: "1,200",
    weight: "1kg",
    source: "MALPE",
    image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&q=80&w=800",
    desc: "Cleaned, descaled, and blast-frozen within 120 mins of catch."
  },
  {
    id: 3,
    name: "Premium Kingfish Steaks",
    price: "950",
    weight: "500g",
    source: "ANDAMAN",
    image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&q=80&w=800",
    desc: "Steaked and vacuum sealed at peak freshness. No mess, no smell."
  }
];

function OrderContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [count, setCount] = useState(0);
  
  const sourceFilter = searchParams.get("source")?.toUpperCase();
  
  const filteredProducts = sourceFilter 
    ? PRODUCTS_LIST.filter(p => p.source === sourceFilter)
    : PRODUCTS_LIST;

  return (
    <div className="min-h-screen bg-[#0B1F2A] text-white selection:bg-sky-400/30 overflow-x-hidden font-sans">
      <nav className="fixed top-0 left-0 z-50 w-full bg-[#0B1F2A]/90 backdrop-blur-xl border-b border-white/5 px-4 md:px-8 py-6">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex w-1/4 justify-start text-white hover:text-sky-400 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          </Link>
          <div className="flex-1 flex justify-center items-center">
            <Link href="/" className="flex items-center text-xl md:text-2xl font-serif italic tracking-tighter">
              <span className="text-slate-100 font-bold">Venya</span>
              <span className="text-sky-400 ml-1">Fresh</span>
            </Link>
          </div>
          <div className="flex w-1/4 justify-end">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span className="absolute -top-1 -right-1 bg-sky-400 text-black text-[10px] font-black h-4 w-4 flex items-center justify-center rounded-full">{count}</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4 md:px-8 max-w-screen-xl mx-auto">
        <header className="mb-16 border-l-4 border-sky-400 pl-6 py-2 bg-white/5 backdrop-blur-md rounded-r-2xl">
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-2">
            {sourceFilter ? `${sourceFilter} SIGNATURE` : "THE SUB-ZERO CATALOG"}
          </h1>
          <p className="text-slate-300 uppercase tracking-[0.2em] text-[10px] font-bold">
            {sourceFilter ? `Exclusive ${sourceFilter} Source` : "Flash Frozen Within 120 Minutes of Catch"} • Zero Preservatives
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((item) => (
            <div key={item.id} className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-sky-400/40 transition-all duration-500 shadow-2xl">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                <div className="absolute top-4 right-4 bg-sky-400 text-black text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg">{item.source}</div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-extrabold uppercase tracking-tight leading-tight max-w-[70%]">{item.name}</h3>
                  <span className="text-sky-400 font-bold text-xl">₹{item.price}</span>
                </div>
                <p className="text-slate-400 text-xs mb-6 uppercase tracking-wider font-medium">{item.weight} • {item.desc}</p>
                <button onClick={() => setCount(count + 1)} className="w-full py-4 bg-sky-400 text-black rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white transition-all shadow-lg">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

        {sourceFilter && (
          <div className="mt-20 flex justify-center">
            <button 
              onClick={() => router.push("/order")}
              className="px-10 py-4 border border-white/20 text-white hover:border-sky-400 hover:text-sky-400 transition-all rounded-full text-[10px] font-bold uppercase tracking-[0.3em]"
            >
              Explore All Sources
            </button>
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
