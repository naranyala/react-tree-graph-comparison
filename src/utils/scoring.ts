import { Library, LibraryFeatures } from '../types';

const FEATURE_SCORE: Record<string, number> = {
  full: 2,
  partial: 1,
  none: 0,
  small: 2, // For bundle size: smaller is better
  medium: 1,
  large: 0,
};

export const calculateLibraryScore = (library: Library): number => {
  let score = 0;
  const features = library.features;

  for (const key in features) {
    const value = features[key as keyof LibraryFeatures];
    score += FEATURE_SCORE[value as string] || 0;
  }

  return score;
};

export const getRankedLibraries = (categories: any[]) => {
  const allLibs = categories.flatMap(cat => cat.libraries.map(lib => ({
    ...lib,
    score: calculateLibraryScore(lib)
  })));

  return allLibs.sort((a, b) => b.score - a.score);
};
