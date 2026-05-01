import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

export const ModernWarfareMobile: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#050505',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 80,
      }}
    >
      <div style={{ opacity }}>
        <h1 style={{ fontSize: 96, margin: 0 }}>
          Modern Warfare
        </h1>

        <p style={{ fontSize: 42, marginTop: 32 }}>
          Vídeo vertical gerado com Remotion
        </p>
      </div>
    </AbsoluteFill>
  );
};
