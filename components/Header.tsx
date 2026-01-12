
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-primary/95 backdrop-blur-md border-b border-gold-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="size-12 bg-gold-accent rounded-xl flex items-center justify-center text-primary transform rotate-3">
              <span className="material-symbols-outlined text-3xl transform -rotate-3">mosque</span>
            </div>
            <div>
              <h1 className="text-2xl font-extrabold leading-none text-white tracking-tight">Al-Salam</h1>
              <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-gold-accent mt-0.5">Travel & Tours</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-10">
            <a className="text-sm font-semibold text-gold-accent border-b-2 border-gold-accent pb-1" href="#">Home</a>
            <a className="text-sm font-semibold text-white/80 hover:text-gold-accent transition-colors" href="#">Hajj 2024</a>
            <a className="text-sm font-semibold text-white/80 hover:text-gold-accent transition-colors" href="#">Umrah</a>
            <a className="text-sm font-semibold text-white/80 hover:text-gold-accent transition-colors" href="#">Flights</a>
            <a className="text-sm font-semibold text-white/80 hover:text-gold-accent transition-colors" href="#">Hotels</a>
            <a className="text-sm font-semibold text-white/80 hover:text-gold-accent transition-colors" href="#">Corporate</a>
          </nav>
          
          <div className="flex items-center gap-6">
            <div className="hidden xl:flex flex-col items-end">
              <span className="text-[10px] text-white/50 uppercase font-bold tracking-wider">Expert Guidance</span>
              <a className="text-sm font-bold text-white hover:text-gold-accent transition-colors flex items-center gap-1" href="tel:+18001234567">
                <span className="material-symbols-outlined text-sm">phone_in_talk</span>
                +1 (800) 123-4567
              </a>
            </div>
            <button className="bg-gold-accent hover:bg-gold-muted text-primary px-8 py-3 rounded-xl text-sm font-extrabold transition-all shadow-lg shadow-gold-accent/20 hover:scale-105 active:scale-95">
              Plan Your Trip
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
