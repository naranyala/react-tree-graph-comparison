import { useState, Suspense, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './App.css';

import { TOPICS, categories } from './constants';
import { DEMO_MAP } from './demoMap';
import { SupportIcon } from './components/ui/SupportIcon';
import { FEATURE_DEFINITIONS } from './schema';
import type { LibraryFeatures } from './types';
import README_CONTENT from '../README.md';
import { getRankedLibraries } from './utils/scoring';

function App() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const rankedLibs = useMemo(() => getRankedLibraries(categories), []);

  const getRank = (libName: string) => {
    const index = rankedLibs.findIndex(l => l.library === libName);
    return index !== -1 ? index + 1 : null;
  };

  const triggerError = () => {
    throw new Error('Test error triggered from App component!');
  };

  const findDemo = (libraryName: string) => {
    const DemoComponent = DEMO_MAP[libraryName];
    return DemoComponent ? <DemoComponent /> : null;
  };

  return (
    <div className="app-container">
      <div className="header">
        <div style={{ fontSize: '1.2rem', fontWeight: '600' }}>Documentation Mode</div>
        <button type="button" className="btn-error" onClick={triggerError}>
          🚨 Trigger Test Error
        </button>
      </div>

      <div className="markdown-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {README_CONTENT}
        </ReactMarkdown>
      </div>

      <section className="demos-gallery">
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Interactive Demos</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Click a library to launch its live demo in the drawer.
          </p>
        </div>
        
        <div className="demo-grid">
          {categories.flatMap(cat => cat.libraries).map((lib) => {
            const rank = getRank(lib.library);
            return (
              <button 
                key={lib.library} 
                className="btn-demo-card" 
                onClick={() => setActiveDemo(lib.library)}
              >
                <div className="card-icon">
                  {rank && rank <= 3 ? '🏆' : '🚀'}
                </div>
                <div className="card-info">
                  <span className="card-name">
                    {lib.library} {rank && <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>(Rank #{rank})</span>}
                  </span>
                  <span className="card-usecase">{lib.useCase}</span>
                </div>
                <span className="card-arrow">→</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="research-summary" style={{ 
        marginTop: '64px', 
        padding: '32px', 
        backgroundColor: 'var(--bg-secondary)', 
        borderRadius: '16px',
        border: '1px solid var(--border-color)'
      }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '24px' }}>Research Summary & Final Verdict</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div style={{ padding: '20px', backgroundColor: 'var(--bg-primary)', borderRadius: '12px', borderLeft: '4px solid #4ade80' }}>
            <h3 style={{ color: '#4ade80', marginBottom: '8px' }}>🏆 The Winner: React Flow</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              Best for most React apps. Perfect balance of <strong>DX, performance, and flexibility</strong>. 
              The declarative nature makes it the industry standard for modern node-based UIs.
            </p>
          </div>

          <div style={{ padding: '20px', backgroundColor: 'var(--bg-primary)', borderRadius: '12px', borderLeft: '4px solid #60a5fa' }}>
            <h3 style={{ color: '#60a5fa', marginBottom: '8px' }}>🥈 Specialized Alternatives</h3>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li><strong>Sigma.js</strong>: Use for massive datasets (100k+ nodes).</li>
              <li><strong>Cytoscape.js</strong>: Use for deep graph theory analysis.</li>
              <li><strong>React Complex Tree</strong>: Use for A11y-first hierarchies.</li>
            </ul>
          </div>

          <div style={{ padding: '20px', backgroundColor: 'var(--bg-primary)', borderRadius: '12px', borderLeft: '4px solid #f87171' }}>
            <h3 style={{ color: '#f87171', marginBottom: '8px' }}>⚠️ Caution / Avoid</h3>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li><strong>D3.js</strong>: Avoid for standard graphs due to massive boilerplate.</li>
              <li><strong>Mermaid.js</strong>: Avoid for interactive applications.</li>
            </ul>
          </div>
        </div>
      </section>

      {activeDemo && (

        <>
          <div className="drawer-overlay" onClick={() => setActiveDemo(null)} />
          <div className="demo-drawer">
            <div className="drawer-handle" onClick={() => setActiveDemo(null)} />
            <div className="demo-panel-header">
              <h3 style={{ margin: 0 }}>{activeDemo} Demo</h3>
              <button 
                type="button" 
                className="btn-close-demo" 
                onClick={() => setActiveDemo(null)}
              >
                Close ✕
              </button>
            </div>
            <div className="demo-container">
              <Suspense fallback={<div style={{ color: 'var(--text-muted)' }}>Loading Demo...</div>}>
                {findDemo(activeDemo)}
              </Suspense>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

