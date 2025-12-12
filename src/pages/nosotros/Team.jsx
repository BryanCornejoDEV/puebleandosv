import React from 'react';

const Member = ({ name, role }) => (
  <div className="bg-white rounded-xl shadow p-4 border text-center">
    <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-3" />
    <h4 className="font-semibold">{name}</h4>
    <p className="text-sm text-gray-600">{role}</p>
  </div>
);

const Team = () => {
  const members = [
    { name: 'Bryan Cornejo', role: 'Fundador' },
    { name: 'María López', role: 'Coordinadora' },
    { name: 'Carlos Ruiz', role: 'Desarrollo' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {members.map((m, i) => (
        <Member key={i} {...m} />
      ))}
    </div>
  );
};

export default Team;
