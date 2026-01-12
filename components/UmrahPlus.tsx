
import React from 'react';

const UmrahPlus: React.FC = () => {
  const packages = [
    {
      title: 'Umrah Plus Morocco Holiday',
      desc: 'Visit holy cities of Makkah & Madinah with a short relaxing break in Morocco!',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-Sm2DYLvLxSr4fDWT7OXffsmPSI23uwY1-iXedi9wViQi9DUVFsSKrMGAWFE1keygzYULXoX6QyMJYyw50OY3TK-7iqrhOh04NwrljiL8oE9LyHGVQRj2XQ7rjJj6mvTDxsPT9EFHyIH0-9UjRhD7YqTqs1lgRPDFXVOMyIUWwCHGZmMWvXPk1CA32BcUjj8iOu7aXNCvNFeAWA8cCoN45PXWs3gKYduzd8I8HddvRjjcOyVSh1kiMtuuIG3H7_kfrS4qhyfkN9Q',
      price: 1279,
      includes: [
        'Full round air ticket & Umrah Visa',
        '5 Nights in Makkah 5 Nights in Madinah + 4 Days in Morocco',
        'Breakfast in Makkah and Madinah Hotels',
        'Round Transfer in Makkah and Madinah',
        'Airport Transfers in Morocco'
      ]
    },
    {
      title: 'Umrah Plus Doha Holiday',
      desc: 'Visit holy cities of Makkah & Madinah with a short relaxing break in Doha!',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATSJg1ebaEHUZY5ycL1jlGKbVWmtVti01-Mm_PidLDiUsloGmr5nr0i9jjaoUUnvn-sSO2QBndQuV-PL7f6leghARSTFeNWWdoH6_AVUJZJDomhM6hDJaL5nQwaVWn0Amq409ZOLerOvZ_1gqUO5hHfIpzR1ztwCjOLus62Tm1JwkrhM5NRvscMuaPIdq9MsrVXnfI_NLwHJNoTeP-RP6mQ48LVP9YeWU0F0uFRn5iquOA9cKRzsPPL4xcmA4q9FJzZqm3vunS4Mc',
      price: 1395,
      includes: [
        'Full round air ticket & Umrah Visa',
        '3 Nights in Makkah 2 Nights in Madinah + 2 Days in Doha',
        'Breakfast in Makkah and Madinah Hotels',
        'Round Transfer in Makkah and Madinah',
        'Airport Transfers in Doha'
      ]
    },
    {
      title: 'Umrah Plus Pakistan',
      desc: 'Visit holy cities of Makkah & Madinah with a short relaxing break in Pakistan!',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBWemW8HYvTwHz3qnDBHXlTSvGRMXgoj-7DSUHWKNJYX2ROfo1hhh0QKwJ6tk4gUDU2JetOaEkyQRH7o92BNjNXbqNOuv8_oO5ewMpbSSfdnuEvtLUICwhkOu2zs7ycRp-t1fDrBC6yTRJF1nTTZdthn9I--JtAIsEdB8syuSwfYDWeGXlGih6McLcjbeJB7WM37h1r5k4ddMhBKt4X_Y19jRce9q9GJd7idaDynXFrqJJ68aOEfGQChkDuySbb6TN1qlPgnohp6U',
      price: 1595,
      includes: [
        'Full round air ticket & Umrah Visa',
        '3 Nights in Makkah 2 Nights in Madinah + 2 Days in Pakistan',
        'Breakfast in Makkah and Madinah Hotels',
        'Round Transfer in Makkah and Madinah',
        'Airport Transfers in Pakistan'
      ]
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Umrah Plus Muslim Holiday Destinations</h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">Experience the Holy Lands with Al-Salam Travel: Comfort, Convenience, and Peace of Mind. We have added these packages with premium essential service providing hotels, providing exclusive discounts and early booking offers to let you save more.</p>
          <div className="h-1.5 w-12 bg-gold-accent mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="flex gap-8 pb-10 overflow-x-auto snap-x no-scrollbar">
          {packages.map((pkg, idx) => (
            <div key={idx} className="min-w-[400px] flex-shrink-0 snap-center bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col group">
              <div className="relative h-64 overflow-hidden">
                <img alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={pkg.img} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white font-bold text-xl uppercase">{pkg.title}</div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-sm text-slate-500 mb-6">{pkg.desc}</p>
                <h5 className="font-extrabold text-primary mb-4 uppercase tracking-wider text-sm border-b border-slate-100 pb-2">WHAT'S INCLUDED?</h5>
                <ul className="space-y-3 mb-8 text-sm text-slate-600 flex-1 list-disc pl-5">
                  {pkg.includes.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div>
                    <p className="text-2xl font-extrabold text-primary">£{pkg.price}<span className="text-sm font-normal text-slate-400">/pp</span></p>
                  </div>
                  <div className="flex gap-2">
                    <button className="size-10 rounded-full border border-slate-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><span className="material-symbols-outlined text-base">forum</span></button>
                    <button className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-teal-dark transition-colors">View Detail <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-8 h-2 rounded-full bg-primary"></div>
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
        </div>
      </div>
    </section>
  );
};

export default UmrahPlus;
