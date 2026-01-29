
import React, { useState, useEffect, useRef } from 'react';
import { CondoType } from '../types';
import { CONDO_DATA, BASE_IMAGE_URL, imageCatalog } from '../constants';

interface GalleryProps {
  condoType: CondoType;
}

interface GalleryItem {
  id: number;
  title: string;
  category: 'aventura' | 'agua' | 'familia' | 'natureza' | 'rural';
  image: string;
  span?: 'large' | 'tall' | 'normal';
}

const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, title: 'Trilhas de Jeep 4x4', category: 'aventura', image: `${BASE_IMAGE_URL}${imageCatalog.trilhasJeep4x4[0]}`, span: 'large' },
  { id: 2, title: 'Stand-up Paddle na Lagoa', category: 'agua', image: `${BASE_IMAGE_URL}${imageCatalog.esportesAquaticos[0]}` },
  { id: 3, title: 'Mata Atlântica Preservada', category: 'natureza', image: `${BASE_IMAGE_URL}${imageCatalog.mataAtlantica[0]}`, span: 'tall' },
  { id: 4, title: 'Passeio de Cavalos', category: 'rural', image: `${BASE_IMAGE_URL}${imageCatalog.passeioACavalo[0]}` },
  { id: 5, title: 'Churrasco em Família', category: 'familia', image: `${BASE_IMAGE_URL}${imageCatalog.churrasqueira[0]}`, span: 'large' },
  { id: 6, title: 'Crianças ao Ar Livre', category: 'familia', image: `${BASE_IMAGE_URL}${imageCatalog.lazerRecreacao[0]}` },
  { id: 7, title: 'Adrenalina Motocross', category: 'aventura', image: `${BASE_IMAGE_URL}${imageCatalog.motocross[0]}`, span: 'tall' },
  { id: 8, title: 'Caiaque na Alvorada', category: 'agua', image: `${BASE_IMAGE_URL}${imageCatalog.esportesAquaticos[1]}` },
  { id: 9, title: 'Piscina com Borda Infinita', category: 'agua', image: `${BASE_IMAGE_URL}${imageCatalog.piscinaFazenda[0]}` },
  { id: 10, title: 'Quadriciclo Adventure', category: 'aventura', image: `${BASE_IMAGE_URL}${imageCatalog.trilhaQuadriciclo[0]}`, span: 'large' },
  { id: 11, title: 'Nossos Lotes Rurais', category: 'rural', image: `${BASE_IMAGE_URL}${imageCatalog.lotesCondominioRural[0]}` },
  { id: 12, title: 'Trilhas Ecológicas', category: 'natureza', image: `${BASE_IMAGE_URL}${imageCatalog.trilhaEcologica[0]}` }
];

const Gallery: React.FC<GalleryProps> = ({ condoType }) => {
  const config = CONDO_DATA[condoType];
  const [activeFilter, setActiveFilter] = useState<string>('todos');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const itemsRef = useRef<(HTMLDivElement)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, [activeFilter]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  const filters = [
    { id: 'todos', label: 'Tudo' },
    { id: 'aventura', label: 'Aventura & Moto' },
    { id: 'agua', label: 'Lazer Náutico' },
    { id: 'familia', label: 'Social & Kids' },
    { id: 'natureza', label: 'Meio Ambiente' },
    { id: 'rural', label: 'Vida Rancheira' }
  ];

  const filteredItems = activeFilter === 'todos' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const navigateGallery = (direction: 'next' | 'prev') => {
    if (selectedIndex === null) return;
    if (direction === 'next') {
      setSelectedIndex((selectedIndex + 1) % filteredItems.length);
    } else {
      setSelectedIndex((selectedIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className={`min-h-screen pb-32 ${condoType === 'nascente' ? 'bg-stone-50' : 'bg-slate-50'}`}>
      {/* Hero Header */}
      <div className={`pt-48 pb-32 px-6 text-center bg-${condoType === 'nascente' ? 'emerald-950' : 'sky-950'} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <span className={`text-${config.colors.accent} font-bold tracking-[0.6em] uppercase text-[10px] mb-8 block reveal-left active`}>Momentos Reserva</span>
          <h2 className="text-5xl md:text-8xl font-serif mb-12 drop-shadow-xl reveal active">Galeria de Experiências</h2>
          
          <div className="flex justify-center flex-wrap gap-4 mt-12 reveal active">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => {
                  setActiveFilter(filter.id);
                  itemsRef.current = [];
                  setSelectedIndex(null);
                }}
                className={`px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-500 ${
                  activeFilter === filter.id 
                    ? `bg-${config.colors.accent} text-white shadow-xl scale-105` 
                    : 'bg-white/5 hover:bg-white/10 text-white/50 border border-white/10'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid com Reveal */}
      <div className="max-w-7xl mx-auto px-6 mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[350px]">
          {filteredItems.map((item, i) => (
            <div 
              key={`${activeFilter}-${item.id}`}
              ref={addToRefs}
              onClick={() => setSelectedIndex(i)}
              className={`group relative rounded-[3rem] overflow-hidden cursor-pointer shadow-xl transition-all duration-1000 reveal ${
                item.span === 'large' ? 'lg:col-span-2' : ''
              } ${
                item.span === 'tall' ? 'row-span-2' : ''
              }`}
            >
              <img 
                src={item.image} 
                className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110" 
                alt={item.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-12">
                <span className={`text-${config.colors.accent} text-[10px] font-bold uppercase tracking-[0.4em] mb-4`}>
                  {item.category}
                </span>
                <h4 className="text-white text-3xl font-serif leading-tight">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Carrossel Modal com setas corrigidas */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/98 backdrop-blur-md animate-reveal active"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Botão Fechar */}
          <button className="absolute top-8 right-8 text-white/40 hover:text-white p-3 border border-white/10 rounded-full transition-all z-[110]">
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>

          {/* Seta Esquerda (75% Opacidade) */}
          <button 
            onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }}
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/75 backdrop-blur-md text-stone-900 shadow-2xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all opacity-75 hover:opacity-100 z-[110]"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          {/* Imagem Selecionada */}
          <div className="max-w-6xl w-full h-full flex flex-col justify-center items-center" onClick={e => e.stopPropagation()}>
             <div className="relative w-full h-[75vh] rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] border border-white/5">
                <img 
                  src={filteredItems[selectedIndex].image} 
                  className="w-full h-full object-cover animate-fade-in" 
                  key={filteredItems[selectedIndex].image}
                  alt={filteredItems[selectedIndex].title} 
                />
                <div className="absolute bottom-0 left-0 w-full p-10 md:p-16 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                   <h3 className="text-4xl md:text-6xl font-serif text-white leading-tight">{filteredItems[selectedIndex].title}</h3>
                   <div className={`w-24 h-1.5 bg-${config.colors.accent} mt-6 mb-4`}></div>
                   <p className={`text-${config.colors.accent} font-bold tracking-widest uppercase text-xs`}>Padrão Reserva Fazenda</p>
                </div>
             </div>
             <div className="mt-8 text-white/30 text-[10px] font-bold tracking-[0.5em] uppercase">
                {selectedIndex + 1} de {filteredItems.length} • Clique fora para fechar
             </div>
          </div>

          {/* Seta Direita (75% Opacidade) corrigida */}
          <button 
            onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }}
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/75 backdrop-blur-md text-stone-900 shadow-2xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all opacity-75 hover:opacity-100 z-[110]"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      )}

      {/* Footer Invite Section */}
      <section className="mt-52 max-w-6xl mx-auto px-6 text-center">
         <div className={`p-20 md:p-32 rounded-[5rem] bg-stone-900 text-white shadow-2xl relative overflow-hidden reveal`} ref={addToRefs}>
            <h3 className="text-5xl md:text-7xl font-serif mb-12 leading-tight tracking-tight">Gostou do que viu? <br/><span className={`italic font-normal text-${config.colors.accent}`}>Venha sentir pessoalmente.</span></h3>
            <button className={`px-16 py-6 bg-${config.colors.accent} text-white font-bold rounded-2xl shadow-2xl hover:scale-105 transition-all`}>
              Agendar Visita Guiada
            </button>
         </div>
      </section>
    </div>
  );
};

export default Gallery;
