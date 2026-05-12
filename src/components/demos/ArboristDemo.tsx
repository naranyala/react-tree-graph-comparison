import React from 'react';
import { SimpleTree as Arborist } from 'react-arborist';
import { generateTreeData } from '../../utils/dataGenerator';

interface ArboristDemoProps {
  nodes?: number;
  demoId?: string;
}

const ArboristDemo = ({ nodes, demoId }: ArboristDemoProps) => {
  const data = nodes ? generateTreeData(nodes) : { name: 'Root', children: [] };

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
      <Arborist
        data={data}
        onMove={({ id, parentId }) => console.log('Moved', id, parentId)}
        style={{ height: '100%' }}
      >
        {({ nodes, isOpen, level }) => (
          <div style={{ paddingLeft: `${level * 16}px` }}>
            {nodes.map((node) => (
              <div key={node.id} style={{ padding: '4px' }}>
                {node.isLeaf ? '• ' : '▸ '} {node.data.name}
              </div>
            ))}
          </div>
        )}
      </Arborist>
    </div>
  );
};

export default ArboristDemo;
