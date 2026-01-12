
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCategories from './components/FeaturedCategories';
import HistoricalCities from './components/HistoricalCities';
import UmrahDeals from './components/UmrahDeals';
import UmrahPlus from './components/UmrahPlus';
import EffortlessPlanning from './components/EffortlessPlanning';
import WhyChoose from './components/WhyChoose';
import Footer from './components/Footer';
import GeminiAdvisor from './components/GeminiAdvisor';

const App: React.FC = () => {
  const [showAdvisor, setShowAdvisor] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedCategories />
        <HistoricalCities />
        <UmrahDeals />
        <UmrahPlus />
        <EffortlessPlanning />
        <WhyChoose />
      </main>
      <Footer />
      
      {/* Floating Action Button for Gemini Advisor */}
      <div className="fixed bottom-8 right-8 z-[100] group">
        <button 
          onClick={() => setShowAdvisor(!showAdvisor)}
          className="flex items-center gap-0 group-hover:gap-3 bg-primary hover:bg-teal-dark text-gold-accent px-4 py-4 rounded-full shadow-2xl transition-all duration-300 ease-in-out border border-gold-accent/20"
        >
          <span className="material-symbols-outlined text-3xl">
            {showAdvisor ? 'close' : 'chat_bubble'}
          </span>
          {!showAdvisor && (
            <span className="max-w-0 group-hover:max-w-[150px] overflow-hidden transition-all duration-300 ease-in-out text-sm font-bold whitespace-nowrap text-white uppercase tracking-widest">
              Enquire AI
            </span>
          )}
        </button>
      </div>

      {showAdvisor && (
        <div className="fixed bottom-28 right-8 z-[100] w-[90vw] md:w-[400px]">
          <GeminiAdvisor onClose={() => setShowAdvisor(false)} />
        </div>
      )}
    </div>
  );
};

export default App;
