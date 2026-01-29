
import React from 'react';
import { CondoType } from '../types';
import { CONDO_DATA, ACTIVITIES } from '../constants';

interface ActivitiesPageProps {
  condoType: CondoType;
  category: 'natureza' | 'lazer' | 'conveniencia';
}

const ActivitiesPage: React.FC<ActivitiesPageProps> = ({ condoType, category }) => {
  const config = CONDO_DATA[condoType];
  const isNascente = condoType === 'nascente';
  const filteredActivities = ACTIVITIES.filter(a => a.category === category);

  const categoryTitles = {
    natureza: 'Vida Selvagem & Trilhas',
    lazer: 'Oásis de Lazer & Tradição',
    conveniencia: 'Conveniência & Padrão Reserva',
  };

  return (
    <div className={`animate-reveal bg-${config.colors.bg}`}>
      {/* Header com Cor Sólida */}
      <header className={`py-40 bg-${isNascente ? 'emerald-900' : 'sky-900'} text-white text-center px-6 relative overflow-hidden`}>
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
         <div className="max-w-5xl mx-auto relative z-10">
            <span className={`text-${config.colors.accent} font-bold tracking-[0.5em] uppercase text-xs mb-8 block`}>Experiências de Classe Mundial</span>
            <h1 className="text-6xl md:text-9xl font-serif mb-10 leading-none">{categoryTitles[category]}</h1>
            <p className="text-xl md:text-2xl opacity-70 max-w-3xl mx-auto leading-relaxed font-light">
               Infraestrutura pensada para proporcionar liberdade, lazer e contato genuíno com o ambiente natural de Catu-BA.
            </p>
         </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-40 space-y-48">
        {filteredActivities.map((activity, index) => (
          <div 
            key={activity.id}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-24 items-center`}
          >
            <div className="flex-1 w-full relative group">
               <div className={`absolute -top-12 -left-12 w-full h-full border-8 border-${config.colors.primary}/10 rounded-[4.5rem] hidden lg:block transition-all duration-700 group-hover:-top-6 group-hover:-left-6`}></div>
               <div className="relative h-[550px] md:h-[750px] rounded-[4rem] overflow-hidden shadow-2xl transition-transform duration-1000 group-hover:scale-[1.02]">
                  <img src={activity.image} className="w-full h-full object-cover scale-105 transition-transform duration-[5s] group-hover:scale-110" alt={activity.title} />
                  <div className={`absolute inset-0 bg-${config.colors.primary}/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
               </div>
            </div>
            
            <div className="flex-1 space-y-12">
              <div className={`w-24 h-2 bg-${config.colors.accent} rounded-full`}></div>
              <h3 className={`text-5xl md:text-7xl font-serif text-${config.colors.text} leading-tight`}>{activity.title}</h3>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">{activity.description}</p>
              
              <div className={`p-12 rounded-[3.5rem] bg-${isNascente ? 'emerald' : 'sky'}-100/40 border border-${config.colors.primary}/10 shadow-inner backdrop-blur-sm`}>
                <h4 className={`text-xs font-bold uppercase tracking-widest text-${config.colors.primary} mb-6`}>Benefício ao Morador</h4>
                <p className="text-gray-800 text-xl md:text-2xl italic leading-relaxed font-serif">"{activity.benefit}"</p>
              </div>

              <button className={`px-14 py-6 ${config.colors.button} text-white font-bold rounded-2xl shadow-2xl hover:translate-x-4 transition-all uppercase tracking-widest text-sm`}>
                Saber Detalhes Técnicos
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer da Página Imersivo */}
      <section className={`py-48 bg-stone-950 text-white text-center px-6 relative overflow-hidden`}>
         <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] animate-slow-pan"></div>
         <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-serif mb-10 leading-tight">Deseja viver esta realidade?</h2>
            <p className="text-white/50 mb-16 max-w-2xl mx-auto text-xl md:text-2xl font-light">
              Últimas unidades disponíveis. Agende uma visita guiada com nossos biólogos e consultores.
            </p>
            <button className={`px-20 py-8 bg-${config.colors.accent} text-white font-bold rounded-full text-xl hover:scale-110 transition-all shadow-[0_20px_60px_rgba(0,0,0,0.4)]`}>
               Agendar Visita Agora
            </button>
         </div>
      </section>
    </div>
  );
};

export default ActivitiesPage;
