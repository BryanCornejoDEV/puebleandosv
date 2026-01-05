import React from 'react';
import ExploreHero from './explorar/ExploreHero';
import ExploreList from './explorar/ExploreList';

export default function Explorar() {
  return (
    <section className="min-h-screen bg-white font-sans text-gray-900 selection:bg-primary selection:text-white relative overflow-hidden">
      {/* Fondo global para la vista Explorar (detrás de hero y lista) */}
      <img
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80"
        alt="Fondo Explorar"
        className="absolute left-1/2 -translate-x-1/2 w-screen h-full object-cover object-center"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="pt-24 relative z-10">
        <ExploreHero />
        <div className="px-4 sm:px-6 md:px-10 mt-8">
          <ExploreList />
        </div>
      </div>
    </section>
  );
}
