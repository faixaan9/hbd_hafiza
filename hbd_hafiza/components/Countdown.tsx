
import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const targetDate = new Date('2026-03-09T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (ms: number) => {
    if (ms < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="flex space-x-4 md:space-x-8 text-center bg-white/60 backdrop-blur-lg p-8 rounded-[2.5rem] shadow-2xl border border-teal-50">
      <div className="flex flex-col">
        <span className="text-4xl md:text-6xl font-bold text-teal-600">{days}</span>
        <span className="text-xs md:text-sm uppercase tracking-widest text-teal-400 font-semibold mt-1">Days</span>
      </div>
      <div className="text-4xl md:text-6xl font-light text-teal-200 self-center">:</div>
      <div className="flex flex-col">
        <span className="text-4xl md:text-6xl font-bold text-teal-600">{hours}</span>
        <span className="text-xs md:text-sm uppercase tracking-widest text-teal-400 font-semibold mt-1">Hours</span>
      </div>
      <div className="text-4xl md:text-6xl font-light text-teal-200 self-center">:</div>
      <div className="flex flex-col">
        <span className="text-4xl md:text-6xl font-bold text-teal-600">{minutes}</span>
        <span className="text-xs md:text-sm uppercase tracking-widest text-teal-400 font-semibold mt-1">Mins</span>
      </div>
      <div className="text-4xl md:text-6xl font-light text-teal-200 self-center">:</div>
      <div className="flex flex-col">
        <span className="text-4xl md:text-6xl font-bold text-teal-600">{seconds}</span>
        <span className="text-xs md:text-sm uppercase tracking-widest text-teal-400 font-semibold mt-1">Secs</span>
      </div>
    </div>
  );
};

export default Countdown;
