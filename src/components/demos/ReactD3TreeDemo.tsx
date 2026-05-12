import React from 'react';
import Tree from 'react-d3-tree';
import { generateTreeData } from '../../utils/dataGenerator';

const defaultTreeData = {
  name: 'Root',
  children: [
    {
      name: 'Child 1',
      children: [{ name: 'Grandchild 1.1' }, { name: 'Grandchild 1.2' }],
    },
    {
      name: 'Child 2',
      children: [{ name: 'Grandchild 2.1' }],
    },
  ],
};

interface ReactD3TreeDemoProps {
  nodes?: number;
  demoId?: string;
}

const ReactD3TreeDemo = ({ nodes, demoId }: ReactD3TreeDemoProps) => {
  const data = nodes ? generateTreeData(nodes) : defaultTreeData;

  // Feature Variants
  const getTreeProps = () => {
    switch (demoId) {
      case 'scale':
        return { nodeSize: { x: 50, y: 40 } }; // Smaller nodes to fit more
      case 'custom':
        return {
          pathFunc: 'step',
          renderCustomNode: () => <div style={{ color: 'red' }}>Custom</div>, // (conceptually)
        };
      default:
        return { pathFunc: 'step', nodeSize: { x: 150, y: 100 } };
    }
  };

  const treeProps = getTreeProps();

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
        data={data}
        orientation="vertical"
        translate={{ x: 0, y: 0 }}
        {...treeProps}
        center={true}
      />
    </div>
  );
};

export default ReactD3TreeDemo;
