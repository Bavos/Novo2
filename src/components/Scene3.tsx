import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import type {SceneData} from '../Video';

export type SceneData = {
  title: string;
  subtitle: string;
  narration: string;
};

type SceneProps = {
  data: SceneData;
};

export const Scene3: React.FC<SceneProps> = ({data}) => {
  const frame = useCurrentFrame();
  const localFrame = frame % 180;

  const opacity = interpolate(localFrame, [0, 20, 160, 179], [0, 1, 1, 0], {
  const opacity = interpolate(localFrame, [0, 24, 160, 179], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const translateY = interpolate(localFrame, [0, 20], [50, 0], {
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
        fontFamily: 'Inter, system-ui, sans-serif',
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div style={{fontSize: 32, color: '#60a5fa', marginBottom: 20}}>🧩 Edite o JSON</div>
      <h1 style={{fontSize: 70, lineHeight: 1.1, margin: 0, maxWidth: 1500}}>{data.title}</h1>
      <p style={{fontSize: 38, color: '#93c5fd', marginTop: 24, marginBottom: 0}}>{data.subtitle}</p>
      <p style={{fontSize: 22, color: '#cbd5e1', marginTop: 28, maxWidth: 1400}}>{data.narration}</p>
        opacity,
        transform: `translateY(${translateY}px)`,
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <div style={{fontSize: 30, color: '#60a5fa', marginBottom: 20}}>🧩 data/sceneData.json</div>
      <h1 style={{fontSize: 72, lineHeight: 1.1, margin: 0, maxWidth: 1500}}>{data.title}</h1>
      <p style={{fontSize: 40, color: '#93c5fd', marginTop: 24, marginBottom: 0}}>{data.subtitle}</p>
    </AbsoluteFill>
  );
};
