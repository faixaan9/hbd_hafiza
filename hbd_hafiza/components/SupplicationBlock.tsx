
import React from 'react';

declare const confetti: any;

const SupplicationBlock: React.FC = () => {
  const triggerBlessingEffect = () => {
    if (typeof confetti !== 'undefined') {
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, colors: ['#2dd4bf', '#ffffff'] });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, colors: ['#2dd4bf', '#ffffff'] });
      }, 250);
    }
  };

  const duas = [
    {
      title: "Guidance & Wisdom",
      text: "May Allah always guide your heart towards what is best and grant you immense wisdom in every step of your life.",
      icon: "fa-book-open"
    },
    {
      title: "Happiness & Contentment",
      text: "May your heart always be filled with genuine happiness and a deep sense of peace that never fades away.",
      icon: "fa-sun"
    },
    {
      title: "Health & Protection",
      text: "May you be blessed with perfect health and always be under the protection of the Almighty, safe from every harm.",
      icon: "fa-shield-heart"
    },
    {
      title: "Success & Prosperity",
      text: "May every path you take lead you to great success and may you find barakah in everything you do.",
      icon: "fa-arrow-up-right-dots"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <div className="bg-white/80 backdrop-blur-xl p-10 md:p-16 rounded-[4rem] shadow-2xl border border-teal-50">
        <div className="text-center mb-16">
          <i className="fas fa-hands-praying text-teal-400 text-4xl mb-4"></i>
          <h2 className="text-4xl md:text-5xl font-serif-elegant text-teal-700 font-bold mb-4">Prayers for Hafiza</h2>
          <div className="w-24 h-1 bg-teal-200 mx-auto rounded-full"></div>
          <p className="text-teal-600/70 mt-6 max-w-2xl mx-auto italic">
            "The best gift one can give is a sincere prayer from the heart."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {duas.map((dua, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl bg-teal-50/50 hover:bg-white transition-all duration-500 border border-transparent hover:border-teal-100 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02]"
            >
              <div className="flex items-start space-x-5">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-teal-500 shadow-sm group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white transition-all duration-500">
                  <i className={`fas ${dua.icon} text-xl`}></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-teal-700 mb-2 transition-colors duration-500 group-hover:text-teal-600">{dua.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {dua.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center space-y-6">
          <div className="inline-block px-10 py-6 bg-teal-600 rounded-[2rem] text-white shadow-xl shadow-teal-200/50">
            <p className="text-lg md:text-xl font-serif-elegant italic mb-2">
              "Allahuma barik laha fi 'umriha wa fi rizqiha."
            </p>
            <p className="text-teal-100 text-xs uppercase tracking-[0.2em] font-bold">
              O Allah, bless her in her life and her sustenance.
            </p>
          </div>
          
          <div>
            <button 
              onClick={triggerBlessingEffect}
              className="mt-4 px-8 py-4 bg-white text-teal-600 border-2 border-teal-100 rounded-full font-bold hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all duration-300 shadow-lg group"
            >
              <i className="fas fa-paper-plane mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
              Send More Blessings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplicationBlock;
