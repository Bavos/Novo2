import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {theme} from '../styles/theme';

export const HudBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const parallaxY = Math.sin(frame / 45) * 18;
  const parallaxX = Math.cos(frame / 50) * 12;
  const zoom = 1 + frame * 0.00008;

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 50% 50%, #0b1522 0%, ${theme.colors.background} 72%)`,
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '-6%',
          opacity: 0.35,
          backgroundImage:
            'linear-gradient(rgba(78,168,222,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(78,168,222,0.2) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          transform: `translate(${parallaxX}px, ${parallaxY}px) scale(${zoom})`
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(120deg, rgba(4,7,12,0.8), rgba(4,7,12,0.2), rgba(4,7,12,0.8))',
          transform: `translateX(${Math.sin(frame / 60) * 20}px)`
        }}
      />
    </AbsoluteFill>
  );
};
