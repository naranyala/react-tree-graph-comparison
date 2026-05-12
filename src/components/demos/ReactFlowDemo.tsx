import { Background, Controls, ReactFlow } from '@xyflow/react';
import React from 'react';
import { generateGraphData } from '../../utils/dataGenerator';

interface ReactFlowDemoProps {
  nodes?: number;
  demoId?: string;
}

const ReactFlowDemo = ({ nodes, demoId }: ReactFlowDemoProps) => {
  const { nodes: gNodes, edges: gEdges } = nodes
    ? generateGraphData(nodes)
    : {
        nodes: [{ id: '1' }, { id: '2' }, { id: '3' }],
        edges: [
          { source: '1', target: '2' },
          { source: '2', target: '3' },
        ],
      };

  const initialNodes = gNodes.map((n) => ({
    id: n.id,
    data: { label: n.label },
    style: demoId === 'custom' ? { background: '#f59e0b', color: 'white' } : {},
  }));

  const initialEdges = gEdges.map((e) => ({
    id: `e-${e.source}-${e.target}`,
    source: e.source,
    target: e.target,
  }));

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        maxHeight: '80vh',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <ReactFlow nodes={initialNodes} edges={initialEdges} fitView />
    </div>
  );
};

export default ReactFlowDemo;
