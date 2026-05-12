import { Suspense, useEffect, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './App.css';

import { SupportIcon } from './components/ui/SupportIcon';
import { categories, TOPICS } from './constants';
import { README_CONTENT } from './content/readme';
import { DEMO_MAP, getDemosForLibrary } from './demoMap';
import { FEATURE_DEFINITIONS } from './schema';
import type { LibraryFeatures } from './types';
import { getRankedLibraries } from './utils/scoring';

function App() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [activeDemoId, setActiveDemoId] = useState<string>('basic');

  const rankedLibs = useMemo(() => getRankedLibraries(categories), []);

  const getRank = (libName: string) => {
    const index = rankedLibs.findIndex((l) => l.library === libName);
    return index !== -1 ? index + 1 : null;
  };

  const triggerError = () => {
    throw new Error('Test error triggered from App component!');
  };

  const findDemo = (libraryName: string) => {
    const demos = getDemosForLibrary(libraryName);
    const selectedDemo = demos.find((d) => d.id === activeDemoId);
    if (selectedDemo) {
      const DemoComponent = selectedDemo.component;
      return <DemoComponent demoId={activeDemoId} />;
    }
    return null;
  };

  // Sync state with URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lib = params.get('library');
    const demoId = params.get('demoId');
    if (lib) {
      setActiveDemo(lib);
      if (demoId) setActiveDemoId(demoId);
    }
  }, []);

  return (
    <div className="app-container">
      <div className="header">
        <div style={{ fontSize: '1.2rem', fontWeight: '600' }}>
          Documentation Mode
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            type="button"
            className="btn-print"
            onClick={() => window.print()}
          >
            🖨️ Print
          </button>
          <button type="button" className="btn-error" onClick={triggerError}>
            🚨 Error
          </button>
        </div>
      </div>

      <div className="markdown-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {README_CONTENT}
        </ReactMarkdown>
      </div>

      <section className="demos-gallery">
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>
            Interactive Demos
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Explore specific feature variants for each library.
          </p>
        </div>

        {categories.map((cat) => (
          <div key={cat.name} style={{ marginBottom: '48px' }}>
            <h3
              style={{
                fontSize: '1.5rem',
                marginBottom: '20px',
                borderLeft: '4px solid var(--primary-color)',
                paddingLeft: '12px',
              }}
            >
              {cat.name}
            </h3>
            <div className="demo-grid">
              {cat.libraries.map((lib) => {
                const rank = getRank(lib.library);
                return (
                  <button
                    key={lib.library}
                    className={`btn-demo-card ${activeDemo === lib.library ? 'active' : ''}`}
                    onClick={() => {
                      setActiveDemo(lib.library);
                      setActiveDemoId('basic');
                    }}
                  >
                    <div className="card-icon">
                      {rank && rank <= 3 ? '🏆' : '🚀'}
                    </div>
                    <div className="card-info">
                      <span className="card-name">
                        {lib.library}{' '}
                        {rank && (
                          <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                            (Rank #{rank})
                          </span>
                        )}
                      </span>
                      <span className="card-usecase">{lib.useCase}</span>
                    </div>
                    <span className="card-arrow">→</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <section className="research-summary">
        <h2 className="summary-title">Research Summary & Final Verdict</h2>

        <div className="summary-grid">
          <div className="summary-card winner">
            <h3>🏆 The Winner: React Flow</h3>
            <p>
              Best for most React apps. Perfect balance of{' '}
              <strong>DX, performance, and flexibility</strong>. The declarative
              nature makes it the industry standard for modern node-based UIs.
            </p>
          </div>

          <div className="summary-card alternatives">
            <h3>🥈 Specialized Alternatives</h3>
            <ul>
              <li>
                <strong>Sigma.js</strong>: Use for massive datasets (100k+
                nodes).
              </li>
              <li>
                <strong>Cytoscape.js</strong>: Use for deep graph theory
                analysis.
              </li>
              <li>
                <strong>React Complex Tree</strong>: Use for A11y-first
                hierarchies.
              </li>
            </ul>
          </div>

          <div className="summary-card caution">
            <h3>⚠️ Caution / Avoid</h3>
            <ul>
              <li>
                <strong>D3.js</strong>: Avoid for standard graphs due to massive
                boilerplate.
              </li>
              <li>
                <strong>Mermaid.js</strong>: Avoid for interactive applications.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {activeDemo && (
        <>
          <div className="drawer-overlay" onClick={() => setActiveDemo(null)} />
          <div className="demo-drawer">
            <div
              className="drawer-handle"
              onClick={() => setActiveDemo(null)}
            />
            <div className="demo-panel-header">
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
              >
                <h3 style={{ margin: 0 }}>{activeDemo}</h3>
                <div className="demo-options-list">
                  {getDemosForLibrary(activeDemo).map((demo) => (
                    <button
                      key={demo.id}
                      className={`demo-option-btn ${activeDemoId === demo.id ? 'active' : ''}`}
                      onClick={() => setActiveDemoId(demo.id)}
                    >
                      {demo.label}
                    </button>
                  ))}
                </div>
              </div>
              <button
                type="button"
                className="btn-close-demo"
                onClick={() => setActiveDemo(null)}
              >
                Close ✕
              </button>
            </div>
            <div className="demo-container">
              <Suspense
                fallback={
                  <div style={{ color: 'var(--text-muted)' }}>
                    Loading Demo...
                  </div>
                }
              >
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
