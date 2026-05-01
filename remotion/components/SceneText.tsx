import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

type SceneTextProps = {
  text: string;
  accent?: boolean;
};

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

export const SceneText: React.FC<SceneTextProps> = ({text, accent = false}) => {
  const frame = useCurrentFrame();
  const {fps, width} = useVideoConfig();

  const entrance = spring({frame, fps, config: {damping: 14, stiffness: 120, mass: 0.7}});
  const fadeIn = clamp(frame / 12, 0, 1);
  const translateY = 40 - entrance * 40;
  const entranceScale = 0.95 + entrance * 0.05;
  const pulse = 1 + Math.sin(frame / 11) * 0.01;

  return (
    <div
      style={{
        width: '70%',
        color: accent ? '#fda4af' : '#e5f2ff',
        fontWeight: 800,
        textAlign: 'center',
        fontFamily: 'Inter, Helvetica, Arial, sans-serif',
        fontSize: Math.max(56, Math.min(88, width * 0.072)),
        lineHeight: 1.18,
        letterSpacing: '0.015em',
        opacity: fadeIn,
        transform: `translateY(${translateY}px) scale(${entranceScale * pulse})`,
        textShadow: '0 0 20px rgba(56,189,248,0.5), 0 6px 30px rgba(0,0,0,0.9)',
      }}
    >
      {text}
    </div>
  );
};
