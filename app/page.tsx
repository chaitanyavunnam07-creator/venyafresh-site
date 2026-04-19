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
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 pt-8 pb-6 bg-gradient-to-b from-[#0B1F2A]/95 via-[#0B1F2A]/70 to-transparent backdrop-blur-md">
        <div className="flex w-1/3 justify-start">
          <button className="text-slate-300 hover:text-white transition-colors">
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>

        <div className="absolute left-1/2 top-8 -translate-x-1/2 text-2xl tracking-tight">
          <span className="text-white font-bold">Venya</span>
          <span className="text-slate-400 ml-1">Fresh</span>
        </div>

        <div className="flex w-1/3 justify-end gap-5 items-center text-slate-300">
          <Search size={22} />
          <div className="relative">
            <ShoppingBag size={22} />
            <span className="absolute -top-1 -right-1 bg-sky-400 text-[#0B1F2A] text-[8px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover scale-105 opacity-80">
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F2A]/90 via-[#0B1F2A]/40 to-[#0B1F2A]" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="flex flex-col mb-6">
            <span className="text-[10vw] md:text-7xl font-black uppercase leading-[0.9]">
              WILD-CAUGHT.
            </span>
            <span className="text-[10vw] md:text-7xl font-black uppercase leading-[0.9]">
              COLD-CHAINED.
            </span>
            <span className="text-[12vw] md:text-8xl font-black uppercase leading-[0.85] text-sky-400">
              REAL SEAFOOD.
            </span>
          </h1>

          <Link href="/order">
            <button className="px-12 py-3.5 bg-sky-400 text-[#0B1F2A] text-xs font-bold uppercase tracking-widest rounded-full shadow-lg hover:bg-white hover:text-black transition-all">
              Shop Today’s Catch
            </button>
          </Link>
        </div>
      </section>

      {/* CONVENIENCE */}
      <section className="relative min-h-screen w-full overflow-hidden border-t border-slate-800 bg-[#0F2A38] pt-40 pb-24">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover opacity-10 grayscale">
            <source src={PROCESS_VIDEO} type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-8">
          <h2 className="text-sky-400 text-xs tracking-[0.4em] mb-4 uppercase">
            The Convenience Factor
          </h2>

          <h3 className="text-3xl md:text-5xl font-extrabold uppercase mb-16">
            KITCHEN READY. <br /> ZERO COMPROMISE.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl w-full">
            <div className="border-l border-slate-600 pl-6 text-left">
              <h4 className="text-white text-sm font-semibold mb-2">
                Zero Preparation
              </h4>
              <p className="text-slate-400 text-xs">
                Cleaned, cut and ready. No prep needed.
              </p>
            </div>

            <div className="border-l border-slate-600 pl-6 text-left">
              <h4 className="text-white text-sm font-semibold mb-2">
                Cold Chain Integrity
              </h4>
              <p className="text-slate-400 text-xs">
                Maintained at controlled temperatures end-to-end.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MALPE */}
      <section className="relative h-screen w-full overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover opacity-60">
            <source src={MALPE_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F2A]/80 via-transparent to-[#0B1F2A]" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <span className="text-sky-400 text-xs tracking-[0.4em] uppercase mb-4">
            Coastal Origin
          </span>

          <h2 className="text-5xl md:text-8xl font-black uppercase mb-8">
            MALPE <br /> SIGNATURE
          </h2>

          <Link href="/order">
            <button className="px-10 py-3 border border-slate-500 text-slate-300 text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all">
              Order Malpe Catch
            </button>
          </Link>
        </div>
      </section>

      {/* ANDAMAN */}
      <section className="relative h-screen w-full overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover opacity-40 grayscale">
            <source src={ANDAMAN_VIDEO} type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <span className="text-slate-500 text-xs tracking-widest uppercase mb-4">
            Launching Soon
          </span>

          <h2 className="text-5xl md:text-8xl font-black uppercase opacity-40">
            ANDAMAN RESERVE
          </h2>

          <button className="mt-6 px-10 py-3 border border-slate-600 text-slate-500 text-xs uppercase tracking-widest rounded-full cursor-not-allowed">
            Notify Me
          </button>
        </div>
      </section>

      {/* RIVER */}
      <section className="relative h-screen w-full overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover opacity-40 grayscale">
            <source src={RIVER_VIDEO} type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <span className="text-slate-500 text-xs tracking-widest uppercase mb-4">
            Freshwater Collection
          </span>

          <h2 className="text-5xl md:text-8xl font-black uppercase opacity-40">
            RIVER CATCH
          </h2>

          <button className="mt-6 px-10 py-3 border border-slate-600 text-slate-500 text-xs uppercase tracking-widest rounded-full cursor-not-allowed">
            Notify Me
          </button>
        </div>
      </section>

    </main>
  );
}
