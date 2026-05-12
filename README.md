# React Tree & Graph Library Comparison

A comprehensive interactive comparison of the most popular React-compatible libraries for visualizing trees, graphs, and network topologies. This project helps developers choose the right tool based on their specific use case, performance requirements, and desired level of interactivity.

## 🚀 Features

- **Comparative Analysis**: Side-by-side comparison of libraries across multiple categories.
- **Feature Support Matrix**: Detailed breakdown of capabilities like Zoom & Pan, Custom Styling, and Accessibility.
- **Live Demos**: Interactive examples for each integrated library to test real-world behavior.
- **Categorized Guidance**: Libraries are grouped by intent (e.g., Network Analysis vs. Workflow Editors).

## 📊 Library Comparison

### Network & Graph Analysis
*Focused on analyzing relationships, connectivity, and complex network topologies.*

| Library | Primary Use Case | Engine | React Integration | Complexity |
| :--- | :--- | :--- | :--- | :--- |
| **Cytoscape.js** | Graph Analysis | Canvas | Medium | Medium |
| **AntV G6** | Enterprise Graphs | Canvas | Medium | Medium |
| **Vis-network** | Interactive Networks | Canvas | Medium | Low |
| **React Force Graph** | Large Networks | Canvas/WebGL | High | Medium |
| **Apache ECharts** | Multi-purpose Charts | Canvas/SVG | Medium | Medium |
| **Sigma.js** | Huge Datasets | WebGL | Medium | Medium |

### Hierarchical & Tree Views
*For exploring parent-child relationships, file systems, and organizational charts.*

| Library | Primary Use Case | Engine | React Integration | Complexity |
| :--- | :--- | :--- | :--- | :--- |
| **React Arborist** | Tree View/Explorer | HTML | High | Low |
| **React Complex Tree** | Accessible Tree Views | HTML | High | Medium |
| **React D3 Tree** | Visual Tree Hierarchy | SVG | High | Low |

### Workflow & Node Editors
*Designed for building visual programming interfaces, flowcharts, and state machines.*

| Library | Primary Use Case | Engine | React Integration | Complexity |
| :--- | :--- | :--- | :--- | :--- |
| **React Flow** | Node Editors | SVG/HTML | High | Medium |

### Automated & Custom Visualization
*Tools for generating diagrams from text or building highly custom data visualizations.*

| Library | Primary Use Case | Engine | React Integration | Complexity |
| :--- | :--- | :--- | :--- | :--- |
| **Mermaid.js** | Quick Diagrams | SVG | Medium | Low |
| **D3.js** | Custom Data Vis | SVG/Canvas/HTML | Low | High |

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler**: [Rspack](https://rspack.rs/)
- **Linting & Formatting**: [Biome](https://biomejs.dev/)
- **Package Manager**: [Bun](https://bun.sh/)

## 🏃 Getting Started

### Prerequisites

Ensure you have [Bun](https://bun.sh/) installed on your machine.

### Installation

```bash
bun install
```

### Development

Start the development server:

```bash
bun run dev
```

### Build & Preview

Build the application for production:

```bash
bun run build
```

Preview the production build locally:

```bash
bun run preview
```

### Code Quality

Lint the codebase:

```bash
bun run lint
```

Format the codebase:

```bash
bun run format
```
