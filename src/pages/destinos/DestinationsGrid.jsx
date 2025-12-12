import React from 'react';

const PlaceCard = ({ name, region }) => (
  <div className="bg-white rounded-xl shadow p-4 border">
    <div className="h-36 bg-gray-100 rounded mb-3" />
    <h3 className="font-semibold text-dark">{name}</h3>
    <p className="text-sm text-gray-600">{region}</p>
  </div>
);

const DestinationsGrid = () => {
  const places = [
    { name: 'Suchitoto', region: 'Cuscatlán' },
    { name: 'Ruta de las Flores', region: 'Ahuachapán' },
    { name: 'Lago de Coatepeque', region: 'Santa Ana' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {places.map((p, i) => (
        <PlaceCard key={i} {...p} />
      ))}
    </div>
  );
};

export default DestinationsGrid;
