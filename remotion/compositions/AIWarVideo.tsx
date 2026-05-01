import React from 'react';
import {AbsoluteFill, Sequence, useCurrentFrame} from 'remotion';
import {GlitchOverlay} from '../components/GlitchOverlay';
import {EnvironmentType, SceneEnvironment} from '../components/SceneEnvironment';
import {SceneText} from '../components/SceneText';

type Scene = {
  text: string;
  duration: number;
  environment: EnvironmentType;
};

const scenes: Scene[] = [
  {text: 'A guerra mudou.', duration: 104, environment: 'satellite'},
  {text: 'A IA entrou no comando.', duration: 104, environment: 'ai-face'},
  {text: 'Dados de drones, satélites e radares.', duration: 104, environment: 'tactical-map'},
  {text: 'Tudo é processado em tempo real.', duration: 104, environment: 'data-center'},
  {text: 'Alvos são classificados automaticamente.', duration: 104, environment: 'drone-vision'},
  {text: 'A kill chain foi comprimida.', duration: 104, environment: 'kill-chain'},
  {text: 'Detectar. Decidir. Atacar.', duration: 104, environment: 'command-modules'},
  {text: 'O humano ainda aparece no loop.', duration: 104, environment: 'human-loop'},
  {text: 'Mas só tem segundos para validar.', duration: 104, environment: 'critical-confirmation'},
  {text: 'A confiança vira fé algorítmica.', duration: 104, environment: 'algorithmic-faith'},
  {text: 'Erros podem virar tragédias.', duration: 104, environment: 'tragic-glitch'},
  {text: 'Quem responde pela decisão?', duration: 104, environment: 'judgement-room'},
  {text: 'A guerra agora segue o ritmo dos algoritmos.', duration: 102, environment: 'global-battle'},
];

const sceneOpacity = (localFrame: number, sceneDuration: number) => {
  const fadeInFrames = 10;
  const fadeOutFrames = 10;

  const inOpacity = clamp(localFrame / fadeInFrames, 0, 1);
  const outOpacity = clamp((sceneDuration - localFrame) / fadeOutFrames, 0, 1);
  return Math.min(inOpacity, outOpacity);
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export const AIWarVideo: React.FC = () => {
  const frame = useCurrentFrame();

  let cursor = 0;

  return (
    <AbsoluteFill style={{backgroundColor: '#000'}}>
      {scenes.map((scene, index) => {
        const from = cursor;
        cursor += scene.duration;

        const localFrame = frame - from;

        return (
          <Sequence key={`${scene.environment}-${index}`} from={from} durationInFrames={scene.duration}>
            <AbsoluteFill style={{opacity: sceneOpacity(localFrame, scene.duration)}}>
              <SceneEnvironment environment={scene.environment} sceneIndex={index} />

              <AbsoluteFill
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingLeft: '10%',
                  paddingRight: '10%',
                }}
              >
                <SceneText text={scene.text} accent={index === 10 || index === 11} />
              </AbsoluteFill>
            </AbsoluteFill>
          </Sequence>
        );
      })}

      <GlitchOverlay />
    </AbsoluteFill>
  );
};
