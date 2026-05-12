import { Background, Controls, ReactFlow } from '@xyflow/react';
import React from 'react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: 'Node 2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const ReactFlowDemo = () => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      <h3>React Flow Demo</h3>
      <div style={{ width: '400px', height: '200px' }}>
        <ReactFlow nodes={initialNodes} edges={initialEdges}>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default ReactFlowDemo;
