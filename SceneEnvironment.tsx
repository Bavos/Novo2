import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

type SceneEnvironmentProps = {
  environment: string;
  duration: number;
  sceneIndex: number;
};

export const SceneEnvironment: React.FC<SceneEnvironmentProps> = ({
  environment,
  duration,
  sceneIndex,
}) => {
  const frame = useCurrentFrame();

  const safeDuration = Number.isFinite(duration) ? duration : 90;

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
              'radial-gradient(circle at 50% 80%, #0f172a 0%, #020617 45%, #000 100%)',
            transform: `scale(${1 + progress * 0.05}) translateX(${drift}px)`,
          }}
        />
      );

    case 'ai-face':
      return (
        <AbsoluteFill
          style={{
            background:
              'radial-gradient(circle at 50% 45%, rgba(239,68,68,0.35), transparent 30%), linear-gradient(180deg, #020617, #111827)',
            transform: `scale(${1 + progress * 0.04})`,
          }}
        />
      );

    case 'tactical-map':
      return (
        <AbsoluteFill
          style={{
            background:
              'linear-gradient(135deg, #020617, #0f172a 45%, #00111f)',
            transform: `translateY(${-progress * 80}px)`,
          }}
        />
      );

    case 'data-center':
      return (
        <AbsoluteFill
          style={{
            background:
              'repeating-linear-gradient(90deg, #020617 0px, #020617 80px, #0f172a 82px, #0f172a 120px)',
            transform: `scale(${1 + progress * 0.06})`,
          }}
        />
      );

    case 'drone-vision':
      return (
        <AbsoluteFill
          style={{
            background:
              'linear-gradient(180deg, #020617, #111827)',
            transform: `translateX(${-progress * 80}px)`,
          }}
        />
      );

    case 'tragic-glitch':
      return (
        <AbsoluteFill
          style={{
            background:
              'radial-gradient(circle, rgba(239,68,68,0.45), #020617 55%, #000)',
            transform: `translateX(${Math.sin(frame) * 8}px)`,
          }}
        />
      );

    default:
      return (
        <AbsoluteFill
          style={{
            background:
              'linear-gradient(180deg, #020617, #0f172a, #000)',
            transform: `scale(${1 + progress * 0.03})`,
          }}
        />
      );
  }
};
