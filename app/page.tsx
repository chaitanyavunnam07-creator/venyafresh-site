"use client";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full bg-[#0B1F2A] text-white selection:bg-sky-400/30 overflow-x-hidden scroll-smooth">
      {/* 1. NAVIGATION - Hand-coded SVGs to prevent Lucide build errors */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-transparent px-4 md:px-8 py-6 md:py-10">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <div className="flex w-1/4 justify-start">
            <button className="text-white hover:text-sky-400 transition-all drop-shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </button>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="flex items-center text-2xl md:text-4xl font-serif italic tracking-tighter drop-shadow-2xl">
              <span className="text-slate-100 font-bold">Venya</span>
              <span className="text-sky-400 ml-1">Fresh</span>
            </div>
          </div>
          <div className="flex w-1/4 justify-end gap-4 md:gap-6 items-center text-white drop-shadow-xl">
            <button className="hover:text-sky-400 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
            <Link href="/order" className="relative hover:text-sky-400 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span className="absolute -top-1 -right-1 bg-sky-400 text-black text-[8px] md:text-[10px] font-black h-4 w-4 md:h-5 md:w-5 flex items-center justify-center rounded-full">0</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover scale-[1.05]">
          <source src="https://l8fniptaja7gvhx6.public.blob.vercel-storage.com/13499555_3840_2160_60fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="flex flex-col mb-8 drop-shadow-2xl">
            <span className="text-[12vw] md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">NO SMELL.</span>
            <span className="text-[12vw] md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">NO MESS.</span>
            <div className="flex items-center justify-center gap-2 py-1">
              <span className="text-[10vw] md:text-6xl text-sky-400 italic font-serif lowercase">just</span>
              <span className="text-[12vw] md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">FRESH</span>
            </div>
            <span className="text-[14vw] md:text-8xl font-black tracking-tighter uppercase leading-[0.8] text-slate-100">SEAFOOD.</span>
          </h1>
          <Link href="/order">
            <button className="px-10 md:px-12 py-3.5 md:py-4 bg-sky-400 text-black text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] hover:bg-white transition-all rounded-full shadow-2xl">Order Prawns & Fish</button>
          </Link>
        </div>
      </section>

      {/* SECTION 2: CONVENIENCE */}
      <section className="relative h-screen w-full overflow-hidden bg-black border-t border-white/10">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover scale-[1.05]">
          <source src="https://l8fniptaja7gvhx6.public.blob.vercel-storage.com/12691240_3840_2160_24fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-sky-400 text-[10px] font-bold tracking-[0.6em] mb-4 uppercase">THE CONVENIENCE FACTOR</h2>
          <h3 className="text-3xl md:text-6xl font-extrabold tracking-tighter uppercase mb-12 max-w-4xl">KITCHEN READY, <br /> COASTAL FRESH</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-3xl w-full text-left">
            <div className="border-l-2 border-sky-400 pl-6 bg-black/30 backdrop-blur-md py-5 rounded-r-xl">
              <h4 className="text-white text-sm font-bold uppercase italic font-serif mb-2">Zero Preparation</h4>
              <p className="text-white text-[11px] uppercase font-bold tracking-wide">De-veined prawns and descaled fish. Open the pack and start cooking.</p>
            </div>
            <div className="border-l-2 border-sky-400 pl-6 bg-black/30 backdrop-blur-md py-5 rounded-r-xl">
              <h4 className="text-white text-sm font-bold uppercase italic font-serif mb-2">Odor-Lock Tech</h4>
              <p className="text-white text-[11px] uppercase font-bold tracking-wide">Vacuum sealed at sub-zero temperatures to ensure your fridge stays fresh.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MALPE */}
      <section className="relative h-screen w-full overflow-hidden bg-black border-t border-white/10">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover scale-[1.05]">
          <source src="https://l8fniptaja7gvhx6.public.blob.vercel-storage.com/14140407_3840_2160_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <span className="text-sky-400 text-[10px] font-bold tracking-[0.6em] uppercase mb-4">The Coastal Pride</span>
          <h2 className="text-5xl md:text-9xl font-black tracking-tighter uppercase mb-8 leading-none">MALPE <br /> <span className="text-white/80 font-black">SIGNATURE</span></h2>
          <Link href="/order">
            <button className="px-12 py-4 border border-white/40 bg-black/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-sky-400 hover:text-black transition-all rounded-full">Order Malpe Catch</button>
          </Link>
        </div>
      </section>

      {/* SECTION 4: ANDAMAN */}
      <section className="relative h-screen w-full overflow-hidden bg-black border-t border-white/10">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover scale-[1.05]">
          <source src="https://l8fniptaja7gvhx6.public.blob.vercel-storage.com/13499555_3840_2160_60fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="mb-6 px-6 py-2 border border-sky-400/50 rounded-full bg-black/40 backdrop-blur-md"><span className="text-sky-400 text-[10px] font-black uppercase tracking-[0.5em]">Launching Soon</span></div>
          <h2 className="text-5xl md:text-9xl font-black tracking-tighter uppercase mb-8 text-white/40 leading-none">ANDAMAN <br /> <span className="text-white/20">RESERVE</span></h2>
          <button className="px-12 py-4 border border-white/20 text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] cursor-not-allowed rounded-full bg-black/20">Notify Me</button>
        </div>
      </section>

      {/* SECTION 5: RIVER */}
      <section className="relative h-screen w-full overflow-hidden bg-black border-t border-white/10">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover scale-[1.05]">
          <source src="https://l8fniptaja7gvhx6.public.blob.vercel-storage.com/13499555_3840_2160_60fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="mb-6 px-6 py-2 border border-sky-400/50 rounded-full bg-black/40 backdrop-blur-md"><span className="text-sky-400 text-[10px] font-black uppercase tracking-[0.5em]">Launching Soon</span></div>
          <h2 className="text-5xl md:text-9xl font-black tracking-tighter uppercase mb-8 text-white/40 leading-none">RIVER <br /> <span className="text-white/20">CATCH</span></h2>
          <button className="px-12 py-4 border border-white/20 text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] cursor-not-allowed rounded-full bg-black/20">Notify Me</button>
        </div>
      </section>
    </main>
  );
}
