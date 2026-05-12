import React, { useState } from 'react';
import { type TItem, Tree } from 'react-complex-tree';
import 'react-complex-tree/lib/style.css';

const initialData: TItem[] = [
  {
    id: 'root',
    children: [
      {
        id: 'folder_1',
        children: [
          { id: 'file_1_1', data: 'File 1.1' },
          { id: 'file_1_2', data: 'File 1.2' },
        ],
        data: 'Folder 1',
      },
      {
        id: 'folder_2',
        children: [{ id: 'file_2_1', data: 'File 2.1' }],
        data: 'Folder 2',
      },
      { id: 'file_3', data: 'File 3' },
    ],
    data: 'Root',
  },
];

const ComplexTreeDemo = () => {
  const [itemIds, setItemIds] = useState<string[]>([]);

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        border: '1px solid #ccc',
        width: '400px',
      }}
    >
      <h3>Complex Tree Demo</h3>
      <Tree
        rootId="root"
        items={initialData}
        selectedItems={itemIds}
        onSelect={(items) => setItemIds(items)}
        treeLabel={({ item }) => item.data as string}
        renderItem={({ item, depth, childrenCount, isLeaf }) => (
          <div
            style={{
              paddingLeft: `${depth * 20}px`,
              cursor: 'pointer',
              paddingTop: '4px',
              paddingBottom: '4px',
            }}
          >
            {childrenCount
              ? `📁 ${item.data as string}`
              : `📄 ${item.data as string}`}
          </div>
        )}
      />
      <div style={{ marginTop: '20px', fontSize: '0.8rem', color: '#666' }}>
        Selected: {itemIds.join(', ') || 'None'}
      </div>
    </div>
  );
};

export default ComplexTreeDemo;
