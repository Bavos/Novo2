import {theme} from '../styles/theme';
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

const getOpacity = (localFrame: number, duration: number) => {
  const fadeIn = Math.min(1, localFrame / 10);
  const fadeOut = Math.min(1, Math.max(0, (duration - localFrame) / 10));
  return Math.max(0, Math.min(fadeIn, fadeOut));
};

export const AIWarVideo: React.FC = () => {
  const frame = useCurrentFrame();

  let cursor = 0;

  return (
    <AbsoluteFill style={{backgroundColor: theme.colors.background}}>
      {scenes.map((scene, index) => {
        const from = cursor;
        cursor += scene.duration;

        const localFrame = frame - from;
        const opacity = getOpacity(localFrame, scene.duration);

        return (
          <Sequence key={scene.text} from={from} durationInFrames={scene.duration}>
            <AbsoluteFill style={{opacity}}>
              <SceneEnvironment environment={scene.environment} sceneIndex={index} />
              <AbsoluteFill
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 10%',
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
