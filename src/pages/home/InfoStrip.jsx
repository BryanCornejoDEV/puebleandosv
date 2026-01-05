import React from 'react';
import { Wind } from 'lucide-react';

const InfoStrip = () => (
  <section className="bg-dark py-12 overflow-hidden whitespace-nowrap relative">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
    <div className="flex items-center gap-16 animate-marquee opacity-80">
       {[1,2,3,4,5].map((i) => (
          <React.Fragment key={i}>
            <span 
              className="text-4xl md:text-6xl font-bold text-transparent font-sans tracking-tighter"
              style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)' }}
            >
              DONDE TUS SUEÑOS SE HACEN REALIDAD
            </span>
            <Wind className="text-primary w-12 h-12" />
          </React.Fragment>
       ))}
    </div>
  </section>
);

export default InfoStrip;