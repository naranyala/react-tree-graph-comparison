import { expect, test, describe } from "bun:test";
import { categories, TOPICS } from "../src/constants";

describe("Library Data Integrity", () => {
  const allLibraries = categories.flatMap(c => c.libraries);

  test("every library should have a unique name", () => {
    const names = allLibraries.map(l => l.library);
    const uniqueNames = new Set(names);
    expect(names.length).toBe(uniqueNames.size);
  });

  test("every library must provide values for all defined technical features", () => {
    allLibraries.forEach(lib => {
      TOPICS.forEach(topic => {
        const featureValue = lib.features?.[topic.id as keyof typeof lib.features];
        expect(featureValue).toBeDefined();
        expect(['full', 'partial', 'none', 'small', 'medium', 'large']).toContain(featureValue);
      });
    });
  });

  test("categories should not be empty", () => {
    expect(categories.length).toBeGreaterThan(0);
    categories.forEach(cat => {
      expect(cat.libraries.length).toBeGreaterThan(0);
    });
  });
});
