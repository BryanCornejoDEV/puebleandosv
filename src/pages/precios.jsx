import React from 'react';
import PricingHero from './precios/PricingHero';
import PricingPlans from './precios/PricingPlans';

export default function Precios() {
  return (
    <section className="min-h-screen bg-white font-sans text-gray-900 selection:bg-primary selection:text-white">
      <div className="pt-24">
        <PricingHero />
        <div className="px-4 sm:px-6 md:px-10 mt-8">
          <PricingPlans />
        </div>
      </div>
    </section>
  );
}
