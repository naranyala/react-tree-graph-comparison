import { Category } from './types';

export const TOPICS = Object.entries({
  zoomPan: 'Zoom & Pan',
  customNodes: 'Custom Nodes',
  edgeRouting: 'Edge Routing',
  largeData: 'Scale/Perf',
  a11y: 'Accessibility',
  interactivity: 'Interactivity',
  animation: 'Transitions',
  export: 'Export (SVG/PNG)',
  stateSync: 'React State Sync',
  layoutEngine: 'Layout Engines',
  virtualization: 'Virtualization',
  tsSupport: 'TS Support',
  domAccess: 'React-in-Node',
  undoRedo: 'Undo/Redo',
}).map(([id, label]) => ({ id, label }));

export const categories: Category[] = [
  {
    name: 'Network & Graph Analysis',
    description: 'Libraries focused on analyzing relationships, connectivity and complex network topologies.',
    libraries: [
      {
        library: 'Cytoscape.js',
        useCase: 'Graph Analysis',
        engine: 'Canvas',
        reactFriendly: 'Medium',
        complexity: 'Medium',
        license: 'MIT',
        learningCurve: 'Moderate',
        maxNodes: '10k+',
        supportedDemos: ['basic', 'interactive', 'custom'],
        features: { 
          zoomPan: 'full', customNodes: 'partial', edgeRouting: 'full', largeData: 'partial', a11y: 'none', interactivity: 'full',
          animation: 'partial', export: 'full', stateSync: 'partial', layoutEngine: 'full', virtualization: 'none', tsSupport: 'full', domAccess: 'none', undoRedo: 'none'
        },
      },
      {
        library: 'AntV G6',
        useCase: 'Enterprise Graphs',
        engine: 'Canvas',
        reactFriendly: 'Medium',
        complexity: 'Medium',
        license: 'MIT',
        learningCurve: 'Steep',
        maxNodes: '50k+',
        supportedDemos: ['basic', 'interactive', 'custom', 'scale'],
        features: { 
          zoomPan: 'full', customNodes: 'full', edgeRouting: 'full', largeData: 'full', a11y: 'none', interactivity: 'full',
          animation: 'full', export: 'full', stateSync: 'partial', layoutEngine: 'full', virtualization: 'partial', tsSupport: 'full', domAccess: 'partial', undoRedo: 'partial'
        },
      },
      {
        library: 'Vis-network',
        useCase: 'Interactive Networks',
        engine: 'Canvas',
        reactFriendly: 'Medium',
        complexity: 'Low',
        license: 'Apache 2.0',
        learningCurve: 'Easy',
        maxNodes: '5k+',
        supportedDemos: ['basic', 'interactive'],
        features: { 
          zoomPan: 'full', customNodes: 'partial', edgeRouting: 'partial', largeData: 'partial', a11y: 'none', interactivity: 'full',
          animation: 'partial', export: 'partial', stateSync: 'partial', layoutEngine: 'partial', virtualization: 'none', tsSupport: 'partial', domAccess: 'none', undoRedo: 'none'
        },
      },
      {
        library: 'React Force Graph',
        useCase: 'Large Networks',
        engine: 'Canvas/WebGL',
        reactFriendly: 'High',
        complexity: 'Medium',
        license: 'MIT',
        learningCurve: 'Moderate',
        maxNodes: '100k+',
        supportedDemos: ['basic', 'interactive', 'scale'],
        features: { 
          zoomPan: 'full', customNodes: 'partial', edgeRouting: 'none', largeData: 'full', a11y: 'none', interactivity: 'full',
          animation: 'full', export: 'partial', stateSync: 'full', layoutEngine: 'partial', virtualization: 'full', tsSupport: 'full', domAccess: 'partial', undoRedo: 'none'
        },
      },
      {
        library: 'Apache ECharts',
        useCase: 'Multi-purpose Charts',
        engine: 'Canvas/SVG',
        reactFriendly: 'Medium',
        complexity: 'Medium',
        license: 'Apache 2.0',
        learningCurve: 'Moderate',
        maxNodes: '100k+',
        supportedDemos: ['basic', 'scale'],
        features: { 
          zoomPan: 'full', customNodes: 'partial', edgeRouting: 'partial', largeData: 'full', a11y: 'partial', interactivity: 'partial',
          stateSync: 'partial', layoutEngine: 'partial', virtualization: 'partial', tsSupport: 'full', domAccess: 'none', bundleSize: 'large' as any, undoRedo: 'none'
        },
      },
      {
        library: 'Sigma.js',
        useCase: 'Huge Datasets',
        engine: 'WebGL',
        reactFriendly: 'Medium',
        complexity: 'Medium',
        license: 'MIT',
        learningCurve: 'Steep',
        maxNodes: '1M+',
        supportedDemos: ['basic', 'scale', 'interactive'],
        features: { 
          zoomPan: 'full', customNodes: 'partial', edgeRouting: 'none', largeData: 'full', a11y: 'none', interactivity: 'partial',
          animation: 'partial', export: 'partial', stateSync: 'partial', layoutEngine: 'none', virtualization: 'full', tsSupport: 'full', domAccess: 'none', undoRedo: 'none'
        },
      },
    ],
  },
  {
    name: 'Hierarchical & Tree Views',
    description: 'Libraries for exploring parent-child relationships, file systems, and organizational charts.',
    libraries: [
      {
        library: 'React Arborist',
        useCase: 'Tree View/Explorer',
        engine: 'HTML',
        reactFriendly: 'High',
        complexity: 'Low',
        license: 'MIT',
        learningCurve: 'Easy',
        maxNodes: '10k+',
        supportedDemos: ['basic', 'scale', 'a11y'],
        features: { 
          zoomPan: 'none', customNodes: 'full', edgeRouting: 'none', largeData: 'full', a11y: 'partial', interactivity: 'full',
          animation: 'partial', export: 'none', stateSync: 'full', layoutEngine: 'none', virtualization: 'full', tsSupport: 'full', domAccess: 'full', undoRedo: 'partial'
        },
      },
      {
        library: 'React Complex Tree',
        useCase: 'Accessible Tree Views',
        engine: 'HTML',
        reactFriendly: 'High',
        complexity: 'Medium',
        license: 'MIT',
        learningCurve: 'Moderate',
        maxNodes: '10k+',
        supportedDemos: ['basic', 'a11y', 'custom'],
        features: { 
          zoomPan: 'none', customNodes: 'full', edgeRouting: 'none', largeData: 'full', a11y: 'full', interactivity: 'full',
          animation: 'none', export: 'none', stateSync: 'full', layoutEngine: 'none', virtualization: 'full', tsSupport: 'full', domAccess: 'full', undoRedo: 'partial'
        },
      },
      {
        library: 'React D3 Tree',
        useCase: 'Visual Tree Hierarchy',
        engine: 'SVG',
        reactFriendly: 'High',
        complexity: 'Low',
        license: 'MIT',
        learningCurve: 'Moderate',
        maxNodes: '2k+',
        supportedDemos: ['basic', 'custom'],
        features: { 
          zoomPan: 'full', customNodes: 'partial', edgeRouting: 'partial', largeData: 'partial', a11y: 'none', interactivity: 'partial',
          animation: 'full', export: 'full', stateSync: 'full', layoutEngine: 'full', virtualization: 'none', tsSupport: 'full', domAccess: 'partial', undoRedo: 'none'
        },
      },
    ],
  },
  {
    name: 'Workflow & Node Editors',
    description: 'Designed for building visual programming interfaces, flowcharts, and state machines.',
    libraries: [
      {
        library: 'React Flow',
        useCase: 'Node Editors',
        engine: 'SVG/HTML',
        reactFriendly: 'High',
        complexity: 'Medium',
        license: 'MIT',
        learningCurve: 'Moderate',
        maxNodes: '10k+',
        supportedDemos: ['basic', 'interactive', 'custom', 'scale'],
        features: { 
          zoomPan: 'full', customNodes: 'full', edgeRouting: 'partial', largeData: 'partial', a11y: 'partial', interactivity: 'full',
          animation: 'full', export: 'full', stateSync: 'full', layoutEngine: 'partial', virtualization: 'partial', tsSupport: 'full', domAccess: 'full', undoRedo: 'partial'
        },
      },
      {
        library: 'AntV X6',
        useCase: 'Diagramming Tool',
        engine: 'SVG/HTML',
        reactFriendly: 'Medium',
        complexity: 'High',
        license: 'MIT',
        learningCurve: 'Steep',
        maxNodes: '20k+',
        supportedDemos: ['basic', 'interactive', 'custom', 'scale'],
        features: { 
          zoomPan: 'full', customNodes: 'full', edgeRouting: 'full', largeData: 'full', a11y: 'partial', interactivity: 'full',
          animation: 'full', export: 'full', stateSync: 'partial', layoutEngine: 'full', virtualization: 'partial', tsSupport: 'full', domAccess: 'full', undoRedo: 'full'
        },
      },
      {
        library: 'JointJS',
        useCase: 'Professional Flowcharts',
        engine: 'SVG',
        reactFriendly: 'Low',
        complexity: 'High',
        license: 'MPL',
        learningCurve: 'Steep',
        maxNodes: '10k+',
        supportedDemos: ['basic', 'interactive', 'custom'],
        features: { 
          zoomPan: 'full', customNodes: 'full', edgeRouting: 'full', largeData: 'partial', a11y: 'none', interactivity: 'full',
          animation: 'partial', export: 'full', stateSync: 'none', layoutEngine: 'full', virtualization: 'none', tsSupport: 'partial', domAccess: 'partial', undoRedo: 'full'
        },
      },
      {
        library: 'GoJS',
        useCase: 'Enterprise Diagrams',
        engine: 'Canvas',
        reactFriendly: 'Low',
        complexity: 'High',
        license: 'Commercial',
        learningCurve: 'Steep',
        maxNodes: '100k+',
        supportedDemos: ['basic', 'interactive', 'custom', 'scale'],
        features: { 
          zoomPan: 'full', customNodes: 'full', edgeRouting: 'full', largeData: 'full', a11y: 'partial', interactivity: 'full',
          animation: 'full', export: 'full', stateSync: 'none', layoutEngine: 'full', virtualization: 'full', tsSupport: 'full', domAccess: 'none', undoRedo: 'full'
        },
      },
      {
        library: 'yFiles',
        useCase: 'Ultra-scale Graphs',
        engine: 'Canvas/SVG',
        reactFriendly: 'Low',
        complexity: 'High',
        license: 'Commercial',
        learningCurve: 'Steep',
        maxNodes: '1M+',
        supportedDemos: ['basic', 'interactive', 'custom', 'scale', 'a11y'],
        features: { 
          zoomPan: 'full', customNodes: 'full', edgeRouting: 'full', largeData: 'full', a11y: 'full', interactivity: 'full',
          animation: 'full', export: 'full', stateSync: 'none', layoutEngine: 'full', virtualization: 'full', tsSupport: 'full', domAccess: 'partial', undoRedo: 'full'
        },
      },
    ],
  },
  {
    name: 'Automated & Custom Visualization',
    description: 'Tools for generating diagrams from text or building highly custom data visualizations.',
    libraries: [
      {
        library: 'Mermaid.js',
        useCase: 'Quick Diagrams',
        engine: 'SVG',
        reactFriendly: 'Medium',
        complexity: 'Low',
        license: 'MIT',
        learningCurve: 'Easy',
        maxNodes: '1k+',
        supportedDemos: ['basic'],
        features: { 
          zoomPan: 'none', customNodes: 'none', edgeRouting: 'full', largeData: 'none', a11y: 'partial', interactivity: 'none',
          animation: 'none', export: 'full', stateSync: 'none', layoutEngine: 'full', virtualization: 'none', tsSupport: 'full', domAccess: 'none', undoRedo: 'none'
        },
      },
      {
        library: 'D3.js',
        useCase: 'Custom Data Vis',
        engine: 'SVG/Canvas/HTML',
        reactFriendly: 'Low (Manual DOM)',
        complexity: 'High',
        license: 'BSD-3',
        learningCurve: 'Steep',
        maxNodes: '100k+',
        supportedDemos: ['basic', 'custom', 'scale'],
        features: { 
          zoomPan: 'full', customNodes: 'full', edgeRouting: 'full', largeData: 'full', a11y: 'partial', interactivity: 'full',
          animation: 'full', export: 'full', stateSync: 'none', layoutEngine: 'full', virtualization: 'partial', tsSupport: 'full', domAccess: 'full', undoRedo: 'none'
        },
      },
    ],
  },
];
