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

  const updateQty = (id: number, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQty = Math.max(0, item.qty + delta);
          return { ...item, qty: newQty };
        }
        return item;
      }).filter(item => item.qty > 0);
    });
  };

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
      <div className={`fixed inset-y-0 right-0 z-[100] w-full md:w-[450px] bg-[#0B1F2A]/95 backdrop-blur-3xl border-l border-white/10 transform transition-transform duration-500 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full shadow-none'}`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-black uppercase tracking-tighter">Your Basket</h2>
            <button onClick={() => setIsCartOpen(false)} className="text-white/40 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-6 pr-2">
            {cart.length === 0 ? (
              <div className="text-center mt-20">
                <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">Empty Logistics Queue</p>
              </div>
            ) : (
              cart.map(item => {
                const p = PRODUCTS_LIST.find(prod => prod.id === item.id)!;
                return (
                  <div key={item.id} className="flex gap-5 items-center bg-white/5 p-5 rounded-3xl border border-white/5 group">
                    <img src={p.image} className="w-20 h-20 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all" />
                    <div className="flex-1">
                      <h4 className="text-[12px] font-bold uppercase tracking-tight leading-tight mb-1">{p.name}</h4>
                      <p className="text-sky-400 text-sm font-black mb-3">₹{p.price * item.qty}</p>
                      
                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-4 bg-black/40 w-fit px-3 py-1.5 rounded-full border border-white/10">
                        <button onClick={() => updateQty(item.id, -1)} className="text-white/60 hover:text-sky-400 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                        </button>
                        <span className="text-xs font-black w-4 text-center">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="text-white/60 hover:text-sky-400 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                        </button>
                      </div>
                    </div>
                  </div>
