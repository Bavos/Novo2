import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';

export const GlitchOverlay: React.FC = () => {
  const frame = useCurrentFrame();
  const trigger = frame % 47 < 3 || frame % 113 === 0;
  const offset = Math.sin(frame * 2.7) * 8;

  return (
    <AbsoluteFill
      style={{
        opacity: trigger ? 0.24 : 0.06,
        mixBlendMode: 'screen',
        pointerEvents: 'none'
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'repeating-linear-gradient(0deg, rgba(215,38,61,0.18) 0px, rgba(215,38,61,0.18) 2px, transparent 3px, transparent 6px)',
          transform: `translateX(${offset}px)`
        }}
      />
    </AbsoluteFill>
  );
};
