import React from 'react';
import AboutHero from './nosotros/AboutHero';
import Team from './nosotros/Team';

export default function Nosotros() {
  return (
    <section className="min-h-screen bg-white font-sans text-gray-900 selection:bg-primary selection:text-white">
      <div className="pt-24">
        <AboutHero />
        <div className="px-4 sm:px-6 md:px-10 mt-8">
          <Team />
        </div>
      </div>
    </section>
  );
}
