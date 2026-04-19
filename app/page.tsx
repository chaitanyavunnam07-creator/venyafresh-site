"use client";

import React from "react";
import { Search, ShoppingBag, User } from "lucide-react"; // Replaced Menu with User
import Link from "next/link";

export default function Home() {
  // RETAINING YOUR BLOB STORAGE LOGIC
  const HERO_VIDEO = "https://l8fniptaja7gvhx6.public.blob.vercel-storage.com/13499555_3840_2160_60fps.mp4";
  const PROCESS_VIDEO = "https://l8fniptaja7gvhx6.public.blob.vercel-storage.com/12691240_3840_2160_24fps.mp4"; 
  const MALPE_VIDEO = "https://l8fniptaja7gvhx6.public.blob.vercel-storage.com/14140407_3840_2160_30fps.mp4";
  const ANDAMAN_VIDEO = "https://l8fniptaja7gvhx6.public.blob.vercel-storage.com/13499555_3840_2160_60fps.mp4";
  const RIVER_VIDEO = "https://l8fniptaja7gvhx6.public.blob.vercel-storage.com/13499555_3840_2160_60fps.mp4";

  return (
    <main className="w-full bg-[#0B1F2A] text-white selection:bg-sky-400/30 overflow-x-hidden scroll-smooth">
      
      {/* 1. NAVIGATION - Completely Transparent & Floating */}
      <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-8 py-8 bg-transparent">
        <div className="flex w-1/3 justify-start">
          <button className="text-white hover:text-sky-400 transition-colors drop-shadow-xl">
            <User size={24} strokeWidth={1.5} />
          </button>
        </div>
        
        <div className="absolute left-1/2 top-8 -translate-x-1/2 flex items-center text-2xl font-serif italic tracking-tight drop-shadow-2xl">
          <span className="text-white font-bold">Venya</span>
          <span className="text-sky-400 ml-0.5">Fresh</span>
        </div>

        <div className="flex w-1/3 justify-end gap-5 items-center text-white drop-shadow-xl">
          <Search size={22} strokeWidth={1.5} className="cursor-pointer hover:text-sky-400" />
          <div className="relative cursor-pointer hover:text-sky-400">
            <ShoppingBag size={22} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 bg-sky-400 text-black text-[8px] font-black h-4 w
