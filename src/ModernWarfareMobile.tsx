import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  useCurrentFrame,
} from 'remotion';

const scenes = [
  {
    title: 'Guerra Algorítmica',
    subtitle: 'A batalha invisível pela atenção',
    duration: 150,
    background: '#050505',
  },
  {
    title: 'Dados são armas',
    subtitle: 'Cada clique alimenta o sistema',
    duration: 150,
    background: '#111827',
  },
  {
    title: 'O algoritmo decide',
    subtitle: 'O que você vê, pensa e consome',
    duration: 150,
    background: '#1f2937',
  },
  {
    title: 'Atenção virou território',
    subtitle: 'E todos estão disputando por ela',
    duration: 150,
    background: '#0f172a',
  },
  {
    title: 'Quem controla o feed',
    subtitle: 'Controla a narrativa',
    duration: 150,
    background: '#020617',
  },
  {
    title: 'Desperte',
    subtitle: 'Ou seja programado',
    duration: 150,
    background: '#000000',
  },
];

const Scene: React.FC<{
  title: string;
  subtitle: string;
  background: string;
}> = ({ title, subtitle, background }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 25, 120, 150], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const scale = interpolate(frame, [0, 150], [1.08, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        background,
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 80,
        transform: `scale(${scale})`,
      }}
    >
      <div style={{ opacity }}>
        <h1
          style={{
            fontSize: 92,
            lineHeight: 1.05,
            margin: 0,
            fontWeight: 900,
            textTransform: 'uppercase',
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: 42,
            lineHeight: 1.25,
            marginTop: 40,
            opacity: 0.85,
          }}
        >
          {subtitle}
        </p>
      </div>
    </AbsoluteFill>
  );
};

export const ModernWarfareMobile: React.FC = () => {
  let from = 0;

  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>
      {scenes.map((scene, index) => {
        const start = from;
        from += scene.duration;

        return (
          <Sequence
            key={index}
            from={start}
            durationInFrames={scene.duration}
          >
            <Scene
              title={scene.title}
              subtitle={scene.subtitle}
              background={scene.background}
            />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
