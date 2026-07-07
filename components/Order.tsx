'use client';

import React, { useState } from 'react';

export default function Order() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',    // Added to match your specific MongoDB schema requirements
    address: '',  // Added to match your specific MongoDB schema requirements
    item: '',
    quantity: '1',
    note: ''
  });

  const menuOptions = [
    "Margalla Hazelnut Latte (Rs. 890)",
    "FEBRUARY Signature Cappuccino (Rs. 750)",
    "Royal Cardamom Karak Chai (Rs. 450)",
    "Velvet Chocolate Fudge Cake (Rs. 1250)",
    "Blueberry Almond Pastry (Rs. 680)",
    "Salted Caramel Lotus Tart (Rs. 820)",
    "Sunset Mint Margarita (Rs. 590)",
    "Wild Berry Iced Frappé (Rs. 840)",
    "Premium Irish Cold Brew (Rs. 950)"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Connects directly to your local route handler setup inside app/api/order/route.ts
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          item: formData.item,
          quantity: Number(formData.quantity),
          address: formData.address,
          notes: formData.note // Maps directly to your schema's "notes" optional property
        })
      });

      const data = await response.json();

      if (data.success) {
        alert('🎉 Success: Order placed successfully and recorded inside MongoDB Atlas!');
        setFormData({ name: '', email: '', phone: '', address: '', item: '', quantity: '1', note: '' });
      } else {
        alert(`❌ Error: ${data.error || 'Order failed'}`);
      }
    } catch (error) {
      console.error(error);
      alert('❌ Something went wrong while logging your luxury order.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="order" 
      className="relative w-full min-h-screen bg-[#1F1126] flex items-center justify-center py-28 px-12 select-none overflow-hidden"
    >
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#FFD700]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl bg-[#2C1B18] border-2 border-[#2C1B18] py-16 px-14 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-[#FFD700]/30 hover:shadow-[0_30px_70px_rgba(255,215,0,0.15)] flex flex-col space-y-10">
        
        <div className="text-center space-y-3">
          <h2 className="font-serif text-5xl font-black tracking-wider text-[#FDFBF7]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Reserve Your <span className="text-[#FFD700] tracking-[0.12em] [text-shadow:0_0_15px_rgba(255,215,0,0.3)]">EXPERIENCE</span>
          </h2>
          <p className="font-sans text-sm font-medium tracking-widest text-[#FDFBF7]/60 uppercase">
            Place your premium cafe order below
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
          
          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-3">
              <label className="font-sans text-xs font-black uppercase tracking-widest text-[#FFD700]">Full Name</label>
              <input 
                type="text" required disabled={loading} placeholder="Enter your name"
                className="w-full bg-[#1F1126] border border-[#2C1B18] px-5 py-4 rounded-xl font-sans text-base text-[#FDFBF7] font-semibold tracking-wide outline-none placeholder-[#FDFBF7]/30 transition-all duration-300 focus:border-[#FFD700] disabled:opacity-40"
                value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div className="flex flex-col space-y-3">
              <label className="font-sans text-xs font-black uppercase tracking-widest text-[#FFD700]">Email Address</label>
              <input 
                type="email" required disabled={loading} placeholder="Enter your email"
                className="w-full bg-[#1F1126] border border-[#2C1B18] px-5 py-4 rounded-xl font-sans text-base text-[#FDFBF7] font-semibold tracking-wide outline-none placeholder-[#FDFBF7]/30 transition-all duration-300 focus:border-[#FFD700] disabled:opacity-40"
                value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          {/* NEW ROW: Contact Number and Physical/Table Address Required by Database Schema */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-3">
              <label className="font-sans text-xs font-black uppercase tracking-widest text-[#FFD700]">Phone Number</label>
              <input 
                type="tel" required disabled={loading} placeholder="Enter active contact number"
                className="w-full bg-[#1F1126] border border-[#2C1B18] px-5 py-4 rounded-xl font-sans text-base text-[#FDFBF7] font-semibold tracking-wide outline-none placeholder-[#FDFBF7]/30 transition-all duration-300 focus:border-[#FFD700] disabled:opacity-40"
                value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            
            <div className="flex flex-col space-y-3">
              <label className="font-sans text-xs font-black uppercase tracking-widest text-[#FFD700]">Table Number / Delivery Address</label>
              <input 
                type="text" required disabled={loading} placeholder="e.g. Table 04 or Street Path"
                className="w-full bg-[#1F1126] border border-[#2C1B18] px-5 py-4 rounded-xl font-sans text-base text-[#FDFBF7] font-semibold tracking-wide outline-none placeholder-[#FDFBF7]/30 transition-all duration-300 focus:border-[#FFD700] disabled:opacity-40"
                value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
            </div>
          </div>

          {/* Row 3: Select Item Dropdown and Quantity */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col space-y-3 md:col-span-2">
              <label className="font-sans text-xs font-black uppercase tracking-widest text-[#FFD700]">Select Flavour/Item</label>
              <select 
                required disabled={loading}
                className="w-full bg-[#1F1126] border border-[#2C1B18] px-5 py-4 rounded-xl font-sans text-base text-[#FDFBF7] font-semibold tracking-wide outline-none transition-all duration-300 cursor-pointer focus:border-[#FFD700] disabled:opacity-40"
                value={formData.item} onChange={(e) => setFormData({...formData, item: e.target.value})}
              >
                <option value="" disabled className="text-[#FDFBF7]/30">Choose a delicacy...</option>
                {menuOptions.map((opt, i) => (
                  <option key={i} value={opt} className="bg-[#1F1126] text-[#FDFBF7] font-medium py-2">{opt}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col space-y-3">
              <label className="font-sans text-xs font-black uppercase tracking-widest text-[#FFD700]">Quantity</label>
              <input 
                type="number" min="1" max="20" required disabled={loading}
                className="w-full bg-[#1F1126] border border-[#2C1B18] px-5 py-4 rounded-xl font-sans text-base text-[#FDFBF7] font-semibold tracking-wide outline-none transition-all duration-300 focus:border-[#FFD700] disabled:opacity-40"
                value={formData.quantity} onChange={(e) => setFormData({...formData, quantity: e.target.value})}
              />
            </div>
          </div>

          {/* Row 4: Special Request Box */}
          <div className="flex flex-col space-y-3">
            <label className="font-sans text-xs font-black uppercase tracking-widest text-[#FFD700]">Special Notes (Optional)</label>
            <textarea 
              rows={4} disabled={loading} placeholder="Any custom instructions or allergies..."
              className="w-full bg-[#1F1126] border border-[#2C1B18] px-5 py-4 rounded-xl font-sans text-base text-[#FDFBF7] font-semibold tracking-wide outline-none placeholder-[#FDFBF7]/30 resize-none transition-all duration-300 focus:border-[#FFD700] disabled:opacity-40"
              value={formData.note} onChange={(e) => setFormData({...formData, note: e.target.value})}
            />
          </div>

          <div className="pt-6">
            <button 
              type="submit" disabled={loading}
              className="w-full py-4 bg-transparent border-2 border-[#FFD700] text-[#FFD700] font-sans text-lg font-black uppercase tracking-[0.25em] rounded-xl transition-all duration-500 ease-out transform hover:bg-[#FFD700] hover:text-[#1F1126] hover:scale-[1.03] hover:shadow-[0_15px_40px_rgba(255,215,0,0.45)] disabled:opacity-40"
            >
              {loading ? 'Processing Luxury...' : 'Confirm Luxury Order'}
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}

