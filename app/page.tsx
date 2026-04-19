"use client";

import React from "react";
import { Search, ShoppingBag, Menu } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const HERO_VIDEO = "https://l8fniptaja7gvhx6.public.blob.vercel-storage.com/Fisherman_Video_Generation.mp4";
  const PROCESS_VIDEO = "https://res.cloudinary.com/demo/video/upload/snow_deer.mp4"; 
  const MALPE_VIDEO = "https://res.cloudinary.com/demo/video/upload/boat_sailing.mp4";
  const ANDAMAN_VIDEO = "https://res.cloudinary.com/demo/video/upload/sea_turtle.mp4";
  const RIVER_VIDEO = "https://res.cloudinary.com/demo/video/upload/river_flow.mp4";

  return (
    <main className="w-full bg-[#0B1F2A] text-white overflow-x-hidden scroll-smooth">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 pt-10 pb-10 bg-gradient-to-b from-[#0B1F2A]/95 via-[#0B1F2A]/60 to-transparent backdrop-blur-sm">
        <div className="flex w-1/3 justify-start">
          <button className="text-slate-300 hover:text-white transition-colors">
            <Menu size={24} />
          </button>
        </div>

        <div className="absolute left-1/2 top-10 -translate-x-1/2 flex items-center text-2xl font-serif italic">
          <span className="text-white font-bold">Venya</span>
          <span className="text-sky-400 ml-1">Fresh</span>
        </div>

        <div className="flex w-1/3 justify-end gap-5 items-center text-slate-300">
          <Search size={22} />
          <div className="relative">
            <ShoppingBag size={22} />
            <span className="absolute -top-1 -right-1 bg-sky-400 text-black text-[8px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        
        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        {/* LIGHT OVERLAY (NOT HEAVY) */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* CONTENT */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="flex flex-col mb-6">
            <span className="text-[10vw] md:text-7xl font-black uppercase">NO SMELL.</span>
            <span className="text-[10vw] md:text-7xl font-black uppercase">NO MESS.</span>
            <div className="flex items-center justify-center gap-2 py-1">
              <span className="text-[8vw] md:text-6xl text-sky-400 italic lowercase">just</span>
              <span className="text-[10vw] md:text-7xl font-black uppercase">FRESH</span>
            </div>
            <span className="text-[12vw] md:text-8xl font-black uppercase text-slate-300">
              SEAFOOD.
            </span>
          </h1>

          <Link href="/order">
            <button className="px-12 py-3.5 bg-sky-400 text-black text-[10px] font-black uppercase tracking-widest rounded-full">
              Order Prawns & Fish
            </button>
          </Link>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="relative min-h-screen w-full border-t border-slate-800 bg-[#111827] pt-48 pb-24">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover opacity-20 grayscale">
            <source src={PROCESS_VIDEO} type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 text-center px-8">
          <h2 className="text-sky-400 text-[10px] tracking-widest mb-4 uppercase">
            THE CONVENIENCE FACTOR
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold uppercase mb-16">
            KITCHEN READY <br /> COASTAL FRESH
          </h3>
        </div>
      </section>

      {/* MALPE */}
      <section className="relative h-screen w-full">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={MALPE_VIDEO} />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h2 className="text-5xl font-black">MALPE</h2>
        </div>
      </section>

      {/* ANDAMAN */}
      <section className="relative h-screen w-full">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={ANDAMAN_VIDEO} />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h2 className="text-5xl font-black">ANDAMAN</h2>
        </div>
      </section>

      {/* RIVER */}
      <section className="relative h-screen w-full">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={RIVER_VIDEO} />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h2 className="text-5xl font-black">RIVER</h2>
        </div>
      </section>

    </main>
  );
}
