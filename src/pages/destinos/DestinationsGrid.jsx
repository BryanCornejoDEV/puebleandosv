import React from 'react';

const PlaceCard = ({ name, region, image, description }) => (
  <div className="bg-[#008744] text-white rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-102 hover:shadow-2xl motion-reduce:transform-none animate-fade-up">
    <div className="relative h-56 w-full bg-gray-300">
      {/* Imagen: coloca en public/images/destinos/<slug>.jpg */}
      <img src={image} alt={name} className="w-full h-full object-cover" />

      {/* Badge centrado inferior sobre la imagen (ejemplo: precio/etiqueta) */}
      <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 bg-black/50 px-4 py-1 rounded-full text-sm font-semibold">
        Destino destacado
      </div>
    </div>

    <div className="p-5 pt-8">
      <h3 className="text-xl font-bold leading-tight">{name}</h3>
      <p className="text-sm text-gray-300 mt-1">{region}</p>

      <p className="text-sm text-gray-200 mt-3">{description}</p>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="bg-black/20 rounded-lg p-3">
          <p className="text-xs text-gray-300">Actividad</p>
          <p className="text-sm font-semibold">Exploración</p>
        </div>
        <div className="bg-black/20 rounded-lg p-3">
          <p className="text-xs text-gray-300">Duración</p>
          <p className="text-sm font-semibold">Medio</p>
        </div>
      </div>
    </div>
  </div>
);

const DestinationsGrid = () => {
  const places = [
    { name: 'Volcán Ilamatepec', region: 'Santa Ana', image: '/src/assets/volcan-ilamatepec.jpg', description: 'Imponente coloso con vistas al Pacífico y rutas para atrevidos.' },
    { name: 'Los Cobanos', region: 'Sonsonate', image: '/src/assets/los-cobanos.jpg', description: 'Playas rocosas y arrecifes, ideal para snorkel y atardeceres.' },
    { name: 'Pital', region: 'Cabañas', image: '/src/assets/pital.jpg', description: 'Cumbres verdes y clima fresco, refugio natural para caminantes.' },
    { name: 'Callejón del Diablo', region: 'La Libertad', image: '/src/assets/callejon-del-diablo.jpg', description: 'Formaciones rocosas y senderos con historia y adrenalina.' },
    { name: 'Volcán Chaparrastique', region: 'San Miguel', image: '/src/assets/volcan-chaparrastique.jpg', description: 'Ascenso desafiante con panorámicas volcánicas inolvidables.' },
    { name: 'Cerro Eramón', region: 'La Paz', image: '/src/assets/cerro-eramon.jpg', description: 'Miradores espectaculares y senderos poco transitados.' },
    { name: 'Cascada El Escuco', region: 'Ahuachapán', image: '/src/assets/cascada-el-escuco.jpg', description: 'Cascada rodeada de bosque y pozas cristalinas para un chapuzón.' },
    { name: 'Juayúa', region: 'Sonsonate', image: '/src/assets/juayua.jpg', description: 'Pueblo vibrante famoso por sus ferias gastronómicas y cultura.' },
    { name: 'Ataco', region: 'Ahuachapán', image: '/src/assets/ataco.jpg', description: 'Encantador pueblo de la Ruta de las Flores con arte y cafés.' },
    { name: 'Pino Dulce', region: 'Sonsonate', image: '/src/assets/pino-dulce.jpg', description: 'Árbol centenario y paisaje ideal para fotografía y picnic.' },
    { name: 'Ex Teleférico', region: 'San Salvador', image: '/src/assets/ex-teleferico.jpg', description: 'Atracción histórica con vistas urbanas y nostalgia asegurada.' },
    { name: 'Playa Los Almendros', region: 'La Libertad', image: '/src/assets/playa-los-almendros.jpg', description: 'Arena suave y aguas tranquilas para un día de relax.' },
    { name: 'Cascada El Chorrerón', region: 'San Vicente', image: '/src/assets/cascada-el-chorreron.jpg', description: 'Cascada escénica con senderos y pozas escondidas.' },
    { name: 'Ruta de las Flores', region: 'Ahuachapán', image: '/src/assets/ruta-de-las-flores.jpg', description: 'Recorrido floral entre pueblos pintorescos y mercados artesanales.' },
    { name: 'Semuc Champey', region: 'Guatemala', image: '/src/assets/semuc-champey.jpg', description: 'Pozas naturales turquesa entre selva y puentes de piedra.' },
    { name: 'Laguna Ipala', region: 'Chiquimula', image: '/src/assets/laguna-ipala.jpg', description: 'Crater lake de tonos hipnóticos, perfecto para contemplación.' },
    { name: 'Cayalá y Zoo La Aurora', region: 'Guatemala', image: '/src/assets/cayala-zoo-la-aurora.jpg', description: 'Destino urbano: compras, paseo y fauna en un mismo día.' },
    { name: 'Festival de los Farolitos', region: 'Ahuachapán', image: '/src/assets/festival-farolitos.jpg', description: 'Noche mágica de luces que enciende tradiciones y emoción.' },
    { name: 'Festival de las Flores', region: 'Ahuachapán', image: '/src/assets/festival-flores.jpg', description: 'Celebración cromática con desfiles, música y aromas florales.' },
    { name: 'Huizúcar', region: 'La Libertad', image: '/src/assets/huizucar.jpg', description: 'Pueblo tranquilo con panoramas rurales y hospedajes con encanto.' },
    { name: 'Finca Las Julietas', region: 'Sonsonate', image: '/src/assets/finca-las-julietas.jpg', description: 'Experiencia cafetera: recorridos, cata y paisajes de montaña.' },
    { name: 'Acatenango', region: 'Antigua', image: '/src/assets/acatenango.jpg', description: 'Trekking épico junto al coloso Fuego, aventura para valientes.' },
    { name: 'Cayos Cochinos', region: 'Honduras', image: '/src/assets/cayos-cochinos.jpg', description: 'Islas paradisíacas con playas vírgenes y vida marina vibrante.' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {places.map((p, i) => (
        <PlaceCard key={i} {...p} />
      ))}
    </div>
  );
};

export default DestinationsGrid;
