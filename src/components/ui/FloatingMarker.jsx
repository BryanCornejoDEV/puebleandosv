import React, { useState, useEffect } from 'react';
import GlassCard from './GlassCard';
/* Permite posiciones alternativas en mobile para evitar overflow */
const FloatingMarker = ({ top, left, label, mobileTop, mobileLeft }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 640);
    handler();
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const style = {
    top: isMobile && mobileTop ? mobileTop : top,
    left: isMobile && mobileLeft ? mobileLeft : left
  };

  return (
    <div
      className="absolute z-20 group cursor-pointer"
      style={style}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform duration-500 hover:scale-110 animate-pulse-slow">
        <span className="text-primary font-bold text-lg">+</span>
      </div>
      {/* Tooltip con animación (oculto en mobile para menor ruido) */}
      <div className={`hidden sm:block absolute left-10 top-0 w-48 transition-all duration-300 origin-left ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}>
        <GlassCard className="p-3 rounded-xl bg-dark/80 border-accent">
          <p className="text-white text-xs font-medium">{label}</p>
          <div className="h-1 w-full bg-white/20 mt-2 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-2/3"></div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default FloatingMarker;
