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
  const [isOpen, setIsOpen] = useState(false);
  
  const sourceFilter = searchParams.get("source")?.toUpperCase();
  const filtered = sourceFilter ? PRODUCTS_LIST.filter(p => p.source === sourceFilter) : PRODUCTS_LIST;

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

  const total = cart.reduce((acc, i) => acc + (PRODUCTS_LIST.find(p => p.id === i.id)?.price || 0) * i.qty, 0);

  return (
    <div className="min-h-screen bg-[#0B1F2A] text-white selection:bg-sky-400/30 font-sans">
      <div className={`fixed inset-y-0 right-0 z-[100] w-full md:w-[450px] bg-[#0B1F2A]/95 backdrop-blur-3xl border-l border-white/10 transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-black uppercase tracking-tighter">Your Basket</h2>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto space-y-6">
            {cart.map(item => {
              const p = PRODUCTS_LIST.find(prod => prod.id === item.id)!;
              return (
                <div key={item.id} className="flex gap-5 items-center bg-white/5 p-5 rounded-3xl border border-white/5">
                  <img src={p.image} className="w-20 h-20 object-cover rounded-2xl" />
                  <div className="flex-1">
                    <h4 className="text-[12px] font-bold uppercase mb-1">{p.name}</h4>
                    <p className="text-sky-400 text-sm font-black mb-3">₹{p.price * item.qty}</p>
                    <div className="flex items-center gap-4 bg-black/40 w-fit px-3 py-1.5 rounded-full border border-white/10">
                      <button onClick={() => handleQty(item.id, -1)} className="text-white/60 hover:text-sky-400 font-bold">-</button>
                      <span className="text-xs font-black">{item.qty}</span>
                      <button onClick={() => handleQty(item.id, 1)} className="text-white/60 hover:text-sky-400 font-bold">+</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-auto pt-8 border-t border-white/10">
            <div className="flex justify-between items-end mb-8">
              <div className="flex flex-col gap-1">
                <span className="text-white/40 text-[9px] font-black uppercase">Total Amount</span>
                <span className="text-4xl font-black text-sky-400 tracking-tighter">₹{total}</span>
              </div>
            </div>
            <button className="w-full py-5 bg-sky-400 text-black rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all">Secure Checkout</button>
          </div>
        </div>
      </div>

      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-md" />}

      <nav className="fixed top-0 left-0 z-50 w-full bg-[#0B1F2A]/90 backdrop-blur-xl border-b border-white/5 px-4 md:px-8 py-6">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="w-1/4 flex items-center gap-2 text-white hover:text-sky-400"><span className="text-[10px] font-bold uppercase tracking-[0.3em]">Home</span></Link>
          <div className="flex-1 flex justify-center"><Link href="/" className="text-xl md:text-2xl font-serif italic font-bold"><span className="text-slate-100">Venya</span><span className="text-sky-400 ml-1">Fresh</span></Link></div>
          <div className="flex w-1/4 justify-end">
            <button onClick={() => setIsOpen(true)} className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4ZM3 6h18M16 10a4 4 0 0 1-8 0"/></svg>
              <span className="absolute -top-1 -right-1 bg-sky-400 text-black text-[9px] font-black h-4 w-4 flex items-center justify-center rounded-full">{cart.reduce((a, b) => a + b.qty, 0)}</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-
