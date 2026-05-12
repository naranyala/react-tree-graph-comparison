import React, { lazy, ComponentType } from 'react';

// Use lazy loading for all heavy demo components
export const DEMO_MAP: Record<string, ComponentType<any>> = {
  'React Arborist': lazy(() => import('./components/demos/ArboristDemo').then(m => ({ default: m.default }))),
  'React Complex Tree': lazy(() => import('./components/demos/ComplexTreeDemo').then(m => ({ default: m.default }))),
  'Cytoscape.js': lazy(() => import('./components/demos/CytoscapeDemo').then(m => ({ default: m.default }))),
  'D3.js': lazy(() => import('./components/demos/D3Demo').then(m => ({ default: m.default }))),
  'Apache ECharts': lazy(() => import('./components/demos/EChartsDemo').then(m => ({ default: m.default }))),
  'React Force Graph': lazy(() => import('./components/demos/ForceGraphDemo').then(m => ({ default: m.default }))),
  'AntV G6': lazy(() => import('./components/demos/G6Demo').then(m => ({ default: m.default }))),
  'Mermaid.js': lazy(() => import('./components/demos/MermaidDemo').then(m => ({ default: m.default }))),
  'React Flow': lazy(() => import('./components/demos/ReactFlowDemo').then(m => ({ default: m.default }))),
  'Vis-network': lazy(() => import('./components/demos/VisNetworkDemo').then(m => ({ default: m.default }))),
  'React D3 Tree': lazy(() => import('./components/demos/ReactD3TreeDemo').then(m => ({ default: m.default }))),
  'Sigma.js': lazy(() => import('./components/demos/SigmaDemo').then(m => ({ default: m.default }))),
  'AntV X6': lazy(() => Promise.resolve({ default: () => <div>AntV X6 Demo coming soon...</div> })),
  'JointJS': lazy(() => Promise.resolve({ default: () => <div>JointJS Demo coming soon...</div> })),
};
