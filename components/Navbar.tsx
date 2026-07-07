'use client';

import React from 'react';

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Menu', id: 'menu' },
    { label: 'Order', id: 'order' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-32 bg-[#1F1126] border-b-2 border-[#2C1B18]/50 z-50 flex items-center justify-between px-36 shadow-2xl transition-all duration-500">
      
      {/* Left Side: FEBRUARY Logo - Safe & Solid */}
      <div 
        onClick={() => scrollToSection('home')} 
        className="font-serif text-4xl font-black tracking-[0.3em] text-[#FDFBF7] cursor-pointer transition-all duration-700 hover:text-[#FFD700] hover:scale-110 hover:[text-shadow:0_0_40px_rgba(255,215,0,1)]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        FEBRUARY
      </div>

      {/* Right Side: Navigation Links with Huge Padding & Fixed White Box Issue */}
      <ul className="flex items-center gap-16">
        {navItems.map((item) => (
          <li key={item.id} className="relative block overflow-visible">
            <button
              onClick={() => scrollToSection(item.id)}
              className="relative font-sans text-xl font-black uppercase tracking-[0.2em] text-[#FDFBF7] cursor-pointer bg-transparent border-none outline-none py-4 px-10 block transition-all duration-500 ease-out group
              
              /* Extreme Safe Hover Dynamics */
              hover:text-[#FFD700] 
              hover:scale-115 
              hover:tracking-[0.22em]
              
              /* Hyper Bright Multi-Layered Golden Shadow Aura */
              [text-shadow:0_0_0px_rgba(255,215,0,0)] 
              hover:[text-shadow:0_0_20px_rgba(255,215,0,1),0_0_40px_rgba(255,215,0,0.9),0_0_60px_rgba(255,215,0,0.7)]"
            >
              {item.label}

              {/* Fixed Laser Shine Effect - Absolute Container Inside the Button Padding Bounds */}
              <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none rounded-md">
                <span className="absolute inset-0 top-0 -left-[200%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-25 transition-all duration-0 group-hover:left-[250%] group-hover:duration-700 group-hover:ease-in-out" />
              </div>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}



