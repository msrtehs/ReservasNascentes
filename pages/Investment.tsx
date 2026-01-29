
import React from 'react';
import { CondoType } from '../types';
import { CONDO_DATA } from '../constants';

interface InvestmentProps {
  condoType: CondoType;
}

const Investment: React.FC<InvestmentProps> = ({ condoType }) => {
  const config = CONDO_DATA[condoType];
  
  const isNascente = condoType === 'nascente';
  const data = {
    totalLots: isNascente ? 160 : 47,
    avgSize: isNascente ? '1.300 m²' : '1.000 m²',
    totalInvestment: isNascente ? 'R$ 2.800.000,00' : 'R$ 1.500.000,00',
    vgv: isNascente ? 'R$ 13.000.000,00' : 'R$ 4.230.000,00'
  };

  const marketPoints = [
    { title: "Demanda Crescente", desc: "Mercado residencial em alta busca por segurança e lazer." },
    { title: "Oportunidade Local", desc: "Catu-Ba apresenta demanda reprimida por condomínios fazenda." },
    { title: "Tendência em Alta", desc: "Busca por contato com a natureza pós-pandemia." },
    { title: "Diferencial Competitivo", desc: "Valores acessíveis com infraestrutura de alto padrão." }
  ];

  return (
    <div className="min-h-screen py-20 px-6 animate-fade-in bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className={`text-4xl md:text-5xl font-serif text-${config.colors.text} mb-6`}>Oportunidade de Investimento</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Participe do crescimento imobiliário em uma das regiões mais promissoras da Bahia através de Sociedade de Cotas de Participação (SCP).
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Market Analysis */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-serif mb-8 flex items-center gap-3">
                <span className={`w-10 h-10 rounded-full bg-${config.colors.primary} text-white flex items-center justify-center text-sm font-bold`}>01</span>
                Análise de Mercado
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {marketPoints.map((point, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-2">{point.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-8 flex items-center gap-3">
                <span className={`w-10 h-10 rounded-full bg-${config.colors.primary} text-white flex items-center justify-center text-sm font-bold`}>02</span>
                O Empreendimento
              </h2>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <p className="text-gray-700 leading-relaxed mb-8">
                  O {config.name} oferece lotes com infraestrutura completa em uma localização privilegiada de Catu-BA. 
                  O conceito de "Condomínio Fazenda" atrai famílias que buscam qualidade de vida sem abrir mão da segurança.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <span className={`text-${config.colors.primary}`}>✔</span>
                    <span className="text-gray-600">Áreas comuns focadas em lazer sustentável</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className={`text-${config.colors.primary}`}>✔</span>
                    <span className="text-gray-600">Controle de acesso rigoroso e tecnologia de segurança</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className={`text-${config.colors.primary}`}>✔</span>
                    <span className="text-gray-600">{data.totalLots} lotes de alto padrão</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Business Model Sidebar */}
          <div className="space-y-8">
            <div className={`bg-${config.colors.text} text-white p-10 rounded-3xl shadow-xl sticky top-28`}>
              <h3 className="text-2xl font-serif mb-8">Modelo de Negócio</h3>
              
              <div className="space-y-10">
                <div className="border-b border-white/10 pb-6">
                  <p className="text-xs uppercase tracking-widest opacity-60 mb-2">Estrutura</p>
                  <p className="text-lg font-bold">Sociedade de Cotas de Participação (SCP)</p>
                </div>
                
                <div className="border-b border-white/10 pb-6">
                  <p className="text-xs uppercase tracking-widest opacity-60 mb-2">Investimento Total</p>
                  <p className="text-3xl font-bold">{data.totalInvestment}</p>
                </div>

                <div className="border-b border-white/10 pb-6">
                  <p className="text-xs uppercase tracking-widest opacity-60 mb-2">VGV Estimado</p>
                  <p className="text-3xl font-bold text-emerald-400">{data.vgv}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest opacity-60 mb-2">Retorno Esperado</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Dividendos proporcionais à participação, garantindo fluxo de renda passiva e valorização real dos ativos.
                  </p>
                </div>

                <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all">
                  Solicitar Proposta
                </button>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-24 text-center">
          <h2 className="text-2xl font-serif mb-12">Considerações Finais</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-sm">
              <div className="text-3xl mb-4">🚀</div>
              <h4 className="font-bold mb-2">Inovação</h4>
              <p className="text-sm text-gray-500">Oportunidade única em mercado em constante crescimento.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm">
              <div className="text-3xl mb-4">🛡️</div>
              <h4 className="font-bold mb-2">Segurança</h4>
              <p className="text-sm text-gray-500">Transparência jurídica e infraestrutura completa.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm">
              <div className="text-3xl mb-4">📈</div>
              <h4 className="font-bold mb-2">Potencial</h4>
              <p className="text-sm text-gray-500">Localização garantida para alta valorização imobiliária.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Investment;
