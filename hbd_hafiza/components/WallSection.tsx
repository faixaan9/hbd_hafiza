
import React, { useState } from 'react';
import { WallItem } from '../types';
import { generateShayari } from '../services/geminiService';

const INITIAL_ITEMS: WallItem[] = [
  { id: '1', type: 'shayari', content: 'Tu hai to duniya rangeen lagti hai, Tere bina har khushi namkeen lagti hai.', author: 'Yours Truly', date: '2025' },
  { id: '2', type: 'sorry', content: 'Sorry for that one time I ate your favorite snack. I still feel guilty!', author: 'Snack Thief', date: 'Last Month' },
  { id: '3', type: 'confession', content: 'I actually think your weird dance moves are adorable.', author: 'Secret Admirer', date: 'Always' },
];

const WallSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'shayari' | 'sorry' | 'confession'>('shayari');
  const [items, setItems] = useState<WallItem[]>(INITIAL_ITEMS);
  const [loading, setLoading] = useState(false);

  const filteredItems = items.filter(i => i.type === activeTab);

  const handleGenerateMagic = async () => {
    setLoading(true);
    try {
      const text = await generateShayari(activeTab);
      const newItem: WallItem = {
        id: Date.now().toString(),
        type: activeTab,
        content: text,
        author: 'The Stars ✨',
        date: 'Just Now'
      };
      setItems([newItem, ...items]);
    } catch (err) {
      alert("The stars are shy right now.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center space-x-2 md:space-x-4 mb-12 bg-white/50 backdrop-blur-md p-2 rounded-full border border-white shadow-lg">
        {(['shayari', 'sorry', 'confession'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-full text-sm font-bold capitalize transition-all duration-300
              ${activeTab === tab ? 'bg-pink-500 text-white shadow-md scale-105' : 'text-pink-400 hover:bg-pink-50'}
            `}
          >
            {tab}s
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 min-h-[400px]">
        <div 
          onClick={handleGenerateMagic}
          className="bg-white/40 border-2 border-dashed border-pink-200 rounded-[2rem] flex flex-col items-center justify-center p-8 cursor-pointer hover:bg-white/60 transition-all group"
        >
          {loading ? (
            <i className="fas fa-spinner fa-spin text-4xl text-pink-500"></i>
          ) : (
            <>
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-wand-magic-sparkles text-pink-500 text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-pink-600 mb-2">Generate {activeTab}</h4>
              <p className="text-pink-400 text-sm text-center">Let Gemini write a beautiful {activeTab} just for you</p>
            </>
          )}
        </div>

        {filteredItems.map(item => (
          <div key={item.id} className="bg-white p-8 rounded-[2rem] shadow-xl border border-pink-50 relative animate-in fade-in zoom-in duration-500">
            <i className={`fas fa-quote-left absolute top-6 left-6 text-pink-100 text-4xl`}></i>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <p className={`text-gray-700 italic leading-relaxed mb-6 ${activeTab === 'shayari' ? 'font-romantic text-2xl' : 'text-lg'}`}>
                {item.content}
              </p>
              <div className="flex justify-between items-end border-t border-pink-50 pt-4">
                <span className="text-pink-500 font-bold text-sm">— {item.author}</span>
                <span className="text-gray-300 text-[10px] uppercase font-bold tracking-widest">{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WallSection;
