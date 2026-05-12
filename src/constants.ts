import { Category } from './types';

export const TOPICS = [
  { id: 'zoomPan', label: 'Zoom & Pan' },
  { id: 'customNodes', label: 'Custom Nodes' },
  { id: 'edgeRouting', label: 'Edge Routing' },
  { id: 'largeData', label: 'Scale/Perf' },
  { id: 'a11y', label: 'Accessibility' },
  { id: 'interactivity', label: 'Interactivity' },
  { id: 'stateSync', label: 'React State Sync' },
  { id: 'layoutEngine', label: 'Layout Engines' },
  { id: 'virtualization', label: 'Virtualization' },
  { id: 'tsSupport', label: 'TS Support' },
  { id: 'domAccess', label: 'React-in-Node' },
  { id: 'bundleSize', label: 'Bundle Size' },
  { id: 'algorithms', label: 'Graph Algorithms' },
  { id: 'dynamicUpdates', label: 'Dynamic Updates' },
  { id: 'stylingMode', label: 'Styling Paradigm' },
  { id: 'exportSupport', label: 'Export Options' },
];

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
        features: { 
          zoomPan: 'full', customNodes: 'partial', edgeRouting: 'full', largeData: 'partial', a11y: 'none', interactivity: 'full',
          stateSync: 'partial', layoutEngine: 'full', virtualization: 'none', tsSupport: 'full', domAccess: 'none', bundleSize: 'medium',
          algorithms: 'full', dynamicUpdates: 'partial', stylingMode: 'partial', exportSupport: 'full'
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
        features: { 
          zoomPan: 'full', customNodes: 'full', edgeRouting: 'full', largeData: 'full', a11y: 'none', interactivity: 'full',
          stateSync: 'partial', layoutEngine: 'full', virtualization: 'partial', tsSupport: 'full', domAccess: 'partial', bundleSize: 'large',
          algorithms: 'full', dynamicUpdates: 'full', stylingMode: 'full', exportSupport: 'full'
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
        features: { 
          zoomPan: 'full', customNodes: 'partial', edgeRouting: 'partial', largeData: 'partial', a11y: 'none', interactivity: 'full',
          stateSync: 'partial', layoutEngine: 'partial', virtualization: 'none', tsSupport: 'partial', domAccess: 'none', bundleSize: 'medium',
          algorithms: 'partial', dynamicUpdates: 'partial', stylingMode: 'partial', exportSupport: 'partial'
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
        features: { 
          zoomPan: 'full', customNodes: 'partial', edgeRouting: 'none', largeData: 'full', a11y: 'none', interactivity: 'full',
          stateSync: 'full', layoutEngine: 'partial', virtualization: 'full', tsSupport: 'full', domAccess: 'partial', bundleSize: 'medium',
          algorithms: 'none', dynamicUpdates: 'full', stylingMode: 'partial', exportSupport: 'partial'
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
        features: { 
          zoomPan: 'full', customNodes: 'partial', edgeRouting: 'partial', largeData: 'full', a11y: 'partial', interactivity: 'partial',
          stateSync: 'partial', layoutEngine: 'partial', virtualization: 'partial', tsSupport: 'full', domAccess: 'none', bundleSize: 'large',
          algorithms: 'partial', dynamicUpdates: 'partial', stylingMode: 'partial', exportSupport: 'full'
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
        features: { 
          zoomPan: 'full', customNodes: 'partial', edgeRouting: 'none', largeData: 'full', a11y: 'none', interactivity: 'partial',
          stateSync: 'partial', layoutEngine: 'none', virtualization: 'full', tsSupport: 'full', domAccess: 'none', bundleSize: 'medium',
          algorithms: 'none', dynamicUpdates: 'partial', stylingMode: 'partial', exportSupport: 'partial'
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
        features: { 
          zoomPan: 'none', customNodes: 'full', edgeRouting: 'none', largeData: 'full', a11y: 'partial', interactivity: 'full',
          stateSync: 'full', layoutEngine: 'none', virtualization: 'full', tsSupport: 'full', domAccess: 'full', bundleSize: 'small',
          algorithms: 'none', dynamicUpdates: 'full', stylingMode: 'full', exportSupport: 'partial'
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
        features: { 
          zoomPan: 'none', customNodes: 'full', edgeRouting: 'none', largeData: 'full', a11y: 'full', interactivity: 'full',
          stateSync: 'full', layoutEngine: 'none', virtualization: 'full', tsSupport: 'full', domAccess: 'full', bundleSize: 'small'
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
        features: { 
          zoomPan: 'full', customNodes: 'partial', edgeRouting: 'partial', largeData: 'partial', a11y: 'none', interactivity: 'partial',
          stateSync: 'full', layoutEngine: 'full', virtualization: 'none', tsSupport: 'full', domAccess: 'partial', bundleSize: 'small'
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
        features: { 
          zoomPan: 'full', customNodes: 'full', edgeRouting: 'partial', largeData: 'partial', a11y: 'partial', interactivity: 'full',
          stateSync: 'full', layoutEngine: 'partial', virtualization: 'partial', tsSupport: 'full', domAccess: 'full', bundleSize: 'medium'
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
        features: { 
          zoomPan: 'full', customNodes: 'full', edgeRouting: 'full', largeData: 'full', a11y: 'partial', interactivity: 'full',
          stateSync: 'partial', layoutEngine: 'full', virtualization: 'partial', tsSupport: 'full', domAccess: 'full', bundleSize: 'large'
        },
      },
      {
        library: 'JointJS',
        useCase: 'Professional Flowcharts',
        engine: 'SVG',
        reactFriendly: 'Low',
        complexity: 'High',
        license: 'Mozilla Public License',
        learningCurve: 'Steep',
        maxNodes: '10k+',
        features: { 
          zoomPan: 'full', customNodes: 'full', edgeRouting: 'full', largeData: 'partial', a11y: 'none', interactivity: 'full',
          stateSync: 'none', layoutEngine: 'full', virtualization: 'none', tsSupport: 'partial', domAccess: 'partial', bundleSize: 'large'
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
        features: { 
          zoomPan: 'none', customNodes: 'none', edgeRouting: 'full', largeData: 'none', a11y: 'partial', interactivity: 'none',
          stateSync: 'none', layoutEngine: 'full', virtualization: 'none', tsSupport: 'full', domAccess: 'none', bundleSize: 'medium'
        },
      },
      {
        library: 'D3.js',
        useCase: 'Custom Data Vis',
        engine: 'SVG/Canvas/HTML',
        reactFriendly: 'Low (Manual DOM)',
        complexity: 'High',
        license: 'BSD-3-Clause',
        learningCurve: 'Steep',
        maxNodes: '100k+',
        features: { 
          zoomPan: 'full', customNodes: 'full', edgeRouting: 'full', largeData: 'full', a11y: 'partial', interactivity: 'full',
          stateSync: 'none', layoutEngine: 'full', virtualization: 'partial', tsSupport: 'full', domAccess: 'full', bundleSize: 'medium'
        },
      },
    ],
  },
];
