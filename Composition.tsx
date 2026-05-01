import React from 'react';
import {AbsoluteFill, Composition, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {AnimatedText} from './components/AnimatedText';
import {WordStagger} from './components/WordStagger';

const WIDTH = 1080;
const HEIGHT = 1920;
const FPS = 30;
const DURATION = 900;

const SceneContainer: React.FC<{children: React.ReactNode}> = ({children}) => (
  <AbsoluteFill
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 70px',
    }}
  >
    {children}
  </AbsoluteFill>
);

const DynamicBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const moveX = interpolate(frame, [0, 900], [-100, 0]);

  return (
    <AbsoluteFill
      style={{
        transform: `translateX(${moveX}px)`,
        background:
          'radial-gradient(circle at 20% 20%, #1d4ed8 0%, transparent 35%), radial-gradient(circle at 85% 30%, #9333ea 0%, transparent 42%), linear-gradient(135deg, #020617 0%, #0f172a 45%, #111827 100%)',
      }}
    />
  );
};

const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <DynamicBackground />

      <Sequence from={0} durationInFrames={150}>
        <SceneContainer>
          <WordStagger
            text="GUERRA ALGORÍTMICA: A IA é o motor central da tomada de decisão estratégica."
            endFrame={150}
          />
        </SceneContainer>
      </Sequence>

      <Sequence from={150} durationInFrames={180}>
        <SceneContainer>
          <AnimatedText
            text="INDUSTRIALIZAÇÃO DO ALVO"
            startFrame={150}
            endFrame={330}
            fontSize={86}
          />
          <div style={{height: 28}} />
          <WordStagger
            text="Sistemas The Gospel e Lavender geram alvos em escala industrial."
            startFrame={150}
            endFrame={330}
            fontSize={50}
          />
        </SceneContainer>
      </Sequence>

      <Sequence from={330} durationInFrames={150}>
        <SceneContainer>
          <WordStagger
            text="O PARADOXO DO HUMANO: O operador tornou-se um gargalo físico e apenas carimba a decisão da IA."
            startFrame={330}
            endFrame={480}
          />
        </SceneContainer>
      </Sequence>

      <Sequence from={480} durationInFrames={180}>
        <SceneContainer>
          <WordStagger
            text="LABORATÓRIOS VIVOS: Do Project Maven à Ucrânia, algoritmos são treinados em campos de batalha reais."
            startFrame={480}
            endFrame={660}
          />
        </SceneContainer>
      </Sequence>

      <Sequence from={660} durationInFrames={150}>
        <SceneContainer>
          <WordStagger
            text="RISCOS ÉTICOS: A paciência tática desaparece em favor da eficácia algorítmica e responsabilidade turva."
            startFrame={660}
            endFrame={810}
          />
        </SceneContainer>
      </Sequence>

      <Sequence from={810} durationInFrames={90}>
        <SceneContainer>
          <AnimatedText
            text="CONCLUSÃO: O ser humano como espectador jurídico da própria violência."
            startFrame={810}
            endFrame={900}
            fontSize={72}
          />
        </SceneContainer>
      </Sequence>
    </AbsoluteFill>
  );
};

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="AlgoritmicWarVertical"
      component={MainVideo}
      width={WIDTH}
      height={HEIGHT}
      fps={FPS}
      durationInFrames={DURATION}
      defaultProps={{}}
    />
  );
};
