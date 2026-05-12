import { test, expect } from '@playwright/test';

const LIBRARIES = [
  'Cytoscape.js',
  'AntV G6',
  'Vis-network',
  'React Force Graph',
  'Apache ECharts',
  'Sigma.js',
  'React Arborist',
  'React Complex Tree',
  'React D3 Tree',
  'React Flow',
  'Mermaid.js',
  'D3.js',
];

const NODE_COUNTS = [100, 1000, 5000];

for (const lib of LIBRARIES) {
  for (const nodes of NODE_COUNTS) {
    test(`Performance: ${lib} with ${nodes} nodes`, async ({ page }) => {
      const url = `http://localhost:5173/?benchmark=true&library=${encodeURIComponent(lib)}&nodes=${nodes}`;
      
      const start = Date.now();
      await page.goto(url);
      
      // Wait for the demo container to be visible
      await page.waitForSelector('.demo-container', { timeout: 30000 });
      
      const end = Date.now();
      const loadTime = end - start;
      
      console.log(`${lib} - ${nodes} nodes: ${loadTime}ms`);
      
      expect(loadTime).toBeLessThan(15000); // Threshold: 15s
    });
  }
}
