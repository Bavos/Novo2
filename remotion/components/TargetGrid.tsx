import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../styles/theme';

export const TargetGrid: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  const targets = new Array(5).fill(null).map((_, i) => {
    const oscillation = Math.sin((frame + i * 30) / 14);
    const blink = (Math.floor((frame + i * 7) / 8) % 2) * 0.35 + 0.25;
    const size = 90 + i * 22;

    return {
      left: width * (0.2 + (i * 0.14 + (oscillation + 1) * 0.03) % 0.62),
      top: height * (0.18 + ((i * 0.17 + frame / 320) % 0.56)),
      opacity: blink
    };
  });

  return (
    <AbsoluteFill style={{pointerEvents: 'none'}}>
      {targets.map((target, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: `${90 + i * 22}px`,
            height: `${90 + i * 22}px`,
            left: target.left,
            top: target.top,
            border: `2px solid ${theme.colors.blue}`,
            opacity: target.opacity,
            boxShadow: '0 0 14px rgba(78,168,222,0.45)',
            transform: `translate(-50%, -50%) rotate(${(frame + i * 5) * 0.35}deg)`
          }}
        />
      ))}
    </AbsoluteFill>
  );
};
