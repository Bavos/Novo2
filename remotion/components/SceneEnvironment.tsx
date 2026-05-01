import React from 'react';
import {AbsoluteFill, Img, useCurrentFrame} from 'remotion';

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

const backgrounds: Record<EnvironmentType, string> = {
  satellite: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1080&q=80',
  'ai-face': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1080&q=80',
  'tactical-map': 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1080&q=80',
  'data-center': 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1080&q=80',
  'drone-vision': 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1080&q=80',
  'kill-chain': 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1080&q=80',
  'command-modules': 'https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=1080&q=80',
  'human-loop': 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1080&q=80',
  'critical-confirmation': 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1080&q=80',
  'algorithmic-faith': 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1080&q=80',
  'tragic-glitch': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1080&q=80',
  'judgement-room': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1080&q=80',
  'global-battle': 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1080&q=80',
};

type SceneEnvironmentProps = {
  environment: EnvironmentType;
  sceneIndex?: number;
};

export const SceneEnvironment: React.FC<SceneEnvironmentProps> = ({
  environment,
  sceneIndex = 0,
}) => {
  const frame = useCurrentFrame();
  const zoom = 1 + frame * 0.00025;
  const drift = Math.sin(frame / 50 + sceneIndex) * 16;

  return (
    <AbsoluteFill style={{backgroundColor: '#000', overflow: 'hidden'}}>
      <Img
        src={backgrounds[environment]}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `scale(${zoom}) translateX(${drift}px)`,
        }}
      />

      <AbsoluteFill
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.62), rgba(0,0,0,0.18), rgba(0,0,0,0.84))',
        }}
      />
    </AbsoluteFill>
  );
};
