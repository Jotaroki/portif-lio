import React from 'react';

interface Bubble {
  id: number;
  size: number;
  top: string;
  left: string;
  duration: number;
  delay: number;
  opacity: number;
}

const BUBBLES: Bubble[] = [
  { id: 1, size: 120, top: '10%', left: '8%', duration: 18, delay: 0, opacity: 0.5 },
  { id: 2, size: 70, top: '25%', left: '88%', duration: 14, delay: 2, opacity: 0.4 },
  { id: 3, size: 180, top: '45%', left: '3%', duration: 22, delay: 4, opacity: 0.35 },
  { id: 4, size: 90, top: '60%', left: '92%', duration: 16, delay: 1, opacity: 0.45 },
  { id: 5, size: 50, top: '75%', left: '15%', duration: 12, delay: 3, opacity: 0.5 },
  { id: 6, size: 140, top: '85%', left: '80%', duration: 20, delay: 5, opacity: 0.38 },
  { id: 7, size: 65, top: '35%', left: '50%', duration: 15, delay: 6, opacity: 0.3 },
  { id: 8, size: 110, top: '5%', left: '72%', duration: 19, delay: 2.5, opacity: 0.42 }
];

export const FloatingBubbles: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 1
      }}
    >
      {BUBBLES.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble-item"
          style={{
            position: 'absolute',
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            top: bubble.top,
            left: bubble.left,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.9) 0%, rgba(224, 242, 254, 0.4) 30%, rgba(56, 189, 248, 0.2) 70%, rgba(2, 132, 199, 0.35) 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.65)',
            boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.8), inset 0 -3px 6px rgba(2, 132, 199, 0.25), 0 8px 24px rgba(2, 132, 199, 0.12)',
            backdropFilter: 'blur(3px)',
            WebkitBackdropFilter: 'blur(3px)',
            opacity: bubble.opacity,
            animation: `floatBubbleSlow ${bubble.duration}s ease-in-out infinite`,
            animationDelay: `${bubble.delay}s`
          }}
        >
          {/* Specular inner curved glint */}
          <div
            style={{
              position: 'absolute',
              top: '12%',
              left: '18%',
              width: '35%',
              height: '25%',
              borderRadius: '50%',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0) 100%)',
              transform: 'rotate(-20deg)'
            }}
          />
        </div>
      ))}
    </div>
  );
};
