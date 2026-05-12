import cytoscape from 'cytoscape';
import React, { useEffect, useRef } from 'react';

const CytoscapeDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cy = cytoscape({
      container: containerRef.current,
      elements: [
        { data: { id: 'a' } },
        { data: { id: 'b' } },
        { data: { id: 'ab', source: 'a', target: 'b' } },
      ],
      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#666',
            label: 'data(id)',
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
  }, []);

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      <h3>Cytoscape.js Demo</h3>
      <div
        ref={containerRef}
        style={{ width: '400px', height: '200px', background: '#f9f9f9' }}
      />
    </div>
  );
};

export default CytoscapeDemo;
