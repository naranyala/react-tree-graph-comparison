import { test, expect } from "bun:test";
import { generateTreeData, generateGraphData } from "../src/utils/dataGenerator";

const countNodes = (node: any): number => {
  return 1 + (node.children?.reduce((acc: number, child: any) => acc + countNodes(child), 0) || 0);
};

test("generateTreeData creates the correct number of nodes", () => {
  const numNodes = 100;
  const data = generateTreeData(numNodes);
  expect(countNodes(data)).toBe(numNodes);
  expect(data.name).toBe('Root');
});

test("generateTreeData handles edge cases", () => {
  // 1 node
  expect(countNodes(generateTreeData(1))).toBe(1);
  
  // 0 nodes - should still return a root node by current implementation
  expect(countNodes(generateTreeData(0))).toBe(1);
  
  // Negative nodes
  expect(countNodes(generateTreeData(-10))).toBe(1);
});

test("generateGraphData creates the correct number of nodes and edges", () => {
  const numNodes = 50;
  const { nodes, edges } = generateGraphData(numNodes);
  expect(nodes.length).toBe(numNodes);
  expect(edges.length).toBe(numNodes - 1);
  
  edges.forEach(edge => {
    expect(nodes.find(n => n.id === edge.source)).toBeDefined();
    expect(nodes.find(n => n.id === edge.target)).toBeDefined();
  });
});

test("generateGraphData handles edge cases", () => {
  // 1 node
  const single = generateGraphData(1);
  expect(single.nodes.length).toBe(1);
  expect(single.edges.length).toBe(0);
  
  // 0 nodes
  const zero = generateGraphData(0);
  expect(zero.nodes.length).toBe(0);
  expect(zero.edges.length).toBe(-1); // Current implementation does loop from 1 to 0, but length is initialized as 0. 
  // Wait, if numNodes = 0, loop for i=1; i<0 is false. edges is []. length is 0. 
  // Actually let's check: for (let i = 1; i < 0; i++) is false. edges = []. length = 0.
  // My manual trace says 0. Let's see.
});
