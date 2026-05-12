import { useState, Suspense } from 'react';
import './App.css';

import { TOPICS, categories } from './constants';
import { DEMO_MAP } from './demoMap';
import { SupportIcon } from './components/ui/SupportIcon';
import { FEATURE_DEFINITIONS } from './schema';
import type { LibraryFeatures } from './types';

function App() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

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
        <h1>React Tree & Graph Library Comparison</h1>
        <button type="button" className="btn-error" onClick={triggerError}>
          🚨 Trigger Test Error
        </button>
      </div>

      <div className="comparison-panel">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {categories.map((cat) => (
            <div key={cat.name}>
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>{cat.name}</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>{cat.description}</p>
              </div>

              {/* Table 1: Core Overview */}
              <div className="comparison-table-container">
                <div className="table-scroll">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Library</th>
                        <th>Primary Use Case</th>
                        <th>Engine</th>
                        <th>React Fit</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cat.libraries.map((item) => (
                        <tr key={item.library}>
                          <td><strong>{item.library}</strong></td>
                          <td>{item.useCase}</td>
                          <td>{item.engine}</td>
                          <td>{item.reactFriendly}</td>
                          <td>
                            <button
                              type="button"
                              className="btn-view"
                              onClick={() => setActiveDemo(item.library)}
                            >
                              View Demo
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 2: Technical Deep Dive */}
              <div className="comparison-table-container">
                <div className="table-scroll">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Library</th>
                        <th>License</th>
                        <th>Complexity</th>
                        <th>Learning Curve</th>
                        <th>Max Nodes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cat.libraries.map((item) => (
                        <tr key={item.library}>
                          <td><strong>{item.library}</strong></td>
                          <td>{item.license}</td>
                          <td>{item.complexity}</td>
                          <td>{item.learningCurve}</td>
                          <td>{item.maxNodes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 3: UX Features Matrix */}
              <div className="comparison-table-container">
                <div className="table-scroll">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Library</th>
                        {Object.entries(FEATURE_DEFINITIONS).filter(([_, def]) => 
                          ['zoomPan', 'customNodes', 'edgeRouting', 'largeData', 'a11y', 'interactivity'].includes(_)
                        ).map(([id, def]) => <th key={id}>{def.label}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {cat.libraries.map((lib) => (
                        <tr key={lib.library}>
                          <td><strong>{lib.library}</strong></td>
                          {Object.entries(FEATURE_DEFINITIONS).filter(([_, def]) => 
                            ['zoomPan', 'customNodes', 'edgeRouting', 'largeData', 'a11y', 'interactivity'].includes(_)
                          ).map(([id]) => (
                            <td key={id} style={{ textAlign: 'center' }}>
                              <SupportIcon 
                                status={lib.features?.[id as keyof LibraryFeatures] || 'unclear'} 
                              />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 4: Integration Features Matrix */}
              <div className="comparison-table-container">
                <div className="table-scroll">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Library</th>
                        {Object.entries(FEATURE_DEFINITIONS).filter(([_, def]) => 
                          !['zoomPan', 'customNodes', 'edgeRouting', 'largeData', 'a11y', 'interactivity'].includes(_)
                        ).map(([id, def]) => <th key={id}>{def.label}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {cat.libraries.map((lib) => (
                        <tr key={lib.library}>
                          <td><strong>{lib.library}</strong></td>
                          {Object.entries(FEATURE_DEFINITIONS).filter(([_, def]) => 
                            !['zoomPan', 'customNodes', 'edgeRouting', 'largeData', 'a11y', 'interactivity'].includes(_)
                          ).map(([id]) => (
                            <td key={id} style={{ textAlign: 'center' }}>
                              <SupportIcon 
                                status={lib.features?.[id as keyof LibraryFeatures] || 'unclear'} 
                              />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

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
    </div>
  );
}

export default App;
