import React from 'react';

const DestinationsHero = () => (
  <section className="relative w-full -mt-28 min-h-[80vh] flex items-center justify-center px-4 py-14 overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80"
      alt="Destinos - Paisaje"
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-black/40" />

    <div className="relative z-10 max-w-4xl text-center">
      <h1 className="text-4xl font-extrabold text-white mb-3">Destinos</h1>
      <p className="text-white/90 max-w-2xl mx-auto">Explora los pueblos, playas y montañas con guías y recomendaciones.</p>
    </div>
  </section>
);

export default DestinationsHero;
