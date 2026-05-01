import {Composition} from 'remotion';
import {AIWarVideo} from '../remotion/compositions/AIWarVideo';

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="AIWarHorizontal"
        component={AIWarVideo}
        durationInFrames={1350}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="AIWarVertical"
        component={AIWarVideo}
        durationInFrames={1350}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
