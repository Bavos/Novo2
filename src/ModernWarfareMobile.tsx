import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  useCurrentFrame,
  spring,
  useVideoConfig,
} from 'remotion';

const scenes = [
  {
    kicker: 'CAPÍTULO 01',
    title: 'GUERRA',
    accent: 'ALGORÍTMICA',
    subtitle: 'A batalha invisível pela sua atenção',
    duration: 150,
  },
  {
    kicker: 'SISTEMA ATIVO',
    title: 'DADOS',
    accent: 'SÃO ARMAS',
    subtitle: 'Cada clique treina a próxima decisão',
    duration: 150,
  },
  {
    kicker: 'DECISÃO AUTOMÁTICA',
    title: 'O FEED',
    accent: 'ESCOLHE',
    subtitle: 'O que você vê, pensa e consome',
    duration: 150,
  },
  {
    kicker: 'TERRITÓRIO DIGITAL',
    title: 'ATENÇÃO',
    accent: 'É PODER',
    subtitle: 'Quem prende sua atenção controla seu tempo',
    duration: 150,
  },
  {
    kicker: 'NARRATIVA',
    title: 'QUEM CONTROLA',
    accent: 'O ALGORITMO',
    subtitle: 'Controla a percepção da realidade',
    duration: 150,
  },
  {
    kicker: 'ALERTA FINAL',
    title: 'DESPERTE',
    accent: 'AGORA',
    subtitle: 'Ou continue sendo programado',
    duration: 150,
  },
];

const Scene: React.FC<{
  kicker: string;
  title: string;
  accent: string;
  subtitle: string;
  index: number;
}> = ({ kicker, title, accent, subtitle, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: {
      damping: 14,
      stiffness: 120,
    },
  });

  const fadeOut = interpolate(frame, [120, 150], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const zoom = interpolate(frame, [0, 150], [1.12, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const slideY = interpolate(entrance, [0, 1], [90, 0]);
  const opacity = interpolate(entrance, [0, 1], [0, 1]) * fadeOut;

  const scan = interpolate(frame % 90, [0, 90], [-300, 2100]);
  const glitch = frame % 37 < 3 ? 12 : 0;

  return (
    <AbsoluteFill
      style={{
        background:
          'radial-gradient(circle at 30% 15%, #26324a 0%, #07080c 38%, #000 100%)',
        overflow: 'hidden',
      }}
    >
      <AbsoluteFill
        style={{
          opacity: 0.22,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '54px 54px',
          transform: `scale(${zoom})`,
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: scan,
          left: 0,
          right: 0,
          height: 140,
          background:
            'linear-gradient(to bottom, transparent, rgba(255,255,255,0.10), transparent)',
          opacity: 0.6,
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 42,
          border: '2px solid rgba(255,255,255,0.16)',
          borderRadius: 34,
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 74,
          left: 70,
          right: 70,
          display: 'flex',
          justifyContent: 'space-between',
          color: 'rgba(255,255,255,0.72)',
          fontFamily: 'Arial, sans-serif',
          fontSize: 24,
          letterSpacing: 4,
        }}
      >
        <span>ALGO-WAR</span>
        <span>{String(index + 1).padStart(2, '0')} / 06</span>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 70,
          right: 70,
          top: 430,
          opacity,
          transform: `translateY(${slideY}px) translateX(${glitch}px)`,
          fontFamily: 'Arial, sans-serif',
          color: 'white',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            padding: '12px 22px',
            marginBottom: 34,
            border: '1px solid rgba(255,255,255,0.28)',
            borderRadius: 999,
            fontSize: 24,
            letterSpacing: 4,
            color: 'rgba(255,255,255,0.8)',
          }}
        >
          {kicker}
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: 116,
            lineHeight: 0.92,
            fontWeight: 950,
            letterSpacing: -5,
            textTransform: 'uppercase',
            textShadow: '0 18px 60px rgba(0,0,0,0.8)',
          }}
        >
          {title}
          <br />
          <span
            style={{
              color: '#ff2d55',
              textShadow: '0 0 42px rgba(255,45,85,0.55)',
            }}
          >
            {accent}
          </span>
        </h1>

        <p
          style={{
            marginTop: 40,
            maxWidth: 780,
            fontSize: 42,
            lineHeight: 1.2,
            color: 'rgba(255,255,255,0.82)',
          }}
        >
          {subtitle}
        </p>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 70,
          right: 70,
          bottom: 100,
          height: 10,
          borderRadius: 99,
          background: 'rgba(255,255,255,0.14)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${((frame + 1) / 150) * 100}%`,
            height: '100%',
            background: '#ff2d55',
          }}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent 25%, transparent 70%, rgba(0,0,0,0.55))',
        }}
      />
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
          <Sequence key={index} from={start} durationInFrames={scene.duration}>
            <Scene {...scene} index={index} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
