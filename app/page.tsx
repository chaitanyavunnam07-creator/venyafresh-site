"use client";

import React from "react";
import Link from "next/link";

export default function Home() {
  const HERO_VIDEO = "https://l8fniptaja7gvhx6.public.blob.vercel-storage.com/Fisherman_Video_Generation.mp4";

  return (
    <main className="w-full bg-teal-50 text-teal-950 overflow-x-hidden">
      {/* FULL SCREEN HERO SECTION */}
      <section className="relative h-[95vh] w-full overflow-hidden bg-teal-100/30">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="h-full w-full object-cover opacity-80 scale-105"
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          {/* Oceanic Gradient Overlay - Smooth transition to the teal background */}
          <div className="absolute inset-0 bg-gradient-to-t from-teal-50 via-teal-50/20 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pt-20">
          <h1 className="flex flex-col mb-12 w-full max-w-[90vw]">
            <span className="text-[12vw] md:text-8xl font-black tracking-tighter uppercase leading-[0.8] text-teal-950 drop-shadow-sm">OCEAN</span>
            <div className="flex items-center justify-center gap-4 py-2">
               <span className="text-[10vw] md:text-7xl text-orange-500 italic font-serif lowercase tracking-tight">to</span>
               <span className="text-[12vw] md:text-8xl font-black tracking-tighter uppercase leading-[0.8] text-teal-900">TABLE</span>
            </div>
            <span className="text-[13vw] md:text-9xl font-black tracking-tighter uppercase leading-[0.8] text-teal-800">FRESH.</span>
          </h1>

          <div className="flex flex-col gap-4 items-center">
            <Link href="/order">
              <button className="px-16 py-6 bg-teal-900 text-teal-50 text-[12px] font-black uppercase tracking-[0.4em] hover:bg-orange-500 hover:text-white transition-all shadow-xl rounded-full">
                Shop Today's Catch
              </button>
            </Link>
            <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-teal-800/60 mt-4">
              Daily Harvest • Vihanga Delivery
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
