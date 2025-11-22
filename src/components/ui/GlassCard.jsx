import React from 'react';

const GlassCard = ({ children, className = "" }) => {
  return (
    <div className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-6 shadow-xl ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;