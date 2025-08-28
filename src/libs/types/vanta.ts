// Vanta.js TypeScript definitions

export interface VantaNetEffect {
  destroy(): void;
  resize(): void;
  setOptions(options: any): void;
}

export interface VantaNetOptions {
  el?: HTMLElement | string;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  scale?: number;
  scaleMobile?: number;
  color?: number | string;
  backgroundColor?: number | string;
  points?: number;
  maxDistance?: number;
  spacing?: number;
  showDots?: boolean;
  [key: string]: any;
}

export interface VantaWavesEffect {
  destroy(): void;
  resize(): void;
  setOptions(options: any): void;
}

export interface VantaWavesOptions {
  el?: HTMLElement | string;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  scale?: number;
  scaleMobile?: number;
  color?: number | string;
  shininess?: number;
  waveHeight?: number;
  waveSpeed?: number;
  zoom?: number;
  [key: string]: any;
}

export interface VantaCloudsEffect {
  destroy(): void;
  resize(): void;
  setOptions(options: any): void;
}

export interface VantaCloudsOptions {
  el?: HTMLElement | string;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  scale?: number;
  scaleMobile?: number;
  backgroundColor?: number | string;
  skyColor?: number | string;
  cloudColor?: number | string;
  cloudShadowColor?: number | string;
  sunColor?: number | string;
  sunGlareColor?: number | string;
  sunlightColor?: number | string;
  speed?: number;
  [key: string]: any;
}

export interface VantaBirdsEffect {
  destroy(): void;
  resize(): void;
  setOptions(options: any): void;
}

export interface VantaBirdsOptions {
  el?: HTMLElement | string;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  scale?: number;
  scaleMobile?: number;
  backgroundColor?: number | string;
  color1?: number | string;
  color2?: number | string;
  colorMode?: string;
  birdSize?: number;
  wingSpan?: number;
  speedLimit?: number;
  separation?: number;
  alignment?: number;
  cohesion?: number;
  quantity?: number;
  [key: string]: any;
}

export interface VantaFogEffect {
  destroy(): void;
  resize(): void;
  setOptions(options: any): void;
}

export interface VantaFogOptions {
  el?: HTMLElement | string;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  scale?: number;
  scaleMobile?: number;
  highlightColor?: number | string;
  midtoneColor?: number | string;
  lowlightColor?: number | string;
  baseColor?: number | string;
  blurFactor?: number;
  speed?: number;
  zoom?: number;
  [key: string]: any;
}
