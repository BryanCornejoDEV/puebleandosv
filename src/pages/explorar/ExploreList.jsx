import React from 'react';

const DummyCard = ({ title, subtitle }) => (
  <div className="bg-white rounded-xl shadow p-4 border"> 
    <h3 className="font-semibold text-dark">{title}</h3>
    <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
  </div>
);

const ExploreList = () => {
  const items = [
    { title: 'Rutas de montaña', subtitle: 'Senderos señalizados y miradores' },
    { title: 'Tour gastronómico', subtitle: 'Comida típica y mercados locales' },
    { title: 'Alojamientos únicos', subtitle: 'Posadas y hospedajes con encanto' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((it, i) => (
        <DummyCard key={i} title={it.title} subtitle={it.subtitle} />
      ))}
    </div>
  );
};

export default ExploreList;
