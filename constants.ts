
import { CondoConfig, Activity } from './types';
export const BASE_IMAGE_URL =
  "https://raw.githubusercontent.com/msrtehs/Images/main/assets/images/";

export const imageCatalog = {
  /* =======================
     NATUREZA / PAISAGEM
  ======================= */

  mataAtlantica: [
    "mata-atlantica-1.jpeg",
    "mata-atlantica-2.jpeg",
    "mata-atlantica-3.jpeg",
    "mata-atlantica-4.jpeg",
    "mata-atlantica-5.jpeg",
    "mata-atlantica-6.jpeg"
  ],

  mirantesEPaisagens: [
    "mirantes-e-paisagens-1.jpeg",
    "mirantes-e-paisagens-2.jpeg",
    "mirantes-e-paisagens-3.jpeg",
    "mirantes-e-paisagens-4.jpeg"
  ],

  /* =======================
     LAZER / CONVIVÊNCIA
  ======================= */

  areaDeLazer: [
    "area-de-lazer-1.jpeg",
    "area-de-lazer-2.jpeg",
    "area-de-lazer-3.jpeg",
    "area-de-lazer-4.jpeg",
    "area-de-lazer-5.jpeg",
    "area-de-lazer-6.jpeg"
  ],

  churrasqueira: [
    "churrasco-1.jpeg",
    "churrasco-2.jpeg",
    "churrasco-3.jpeg",
    "churrasco-4.jpeg",
    "churrasco-5.jpeg"
  ],

  lazerRecreacao: [
    "crianca-ar-livre-1.jpeg",
    "crianca-ar-livre-2.jpeg",
    "crianca-ar-livre-3.jpeg",
    "crianca-ar-livre-4.jpeg",
    "crianca-ar-livre-5.jpeg"
  ],

  parquinhoCriancas: [
    "parquinho-criancas.jpeg"
  ],

  jacuzziExterna: [
    "jacuzzi-externa.jpeg"
  ],

  sauna: [
    "sauna.jpeg"
  ],

  spa: [
    "spa-1.jpeg",
    "spa-2.jpeg"
  ],

  piscinaFazenda: [
    "piscina-fazenda-1.jpeg",
    "piscina-fazenda-2.jpeg",
    "piscina-fazenda-3.jpeg",
    "piscina-fazenda-4.jpeg"
  ],

  /* =======================
     ESPORTES AQUÁTICOS
  ======================= */

  esportesAquaticos: [
    "caiaque-1.jpeg",
    "caiaque-2.jpeg",
    "stand-up-paddle-1.jpeg",
    "stand-up-paddle-2.jpeg",
    "stand-up-paddle-3.jpeg"
  ],

  /* =======================
     AVENTURA / TRILHAS
  ======================= */

  trilhasBicicleta: [
    "trilha-bicicleta-1.jpeg",
    "trilha-bicicleta-2.jpeg",
    "trilha-bicicleta-3.jpeg",
    "trilha-bicicleta-4.jpeg",
    "trilha-bicicleta-5.jpeg",
    "trilha-bicicleta-6.jpeg"
  ],

  trilhaEcologica: [
    "trilha-ecologica-1.jpeg",
    "trilha-ecologica-2.jpeg",
    "trilha-ecologica-3.jpeg",
    "trilha-ecologica-4.jpeg",
    "trilha-ecologica-5.jpeg",
    "trilha-ecologica-6.jpeg",
    "trilha-ecologica-7.jpeg",
    "trilha-ecologica-8.jpeg",
    "trilha-ecologica-9.jpeg"
  ],

  trilhasJeep4x4: [
    "trilha-jeep-4x4-1.jpeg",
    "trilha-jeep-4x4-2.jpeg",
    "trilha-jeep-4x4-3.jpeg",
    "trilha-jeep-4x4-4.jpeg",
    "trilha-jeep-4x4-5.jpeg",
    "trilha-jeep-4x4-6.jpeg"
  ],

  trilhaQuadriciclo: [
    "trilha-quadriciclo-1.jpeg",
    "trilha-quadriciclo-2.jpeg",
    "trilha-quadriciclo-3.jpeg",
    "trilha-quadriciclo-4.jpeg",
    "trilha-quadriciclo-5.jpeg",
    "trilha-quadriciclo-6.jpeg"
  ],

  motocross: [
    "motocross-1.jpeg",
    "motocross-2.jpeg",
    "motocross-3.jpeg",
    "motocross-4.jpeg",
    "motocross-5.jpeg",
    "motocross-6.jpeg"
  ],

  /* =======================
     RURAL / EXPERIÊNCIA
  ======================= */

  passeioACavalo: [
    "passeio-a-cavalo-1.jpeg",
    "passeio-a-cavalo-2.jpeg",
    "passeio-a-cavalo-3.jpeg",
    "passeio-a-cavalo-4.jpeg",
    "passeio-a-cavalo-5.jpeg",
    "passeio-a-cavalo-6.jpeg",
    "passeio-a-cavalo-7.jpeg",
    "passeio-a-cavalo-8.jpeg"
  ],

  curral: [
    "curral.jpeg"
  ],

  baiaDeCavalos: [
    "baia-de-cavalos.jpeg"
  ],

  /* =======================
     GASTRONOMIA / CONVENIÊNCIA
  ======================= */

  alambiqueECervejaria: [
    "bar.jpeg"
  ],

  mercadoEPadaria: [
    "padaria.jpeg",
    "sorveteria.jpeg"
  ],

  /* =======================
     SEGURANÇA / INSTITUCIONAL
  ======================= */

  segurancaEGuia: [
    "seguranca-e-guia-1.jpeg",
    "seguranca-e-guia-2.jpeg",
    "seguranca-e-guia-3.jpeg",
    "seguranca-e-guia-4.jpeg",
    "seguranca-e-guia-5.jpeg"
  ],

  /* =======================
     CONDOMÍNIO
  ======================= */

  lotesCondominioRural: [
    "lote-condominio-rural-1.jpeg",
    "lote-condominio-rural-2.jpeg",
    "lote-condominio-rural-3.jpeg",
    "lote-condominio-rural-4.jpeg",
    "lote-condominio-rural-5.jpeg",
    "lote-condominio-rural-6.jpeg"
  ]
} as const;

export const CONDO_DATA: Record<string, CondoConfig> = {
  nascente: {
    id: 'nascente',
    name: 'Reserva das Nascentes',
    colors: {
      primary: 'emerald-700',
      secondary: 'stone-50',
      accent: 'amber-900',
      bg: 'stone-50',
      text: 'emerald-950',
      button: 'bg-emerald-700',
      buttonHover: 'hover:bg-emerald-800',
    },
    details: {
      totalLots: 177,
      lotSize: 1500,
      headline: 'Viver a natureza em sua forma mais completa',
      subheadline: 'Catu, Bahia | Onde a terra encontrou um propósito em 2 milhões de m².',
    },
  },
  aguas: {
    id: 'aguas',
    name: 'Reserva das Águas',
    colors: {
      primary: 'sky-700',
      secondary: 'slate-50',
      accent: 'teal-600',
      bg: 'slate-50',
      text: 'sky-950',
      button: 'bg-sky-700',
      buttonHover: 'hover:bg-sky-800',
    },
    details: {
      totalLots: 47,
      lotSize: 1000,
      headline: 'A serenidade das águas emoldurada pelo verde',
      subheadline: 'Catu, Bahia | Lazer náutico e sofisticação rural em harmonia total.',
    },
  },
};

export const ACTIVITIES: Activity[] = [
  {
    id: 'natureza-preservada',
    title: 'Mata Atlântica Viva',
    description: 'Mais de 1.000.000 m² de floresta monitorada com tecnologia e acompanhada por biólogos e engenheiros ambientais.',
    benefit: 'Respire o ar mais puro da região em um ecossistema equilibrado e protegido.',
    image: `${BASE_IMAGE_URL}${imageCatalog.mataAtlantica[0]}`,
    category: 'natureza',
  },
  {
    id: 'aventura-rural',
    title: 'Trilhas & Adrenalina',
    description: 'Trilhas exclusivas para quadriciclo e motocross, além de 1.000.000 m² para passeios a cavalo.',
    benefit: 'Liberdade e conexão com o relevo ondulado e morros elevados de Catu.',
    image: `${BASE_IMAGE_URL}${imageCatalog.trilhasJeep4x4[0]}`,
    category: 'natureza',
  },
  {
    id: 'trilhas-bike',
    title: 'Mountain Bike',
    description: 'Circuitos desafiadores e trilhas leves para ciclistas de todos os níveis em meio à mata fechada.',
    benefit: 'Esporte e aventura sobre duas rodas em cenários que renovam as energias.',
    image: `${BASE_IMAGE_URL}${imageCatalog.trilhasBicicleta[0]}`,
    category: 'natureza',
  },
  {
    id: 'mirantes-paisagens',
    title: 'Mirantes & Paisagens',
    description: 'Pontos de observação estratégicos nos pontos mais altos do relevo para contemplação do horizonte.',
    benefit: 'Conexão visual única com o nascer e pôr do sol nas colinas.',
    image: `${BASE_IMAGE_URL}${imageCatalog.mirantesEPaisagens[0]}`,
    category: 'natureza',
  },
  {
    id: 'agro-experiencia',
    title: 'Agrofloresta & Cultivo',
    description: 'Atividades de cultivo e colheita em sistema agrofloresta, conectando moradores à terra de forma sustentável.',
    benefit: 'Alimentação orgânica e educação ambiental para toda a família.',
    image: `${BASE_IMAGE_URL}${imageCatalog.curral[0]}`,
    category: 'natureza',
  },
  {
    id: 'tradicao-rural',
    title: 'Alambique & Cervejaria',
    description: 'Alambique artesanal resgatando a cultura rural e cervejaria artesanal para experiências gastronômicas exclusivas.',
    benefit: 'O sabor da tradição em um ambiente rústico inspirado em currais históricos.',
    image: `${BASE_IMAGE_URL}${imageCatalog.alambiqueECervejaria[0]}`,
    category: 'lazer',
  },
  {
    id: 'clube-esportivo',
    title: 'Complexo de Esportes',
    description: 'Salão de artes marciais (jiu-jitsu, boxe), campo de futebol e quadras poliesportivas para tênis e basquete.',
    benefit: 'Saúde e integração em instalações de alto padrão cercadas por natureza.',
    image: `${BASE_IMAGE_URL}${imageCatalog.areaDeLazer[0]}`,
    category: 'lazer',
  },
  {
    id: 'lazer-recreacao',
    title: 'Lazer & Recreação',
    description: 'Playgrounds integrados à natureza, casa na árvore e áreas de convivência segura para crianças.',
    benefit: 'Espaços onde a infância acontece livre de telas e com segurança total.',
    image: `${BASE_IMAGE_URL}${imageCatalog.lazerRecreacao[0]}`,
    category: 'lazer',
  },
  {
    id: 'guias-seguranca',
    title: 'Segurança & Guias',
    description: 'Monitoramento 24h e equipe de guias ecológicos especializados para acompanhar trilhas e atividades.',
    benefit: 'Liberdade para explorar a imensidão da fazenda com total tranquilidade.',
    image: `${BASE_IMAGE_URL}${imageCatalog.segurancaEGuia[0]}`,
    category: 'conveniencia',
  },
  {
    id: 'conveniencia-reserva',
    title: 'Mercado & Padaria',
    description: 'Estrutura interna com padaria, mercado, sorveteria e açaiteria. Tudo o que você precisa sem sair do refúgio.',
    benefit: 'A praticidade urbana integrada à paz do campo.',
    image: `${BASE_IMAGE_URL}${imageCatalog.mercadoEPadaria[0]}`,
    category: 'conveniencia',
  },
];
