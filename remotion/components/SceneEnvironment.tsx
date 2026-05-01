import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {GlitchOverlay} from './GlitchOverlay';

export type EnvironmentType =
  | 'satellite'
  | 'ai-face'
  | 'tactical-map'
  | 'data-center'
  | 'drone-vision'
  | 'kill-chain'
  | 'command-modules'
  | 'human-loop'
  | 'critical-confirmation'
  | 'algorithmic-faith'
  | 'tragic-glitch'
  | 'judgement-room'
  | 'global-battle';

type SceneEnvironmentProps = {
  environment: EnvironmentType;
  sceneDuration: number;
};

const full: React.CSSProperties = {position: 'absolute', inset: 0, overflow: 'hidden'};

export const SceneEnvironment: React.FC<SceneEnvironmentProps> = ({environment, sceneDuration}) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [0, sceneDuration], [0, 1], {extrapolateRight: 'clamp'});
  const t = frame / 30;

  const commonHud = (
    <div style={{...full, color: 'rgba(154,176,199,0.4)', fontFamily: 'monospace', fontSize: 20, padding: 28, display: 'flex', justifyContent: 'space-between'}}>
      <span>OPS-NET</span>
      <span>T+{Math.floor(t).toString().padStart(3, '0')}</span>
    </div>
  );

  const env = {
    satellite: (
      <>
        <div style={{...full, background: 'radial-gradient(circle at 50% 70%, #193149 0%, #04070C 65%)'}} />
        <div style={{position: 'absolute', width: 1400, height: 1400, borderRadius: '50%', left: -200, bottom: -860, background: 'radial-gradient(circle, #2f5a86 0%, #0f2438 50%, transparent 70%)', transform: `scale(${1 + p * 0.06})`}} />
      </>
    ),
    'ai-face': <div style={{...full, background: 'radial-gradient(circle at 50% 40%, #161f34 0%, #050913 70%)'}} />,
    'tactical-map': <div style={{...full, background: 'radial-gradient(circle at 50% 50%, #0c1a2c 0%, #04070c 78%)'}} />,
    'data-center': <div style={{...full, background: 'linear-gradient(180deg, #050a12 0%, #0d1828 50%, #04070c 100%)'}} />,
    'drone-vision': <div style={{...full, background: 'radial-gradient(circle at 50% 50%, #122335 0%, #04070c 74%)'}} />,
    'kill-chain': <div style={{...full, background: 'linear-gradient(180deg, #090e18 0%, #131b2e 100%)'}} />,
    'command-modules': <div style={{...full, background: 'radial-gradient(circle at 50% 50%, #101c30 0%, #04070c 80%)'}} />,
    'human-loop': <div style={{...full, background: 'radial-gradient(circle at 50% 45%, #131822 0%, #05080e 75%)'}} />,
    'critical-confirmation': <div style={{...full, background: 'radial-gradient(circle at 50% 50%, #220f17 0%, #0a0b12 74%)'}} />,
    'algorithmic-faith': <div style={{...full, background: 'radial-gradient(circle at 50% 45%, #141d2e 0%, #06070f 76%)'}} />,
    'tragic-glitch': <div style={{...full, background: 'radial-gradient(circle at 50% 45%, #2b0f18 0%, #07070b 78%)'}} />,
    'judgement-room': <div style={{...full, background: 'linear-gradient(180deg, #0b0d12 0%, #151922 100%)'}} />,
    'global-battle': <div style={{...full, background: 'radial-gradient(circle at 50% 45%, #13283b 0%, #04070c 78%)'}} />
  }[environment];

  return (
    <AbsoluteFill>
      {env}
      <div style={{...full, opacity: 0.22, backgroundImage: 'linear-gradient(rgba(78,168,222,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(78,168,222,0.12) 1px, transparent 1px)', backgroundSize: '90px 90px', transform: `translate(${Math.sin(t) * 18}px, ${Math.cos(t * 0.7) * 14}px)`}} />

      {environment === 'ai-face' && <div style={{position: 'absolute', width: 520, height: 760, left: '28%', top: '18%', border: '1px solid rgba(78,168,222,0.45)', borderRadius: '48% 42% 46% 52%', boxShadow: '0 0 70px rgba(78,168,222,0.25)', transform: `translateX(${Math.sin(t) * 12}px)`}} />}
      {environment === 'tactical-map' && <div style={{position: 'absolute', width: 700, height: 700, borderRadius: '50%', left: '20%', top: '32%', border: '2px solid rgba(78,168,222,0.3)', transform: `rotate(${frame * 0.8}deg)`}} />}
      {environment === 'data-center' && <div style={{position: 'absolute', inset: '8% 14%', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18}}>{Array.from({length: 16}).map((_, i) => <div key={i} style={{border: '1px solid rgba(78,168,222,0.25)', background: `rgba(8,14,24,${0.4 + ((i + frame) % 3) * 0.15})`}} />)}</div>}
      {environment === 'drone-vision' && <div style={{position: 'absolute', inset: '18% 12%', border: '2px solid rgba(78,168,222,0.45)'}} />}
      {environment === 'kill-chain' && <div style={{position: 'absolute', left: '50%', top: '12%', bottom: '12%', width: 6, background: 'linear-gradient(180deg, rgba(215,38,61,0.1), rgba(215,38,61,0.85), rgba(215,38,61,0.1))', transform: `translateX(-50%) translateY(${(frame * 4) % 100}px)`}} />}
      {environment === 'command-modules' && <div style={{position: 'absolute', inset: '20% 14%', display: 'grid', gap: 20}}>{['DETECTAR', 'DECIDIR', 'ATACAR'].map((m, i) => <div key={m} style={{border: '2px solid rgba(78,168,222,0.45)', background: `rgba(10,18,30,${(Math.floor(frame / 20) + i) % 3 === 0 ? 0.85 : 0.35})`, color: '#DDEAF6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', letterSpacing: '0.2em'}}>{m}</div>)}</div>}
      {environment === 'human-loop' && <div style={{position: 'absolute', width: 280, height: 520, borderRadius: '50% 50% 30% 30%', left: '37%', top: '34%', background: 'linear-gradient(180deg, rgba(40,60,85,0.6), rgba(10,12,18,0.9))'}} />}
      {environment === 'critical-confirmation' && <div style={{position: 'absolute', inset: '26% 18%', border: '2px solid rgba(215,38,61,0.7)', display: 'grid', placeItems: 'center', color: '#ff7385', fontFamily: 'monospace', fontSize: 110}}>{10 - Math.floor((frame % 90) / 9)}</div>}
      {environment === 'algorithmic-faith' && <div style={{...full}}>{Array.from({length: 22}).map((_, i) => <div key={i} style={{position: 'absolute', width: 12, height: 12, borderRadius: '50%', left: `${10 + ((i * 13) % 80)}%`, top: `${8 + ((i * 17 + frame * 0.2) % 84)}%`, background: 'rgba(78,168,222,0.7)'}} />)}</div>}
      {environment === 'tragic-glitch' && <GlitchOverlay />}
      {environment === 'judgement-room' && <div style={{position: 'absolute', inset: '60% 16% 15% 16%', borderTop: '2px solid rgba(154,176,199,0.35)', background: 'rgba(10,12,18,0.6)'}} />}
      {environment === 'global-battle' && <div style={{position: 'absolute', inset: '12% 10%', border: '1px solid rgba(78,168,222,0.45)', borderRadius: 20, transform: `scale(${1 - p * 0.08})`}} />}

      {commonHud}
      <div style={{...full, background: 'linear-gradient(180deg, rgba(4,7,12,0.05), rgba(4,7,12,0.38))'}} />
    </AbsoluteFill>
  );
};
