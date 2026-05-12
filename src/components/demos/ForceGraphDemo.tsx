import React from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { generateGraphData } from '../../utils/dataGenerator';

interface ForceGraphDemoProps {
  nodes?: number;
}

const ForceGraphDemo = ({ nodes }: ForceGraphDemoProps) => {
  const { nodes: gNodes, edges: gEdges } = nodes 
    ? generateGraphData(nodes) 
    : { 
        nodes: [{ id: '1' }, { id: '2' }, { id: '3' }], 
        edges: [{ source: '1', target: '2' }, { source: '2', target: '3' }] 
      };

  const data = {
    nodes: gNodes,
    links: gEdges,
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      <h3>React Force Graph Demo</h3>
      <div style={{ width: '400px', height: '200px' }}>
        <ForceGraph2D graphData={data} />
      </div>
    </div>
  );
};

export default ForceGraphDemo;
