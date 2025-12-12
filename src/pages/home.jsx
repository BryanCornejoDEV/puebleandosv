import React from 'react';
import Hero from './home/Hero';
import BentoGrid from './home/BentoGrid';
import InfoStrip from './home/InfoStrip';

export default function Home() {
  return (
    <div>
      <Hero />
      <BentoGrid />
      <InfoStrip />
    </div>
  );
}
