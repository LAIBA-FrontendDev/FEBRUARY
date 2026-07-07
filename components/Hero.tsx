'use client';

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative w-full h-screen min-h-screen bg-gradient-to-r from-[#2C1B18] to-[#1F1126] flex items-center justify-between px-20 overflow-hidden select-none"
    >
      {/* Background Soft Golden Glow Blobs for Deep Luxury Vibe */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1F1126]/90 rounded-full blur-[120px] pointer-events-none" />

      {/* LEFT SIDE: Single Transparent Image Container with Screen-Breaking Smoke */}
      <div className="w-1/2 flex justify-center items-center relative h-full pt-10 pl-5">
        
        {/* Screen-Breaking Smoke (Pure CSS Animation - Moves up and spreads wide out of bounds) */}
        <div className="absolute top-[20%] left-[30%] w-48 h-64 pointer-events-none z-30 flex justify-center overflow-visible">
          <span className="absolute bottom-0 w-8 h-32 bg-white/10 rounded-full blur-xl animate-[screenSmoke_4s_infinite_ease-in-out]" />
          <span className="absolute bottom-0 w-14 h-40 bg-white/5 rounded-full blur-2xl animate-[screenSmoke_5s_infinite_ease-in-out_0.8s]" />
          <span className="absolute bottom-0 w-6 h-24 bg-white/15 rounded-full blur-lg animate-[screenSmoke_3.2s_infinite_ease-in-out_0.3s]" />
        </div>

        {/* The Main Dynamic Coffee Cup Image Container */}
        <div className="relative z-10 w-[500px] h-[500px] cursor-pointer group">
          {/* Inner Wrapper for Double Animation: Floating (Idle) + 360 Full Spin (Hover Interaction) */}
          <div className="w-full h-full transform transition-all duration-[1200ms] ease-in-out animate-[float_6s_infinite_ease-in-out] group-hover:scale-105 group-hover:rotate-[360deg]">
            <Image 
              src="/images/cafe/bg.png" 
              alt="FEBRUARY Premium Coffee Splash" 
              width={500}   // Fixed: Width provide kar di
              height={500}  // Fixed: Height provide kar di
              priority
              className="w-full h-full object-contain drop-shadow-[0_25px_50px_rgba(44,27,24,0.6)] filter mix-blend-multiply"
            />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Perfectly Scaled Premium Wording Content */}
      <div className="w-1/2 flex flex-col justify-center items-start pl-6 space-y-6 z-10 h-full">
        
        {/* Cafe Name - High Contrast Shiny Gold */}
        <h1 
          className="font-serif text-6xl md:text-7xl font-black tracking-[0.2em] text-[#FFD700] transition-all duration-500 hover:scale-105 hover:[text-shadow:0_0_25px_rgba(255,215,0,1)] cursor-default"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          FEBRUARY
        </h1>

        {/* Premium Description Block */}
        <div className="space-y-4 max-w-xl group/text">
          <p className="font-sans text-lg font-bold tracking-wide text-[#FDFBF7] leading-relaxed transition-all duration-300 hover:text-[#FFD700] hover:translate-x-1">
            Step into FEBRUARY — a place where time slows down and every sip of coffee feels like a soft, warm hug. Nestled near the peaceful Margalla Hills, our café is designed for those who love calm mornings, golden sunsets, and slow beautiful conversations.
          </p>
          
          <p className="font-sans text-base font-medium tracking-normal text-[#FDFBF7]/80 leading-relaxed transition-all duration-300 hover:text-[#FFD700] hover:translate-x-1">
            Here, coffee is not just a drink — it is an experience of comfort, joy, and pure relaxation. Every corner of FEBRUARY is made to make you feel at home, while still giving you the elegance of a luxury café. Enjoy every moment, every aroma, and every smile that lives inside this space.
          </p>
        </div>

        {/* Luxury Action Button */}
        <button className="mt-2 px-10 py-4 bg-transparent border-2 border-[#FFD700] text-[#FFD700] text-sm font-black tracking-[0.2em] uppercase transition-all duration-500 hover:bg-[#FFD700] hover:text-[#1F1126] hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]">
          Explore Experience
        </button>
      </div>

      {/* Embedded Animations for Fluid Real-Time Interactivity */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes screenSmoke {
          0% { transform: translateY(0px) scaleX(1); opacity: 0; }
          20% { opacity: 0.4; }
          60% { transform: translateY(-100px) scaleX(2); opacity: 0.2; }
          100% { transform: translateY(-200px) scaleX(3); opacity: 0; }
        }
      `}</style>
    </section>
  );
}



