import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import WAVES from "vanta/dist/vanta.waves.min";
import { VantaNetEffect, VantaWavesEffect } from "../libs/types/vanta";

export function useBackgroundEffects() {
  const [backgroundEffect, setBackgroundEffect] = useState<
    null | VantaWavesEffect | VantaNetEffect
  >(null);
  const ref = useRef<HTMLDivElement>(null);

  const createBackgroundEffect = (effect: "net" | "waves" | null) => {
    if (ref.current) {
      if (effect === "net") {
        const net = NET({
          el: ref.current,
          color: 0x009987,
          backgroundColor: 0x0f172b,
          points: 15.0,
          maxDistance: 22.0,
          spacing: 18.0,
        });
        setBackgroundEffect(net);
      }
      if (effect === "waves") {
        const waves = WAVES({
          el: ref.current,
          color: 0x0f172b,
        });
        setBackgroundEffect(waves);
      }

      if (effect === null) {
        setBackgroundEffect(null);
      }
    }
  };

  useEffect(() => {
    if (!backgroundEffect) {
      createBackgroundEffect("waves");
    }
    return () => {
      if (backgroundEffect) backgroundEffect.destroy();
    };
  }, [backgroundEffect]);

  return { ref };
}
