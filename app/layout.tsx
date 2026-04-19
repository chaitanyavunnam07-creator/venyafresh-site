"use client";

import "./globals.css";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Changed bg-teal-50 to a dark color to match your oceanic theme */}
      <body className="bg-[#0B1F2A] text-slate-900 antialiased selection:bg-sky-400/30">
        {/* REMOVED: The fixed teal navigation bar. 
            Your navigation is now handled directly inside each page 
            to allow for that full-bleed video effect.
        */}
        {children}
      </body>
    </html>
  );
}
