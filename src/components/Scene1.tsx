import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import type {SceneData} from '../Video';

type SceneProps = {
  data: SceneData;
};

export const Scene1: React.FC<SceneProps> = ({data}) => {
  const frame = useCurrentFrame();
  const localFrame = frame % 180;

  const opacity = interpolate(localFrame, [0, 24, 156, 179], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const translateY = interpolate(localFrame, [0, 24], [50, 0], {
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
      }}
    >
      <div style={{opacity: opacity, transform: `translateY(${translateY}px)`}}>
        <div style={{fontSize: 34, color: '#60a5fa', marginBottom: 24}}>🤖 Codex + 🐙 GitHub + 🎬 Remotion</div>
        <h1 style={{fontSize: 76, lineHeight: 1.1, margin: 0, maxWidth: 1500}}>{data.title}</h1>
        <p style={{fontSize: 42, color: '#bfdbfe', marginTop: 24, marginBottom: 0}}>{data.subtitle}</p>
        <p style={{fontSize: 24, color: '#e2e8f0', marginTop: 20, marginBottom: 0, maxWidth: 1400}}>{data.narration}</p>
      </div>
    </AbsoluteFill>
  );
};
