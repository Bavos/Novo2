import React from 'react';
import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {SceneEnvironment, type EnvironmentType} from '../components/SceneEnvironment';
import {SceneText} from '../components/SceneText';

type Scene = {
  text: string;
  duration: number;
  environment: EnvironmentType;
};

const scenes: Scene[] = [
  {text: 'A guerra mudou.', duration: 90, environment: 'satellite'},
  {text: 'A IA entrou no comando.', duration: 90, environment: 'ai-face'},
  {text: 'Dados de drones, satélites e radares.', duration: 90, environment: 'tactical-map'},
  {text: 'Tudo é processado em tempo real.', duration: 90, environment: 'data-center'},
  {text: 'Alvos são classificados automaticamente.', duration: 90, environment: 'drone-vision'},
  {text: 'A kill chain foi comprimida.', duration: 90, environment: 'kill-chain'},
  {text: 'Detectar. Decidir. Atacar.', duration: 120, environment: 'command-modules'},
  {text: 'O humano ainda aparece no loop.', duration: 120, environment: 'human-loop'},
  {text: 'Mas só tem segundos para validar.', duration: 120, environment: 'critical-confirmation'},
  {text: 'A confiança vira fé algorítmica.', duration: 120, environment: 'algorithmic-faith'},
  {text: 'Erros podem virar tragédias.', duration: 120, environment: 'tragic-glitch'},
  {text: 'Quem responde pela decisão?', duration: 120, environment: 'judgement-room'},
  {text: 'A guerra agora segue o ritmo dos algoritmos.', duration: 90, environment: 'global-battle'}
];

export const AIWarVideo: React.FC = () => {
  const frame = useCurrentFrame();

  let cursor = 0;

  return (
    <AbsoluteFill>
      {scenes.map((scene) => {
        const from = cursor;
        cursor += scene.duration;
        const localFrame = frame - from;
        const fadeOpacity = interpolate(
          localFrame,
          [0, 12, scene.duration - 12, scene.duration],
          [0, 1, 1, 0],
          {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
        );

        return (
          <Sequence key={`${scene.environment}-${from}`} from={from} durationInFrames={scene.duration}>
            <AbsoluteFill style={{opacity: fadeOpacity}}>
              <SceneEnvironment environment={scene.environment} sceneDuration={scene.duration} />
              <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', padding: '0 9%'}}>
                <SceneText text={scene.text} />
              </AbsoluteFill>
            </AbsoluteFill>
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
