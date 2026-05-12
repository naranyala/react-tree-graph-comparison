import { Graph } from '@antv/g6';
import React, { useEffect, useRef } from 'react';
import { generateGraphData } from '../../utils/dataGenerator';

interface G6DemoProps {
  nodes?: number;
  demoId?: string;
}

const G6Demo = ({ nodes, demoId }: G6DemoProps) => {
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
      edges: gEdges.map((e) => ({ source: e.source, target: e.target })),
    };

    const graph = new Graph({
      container: containerRef.current,
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
      modes: {
        default: ['drag-canvas', 'zoom-canvas', 'drag-node'],
      },
      defaultNode: {
        size: 30,
        style: {
          fill: demoId === 'custom' ? '#f59e0b' : '#4f46e5',
        },
      },
      defaultEdge: {
        style: {
          stroke: '#ccc',
        },
      },
    });

    graph.data(data);
    graph.render();

    return () => graph.destroy();
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

export default G6Demo;
