
import React from 'react';
import { CondoType } from '../types';
import { BASE_IMAGE_URL, imageCatalog } from '../constants';

interface SelectionScreenProps {
  onSelect: (condo: CondoType) => void;
}

const SelectionScreen: React.FC<SelectionScreenProps> = ({ onSelect }) => {
  return (
    <div className="min-h-screen bg-stone-950 flex flex-col items-center justify-center p-4 md:p-8 text-white overflow-hidden relative">
      {/* Imagem de Fundo Imersiva */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src={`${BASE_IMAGE_URL}${imageCatalog.mirantesEPaisagens[0]}`}
          className="w-full h-full object-cover" 
          alt="Natureza" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-transparent to-stone-950"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl w-full">
        <div className="mb-12 animate-reveal">
          <span className="uppercase tracking-[0.4em] text-sm text-amber-500 font-medium mb-4 block">Bem-vindo ao Amanhã</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">Encontre o seu <span className="italic">Refúgio</span></h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto opacity-80">
            Catu-BA recebe os projetos mais exclusivos de moradia integrada à natureza. Selecione sua experiência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 w-full px-4">
          {/* Reserva da Nascente */}
          <button
            onClick={() => onSelect('nascente')}
            className="group relative h-[500px] overflow-hidden rounded-[2rem] transition-all duration-700 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(5,150,105,0.3)] border border-white/10"
          >
            <img 
              src={`${BASE_IMAGE_URL}${imageCatalog.mataAtlantica[0]}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              alt="Reserva da Nascente" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 text-left w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="w-12 h-1 mb-4 bg-emerald-500 transition-all duration-500 group-hover:w-24"></div>
              <h2 className="text-4xl font-serif mb-3">Reserva da Nascente</h2>
              <p className="text-emerald-100/70 font-light mb-6">Mata preservada, frescor e tradição.</p>
              <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                Explorar Projeto <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          </button>

          {/* Reserva das Águas */}
          <button
            onClick={() => onSelect('aguas')}
            className="group relative h-[500px] overflow-hidden rounded-[2rem] transition-all duration-700 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(2,132,199,0.3)] border border-white/10"
          >
            <img 
              src={`${BASE_IMAGE_URL}${imageCatalog.piscinaFazenda[0]}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              alt="Reserva das Águas" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-950/95 via-sky-950/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 text-left w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="w-12 h-1 mb-4 bg-sky-500 transition-all duration-500 group-hover:w-24"></div>
              <h2 className="text-4xl font-serif mb-3">Reserva das Águas</h2>
              <p className="text-sky-100/70 font-light mb-6">Serenidade, lazer náutico e horizonte azul.</p>
              <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                Explorar Projeto <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectionScreen;
