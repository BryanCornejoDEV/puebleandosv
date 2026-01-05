import React from 'react';

const ExploreHero = () => {
  return (
    <section className="relative w-full -mt-28 min-h-[60vh] flex items-center justify-center px-4 py-16 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%)',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%)'
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Explorar - Sendero"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative h-1 z-10 max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold text-white mb-3">Explorar</h1>
        <p className="text-white/90 max-w-2xl mx-auto">Descubre rutas, experiencias y puntos de interés en los pueblos más icónicos.</p>
      </div>
    </section>
  );
};

export default ExploreHero;
