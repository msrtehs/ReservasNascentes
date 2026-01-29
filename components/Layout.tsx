
import React from 'react';
import { CondoType } from '../types';
import { CONDO_DATA } from '../constants';
import FloatingChatbot from './FloatingChatbot';

interface LayoutProps {
  children: React.ReactNode;
  condoType: CondoType;
  currentPage: string;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (val: boolean) => void;
  onNavigate: (page: string) => void;
  onChangeCondo: () => void;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  condoType, 
  currentPage, 
  isDrawerOpen, 
  setIsDrawerOpen,
  onNavigate,
  onChangeCondo
}) => {
  const config = CONDO_DATA[condoType];
  const isNascente = condoType === 'nascente';
  const isHome = currentPage === 'home';
  
  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'institucional', label: 'Institucional' },
    { id: 'galeria', label: 'Galeria de Experiências' },
    { id: 'catalogo', label: 'Lotes & Masterplan' },
    { id: 'atividades', label: 'Natureza & Trilhas' },
    { id: 'lazer', label: 'Clube & Lazer' },
    { id: 'investimento', label: 'Investidores' },
    { id: 'suporte', label: 'Atendimento AI' },
  ];

  return (
    <div className={`min-h-screen bg-${config.colors.bg}`}>
      {/* Header Premium */}
      <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 h-20 ${isHome ? 'bg-transparent border-none' : 'bg-white/95 backdrop-blur-xl shadow-md border-b border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <button 
            onClick={() => setIsDrawerOpen(true)}
            className={`p-2.5 rounded-xl transition-all ${isHome ? 'bg-white/10 text-white hover:bg-white/20' : `bg-${config.colors.primary}/5 text-${config.colors.primary} hover:bg-${config.colors.primary} hover:text-white`}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>
          
          <div className="flex flex-col items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <h1 className={`text-xl md:text-2xl font-serif font-bold tracking-tight transition-colors ${isHome ? 'text-white' : `text-${config.colors.text}`}`}>
              {config.name}
            </h1>
            <span className={`text-[9px] uppercase tracking-[0.4em] font-bold mt-0.5 ${isHome ? 'text-white/60' : `text-${config.colors.primary}`}`}>Catu • Bahia</span>
          </div>

          <div className="hidden md:flex gap-4">
            <button 
                onClick={() => onNavigate('suporte')}
                className={`px-5 py-2 rounded-full border-2 font-bold text-[10px] uppercase tracking-widest transition-all ${isHome ? 'border-white/40 text-white hover:border-white hover:bg-white/10' : `border-${config.colors.primary} text-${config.colors.primary} hover:bg-${config.colors.primary} hover:text-white`}`}
            >
                Atendimento
            </button>
          </div>
          <div className="md:hidden w-10"></div>
        </div>
      </header>

      {/* Sidebar Drawer */}
      <div 
        className={`fixed inset-0 z-[110] bg-stone-950/80 backdrop-blur-sm transition-opacity duration-500 ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsDrawerOpen(false)}
      ></div>

      <aside 
        className={`fixed top-0 left-0 z-[120] h-full w-full md:w-96 bg-white shadow-2xl transition-transform duration-500 ease-in-out transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-12 h-full flex flex-col">
          <div className="flex justify-between items-center mb-16">
            <div className="text-left">
                <h2 className={`text-3xl font-serif font-bold text-${config.colors.text}`}>{config.name}</h2>
                <div className={`h-1 w-12 bg-${config.colors.accent} mt-2`}></div>
            </div>
            <button onClick={() => setIsDrawerOpen(false)} className="text-gray-300 hover:text-black p-2 border border-gray-100 rounded-full transition-all">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          <nav className="space-y-3 flex-1 overflow-y-auto hide-scrollbar">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full text-left px-8 py-4 rounded-2xl transition-all flex items-center justify-between group ${
                  currentPage === item.id 
                    ? `bg-${config.colors.primary} text-white shadow-xl translate-x-4` 
                    : 'text-gray-500 hover:bg-stone-50 hover:text-stone-900'
                }`}
              >
                <span className="text-base font-medium">{item.label}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`opacity-0 group-hover:opacity-100 transition-opacity ${currentPage === item.id ? 'opacity-100' : ''}`}>
                    <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            ))}
          </nav>

          <div className="pt-8 mt-8 border-t border-gray-100 space-y-4">
            <button
              onClick={onChangeCondo}
              className={`w-full flex items-center justify-center gap-3 px-8 py-5 bg-${isNascente ? 'sky-700' : 'emerald-700'} text-white rounded-2xl font-bold shadow-lg hover:opacity-90 transition-all`}
            >
              Trocar Condomínio
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
          </div>
        </div>
      </aside>

      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className={`bg-${isNascente ? 'emerald-950' : 'sky-950'} text-white py-24 px-6`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-serif mb-4">{config.name}</h3>
            <p className="opacity-50 text-sm max-w-xs mx-auto md:mx-0">Vanguarda em condomínios rurais planejados. Sinta a natureza em sua forma mais pura em Catu-BA.</p>
          </div>
          <div className="flex justify-center gap-8 text-sm font-bold tracking-widest uppercase text-white/40">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Youtube</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
          <div className="text-center md:text-right text-white/40 text-xs">
            © 2024 Grupo Reserva Fazenda. <br/> Desenvolvido para um novo estilo de vida.
          </div>
        </div>
      </footer>

      {/* Chatbot Flutuante Global */}
      <FloatingChatbot condoType={condoType} />
    </div>
  );
};

export default Layout;
