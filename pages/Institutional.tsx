
import React, { useState } from 'react';
import { CondoType, InstitutionalTab } from '../types';
import { CONDO_DATA, BASE_IMAGE_URL, imageCatalog } from '../constants';

interface InstitutionalProps {
  condoType: CondoType;
}

const Institutional: React.FC<InstitutionalProps> = ({ condoType }) => {
  const [activeTab, setActiveTab] = useState<InstitutionalTab>('historia');
  const config = CONDO_DATA[condoType];
  const isNascente = condoType === 'nascente';

  const renderHistory = () => (
    <div className="space-y-16 animate-reveal">
      <section className="relative h-[50vh] rounded-[3rem] overflow-hidden shadow-2xl">
         <img src={`${BASE_IMAGE_URL}${imageCatalog.mataAtlantica[0]}`} className="w-full h-full object-cover" alt="História da Fazenda" />
         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-12 md:p-20">
            <div className="max-w-4xl">
                <span className={`text-${config.colors.accent} font-bold tracking-[0.4em] uppercase text-xs mb-4 block`}>Nossa Trajetória</span>
                <h3 className="text-4xl md:text-6xl font-serif text-white leading-tight">Onde a terra encontrou um propósito</h3>
            </div>
         </div>
      </section>

      <div className={`p-12 md:p-24 rounded-[3.5rem] bg-${isNascente ? 'emerald' : 'sky'}-900 text-white shadow-2xl relative`}>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90">
              Durante décadas, esta terra foi mais do que uma fazenda. Foram mais de 2 milhões de metros quadrados dedicados ao cultivo, à preservação e ao respeito pelos ciclos naturais. Aqui, a Mata Atlântica sempre foi tratada como patrimônio, não como obstáculo. Cada nascente, cada árvore e cada trilha carregam a história de um compromisso firme com o meio ambiente e com o futuro.
            </p>
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90">
              Com o passar do tempo, nasceu uma reflexão inevitável: como permitir que mais pessoas vivenciem essa conexão genuína com a natureza, sem abrir mão do conforto, da segurança e da exclusividade que um novo padrão de moradia exige?
            </p>
          </div>

          <div className="py-12 border-y border-white/20">
            <p className="text-3xl md:text-4xl font-serif italic text-center leading-tight">
              "Foi assim que surgiu o Condomínio Fazenda Reserva da Nascente e Reserva das Águas."
            </p>
          </div>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed opacity-80">
            <p>
              De toda a área original, 1 milhão de metros quadrados de Mata Atlântica preservada permaneceram intocados, protegidos por um projeto que respeita rigorosamente as normas ambientais e valoriza a biodiversidade local. O restante foi cuidadosamente planejado para receber um número limitado de moradores, pessoas que compartilham do mesmo propósito: viver bem, viver com consciência e viver em harmonia com a terra.
            </p>
            <p>
              Aqui, o luxo não está no excesso, mas no essencial. Está no silêncio das manhãs, no ar puro, nas paisagens abertas, na convivência com o verde e na possibilidade de uma vida rural sofisticada, onde tecnologia, conforto e sustentabilidade caminham juntos.
            </p>
            <p>
              Este condomínio não nasceu para ser apenas um endereço. Nasceu para ser um refúgio, um legado e uma escolha de vida para quem busca mais do que morar — busca pertencer a um lugar que respeita o passado, protege o presente e constrói um futuro sustentável.
            </p>
          </div>

          <div className="text-center pt-8">
             <p className="text-2xl font-serif text-white">Bem-vindo a um novo conceito de viver.</p>
             <p className={`text-xl font-bold text-${config.colors.accent} mt-2 uppercase tracking-widest`}>Bem-vindo à fazenda que evoluiu sem perder sua essência.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPhilosophy = () => (
    <div className="space-y-20 animate-reveal">
      {/* Sustentabilidade */}
      <section className={`p-12 md:p-24 rounded-[4rem] bg-${isNascente ? 'emerald' : 'sky'}-950 text-white relative overflow-hidden shadow-2xl`}>
         <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]"></div>
         <div className="relative z-10 space-y-12">
            <div className="max-w-3xl">
                <span className={`text-${config.colors.accent} font-bold tracking-[0.4em] uppercase text-xs mb-6 block`}>Sustentabilidade</span>
                <h3 className="text-4xl md:text-5xl font-serif leading-tight">Sustentabilidade não como discurso, mas como responsabilidade</h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 text-lg md:text-xl leading-relaxed opacity-90">
               <div className="space-y-8">
                  <p>Antes de qualquer projeto, existiu uma decisão. A decisão de que esta terra continuaria cumprindo seu papel mais nobre: preservar, proteger e regenerar.</p>
                  <p>Com origem em uma fazenda de mais de 2 milhões de metros quadrados, este território sempre foi conduzido sob rigoroso respeito às leis ambientais e à lógica da natureza. Ao idealizar o condomínio, assumimos um compromisso inegociável: crescer sem degradar, desenvolver sem comprometer o futuro.</p>
                  <p>Por isso, 1 milhão de metros quadrados de Mata Atlântica foram integralmente preservados, garantindo a proteção de nascentes, fauna, flora e corredores ecológicos.</p>
               </div>
               <div className="space-y-8">
                  <p>Cada área construída foi pensada para coexistir com o meio ambiente, reduzindo impactos, valorizando a topografia natural e respeitando os limites do solo. Aqui, sustentabilidade não é tendência — é fundamento.</p>
                  <p>Ela está presente no planejamento viário que evita cortes desnecessários, no controle de ocupação dos lotes, na valorização da ventilação e iluminação naturais, no estímulo a práticas conscientes e no incentivo a uma convivência harmônica entre pessoas e natureza.</p>
                  <p>Criamos um espaço onde o morador não apenas vive em meio ao verde, mas se torna guardião dele. Cada residência faz parte de um ecossistema maior, onde o bem-estar humano caminha lado a lado com a preservação ambiental.</p>
               </div>
            </div>
            <div className={`p-10 rounded-3xl bg-white/5 border border-white/10 text-center`}>
                <p className="text-xl italic max-w-4xl mx-auto">"Este condomínio foi concebido para um público que entende que verdadeiro luxo é viver em um lugar que respeita a terra, protege seus recursos e deixa um legado positivo para as próximas gerações."</p>
                <p className={`text-lg font-bold mt-6 text-${config.colors.accent}`}>Aqui, o futuro começa agora — e começa com respeito.</p>
            </div>
         </div>
      </section>

      {/* Transformação Social */}
      <section className={`p-12 md:p-24 rounded-[4rem] bg-stone-900 text-white shadow-2xl relative overflow-hidden`}>
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
         <div className="relative z-10 space-y-12">
            <div className="text-center max-w-4xl mx-auto">
                <span className="text-white/40 font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Transformação Social</span>
                <h3 className="text-4xl md:text-5xl font-serif">Desenvolvimento que gera valor para as pessoas</h3>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 text-lg md:text-xl leading-relaxed opacity-80">
                <div className="space-y-8">
                    <p>Este projeto nasceu da terra, mas foi pensado para as pessoas. Desde o início, entendemos que construir um condomínio vai muito além de erguer estruturas ou planejar espaços. Significa assumir um compromisso direto com a comunidade local, com os trabalhadores da região e com a economia que sustenta este território há gerações.</p>
                    <p>Ao transformar uma fazenda em um condomínio de alto padrão, optamos por um modelo de desenvolvimento responsável, que prioriza a contratação de mão de obra local, valoriza fornecedores regionais e estimula a qualificação profissional. Cada etapa da obra representa oportunidade, renda e crescimento para famílias que vivem e trabalham no entorno.</p>
                </div>
                <div className="space-y-8">
                    <p>O impacto positivo não se limita ao período de construção. A operação do condomínio cria uma cadeia contínua de empregos diretos e indiretos — manutenção, serviços, segurança, paisagismo, comércio local e atividades rurais complementares. Isso fortalece a economia, amplia a circulação de recursos e contribui para o desenvolvimento sustentável da região.</p>
                    <p>Investimos em relações de longo prazo, no respeito aos profissionais envolvidos e na construção de um ambiente onde o crescimento econômico caminha lado a lado com responsabilidade social.</p>
                </div>
            </div>

            <div className="text-center pt-8 border-t border-white/10">
                <p className="text-2xl font-serif">Acreditamos que um empreendimento só é verdadeiramente bem-sucedido quando deixa benefícios reais para todos ao seu redor.</p>
                <p className={`text-xl font-bold text-${config.colors.accent} mt-6`}>Aqui, o progresso tem propósito. E o desenvolvimento começa pelas pessoas.</p>
            </div>
         </div>
      </section>

      {/* Contribuição Social */}
      <section className={`p-12 md:p-24 rounded-[4rem] bg-${isNascente ? 'emerald' : 'sky'}-900 text-white shadow-2xl`}>
         <div className="max-w-4xl mx-auto space-y-10">
            <span className="text-white/40 font-bold tracking-[0.4em] uppercase text-xs block">Contribuição Social</span>
            <h3 className="text-4xl font-serif">Contribuição social como compromisso permanente</h3>
            <div className="space-y-8 text-xl leading-relaxed opacity-90">
                <p>Este condomínio foi concebido com a responsabilidade de gerar impactos positivos que vão além de seus limites. Desde o planejamento até a operação, atuamos de forma integrada com a comunidade local, valorizando pessoas, iniciativas regionais e relações duradouras.</p>
                <p>Ao estimular a economia do entorno, apoiar fornecedores e profissionais da região e promover uma convivência harmoniosa com o território, o projeto contribui para o fortalecimento social e para o desenvolvimento sustentável da área.</p>
                <p className="font-serif italic text-2xl">"Mais do que um empreendimento imobiliário, este é um compromisso com a sociedade, pautado pelo respeito, pela cooperação e pela construção de um legado positivo para as futuras gerações."</p>
            </div>
         </div>
      </section>
    </div>
  );

  const renderProject = () => (
    <div className="space-y-24 animate-reveal">
       {/* Conceito do Condomínio */}
       <section className={`p-12 md:p-24 rounded-[4rem] bg-stone-900 text-white shadow-2xl relative overflow-hidden`}>
          <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-10">
                <span className={`text-${config.colors.accent} font-bold tracking-[0.4em] uppercase text-xs`}>O Projeto</span>
                <h3 className="text-4xl md:text-5xl font-serif leading-tight">O conceito de viver em equilíbrio</h3>
                <div className="space-y-6 text-lg md:text-xl leading-relaxed opacity-85">
                    <p>O Condomínio Fazenda nasceu como resposta direta ao ritmo acelerado da vida urbana. Em um cenário marcado por excesso de estímulos, trânsito, insegurança e falta de tempo, criamos um espaço onde natureza, tranquilidade e alto padrão coexistem em perfeita harmonia.</p>
                    <p>Aqui, o equilíbrio ecológico é prioridade. Grandes áreas de mata preservada, ar puro, silêncio e paisagens abertas criam um ambiente que favorece a saúde física e mental, proporcionando qualidade de vida real. A distância do caos urbano não significa isolamento, mas sim liberdade: liberdade para viver com mais segurança, bem-estar e controle sobre o próprio tempo.</p>
                    <p>Esse novo modo de viver reflete diretamente no desempenho pessoal e profissional. Mais foco, menos estresse, mais disposição e uma rotina mais saudável. O condomínio foi planejado para quem entende que viver melhor é também produzir melhor, pensar melhor e aproveitar mais a vida.</p>
                </div>
             </div>
             <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]">
                <img src={`${BASE_IMAGE_URL}${imageCatalog.mirantesEPaisagens[0]}`} className="w-full h-full object-cover" alt="Conceito do Projeto" />
             </div>
          </div>
       </section>

       {/* Fazenda Compartilhada */}
       <section className={`p-12 md:p-24 rounded-[4rem] bg-white text-stone-900 shadow-2xl relative border border-stone-100`}>
          <div className="max-w-5xl mx-auto space-y-12">
             <div className="text-center">
                <span className={`text-${config.colors.primary} font-bold tracking-[0.4em] uppercase text-xs mb-6 block`}>Experiência Exclusiva</span>
                <h3 className="text-4xl md:text-6xl font-serif leading-tight">A fazenda compartilhada: o luxo da experiência, sem o ônus da gestão</h3>
             </div>
             
             <div className="space-y-8 text-xl leading-relaxed text-stone-600">
                <p>O conceito vai além da moradia. O Condomínio Fazenda funciona como uma fazenda compartilhada, onde cada proprietário adquire seu lote, constrói sua residência de alto padrão e passa a usufruir de toda a estrutura rural existente nas áreas comuns.</p>
                <p>Piscinas, áreas de lazer, espaços rurais, convivência com animais, paisagens campestres e ambientes típicos de fazenda fazem parte do dia a dia — sem que o morador precise arcar com os custos, a manutenção ou o esforço operacional de uma fazenda tradicional.</p>
                <div className={`p-10 rounded-[2.5rem] bg-${isNascente ? 'emerald' : 'sky'}-50 border-l-8 border-${config.colors.primary} shadow-inner`}>
                    <p className="text-stone-800 font-medium">Toda a gestão, cuidado e funcionamento das áreas rurais e de lazer são centralizados, garantindo conforto, organização e padronização de alto nível. Assim, o morador vivencia o melhor da vida no campo com a segurança, a infraestrutura e a praticidade de um condomínio planejado.</p>
                </div>
                <p className="text-2xl font-serif text-stone-900 pt-8 border-t border-stone-100">Este é um novo conceito de morar: a paz da zona rural, o conforto da arquitetura de luxo e a liberdade de viver uma fazenda completa — sem abrir mão da conveniência, da segurança e da qualidade de vida.</p>
             </div>
          </div>
       </section>

       {/* Banner Final */}
       <section className={`p-20 rounded-[4rem] bg-${isNascente ? 'emerald' : 'sky'}-950 text-white text-center relative overflow-hidden shadow-2xl`}>
          <div className={`absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]`}></div>
          <div className="relative z-10 max-w-3xl mx-auto">
             <h4 className="text-3xl md:text-5xl font-serif mb-12">Bem-vindo à fazenda que evoluiu sem perder sua essência.</h4>
             <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className={`px-12 py-5 bg-${config.colors.accent} text-white font-bold rounded-2xl shadow-xl hover:scale-105 transition-all uppercase tracking-widest text-sm`}>
                    Agendar Visita
                </button>
                <button className="px-12 py-5 bg-white text-stone-900 font-bold rounded-2xl shadow-xl hover:bg-stone-100 transition-all uppercase tracking-widest text-sm">
                    Falar com Corretor
                </button>
             </div>
          </div>
       </section>
    </div>
  );

  return (
    <div className={`min-h-screen pb-32 ${isNascente ? 'bg-stone-50' : 'bg-slate-50'}`}>
      {/* Hero Header Institucional */}
      <div className={`pt-40 pb-24 px-6 text-center bg-${isNascente ? 'emerald-950' : 'sky-950'} text-white relative`}>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <span className={`text-${config.colors.accent} font-bold tracking-[0.5em] uppercase text-xs mb-6 block`}>Nosso Legado</span>
          <h2 className="text-5xl md:text-8xl font-serif mb-12">Institucional</h2>
          
          <div className="flex justify-center flex-wrap gap-4 mt-8">
            {[
              { id: 'historia', label: 'História' },
              { id: 'filosofia', label: 'Filosofia' },
              { id: 'projeto', label: 'Projeto' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                    setActiveTab(tab.id as InstitutionalTab);
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
                className={`px-12 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all duration-500 ${
                  activeTab === tab.id 
                    ? `bg-${config.colors.accent} text-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] scale-105` 
                    : 'bg-white/5 hover:bg-white/10 text-white/50 border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Transition */}
      <div className="relative h-20 overflow-hidden">
        <div className="divider-wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill={isNascente ? "#064e3b" : "#0c4a6e"}></path>
            </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-32">
        {activeTab === 'historia' && renderHistory()}
        {activeTab === 'filosofia' && renderPhilosophy()}
        {activeTab === 'projeto' && renderProject()}
      </div>
    </div>
  );
};

export default Institutional;
