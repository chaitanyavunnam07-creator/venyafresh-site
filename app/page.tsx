"use client";

import React from "react";
import { Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full bg-[#0B1F2A] text-white selection:bg-sky-400/30 overflow-x-hidden scroll-smooth">
      
      {/* 1. NAVIGATION - Fixed Responsive Alignment */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-transparent px-4 md:px-8 py-6 md:py-10">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          
          {/* Left: Account */}
          <div className="flex w-1/4 justify-start">
            <button className="text-white hover:text-sky-400 transition-colors drop-shadow-xl">
              <User size={24} strokeWidth={1.5} />
            </button>
          </div>
          
          {/* Center: Brand Identity */}
          <div className="flex-1 flex justify-center items-center">
            <div className="flex items-center text-2xl md:text-4xl font-serif italic tracking-tighter drop-shadow-2xl">
              <span className="text-slate-100 font-bold">Venya</span>
              <span className="text-sky-400 ml-1">Fresh</span>
            </div>
          </div>

          {/* Right: Utilities */}
          <div className="flex w-1/4 justify-end gap-4 md:gap-6 items-center text-white drop-shadow-xl">
            <Search size={22} strokeWidth={1.5} className="cursor-pointer hover:text-sky-400" />
            <div className="relative cursor-pointer hover:text-sky-400">
              <ShoppingBag size={22} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 bg-sky-400 text-black text-[8px] md:text-[10px] font-black h-4 w-4 md:h-5 md:w-5 flex items-center justify-center rounded-full">0</span>
            </div>
          </div>
        </div>
      </nav>

      {/* SECTION 1: HERO - Using VW units for fluid mobile text */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover scale-[1.05]">
          <source src="https://l8fniptaja7gvhx6.public.blob.vercel-storage.com/13499555_3840_2160_60fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="flex flex-col mb-8 drop-shadow-2xl">
            <span className="text-[12vw] md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-white">NO SMELL.</span>
            <span className="text-[12vw] md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-white">NO MESS.</span>
            <div className="flex items-center justify-center gap-2 py-1">
              <span className="text-[10vw] md:text-6xl text-sky-400 italic font-serif lowercase">just</span>
              <span className="text-[12vw] md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-white">FRESH</span>
            </div>
            <span className="text-[14vw] md:text-8xl font-black tracking-tighter uppercase leading-[0.8] text-slate-100">SEAFOOD.</span>
          </h1>
          <Link href="/order">
            <button className="px-10 md:px-12 py-3.5 md:py-4 bg-sky-400
