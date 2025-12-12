import React from 'react';
import DestinationsHero from './destinos/DestinationsHero';
import DestinationsGrid from './destinos/DestinationsGrid';

export default function Destinos() {
  return (
    <section className="min-h-screen bg-white font-sans text-gray-900 selection:bg-primary selection:text-white">
      <div className="pt-24">
        <DestinationsHero />
        <div className="px-4 sm:px-6 md:px-10 mt-8">
          <DestinationsGrid />
        </div>
      </div>
    </section>
  );
}
