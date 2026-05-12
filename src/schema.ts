/**
 * Single source of truth for the comparison matrix.
 */

export const FEATURE_DEFINITIONS = {
  // UI/UX Capabilities
  zoomPan: { label: 'Zoom & Pan', type: 'feature' },
  customNodes: { label: 'Custom Nodes', type: 'feature' },
  edgeRouting: { label: 'Edge Routing', type: 'feature' },
  largeData: { label: 'Scale/Perf', type: 'feature' },
  a11y: { label: 'Accessibility', type: 'feature' },
  interactivity: { label: 'Interactivity', type: 'feature' },
  animation: { label: 'Transitions', type: 'feature' },
  export: { label: 'Export (SVG/PNG)', type: 'feature' },

  // Technical/Integration Capabilities
  stateSync: { label: 'React State Sync', type: 'feature' },
  layoutEngine: { label: 'Layout Engines', type: 'feature' },
  virtualization: { label: 'Virtualization', type: 'feature' },
  tsSupport: { label: 'TS Support', type: 'feature' },
  domAccess: { label: 'React-in-Node', type: 'feature' },
  undoRedo: { label: 'Undo/Redo', type: 'feature' },
} as const;

export const DEMO_STANDARDS = {
  basic: {
    label: 'Basic Rendering',
    description: 'Simple graph/tree visualization',
  },
  scale: {
    label: 'Performance Test',
    description: 'Handling 10k+ nodes smoothly',
  },
  custom: {
    label: 'Custom Styling',
    description: 'Custom nodes and edge appearance',
  },
  interactive: {
    label: 'Advanced Interaction',
    description: 'Drag-and-drop, zoom, and selection',
  },
  a11y: {
    label: 'Accessibility',
    description: 'Keyboard nav and screen reader support',
  },
} as const;

export type FeatureId = keyof typeof FEATURE_DEFINITIONS;
export type DemoStandardId = keyof typeof DEMO_STANDARDS;
export type FeatureValue = 'full' | 'partial' | 'none';

export type FeatureValueMap = {
  [K in FeatureId]: FeatureValue;
};
