
import React from 'react';

const FeaturedCategories: React.FC = () => {
  const categories = [
    { name: 'Ramadan Umrah Packages', icon: 'star' },
    { name: 'Easter Umrah Packages', icon: 'eco' },
    { name: 'December Umrah Packages', icon: 'ac_unit' },
    { name: 'Umrah Packages 2026', icon: 'event_upcoming' }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-extrabold text-primary mb-2">Featured Categories</h3>
          <div className="h-1 w-20 bg-gold-accent mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <button key={idx} className="bg-primary hover:bg-teal-dark text-white py-6 px-4 rounded-xl font-bold transition-all border-b-4 border-gold-accent flex flex-col items-center gap-2 group">
              <span className="material-symbols-outlined text-gold-accent group-hover:scale-110 transition-transform">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
