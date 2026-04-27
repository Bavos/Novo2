import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export type SceneData = {
  title: string;
  subtitle: string;
  narration: string;
};

type SceneProps = {
  data: SceneData;
};

export const Scene1: React.FC<SceneProps> = ({data}) => {
  const frame = useCurrentFrame();
  const localFrame = frame % 180;

  const opacity = interpolate(localFrame, [0, 24, 160, 179], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const translateY = interpolate(localFrame, [0, 24], [40, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0a0a1a',
        color: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 120,
        opacity,
        transform: `translateY(${translateY}px)`,
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <div style={{fontSize: 32, color: '#60a5fa', marginBottom: 20}}>🤖 + 🐙 + 🎬</div>
      <h1 style={{fontSize: 72, lineHeight: 1.1, margin: 0, maxWidth: 1500}}>{data.title}</h1>
      <p style={{fontSize: 40, color: '#93c5fd', marginTop: 24, marginBottom: 0}}>{data.subtitle}</p>
    </AbsoluteFill>
  );
};
