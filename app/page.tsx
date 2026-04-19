"use client";

import React from "react";
import { Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";

export default function Home() {
  // VIDEO SOURCE LOGIC
  const HERO_VIDEO = "https://l8fniptaja7gvhx6.public.blob.vercel-storage.com/13499555_3840_2160_60fps.mp4";
  const PROCESS_VIDEO = "https://l8fniptaja7gvhx6.public.blob.vercel-storage.com/12691240_3840_2160_24fps.mp4"; 
  const MALPE_VIDEO = "https://l8fniptaja7gvhx6.public.blob.vercel-storage.com/14140407_3840_2160_30fps.mp4";
  const ANDAMAN_VIDEO = "https://l8fniptaja7gvhx6.public.blob.vercel-storage.com/13499555_3840_2160_60fps.mp4";
  const RIVER_VIDEO = "https://l8fniptaja7gvhx6.public.blob.vercel-storage.com/13499555_3840_2160_60fps.mp4";

  return (
    <main className="w-full bg-[#0B1F2A] text-white selection:bg-sky-400/30 overflow-x-hidden scroll-smooth">
      
      {/* 1. NAVIGATION - SYNCED COLOR & SCALE */}
      <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-8 py-10 bg-transparent">
        <div className="flex w-1/3 justify-start">
          <button className="text-white hover:text-sky-400 transition-colors drop-shadow-xl">
            <User size={28} strokeWidth={1.5} />
          </button>
        </div>
        
        <div className="absolute left-1/2 top-10 -translate-x-1/2 flex items-center text-4xl font-serif italic tracking-tighter drop-shadow-2xl">
          <span className="text-slate-100 font-bold">Venya</span>
          <span className="text-sky-400 ml-1">Fresh</span>
        </div>

        <div className="flex w-1/3 justify-end gap-6 items-center text-white drop-shadow-xl">
          <Search size={26} strokeWidth={1.5} className="cursor-pointer hover:text-sky-400" />
          <div className="relative cursor-pointer hover:text-sky-400">
            <ShoppingBag size={26} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 bg-sky-400 text-black text-[10px] font-black h-5 w-5 flex items-center justify-center rounded-full">0</span>
          </div>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover scale-[1.05]">
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="flex flex-col mb-8 drop-shadow-2xl">
            <span className="text-[10vw] md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-white">NO SMELL.</span>
            <span className="text-[10vw] md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-white">NO MESS.</span>
            <div className="flex items-center justify-center gap-2 py-1">
              <span className="text-[8vw] md:text-6xl text-sky-400 italic font-serif lowercase">just</span>
              <span className="text-[10vw] md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-white">FRESH</span>
