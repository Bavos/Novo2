import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

type WordStaggerProps = {
  text: string;
  startFrame?: number;
  endFrame: number;
  fontSize?: number;
  color?: string;
  gap?: number;
};

export const WordStagger: React.FC<WordStaggerProps> = ({
  text,
  startFrame = 0,
  endFrame,
  fontSize = 54,
  color = '#E5E7EB',
  gap = 14,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const words = text.split(' ');
  const localFrame = frame - startFrame;

  const exitStart = endFrame - 20;
  const exitOpacity = interpolate(frame, [exitStart, endFrame], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap,
        maxWidth: 980,
        opacity: exitOpacity,
      }}
    >
      {words.map((word, index) => {
        const delay = index * 5;
        const wordSpring = spring({
          frame: Math.max(0, localFrame - delay),
          fps,
          config: {
            damping: 16,
            stiffness: 130,
          },
        });

        const pulse = 1 + Math.sin(frame * 0.12) * 0.04;

        return (
          <span
            key={`${word}-${index}`}
            style={{
              fontSize,
              fontWeight: 700,
              color,
              transform: `translateY(${(1 - wordSpring) * 40}px) scale(${wordSpring * pulse})`,
              opacity: wordSpring,
              display: 'inline-block',
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
