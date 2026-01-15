
import React from 'react';
import FloatingDecorations from './components/FloatingDecorations';
import Countdown from './components/Countdown';
import BirthdayCalendar from './components/BirthdayCalendar';
import SurpriseGrid from './components/SurpriseGrid';
import SupplicationBlock from './components/SupplicationBlock';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative text-slate-700 pb-20 overflow-x-hidden">
      <FloatingDecorations />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative z-10">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-teal-500 font-bold tracking-[0.4em] uppercase text-sm mb-6">March 9, 2026</h2>
          <h1 className="text-6xl md:text-9xl font-serif-elegant text-teal-700 mb-8 leading-tight">
            Happy Blessed <br/><span className="italic font-normal">Birthday, Hafiza</span>
          </h1>
          <p className="text-teal-600/60 text-lg md:text-2xl mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
            Counting down the days to celebrate a heart as pure as the morning sky.
            May this upcoming year be your most beautiful one yet.
          </p>
          <div className="flex justify-center">
            <Countdown />
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce text-teal-300">
          <i className="fas fa-chevron-down text-2xl"></i>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="animate-in slide-in-from-left duration-1000">
            <div className="inline-block px-4 py-1.5 bg-teal-100 text-teal-600 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              The Journey to March
            </div>
            <h2 className="text-5xl md:text-6xl font-serif-elegant text-teal-700 mb-8 font-bold">A Date Worth <br/>Waiting For</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-lg">
              We've marked the 9th of March 2026 on the calendar. It's more than just a date; 
              it's a celebration of the kindness, light, and joy you bring to everyone around you.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white px-6 py-3 rounded-2xl shadow-sm text-teal-600 text-sm font-bold border border-teal-50 flex items-center">
                <i className="fas fa-leaf mr-2 opacity-50"></i> Serenity & Grace
              </div>
              <div className="bg-white px-6 py-3 rounded-2xl shadow-sm text-teal-600 text-sm font-bold border border-teal-50 flex items-center">
                <i className="fas fa-cake-candles mr-2 opacity-50"></i> Sweet Milestones
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end animate-in zoom-in duration-1000">
            <BirthdayCalendar />
          </div>
        </div>
      </section>

      {/* Hidden Messages (Gifts) */}
      <section className="bg-teal-50/40 py-32 px-6 relative z-10 border-y border-teal-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif-elegant text-teal-700 mb-6 font-bold">Little Tokens of Joy</h2>
            <p className="text-teal-600/70 max-w-xl mx-auto text-lg">Tap on these hearts to reveal some small thoughts and wishes curated just for you.</p>
          </div>
          <SurpriseGrid />
        </div>
      </section>

      {/* Supplication (Dua) Section */}
      <section className="py-32 px-6 relative z-10">
        <SupplicationBlock />
      </section>

      {/* Footer */}
      <footer className="text-center py-20 px-6 border-t border-teal-50 bg-white/30 relative z-10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <p className="text-teal-700 font-serif-elegant text-4xl mb-6 italic">Stay Blessed, Hafiza</p>
          <div className="w-16 h-1 bg-teal-200 mx-auto rounded-full mb-8 opacity-50"></div>
          <p className="text-teal-400 text-xs font-bold tracking-[0.3em] uppercase mb-10">Celebrating your beautiful presence in our lives</p>
          
          <div className="flex justify-center space-x-10 text-teal-300">
            <i className="fas fa-envelope hover:text-teal-500 cursor-pointer transition-all hover:scale-125"></i>
            <i className="fas fa-star hover:text-teal-500 cursor-pointer transition-all hover:scale-125"></i>
            <i className="fas fa-heart hover:text-teal-500 cursor-pointer transition-all hover:scale-125"></i>
          </div>
          <p className="mt-12 text-teal-900/20 text-[10px] font-bold tracking-widest uppercase">
            EST. 2026 • MARCH 9
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
