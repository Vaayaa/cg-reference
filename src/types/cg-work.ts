export type AlgorithmCategory =
  | 'Particle Systems'
  | 'Fractals'
  | 'Noise / Perlin'
  | 'Cellular Automata'
  | 'Chaos & Attractors'
  | 'Physics Simulation'
  | 'Shader / GLSL'
  | 'Ray Tracing'
  | 'L-System'
  | 'Wave Interference';

export interface CGWork {
  id: string;
  title: string;
  artist: string;
  algorithm: AlgorithmCategory;
  tags: string[];
  previewUrl: string;
  description: string;
  sourceUrl?: string;
  codeUrl?: string;
  tools: string[];
}
