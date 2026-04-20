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
      if (exists) return prev.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { id, qty: 1 }];
    });
    setIsOpen(true);
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => {
      const p = PRODUCTS.find(prod => prod.id === item.id);
      return acc + (p ? p.price * item.qty : 0);
    }, 0);
  };

  return (
    <main className="min-h-screen bg-[#0B1F2A] text-white font-sans">
      <div className={`fixed inset-y-0 right-0 z-[100] w-full md:w-[450px] bg-[#0B1F2A]/95 backdrop-blur-3xl border-l border-white/10 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-black uppercase tracking-tighter">Your Basket</h2>
            <button onClick={() => setIsOpen(false)} className="text-white/40">CLOSE</button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {cart.map(item => {
              const p = PRODUCTS.find(prod => prod.id === item.id)!;
              return (
                <div key={item.id} className="flex gap-4 items-center mb-6 bg-white/5 p-4 rounded-2xl">
                  <img src={p.image} className="w-16 h-16 object-cover rounded-xl" />
                  <div className="flex-1">
                    <p className="text-[11px] font-bold uppercase">{p.name}</p>
                    <p className="text-sky-400 font-bold">₹{p.price * item.qty}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button onClick={() => handleQty(item.id, -1)} className="px-2 bg-black/40 rounded">-</button>
                      <span className="text-xs">{item.qty}</span>
                      <button onClick={() => handleQty(item.id, 1)} className="px-2 bg-black/40 rounded">+</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pt-6 border-t border-white/10">
            <p className="text-sky-400 text-3xl font-black mb-4">₹{calculateTotal()}</p>
            <button className="w-full py-4 bg-sky-400 text-black font-black uppercase rounded-xl">Secure Checkout</button>
          </div>
        </div>
      </div>

      <nav className="fixed top-0 left-0 z-50 w-full bg-[#0B1F2A]/90 backdrop-blur-xl border-b border-white/5 px-8 py-6 flex justify-between items-center">
        <Link href="/" className="text-[10px] font-bold uppercase">Home</Link>
        <div className="text-xl font-serif italic font-bold">Venya<span className="text-sky-400">Fresh</span></div>
        <button onClick={() => setIsOpen(true)} className="relative">
          CART
          <span className="absolute -top-2 -right-4 bg-sky-400 text-black text-[10px] px-1 rounded-full">{cart.length}</span>
        </button>
      </nav>

      <div className="pt-32 pb-20 px-8 max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-black mb-12 uppercase">{sourceFilter ? `${sourceFilter} SIGNATURE` : "THE CATALOG"}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map(item => (
            <div key={item.id} className="bg-white/5 rounded-3xl overflow-hidden border border-white/10">
              <img src={item.image} className="aspect-[4/5] object-cover" />
              <div className="p-6">
                <h3 className="font-bold uppercase mb-1">{item.name}</h3>
                <p className="text-sky-400 font-bold mb-4">₹{item.price}</p>
                <button onClick={() => addItem(item.id)} className="w-full py-3 bg-sky-400 text-black font-bold rounded-xl uppercase text-[10px]">Add to Basket</button>
              </div>
            </div>
          ))}
        </div>
        {sourceFilter && (
          <button onClick={() => router.push("/order")} className="mt-10 mx-auto block px-8 py-3 border border-white/20 rounded-full uppercase text-[10px]">Explore All</button>
        )}
      </div>
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
