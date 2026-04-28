import {registerRoot} from 'remotion';
import {RemotionRoot} from './Root';
import React from 'react';
import {Composition, registerRoot} from 'remotion';
import {Video} from './Video';

const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="video-final"
      component={Video}
      fps={30}
      width={1920}
      height={1080}
      durationInFrames={900}
      defaultProps={{}}
    />
  );
};

registerRoot(RemotionRoot);
