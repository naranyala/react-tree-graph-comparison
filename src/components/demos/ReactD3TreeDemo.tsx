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
}

const ReactD3TreeDemo = ({ nodes }: ReactD3TreeDemoProps) => {
  const data = nodes ? generateTreeData(nodes) : defaultTreeData;
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
      <Tree
        data={data}
        orientation="vertical"
        pathFunc="step"
        translate={{ x: 200, y: 50 }}
        nodeSize={{ x: 150, y: 100 }}
      />
    </div>
  );
};

export default ReactD3TreeDemo;
