import React from 'react';
import { Composition } from 'remotion';
import { ModernWarfareMobile } from './ModernWarfareMobile';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ModernWarfareMobile"
        component={ModernWarfareMobile}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
