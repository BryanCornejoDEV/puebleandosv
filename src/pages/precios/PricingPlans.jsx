import React from 'react';

const Plan = ({ name, price, features }) => (
  <div className="bg-white rounded-xl shadow p-6 border flex flex-col justify-between">
    <div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-3xl font-bold text-dark">{price}</p>
    </div>
    <ul className="mt-4 space-y-2 text-sm text-gray-600">
      {features.map((f, i) => (<li key={i}>• {f}</li>))}
    </ul>
    <button className="mt-6 bg-primary text-white py-2 rounded-full">Seleccionar</button>
  </div>
);

const PricingPlans = () => {
  const plans = [
    { name: 'Básico', price: '$0', features: ['Explorar públicos', 'Soporte comunitario'] },
    { name: 'Pro', price: '$9.99', features: ['Reservas', 'Ofertas exclusivas'] },
    { name: 'Empresa', price: '$29.99', features: ['Gestión avanzada', 'Soporte dedicado'] },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {plans.map((p, i) => <Plan key={i} {...p} />)}
    </div>
  );
};

export default PricingPlans;
