import { test, expect, devices } from '@playwright/test';

const LIBRARIES = [
  'Cytoscape.js', 'AntV G6', 'Vis-network', 'React Force Graph', 'Apache ECharts', 'Sigma.js',
  'React Arborist', 'React Complex Tree', 'React D3 Tree', 'React Flow', 'Mermaid.js', 'D3.js'
];

test.describe('Main Application Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
  });

  test('should render landing page with comparison table', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('React Tree & Graph Library Comparison');
    await expect(page.locator('.comparison-table')).toBeVisible();
  });

  test('should verify all library demos load without crashing', async ({ page }) => {
    for (const lib of LIBRARIES) {
      // We can navigate directly via benchmark URL to speed up and test parameters
      await page.goto(`http://localhost:5173/?benchmark=true&library=${encodeURIComponent(lib)}&nodes=10`);
      await expect(page.locator('.demo-container')).toBeVisible();
      
      // Check for common error indicators (e.g. "Application Error" from ErrorBoundary)
      const error = page.locator('text=Application Error');
      await expect(error).not.toBeVisible();
    }
  });

  test('should navigate to a demo and back using UI', async ({ page }) => {
    const viewDemoBtn = page.locator('.btn-view').first();
    await viewDemoBtn.click();
    await expect(page.locator('.demo-container')).toBeVisible();
    await page.locator('.btn-back').click();
    await expect(page.locator('text=Library Comparison')).toBeVisible();
  });

  test('should trigger error boundary and recover', async ({ page }) => {
    await page.locator('.btn-error').click();
    await expect(page.locator('text=🚨 Application Error')).toBeVisible();
    
    await page.locator('button:has-text("Try to Reset Application")').click();
    await expect(page.locator('text=Library Comparison')).toBeVisible();
    await expect(page.locator('text=🚨 Application Error')).not.toBeVisible();
  });

  test('should render feature support matrix correctly', async ({ page }) => {
    await expect(page.locator('text=Feature Support Matrix')).toBeVisible();
    const rows = page.locator('.comparison-table tbody tr');
    await expect(rows).not.toHaveCount(0);
  });
});

test.describe('Responsiveness', () => {
  const viewports = [
    { name: 'Desktop', width: 1280, height: 720 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Mobile', width: 375, height: 667 },
  ];

  for (const vp of viewports) {
    test(`should be usable on ${vp.name} (${vp.width}x${vp.height})`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('http://localhost:5173/');
      await expect(page.locator('h1')).toBeVisible();
      
      // Ensure the table container handles overflow (doesn't break layout)
      const tableContainer = page.locator('.comparison-table-container');
      await expect(tableContainer).toBeVisible();
    });
  }
});
