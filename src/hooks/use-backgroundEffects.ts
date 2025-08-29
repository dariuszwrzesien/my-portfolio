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

  useEffect(() => {
    if (backgroundEffect) {
      backgroundEffect.destroy();
      setBackgroundEffect(null);
    }

    if (!ref.current || effect === BackgroundEffects.EMPTY) {
      return;
    }

    let newEffect: VantaWavesEffect | VantaNetEffect | null = null;

    if (effect === BackgroundEffects.NET) {
      newEffect = NET({
        el: ref.current,
        color: 0x009987,
        backgroundColor: 0x0f172b,
        points: 15.0,
        maxDistance: 22.0,
        spacing: 18.0,
      });
      console.log(effect);
    } else if (effect === BackgroundEffects.WAVES) {
      newEffect = WAVES({
        el: ref.current,
        color: 0x0f172b,
      });
      console.log(effect);
    }

    if (newEffect) {
      setBackgroundEffect(newEffect);
    }

    return () => {
      if (newEffect) {
        newEffect.destroy();
      }
    };
  }, [effect]);

  return { ref };
}
