'use client';

import React from 'react';

export default function Menu() {
  const menuCategories = [
    {
      title: "Premium Brews",
      items: [
        { name: "Margalla Hazelnut Latte", price: "Rs. 890" },
        { name: "FEBRUARY Signature Cappuccino", price: "Rs. 750" },
        { name: "Royal Cardamom Karak Chai", price: "Rs. 450" }
      ]
    },
    {
      title: "Elite Desserts",
      items: [
        { name: "Velvet Chocolate Fudge Cake", price: "Rs. 1,250" },
        { name: "Blueberry Almond Pastry", price: "Rs. 680" },
        { name: "Salted Caramel Lotus Tart", price: "Rs. 820" }
      ]
    },
    {
      title: "Artisan Refreshments",
      items: [
        { name: "Sunset Mint Margarita", price: "Rs. 590" },
        { name: "Wild Berry Iced Frappé", price: "Rs. 840" },
        { name: "Premium Irish Cold Brew", price: "Rs. 950" }
      ]
    }
  ];

  return (
    <section 
      id="menu" 
      className="relative w-full min-h-screen bg-[#1F1126] flex flex-col justify-center items-center py-16 px-12 overflow-hidden select-none"
    >
      {/* Background Subtle Golden Aesthetic Light Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFD700]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Elite Title Header */}
      <div className="text-center mb-12 z-10 space-y-3">
        <h2 
          className="font-serif text-4xl md:text-5xl font-black tracking-wider text-[#FDFBF7]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          The  <span className="text-[#FFD700] tracking-[0.15em] [text-shadow:0_0_20px_rgba(255,215,0,0.4)]">MENU</span>
        </h2>
        <div className="w-28 h-[2px] bg-[#FFD700] mx-auto opacity-80" />
      </div>

      {/* Grid Container for Categories - Compact Layout Bounds */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 z-10 px-4">
        {menuCategories.map((cat, idx) => (
          <div key={idx} className="flex flex-col space-y-6">
            
            {/* Category Subheadings */}
            <h3 className="font-serif text-xl md:text-2xl font-black text-[#FFD700] tracking-widest border-b border-[#2C1B18]/60 pb-2 pl-1">
              {cat.title}
            </h3>

            {/* Compact & Safe Cards Inside Rich Luxury Dark Brown */}
            <div className="flex flex-col gap-5">
              {cat.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx}
                  className="bg-[#2C1B18] border border-[#2C1B18] h-24 px-5 rounded-xl flex items-center justify-between gap-4 cursor-pointer transition-all duration-500 ease-out transform 
                  hover:-translate-y-1.5 hover:scale-[1.03] hover:border-[#FFD700]/50
                  shadow-[0_12px_30px_rgba(0,0,0,0.4)]
                  hover:shadow-[0_20px_40px_rgba(255,215,0,0.2),0_0_25px_rgba(255,215,0,0.15)] group"
                >
                  {/* Left: Item Name - Scaled to fit perfectly */}
                  <h4 className="font-sans text-base md:text-lg font-black tracking-wide text-[#FDFBF7] transition-colors duration-300 group-hover:text-[#FFD700] max-w-[70%] leading-snug">
                    {item.name}
                  </h4>

                  {/* Right: Gold Price Tag - Clean & Proportional */}
                  <span className="font-serif text-sm md:text-base font-black text-[#FFD700] tracking-wider shrink-0 bg-[#1F1126] px-4 py-2 rounded-lg border border-[#FFD700]/20 shadow-md group-hover:border-[#FFD700] transition-colors duration-300">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}





