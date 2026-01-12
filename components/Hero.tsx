
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[850px] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 hero-gradient z-10"></div>
        <div 
          className="w-full h-full bg-cover bg-center scale-105" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-Sm2DYLvLxSr4fDWT7OXffsmPSI23uwY1-iXedi9wViQi9DUVFsSKrMGAWFE1keygzYULXoX6QyMJYyw50OY3TK-7iqrhOh04NwrljiL8oE9LyHGVQRj2XQ7rjJj6mvTDxsPT9EFHyIH0-9UjRhD7YqTqs1lgRPDFXVOMyIUWwCHGZmMWvXPk1CA32BcUjj8iOu7aXNCvNFeAWA8cCoN45PXWs3gKYduzd8I8HddvRjjcOyVSh1kiMtuuIG3H7_kfrS4qhyfkN9Q')" }}
        ></div>
      </div>
      
      <div className="relative z-20 max-w-7xl px-4 text-center mt-12 mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-overlay text-gold-accent text-xs font-bold tracking-widest uppercase mb-8 border border-gold-accent/30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-accent"></span>
          </span>
          Now Booking Ramadan 2024
        </div>
        
        <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight mb-8 max-w-4xl mx-auto">
          Elevating Your Sacred <span className="text-gold-accent text-glow">Journey</span>
        </h1>
        
        <p className="text-white/80 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          Seamless pilgrimage experiences with five-star hospitality, dedicated scholars, and bespoke logistics for the discerning traveler.
        </p>
        
        <div className="bg-white rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] p-1 overflow-hidden max-w-6xl mx-auto w-full">
          <div className="flex bg-slate-50 border-b border-slate-100 p-1">
            <button className="flex items-center gap-2 px-8 py-4 text-sm font-bold text-primary bg-white rounded-2xl shadow-sm border border-slate-200">
              <span className="material-symbols-outlined text-gold-accent">package_2</span>
              Umrah Packages
            </button>
            <button className="flex items-center gap-2 px-8 py-4 text-sm font-bold text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">flight_takeoff</span>
              Flight + Hotel
            </button>
            <button className="flex items-center gap-2 px-8 py-4 text-sm font-bold text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">hail</span>
              Hajj Registration
            </button>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="flex flex-col text-left group">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Departure City</span>
                <div className="flex items-center gap-3 px-4 py-3.5 bg-slate-50 rounded-2xl border-2 border-transparent group-focus-within:border-gold-accent transition-all">
                  <span className="material-symbols-outlined text-gold-accent">location_on</span>
                  <input className="bg-transparent border-none p-0 focus:ring-0 text-base font-bold text-slate-800 w-full placeholder:text-slate-300" placeholder="London LHR" type="text" />
                </div>
              </div>
              
              <div className="flex flex-col text-left group">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Package Type</span>
                <div className="flex items-center gap-3 px-4 py-3.5 bg-slate-50 rounded-2xl border-2 border-transparent group-focus-within:border-gold-accent transition-all">
                  <span className="material-symbols-outlined text-gold-accent">verified_user</span>
                  <select className="w-full border-none p-0 focus:ring-0 bg-transparent text-base font-bold text-slate-800 cursor-pointer">
                    <option>Premium Plus</option>
                    <option>Gold Standard</option>
                    <option>Silver Economy</option>
                  </select>
                </div>
              </div>
              
              <div className="flex flex-col text-left group">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Travel Window</span>
                <div className="flex items-center gap-3 px-4 py-3.5 bg-slate-50 rounded-2xl border-2 border-transparent group-focus-within:border-gold-accent transition-all">
                  <span className="material-symbols-outlined text-gold-accent">calendar_month</span>
                  <span className="text-base font-bold text-slate-800">Oct 2024</span>
                </div>
              </div>
              
              <div className="flex flex-col text-left group">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Occupancy</span>
                <div className="flex items-center gap-3 px-4 py-3.5 bg-slate-50 rounded-2xl border-2 border-transparent group-focus-within:border-gold-accent transition-all">
                  <span className="material-symbols-outlined text-gold-accent">group</span>
                  <span className="text-base font-bold text-slate-800">2 Adults</span>
                </div>
              </div>
              
              <div className="flex items-center">
                <button className="w-full bg-primary hover:bg-teal-dark text-gold-accent h-[58px] rounded-2xl font-extrabold transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20 group hover:scale-[1.02]">
                  <span className="material-symbols-outlined transition-transform group-hover:scale-110">search</span>
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
