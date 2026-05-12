import type React from 'react';
import { lazy } from 'react';
import { categories } from './constants';
import type { DemoStandardId } from './schema';
import type { DemoOption } from './types';

const ArboristDemo = lazy(() =>
  import('./components/demos/ArboristDemo').then((m) => ({
    default: m.default,
  })),
);
const ComplexTreeDemo = lazy(() =>
  import('./components/demos/ComplexTreeDemo').then((m) => ({
    default: m.default,
  })),
);
const CytoscapeDemo = lazy(() =>
  import('./components/demos/CytoscapeDemo').then((m) => ({
    default: m.default,
  })),
);
const D3Demo = lazy(() =>
  import('./components/demos/D3Demo').then((m) => ({ default: m.default })),
);
const EChartsDemo = lazy(() =>
  import('./components/demos/EChartsDemo').then((m) => ({
    default: m.default,
  })),
);
const ForceGraphDemo = lazy(() =>
  import('./components/demos/ForceGraphDemo').then((m) => ({
    default: m.default,
  })),
);
const G6Demo = lazy(() =>
  import('./components/demos/G6Demo').then((m) => ({ default: m.default })),
);
const MermaidDemo = lazy(() =>
  import('./components/demos/MermaidDemo').then((m) => ({
    default: m.default,
  })),
);
const ReactFlowDemo = lazy(() =>
  import('./components/demos/ReactFlowDemo').then((m) => ({
    default: m.default,
  })),
);
const VisNetworkDemo = lazy(() =>
  import('./components/demos/VisNetworkDemo').then((m) => ({
    default: m.default,
  })),
);
const ReactD3TreeDemo = lazy(() =>
  import('./components/demos/ReactD3TreeDemo').then((m) => ({
    default: m.default,
  })),
);
const SigmaDemo = lazy(() =>
  import('./components/demos/SigmaDemo').then((m) => ({ default: m.default })),
);

const COMPONENT_MAP: Record<string, React.ComponentType<any>> = {
  'React Arborist': ArboristDemo,
  'React Complex Tree': ComplexTreeDemo,
  'Cytoscape.js': CytoscapeDemo,
  'D3.js': D3Demo,
  'Apache ECharts': EChartsDemo,
  'React Force Graph': ForceGraphDemo,
  'AntV G6': G6Demo,
  'Mermaid.js': MermaidDemo,
  'React Flow': ReactFlowDemo,
  'Vis-network': VisNetworkDemo,
  'React D3 Tree': ReactD3TreeDemo,
  'Sigma.js': SigmaDemo,
  'AntV X6': () => <div>AntV X6 Demo coming soon...</div>,
  JointJS: () => <div>JointJS Demo coming soon...</div>,
  GoJS: () => <div>GoJS Demo coming soon...</div>,
  yFiles: () => <div>yFiles Demo coming soon...</div>,
};

export const DEMO_MAP: Record<string, React.ComponentType<any>> = COMPONENT_MAP;

export const getDemosForLibrary = (libraryName: string): DemoOption[] => {
  const Component = COMPONENT_MAP[libraryName];
  if (!Component) return [];

  const category = categories.find((cat) =>
    cat.libraries.some((lib) => lib.library === libraryName),
  );
  const lib = category?.libraries.find((l) => l.library === libraryName);
  const supportedIds = lib?.supportedDemos || ['basic'];

  const standardDemos: Record<DemoStandardId, { label: string }> = {
    basic: { label: 'Basic Rendering' },
    scale: { label: 'Performance Test' },
    custom: { label: 'Custom Styling' },
    interactive: { label: 'Advanced Interaction' },
    a11y: { label: 'Accessibility' },
  };

  return supportedIds
    .map((id) => ({
      id: id as DemoStandardId,
      label: standardDemos[id as DemoStandardId]?.label || 'Unknown',
      component: Component,
    }))
    .filter((demo) => demo.label !== 'Unknown');
};
