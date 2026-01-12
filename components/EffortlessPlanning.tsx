
import React from 'react';

const EffortlessPlanning: React.FC = () => {
  const steps = [
    { num: '01', title: 'Discovery', desc: 'Consult with our advisors to tailor your spiritual journey schedule.', icon: 'forum' },
    { num: '02', title: 'Documentation', desc: 'Upload your requirements securely through our premium portal.', icon: 'inventory_2' },
    { num: '03', title: 'Confirmation', desc: 'Swift visa processing and premium travel kit delivery.', icon: 'fact_check' },
    { num: '04', title: 'Spiritual Ascent', desc: 'Begin your journey with on-ground 24/7 expert assistance.', icon: 'stars' }
  ];

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0D252B] opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-gold-accent font-bold uppercase tracking-[0.4em] text-xs mb-4 block">The Al-Salam Path</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Effortless Planning</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">From initial consultation to your safe return, we handle every detail with meticulous care.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gold-accent/10 z-0"></div>
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className="size-32 rounded-3xl bg-teal-dark border-2 border-gold-accent/20 flex items-center justify-center text-gold-accent shadow-2xl mb-8 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-5xl">{step.icon}</span>
                <div className="absolute -top-4 -right-4 size-10 rounded-xl bg-gold-accent text-primary flex items-center justify-center text-lg font-extrabold border-4 border-primary">{step.num}</div>
              </div>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EffortlessPlanning;
