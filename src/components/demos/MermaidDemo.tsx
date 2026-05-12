import mermaid from 'mermaid';
import React, { useEffect, useRef } from 'react';

mermaid.initialize({ startOnLoad: false });

interface MermaidDemoProps {
  demoId?: string;
}

const MermaidDemo = ({ demoId }: MermaidDemoProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const getDiagram = () => {
    switch (demoId) {
      case 'custom':
        return `graph TD
  A[Start] --> B{Is it working?}
  B -- Yes --> C[Great!]
  B -- No --> D[Check logs]
  D --> B`;
      case 'scale':
        return `graph LR
  ${Array.from({ length: 10 })
    .map((_, i) => `N${i}`)
    .join(' --> ')}`;
      default:
        return `graph TD
          A[Root] --> B[Child 1]
          A --> C[Child 2]
          B --> D[Grandchild]`;
    }
  };

  useEffect(() => {
    if (ref.current) {
      const graphDefinition = getDiagram();
      mermaid.render('mermaid-svg', graphDefinition).then(({ svg }) => {
        if (ref.current) {
          ref.current.innerHTML = svg;
        }
      });
    }
  }, [demoId]);

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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div ref={ref} />
    </div>
  );
};

export default MermaidDemo;
