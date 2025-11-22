import React, { useState } from 'react';
import { Compass, ArrowUpRight, Menu, X } from 'lucide-react';

const NavLink = ({ children, active }) => (
  <a href="#" className={`text-sm font-medium transition-colors ${active ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>
    {children}
  </a>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <div className="relative bg-white/80 backdrop-blur-lg rounded-full px-6 py-3 flex justify-between items-center shadow-sm border border-white/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <img src="/logo.png" alt="logo"/>
          </div>
          <span className="font-bold text-dark tracking-tight">Puebleando <span className="text-primary">SV</span></span>
        </div>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink active={true}>Explorar</NavLink>
          <NavLink>Destinos</NavLink>
          <NavLink>Nosotros</NavLink>
          <NavLink>Precios</NavLink>
        </div>

        {/* Botón reserva escritorio */}
        <button className="hidden md:flex bg-dark text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary transition-colors items-center gap-2">
          Reservar <ArrowUpRight size={14} />
        </button>

        {/* Botón menú móvil */}
        <button aria-label="Abrir menú" onClick={() => setOpen(o => !o)} className="md:hidden p-2 rounded-full bg-dark text-white hover:bg-primary transition-colors">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Dropdown móvil */}
        {open && (
          <div className="absolute top-full left-0 w-full mt-3 p-4 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/40 shadow-lg flex flex-col gap-4 md:hidden animate-fade-in">
            <NavLink active={true}>Explorar</NavLink>
            <NavLink>Destinos</NavLink>
            <NavLink>Nosotros</NavLink>
            <NavLink>Precios</NavLink>
            <button className="bg-dark text-white w-full px-5 py-3 rounded-full text-sm font-medium hover:bg-primary transition-colors flex items-center justify-center gap-2">
              Reservar <ArrowUpRight size={16} />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;