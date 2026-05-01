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
    extrapolateLeft:
