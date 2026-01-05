import React from 'react';
import GlassCard from '../../components/ui/GlassCard';

const Plan = ({ name, price, features }) => (
  <GlassCard className="flex flex-col justify-between w-full max-w-sm">
    <div>
      <h3 className="text-xl font-semibold mb-2 text-white">{name}</h3>
      <p className="text-3xl font-bold text-white">{price}</p>
    </div>
    <ul className="mt-4 space-y-2 text-sm text-white/70">
      {features.map((f, i) => (
        <li key={i}>• {f}</li>
      ))}
    </ul>
    <button className="mt-6 bg-primary text-white py-2 rounded-full">Seleccionar</button>
  </GlassCard>
);

const PricingPlans = () => {
  const plans = [
    { name: 'Básico', price: '$0', features: ['Explorar públicos', 'Soporte comunitario'] },
    { name: 'Pro', price: '$9.99', features: ['Reservas', 'Ofertas exclusivas'] },
    { name: 'Empresa', price: '$29.99', features: ['Gestión avanzada', 'Soporte dedicado'] },
  ];

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center">
      {plans.map((p, i) => <Plan key={i} {...p} />)}
    </div>
  );
};

export default PricingPlans;
