import { useEffect, useState } from 'react';
import type { Library, LibraryFeatures } from '../types';

const FEATURE_WEIGHTS: Record<string, number> = {
  // Core Performance & Engineering (High Weight)
  largeData: 3,
  virtualization: 3,
  stateSync: 2,
  tsSupport: 2,

  // User Experience (Medium Weight)
  zoomPan: 2,
  interactivity: 2,
  a11y: 2,
  customNodes: 2,

  // Functional Capabilities (Medium Weight)
  algorithms: 2,
  layoutEngine: 2,
  edgeRouting: 1,
  dynamicUpdates: 1,
  domAccess: 1,
  exportSupport: 1,

  // Overheads (Inverted Weight)
  bundleSize: 1,
};

const FEATURE_SCORE: Record<string, number> = {
  full: 3,
  partial: 1,
  none: 0,
  small: 3,
  medium: 1,
  large: 0,
};

export const calculateLibraryScore = (library: Library): number => {
  let score = 0;
  const features = library.features;

  for (const key in features) {
    const value = features[key as keyof LibraryFeatures];
    const weight = FEATURE_WEIGHTS[key] || 1;
    const baseScore = FEATURE_SCORE[value as string] || 0;
    score += baseScore * weight;
  }

  return score;
};

export const getRankedLibraries = (categories: any[]) => {
  const allLibs = categories.flatMap((cat) =>
    cat.libraries.map((lib) => ({
      ...lib,
      score: calculateLibraryScore(lib),
    })),
  );

  return allLibs.sort((a, b) => b.score - a.score);
};
