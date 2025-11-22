import React from 'react';

const Pill = ({ text, icon: Icon }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-dark text-sm font-medium shadow-sm">
    {Icon && <Icon size={14} />}
    {text}
  </div>
);

export default Pill;