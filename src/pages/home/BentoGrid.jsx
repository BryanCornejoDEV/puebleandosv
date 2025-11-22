import React from 'react';
import { ArrowUpRight, BarChart3, Thermometer } from 'lucide-react';

const BentoGrid = () => {
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
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Lake"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-dark/90 to-transparent p-8 flex flex-col justify-end">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-primary font-bold bg-white/90 px-3 py-1 rounded-full text-xs mb-3 inline-block">DESTINO TOP</span>
                  <h3 className="text-3xl text-white font-bold">Lago Esmeralda</h3>
                  <p className="text-white/70 mt-2 max-w-md">Monitoreo de pureza del agua en tiempo real. Kayak y meditación guiada por IA.</p>
                </div>
                <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
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
               <p className="text-gray-500 text-sm mt-2">Datos biométricos y topográficos antes de dar un paso.</p>
             </div>
          </div>

          <div className="bg-dark rounded-[2.5rem] p-8 flex flex-col justify-between relative overflow-hidden group min-h-60">
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#427425 1px, transparent 1px), linear-gradient(90deg, #427425 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
             
             <div className="relative z-10">
               <div className="flex justify-between items-start">
                 <Thermometer className="text-white" size={32} />
                 <span className="text-primary font-mono text-xs">+24% O₂</span>
               </div>
               <div className="mt-8">
                  <h4 className="text-xl font-bold text-white">Clima Inteligente</h4>
                  <p className="text-white/60 text-sm mt-2">Predicciones micro-climáticas.</p>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;