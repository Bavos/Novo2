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

type SceneEnvironmentProps = {
  environment: EnvironmentType;
  sceneIndex?: number;
};

export const SceneEnvironment: React.FC<SceneEnvironmentProps> = ({environment, sceneIndex = 0}) => {
  const frame = useCurrentFrame();

  const zoom = 1 + frame * 0.00022;
  const driftX = Math.sin(frame / 55 + sceneIndex) * 14;
  const driftY = Math.cos(frame / 80 + sceneIndex * 0.3) * 8;

  return (
    <AbsoluteFill style={{backgroundColor: '#000', overflow: 'hidden'}}>
      <Img
        src={staticFile(backgroundAssets[environment])}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `scale(${zoom}) translate(${driftX}px, ${driftY}px)`,
          filter: 'contrast(1.08) saturate(0.88) brightness(0.7)',
        }}
      />

      <AbsoluteFill
        style={{
          background:
            'linear-gradient(180deg, rgba(2,8,20,0.62) 0%, rgba(2,8,20,0.22) 45%, rgba(0,0,0,0.86) 100%)',
        }}
      />

      <AbsoluteFill
        style={{
          background:
            'radial-gradient(circle at 50% 45%, rgba(59,130,246,0.06), rgba(0,0,0,0) 48%), radial-gradient(circle at 76% 20%, rgba(220,38,38,0.08), rgba(0,0,0,0) 35%)',
          mixBlendMode: 'screen',
        }}
      />
    </AbsoluteFill>
  );
};
