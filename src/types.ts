import type { ReactNode } from 'react';
import { FeatureId, FeatureValueMap } from './schema';

export interface LibraryFeatures {
  [K in FeatureId]: FeatureValueMap[K];
}

export interface Library {
  library: string;
  useCase: string;
  engine: 'Canvas' | 'SVG' | 'WebGL' | 'HTML' | 'Canvas/SVG' | 'Canvas/WebGL' | 'SVG/HTML';
  reactFriendly: 'High' | 'Medium' | 'Low';
  complexity: 'Low' | 'Medium' | 'High';
  license: string;
  learningCurve: 'Easy' | 'Moderate' | 'Steep';
  maxNodes: string;
  features: LibraryFeatures;
}

export interface Category {
  name: string;
  description: string;
  libraries: Library[];
}
