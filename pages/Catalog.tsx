
import React, { useState } from 'react';
import { CondoType } from '../types';
import { CONDO_DATA, BASE_IMAGE_URL, imageCatalog } from '../constants';

interface CatalogProps {
  condoType: CondoType;
}

const Catalog: React.FC<CatalogProps> = ({ condoType }) => {
  const config = CONDO_DATA[condoType];
  const [showPopup, setShowPopup] = useState(false);
  const isNascente = condoType === 'nascente';

  const lots = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    size: config.details.lotSize + (i % 3 === 0 ? 200 : 0),
    available: true,
    price: 'Sob Consulta',
    position: i % 2 === 0 ? 'Nascente' : 'Poente'
  }));

  return (
    <div className={`min-h-screen py-24 px-6 animate-reveal ${isNascente ? 'bg-pattern-nascente' : 'bg-pattern-aguas'}`}>
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center relative">
          <span className={`text-${config.colors.primary} font-bold tracking-widest text-xs uppercase mb-4 block`}>Mapa de Disponibilidade</span>
          <h2 className={`text-5xl font-serif text-${config.colors.text} mb-8`}>Seu lugar ao sol</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
            Cada lote no {config.name} foi estrategicamente posicionado para garantir a melhor ventilação, incidência solar e privacidade total.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <div className="px-8 py-3 bg-white shadow-sm border border-gray-100 rounded-full flex items-center gap-3">
               <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
               <span className="text-sm font-bold">{config.details.totalLots} Lotes Totais</span>
             </div>
             <div className="px-8 py-3 bg-white shadow-sm border border-gray-100 rounded-full flex items-center gap-3">
               <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
               <span className="text-sm font-bold">Média {config.details.lotSize}m²</span>
             </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {lots.map((lot) => (
            <div 
              key={lot.id}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col transform hover:-translate-y-3"
            >
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <img 
                  src={`${BASE_IMAGE_URL}${imageCatalog.lotesCondominioRural[0]}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt="Vista do Lote" 
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md text-gray-900 text-xs font-bold rounded-full shadow-lg">
                  Lote #{String(lot.id).padStart(3, '0')}
                </div>
                <div className={`absolute top-6 right-6 px-4 py-2 bg-${config.colors.primary} text-white text-xs font-bold rounded-full shadow-lg`}>
                  Disponível
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-2xl font-bold text-gray-900 mb-1">{lot.size} m²</p>
                    <p className="text-sm text-gray-400 font-medium">Área Privativa</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900 uppercase tracking-tighter">{lot.position}</p>
                    <p className="text-xs text-gray-400">Posição</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    Infraestrutura Padrão
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    Segurança 24h
                  </div>
                </div>

                <div className="mt-auto">
                  <button 
                    onClick={() => setShowPopup(true)}
                    className={`w-full py-4 ${config.colors.button} text-white font-bold rounded-2xl shadow-lg transform group-hover:scale-[1.02] transition-all`}
                  >
                    Solicitar Valor
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pop-up de Contato Minimalista */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-stone-950/60 backdrop-blur-md">
          <div className="bg-white rounded-[2.5rem] p-12 max-w-md w-full shadow-2xl relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-2 bg-${config.colors.primary}`}></div>
            <button onClick={() => setShowPopup(false)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-900">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            
            <div className="text-center">
              <div className={`w-20 h-20 bg-${config.colors.primary}/10 text-${config.colors.primary} rounded-full flex items-center justify-center mx-auto mb-8`}>
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Interesse no Lote?</h3>
              <p className="text-gray-500 mb-10 leading-relaxed">Nossos especialistas estão prontos para fornecer detalhes sobre valores e planos de financiamento direto.</p>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.me/5500000000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-3 w-full py-5 ${config.colors.button} text-white font-bold rounded-2xl shadow-xl hover:opacity-90 transition-all`}
                >
                  Falar no WhatsApp
                </a>
                <button 
                  onClick={() => setShowPopup(false)}
                  className="w-full py-5 bg-gray-50 text-gray-500 font-bold rounded-2xl hover:bg-gray-100 transition-all"
                >
                  Agora não
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalog;
