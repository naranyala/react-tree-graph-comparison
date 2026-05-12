/**
 * This file is the single source of truth for the comparison matrix.
 * Adding a feature here automatically updates types across the entire app.
 */

export const FEATURE_DEFINITIONS = {
  zoomPan: { label: 'Zoom & Pan', type: 'feature' },
  customNodes: { label: 'Custom Nodes', type: 'feature' },
  edgeRouting: { label: 'Edge Routing', type: 'feature' },
  largeData: { label: 'Scale/Perf', type: 'feature' },
  a11y: { label: 'Accessibility', type: 'feature' },
  interactivity: { label: 'Interactivity', type: 'feature' },
  stateSync: { label: 'React State Sync', type: 'feature' },
  layoutEngine: { label: 'Layout Engines', type: 'feature' },
  virtualization: { label: 'Virtualization', type: 'feature' },
  tsSupport: { label: 'TS Support', type: 'feature' },
  domAccess: { label: 'React-in-Node', type: 'feature' },
  bundleSize: { label: 'Bundle Size', type: 'size' },
  algorithms: { label: 'Graph Algorithms', type: 'feature' },
  dynamicUpdates: { label: 'Dynamic Updates', type: 'feature' },
  stylingMode: { label: 'Styling Paradigm', type: 'feature' },
  exportSupport: { label: 'Export Options', type: 'feature' },
} as const;

export type FeatureId = keyof typeof FEATURE_DEFINITIONS;
export type FeatureValue = 'full' | 'partial' | 'none';
export type SizeValue = 'small' | 'medium' | 'large';

// Helper to determine if a feature uses FeatureValue or SizeValue
export type FeatureValueMap = {
  [K in FeatureId]: typeof FEATURE_DEFINITIONS[K]['type'] extends 'size' ? SizeValue : FeatureValue;
};
