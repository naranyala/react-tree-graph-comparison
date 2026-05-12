import { expect, test, describe } from "bun:test";
import { render, screen } from "@testing-library/react";
import { describe as describeLib } from "vitest";
import App from "../src/App";
import { TOPICS, categories } from "../src/constants";

// Mocking CSS imports for Bun test environment
// Bun usually handles this, but for clarity in tests:
import "@testing-library/jest-dom";

describe("App Component Logic", () => {
  test("renders the main title", () => {
    render(<App />);
    expect(screen.getByText(/React Tree & Graph Library Comparison/i)).toBeInTheDocument();
  });

  test("renders the correct number of feature columns based on TOPICS", () => {
    render(<App />);
    const headers = screen.getAllByRole('columnheader');
    // 1 for Library name + number of topics
    expect(headers.length).toBe(1 + TOPICS.length);
  });

  test("renders the correct number of library rows", () => {
    render(<App />);
    const totalLibs = categories.flatMap(c => c.libraries).length;
    const rows = screen.getAllByRole('row');
    // Subtract header rows
    const dataRows = rows.filter(row => row.querySelector('td'));
    expect(dataRows.length).toBe(totalLibs);
  });

  test("triggers demo view when a 'View Demo' button is clicked", () => {
    render(<App />);
    const viewButtons = screen.getAllByText(/View Demo/i);
    viewButtons[0].click();
    
    // The "Back to Comparison" button should now be visible
    expect(screen.getByText(/Back to Comparison/i)).toBeInTheDocument();
  });
});
