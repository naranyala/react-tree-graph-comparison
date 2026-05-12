import React, { useEffect, useRef } from 'react';
import { Network } from 'vis-network';
import { generateGraphData } from '../../utils/dataGenerator';

interface VisNetworkDemoProps {
  nodes?: number;
  demoId?: string;
}

const VisNetworkDemo = ({ nodes, demoId }: VisNetworkDemoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

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
      nodes: gNodes.map((n) => ({ id: n.id, label: n.label })),
      edges: gEdges.map((e) => ({ from: e.source, to: e.target })),
    };

    const options: any = {
      physics: { enabled: true },
      interaction: { hover: true },
    };

    if (demoId === 'custom') {
      options.nodes = { color: { background: '#f59e0b', border: '#d97706' } };
    }

    const network = new Network(containerRef.current, data, options);

    return () => network.destroy();
  }, [nodes, demoId]);

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
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default VisNetworkDemo;
