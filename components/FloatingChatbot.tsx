
import React, { useState, useRef, useEffect } from 'react';
import { CondoType } from '../types';
import { CONDO_DATA } from '../constants';
import { getChatbotResponse } from '../geminiService';

interface FloatingChatbotProps {
  condoType: CondoType;
}

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const FloatingChatbot: React.FC<FloatingChatbotProps> = ({ condoType }) => {
  const config = CONDO_DATA[condoType];
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: `Olá! Sou o consultor virtual do ${config.name}. Como posso ajudar você hoje com seu interesse no condomínio?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getChatbotResponse(userMsg, condoType);
    
    setMessages(prev => [...prev, { role: 'bot', text: response || 'Tive um pequeno problema técnico, mas estou aqui para você. Pode repetir?' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      {/* Janela de Chat */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] md:h-[600px] bg-white rounded-[2rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-stone-100 flex flex-col overflow-hidden animate-reveal active origin-bottom-right">
          {/* Header */}
          <div className={`p-6 bg-${config.colors.primary} text-white flex items-center justify-between`}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center font-serif text-xl font-bold">R</div>
              <div>
                <p className="font-serif font-bold text-sm">Consultor Reserva</p>
                <p className="text-[10px] opacity-70 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                  Online agora
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 p-2 rounded-full transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>

          {/* Mensagens */}
          <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-4 bg-stone-50/50 hide-scrollbar">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? `bg-${config.colors.primary} text-white rounded-tr-none` 
                      : 'bg-white text-stone-800 rounded-tl-none border border-stone-100'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-stone-100 flex gap-1">
                  <span className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-stone-100 flex gap-3">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Digite sua dúvida..."
              className="flex-1 bg-stone-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-stone-200 outline-none"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className={`p-3 ${config.colors.button} text-white rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            </button>
          </div>
        </div>
      )}

      {/* Botão de Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.3)] flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-90 ${
          isOpen ? 'bg-white text-stone-900 rotate-90' : `${config.colors.button} text-white`
        }`}
      >
        {isOpen ? (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        )}
        
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
        )}
      </button>
    </div>
  );
};

export default FloatingChatbot;
