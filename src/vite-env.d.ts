/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// CSS Modules
declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.sass" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.txt" {
  const content: string;
  export default content;
}

// Vanta.js module declarations
declare module "vanta/dist/vanta.net.min" {
  import type { VantaNetEffect, VantaNetOptions } from "@/libs/types/vanta";

  interface VantaNet {
    (options: VantaNetOptions): VantaNetEffect;
  }

  const NET: VantaNet;
  export default NET;
}

declare module "vanta/dist/vanta.waves.min" {
  import type { VantaWavesEffect, VantaWavesOptions } from "@/libs/types/vanta";

  interface VantaWaves {
    (options: VantaWavesOptions): VantaWavesEffect;
  }

  const WAVES: VantaWaves;
  export default WAVES;
}

declare module "vanta/dist/vanta.clouds.min" {
  import type {
    VantaCloudsEffect,
    VantaCloudsOptions,
  } from "@/libs/types/vanta";

  interface VantaClouds {
    (options: VantaCloudsOptions): VantaCloudsEffect;
  }

  const CLOUDS: VantaClouds;
  export default CLOUDS;
}

declare module "vanta/dist/vanta.birds.min" {
  import type { VantaBirdsEffect, VantaBirdsOptions } from "@/libs/types/vanta";

  interface VantaBirds {
    (options: VantaBirdsOptions): VantaBirdsEffect;
  }

  const BIRDS: VantaBirds;
  export default BIRDS;
}

declare module "vanta/dist/vanta.fog.min" {
  import type { VantaFogEffect, VantaFogOptions } from "@/libs/types/vanta";

  interface VantaFog {
    (options: VantaFogOptions): VantaFogEffect;
  }

  const FOG: VantaFog;
  export default FOG;
}
