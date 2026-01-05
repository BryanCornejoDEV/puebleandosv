import React from 'react';
import { destinations } from '../../data/destinations';

const PlaceCard = ({ name, region, image, description }) => (
  <div className="bg-primary text-white rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-102 hover:shadow-2xl motion-reduce:transform-none animate-fade-up">
    <div className="relative h-56 w-full bg-gray-300">
      {/* Imagen: coloca en public/images/destinos/<slug>.jpg */}
      <img src={image} alt={name} className="w-full h-full object-cover" />

      {/* Badge centrado inferior sobre la imagen (ejemplo: precio/etiqueta) */}
      <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 bg-black/50 px-4 py-1 rounded-full text-sm font-semibold">
        Destino destacado
      </div>
    </div>

    <div className="p-5 pt-8">
      <h3 className="text-xl font-bold leading-tight">{name}</h3>
      <p className="text-sm text-gray-300 mt-1">{region}</p>

      <p className="text-sm text-gray-200 mt-3">{description}</p>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="bg-black/20 rounded-lg p-3">
          <p className="text-xs text-gray-300">Actividad</p>
          <p className="text-sm font-semibold">Exploración</p>
        </div>
        <div className="bg-black/20 rounded-lg p-3">
          <p className="text-xs text-gray-300">Duración</p>
          <p className="text-sm font-semibold">Medio</p>
        </div>
      </div>
    </div>
  </div>
);

const DestinationsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {destinations.map((p, i) => (
        <PlaceCard key={i} {...p} />
      ))}
    </div>
  );
};

export default DestinationsGrid;
