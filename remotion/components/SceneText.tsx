import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

type SceneTextProps = {
  text: string;
  accent?: boolean;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export const SceneText: React.FC<SceneTextProps> = ({text, accent = false}) => {
  const frame = useCurrentFrame();
  const {fps, width} = useVideoConfig();

  const intro = spring({
    frame,
    fps,
    config: {damping: 14, stiffness: 120, mass: 0.72},
  });

  const opacity = clamp(frame / 12, 0, 1);
  const moveY = 38 - intro * 38;
  const introScale = 0.955 + intro * 0.045;
  const pulse = 1 + Math.sin(frame / 10) * 0.008;

  const fontSize = Math.max(56, Math.min(86, width * 0.072));

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
        transform: `translateY(${moveY}px) scale(${introScale * pulse})`,
        textShadow: '0 0 20px rgba(56,189,248,0.5), 0 6px 30px rgba(0,0,0,0.9)',
      }}
    >
      {text}
    </div>
  );
};
