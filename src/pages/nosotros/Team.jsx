import React from 'react';
import GlassCard from '../../components/ui/GlassCard';

const Member = ({ name, role }) => (
  <GlassCard className="text-center w-full max-w-sm">
    <div className="w-20 h-20 bg-white/10 rounded-full mx-auto mb-3 border border-white/15" />
    <h4 className="font-semibold text-white">{name}</h4>
    <p className="text-sm text-white/70">{role}</p>
  </GlassCard>
);

const Team = () => {
  const members = [
    { name: 'Bryan Cornejo', role: 'Fundador' },
    { name: 'Bryan Cornejo', role: 'Coordinador' },
    { name: 'Bryan Cornejo', role: 'Desarrollo' },
  ];

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center">
      {members.map((m, i) => (
        <Member key={i} {...m} />
      ))}
    </div>
  );
};

export default Team;
