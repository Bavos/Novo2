import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../styles/theme';

type SceneTextProps = {
  text: string;
  accent?: boolean;
};

export const SceneText: React.FC<SceneTextProps> = ({text, accent = false}) => {
  const frame = useCurrentFrame();
  const {fps, height, width} = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: {damping: 12, stiffness: 130, mass: 0.6}
  });

  const opacity = interpolate(frame, [0, 14, 80], [0, 1, 1], {extrapolateRight: 'clamp'});
  const translateY = interpolate(entrance, [0, 1], [36, 0]);
  const entranceScale = interpolate(entrance, [0, 1], [0.96, 1]);
  const pulse = 1 + Math.sin(frame / 10) * 0.008;
  const driftX = Math.sin(frame / 32) * 5;

  const fontSize = Math.max(48, Math.min(72, width * 0.038));

  return (
    <div
      style={{
        width: theme.safe.contentWidth,
        textAlign: 'center',
        fontFamily: theme.fontFamily,
        color: accent ? theme.colors.tacticalRed : theme.colors.textPrimary,
        fontWeight: 700,
        fontSize,
        lineHeight: 1.2,
        letterSpacing: '0.02em',
        transform: `translate(${driftX}px, ${translateY}px) scale(${entranceScale * pulse})`,
        opacity,
        textShadow: `0 0 ${height * 0.015}px rgba(78,168,222,0.38)`
      }}
    >
      {text}
    </div>
  );
};
