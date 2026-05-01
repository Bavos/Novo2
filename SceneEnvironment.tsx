case 'drone-vision':
  return (
    <>
      <DroneVisionBackground />
      <TargetGrid />
    </>
  );

case 'tactical-map':
  return (
    <>
      <TacticalMapBackground />
      <RadarOverlay />
    </>
  );

case 'data-center':
  return <DataCenterBackground />;
