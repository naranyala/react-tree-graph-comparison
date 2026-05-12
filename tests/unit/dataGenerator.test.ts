import { expect, test } from 'bun:test';
import {
  generateGraphData,
  generateTreeData,
  type TreeNode,
} from '../src/utils/dataGenerator';

const countNodes = (node: TreeNode): number => {
  return (
    1 +
    (node.children?.reduce(
      (acc: number, child: TreeNode) => acc + countNodes(child),
      0,
    ) || 0)
  );
};

test('generateTreeData creates the correct number of nodes', () => {
  const numNodes = 100;
  const data = generateTreeData(numNodes);
  expect(countNodes(data)).toBe(numNodes);
  expect(data.name).toBe('Root');
});

test('generateTreeData handles edge cases', () => {
  expect(countNodes(generateTreeData(1))).toBe(1);
  expect(countNodes(generateTreeData(0))).toBe(1);
  expect(countNodes(generateTreeData(-10))).toBe(1);
});

test('generateTreeData creates a valid hierarchy (no cycles)', () => {
  const numNodes = 50;
  const data = generateTreeData(numNodes);
  const visited = new Set();

  const checkCycles = (node: TreeNode) => {
    if (visited.has(node)) throw new Error('Cycle detected');
    visited.add(node);
    node.children?.forEach(checkCycles);
  };

  expect(() => checkCycles(data)).not.toThrow();
});

test('generateGraphData creates the correct number of nodes and edges', () => {
  const numNodes = 50;
  const { nodes, edges } = generateGraphData(numNodes);
  expect(nodes.length).toBe(numNodes);
  expect(edges.length).toBe(numNodes > 0 ? numNodes - 1 : 0);

  edges.forEach((edge) => {
    expect(nodes.find((n) => n.id === edge.source)).toBeDefined();
    expect(nodes.find((n) => n.id === edge.target)).toBeDefined();
  });
});

test('generateGraphData handles edge cases', () => {
  expect(generateGraphData(1).nodes.length).toBe(1);
  expect(generateGraphData(1).edges.length).toBe(0);
  expect(generateGraphData(0).nodes.length).toBe(0);
  expect(generateGraphData(0).edges.length).toBe(0);
});

test('generateGraphData produces a connected structure', () => {
  const numNodes = 20;
  const { nodes, edges } = generateGraphData(numNodes);

  // Since it's generated as a tree-like graph (each node i connects to some j < i),
  // it should be connected.
  const reachable = new Set([nodes[0].id]);
  let changed = true;
  while (changed) {
    changed = false;
    edges.forEach((edge) => {
      if (reachable.has(edge.source) && !reachable.has(edge.target)) {
        reachable.add(edge.target);
        changed = true;
      } else if (reachable.has(edge.target) && !reachable.has(edge.source)) {
        reachable.add(edge.source);
        changed = true;
      }
    });
  }
  expect(reachable.size).toBe(numNodes);
});
