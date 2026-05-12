import { Graph } from '@antv/g6';
import React, { useEffect, useRef } from 'react';

const G6Demo = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const graph = new Graph({
      container: containerRef.current,
      width: 400,
      height: 200,
      layout: {
        type: 'force',
      },
      node: {
        style: {
          fill: '#C6E5FF',
          stroke: '#5B8FF9',
        },
      },
      edge: {
        style: {
          stroke: '#A3B1BF',
        },
      },
    });

    const data = {
      nodes: [{ id: 'node1' }, { id: 'node2' }, { id: 'node3' }],
      edges: [
        { source: 'node1', target: 'node2' },
        { source: 'node2', target: 'node3' },
      ],
    };

    graph.setData(data);
    graph.render();

    return () => {
      graph.destroy();
    };
  }, []);

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      <h3>AntV G6 Demo</h3>
      <div
        ref={containerRef}
        style={{ width: '400px', height: '200px', background: '#f9f9f9' }}
      />
    </div>
  );
};

export default G6Demo;
