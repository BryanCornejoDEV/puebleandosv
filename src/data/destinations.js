// Datos centralizados de destinos usados en /destinos y en la Home.
// Nota: algunos destinos incluyen metadatos (coords, altitud, clima) para módulos “inteligentes”.

export const destinations = [
  {
    name: 'Volcán Ilamatepec',
    region: 'Santa Ana',
    image: 'https://i.pinimg.com/736x/89/18/81/891881f578f94fbf22e2afacbf4b655c.jpg',
    description: 'Imponente coloso con vistas al Pacífico y rutas para atrevidos.',
    meta: {
      // Santa Ana Volcano (Ilamatepec)
      // Coordinates: 13°51′11″N 89°37′48″W
      lat: 13.853,
      lon: -89.63,
      elevationM: 2381,
      climate: {
        // Climate data for Santa Ana Volcano (13.9 N, 89.6 W, altitude ~1771 m)
        // Values below are monthly means from the climate table.
        // Temperatura en °C y precipitación en mm.
        monthly: {
          jan: { tMin: 11.2, tMean: 14.7, tMax: 19.3, rainMm: 8 },
          feb: { tMin: 11.6, tMean: 15.3, tMax: 20.6, rainMm: 5 },
          mar: { tMin: 12.8, tMean: 17.0, tMax: 23.3, rainMm: 19 },
          apr: { tMin: 13.9, tMean: 17.7, tMax: 23.2, rainMm: 64 },
          may: { tMin: 14.6, tMean: 17.9, tMax: 22.7, rainMm: 223 },
          jun: { tMin: 14.3, tMean: 17.2, tMax: 21.6, rainMm: 427 },
          jul: { tMin: 14.0, tMean: 17.1, tMax: 21.6, rainMm: 417 },
          aug: { tMin: 14.0, tMean: 17.1, tMax: 21.6, rainMm: 393 },
          sep: { tMin: 14.2, tMean: 16.9, tMax: 20.9, rainMm: 452 },
          oct: { tMin: 13.6, tMean: 16.2, tMax: 20.0, rainMm: 208 },
          nov: { tMin: 12.7, tMean: 15.2, tMax: 19.2, rainMm: 48 },
          dec: { tMin: 11.8, tMean: 14.7, tMax: 18.9, rainMm: 10 }
        }
      }
    }
  },
  {
    name: 'Los Cobanos',
    region: 'Sonsonate',
    image: 'https://i.pinimg.com/736x/e5/65/31/e565315bd7ffdff04bb3c6f86995103d.jpg',
    description: 'Playas rocosas y arrecifes, ideal para snorkel y atardeceres.'
  },
  {
    name: 'Pital',
    region: 'Cabañas',
    image: 'https://i.pinimg.com/736x/74/e4/fb/74e4fb97db5c134815a794836bcc83ac.jpg',
    description: 'Cumbres verdes y clima fresco, refugio natural para caminantes.'
  },
  {
    name: 'Callejón del Diablo',
    region: 'La Libertad',
    image: 'https://i.pinimg.com/736x/05/64/ac/0564ac447c351242edfcb55c92461430.jpg',
    description: 'Formaciones rocosas y senderos con historia y adrenalina.'
  },
  {
    name: 'Volcán Chaparrastique',
    region: 'San Miguel',
    image: 'https://i.pinimg.com/736x/80/52/f9/8052f9f06a6e273bcd2c108a24f2b9f8.jpg',
    description: 'Ascenso desafiante con panorámicas volcánicas inolvidables.'
  },
  {
    name: 'Cerro Eramón',
    region: 'La Paz',
    image: 'https://i.pinimg.com/736x/b6/ec/b1/b6ecb1b808a341462b9b9c8c848807e4.jpg',
    description: 'Miradores espectaculares y senderos poco transitados.'
  },
  {
    name: 'Cascada El Escuco',
    region: 'Ahuachapán',
    image: 'https://i.pinimg.com/736x/c4/63/d4/c463d48a988768f63705f5abb9af1294.jpg',
    description: 'Cascada rodeada de bosque y pozas cristalinas para un chapuzón.'
  },
  {
    name: 'Juayúa',
    region: 'Sonsonate',
    image: 'https://i.pinimg.com/736x/f1/ea/e9/f1eae91ea240cd380377e4df024ae542.jpg',
    description: 'Pueblo vibrante famoso por sus ferias gastronómicas y cultura.'
  },
  {
    name: 'Ataco',
    region: 'Ahuachapán',
    image: 'https://i.pinimg.com/736x/d2/f6/cc/d2f6cc15dc924a3afc87221f938d249e.jpg',
    description: 'Encantador pueblo de la Ruta de las Flores con arte y cafés.'
  },
  {
    name: 'Pino Dulce',
    region: 'Sonsonate',
    image: 'https://i.pinimg.com/736x/47/e2/22/47e22283fb6646c37ea356242e67e9ad.jpg',
    description: 'Árbol centenario y paisaje ideal para fotografía y picnic.'
  },
  {
    name: 'Ex Teleférico',
    region: 'San Salvador',
    image: 'https://i.pinimg.com/736x/c9/ba/51/c9ba51f6e1362bf85712dfe3719bd9c4.jpg',
    description: 'Atracción histórica con vistas urbanas y nostalgia asegurada.'
  },
  {
    name: 'Playa Los Almendros',
    region: 'La Libertad',
    image: 'https://i.pinimg.com/736x/33/63/f2/3363f22d1cddd93e6052541a9ff8ade3.jpg',
    description: 'Arena suave y aguas tranquilas para un día de relax.'
  },
  {
    name: 'Cascada El Chorrerón',
    region: 'San Vicente',
    image: 'https://i.pinimg.com/736x/c2/71/e6/c271e6864fc7f45b2e3dd65e2d9ba779.jpg',
    description: 'Cascada escénica con senderos y pozas escondidas.'
  },
  {
    name: 'Ruta de las Flores',
    region: 'Ahuachapán',
    image: 'https://i.pinimg.com/736x/dc/46/68/dc4668af97d55d7b20c1c16a91e9ec60.jpg',
    description: 'Recorrido floral entre pueblos pintorescos y mercados artesanales.'
  },
  {
    name: 'Semuc Champey',
    region: 'Guatemala',
    image: 'https://i.pinimg.com/736x/0b/1b/48/0b1b48c166e1c9d14a56e870e805f0c2.jpg',
    description: 'Pozas naturales turquesa entre selva y puentes de piedra.'
  },
  {
    name: 'Laguna Ipala',
    region: 'Chiquimula',
    image: 'https://i.pinimg.com/736x/e9/d9/d6/e9d9d620bad778cdfcd2493f0c322aa0.jpg',
    description: 'Crater lake de tonos hipnóticos, perfecto para contemplación.'
  },
  {
    name: 'Cayalá y Zoo La Aurora',
    region: 'Guatemala',
    image: 'https://i.pinimg.com/736x/e4/f6/31/e4f631f6ba646f11ba72ea1f050af34c.jpg',
    description: 'Destino urbano: compras, paseo y fauna en un mismo día.'
  },
  {
    name: 'Festival de los Farolitos',
    region: 'Ahuachapán',
    image: 'https://i.pinimg.com/736x/00/15/18/001518beb9abaec88a35abf78beade0e.jpg',
    description: 'Noche mágica de luces que enciende tradiciones y emoción.'
  },
  {
    name: 'Festival de las Flores',
    region: 'Ahuachapán',
    image: 'https://i.pinimg.com/736x/65/37/58/65375855cac22d5ee2371c4b4391292f.jpg',
    description: 'Celebración cromática con desfiles, música y aromas florales.'
  },
  {
    name: 'Huizúcar',
    region: 'La Libertad',
    image: 'https://i.pinimg.com/736x/51/03/ab/5103ab5ed0d2b572a611f6fc697e54ff.jpg',
    description: 'Pueblo tranquilo con panoramas rurales y hospedajes con encanto.'
  },
  {
    name: 'Finca Las Julietas',
    region: 'Sonsonate',
    image: 'https://i.pinimg.com/736x/b7/bd/8e/b7bd8e3de970bc247c59b3f8fcbd9ec2.jpg',
    description: 'Experiencia cafetera: recorridos, cata y paisajes de montaña.'
  },
  {
    name: 'Acatenango',
    region: 'Antigua',
    image: 'https://i.pinimg.com/736x/07/27/60/072760a560bf902d5677906722e1b28e.jpg',
    description: 'Trekking épico junto al coloso Fuego, aventura para valientes.'
  },
  {
    name: 'Cayos Cochinos',
    region: 'Honduras',
    image: 'https://i.pinimg.com/736x/f1/3b/2d/f13b2dc95a929dc476af0e1f99d63f08.jpg',
    description: 'Islas paradisíacas con playas vírgenes y vida marina vibrante.'
  }
];

export const FEATURED_DESTINATION_NAME = 'Volcán Ilamatepec';

export function getDestinationByName(name) {
  return destinations.find((d) => d.name === name) ?? null;
}
