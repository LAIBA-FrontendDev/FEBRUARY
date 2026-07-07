'use client';

import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section 
      id="about" 
      className="relative w-full h-screen min-h-screen bg-gradient-to-br from-[#2C1B18] to-[#1F1126] flex items-center justify-between px-20 overflow-hidden select-none"
    >
      {/* Background Soft Floating Coffee Beans/Leaves Effect using Blur Blobs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#FFD700]/5 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#2C1B18]/60 rounded-full blur-[100px] pointer-events-none" />

      {/* LEFT SIDE: Refined Card Layout with Heavy Top Padding for Perfect Visibility */}
      <div className="w-1/2 flex justify-center items-center relative h-full pt-28 pl-8 transition-all duration-700 ease-in-out group group-hover:pt-36 group-hover:pl-14">
        
        {/* The Main High-End Visual Card Frame - Fully Bright with Golden Glow Hover */}
        <div className="relative w-[450px] h-[450px] bg-[#1F1126]/20 border border-[#FFD700]/30 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-700 ease-in-out hover:border-[#FFD700]/80 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(255,215,0,0.35)]">
          
          {/* Full-Card High-Definition Clean Image Asset Component */}
          <Image 
            src="/images/cafe/door.png" 
            alt="FEBRUARY Café Ambiance Experience"
            fill
            sizes="450px"
            priority
            className="object-cover transform transition-transform duration-1000 ease-in-out group-hover:scale-105 pt-38"
          />

          {/* Luxury Soft Overlay Gradient To Maintain High Design Identity (Kept Minimal & Bright) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1126]/30 via-transparent to-transparent pointer-events-none" />
          
        </div>
      </div>

      {/* RIGHT SIDE: Elegant Content & Beautiful Story Wording */}
      <div className="w-1/2 flex flex-col justify-center items-start pl-8 space-y-6 z-10 h-full">
        
        {/* Section Heading */}
        <h2 
          className="font-serif text-5xl font-black tracking-wide text-[#FDFBF7] transition-all duration-500 hover:text-[#FFD700] hover:translate-x-1 cursor-default"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          About <span className="text-[#FFD700] tracking-[0.15em] [text-shadow:0_0_15px_rgba(255,215,0,0.4)]">FEBRUARY</span>
        </h2>

        {/* Story Paragraph Blocks with Soft Hover Lights Dynamic Shift */}
        <div className="space-y-5 max-w-xl group/aboutText">
          
          <p className="font-sans text-lg font-bold tracking-wide text-[#FDFBF7] leading-relaxed transition-all duration-300 hover:text-[#FFD700] hover:translate-x-2">
            FEBRUARY is a premium café launched on <span className="text-[#FFD700] border-b border-[#FFD700]/30 font-black">23 February 2026</span>, designed by <span className="text-[#FFD700] font-black uppercase tracking-wider">Laiba</span> with inspiration from the breathtaking beauty of Margalla Hills.
          </p>
          
          <p className="font-sans text-base font-medium tracking-normal text-[#FDFBF7]/85 leading-relaxed transition-all duration-300 hover:text-[#FFD700] hover:translate-x-2">
            The café is more than just a place — it is a journey into calmness, luxury, and nature blended together. Every corner tells a story of elegance and warmth.
          </p>
          
          <p className="font-sans text-base font-light italic tracking-wide text-[#FDFBF7]/70 leading-relaxed transition-all duration-300 hover:text-[#FFD700] hover:translate-x-2">
            From peaceful mornings to golden sunsets, FEBRUARY welcomes everyone to experience coffee in its most beautiful form — where time slows down and moments become memories.
          </p>
        </div>

        {/* Premium Brand Decorative Accent Underline Line */}
        <div className="w-24 h-[2px] bg-gradient-to-r from-[#FFD700] to-transparent transition-all duration-500 group-hover/aboutText:w-48" />
      </div>
    </section>
  );
}


