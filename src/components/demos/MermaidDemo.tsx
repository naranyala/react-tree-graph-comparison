import mermaid from 'mermaid';
import React, { useEffect, useRef } from 'react';

mermaid.initialize({ startOnLoad: false });

const MermaidDemo = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const graphDefinition = `
    graph TD
      A[Start] --> B{Is it working?}
      B -- Yes --> C[Great!]
      B -- No --> D[Check logs]
    `;

    mermaid.render('mermaid-svg', graphDefinition).then(({ svg }) => {
      if (ref.current) {
        ref.current.innerHTML = svg;
      }
    });
  }, []);

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      <h3>Mermaid.js Demo</h3>
      <div ref={ref} />
    </div>
  );
};

export default MermaidDemo;
