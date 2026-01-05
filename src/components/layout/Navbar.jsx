import React, { useState } from 'react';
import { Compass, ArrowUpRight, Menu, X } from 'lucide-react';

const NavLink = ({ children, active, to, onNavigate }) => (
  <a
    href={to}
    onClick={(e) => {
      e.preventDefault();
      onNavigate?.(to);
    }}
    className={`text-sm font-medium transition-colors ${active ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>
    {children}
  </a>
);

const Navbar = ({ onNavigate = () => {}, currentPath = '/' }) => {
  const [open, setOpen] = useState(false);
  const [showReserveHint, setShowReserveHint] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <div className="relative bg-white/80 backdrop-blur-lg rounded-full px-6 py-3 flex justify-between items-center shadow-sm border border-white/50">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/')
            setOpen(false)
          }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <img src="/logo.png" alt="Puebleando SV logo" />
          </div>
          <span className="font-bold text-dark tracking-tight">Puebleando <span className="text-primary">SV</span></span>
        </a>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/explorar" onNavigate={onNavigate} active={currentPath === '/explorar'}>Explorar</NavLink>
          <NavLink to="/destinos" onNavigate={onNavigate} active={currentPath === '/destinos'}>Destinos</NavLink>
          <NavLink to="/nosotros" onNavigate={onNavigate} active={currentPath === '/nosotros'}>Nosotros</NavLink>
          <NavLink to="/precios" onNavigate={onNavigate} active={currentPath === '/precios'}>Precios</NavLink>
        </div>

        {/* Botón reserva escritorio */}
        <button
          className="hidden md:flex bg-dark text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary transition-colors items-center gap-2 relative cursor-not-allowed"
          onMouseEnter={() => setShowReserveHint(true)}
          onMouseLeave={() => setShowReserveHint(false)}
          onFocus={() => setShowReserveHint(true)}
          onBlur={() => setShowReserveHint(false)}
          aria-describedby="reserve-hint"
        >
          Reservar <ArrowUpRight size={14} />

          {showReserveHint && (
            <div id="reserve-hint" role="status" className="absolute -left-15 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-1 rounded-full shadow">
              Próximamente!
            </div>
          )}
        </button>

        {/* Botón menú móvil */}
        <button aria-label="Abrir menú" onClick={() => setOpen(o => !o)} className="md:hidden p-2 rounded-full bg-dark text-white hover:bg-primary transition-colors">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Dropdown móvil */}
        {open && (
          <div className="absolute top-full left-0 w-full mt-3 p-4 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/40 shadow-lg flex flex-col gap-4 md:hidden animate-fade-in">
            <NavLink to="/explorar" onNavigate={onNavigate} active={currentPath === '/explorar'}>Explorar</NavLink>
            <NavLink to="/destinos" onNavigate={onNavigate} active={currentPath === '/destinos'}>Destinos</NavLink>
            <NavLink to="/nosotros" onNavigate={onNavigate} active={currentPath === '/nosotros'}>Nosotros</NavLink>
            <NavLink to="/precios" onNavigate={onNavigate} active={currentPath === '/precios'}>Precios</NavLink>
            <button
              className="bg-dark text-white w-full px-5 py-3 rounded-full text-sm font-medium hover:bg-primary transition-colors flex items-center justify-center gap-2 relative cursor-not-allowed"
              onMouseEnter={() => setShowReserveHint(true)}
              onMouseLeave={() => setShowReserveHint(false)}
              onFocus={() => setShowReserveHint(true)}
              onBlur={() => setShowReserveHint(false)}
              aria-describedby="reserve-hint-mobile"
            >
              Reservar <ArrowUpRight size={16} />

              {showReserveHint && (
                <div id="reserve-hint-mobile" role="status" className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-1 rounded-full shadow">
                  Próximamente: Reservar
                </div>
              )}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;