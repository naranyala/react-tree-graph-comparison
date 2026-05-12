# React Tree & Graph Library Comparison

A professional, interactive benchmark and comparison tool for the most popular React-compatible libraries used for visualizing trees, graphs, and complex network topologies. This project provides a data-driven approach to help developers choose the right visualization engine based on technical constraints and UX requirements.

## 💡 How to use this guide

1. **Analyze the Tables**: Compare libraries based on their primary use case, rendering engine, and React integration fit.
2. **Deep-Dive Tech Specs**: Check the technical tables for licensing, learning curves, and maximum node capacity.
3. **Evaluate Capabilities**: Use the feature matrices to see which libraries support specific needs like **Virtualization**, **Accessibility**, or **React-in-Node** custom styling.
4. **Try Live Demos**: Click the **"View Demo"** button next to any library to launch an interactive example in the drawer and test the real-world behavior.

## 📊 Library Comparison

### Network & Graph Analysis
*Focused on analyzing relationships, connectivity, and complex network topologies.*

| Library | Primary Use Case | Engine | React Fit | Complexity | License | Learning Curve | Max Nodes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Cytoscape.js** | Graph Analysis | Canvas | Medium | Medium | MIT | Moderate | 10k+ |
| **AntV G6** | Enterprise Graphs | Canvas | Medium | Medium | MIT | Steep | 50k+ |
| **Vis-network** | Interactive Networks | Canvas | Medium | Low | Apache 2.0 | Easy | 5k+ |
| **React Force Graph** | Large Networks | Canvas/WebGL | High | Medium | MIT | Moderate | 100k+ |
| **Apache ECharts** | Multi-purpose Charts | Canvas/SVG | Medium | Medium | Apache 2.0 | Moderate | 100k+ |
| **Sigma.js** | Huge Datasets | WebGL | Medium | Medium | MIT | Steep | 1M+ |

### Hierarchical & Tree Views
*For exploring parent-child relationships, file systems, and organizational charts.*

| Library | Primary Use Case | Engine | React Fit | Complexity | License | Learning Curve | Max Nodes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **React Arborist** | Tree View/Explorer | HTML | High | Low | MIT | Easy | 10k+ |
| **React Complex Tree** | Accessible Tree Views | HTML | High | Medium | MIT | Moderate | 10k+ |
| **React D3 Tree** | Visual Tree Hierarchy | SVG | High | Low | MIT | Moderate | 2k+ |

### Workflow & Node Editors
*Designed for building visual programming interfaces, flowcharts, and state machines.*

| Library | Primary Use Case | Engine | React Fit | Complexity | License | Learning Curve | Max Nodes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **React Flow** | Node Editors | SVG/HTML | High | Medium | MIT | Moderate | 10k+ |
| **AntV X6** | Diagramming Tool | SVG/HTML | Medium | High | MIT | Steep | 20k+ |
| **JointJS** | Professional Flowcharts | SVG | Low | High | MPL | Steep | 10k+ |

### Automated & Custom Visualization
*Tools for generating diagrams from text or building highly custom data visualizations.*

| Library | Primary Use Case | Engine | React Fit | Complexity | License | Learning Curve | Max Nodes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Mermaid.js** | Quick Diagrams | SVG | Medium | Low | MIT | Easy | 1k+ |
| **D3.js** | Custom Data Vis | SVG/Canvas/HTML | Low | High | BSD-3 | Steep | 100k+ |

## 🎯 Decision Guide: Which one to choose?

- **For Massive Data (100k+ nodes)** $\rightarrow$ Use **Sigma.js** or **React Force Graph** (WebGL).
- **For Complex Workflows/Editors** $\rightarrow$ Use **React Flow** or **AntV X6**.
- **For Highly Accessible Trees** $\rightarrow$ Use **React Complex Tree**.
- **For Quick Documentation/Diagrams** $\rightarrow$ Use **Mermaid.js**.
- **For Full Creative Control** $\rightarrow$ Use **D3.js**.
