import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {theme} from '../styles/theme';

type EnvironmentType =
  | 'satellite'
  | 'ai-face'
  | 'tactical-map'
  | 'data-center'
  | 'drone-vision'
  | 'kill-chain'
  | 'command-modules'
  | 'human-loop'
  | 'critical-confirmation'
  | 'algorithmic-faith'
  | 'tragic-glitch'
  | 'judgement-room'
  | 'global-battle';

type SceneEnvironmentProps = {
  environment: EnvironmentType;
  sceneDuration: number;
};

const baseStyle: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  overflow: 'hidden'
};

export const SceneEnvironment: React.FC<SceneEnvironmentProps> = ({environment, sceneDuration}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, sceneDuration], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp'
  });

  const driftX = Math.sin(frame / 40) * 16;
  const driftY = Math.cos(frame / 52) * 12;

  const backgrounds: Record<EnvironmentType, string> = {
    satellite: 'radial-gradient(circle at 50% 65%, #152538 0%, #04070C 60%)',
    'ai-face': 'radial-gradient(circle at 50% 45%, #1A2236 0%, #090D15 58%, #04070C 100%)',
    'tactical-map': 'radial-gradient(circle at 50% 50%, #0D1A2C 0%, #04070C 75%)',
    'data-center': 'radial-gradient(circle at 50% 50%, #101A2A 0%, #060A12 72%, #04070C 100%)',
    'drone-vision': 'radial-gradient(circle at 50% 60%, #102131 0%, #050A10 68%, #04070C 100%)',
    'kill-chain': 'linear-gradient(120deg, #090D16 0%, #1A1C26 45%, #090D16 100%)',
    'command-modules': 'radial-gradient(circle at 50% 50%, #0B1524 0%, #050A11 78%)',
    'human-loop': 'radial-gradient(circle at 50% 55%, #131A24 0%, #05070C 75%)',
    'critical-confirmation': 'radial-gradient(circle at 50% 50%, #1B0F14 0%, #0A0A12 72%)',
    'algorithmic-faith': 'radial-gradient(circle at 50% 50%, #111827 0%, #06070F 75%)',
    'tragic-glitch': 'radial-gradient(circle at 50% 50%, #240D14 0%, #09080D 72%)',
    'judgement-room': 'linear-gradient(160deg, #090B10 0%, #12151C 45%, #090B10 100%)',
    'global-battle': 'radial-gradient(circle at 50% 45%, #102435 0%, #050B12 74%)'
  };

  return (
    <AbsoluteFill style={{...baseStyle, background: backgrounds[environment]}}>
      <div
        style={{
          ...baseStyle,
          opacity: 0.25,
          backgroundImage:
            'linear-gradient(rgba(78,168,222,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(78,168,222,0.16) 1px, transparent 1px)',
          backgroundSize: '90px 90px',
          transform: `translate(${driftX}px, ${driftY}px) scale(${1.04 + progress * 0.03})`
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: '-10%',
          borderRadius: '50%',
          border: '1px solid rgba(78,168,222,0.14)',
          transform: `scale(${1 + Math.sin(frame / 20) * 0.01})`
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(130deg, rgba(4,7,12,0.82), rgba(4,7,12,0.2), rgba(4,7,12,0.84))'
        }}
      />

      {environment === 'satellite' && (
        <>
          <div style={{position: 'absolute', width: 420, height: 420, borderRadius: '50%', right: '-5%', bottom: '-10%', background: 'radial-gradient(circle, #2F4F74 0%, #0C1624 70%)', opacity: 0.45}} />
          <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(180deg, rgba(78,168,222,0.18), rgba(78,168,222,0.18) 2px, transparent 6px, transparent 14px)', opacity: 0.35, transform: `translateY(${frame % 20}px)`}} />
        </>
      )}

      {environment === 'kill-chain' && (
        <div style={{position: 'absolute', left: '10%', right: '10%', top: '50%', height: 3, background: 'rgba(215,38,61,0.5)'}} />
      )}

      {environment === 'tragic-glitch' && (
        <div style={{position: 'absolute', inset: 0, mixBlendMode: 'screen', opacity: 0.35, background: 'repeating-linear-gradient(0deg, rgba(215,38,61,0.2) 0px, rgba(215,38,61,0.2) 3px, transparent 4px, transparent 8px)', transform: `translateX(${Math.sin(frame * 3) * 12}px)`}} />
      )}

      {environment === 'global-battle' && (
        <div style={{position: 'absolute', inset: '12% 8%', border: '1px solid rgba(78,168,222,0.35)', borderRadius: 24, boxShadow: '0 0 40px rgba(78,168,222,0.2) inset'}} />
      )}

      <div
        style={{
          position: 'absolute',
          inset: 0,
          color: theme.colors.textSecondary,
          opacity: 0.16,
          fontFamily: 'monospace',
          fontSize: 14,
          letterSpacing: '0.18em',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '7%'
        }}
      >
        <span>OPS-LINK</span>
        <span>T+{Math.floor(frame / 30).toString().padStart(3, '0')}</span>
      </div>
    </AbsoluteFill>
  );
};
