import React from 'react';
import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {GlitchOverlay} from '../components/GlitchOverlay';
import {HudBackground} from '../components/HudBackground';
import {SceneText} from '../components/SceneText';
import {TargetGrid} from '../components/TargetGrid';
import {theme} from '../styles/theme';

const scenes = [
  {text: 'A guerra mudou.', duration: 90},
  {text: 'A IA entrou no comando.', duration: 90},
  {text: 'Dados de drones, satélites e radares.', duration: 90},
  {text: 'Tudo é processado em tempo real.', duration: 90},
  {text: 'Alvos são classificados automaticamente.', duration: 90},
  {text: 'A kill chain foi comprimida.', duration: 90},
  {text: 'Detectar. Decidir. Atacar.', duration: 120},
  {text: 'O humano ainda aparece no loop.', duration: 120},
  {text: 'Mas só tem segundos para validar.', duration: 120},
  {text: 'A confiança vira fé algorítmica.', duration: 120},
  {text: 'Erros podem virar tragédias.', duration: 120},
  {text: 'Quem responde pela decisão?', duration: 120},
  {text: 'A guerra agora segue o ritmo dos algoritmos.', duration: 90}
];

export const AIWarVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const cameraDrift = Math.sin(frame / 55) * 10;
  const globalZoom = 1 + interpolate(frame, [0, 1349], [0, 0.06]);

  let cursor = 0;

  return (
    <AbsoluteFill style={{backgroundColor: theme.colors.background}}>
      <HudBackground />
      <TargetGrid />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: `0 ${theme.safe.horizontalPadding}`,
          transform: `translateX(${cameraDrift}px) scale(${globalZoom})`
        }}
      >
        {scenes.map((scene, index) => {
          const from = cursor;
          cursor += scene.duration;
          return (
            <Sequence key={scene.text} from={from} durationInFrames={scene.duration}>
              <AbsoluteFill
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  opacity: interpolate(
                    frame - from,
                    [0, 8, scene.duration - 10, scene.duration - 1],
                    [0, 1, 1, 0],
                    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
                  )
                }}
              >
                <SceneText text={scene.text} accent={index === 10 || index === 11} />
              </AbsoluteFill>
            </Sequence>
          );
        })}
      </div>
      <GlitchOverlay />
    </AbsoluteFill>
  );
};
