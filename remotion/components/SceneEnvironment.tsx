  import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';

type SceneEnvironmentProps = {
  environment: string;
  duration?: number;
  sceneIndex?: number;
};

export const SceneEnvironment: React.FC<SceneEnvironmentProps> = ({
  environment,
  sceneIndex = 0,
}) => {
  const frame = useCurrentFrame();

  const drift = Math.sin(frame / 40 + sceneIndex) * 24;
  const slowDrift = Math.sin(frame / 70 + sceneIndex) * 40;
  const zoom = 1 + frame * 0.00025;
  const pulse = 0.45 + Math.sin(frame / 12) * 0.15;

  const baseOverlay = (
    <AbsoluteFill
      style={{
        backgroundImage:
          'linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)',
        backgroundSize: '54px 54px',
        opacity: 0.5,
      }}
    />
  );

  switch (environment) {
    case 'satellite':
      return (
        <AbsoluteFill style={{background: '#000814', overflow: 'hidden'}}>
          <AbsoluteFill
            style={{
              background:
                'radial-gradient(circle at 50% 82%, rgba(30,64,175,0.9) 0%, rgba(15,23,42,0.75) 22%, transparent 38%)',
              transform: `scale(${zoom}) translateX(${drift}px)`,
            }}
          />
          {baseOverlay}
          <div
            style={{
              position: 'absolute',
              top: 180,
              left: 140 + slowDrift,
              width: 220,
              height: 2,
              background: 'rgba(56,189,248,0.7)',
              boxShadow: '0 0 22px rgba(56,189,248,0.7)',
              transform: 'rotate(-18deg)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 420,
              right: 120,
              color: 'rgba(56,189,248,0.7)',
              fontSize: 22,
              letterSpacing: 4,
            }}
          >
            ORBITAL FEED
          </div>
        </AbsoluteFill>
      );

    case 'ai-face':
      return (
        <AbsoluteFill style={{background: '#020617', overflow: 'hidden'}}>
          <AbsoluteFill
            style={{
              background:
                'radial-gradient(circle at 45% 40%, rgba(239,68,68,0.32), transparent 28%), radial-gradient(circle at 65% 55%, rgba(56,189,248,0.25), transparent 36%)',
              transform: `scale(${zoom}) translateX(${drift}px)`,
            }}
          />
          {baseOverlay}
          <div
            style={{
              position: 'absolute',
              left: 180,
              top: 430,
              width: 370,
              height: 520,
              borderRadius: '50%',
              border: '2px solid rgba(56,189,248,0.45)',
              boxShadow: '0 0 42px rgba(56,189,248,0.25)',
              transform: `translateX(${slowDrift}px)`,
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 460,
              top: 580,
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: `rgba(239,68,68,${pulse})`,
              boxShadow: '0 0 40px rgba(239,68,68,0.8)',
            }}
          />
        </AbsoluteFill>
      );

    case 'tactical-map':
      return (
        <AbsoluteFill style={{background: '#03111f', overflow: 'hidden'}}>
          {baseOverlay}
          <div
            style={{
              position: 'absolute',
              top: 360,
              left: 190,
              width: 700,
              height: 700,
              borderRadius: '50%',
              border: '2px solid rgba(56,189,248,0.35)',
              transform: `rotate(${frame * 0.6}deg)`,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 710,
              left: 500,
              width: 24,
              height: 24,
              borderRadius: '50%',
              background: 'rgba(239,68,68,0.9)',
              boxShadow: '0 0 30px rgba(239,68,68,0.9)',
            }}
          />
        </AbsoluteFill>
      );

    case 'data-center':
      return (
        <AbsoluteFill style={{background: '#020617', overflow: 'hidden'}}>
          <AbsoluteFill
            style={{
              background:
                'repeating-linear-gradient(90deg, rgba(15,23,42,1) 0px, rgba(15,23,42,1) 70px, rgba(56,189,248,0.12) 72px, rgba(2,6,23,1) 130px)',
              transform: `scale(${zoom}) translateY(${Math.sin(frame / 40) * 30}px)`,
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.65) 75%)',
            }}
          />
        </AbsoluteFill>
      );

    case 'drone-vision':
      return (
        <AbsoluteFill style={{background: '#07111f', overflow: 'hidden'}}>
          {baseOverlay}
          {[0, 1, 2, 3, 4].map((item) => (
            <div
              key={item}
              style={{
                position: 'absolute',
                left: 150 + item * 150 + Math.sin(frame / 30 + item) * 20,
                top: 420 + item * 120,
                width: 120,
                height: 90,
                border: '2px solid rgba(239,68,68,0.7)',
                boxShadow: '0 0 24px rgba(239,68,68,0.35)',
              }}
            />
          ))}
          <div
            style={{
              position: 'absolute',
              top: 860,
              left: 390,
              width: 300,
              height: 300,
              borderRadius: '50%',
              border: '2px solid rgba(56,189,248,0.55)',
            }}
          />
        </AbsoluteFill>
      );

    case 'kill-chain':
      return (
        <AbsoluteFill style={{background: '#020617', overflow: 'hidden'}}>
          {baseOverlay}
          <div
            style={{
              position: 'absolute',
              left: 535,
              top: 260,
              width: 8,
              height: 1300,
              background:
                'linear-gradient(to bottom, transparent, rgba(56,189,248,0.9), rgba(239,68,68,0.9), transparent)',
              transform: `translateY(${Math.sin(frame / 35) * 80}px)`,
              boxShadow: '0 0 32px rgba(56,189,248,0.7)',
            }}
          />
        </AbsoluteFill>
      );

    case 'command-modules':
      return (
        <AbsoluteFill style={{background: '#030712', overflow: 'hidden'}}>
          {['DETECTAR', 'DECIDIR', 'ATACAR'].map((label, index) => (
            <div
              key={label}
              style={{
                position: 'absolute',
                left: 190,
                top: 430 + index * 260,
                width: 700,
                height: 150,
                border: '2px solid rgba(56,189,248,0.4)',
                borderRadius: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: index === Math.floor(frame / 30) % 3 ? '#ef4444' : '#38bdf8',
                fontSize: 38,
                fontWeight: 800,
                letterSpacing: 6,
                boxShadow: '0 0 30px rgba(56,189,248,0.22)',
              }}
            >
              {label}
            </div>
          ))}
        </AbsoluteFill>
      );

    case 'human-loop':
      return (
        <AbsoluteFill style={{background: '#01040a', overflow: 'hidden'}}>
          <AbsoluteFill
            style={{
              background:
                'radial-gradient(circle at 50% 35%, rgba(56,189,248,0.22), transparent 35%), radial-gradient(circle at 50% 90%, rgba(0,0,0,1), transparent 40%)',
              transform: `scale(${zoom})`,
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 390,
              bottom: 390,
              width: 300,
              height: 520,
              borderRadius: '45% 45% 20% 20%',
              background: 'rgba(0,0,0,0.82)',
              boxShadow: '0 0 60px rgba(56,189,248,0.18)',
            }}
          />
        </AbsoluteFill>
      );

    case 'critical-confirmation':
      return (
        <AbsoluteFill style={{background: '#120506', overflow: 'hidden'}}>
          {baseOverlay}
          <div
            style={{
              position: 'absolute',
              top: 430,
              left: 140,
              width: 800,
              height: 900,
              border: '3px solid rgba(239,68,68,0.7)',
              borderRadius: 28,
              boxShadow: '0 0 55px rgba(239,68,68,0.35)',
              transform: `translateX(${Math.sin(frame) * 6}px)`,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 510,
              left: 0,
              width: '100%',
              textAlign: 'center',
              color: '#ef4444',
              fontSize: 96,
              fontWeight: 900,
              opacity: 0.25,
            }}
          >
            {String(5 - (Math.floor(frame / 24) % 5)).padStart(2, '0')}
          </div>
        </AbsoluteFill>
      );

    case 'algorithmic-faith':
      return (
        <AbsoluteFill style={{background: '#020617', overflow: 'hidden'}}>
          {baseOverlay}
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: 100 + ((i * 137) % 820),
                top: 250 + ((i * 211) % 1300),
                width: 18,
                height: 18,
                borderRadius: '50%',
                background: 'rgba(56,189,248,0.75)',
                boxShadow: '0 0 24px rgba(56,189,248,0.8)',
                transform: `scale(${1 + Math.sin(frame / 15 + i) * 0.4})`,
              }}
            />
          ))}
        </AbsoluteFill>
      );

    case 'tragic-glitch':
      return (
        <AbsoluteFill style={{background: '#050000', overflow: 'hidden'}}>
          <AbsoluteFill
            style={{
              background:
                'radial-gradient(circle at center, rgba(239,68,68,0.55), rgba(2,6,23,0.9) 52%, #000 100%)',
              transform: `translateX(${Math.sin(frame) * 12}px)`,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 720,
              left: 270,
              width: 540,
              height: 300,
              border: '4px solid rgba(239,68,68,0.9)',
              boxShadow: '0 0 50px rgba(239,68,68,0.5)',
            }}
          />
        </AbsoluteFill>
      );

    case 'judgement-room':
      return (
        <AbsoluteFill style={{background: '#030303', overflow: 'hidden'}}>
          <AbsoluteFill
            style={{
              background:
                'radial-gradient(circle at 50% 45%, rgba(56,189,248,0.14), transparent 32%), linear-gradient(#030303, #0f172a)',
              transform: `scale(${zoom})`,
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 420,
              left: 120,
              width: 840,
              height: 120,
              background: 'rgba(15,23,42,0.85)',
              borderTop: '2px solid rgba(56,189,248,0.28)',
            }}
          />
        </AbsoluteFill>
      );

    case 'global-battle':
      return (
        <AbsoluteFill style={{background: '#020617', overflow: 'hidden'}}>
          {baseOverlay}
          <AbsoluteFill
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(56,189,248,0.25), transparent 35%), radial-gradient(circle at 70% 70%, rgba(239,68,68,0.25), transparent 25%)',
              transform: `scale(${1 + frame * 0.00045})`,
            }}
          />
        </AbsoluteFill>
      );

    default:
      return (
        <AbsoluteFill
          style={{
            background: 'linear-gradient(180deg, #020617, #0f172a, #000)',
            transform: `scale(${zoom})`,
          }}
        />
      );
  }
};
