export interface TreeNode {
  name: string;
  children?: TreeNode[];
}

export interface GraphNode {
  id: string;
  label?: string;
}

export interface GraphEdge {
  id: string;
  source: string;
  target: string;
}

export const generateTreeData = (numNodes: number): TreeNode => {
  const root: TreeNode = { name: 'Root', children: [] };
  const nodes: TreeNode[] = [root];

  for (let i = 1; i < numNodes; i++) {
    const node: TreeNode = { name: `Node ${i}` };
    const parent = nodes[Math.floor(Math.random() * nodes.length)];
    if (!parent.children) parent.children = [];
    parent.children.push(node);
    nodes.push(node);
  }

  return root;
};

export const generateGraphData = (numNodes: number) => {
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];

  for (let i = 0; i < numNodes; i++) {
    nodes.push({ id: `n${i}`, label: `Node ${i}` });
  }

  for (let i = 1; i < numNodes; i++) {
    edges.push({
      id: `e${i}`,
      source: `n${Math.floor(Math.random() * i)}`,
      target: `n${i}`,
    });
  }

  return { nodes, edges };
};
