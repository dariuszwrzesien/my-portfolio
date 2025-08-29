import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import WAVES from "vanta/dist/vanta.waves.min";
import { VantaNetEffect, VantaWavesEffect } from "../libs/types/vanta";
import { BackgroundEffects } from "../libs/enums";

export function useBackgroundEffects(effect: BackgroundEffects) {
  const [backgroundEffect, setBackgroundEffect] = useState<
    null | VantaWavesEffect | VantaNetEffect
  >(null);
  const ref = useRef<HTMLDivElement>(null);

  const createBackgroundEffect = (effect: BackgroundEffects) => {
    if (ref.current && effect && effect !== BackgroundEffects.EMPTY) {
      if (effect === BackgroundEffects.NET) {
        const net = NET({
          el: ref.current,
          color: 0x009987,
          backgroundColor: 0x0f172b,
          points: 15.0,
          maxDistance: 22.0,
          spacing: 18.0,
        });
        console.log(effect);
        setBackgroundEffect(net);
      } else if (effect === BackgroundEffects.WAVES) {
        const waves = WAVES({
          el: ref.current,
          color: 0x0f172b,
        });
        console.log(effect);
        setBackgroundEffect(waves);
      }
    } else {
      setBackgroundEffect(null);
      if (backgroundEffect) {
        backgroundEffect.destroy();
      }
    }
  };

  useEffect(() => {
    if (backgroundEffect) {
      backgroundEffect.destroy();
      setBackgroundEffect(null);
    }

    createBackgroundEffect(effect);

    return () => {
      if (backgroundEffect) {
        backgroundEffect.destroy();
      }
    };
  }, [effect]);

  return { ref };
}
