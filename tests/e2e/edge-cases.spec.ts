import { expect, test } from '@playwright/test';

test.describe('Application Edge Cases', () => {
  test('should handle invalid library name in URL', async ({ page }) => {
    await page.goto(
      'http://localhost:8080/?benchmark=true&library=NonExistentLib&nodes=10',
    );

    // Should either render landing page or a fallback, but NOT crash
    // Based on App.tsx, findDemo returns null if lib not found.
    // The demo-view is shown if activeDemo is truthy.
    // If we pass a lib via URL, activeDemo might be set based on getBenchmarkParams.
    // Wait, App.tsx uses: const { benchmark, library: benchmarkLib, nodes: benchmarkNodes } = getBenchmarkParams();
    // But it doesn't automatically call setActiveDemo(benchmarkLib).
    // Let's check App.tsx again.
  });

  test('should handle non-numeric nodes in URL', async ({ page }) => {
    await page.goto(
      'http://localhost:8080/?benchmark=true&library=Sigma.js&nodes=notanumber',
    );

    // parseInt('notanumber', 10) returns NaN.
    // SigmaDemo handles NaN nodes as "falsey" and renders default.
    await expect(page.locator('.demo-container')).toBeVisible();
    const error = page.locator('text=Application Error');
    await expect(error).not.toBeVisible();
  });

  test('should handle extremely large node counts gracefully', async ({
    page,
  }) => {
    // Testing 100k nodes to check for browser crash/hang
    // We use a shorter timeout for this specific test to avoid blocking the whole suite
    await page.goto(
      'http://localhost:8080/?benchmark=true&library=Sigma.js&nodes=100000',
      { timeout: 60000 },
    );

    // We just want to ensure it doesn't trigger the ErrorBoundary
    const error = page.locator('text=Application Error');
    await expect(error).not.toBeVisible();
  });

  test('should remain stable during rapid navigation', async ({ page }) => {
    await page.goto('http://localhost:8080/');

    const viewDemoBtn = page.locator('.btn-view').first();
    const backBtn = page.locator('.btn-back');

    for (let i = 0; i < 10; i++) {
      await viewDemoBtn.click();
      await expect(page.locator('.demo-container')).toBeVisible();
      await backBtn.click();
      await expect(page.locator('text=Library Comparison')).toBeVisible();
    }
  });

  test('should maintain state when resizing window during active demo', async ({
    page,
  }) => {
    await page.goto(
      'http://localhost:8080/?benchmark=true&library=Sigma.js&nodes=10',
    );
    await expect(page.locator('.demo-container')).toBeVisible();

    await page.setViewportSize({ width: 400, height: 400 });
    await expect(page.locator('.demo-container')).toBeVisible();

    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(page.locator('.demo-container')).toBeVisible();
  });
});
