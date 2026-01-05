import React from 'react';

const DummyCard = ({ title, subtitle, image }) => (
  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-200 hover:scale-105 motion-reduce:transform-none animate-fade-up border border-white/10">
    <img src={image} alt={title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />

    {/* Overlay: blurred bottom half with faded transition using CSS mask for a smooth fade */}
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute inset-0 backdrop-blur-md bg-black/20"
        style={{
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
        }}
      />
    </div>

    {/* Content over the image */}
    <div className="relative z-10 p-6 flex flex-col justify-end h-56 md:h-64 lg:h-72">
      <div className="max-w-[85%] bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-4">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <p className="text-sm text-white/80 mt-2">{subtitle}</p>
      </div>
    </div>
  </div>
);

const ExploreList = () => {
  const items = [
    { title: 'Volcanes y Trekking', subtitle: 'Ascensos épicos y miradores volcánicos (Ilamatepec, Acatenango, Chaparrastique)', image: 'https://images.unsplash.com/photo-1663640397122-d50df280b1db?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Playas e Islas', subtitle: 'Costas, snorkeling y escapadas isleñas (Los Cobanos, Playa Los Almendros, Cayos Cochinos)', image: 'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=808&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Cascadas y Pozas', subtitle: 'Chapuzones en maravillas naturales (El Escuco, El Chorrerón, Semuc Champey)', image: 'https://images.unsplash.com/photo-1494472155656-f34e81b17ddc?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Pueblos y Rutas Culturales', subtitle: 'Ruta de las Flores, Juayúa, Ataco y pueblos con encanto', image: 'http://images.unsplash.com/photo-1586810724476-c294fb7ac01b?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Festivales y Eventos', subtitle: 'Vive tradiciones: Farolitos, Festival de las Flores y ferias locales', image: 'https://xpot.sv/wp-content/uploads/2025/08/bolas-de-fuego-en-nejapa-2025.jpg' },
    { title: 'Fincas y Turismo Rural', subtitle: 'Experiencias cafeteras y estancias rurales (Finca Las Julietas)', image: 'https://cdn-pro.elsalvador.com/wp-content/uploads/2025/12/turismo-rutas-y-aventuras-finca-Atiluya-01.jpg' },
    { title: 'Lagunas y Miradores', subtitle: 'Lugares de contemplación y fotografía (Laguna Ipala, Cerro Eramón)', image: 'https://images.unsplash.com/photo-1592514073462-0f75bb9e731a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Atractivos Urbanos', subtitle: 'Paseos urbanos y zoológicos (Cayalá, Zoo La Aurora, Ex Teleférico)', image: 'https://univonews.com/wp-content/uploads/2025/02/El-exteleferico-de-San-Jacinto-un-espacio-natural-para-disfrutar-de-la-belleza-de-El-Salvador-780x450.jpeg' },
  ];

  return (
    <div className="relative z-10 w-full px-6 pb-8 md:pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((it, i) => (
            <DummyCard key={i} title={it.title} subtitle={it.subtitle} image={it.image} />
        ))}
      </div>
    </div>
  );
};

export default ExploreList;
