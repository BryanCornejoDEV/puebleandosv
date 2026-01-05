import React from 'react';

const PricingHero = () => (
  <section className="relative w-full -mt-28 min-h-[80vh] flex items-center justify-center px-4 py-14 overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80"
      alt="Precios - Playa"
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-black/20" />

    <div className="relative z-10 max-w-4xl text-center">
      <h1 className="text-4xl font-extrabold text-white mb-3">Precios</h1>
      <p className="text-white/90 max-w-2xl mx-auto">Planes transparentes y pensados para viajeros y comunidades locales.</p>
    </div>
  </section>
);

export default PricingHero;
