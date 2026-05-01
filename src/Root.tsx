import {Composition} from 'remotion';
import {AIWarVideo} from '../remotion/compositions/AIWarVideo';

export const RemotionRoot = () => {
  return (
    <Composition
      id="AIWarAlgorithmic"
      component={AIWarVideo}
      durationInFrames={1350}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
