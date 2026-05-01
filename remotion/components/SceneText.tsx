import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

type SceneTextProps = {
  text: string;
  accent?: boolean;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export const SceneText: React.FC<SceneTextProps> = ({text, accent = false}) => {
  const frame = useCurrentFrame();
  const {fps, width, height} = useVideoConfig();

  const entry = spring({
    frame,
    fps,
    config: {damping: 14, stiffness: 125, mass: 0.72},
  });

  const opacity = clamp(frame / 12, 0, 1);
  const moveY = 36 - entry * 36;
  const scaleIn = 0.955 + entry * 0.045;
  const microPulse = 1 + Math.sin(frame / 10) * 0.009;

  const fontSize = Math.max(56, Math.min(86, width * 0.07));

  return (
    <div
      style={{
        width: '70%',
        color: accent ? '#fecaca' : '#e5f2ff',
        fontWeight: 800,
        textAlign: 'center',
        fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
        fontSize,
        lineHeight: 1.16,
        letterSpacing: '0.012em',
        opacity,
        transform: `translateY(${moveY}px) scale(${scaleIn * microPulse})`,
        textShadow: '0 0 20px rgba(56,189,248,0.5), 0 6px 30px rgba(0,0,0,0.9)',
        padding: `0 ${Math.max(18, width * 0.01)}px`,
        maxWidth: Math.min(width * 0.78, height * 0.64),
      }}
    >
      {text}
    </div>
  );
};
