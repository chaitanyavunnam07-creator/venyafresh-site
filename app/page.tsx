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
    <main className="w-full bg-[#0B1F2A] text-white selection:bg-sky-400/30 overflow-x-hidden scroll-smooth">
      
      {/* 1. NAVIGATION */}
      <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 pt-10 pb-10 bg-gradient-to-b from-[#0B1F2A]/95 via-[#0B1F2A]/60 to-transparent backdrop-blur-sm">
        <div className="flex w-1/3 justify-start">
          <button className="text-slate-300 hover:text-white transition-colors">
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>

        <div className="absolute left-1/2 top-10 -translate-x-1/2 flex items-center text-2xl font-serif italic tracking-tight">
          <span className="text-white font-bold">Venya</span>
          <span className="text-sky-400 ml-0.5">Fresh</span>
        </div>

        <div className="flex w-1/3 justify-end gap-5 items-center text-slate-300">
          <Search size={22} strokeWidth={1.5} />
          <div className="relative">
            <ShoppingBag size={22} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 bg-sky-400 text-[#0B1F2A] text-[8px] font-black h-4 w-4 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
        </div>
      </nav>

      {/* SECTION 1: HERO (FIXED FULL SCREEN VIDEO) */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>

          {/* subtle overlay for readability */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="flex flex-col mb-6 drop-shadow-xl">
            <span className="text-[10vw] md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-white">
              NO SMELL.
            </span>
            <span className="text-[10vw] md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-white">
              NO MESS.
            </span>
            <div className="flex items-center justify-center gap-2 py-1">
              <span className="text-[8vw] md:text-6xl text-sky-400 italic font-serif lowercase">
                just
              </span>
              <span className="text-[10vw] md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-white">
                FRESH
              </span>
            </div>
            <span className="text-[12vw] md:text-8xl font-black tracking-tighter uppercase leading-[0.8] text-slate-300">
              SEAFOOD.
            </span>
          </h1>

          <Link href="/order">
            <button className="px-12 py-3.5 bg-sky-400 text-[#0B1F2A] text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all shadow-xl rounded-full">
              Order Prawns & Fish
            </button>
          </Link>
        </div>
      </section>

      {/* SECTION 2: CONVENIENCE */}
      <section className="relative min-h-screen w-full overflow-hidden border-t border-slate-800 bg-[#111827] pt-48 pb-24">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover opacity-20 grayscale">
            <source src={PROCESS_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#111827] via-transparent to-[#111827]" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-start text-center px-8">
          <h2 className="text-sky-400 text-[10px] font-bold tracking-[0.6em] mb-4 uppercase">
            THE CONVENIENCE FACTOR
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tighter uppercase mb-16 text-white">
            KITCHEN READY, <br /> COASTAL FRESH
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl w-full">
            <div className="border-l border-slate-600 pl-6 text-left">
              <h4 className="text-white text-xs font-bold uppercase italic font-serif mb-2">
                Zero Preparation
              </h4>
              <p className="text-slate-400 text-[10px] uppercase font-bold">
                De-veined prawns and descaled fish. Open the pack and start cooking.
              </p>
            </div>

            <div className="border-l border-slate-600 pl-6 text-left">
              <h4 className="text-white text-xs font-bold uppercase italic font-serif mb-2">
                Odor-Lock Tech
              </h4>
              <p className="text-slate-400 text-[10px] uppercase font-bold">
                Vacuum sealed at sub-zero temperatures to ensure your fridge stays fresh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3, 4, 5 remain EXACT SAME as your original */}

    </main>
  );
}
