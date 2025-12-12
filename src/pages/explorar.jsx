import React from 'react';
import ExploreHero from './explorar/ExploreHero';
import ExploreList from './explorar/ExploreList';

export default function Explorar() {
  return (
    <section className="min-h-screen bg-white font-sans text-gray-900 selection:bg-primary selection:text-white">
      <div className="pt-24">
        <ExploreHero />
        <div className="px-4 sm:px-6 md:px-10 mt-8">
          <ExploreList />
        </div>
      </div>
    </section>
  );
}
