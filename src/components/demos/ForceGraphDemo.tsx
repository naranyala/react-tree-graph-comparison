import React from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { generateGraphData } from '../../utils/dataGenerator';

interface ForceGraphDemoProps {
  nodes?: number;
  demoId?: string;
}

const ForceGraphDemo = ({ nodes, demoId }: ForceGraphDemoProps) => {
  const { nodes: gNodes, edges: gEdges } = nodes
    ? generateGraphData(nodes)
    : {
        nodes: [{ id: '1' }, { id: '2' }, { id: '3' }],
        edges: [
          { source: '1', target: '2' },
          { source: '2', target: '3' },
        ],
      };

  const data = {
    nodes: gNodes,
    links: gEdges,
  };

  // Feature variants
  const getGraphProps = () => {
    switch (demoId) {
      case 'custom':
        return { nodeColor: () => '#ef4444', linkColor: '#9ca3af' };
      case 'interactive':
        return { nodeRelSize: 4, linkDirectionalParticles: 2 };
      default:
        return { nodeColor: '#4f46e5', linkColor: '#ccc' };
    }
  };

  const graphProps = getGraphProps();

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        width: '100%',
        height: '100%',
        maxHeight: '80vh',
        backgroundColor: 'white',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <h3>React Force Graph Demo ({demoId || 'Basic'})</h3>
      <div style={{ width: '100%', height: 'calc(100% - 40px)' }}>
        <ForceGraph2D graphData={data} {...graphProps} />
      </div>
    </div>
  );
};

export default ForceGraphDemo;
