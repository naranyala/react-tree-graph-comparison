import React from 'react';
import { Tree } from 'react-arborist';

const data = [
  {
    id: '1',
    name: 'Root',
    children: [
      { id: '2', name: 'Child 1' },
      {
        id: '3',
        name: 'Child 2',
        children: [{ id: '4', name: 'Grandchild 1' }],
      },
    ],
  },
];

const ArboristDemo = () => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      <h3>React Arborist Demo</h3>
      <div style={{ width: '400px', height: '200px' }}>
        <Tree initialData={data} width={400} height={200} indent={20}>
          {(node) => (
            <div style={{ padding: '2px 5px', cursor: 'pointer' }}>
              {node.isFocused ? '👉 ' : ''}
              {node.data.name}
            </div>
          )}
        </Tree>
      </div>
    </div>
  );
};

export default ArboristDemo;
