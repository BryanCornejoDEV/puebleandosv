import React from 'react';
import { Play, Leaf } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
// import FloatingMarker from '../../components/ui/FloatingMarker';
import Pill from '../../components/ui/Pill';
import { FEATURED_DESTINATION_NAME, getDestinationByName } from '../../data/destinations';

const SAN_SALVADOR = {
  // San Salvador: 13°41′56″N 89°11′29″W
  lat: 13.6989,
  lon: -89.1914,
  elevationM: 658
};

const monthKey = (date = new Date()) => {
  const keys = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  return keys[date.getMonth()];
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const haversineKm = (a, b) => {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
};

const makeElevationBars = ({ fromElevationM, toElevationM, bars = 10 }) => {
  const gain = Math.max(0, toElevationM - fromElevationM);
  const base = 25;
  const peak = clamp(base + (gain / 2000) * 70, 55, 95);

  return Array.from({ length: bars }, (_, i) => {
    const t = i / (bars - 1);
    const curve = t * t * (3 - 2 * t); // smoothstep
    const jitter = (Math.sin((i + 1) * 2.1) + 1) * 2; // 0..4
    return clamp(base + curve * (peak - base) + jitter, 12, 98);
  });
};

const Hero = ({ onNavigate }) => {
  const featured = getDestinationByName(FEATURED_DESTINATION_NAME);
  const featuredMeta = featured?.meta;
  const key = monthKey();
  const climate = featuredMeta?.climate?.monthly?.[key];

  const altitudeM = featuredMeta?.elevationM;
  const tempC = climate?.tMean;

  const distanceKm = featuredMeta?.lat != null && featuredMeta?.lon != null
    ? haversineKm(SAN_SALVADOR, { lat: featuredMeta.lat, lon: featuredMeta.lon })
    : null;
  const elevationGainM = altitudeM != null ? Math.max(0, altitudeM - SAN_SALVADOR.elevationM) : null;
  const grade = distanceKm && elevationGainM != null ? elevationGainM / (distanceKm * 1000) : null;
  const accessibilityPct = grade != null ? Math.round(clamp(100 - grade * 300, 65, 99)) : 98;

  const bars = altitudeM != null
    ? makeElevationBars({ fromElevationM: SAN_SALVADOR.elevationM, toElevationM: altitudeM, bars: 10 })
    : [40, 60, 35, 70, 55, 80, 45, 90, 60, 75];

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
           <button
             className="bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-accent transition-all transform hover:scale-105 shadow-lg border-2 border-primary tv:px-12 tv:py-5 tv:text-xl"
             onClick={() => onNavigate?.('/explorar')}
           >
             Comenzar Expedición
           </button>
           <button
             className="bg-white/20 backdrop-blur-md text-white px-6 py-4 rounded-full text-lg font-medium hover:bg-white/30 transition-all flex items-center gap-2 border border-white/30 tv:px-10 tv:py-5 tv:text-xl"
             onClick={() => onNavigate?.('/destinos')}
           >
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
              <h3 className="text-4xl font-bold text-white">{accessibilityPct}%</h3>
               <span className="text-primary text-sm mb-1 font-bold bg-white/10 px-2 rounded">Accesible</span>
            </div>
            
            <div className="h-12 flex items-end gap-1 w-full mt-2">
              {bars.map((h, i) => (
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
             <h3 className="text-4xl font-bold text-white">{accessibilityPct}%</h3>
             <span className="text-primary text-sm mb-1 font-bold bg-white/10 px-2 rounded">Accesible</span>
          </div>
          
          <div className="h-12 flex items-end gap-1 w-full mt-2">
             {bars.map((h, i) => (
               <div key={i} className="flex-1 bg-white/20 rounded-t-sm hover:bg-primary transition-colors" style={{ height: `${h}%` }}></div>
             ))}
          </div>
        </GlassCard>
      </div>

      <div className="absolute bottom-10 right-4 md:right-10 z-20 hidden lg:block">
        <GlassCard className="rounded-full px-6 py-3 flex items-center gap-6 bg-white/80 border-white/50">
          <div className="flex flex-col">
            <span className="text-xs text-dark font-bold uppercase">Altitud</span>
            <span className="font-mono text-lg text-dark">{altitudeM != null ? `${altitudeM.toLocaleString('es-SV')}m` : '—'}</span>
          </div>
          <div className="w-px h-8 bg-dark/20" />
          <div className="flex flex-col">
            <span className="text-xs text-dark font-bold uppercase">Temp</span>
            <span className="font-mono text-lg text-dark">{tempC != null ? `${Math.round(tempC)}°C` : '—'}</span>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default Hero;
