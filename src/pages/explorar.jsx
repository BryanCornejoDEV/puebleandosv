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
      <div className="absolute inset-0 bg-black/70" />

      {/* Top glass fade to blend page background into Hero */}
      <div className="absolute top-0 left-0 right-0 h-28 md:h-40 z-10 pointer-events-none">
        <div
          className="absolute inset-0 backdrop-blur-sm"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.72), rgba(0,0,0,0))',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)'
          }}
        />
      </div>

      <div className="pt-24 relative z-10">
        <ExploreHero />
        <div className="px-4 sm:px-6 md:px-10 mt-8">
          <ExploreList />
        </div>
      </div>
    </section>
  );
}
