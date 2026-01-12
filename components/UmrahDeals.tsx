
import React from 'react';

const UmrahDeals: React.FC = () => {
  const deals = [
    {
      id: 1,
      title: '7 Nights 3 Star Umrah',
      price: 599,
      stars: 3,
      badge: 'Value Deal',
      badgeColor: 'bg-primary',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBWemW8HYvTwHz3qnDBHXlTSvGRMXgoj-7DSUHWKNJYX2ROfo1hhh0QKwJ6tk4gUDU2JetOaEkyQRH7o92BNjNXbqNOuv8_oO5ewMpbSSfdnuEvtLUICwhkOu2zs7ycRp-t1fDrBC6yTRJF1nTTZdthn9I--JtAIsEdB8syuSwfYDWeGXlGih6McLcjbeJB7WM37h1r5k4ddMhBKt4X_Y19jRce9q9GJd7idaDynXFrqJJ68aOEfGQChkDuySbb6TN1qlPgnohp6U'
    },
    {
      id: 2,
      title: '10 Nights 3 Star Umrah',
      price: 699,
      stars: 3,
      badge: 'Popular',
      badgeColor: 'bg-gold-accent',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATSJg1ebaEHUZY5ycL1jlGKbVWmtVti01-Mm_PidLDiUsloGmr5nr0i9jjaoUUnvn-sSO2QBndQuV-PL7f6leghARSTFeNWWdoH6_AVUJZJDomhM6hDJaL5nQwaVWn0Amq409ZOLerOvZ_1gqUO5hHfIpzR1ztwCjOLus62Tm1JwkrhM5NRvscMuaPIdq9MsrVXnfI_NLwHJNoTeP-RP6mQ48LVP9YeWU0F0uFRn5iquOA9cKRzsPPL4xcmA4q9FJzZqm3vunS4Mc'
    },
    {
      id: 3,
      title: '7 Nights 5 Star Ramadan Umrah',
      price: 750,
      stars: 5,
      badge: 'Ramadan Special',
      badgeColor: 'bg-teal-dark',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-Sm2DYLvLxSr4fDWT7OXffsmPSI23uwY1-iXedi9wViQi9DUVFsSKrMGAWFE1keygzYULXoX6QyMJYyw50OY3TK-7iqrhOh04NwrljiL8oE9LyHGVQRj2XQ7rjJj6mvTDxsPT9EFHyIH0-9UjRhD7YqTqs1lgRPDFXVOMyIUWwCHGZmMWvXPk1CA32BcUjj8iOu7aXNCvNFeAWA8cCoN45PXWs3gKYduzd8I8HddvRjjcOyVSh1kiMtuuIG3H7_kfrS4qhyfkN9Q'
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-accent font-bold uppercase tracking-[0.4em] text-xs mb-3 block">All-Inclusive</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Affordable Umrah Deals</h2>
          <div className="h-1.5 w-12 bg-gold-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map(deal => (
            <div key={deal.id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img alt={deal.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={deal.img} />
                <div className={`absolute top-4 left-4 ${deal.badgeColor} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase`}>
                  {deal.badge}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-lg font-bold text-primary mb-2">{deal.title}</h4>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl font-extrabold text-primary">£{deal.price}<span className="text-sm font-normal text-slate-400">/pp</span></span>
                  <div className="flex text-gold-accent">
                    {[...Array(deal.stars)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-sm">star</span>
                    ))}
                  </div>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-slate-600 flex-1">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span> Visa and Flights Included</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span> {deal.stars}-Star Hotel In Makkah</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span> {deal.stars}-Star Hotel In Medina</li>
                </ul>
                <div className="flex gap-2">
                  <button className="flex-1 bg-primary text-white py-3 rounded-lg font-bold text-sm hover:bg-teal-dark transition-colors">Enquire Now</button>
                  <button className="flex-1 border border-primary text-primary py-3 rounded-lg font-bold text-sm hover:bg-slate-50 transition-colors">View Detail</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-teal-dark text-white px-8 py-4 rounded-xl font-extrabold flex items-center gap-2 mx-auto transition-all">
            View All Packages <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default UmrahDeals;
