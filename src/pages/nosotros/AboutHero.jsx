import React from 'react';

const AboutHero = () => (
  <section className="relative w-full -mt-28 min-h-[80vh] flex items-center justify-center px-4 py-14 overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80"
      alt="Nosotros - Naturaleza"
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-black/40" />

    <div className="relative z-10 max-w-4xl text-center">
      <h1 className="text-4xl font-extrabold text-white mb-3">Nosotros</h1>
      <p className="text-white/90 max-w-2xl mx-auto">Conoce al equipo y la misión detrás de Puebleando SV.</p>
    </div>
  </section>
);

export default AboutHero;
