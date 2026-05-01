type Props = {
  type: string;
};

export const SceneEnvironment = ({ type }: Props) => {
  switch (type) {
    case "satellite":
      return <SatelliteScene />;
    case "ai-face":
      return <AIFaceScene />;
    case "radar":
      return <RadarScene />;
    case "datacenter":
      return <DataCenterScene />;
    case "drone":
      return <DroneScene />;
    case "timeline":
      return <TimelineScene />;
    case "command":
      return <CommandScene />;
    case "human":
      return <HumanScene />;
    case "countdown":
      return <CountdownScene />;
    case "neural":
      return <NeuralScene />;
    case "glitch":
      return <GlitchScene />;
    case "court":
      return <CourtScene />;
    case "global":
      return <GlobalWarScene />;
    default:
      return <HudBackground />;
  }
};
