import React, { useEffect, useRef } from 'react';
import { DataSet } from 'vis-data';
import { Network } from 'vis-network';

const VisNetworkDemo = () => {
  const visJsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visJsContainerRef.current) return;

    const nodes = new DataSet([
      { id: 1, label: 'Node 1' },
      { id: 2, label: 'Node 2' },
      { id: 3, label: 'Node 3' },
      { id: 4, label: 'Node 4' },
      { id: 5, label: 'Node 5' },
    ]);

    const edges = new DataSet([
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
      { from: 3, to: 5 },
    ]);

    const data = { nodes, edges };
    const options = {
      nodes: {
        shape: 'dot',
        size: 16,
        color: {
          background: '#4f46e5',
          border: '#4338ca',
        },
        font: {
          color: '#111827',
        },
      },
      edges: {
        color: '#cbd5e1',
        width: 2,
      },
      physics: {
        enabled: true,
      },
    };

    const network = new Network(visJsContainerRef.current, data, options);

    return () => {
      network.destroy();
    };
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '500px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <div ref={visJsContainerRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default VisNetworkDemo;
