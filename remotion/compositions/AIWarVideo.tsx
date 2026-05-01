import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  useCurrentFrame,
  useVideoConfig
} from 'remotion';
import {GlitchOverlay} from '../components/GlitchOverlay';
import {HudBackground} from '../components/HudBackground';
import {SceneEnvironment} from '../components/SceneEnvironment';
import {SceneText} from '../components/SceneText';
import {TargetGrid} from '../components/TargetGrid';
import {theme} from '../styles/theme';

const scenes = [
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
  {
    text: 'A guerra agora segue o ritmo dos algoritmos.',
    duration: 90,
    environment: 'global-battle'
  }
] as const;

export const AIWarVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();
  const isVertical = height > width;

  const cameraDrift = Math.sin(frame / 55) * 10;
  const globalZoom = 1 + interpolate(frame, [0, 1349], [0, 0.06]);

  let cursor = 0;

  return (
    <AbsoluteFill style={{backgroundColor: theme.colors.background}}>
      {scenes.map((scene, index) => {
        const from = cursor;
        cursor += scene.duration;
        return (
          <Sequence key={scene.text} from={from} durationInFrames={scene.duration}>
            <AbsoluteFill
              style={{
                opacity: interpolate(
                  frame - from,
                  [0, 8, scene.duration - 10, scene.duration - 1],
                  [0, 1, 1, 0],
                  {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
                )
              }}
            >
              <SceneEnvironment environment={scene.environment} sceneDuration={scene.duration} />
              <HudBackground />
              <TargetGrid />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: `translateX(${cameraDrift}px) scale(${globalZoom})`,
                  padding: isVertical ? '0 10%' : '0 20%',
                  minHeight: isVertical ? '50%' : 'auto'
                }}
              >
                <SceneText text={scene.text} accent={index === 10 || index === 11} />
              </div>
            </AbsoluteFill>
          </Sequence>
        );
      })}
      <GlitchOverlay />
    </AbsoluteFill>
  );
};
