import React, { useState } from 'react';
import { type TItem, Tree } from 'react-complex-tree';
import 'react-complex-tree/lib/style.css';
import { generateTreeData } from '../../utils/dataGenerator';

interface ComplexTreeDemoProps {
  nodes?: number;
  demoId?: string;
}

const ComplexTreeDemo = ({ nodes, demoId }: ComplexTreeDemoProps) => {
  const treeData = nodes
    ? generateTreeData(nodes)
    : [
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

  const [itemIds, setItemIds] = useState<string[]>([]);

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
      <Tree
        rootId="root"
        items={treeData as any}
        selectedItems={itemIds}
        onSelect={(items) => setItemIds(items)}
        treeLabel={({ item }) => item.data as string}
        renderItem={({ item, depth, childrenCount }) => (
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
      <div
        style={{
          padding: '10px',
          fontSize: '0.8rem',
          color: '#666',
          borderTop: '1px solid #eee',
        }}
      >
        Selected: {itemIds.join(', ') || 'None'}
      </div>
    </div>
  );
};

export default ComplexTreeDemo;
