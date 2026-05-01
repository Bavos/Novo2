import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';

export const HudBackground: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{pointerEvents: 'none'}}>
      <div
        style={{
          position: 'absolute',
          inset: '6%',
          border: '1px solid rgba(78,168,222,0.25)',
          borderRadius: 18,
          boxShadow: '0 0 18px rgba(78,168,222,0.16) inset'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '12%',
          left: '8%',
          right: '8%',
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(78,168,222,0.5), transparent)',
          transform: `translateX(${Math.sin(frame / 80) * 15}px)`
        }}
      />
    </AbsoluteFill>
  );
};
