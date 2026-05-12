import cytoscape from 'cytoscape';
import React, { useEffect, useRef } from 'react';
import { generateGraphData } from '../../utils/dataGenerator';

interface CytoscapeDemoProps {
  nodes?: number;
  demoId?: string;
}

const CytoscapeDemo = ({ nodes, demoId }: CytoscapeDemoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const { nodes: gNodes, edges: gEdges } = nodes
      ? generateGraphData(nodes)
      : {
          nodes: [{ id: 'a' }, { id: 'b' }],
          edges: [{ source: 'a', target: 'b' }],
        };

    const elements = [
      ...gNodes.map((n) => ({ data: { id: n.id, label: n.label } })),
      ...gEdges.map((e) => ({
        data: {
          id: `e-${e.source}-${e.target}`,
          source: e.source,
          target: e.target,
        },
      })),
    ];

    const cy = cytoscape({
      container: containerRef.current,
      elements,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': demoId === 'custom' ? '#f59e0b' : '#4f46e5',
            label: 'data(label)',
            width: 30,
            height: 30,
          },
        },
        {
          selector: 'edge',
          style: {
            width: 3,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
          },
        },
      ],
      layout: {
        name: 'grid',
        rows: 1,
      },
    });

    return () => cy.destroy();
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

export default CytoscapeDemo;
