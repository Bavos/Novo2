import React from 'react';
import {Composition} from 'remotion';
import {Video} from './Video';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="video-final"
      component={Video}
      fps={30}
      width={1920}
      height={1080}
      durationInFrames={900}
    />
  );
};
