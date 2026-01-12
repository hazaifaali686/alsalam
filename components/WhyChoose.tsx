
import React from 'react';

const WhyChoose: React.FC = () => {
  const highlights = [
    { title: 'ATOL Protection', desc: 'Financial security and peace of mind for every journey. Your pilgrimage is fully protected under legal compliance.', icon: 'verified_user' },
    { title: 'Expert Guidance', desc: 'Dedicated scholars and experienced guides accompany you to ensure every ritual is performed with profound understanding.', icon: 'psychology_alt' },
    { title: '24/7 Support', desc: 'Round-the-clock assistance from our dedicated concierge team, from departure until your safe return home.', icon: 'support_agent' },
    { title: 'Premium Stays', desc: 'Exclusive access to handpicked 5-star hotels in the closest proximity to the Haram in both Makkah and Madinah.', icon: 'hotel' }
  ];

  return (
    <section className="py-24 bg-white islamic-pattern-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-accent font-bold uppercase tracking-[0.4em] text-xs mb-3 block">Premium Excellence</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Why Choose Al-Salam</h2>
          <div className="h-1.5 w-12 bg-gold-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((h, idx) => (
            <div key={idx} className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300">
              <div className="size-16 bg-slate-50 rounded-2xl flex items-center justify-center text-gold-accent mb-6 group-hover:bg-gold-accent group-hover:text-white transition-colors duration-500">
                <span className="material-symbols-outlined text-4xl">{h.icon}</span>
              </div>
              <h4 className="text-xl font-extrabold text-primary mb-4">{h.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
