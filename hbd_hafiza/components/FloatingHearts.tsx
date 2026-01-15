
import React, { useEffect, useState } from 'react';

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<{ id: number; left: string; duration: string; size: string }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        left: `${Math.random() * 100}vw`,
        duration: `${5 + Math.random() * 10}s`,
        size: `${10 + Math.random() * 20}px`
      };
      setHearts(prev => [...prev.slice(-20), newHeart]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {hearts.map(heart => (
        <i
          key={heart.id}
          className="fas fa-heart floating-heart"
          style={{
            left: heart.left,
            fontSize: heart.size,
            // @ts-ignore
            '--duration': heart.duration
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
