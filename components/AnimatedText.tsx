import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

type AnimatedTextProps = {
  text: string;
  startFrame?: number;
  endFrame: number;
  fontSize?: number;
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
  maxWidth?: number;
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  startFrame = 0,
  endFrame,
  fontSize = 68,
  color = '#F9FAFB',
  textAlign = 'center',
  maxWidth = 920,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const localFrame = frame - startFrame;

  const entrance = spring({
    frame: Math.max(0, localFrame),
    fps,
    config: {
      damping: 14,
      stiffness: 120,
    },
  });

  const pulse = 1 + Math.sin(frame * 0.12) * 0.04;

  const exitStart = endFrame - 20;
  const exitOpacity = interpolate(frame, [exitStart, endFrame], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const exitTranslateY = interpolate(frame, [exitStart, endFrame], [0, -30], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        maxWidth,
        fontWeight: 800,
        lineHeight: 1.1,
        letterSpacing: -1,
        fontSize,
        color,
        textAlign,
        opacity: exitOpacity,
        transform: `translateY(${(1 - entrance) * 80 + exitTranslateY}px) scale(${entrance * pulse})`,
        textShadow: '0 8px 32px rgba(0,0,0,0.35)',
      }}
    >
      {text}
    </div>
  );
};
