'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Connects directly to your local route handler setup inside app/api/contact/route.ts
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          // Since message handles the main text field, we send it cleanly
          message: `[Phone: ${formData.phone}] - ${formData.message}`
        })
      });

      const data = await response.json();
      
      if (data.success) {
        alert('🎉 Success: Message sent successfully and logged into MongoDB!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert(`❌ Error: ${data.error || 'Message failed'}`);
      }
    } catch (error) {
      console.error(error);
      alert('❌ Something went wrong while contacting server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative w-full min-h-screen bg-[#1F1126] flex items-center justify-center py-28 px-12 select-none overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#FFD700]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl bg-[#2C1B18] border-2 border-[#2C1B18] py-16 px-14 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-[#FFD700]/30 hover:shadow-[0_30px_70px_rgba(255,215,0,0.15)] flex flex-col space-y-10">
        
        <div className="text-center space-y-3">
          <h2 className="font-serif text-5xl font-black tracking-wider text-[#FDFBF7]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Connect With <span className="text-[#FFD700] tracking-[0.12em] [text-shadow:0_0_15px_rgba(255,215,0,0.3)]">FEBRUARY</span>
          </h2>
          <p className="font-sans text-sm font-medium tracking-widest text-[#FDFBF7]/60 uppercase">
            We love golden sunsets and beautiful conversations
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
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

          <div className="flex flex-col space-y-3">
            <label className="font-sans text-xs font-black uppercase tracking-widest text-[#FFD700]">Phone Number</label>
            <input 
              type="tel" required disabled={loading} placeholder="Enter your phone number"
              className="w-full bg-[#1F1126] border border-[#2C1B18] px-5 py-4 rounded-xl font-sans text-base text-[#FDFBF7] font-semibold tracking-wide outline-none placeholder-[#FDFBF7]/30 transition-all duration-300 focus:border-[#FFD700] disabled:opacity-40"
              value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div className="flex flex-col space-y-3">
            <label className="font-sans text-xs font-black uppercase tracking-widest text-[#FFD700]">Your Message</label>
            <textarea 
              rows={5} required disabled={loading} placeholder="Write your inquiry or thoughts here..."
              className="w-full bg-[#1F1126] border border-[#2C1B18] px-5 py-4 rounded-xl font-sans text-base text-[#FDFBF7] font-semibold tracking-wide outline-none placeholder-[#FDFBF7]/30 resize-none transition-all duration-300 focus:border-[#FFD700] disabled:opacity-40"
              value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <div className="pt-6">
            <button 
              type="submit" disabled={loading}
              className="w-full py-4 bg-transparent border-2 border-[#FFD700] text-[#FFD700] font-sans text-lg font-black uppercase tracking-[0.25em] rounded-xl transition-all duration-500 ease-out transform hover:bg-[#FFD700] hover:text-[#1F1126] hover:scale-[1.03] hover:shadow-[0_15px_40px_rgba(255,215,0,0.45)] disabled:opacity-40"
            >
              {loading ? 'Sending Thought...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

