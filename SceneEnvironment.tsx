import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from 'remotion';

type Props = {
  environment: string;
  duration?: number;
  sceneIndex?: number;
};

export const SceneEnvironment: React.FC<Props> = ({
  environment,
  duration,
  sceneIndex = 0,
}) => {
  const frame = useCurrentFrame();

  // 🔥 GARANTE número válido SEMPRE
  const safeDuration =
    typeof duration === 'number' && !isNaN(duration)
      ? duration
      : 90;

  // 🔥 SEMPRE números válidos
  const progress = interpolate(
    frame,
    [0, safeDuration],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  const drift = Math.sin(frame / 40 + sceneIndex) * 20;

  switch (environment) {
    case 'satellite':
      return (
        <AbsoluteFill
          style={{
            background:
              'radial-gradient(circle at 50% 80%, #0f172a 0%, #020617 50%, #000)',
            transform: `scale(${1 + progress * 0.05}) translateX(${drift}px)`,
          }}
        />
      );

    case 'ai-face':
      return (
        <AbsoluteFill
          style={{
            background:
              'radial-gradient(circle at 50% 40%, rgba(239,68,68,0.35), transparent 40%), linear-gradient(#020617, #111827)',
            transform: `scale(${1 + progress * 0.04})`,
          }}
        />
      );

    case 'tactical-map':
      return (
        <AbsoluteFill
          style={{
            background:
              'linear-gradient(135deg, #020617, #0f172a)',
            transform: `translateY(${-progress * 100}px)`,
          }}
        />
      );

    case 'data-center':
      return (
        <AbsoluteFill
          style={{
            background:
              'repeating-linear-gradient(90deg, #020617 0px, #020617 80px, #0f172a 82px)',
            transform: `scale(${1 + progress * 0.06})`,
          }}
        />
      );

    case 'drone-vision':
      return (
        <AbsoluteFill
          style={{
            background:
              'linear-gradient(#020617, #111827)',
            transform: `translateX(${-progress * 80}px)`,
          }}
        />
      );

    case 'tragic-glitch':
      return (
        <AbsoluteFill
          style={{
            background:
              'radial-gradient(circle, rgba(239,68,68,0.5), #020617 60%, #000)',
            transform: `translateX(${Math.sin(frame) * 10}px)`,
          }}
        />
      );

    default:
      return (
        <AbsoluteFill
          style={{
            background:
              'linear-gradient(#020617, #0f172a, #000)',
            transform: `scale(${1 + progress * 0.03})`,
          }}
        />
      );
  }
};
