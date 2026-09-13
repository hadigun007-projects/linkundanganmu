'use client';

import React, { useState } from 'react';
import { Music, MapPin, CheckCircle2, Heart, MessageSquare, Sparkles, Send } from 'lucide-react';

export default function PhoneMockup() {
 const [activeScreen, setActiveScreen] = useState<'cover' | 'mempelai' | 'acara' | 'rsvp'>('cover');
 const [hearts, setHearts] = useState<{ id: number; x: number }[]>([]);
 const [wishInput, setWishInput] = useState('');
 const [wishes, setWishes] = useState([
 { name: 'Dimas & Riana', text: 'Horeee selamat yaa Arya & Sarah! Nggak sabar hadir' },
 { name: 'Nabila Putri', text: 'Cantik banget Sarah! Lancar yaa sayang' }
 ]);

 const addHeartReaction = () => {
 const newHeart = {
 id: Date.now(),
 x: Math.random() * 40 - 20 // random horizontal sway
 };
 setHearts(prev => [...prev, newHeart]);
 setTimeout(() => {
 setHearts(prev => prev.filter(h => h.id !== newHeart.id));
 }, 2000);
 };

 const handleSendWish = (e: React.FormEvent) => {
 e.preventDefault();
 if (!wishInput.trim()) return;
 setWishes(prev => [
 { name: 'Kamu (Preview Tamu)', text: wishInput.trim() },
 ...prev
 ]);
 setWishInput('');
 addHeartReaction();
 };

 return (
 <div className="relative mx-auto flex flex-col items-center">
 
 {/* Cheerful Warm Ambient Glow behind Phone */}
 <div className="absolute -inset-6 bg-gradient-to-tr from-rose-400/25 via-amber-300/30 to-orange-400/25 blur-3xl -z-10 rounded-[60px] animate-pulse"></div>

 {/* Floating Cheerful Badge 1: Real-time RSVP */}
 <div className="absolute -left-6 sm:-left-12 top-20 z-30 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-rose-200/80 flex items-center gap-3 animate-bounce-slow">
 <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center text-white shadow-xs">
 <CheckCircle2 className="w-5 h-5 text-white" />
 </div>
 <div>
 <p className="text-xs font-extrabold text-slate-900 leading-tight">48 Sahabat Hadir</p>
 <p className="text-[10px] text-rose-600 font-semibold">RSVP Live & Ceria</p>
 </div>
 </div>

 {/* Floating Cheerful Badge 2: Musik Romantis */}
 <div className="absolute -right-4 sm:-right-10 bottom-28 z-30 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-amber-200/80 flex items-center gap-3">
 <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-amber-400 to-rose-400 flex items-center justify-center text-white shadow-xs animate-spin-slow">
 <Music className="w-4 h-4" />
 </div>
 <div>
 <p className="text-xs font-extrabold text-slate-900 leading-tight">Lagu Pilihan Berdua</p>
 <p className="text-[10px] text-amber-700 font-semibold">Autoplay Ramah HP</p>
 </div>
 </div>

 {/* Phone Frame (iPhone 16 Pro Style) */}
 <div className="relative w-[285px] sm:w-[325px] h-[580px] sm:h-[630px] bg-stone-900 rounded-[50px] p-3.5 shadow-2xl ring-2 ring-stone-700/80 border-[3px] border-amber-400/30">
 
 {/* Dynamic Island */}
 <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-40 flex items-center justify-center shadow-xs">
 <div className="w-2.5 h-2.5 rounded-full bg-stone-900 mr-2"></div>
 <div className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></div>
 </div>

 {/* Screen Container */}
 <div className="relative w-full h-full bg-[#FFFBF7] rounded-[40px] overflow-hidden flex flex-col justify-between text-slate-900 select-none shadow-inner border border-amber-100">
 
 {/* Status Bar */}
 <div className="pt-2 px-6 flex justify-between items-center text-[10px] font-semibold text-stone-500 z-30">
 <span>09:41</span>
 <div className="flex items-center gap-1.5">
 <span className="text-[9px] bg-rose-100 text-rose-700 px-1.5 py-0.2 rounded font-bold">5G</span>
 <div className="w-4 h-2 border border-stone-400 rounded-sm p-0.5">
 <div className="h-full w-full bg-emerald-500 rounded-2xs"></div>
 </div>
 </div>
 </div>

 {/* Floating Heart Animations Area */}
 <div className="absolute inset-0 pointer-events-none z-50 flex items-center justify-center">
 {hearts.map(h => (
 <div
 key={h.id}
 className="absolute animate-float-heart text-2xl"
 style={{ transform: `translateX(${h.x}px)` }}
 >
 
 </div>
 ))}
 </div>

 {/* Dynamic Screen Contents */}
 <div className="flex-1 overflow-y-auto pt-3 pb-2 px-3 text-center transition-all duration-300">
 
 {/* SCREEN 1: COVER */}
 {activeScreen === 'cover' && (
 <div className="h-full flex flex-col justify-between items-center py-1 animate-fade-in">
 <div className="space-y-1">
 <span className="inline-flex items-center gap-1 text-[9px] font-bold tracking-wider text-rose-700 uppercase bg-rose-100/90 px-3 py-0.5 rounded-full">
 <span></span> The Wedding Celebration <span></span>
 </span>
 <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 pt-1">
 Arya & Sarah
 </h3>
 <p className="text-[10px] text-amber-800 font-semibold tracking-wider uppercase">
 Sabtu, 24 Oktober 2026 
 </p>
 </div>

 {/* Couple Image Frame with Floral Arch */}
 <div className="relative w-36 h-48 rounded-t-full rounded-b-2xl overflow-hidden p-1 bg-gradient-to-b from-rose-400 via-amber-300 to-rose-400 shadow-lg my-auto">
 <img
 src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop"
 alt="Couple Preview"
 className="w-full h-full object-cover rounded-t-full rounded-b-xl"
 />
 <div className="absolute bottom-2 inset-x-2 bg-black/60 backdrop-blur-xs py-1 rounded-xl text-white text-[9px] font-bold flex items-center justify-center gap-1">
 <span></span> Walimatul 'Ursy <span></span>
 </div>
 </div>

 {/* Interactive Open Invitation Preview */}
 <div className="w-full px-2 space-y-2 pb-1">
 <div className="bg-white/90 border border-amber-200 rounded-xl p-2 text-center shadow-xs">
 <p className="text-[8px] text-stone-500 uppercase tracking-wider">Kepada Yth. Sahabat Tercinta:</p>
 <p className="text-xs font-bold text-slate-900">Dimas Anggara & Partner </p>
 </div>
 
 <button
 onClick={addHeartReaction}
 className="w-full py-2.5 px-3 rounded-full bg-cheerful-gradient text-white text-xs font-bold shadow-md flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
 >
 <Heart className="w-3.5 h-3.5 fill-white" />
 <span>Buka Undangan (Klik!) </span>
 </button>
 </div>
 </div>
 )}

 {/* SCREEN 2: MEMPELAI */}
 {activeScreen === 'mempelai' && (
 <div className="py-2 space-y-3 animate-fade-in">
 <span className="inline-block text-[9px] font-bold tracking-widest text-amber-800 uppercase bg-amber-100/70 px-3 py-0.5 rounded-full">
 Kedua Mempelai Berbahagia
 </span>

 {/* Groom */}
 <div className="p-3 rounded-2xl bg-white border border-rose-100 shadow-xs flex items-center gap-3 text-left">
 <img
 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
 alt="Groom"
 className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-400 shadow-xs"
 />
 <div>
 <h4 className="text-xs font-bold text-slate-900 leading-tight">Raden Arya, S.T.</h4>
 <p className="text-[9px] text-stone-500">Putra Bpk. Ir. H. Bambang</p>
 <span className="text-[8px] text-rose-600 font-semibold">@aryapratama </span>
 </div>
 </div>

 <div className="font-serif text-lg text-rose-500 font-bold -my-1">&</div>

 {/* Bride */}
 <div className="p-3 rounded-2xl bg-white border border-rose-100 shadow-xs flex items-center gap-3 text-left">
 <img
 src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
 alt="Bride"
 className="w-12 h-12 rounded-full object-cover ring-2 ring-rose-400 shadow-xs"
 />
 <div>
 <h4 className="text-xs font-bold text-slate-900 leading-tight">Adinda Sarah, S.I.Kom.</h4>
 <p className="text-[9px] text-stone-500">Putri Bpk. Drs. H. Suryo</p>
 <span className="text-[8px] text-rose-600 font-semibold">@adindasarah </span>
 </div>
 </div>

 <button
 onClick={addHeartReaction}
 className="px-4 py-1.5 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-700 text-[10px] font-bold transition flex items-center justify-center gap-1 mx-auto"
 >
 <span>Kirim Cinta Untuk Mempelai</span>
 <Heart className="w-3 h-3 fill-rose-600" />
 </button>
 </div>
 )}

 {/* SCREEN 3: ACARA */}
 {activeScreen === 'acara' && (
 <div className="py-2 space-y-3 animate-fade-in text-left">
 <div className="text-center">
 <span className="text-[9px] font-bold tracking-widest text-amber-800 uppercase bg-amber-100/70 px-3 py-0.5 rounded-full">
 Jadwal Rangkaian Acara
 </span>
 </div>

 {/* Akad Card */}
 <div className="p-3 rounded-2xl bg-white border border-amber-200 shadow-xs space-y-1">
 <div className="flex justify-between items-center">
 <span className="text-[9px] font-bold text-rose-700 uppercase bg-rose-50 px-2 py-0.5 rounded">Akad Nikah </span>
 <span className="text-[9px] text-stone-500 font-semibold">08:00 - 10:00 WIB</span>
 </div>
 <h4 className="text-xs font-bold text-slate-900 pt-0.5">Masjid Agung Al-Azhar</h4>
 <p className="text-[9px] text-stone-500 leading-tight">Jl. Sisingamangaraja, Jakarta Selatan</p>
 <div className="pt-1.5 flex items-center gap-1 text-[9px] font-bold text-rose-600">
 <MapPin className="w-3 h-3" />
 <span>Titik Google Maps Akurat </span>
 </div>
 </div>

 {/* Resepsi Card */}
 <div className="p-3 rounded-2xl bg-white border border-amber-200 shadow-xs space-y-1">
 <div className="flex justify-between items-center">
 <span className="text-[9px] font-bold text-amber-800 uppercase bg-amber-50 px-2 py-0.5 rounded">Resepsi Pesta </span>
 <span className="text-[9px] text-stone-500 font-semibold">11:00 - 14:00 WIB</span>
 </div>
 <h4 className="text-xs font-bold text-slate-900 pt-0.5">Grand Ballroom Mulia</h4>
 <p className="text-[9px] text-stone-500 leading-tight">Senayan, Jakarta Pusat</p>
 <div className="pt-1.5 flex items-center gap-1 text-[9px] font-bold text-amber-700">
 <MapPin className="w-3 h-3" />
 <span>Navigasi Sekali Sentuh </span>
 </div>
 </div>
 </div>
 )}

 {/* SCREEN 4: RSVP */}
 {activeScreen === 'rsvp' && (
 <div className="py-1 space-y-2 animate-fade-in text-left">
 <div className="text-center">
 <span className="text-[9px] font-bold tracking-widest text-rose-700 uppercase bg-rose-100/70 px-3 py-0.5 rounded-full">
 Buku Tamu & Doa Restu
 </span>
 </div>

 {/* Form mini interaktif */}
 <form onSubmit={handleSendWish} className="p-2.5 rounded-2xl bg-white border border-rose-100 shadow-xs space-y-1.5">
 <p className="text-[9px] font-bold text-slate-800">Tuliskan Doa Restumu:</p>
 <div className="flex gap-1.5">
 <input
 type="text"
 value={wishInput}
 onChange={e => setWishInput(e.target.value)}
 placeholder="Ketik ucapan manismu..."
 className="w-full text-[9px] px-2 py-1 rounded-lg border border-stone-300 bg-stone-50 focus:outline-none focus:ring-1 focus:ring-rose-400"
 />
 <button
 type="submit"
 className="px-2.5 py-1 rounded-lg bg-cheerful-gradient text-white text-[9px] font-bold flex items-center justify-center"
 >
 <Send className="w-2.5 h-2.5" />
 </button>
 </div>
 </form>

 {/* Live Wishes Feed */}
 <div className="space-y-1.5 max-h-36 overflow-y-auto pr-0.5">
 {wishes.map((w, idx) => (
 <div key={idx} className="p-2 rounded-xl bg-amber-50/80 border border-amber-200 text-[9px] space-y-0.5 animate-fade-in">
 <div className="flex justify-between items-center">
 <p className="font-bold text-slate-900 flex items-center gap-1">
 <span>{w.name}</span>
 </p>
 <span className="text-[8px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.2 rounded-full">Hadir</span>
 </div>
 <p className="text-stone-700 leading-tight">"{w.text}"</p>
 </div>
 ))}
 </div>
 </div>
 )}
 </div>

 {/* Mini Cheerful Screen Switcher Tabs */}
 <div className="p-2 bg-white border-t border-amber-100 flex justify-around items-center">
 <button
 onClick={() => setActiveScreen('cover')}
 className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all ${
 activeScreen === 'cover' ? 'bg-rose-500 text-white shadow-xs scale-105' : 'text-stone-500 hover:text-slate-900'
 }`}
 >
 Cover
 </button>
 <button
 onClick={() => setActiveScreen('mempelai')}
 className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all ${
 activeScreen === 'mempelai' ? 'bg-rose-500 text-white shadow-xs scale-105' : 'text-stone-500 hover:text-slate-900'
 }`}
 >
 Mempelai
 </button>
 <button
 onClick={() => setActiveScreen('acara')}
 className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all ${
 activeScreen === 'acara' ? 'bg-rose-500 text-white shadow-xs scale-105' : 'text-stone-500 hover:text-slate-900'
 }`}
 >
 Acara
 </button>
 <button
 onClick={() => setActiveScreen('rsvp')}
 className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all ${
 activeScreen === 'rsvp' ? 'bg-rose-500 text-white shadow-xs scale-105' : 'text-stone-500 hover:text-slate-900'
 }`}
 >
 Doa
 </button>
 </div>
 </div>
 </div>
 
 {/* Helper text under mockup */}
 <div className="flex items-center gap-2 mt-3">
 <button
 onClick={addHeartReaction}
 className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/70 border border-rose-200 transition active:scale-95"
 >
 <span>Tap buat kasih love</span>
 <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
 </button>
 </div>
 </div>
 );
}
