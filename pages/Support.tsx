
import React, { useState, useRef, useEffect } from 'react';
import { CondoType } from '../types';
import { CONDO_DATA } from '../constants';
import { getChatbotResponse } from '../geminiService';

interface SupportProps {
  condoType: CondoType;
}

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const Support: React.FC<SupportProps> = ({ condoType }) => {
  const config = CONDO_DATA[condoType];
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: `Olá! Sou o assistente virtual do ${config.name}. Estou aqui para ajudar você a encontrar o seu refúgio ideal em Catu-BA. Em que posso ser útil?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getChatbotResponse(userMsg, condoType);
    
    setMessages(prev => [...prev, { role: 'bot', text: response || 'Desculpe, tivemos um pequeno contratempo. Poderia tentar novamente?' }]);
    setIsLoading(false);
  };

  return (
    <div className={`min-h-screen py-24 px-6 animate-reveal ${condoType === 'nascente' ? 'bg-pattern-nascente' : 'bg-pattern-aguas'}`}>
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <header className="mb-16 text-center">
          <span className={`text-${config.colors.primary} font-bold tracking-[0.4em] uppercase text-xs mb-4 block`}>Atendimento</span>
          <h2 className={`text-5xl font-serif text-${config.colors.text} mb-6`}>Consultoria Exclusiva</h2>
          <p className="text-gray-600 text-lg">Sane suas dúvidas em tempo real ou conecte-se com nossa equipe comercial.</p>
        </header>

        <div className="w-full glass-card rounded-[3rem] shadow-2xl overflow-hidden flex flex-col h-[700px] border border-white/50 relative">
          {/* Header do Chat */}
          <div className={`p-8 bg-${config.colors.primary} text-white flex items-center justify-between`}>
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center font-serif text-2xl font-bold shadow-inner">R</div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 border-4 border-emerald-700 rounded-full animate-pulse"></div>
              </div>
              <div>
                <p className="text-xl font-serif font-bold tracking-wide">Consultor Reserva</p>
                <p className="text-sm opacity-80 flex items-center gap-2">
                   Especialista em moradia rural
                </p>
              </div>
            </div>
            <div className="hidden md:flex flex-col items-end opacity-60">
               <span className="text-xs font-bold uppercase tracking-widest">{config.name}</span>
            </div>
          </div>

          {/* Área de Mensagens */}
          <div ref={scrollRef} className="flex-1 p-8 overflow-y-auto space-y-6 custom-scrollbar bg-white/40">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-6 rounded-3xl shadow-sm ${
                    msg.role === 'user' 
                      ? `bg-${config.colors.primary} text-white rounded-tr-none` 
                      : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                  }`}
                >
                  <p className="text-[15px] leading-relaxed font-medium">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/60 backdrop-blur-md p-6 rounded-3xl rounded-tl-none border border-gray-100 italic text-gray-400 text-sm animate-pulse flex items-center gap-3">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                  </div>
                  O consultor está digitando...
                </div>
              </div>
            )}
          </div>

          {/* Área de Input */}
          <div className="p-8 bg-white/80 backdrop-blur-md border-t border-gray-100/50 flex gap-4">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Pergunte sobre lotes, lazer ou localização..."
              className="flex-1 bg-white border border-gray-200 rounded-2xl px-8 py-4 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all text-gray-700"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className={`p-5 ${config.colors.button} text-white rounded-2xl hover:scale-105 transition-all shadow-xl disabled:opacity-50`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            </button>
          </div>
        </div>

        {/* WhatsApp Footer */}
        <div className="mt-16 text-center animate-reveal">
          <p className="text-gray-400 mb-8 font-bold uppercase tracking-widest text-xs">Ou atendimento direto</p>
          <a 
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-4 px-12 py-6 ${config.colors.button} text-white font-bold rounded-full shadow-2xl hover:scale-105 transition-all group`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Entrar em contato via WhatsApp
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Support;
