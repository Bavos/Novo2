import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';

type Props = {
  environment: string;
  duration?: number;
  sceneIndex?: number;
};

export const SceneEnvironment: React.FC<Props> = ({
  environment,
  sceneIndex = 0,
}) => {
  const frame = useCurrentFrame();

  const drift = Math.sin(frame / 40 + sceneIndex) * 20;
  const zoom = 1 + frame * 0.0003;

  switch (environment) {
    case 'satellite':
      return (
        <AbsoluteFill
          style={{
            background:
              'radial-gradient(circle at 50% 80%, #0f172a 0%, #020617 50%, #000 100%)',
            transform: `scale(${zoom}) translateX(${drift}px)`,
          }}
        />
      );

    case 'ai-face':
      return (
        <AbsoluteFill
          style={{
            background:
              'radial-gradient(circle at 50% 40%, rgba(239,68,68,0.35), transparent 40%), linear-gradient(180deg, #020617, #111827)',
            transform: `scale(${zoom})`,
          }}
        />
      );

    case 'tactical-map':
      return (
        <AbsoluteFill
          style={{
            background:
              'linear-gradient(135deg, #020617, #0f172a, #00111f)',
            transform: `translateY(${Math.sin(frame / 50) * 40}px)`,
          }}
        />
      );

    case 'data-center':
      return (
        <AbsoluteFill
          style={{
            background:
              'repeating-linear-gradient(90deg, #020617 0px, #020617 80px, #0f172a 82px, #0f172a 120px)',
            transform: `scale(${zoom})`,
          }}
        />
      );

    case 'drone-vision':
      return (
        <AbsoluteFill
          style={{
            background:
              'linear-gradient(180deg, #020617, #111827)',
            transform: `translateX(${Math.sin(frame / 35) * 50}px)`,
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
            transform: `scale(${zoom})`,
          }}
        />
      );
  }
};
