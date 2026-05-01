import React from 'react';
import {AbsoluteFill, Img, staticFile, useCurrentFrame} from 'remotion';

export type EnvironmentType =
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

const backgroundAssets: Record<EnvironmentType, string> = {
  satellite: 'backgrounds/01-satellite.png',
  'ai-face': 'backgrounds/02-ai-face.png',
  'tactical-map': 'backgrounds/03-tactical-map.png',
  'data-center': 'backgrounds/04-data-center.png',
  'drone-vision': 'backgrounds/05-drone-vision.png',
  'kill-chain': 'backgrounds/06-kill-chain.png',
  'command-modules': 'backgrounds/07-command-modules.png',
  'human-loop': 'backgrounds/08-human-loop.png',
  'critical-confirmation': 'backgrounds/09-critical-confirmation.png',
  'algorithmic-faith': 'backgrounds/10-algorithmic-faith.png',
  'tragic-glitch': 'backgrounds/11-tragic-glitch.png',
  'judgement-room': 'backgrounds/12-judgement-room.png',
  'global-battle': 'backgrounds/13-global-battle.png',
};

const fallbackBackground = (environment: EnvironmentType) => {
  const label = environment.toUpperCase();
  const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' width='1080' height='1920' viewBox='0 0 1080 1920'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='0' y2='1'>
        <stop offset='0%' stop-color='#020617'/>
        <stop offset='55%' stop-color='#0b1a2d'/>
        <stop offset='100%' stop-color='#000000'/>
      </linearGradient>
    </defs>
    <rect width='1080' height='1920' fill='url(#g)'/>
    <circle cx='760' cy='420' r='260' fill='rgba(56,189,248,0.12)'/>
    <circle cx='260' cy='1260' r='220' fill='rgba(220,38,38,0.10)'/>
    <text x='540' y='1010' fill='#9fbad6' opacity='0.36' font-size='72' text-anchor='middle' font-family='Arial'>${label}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

type SceneEnvironmentProps = {
  environment: EnvironmentType;
  sceneIndex?: number;
};

export const SceneEnvironment: React.FC<SceneEnvironmentProps> = ({environment, sceneIndex = 0}) => {
  const frame = useCurrentFrame();

  const zoom = 1 + frame * 0.00024;
  const driftX = Math.sin(frame / 50 + sceneIndex) * 16;
  const driftY = Math.cos(frame / 80 + sceneIndex * 0.4) * 9;

  return (
    <AbsoluteFill style={{backgroundColor: '#000', overflow: 'hidden'}}>
      <Img
        src={staticFile(backgroundAssets[environment])}
        fallbackSrc={fallbackBackground(environment)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `scale(${zoom}) translate(${driftX}px, ${driftY}px)`,
          filter: 'contrast(1.12) saturate(0.84) brightness(0.72)',
        }}
      />

      <AbsoluteFill
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.22) 44%, rgba(0,0,0,0.88) 100%)',
        }}
      />
    </AbsoluteFill>
  );
};
