
import React, { useEffect, useState } from 'react';

const FloatingDecorations: React.FC = () => {
  const [elements, setElements] = useState<{ id: number; left: string; duration: string; size: string; icon: string }[]>([]);

  useEffect(() => {
    const icons = ['fa-sparkles', 'fa-star', 'fa-leaf', 'fa-moon'];
    const interval = setInterval(() => {
      const newElement = {
        id: Date.now(),
        left: `${Math.random() * 100}vw`,
        duration: `${8 + Math.random() * 12}s`,
        size: `${12 + Math.random() * 18}px`,
        icon: icons[Math.floor(Math.random() * icons.length)]
      };
      setElements(prev => [...prev.slice(-15), newElement]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {elements.map(el => (
        <i
          key={el.id}
          className={`fas ${el.icon} floating-element`}
          style={{
            left: el.left,
            fontSize: el.size,
            // @ts-ignore
            '--duration': el.duration
          }}
        />
      ))}
    </div>
  );
};

export default FloatingDecorations;
