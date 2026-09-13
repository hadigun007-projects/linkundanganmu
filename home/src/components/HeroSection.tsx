'use client';

import React, { useState } from 'react';
import { ArrowRight, Star, Smartphone, Image as ImageIcon } from 'lucide-react';
import PhoneMockup from './PhoneMockup';
import FloralDecorations from './FloralDecorations';
import confetti from 'canvas-confetti';

export default function HeroSection() {
 const [viewMode, setViewMode] = useState<'polaroid' | 'phone'>('polaroid');

 const triggerConfetti = () => {
 try {
 confetti({
 particleCount: 80,
 spread: 75,
 origin: { y: 0.6 },
 colors: ['#FF6B4A', '#F59E0B', '#FBBF24', '#10B981', '#EC4899']
 });
 } catch (e) { }
 };

 return (
 <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 md:pt-40 md:pb-32 overflow-hidden bg-[#FAF4EC]">

 {/* 1. Background Botanical Line-Art & Pastel Watercolor (Kualitas Tinggi Persis Gambar Referensi) */}
 <FloralDecorations />

 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

 {/* SISI KIRI: Headline, Subheadline & Tombol Coral (Persis Gambar Referensi) */}
 <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

 {/* Headline Utama Persis Gambar Referensi */}
 <h1 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
 Undangan Web yang Bikin Tamu Gak Enak Hati Kalo Gak Ngamplop
 </h1>

 {/* Sub-headline */}
 <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
 Bikin undangan pernikahan digital impianmu dalam 5 menit! Dilengkapi amplop digital & QRIS langsung ke rekening pribadi tanpa potongan, musik romantis autoplay, dan RSVP WhatsApp otomatis.
 </p>

 {/* Tombol Coral / Salmon Persis Gambar Referensi */}
 <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
 <a
 href="#testimoni"
 className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF7E65] to-[#FF6247] hover:from-[#FF6E52] hover:to-[#FF5436] text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95"
 >
 <span>↓ Testimoni</span>
 </a>

 <a
 href="#buat"
 onClick={triggerConfetti}
 className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white hover:bg-stone-50 border-2 border-amber-300 text-slate-900 font-extrabold text-sm shadow-xs transition-all transform hover:-translate-y-0.5 active:scale-95"
 >
 <span>Mulai Buat Gratis</span>
 <ArrowRight className="w-4 h-4 text-amber-600" />
 </a>
 </div>
 </div>

 {/* SISI KANAN: Foto Polaroid Momen Indah dengan Selotip Kuning & Daun Emas (Persis Gambar Referensi) */}
 <div className="lg:col-span-5 flex flex-col items-center justify-center relative">

 {/* Toggle View Switcher */}
 <div className="mb-4 inline-flex items-center p-1 rounded-full bg-white/90 border border-stone-200 shadow-xs z-30">
 <button
 onClick={() => setViewMode('polaroid')}
 className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${viewMode === 'polaroid'
 ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-xs'
 : 'text-stone-600 hover:text-slate-900'
 }`}
 >
 <ImageIcon className="w-3.5 h-3.5" />
 <span>Foto Polaroid </span>
 </button>
 <button
 onClick={() => setViewMode('phone')}
 className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${viewMode === 'phone'
 ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-xs'
 : 'text-stone-600 hover:text-slate-900'
 }`}
 >
 <Smartphone className="w-3.5 h-3.5" />
 <span>Simulasi HP </span>
 </button>
 </div>

 {/* TAMPILAN 1: POLAROID UTAMA (PERSIS SEPERTI GAMBAR REFERENSI USER) */}
 {viewMode === 'polaroid' ? (
 <div className="relative my-4 flex items-center justify-center animate-fade-in">

 {/* Background Glow */}
 <div className="absolute -inset-6 bg-gradient-to-tr from-amber-200/40 via-rose-100/30 to-transparent blur-2xl -z-10 rounded-3xl"></div>

 {/* Frame Polaroid */}
 <div className="relative w-64 sm:w-72 md:w-80 bg-white p-3.5 sm:p-4 pb-7 sm:pb-8 rounded-2xl shadow-2xl border border-stone-200/90 -rotate-2 hover:rotate-0 transition-transform duration-500">

 {/* Selotip Kuning / Yellow Washi Tape di Atas Tengah (Persis Referensi) */}
 <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-7 sm:h-8 bg-[#F6CE57] border-y border-amber-400/50 shadow-xs z-30 flex items-center justify-center">
 <div className="w-full h-[1px] bg-amber-400/30"></div>
 </div>

 {/* Dedaunan Emas Asli di Sudut Kiri Atas (100% PNG Transparan) */}
 <div className="absolute -top-10 -left-10 w-24 h-24 pointer-events-none z-20">
 <img
 src="/golden-leaves.png"
 alt="Golden Leaves"
 className="w-full h-full object-contain -rotate-45 drop-shadow-xs"
 />
 </div>

 {/* Dedaunan Emas Asli di Sudut Kanan Bawah (100% PNG Transparan) */}
 <div className="absolute -bottom-10 -right-10 w-28 h-28 pointer-events-none z-20">
 <img
 src="/golden-leaves.png"
 alt="Golden Leaves"
 className="w-full h-full object-contain rotate-135 drop-shadow-xs"
 />
 </div>

 {/* Foto Momen Pengantin dengan Buket Bunga (Groom in Suit, Bride in Gown with Bouquet) */}
 <div className="relative w-full h-64 sm:h-72 rounded-lg overflow-hidden bg-stone-100 shadow-inner">
 <img
 src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"
 alt="Momen Indah Pengantin"
 className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
 />
 </div>

 {/* Caption Estetik */}
 <div className="mt-3 text-center">
 <p className="font-serif text-sm font-bold text-slate-800 tracking-wide">
 Arya & Sarah
 </p>
 <p className="text-[11px] text-stone-500 font-medium tracking-widest uppercase">
 24 • 10 • 2026
 </p>
 </div>

 </div>
 </div>
 ) : (
 /* TAMPILAN 2: INTERACTIVE PHONE MOCKUP */
 <div className="animate-fade-in">
 <PhoneMockup />
 </div>
 )}

 </div>

 </div>
 </div>
 </section>
 );
}
