import React from "react";
import { Composition } from "remotion";
import sceneData from "../data/sceneData.json";
import { Scene1 } from "./components/Scene1";
import { Scene2 } from "./components/Scene2";
import { Scene3 } from "./components/Scene3";
import { Scene4 } from "./components/Scene4";
import { Scene5 } from "./components/Scene5";

export type SceneData = {
  title: string;
  subtitle: string;
  narration: string;
};

const scenes = sceneData.scenes as SceneData[];

const MainVideo: React.FC = () => {
  return (
    <>
      <Scene1 data={scenes[0]} />
      <Scene2 data={scenes[1]} />
      <Scene3 data={scenes[2]} />
      <Scene4 data={scenes[3]} />
      <Scene5 data={scenes[4]} />
    </>
  );
};

export const Video: React.FC = () => {
  return (
    <Composition
      id="video-final"
      component={MainVideo}
      durationInFrames={900}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
