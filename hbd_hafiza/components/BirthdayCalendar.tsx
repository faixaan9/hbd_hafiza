
import React from 'react';

const BirthdayCalendar: React.FC = () => {
  const daysInMonth = 31;
  // March 1, 2026 is a Sunday (Index 0 if Sunday=0)
  const startDay = 0; 

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: startDay }, (_, i) => i);

  return (
    <div className="bg-white p-10 rounded-[3rem] shadow-2xl max-w-md w-full border border-teal-50 transition-all duration-500 hover:shadow-teal-100/50">
      <div className="text-center mb-8">
        <h3 className="text-4xl font-serif-elegant text-teal-700 font-bold mb-1">March 2026</h3>
        <p className="text-teal-400/80 text-sm font-medium tracking-wide">A blessed day is approaching</p>
      </div>
      
      <div className="grid grid-cols-7 gap-3 text-center text-xs font-bold text-teal-300 mb-4 uppercase tracking-tighter">
        <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {blanks.map(b => <div key={`b-${b}`} className="h-10"></div>)}
        {days.map(day => {
          const isSpecial = day === 9;
          return (
            <div
              key={day}
              className={`h-10 flex items-center justify-center rounded-2xl transition-all duration-500 relative group
                ${isSpecial ? 'bg-teal-500 text-white shadow-xl scale-125 z-10 font-bold ring-4 ring-teal-100' : 'hover:bg-teal-50 text-slate-500 cursor-default'}
              `}
            >
              {day}
              {isSpecial && (
                <div className="absolute -top-12 bg-white text-teal-600 px-4 py-1.5 rounded-full text-[10px] shadow-lg border border-teal-50 whitespace-nowrap animate-bounce font-bold uppercase tracking-widest">
                  Hafiza's Day! ✨
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-10 pt-6 border-t border-teal-50 flex items-center justify-center space-x-3 text-teal-400">
        <i className="fas fa-sparkles"></i>
        <span className="text-sm font-semibold tracking-wide">Celebrating a beautiful soul</span>
      </div>
    </div>
  );
};

export default BirthdayCalendar;
