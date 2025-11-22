import React from 'react';
import { Play, Leaf } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
{/* import FloatingMarker from '../../components/ui/FloatingMarker';*/}
import Pill from '../../components/ui/Pill';

const Hero = () => {
  return (
    <section className="relative w-full min-h-dvh overflow-hidden bg-[#f0f2f0] flex flex-col">
      <img
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80"
        alt="Mountains"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-white/10 via-transparent to-dark/40"></div>

      {/*<FloatingMarker top="35%" left="10%" mobileTop="18%" mobileLeft="6%" label="Calidad del aire: Óptima" />
      <FloatingMarker top="30%" left="80%" mobileTop="28%" mobileLeft="70%" label="Ruta de Senderismo Nvl. 3" />
      <FloatingMarker top="60%" left="75%" mobileTop="40%" mobileLeft="55%" label="Fauna Protegida" />*/}

      <div className="relative z-10 grow flex flex-col justify-start sm:justify-center items-center text-center px-4 sm:px-6 md:px-10 pt-24 md:pt-28">
        <Pill text="Turismo Inteligente v2.0" icon={Leaf} />
        <h1 className="hero-title font-bold text-white mt-6 mb-4 tracking-tight drop-shadow-lg text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] tv:text-[clamp(5rem,6vw,7rem)]">
          TU SIGUIENTE <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-300">
            DESTINO TURÍSTICO
          </span>
        </h1>
        
        <p className="hero-sub text-white/90 max-w-xl text-lg md:text-xl font-light mb-10 leading-relaxed backdrop-blur-sm p-2 tv:max-w-4xl tv:text-2xl">
          Experiencias inmersivas donde la naturaleza se encuentra con las emociones.
        </p>
        <div className="hero-actions flex flex-col sm:flex-row gap-4 w-full sm:w-auto max-w-md sm:max-w-none tv:gap-6">
           <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-accent transition-all transform hover:scale-105 shadow-lg border-2 border-primary tv:px-12 tv:py-5 tv:text-xl">
             Comenzar Expedición
           </button>
           <button className="bg-white/20 backdrop-blur-md text-white px-6 py-4 rounded-full text-lg font-medium hover:bg-white/30 transition-all flex items-center gap-2 border border-white/30 tv:px-10 tv:py-5 tv:text-xl">
             <Play size={20} fill="white" /> Ver Demo
           </button>
        </div>

        {/* Contenedor flexible que ocupa el espacio restante y centra la tarjeta */}
        <div className="sm:hidden flex-1 w-full flex items-center justify-center px-4">
          <GlassCard className="p-5 bg-dark/80 border-accent max-w-xs w-full">
            <div className="flex justify-between items-center mb-4">
               <span className="text-white/70 text-xs uppercase tracking-wider">Estado del Terreno</span>
               <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            </div>
            <div className="flex items-end gap-2 mb-2">
               <h3 className="text-4xl font-bold text-white">98%</h3>
               <span className="text-primary text-sm mb-1 font-bold bg-white/10 px-2 rounded">Accesible</span>
            </div>
            
            <div className="h-12 flex items-end gap-1 w-full mt-2">
               {[40, 60, 35, 70, 55, 80, 45, 90, 60, 75].map((h, i) => (
                 <div key={i} className="flex-1 bg-white/20 rounded-t-sm hover:bg-primary transition-colors" style={{ height: `${h}%` }}></div>
               ))}
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Card original en posición absoluta para >= sm */}
      <div className="hidden sm:block absolute bottom-6 md:bottom-10 left-2 sm:left-4 md:left-10 z-20 w-[85%] sm:w-full max-w-xs">
        <GlassCard className="p-5 bg-dark/80 border-accent">
          <div className="flex justify-between items-center mb-4">
             <span className="text-white/70 text-xs uppercase tracking-wider">Estado del Terreno</span>
             <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          </div>
          <div className="flex items-end gap-2 mb-2">
             <h3 className="text-4xl font-bold text-white">98%</h3>
             <span className="text-primary text-sm mb-1 font-bold bg-white/10 px-2 rounded">Accesible</span>
          </div>
          
          <div className="h-12 flex items-end gap-1 w-full mt-2">
             {[40, 60, 35, 70, 55, 80, 45, 90, 60, 75].map((h, i) => (
               <div key={i} className="flex-1 bg-white/20 rounded-t-sm hover:bg-primary transition-colors" style={{ height: `${h}%` }}></div>
             ))}
          </div>
        </GlassCard>
      </div>

      <div className="absolute bottom-10 right-4 md:right-10 z-20 hidden lg:block">
        <GlassCard className="rounded-full px-6 py-3 flex items-center gap-6 bg-white/80 border-white/50">
          <div className="flex flex-col">
            <span className="text-xs text-dark font-bold uppercase">Altitud</span>
            <span className="font-mono text-lg text-dark">2,450m</span>
          </div>
          <div className="w-px h-8 bg-dark/20" />
          <div className="flex flex-col">
            <span className="text-xs text-dark font-bold uppercase">Temp</span>
            <span className="font-mono text-lg text-dark">18°C</span>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default Hero;
