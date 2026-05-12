export const FEATURE_RUBRIC = {
  zoomPan: {
    full: 'Native, smooth zooming and panning with inertia and bounds support.',
    partial: 'Basic zooming/panning available but lacks inertia or boundaries.',
    none: 'No built-in zoom/pan capabilities.',
  },
  customNodes: {
    full: 'Allows rendering arbitrary React components as nodes with full state access.',
    partial: 'Allows custom HTML/SVG but limited React integration.',
    none: 'Only primitive shapes (circles/rectangles) supported.',
  },
  edgeRouting: {
    full: 'Multiple routing options (Bezier, Step, Straight) with obstacle avoidance.',
    partial: 'Basic line routing available (Straight/Bezier).',
    none: 'No customizable edge routing.',
  },
  largeData: {
    full: 'Stable rendering of 10k+ nodes with 60FPS interaction.',
    partial:
      'Stable up to 1k-5k nodes; performance degrades significantly beyond.',
    none: 'Performance issues visible with < 500 nodes.',
  },
  a11y: {
    full: 'Full ARIA support, keyboard navigation, and screen reader compatibility.',
    partial: 'Some basic ARIA labels; limited keyboard support.',
    none: 'No accessibility features implemented.',
  },
  interactivity: {
    full: 'Full suite of events (drag, drop, click, hover) with custom handler support.',
    partial: 'Basic click/hover events; limited drag-and-drop.',
    none: 'Static visualization only.',
  },
  stateSync: {
    full: 'Fully declarative. Prop changes trigger efficient partial re-renders.',
    partial: "Requires manual 'update' calls to sync React state with engine.",
    none: 'Imperative only; no React state synchronization.',
  },
  layoutEngine: {
    full: 'Multiple built-in layouts (Force, Tree, Circular, Dagre) with custom config.',
    partial: 'One or two basic layouts provided.',
    none: 'No built-in layout; must provide coordinates manually.',
  },
  virtualization: {
    full: 'Culls off-screen elements; handles 100k+ nodes using WebGL/Canvas.',
    partial: 'Limited virtualization or optimized rendering for medium sets.',
    none: 'Renders all elements to DOM/Canvas regardless of visibility.',
  },
  tsSupport: {
    full: 'First-class TypeScript definitions provided and maintained.',
    partial: 'Partial @types or outdated definitions.',
    none: 'No TypeScript definitions available.',
  },
  domAccess: {
    full: 'Direct access to node DOM elements for custom styling/integration.',
    partial: 'Limited access via API; cannot easily inject React components.',
    none: 'No DOM access (Pure Canvas/WebGL).',
  },
  bundleSize: {
    small: 'Under 50KB gzipped.',
    medium: '50KB - 200KB gzipped.',
    large: 'Over 200KB gzipped.',
  },
  algorithms: {
    full: 'Native implementations of Shortest Path, Centrality, and Community detection.',
    partial: 'Basic graph traversal (BFS/DFS) only.',
    none: 'No built-in analysis algorithms.',
  },
  dynamicUpdates: {
    full: 'Supports real-time adding/removing of nodes/edges without full re-render.',
    partial: 'Requires full re-render or expensive update cycle for changes.',
    none: 'Static graphs only.',
  },
  stylingMode: {
    full: 'Flexible styling via CSS, JSON schemas, or dynamic JS functions.',
    partial: 'Limited styling via a fixed set of options.',
    none: 'Hardcoded styles.',
  },
  exportSupport: {
    full: 'High-res export to SVG, PNG, and PDF.',
    partial: 'Basic screenshot or SVG export only.',
    none: 'No export capabilities.',
  },
};
