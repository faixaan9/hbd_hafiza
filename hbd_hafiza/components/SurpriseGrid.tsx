
import React, { useState } from 'react';
import { Surprise } from '../types';

declare const confetti: any;

const INITIAL_SURPRISES: Surprise[] = [
  { id: 1, title: 'Secret #1', message: "Your presence brings a sense of calm to everyone around you.", icon: 'fa-heart', revealed: false },
  { id: 2, title: 'Secret #2', message: "Hafiza, your dedication and kindness are truly inspiring.", icon: 'fa-star', revealed: false },
  { id: 3, title: 'Secret #3', message: "The world is a better place because you are in it.", icon: 'fa-gift', revealed: false },
  { id: 4, title: 'Secret #4', message: "May your wisdom continue to grow with every passing year.", icon: 'fa-book', revealed: false },
  { id: 5, title: 'Secret #5', message: "Wishing you a year filled with light and countless blessings.", icon: 'fa-sun', revealed: false },
  { id: 6, title: 'Secret #6', message: "You are a rare gem. Never forget your worth.", icon: 'fa-gem', revealed: false },
];

const SurpriseGrid: React.FC = () => {
  const [surprises, setSurprises] = useState<Surprise[]>(INITIAL_SURPRISES);

  const reveal = (id: number, event: React.MouseEvent) => {
    const surprise = surprises.find(s => s.id === id);
    if (surprise?.revealed) return;

    // Trigger confetti at the click location
    if (typeof confetti !== 'undefined') {
      confetti({
        particleCount: 40,
        spread: 70,
        origin: { 
          x: event.clientX / window.innerWidth, 
          y: event.clientY / window.innerHeight 
        },
        colors: ['#2dd4bf', '#5eead4', '#99f6e4', '#ffffff']
      });
    }

    setSurprises(prev => prev.map(s => s.id === id ? { ...s, revealed: true } : s));
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {surprises.map(s => (
        <div 
          key={s.id}
          onClick={(e) => reveal(s.id, e)}
          className={`h-48 rounded-[2rem] p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-700 transform relative overflow-hidden
            ${s.revealed ? 'bg-white shadow-xl rotate-0 scale-100' : 'bg-teal-50 hover:bg-teal-100 rotate-2 hover:rotate-0 shadow-md scale-95 hover:scale-100'}
          `}
        >
          {s.revealed ? (
            <div className="animate-in zoom-in duration-500">
              <i className={`fas ${s.icon} text-teal-500 text-2xl mb-3`}></i>
              <p className="text-slate-700 text-sm font-medium leading-relaxed px-2">{s.message}</p>
            </div>
          ) : (
            <>
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <i className="fas fa-gift text-9xl text-teal-200"></i>
              </div>
              <i className="fas fa-sparkles text-teal-300 text-3xl mb-2"></i>
              <span className="text-teal-400 font-bold tracking-widest text-xs uppercase">Tap to reveal</span>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default SurpriseGrid;
