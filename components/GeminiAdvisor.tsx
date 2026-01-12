
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface GeminiAdvisorProps {
  onClose: () => void;
}

const GeminiAdvisor: React.FC<GeminiAdvisorProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Assalamu Alaikum! I am your Al-Salam spiritual advisor. How can I help you plan your sacred journey today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: 'You are a professional travel advisor and spiritual guide for Al-Salam Travel & Tours. Your goal is to help users plan their Hajj or Umrah pilgrimage. Be respectful, helpful, and informative about Islamic rituals and pilgrimage logistics. Always speak in a warm, welcoming tone suitable for a premium travel agency.',
        },
      });

      const response = await chat.sendMessage({ message: userMessage });
      const modelText = response.text || "I'm sorry, I couldn't process that request. Please try again or call our support line.";
      
      setMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      console.error('Gemini API Error:', error);
      setMessages(prev => [...prev, { role: 'model', text: "Peace be upon you. I'm currently unable to connect. Please contact our human experts at +1 (800) 123-4567." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gold-accent/20 flex flex-col h-[500px] overflow-hidden">
      <div className="bg-primary p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 bg-gold-accent rounded-full flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">auto_awesome</span>
          </div>
          <div>
            <h3 className="text-white font-bold text-sm">Al-Salam AI Guide</h3>
            <p className="text-[10px] text-gold-accent uppercase tracking-widest font-bold">Spiritual Advisor</p>
          </div>
        </div>
        <button onClick={onClose} className="text-white/50 hover:text-white transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 islamic-pattern-light">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-primary text-white rounded-tr-none' 
                : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200 shadow-sm'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none border border-slate-200 animate-pulse">
              <div className="flex gap-1">
                <div className="size-1.5 bg-gold-accent rounded-full animate-bounce"></div>
                <div className="size-1.5 bg-gold-accent rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="size-1.5 bg-gold-accent rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-slate-50 border-t border-slate-200">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask about rituals, hotels or flights..."
            className="w-full bg-white border-slate-200 rounded-xl pr-12 focus:ring-gold-accent focus:border-gold-accent text-sm"
          />
          <button 
            onClick={handleSendMessage}
            disabled={isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 size-8 bg-primary text-gold-accent rounded-lg flex items-center justify-center hover:bg-teal-dark transition-all"
          >
            <span className="material-symbols-outlined text-sm">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeminiAdvisor;
