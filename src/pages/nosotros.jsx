import React from 'react';
import AboutHero from './nosotros/AboutHero';
import Team from './nosotros/Team';

export default function Nosotros() {
  return (
    <section className="min-h-screen font-sans text-white selection:bg-primary selection:text-white relative overflow-hidden">
      {/* Fondo oscurecido para contraste */}
      <img
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80"
        alt="Fondo Nosotros"
        className="absolute left-1/2 -translate-x-1/2 w-screen h-full object-cover object-center"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/80" />

      <div className="pt-24 relative z-10 pb-16">
        <AboutHero />
        <div className="px-4 sm:px-6 md:px-10 mt-8">
          <Team />
        </div>
      </div>
    </section>
  );
}
