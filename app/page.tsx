"use client";

import { Search, ShoppingBag, Menu } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const HERO_VIDEO = "https://l8fniptaja7gvhx6.public.blob.vercel-storage.com/Fisherman_Video_Generation.mp4";
  const PROCESS_VIDEO = "https://res.cloudinary.com/demo/video/upload/snow_deer.mp4"; 
  const MALPE_VIDEO = "https://res.cloudinary.com/demo/video/upload/boat_sailing.mp4";
  const ANDAMAN_VIDEO = "https://res.cloudinary.com/demo/video/upload/sea_turtle.mp4";
  const RIVER_VIDEO = "https://res.cloudinary.com/demo/video/upload/river_flow.mp4";

  return (
    <main className="w-full bg-teal-50 text-teal-950 selection:bg-orange-200 overflow-x-hidden scroll-smooth">
      
      {/* 1. NAVIGATION (Oceanic Glass) */}
      <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 pt-10 pb-10 bg-gradient-to-b from-teal-50/90 via-teal-50/40 to-transparent backdrop-blur-sm">
        <div className="flex w-1/3 justify-start">
          <button className="text-teal-900/80 hover:text-orange-600 transition-colors">
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
        <div className="absolute left-1/2 top-10 -translate-x-1/2 flex items-center text-2xl font-serif italic tracking-tight">
          <span className="text-orange-500 font-bold">Venya</span>
          <span className="text-teal-900/60 ml-0.5">Fresh</span>
        </div>
        <div className="flex w-1/3 justify-end gap-5 items-center text-teal-900/80">
          <Search size={22} strokeWidth={1.5} />
          <div className="relative">
            <ShoppingBag size={22} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[8px] font-black h-4 w-4 flex items-center justify-center rounded-full">0</span>
          </div>
        </div>
      </nav>

      {/* SECTION 1: HERO (Oceanic Theme) */}
      <section className="relative h-screen w-full overflow-hidden bg-teal-100">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover opacity-70 scale-105">
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-teal-50 via-transparent to-teal-50" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="flex flex-col mb-6">
            <span className="text-[10vw] md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-teal-950">NO SMELL.</span>
            <span className="text-[10vw] md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-teal-950">NO MESS.</span>
            <div className="flex items-center justify-center gap-2 py-1">
              <span className="text-[8vw] md:text-6xl text-orange-500 italic font-serif lowercase">just</span>
              <span className="text-[10vw] md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-teal-900">FRESH</span>
            </div>
            <span className="text-[12vw] md:text-8xl font-black tracking-tighter uppercase leading-[0.8] text-teal-900">SEAFOOD.</span>
          </h1>
          
          <Link href="/order">
            <button className="px-12 py-3.5 bg-teal-900 text-teal-50 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-orange-500 hover:text-white transition-all shadow-lg rounded-full">
              Order Prawns & Fish
            </button>
          </Link>
        </div>
      </section>

      {/* SECTION 2: CONVENIENCE (Oceanic Theme) */}
      <section className="relative min-h-screen w-full overflow-hidden border-t border-teal-100 bg-white pt-48 pb-24">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover opacity-20 grayscale">
            <source src={PROCESS_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-start text-center px-8">
          <h2 className="text-orange-500 text-[10px] font-bold tracking-[0.6em] mb-4 uppercase">THE CONVENIENCE FACTOR</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tighter uppercase mb-16 text-teal-950">KITCHEN READY, <br /> COASTAL FRESH</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl w-full">
            <div className="border-l border-orange-400/50 pl-6 text-left">
              <h4 className="text-teal-900 text-xs font-bold uppercase italic font-serif mb-2">Zero Preparation</h4>
              <p className="text-teal-700/60 text-[10px] uppercase font-bold tracking-wider">De-veined prawns and descaled fish. Open the pack and start cooking.</p>
            </div>
            <div className="border-l border-teal-200 pl-6 text-left">
              <h4 className="text-teal-900 text-xs font-bold uppercase italic font-serif mb-2">Odor-Lock Tech</h4>
              <p className="text-teal-700/60 text-[10px] uppercase font-bold tracking-wider">Vacuum sealed at sub-zero temperatures to ensure your fridge stays fresh.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MALPE (Oceanic Theme) */}
      <section className="relative h-screen w-full overflow-hidden border-t border-teal-100 bg-teal-50">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover opacity-60">
            <source src={MALPE_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-teal-50/80 via-transparent to-teal-50" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <span className="text-orange-600 text-[10px] font-bold tracking-[0.6em] uppercase mb-4">The Coastal Pride</span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-8 text-teal-950">MALPE <br /> <span className="text-teal-800/60 font-black">SIGNATURE</span></h2>
          
          <Link href="/order">
            <button className="px-12 py-4 border border-teal-900/20 bg-teal-900/10 backdrop-blur-md text-teal
