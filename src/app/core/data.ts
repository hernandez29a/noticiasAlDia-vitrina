import { MarketData, NewsItem } from './types';

export const initialMarketData: MarketData[] = [
  { symbol: 'IBEX 35', name: 'Madrid', value: 11240.20, changePercent: 0.42 },
  { symbol: 'S&P 500', name: 'NYSE', value: 5321.41, changePercent: 0.22 },
  { symbol: 'NASDAQ', name: 'Tech', value: 16832.24, changePercent: 1.12 },
  { symbol: 'EUR/USD', name: 'Forex', value: 1.0845, changePercent: 0.08 },
  { symbol: 'BRENT', name: 'Commodity', value: 82.15, changePercent: -0.54 },
  { symbol: 'BITCOIN', name: 'Crypto', value: 64120.00, changePercent: 1.20 }
];

export const newsArticles: NewsItem[] = [
  {
    id: '1',
    category: 'MERCADOS',
    title: 'Wall Street cierra al alza ante optimismo sobre recortes de tasas',
    summary: 'Los principales índices bursátiles rebotaron hoy con fuerza mientras los inversores asimilan los últimos datos de inflación, sugiriendo un aterrizaje suave de la economía global.',
    author: 'Carlos V.',
    timestamp: new Date(),
    image: 'economy_hero_1782604123979.png',
    isFeatured: true
  },
  {
    id: '2',
    category: 'TECNOLOGÍA',
    title: 'La IA impulsa una inversión récord en centros de datos',
    summary: 'Las grandes tecnológicas destinan miles de millones de dólares a expandir su infraestructura de servidores para soportar modelos de lenguaje cada vez más pesados.',
    author: 'Ana M.',
    timestamp: new Date(Date.now() - 3600000),
    image: 'tech_ai_1782604131629.png'
  },
  {
    id: '3',
    category: 'ENERGÍA',
    title: 'Transición energética: El auge de la industria eólica en Europa',
    summary: 'Nuevos parques eólicos terrestres y marinos marcan un hito histórico en la generación de energía renovable europea durante el primer trimestre del año.',
    author: 'Luis P.',
    timestamp: new Date(Date.now() - 7200000),
    image: 'green_energy_1782604139208.png'
  },
  {
    id: '4',
    category: 'INMOBILIARIO',
    title: 'Crisis de vivienda urbana redefine el mercado de rascacielos',
    summary: 'El aumento de los costos de construcción y las nuevas normativas de alquiler están cambiando el panorama de las inversiones inmobiliarias en las grandes urbes.',
    author: 'Marta G.',
    timestamp: new Date(Date.now() - 14400000),
    image: 'urban_housing_1782604148915.png'
  }
];

export const latestNews: NewsItem[] = [
  { id: '5', category: 'EMPRESAS', title: 'Fusión millonaria en el sector farmacéutico sacude los mercados', summary: '', author: 'Redacción', timestamp: new Date(Date.now() - 1800000), image: '' },
  { id: '6', category: 'ECONOMÍA', title: 'Banco Central mantiene los tipos de interés sin cambios', summary: '', author: 'Redacción', timestamp: new Date(Date.now() - 2400000), image: '' },
  { id: '7', category: 'FINANZAS', title: 'El oro alcanza su máximo histórico como refugio seguro', summary: '', author: 'Redacción', timestamp: new Date(Date.now() - 5400000), image: '' },
  { id: '8', category: 'POLÍTICA', title: 'Nuevas regulaciones comerciales entre la UE y Asia entran en vigor', summary: '', author: 'Redacción', timestamp: new Date(Date.now() - 8600000), image: '' },
];
