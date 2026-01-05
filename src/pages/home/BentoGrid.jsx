import React from 'react';
import { ArrowUpRight, BarChart3, Thermometer } from 'lucide-react';
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

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const makeElevationBars = ({ fromElevationM, toElevationM, bars = 12 }) => {
  const gain = Math.max(0, toElevationM - fromElevationM);
  const base = 18;
  const peak = clamp(base + (gain / 2000) * 75, 50, 95);

  return Array.from({ length: bars }, (_, i) => {
    const t = i / (bars - 1);
    const curve = t * t * (3 - 2 * t); // smoothstep
    const jitter = (Math.sin((i + 2) * 1.9) + 1) * 2; // 0..4
    return clamp(base + curve * (peak - base) + jitter, 10, 98);
  });
};

const BentoGrid = ({ onNavigate }) => {
  const featured = getDestinationByName(FEATURED_DESTINATION_NAME);
  const meta = featured?.meta;
  const key = monthKey();
  const climate = meta?.climate?.monthly?.[key];

  const hasCoords = meta?.lat != null && meta?.lon != null;
  const distanceKm = hasCoords ? haversineKm(SAN_SALVADOR, { lat: meta.lat, lon: meta.lon }) : null;
  const elevationM = meta?.elevationM;
  const gainM = elevationM != null ? Math.max(0, elevationM - SAN_SALVADOR.elevationM) : null;

  const bars = elevationM != null
    ? makeElevationBars({ fromElevationM: SAN_SALVADOR.elevationM, toElevationM: elevationM, bars: 12 })
    : null;

  return (
    <section className="py-24 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-dark max-w-md leading-tight">
            Diseñado para el <br/>
            <span className="text-primary">Explorador Moderno</span>
          </h2>
          <p className="hidden md:block text-gray-500 max-w-xs text-right">
            Nuestra tecnología monitorea el impacto ambiental mientras tú disfrutas de la vista.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 auto-rows-fr">
          
          <div className="md:col-span-2 row-span-2 rounded-[2.5rem] overflow-hidden relative group min-h-[340px] md:min-h-full">
            <img
              src={featured?.image ?? "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"}
              alt="Lake"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-dark/90 to-transparent p-8 flex flex-col justify-end">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-primary font-bold bg-white/90 px-3 py-1 rounded-full text-xs mb-3 inline-block">DESTINO TOP</span>
                  <h3 className="text-3xl text-white font-bold">{featured?.name ?? 'Destino destacado'}</h3>
                  <p className="text-white/70 mt-2 max-w-md">
                    {featured?.description ?? 'Explora un destino real con datos útiles para planificar tu visita.'}
                  </p>
                </div>
                <button
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  onClick={() => onNavigate?.('/destinos')}
                  aria-label="Ver destinos"
                >
                   <ArrowUpRight />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#f4f6f5] rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-[#e6ece8] transition-colors relative overflow-hidden min-h-60">
             <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
             <BarChart3 className="text-primary mb-4" size={32} />
             <div>
                <h4 className="text-xl font-bold text-dark">Análisis de Ruta</h4>
               <p className="text-gray-500 text-sm mt-2">
                 {featured?.name ? `San Salvador → ${featured.name}` : 'Ruta base'}
                 {distanceKm != null ? ` · ${distanceKm.toFixed(0)} km (línea recta)` : ''}
                 {gainM != null ? ` · +${Math.round(gainM).toLocaleString('es-SV')} m` : ''}
               </p>
             </div>

             {bars && (
               <div className="mt-6 h-10 flex items-end gap-1 w-full">
                 {bars.map((h, i) => (
                   <div
                     key={i}
                     className="flex-1 bg-dark/10 rounded-t-sm"
                     style={{ height: `${h}%` }}
                   />
                 ))}
               </div>
             )}
          </div>

          <div className="bg-dark rounded-[2.5rem] p-8 flex flex-col justify-between relative overflow-hidden group min-h-60">
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#427425 1px, transparent 1px), linear-gradient(90deg, #427425 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
             
             <div className="relative z-10">
               <div className="flex justify-between items-start">
                 <Thermometer className="text-white" size={32} />
                 <span className="text-primary font-mono text-xs">
                   {climate?.tMax != null && climate?.tMin != null ? `${Math.round(climate.tMin)}–${Math.round(climate.tMax)}°C` : '+24% O₂'}
                 </span>
               </div>
               <div className="mt-8">
                  <h4 className="text-xl font-bold text-white">Clima Inteligente</h4>
                  <p className="text-white/60 text-sm mt-2">
                    {climate?.tMean != null
                      ? `Media mensual: ${Math.round(climate.tMean)}°C · Lluvia: ${Math.round(climate.rainMm)} mm`
                      : 'Predicciones micro-climáticas.'}
                  </p>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;