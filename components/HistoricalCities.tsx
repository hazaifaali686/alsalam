
import React from 'react';

const HistoricalCities: React.FC = () => {
  const cities = [
    {
      name: 'Mecca Al-Mukarramah',
      tagline: 'The Holy Sanctuary',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-Sm2DYLvLxSr4fDWT7OXffsmPSI23uwY1-iXedi9wViQi9DUVFsSKrMGAWFE1keygzYULXoX6QyMJYyw50OY3TK-7iqrhOh04NwrljiL8oE9LyHGVQRj2XQ7rjJj6mvTDxsPT9EFHyIH0-9UjRhD7YqTqs1lgRPDFXVOMyIUWwCHGZmMWvXPk1CA32BcUjj8iOu7aXNCvNFeAWA8cCoN45PXWs3gKYduzd8I8HddvRjjcOyVSh1kiMtuuIG3H7_kfrS4qhyfkN9Q'
    },
    {
      name: 'Medina Al-Munawwarah',
      tagline: 'City of the Prophet',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATSJg1ebaEHUZY5ycL1jlGKbVWmtVti01-Mm_PidLDiUsloGmr5nr0i9jjaoUUnvn-sSO2QBndQuV-PL7f6leghARSTFeNWWdoH6_AVUJZJDomhM6hDJaL5nQwaVWn0Amq409ZOLerOvZ_1gqUO5hHfIpzR1ztwCjOLus62Tm1JwkrhM5NRvscMuaPIdq9MsrVXnfI_NLwHJNoTeP-RP6mQ48LVP9YeWU0F0uFRn5iquOA9cKRzsPPL4xcmA4q9FJzZqm3vunS4Mc'
    },
    {
      name: 'Jeddah Gateway',
      tagline: 'Red Sea Heritage',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBWemW8HYvTwHz3qnDBHXlTSvGRMXgoj-7DSUHWKNJYX2ROfo1hhh0QKwJ6tk4gUDU2JetOaEkyQRH7o92BNjNXbqNOuv8_oO5ewMpbSSfdnuEvtLUICwhkOu2zs7ycRp-t1fDrBC6yTRJF1nTTZdthn9I--JtAIsEdB8syuSwfYDWeGXlGih6McLcjbeJB7WM37h1r5k4ddMhBKt4X_Y19jRce9q9GJd7idaDynXFrqJJ68aOEfGQChkDuySbb6TN1qlPgnohp6U'
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Destination Spotlight</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Historical Cities</h2>
            <p className="text-slate-600 text-lg leading-relaxed">Embark on a meaningful journey through the most sacred and historic sites of the Islamic world.</p>
          </div>
          <div className="flex gap-4">
            <button className="size-12 rounded-full border border-slate-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="size-12 rounded-full border border-slate-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cities.map((city, idx) => (
            <div key={idx} className="group relative h-[550px] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent z-10"></div>
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
                style={{ backgroundImage: `url('${city.img}')` }}
              ></div>
              <div className="absolute bottom-0 left-0 p-10 z-20 w-full">
                <div className="glass-overlay p-6 rounded-2xl border border-white/20 transition-all group-hover:-translate-y-2">
                  <h4 className="text-2xl font-extrabold text-white mb-2">{city.name}</h4>
                  <p className="text-gold-accent/90 text-sm font-bold flex items-center gap-2 mb-4 uppercase tracking-widest">
                    <span className="material-symbols-outlined text-sm">stars</span> {city.tagline}
                  </p>
                  <a className="inline-flex items-center gap-2 text-white font-bold text-sm group/btn" href="#">
                    Explore Holy Sites <span className="material-symbols-outlined text-gold-accent transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoricalCities;
