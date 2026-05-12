import Graph from 'graphology';
import React, { useEffect, useRef } from 'react';
import Sigma from 'sigma';
import { generateGraphData } from '../../utils/dataGenerator';

interface SigmaDemoProps {
  nodes?: number;
}

const SigmaDemo = ({ nodes }: SigmaDemoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const graph = new Graph();
    
    if (nodes) {
      const { nodes: gNodes, edges: gEdges } = generateGraphData(nodes);
      gNodes.forEach(n => {
        graph.addNode(n.id, {
          label: n.label,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 10,
          color: '#4f46e5',
        });
      });
      gEdges.forEach(e => {
        graph.addEdge(e.source, e.target);
      });
    } else {
      graph.addNode('n1', {
        label: 'Node 1',
        x: 0,
        y: 0,
        size: 10,
        color: '#4f46e5',
      });
      graph.addNode('n2', {
        label: 'Node 2',
        x: 1,
        y: 1,
        size: 10,
        color: '#4f46e5',
      });
      graph.addNode('n3', {
        label: 'Node 3',
        x: 1,
        y: -1,
        size: 10,
        color: '#4f46e5',
      });
      graph.addEdge('n1', 'n2');
      graph.addEdge('n1', 'n3');
      graph.addEdge('n2', 'n3');
    }

    const sigma = new Sigma(graph, containerRef.current, {
      renderEdgeLabels: true,
    });

    return () => {
      sigma.kill();
    };
  }, [nodes]);

  return (
    <div
      style={{
        width: '100%',
        height: '500px',
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

export default SigmaDemo;
