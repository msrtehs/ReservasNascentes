
import React, { useRef, useEffect, useState } from 'react';
import { CondoType } from '../types';
import { CONDO_DATA, ACTIVITIES, BASE_IMAGE_URL, imageCatalog } from '../constants';

interface HomeProps {
  condoType: CondoType;
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ condoType, onNavigate }) => {
  const config = CONDO_DATA[condoType];
  const isNascente = condoType === 'nascente';
  const carouselRef = useRef<HTMLDivElement>(null);
  const activitiesRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLElement | HTMLDivElement)[]>([]);
  const [activeAmenity, setActiveAmenity] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const cards = carousel.querySelectorAll('.carousel-card');
      if (cards[activeAmenity]) {
        const card = cards[activeAmenity] as HTMLElement;
        const scrollPos = card.offsetLeft - (carousel.offsetWidth / 2) + (card.offsetWidth / 2);
        carousel.scrollTo({
          left: scrollPos,
          behavior: 'smooth'
        });
      }
    }
  }, [activeAmenity]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const scrollActivities = (direction: 'left' | 'right') => {
    if (activitiesRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      activitiesRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const amenities = [
    { 
      title: 'Piscina & Spa', 
      icon: <path d="M2 12c1.5 0 2.5 1 4 1s2.5-1 4-1 2.5 1 4 1 2.5-1 4-1 2.5-1 4-1 2.5-1 4-1M2 16c1.5 0 2.5 1 4 1s2.5-1 4-1 2.5 1 4 1 2.5-1 4-1 2.5-1 4-1" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round"/>, 
      img: `${BASE_IMAGE_URL}${imageCatalog.piscinaFazenda[0]}`
    },
    { 
      title: 'Complexo Esportivo', 
      icon: <g stroke="currentColor" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/></g>, 
      img: `${BASE_IMAGE_URL}${imageCatalog.areaDeLazer[0]}`
    },
    { 
      title: 'Alambique & Cervejaria', 
      icon: <path d="M6 2h12v15a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V2z M6 7h12 M8 2v5 M16 2v5" stroke="currentColor" fill="none" strokeWidth="2"/>, 
      img: `${BASE_IMAGE_URL}${imageCatalog.alambiqueECervejaria[0]}`
    },
    { 
      title: 'Trilhas & Cavalos', 
      icon: <path d="M4 18l4-4 4 4 4-4 4 4M12 3L4 12h16L12 3z" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>, 
      img: `${BASE_IMAGE_URL}${imageCatalog.passeioACavalo[0]}`
    },
    { 
      title: 'Mirantes Naturais', 
      icon: <path d="M12 3v3M12 18v3M5 12H2M22 12h-3M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" stroke="currentColor" fill="none" strokeWidth="2"/>, 
      img: `${BASE_IMAGE_URL}${imageCatalog.mirantesEPaisagens[0]}`
    },
    { 
      title: 'Padaria & Mercado', 
      icon: <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2" stroke="currentColor" fill="none" strokeWidth="2"/>, 
      img: `${BASE_IMAGE_URL}${imageCatalog.mercadoEPadaria[0]}`
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[850px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={isNascente 
              ? `${BASE_IMAGE_URL}${imageCatalog.mataAtlantica[0]}`
              : `${BASE_IMAGE_URL}${imageCatalog.piscinaFazenda[0]}`
            }
            className="w-full h-full object-cover animate-subtle-zoom"
            alt="Natureza Reserva"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/10 to-transparent"></div>
          <div className={`absolute inset-0 bg-gradient-to-t ${isNascente ? 'from-emerald-950/95' : 'from-sky-950/95'} via-transparent to-transparent`}></div>
        </div>

        <div className="relative z-50 max-w-7xl mx-auto px-6 w-full text-white pb-52 pt-20">
          <div className="max-w-5xl reveal-left active">
            <span className="inline-block px-5 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-[10px] font-bold tracking-[0.4em] uppercase">
              Catu, Bahia • Vanguarda Rural
            </span>
            <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-[1.05] drop-shadow-2xl">
              {config.details.headline}
            </h1>
            <p className="text-lg md:text-2xl font-light mb-12 opacity-90 leading-relaxed max-w-2xl drop-shadow-lg">
              {config.details.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => onNavigate('catalogo')}
                className={`group px-12 py-5 ${isNascente ? 'bg-emerald-700 hover:bg-emerald-800' : 'bg-sky-700 hover:bg-sky-800'} text-white font-bold rounded-2xl transition-all shadow-[0_25px_60px_rgba(0,0,0,0.6)] flex items-center justify-center gap-4 hover-lift pointer-events-auto`}
              >
                Explorar Lotes
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <button 
                onClick={() => onNavigate('suporte')}
                className="px-12 py-5 bg-white text-stone-900 font-bold rounded-2xl hover:bg-stone-100 transition-all shadow-2xl hover-lift pointer-events-auto"
              >
                Falar com Consultor
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-1">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={`relative block w-[calc(100%+1.3px)] h-[130px] ${isNascente ? 'fill-emerald-950' : 'fill-sky-950'}`}>
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
        </div>
      </section>

      {/* Seção de Experiência e Símbolos Sincronizados */}
      <section className={`pt-4 pb-32 ${isNascente ? 'bg-emerald-950' : 'bg-sky-950'} relative overflow-hidden`} ref={addToRefs}>
        <div className="max-w-7xl mx-auto px-6 mb-20 reveal">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="max-w-3xl">
              <span className={`font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block ${isNascente ? 'text-amber-900' : 'text-teal-600'}`}>1.000.000 m² de Experiências</span>
              <h2 className="text-4xl md:text-7xl font-serif text-white leading-tight">Infraestrutura que <br/><span className={`italic font-normal ${isNascente ? 'text-amber-900' : 'text-teal-600'}`}>resgata sua essência</span></h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 px-6 max-w-[1750px] mx-auto reveal" ref={addToRefs}>
          {/* Menu Lateral de Ícones */}
          <div className="lg:w-1/4 grid grid-cols-2 gap-5 h-fit">
            {amenities.map((item, i) => (
              <div 
                key={i} 
                onClick={() => setActiveAmenity(i)}
                onMouseEnter={() => setActiveAmenity(i)}
                className={`p-8 rounded-[2.5rem] transition-all duration-500 cursor-pointer border ${
                  activeAmenity === i 
                  ? `${isNascente ? 'bg-amber-900 border-amber-900' : 'bg-teal-600 border-teal-600'} text-white shadow-2xl scale-105 z-10` 
                  : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10'
                }`}
              >
                <div className="w-10 h-10 mb-4">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                    {item.icon}
                  </svg>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest leading-tight">{item.title}</p>
              </div>
            ))}
          </div>

          {/* Carrossel Centralizado com Setas de Navegação */}
          <div className="lg:w-3/4 relative">
            <div 
              ref={carouselRef}
              className="flex overflow-x-auto gap-8 hide-scrollbar snap-x snap-mandatory pb-12"
              style={{ scrollBehavior: 'smooth' }}
            >
              {amenities.map((item, i) => (
                <div 
                  key={i} 
                  className={`carousel-card flex-none w-[320px] md:w-[750px] h-[500px] md:h-[650px] snap-center relative rounded-[4rem] overflow-hidden transition-all duration-700 border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)] ${
                    activeAmenity === i ? 'scale-100 opacity-100' : 'scale-90 opacity-20'
                  }`}
                >
                  <img 
                    src={item.img} 
                    className={`w-full h-full object-cover transition-transform duration-[6s] ${activeAmenity === i ? 'scale-110' : 'scale-100'}`} 
                    alt={item.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-16 left-16 right-16">
                    <span className={`font-bold tracking-[0.4em] uppercase text-[11px] mb-4 block ${isNascente ? 'text-amber-900' : 'text-teal-600'}`}>Diferencial Exclusivo</span>
                    <h4 className="text-white font-serif text-4xl md:text-7xl mb-4 leading-none">{item.title}</h4>
                    <p className="text-white/60 text-lg md:text-xl font-light max-w-xl">Um cenário onde o verde é dominante e a vida acontece em equilíbrio total com a natureza.</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Setas de Controle */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-10 z-20">
               <button 
                  onClick={() => setActiveAmenity(prev => Math.max(0, prev - 1))}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/75 backdrop-blur-md text-stone-900 shadow-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all opacity-75 hover:opacity-100"
               >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 18l-6-6 6-6"/></svg>
               </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-10 z-20">
               <button 
                  onClick={() => setActiveAmenity(prev => Math.min(amenities.length - 1, prev + 1))}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/75 backdrop-blur-md text-stone-900 shadow-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all opacity-75 hover:opacity-100"
               >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6"/></svg>
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção "Propósito" */}
      <section className={`py-40 ${isNascente ? 'bg-emerald-900' : 'bg-sky-900'} text-white relative overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-6 reveal-left" ref={addToRefs}>
          <div className="max-w-4xl">
            <span className={`font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block ${isNascente ? 'text-amber-900' : 'text-teal-600'}`}>Nossa Visão</span>
            <h2 className="text-5xl md:text-8xl font-serif text-white mb-10 leading-[1.1]">Onde a terra encontrou <br/><span className={`italic font-normal ${isNascente ? 'text-amber-900' : 'text-teal-600'}`}>um novo propósito</span></h2>
            <p className="text-xl md:text-2xl opacity-70 font-light leading-relaxed mb-10">
              O {config.name} não é apenas um condomínio fazenda. É um estilo de vida onde natureza, lazer e conforto caminham juntos.
            </p>
          </div>
        </div>

        {/* Atividades com Navegação Manual */}
        <div className="relative group">
          <div 
            ref={activitiesRef}
            className="flex overflow-x-auto gap-10 px-6 md:px-[calc((100vw-1280px)/2+24px)] hide-scrollbar snap-x pb-20"
          >
            {ACTIVITIES.map((activity, i) => (
              <div 
                key={activity.id}
                className="flex-none w-[340px] md:w-[500px] snap-center group cursor-pointer reveal"
                ref={addToRefs}
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => onNavigate('atividades')}
              >
                <div className="relative h-[650px] rounded-[4rem] overflow-hidden shadow-2xl transition-all duration-1000 group-hover:-translate-y-6 border border-white/10">
                  <img src={activity.image} className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-110" alt={activity.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/20 to-transparent"></div>
                  <div className="absolute bottom-16 left-12 right-12">
                    <h4 className="text-white font-serif text-4xl mb-4 leading-tight">{activity.title}</h4>
                    <p className="text-white/50 text-base mb-8 line-clamp-2 font-light leading-relaxed">{activity.description}</p>
                    <div className={`h-1.5 w-24 transition-all duration-1000 group-hover:w-full ${isNascente ? 'bg-amber-900' : 'bg-teal-600'}`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Setas de Controle de Atividades */}
          <div className="absolute top-1/2 -translate-y-1/2 left-8 hidden md:block">
            <button 
              onClick={() => scrollActivities('left')}
              className="w-14 h-14 rounded-full bg-white/75 backdrop-blur-md text-stone-900 shadow-xl flex items-center justify-center hover:bg-white transition-all opacity-75 hover:opacity-100"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-8 hidden md:block">
            <button 
              onClick={() => scrollActivities('right')}
              className="w-14 h-14 rounded-full bg-white/75 backdrop-blur-md text-stone-900 shadow-xl flex items-center justify-center hover:bg-white transition-all opacity-75 hover:opacity-100"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Convite Final */}
      <section className="relative py-60 overflow-hidden">
        <div className="absolute inset-0">
           <img src={`${BASE_IMAGE_URL}${imageCatalog.mirantesEPaisagens[0]}`} className="w-full h-full object-cover" alt="Nascer do Sol" />
           <div className={`absolute inset-0 backdrop-blur-sm ${isNascente ? 'bg-emerald-950/80' : 'bg-sky-950/80'}`}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white reveal" ref={addToRefs}>
          <h2 className="text-6xl md:text-9xl font-serif mb-12 leading-tight tracking-tight">O seu horizonte <br/><span className={`italic font-normal ${isNascente ? 'text-amber-900' : 'text-teal-600'}`}>está aqui.</span></h2>
          <button 
            onClick={() => onNavigate('catalogo')}
            className="px-20 py-8 bg-white text-stone-900 font-bold rounded-full text-xl hover:scale-105 transition-all duration-700 shadow-2xl"
          >
            Conhecer Disponibilidade
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
