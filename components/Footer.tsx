'use client';

import React from 'react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#2C1B18] border-t border-[#FFD700]/10 py-16 px-24 select-none relative overflow-hidden">
      {/* Subtle Bottom Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-[#FFD700]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main 3-Column Content Layout Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start pb-12 border-b border-[#1F1126]/60">
        
        {/* COLUMN 1: Brand Essence Statement */}
        <div className="space-y-4">
          <h3 
            onClick={() => scrollToSection('home')}
            className="font-serif text-3xl font-black tracking-[0.25em] text-[#FFD700] cursor-pointer transition-all duration-500 hover:[text-shadow:0_0_15px_rgba(255,215,0,0.6)] inline-block"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            FEBRUARY
          </h3>
          <p className="font-sans text-sm font-medium text-[#FDFBF7]/60 leading-relaxed max-w-sm">
            A luxury escape nestled in nature, where premium freshly brewed coffee meets warm, slow, and unforgettable conversations.
          </p>
        </div>

        {/* COLUMN 2: Quick Links (Scroll Connected to Navbar IDs) */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-sans text-xs font-black uppercase tracking-widest text-[#FFD700]">Quick Navigation</h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
            {[
              { label: 'Home', id: 'home' },
              { label: 'About', id: 'about' },
              { label: 'Menu', id: 'menu' },
              { label: 'Order', id: 'order' },
              { label: 'Contact', id: 'contact' }
            ].map((link) => (
              <li key={link.id}>
                <button 
                  onClick={() => scrollToSection(link.id)}
                  className="font-sans text-sm font-semibold text-[#FDFBF7]/70 hover:text-[#FFD700] transition-colors duration-300 uppercase tracking-wider block text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 3: Localized Info (Margalla Hills Vibe) */}
        <div className="space-y-4">
          <h4 className="font-sans text-xs font-black uppercase tracking-widest text-[#FFD700]">The Café Location</h4>
          <div className="font-sans text-sm font-medium text-[#FDFBF7]/70 space-y-1.5">
            <p className="font-bold text-[#FDFBF7]">📍 Margalla Hills Range</p>
            <p className="pl-5 text-[#FDFBF7]/60">Islamabad, Pakistan</p>
            <p className="pt-2 font-bold text-[#FDFBF7]">⏰ Open 24 Hours / 7 Days</p>
            <p className="pl-5 text-[#FDFBF7]/60">Always ready to welcome you at home.</p>
          </div>
        </div>

      </div>

      {/* Bottom Row: Elite Owner Copyright Note */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold tracking-widest text-[#FDFBF7]/40 uppercase">
        <p>© {new Date().getFullYear()} FEBRUARY Café. All Rights Reserved.</p>
        <p className="transition-all duration-300 hover:text-[#FFD700] cursor-default">
          Designed & Curated by <span className="text-[#FFD700] font-black">Laiba</span>
        </p>
      </div>
    </footer>
  );
}


