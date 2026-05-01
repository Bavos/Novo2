import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  useCurrentFrame,
  useVideoConfig
} from 'remotion';
import {GlitchOverlay} from '../components/GlitchOverlay';
import {SceneEnvironment} from '../components/SceneEnvironment';
import {SceneText} from '../components/SceneText';
import {theme} from '../styles/theme';

const scenes = [
  {text: 'A guerra mudou.', duration: 90, environment: 'satellite'},
  {text: 'A IA entrou no comando.', duration: 90, environment: 'ai-face'},
  {text: 'Dados de drones, satélites e radares.', duration: 90, environment: 'tactical-map'},
  {text: 'Tudo é processado em tempo real.', duration: 90, environment: 'data-center'},
  {text: 'Alvos são classificados automaticamente.', duration: 90, environment
