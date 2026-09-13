'use client';

import React from 'react';

export default function FloralDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none">
      
      {/* 1. TOP-LEFT BOTANICAL WATERCOLOR (100% PNG Transparan, Tanpa Kotak Putih, Tidak Menabrak Background) */}
      <div className="absolute -top-10 -left-10 sm:-top-12 sm:-left-12 w-72 sm:w-[420px] lg:w-[480px] h-72 sm:h-[420px] lg:h-[480px] opacity-75 sm:opacity-85 pointer-events-none z-0">
        <img
          src="/botanical-corner.png"
          alt="Botanical Watercolor"
          className="w-full h-full object-contain -rotate-6"
        />
      </div>

      {/* 2. SOFT CURVED WAVE DIVIDER (Kurva pembatas bawah putih halus persis gambar referensi) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-14 sm:h-20 text-[#FCFBF7]"
          preserveAspectRatio="none"
        >
          {/* Lapisan Ombak Transparan Halus */}
          <path
            d="M0,35 C280,95 540,15 820,60 C1100,105 1300,20 1440,55 L1440,120 L0,120 Z"
            fill="currentColor"
            opacity="0.45"
          />
          {/* Lapisan Ombak Utama (Solid) */}
          <path
            d="M0,60 C320,115 620,30 920,75 C1180,115 1350,45 1440,65 L1440,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

    </div>
  );
}
