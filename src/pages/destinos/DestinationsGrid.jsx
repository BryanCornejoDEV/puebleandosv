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
    { name: 'Volcán Ilamatepec', region: 'Santa Ana', image: 'https://i.pinimg.com/736x/89/18/81/891881f578f94fbf22e2afacbf4b655c.jpg', description: 'Imponente coloso con vistas al Pacífico y rutas para atrevidos.' },
    { name: 'Los Cobanos', region: 'Sonsonate', image: 'https://i.pinimg.com/736x/e5/65/31/e565315bd7ffdff04bb3c6f86995103d.jpg', description: 'Playas rocosas y arrecifes, ideal para snorkel y atardeceres.' },
    { name: 'Pital', region: 'Cabañas', image: 'https://i.pinimg.com/736x/74/e4/fb/74e4fb97db5c134815a794836bcc83ac.jpg', description: 'Cumbres verdes y clima fresco, refugio natural para caminantes.' },
    { name: 'Callejón del Diablo', region: 'La Libertad', image: 'https://i.pinimg.com/736x/05/64/ac/0564ac447c351242edfcb55c92461430.jpg', description: 'Formaciones rocosas y senderos con historia y adrenalina.' },
    { name: 'Volcán Chaparrastique', region: 'San Miguel', image: 'https://i.pinimg.com/736x/80/52/f9/8052f9f06a6e273bcd2c108a24f2b9f8.jpg', description: 'Ascenso desafiante con panorámicas volcánicas inolvidables.' },
    { name: 'Cerro Eramón', region: 'La Paz', image: 'https://i.pinimg.com/736x/b6/ec/b1/b6ecb1b808a341462b9b9c8c848807e4.jpg', description: 'Miradores espectaculares y senderos poco transitados.' },
    { name: 'Cascada El Escuco', region: 'Ahuachapán', image: 'https://i.pinimg.com/736x/c4/63/d4/c463d48a988768f63705f5abb9af1294.jpg', description: 'Cascada rodeada de bosque y pozas cristalinas para un chapuzón.' },
    { name: 'Juayúa', region: 'Sonsonate', image: 'https://i.pinimg.com/736x/f1/ea/e9/f1eae91ea240cd380377e4df024ae542.jpg', description: 'Pueblo vibrante famoso por sus ferias gastronómicas y cultura.' },
    { name: 'Ataco', region: 'Ahuachapán', image: 'https://i.pinimg.com/736x/d2/f6/cc/d2f6cc15dc924a3afc87221f938d249e.jpg', description: 'Encantador pueblo de la Ruta de las Flores con arte y cafés.' },
    { name: 'Pino Dulce', region: 'Sonsonate', image: 'https://i.pinimg.com/736x/47/e2/22/47e22283fb6646c37ea356242e67e9ad.jpg', description: 'Árbol centenario y paisaje ideal para fotografía y picnic.' },
    { name: 'Ex Teleférico', region: 'San Salvador', image: 'https://i.pinimg.com/736x/c9/ba/51/c9ba51f6e1362bf85712dfe3719bd9c4.jpg', description: 'Atracción histórica con vistas urbanas y nostalgia asegurada.' },
    { name: 'Playa Los Almendros', region: 'La Libertad', image: 'https://i.pinimg.com/736x/33/63/f2/3363f22d1cddd93e6052541a9ff8ade3.jpg', description: 'Arena suave y aguas tranquilas para un día de relax.' },
    { name: 'Cascada El Chorrerón', region: 'San Vicente', image: 'https://i.pinimg.com/736x/c2/71/e6/c271e6864fc7f45b2e3dd65e2d9ba779.jpg', description: 'Cascada escénica con senderos y pozas escondidas.' },
    { name: 'Ruta de las Flores', region: 'Ahuachapán', image: 'https://i.pinimg.com/736x/dc/46/68/dc4668af97d55d7b20c1c16a91e9ec60.jpg', description: 'Recorrido floral entre pueblos pintorescos y mercados artesanales.' },
    { name: 'Semuc Champey', region: 'Guatemala', image: 'https://i.pinimg.com/736x/0b/1b/48/0b1b48c166e1c9d14a56e870e805f0c2.jpg', description: 'Pozas naturales turquesa entre selva y puentes de piedra.' },
    { name: 'Laguna Ipala', region: 'Chiquimula', image: 'https://i.pinimg.com/736x/e9/d9/d6/e9d9d620bad778cdfcd2493f0c322aa0.jpg', description: 'Crater lake de tonos hipnóticos, perfecto para contemplación.' },
    { name: 'Cayalá y Zoo La Aurora', region: 'Guatemala', image: 'https://i.pinimg.com/736x/e4/f6/31/e4f631f6ba646f11ba72ea1f050af34c.jpg', description: 'Destino urbano: compras, paseo y fauna en un mismo día.' },
    { name: 'Festival de los Farolitos', region: 'Ahuachapán', image: 'https://i.pinimg.com/736x/00/15/18/001518beb9abaec88a35abf78beade0e.jpg', description: 'Noche mágica de luces que enciende tradiciones y emoción.' },
    { name: 'Festival de las Flores', region: 'Ahuachapán', image: 'https://i.pinimg.com/736x/65/37/58/65375855cac22d5ee2371c4b4391292f.jpg', description: 'Celebración cromática con desfiles, música y aromas florales.' },
    { name: 'Huizúcar', region: 'La Libertad', image: 'https://i.pinimg.com/736x/51/03/ab/5103ab5ed0d2b572a611f6fc697e54ff.jpg', description: 'Pueblo tranquilo con panoramas rurales y hospedajes con encanto.' },
    { name: 'Finca Las Julietas', region: 'Sonsonate', image: 'https://i.pinimg.com/736x/b7/bd/8e/b7bd8e3de970bc247c59b3f8fcbd9ec2.jpg', description: 'Experiencia cafetera: recorridos, cata y paisajes de montaña.' },
    { name: 'Acatenango', region: 'Antigua', image: 'https://i.pinimg.com/736x/07/27/60/072760a560bf902d5677906722e1b28e.jpg', description: 'Trekking épico junto al coloso Fuego, aventura para valientes.' },
    { name: 'Cayos Cochinos', region: 'Honduras', image: 'https://i.pinimg.com/736x/f1/3b/2d/f13b2dc95a929dc476af0e1f99d63f08.jpg', description: 'Islas paradisíacas con playas vírgenes y vida marina vibrante.' },
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
