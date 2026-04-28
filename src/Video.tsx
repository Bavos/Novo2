import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import sceneData from '../data/sceneData.json';
import {Scene1} from './components/Scene1';
import {Scene2} from './components/Scene2';
import {Scene3} from './components/Scene3';
import {Scene4} from './components/Scene4';
import {Scene5} from './components/Scene5';

export type SceneData = {
type SceneData = {
  title: string;
  subtitle: string;
  narration: string;
};

const scenes = sceneData as SceneData[];

export const Video: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: '#0a0a1a'}}>
      <Sequence from={0} durationInFrames={180}>
        <Scene1 data={scenes[0]} />
      </Sequence>

      <Sequence from={180} durationInFrames={180}>
        <Scene2 data={scenes[1]} />
      </Sequence>

      <Sequence from={360} durationInFrames={180}>
        <Scene3 data={scenes[2]} />
      </Sequence>

      <Sequence from={540} durationInFrames={180}>
        <Scene4 data={scenes[3]} />
      </Sequence>

      <Sequence from={720} durationInFrames={180}>
        <Scene5 data={scenes[4]} />
      </Sequence>
    </AbsoluteFill>
  );
};
