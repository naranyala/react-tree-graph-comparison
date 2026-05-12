import { useState, Suspense } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './App.css';

import { TOPICS, categories } from './constants';
import { DEMO_MAP } from './demoMap';
import { SupportIcon } from './components/ui/SupportIcon';
import { FEATURE_DEFINITIONS } from './schema';
import type { LibraryFeatures } from './types';
import README_CONTENT from '../README.md';

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
          {categories.flatMap(cat => cat.libraries).map((lib) => (
            <button 
              key={lib.library} 
              className="btn-demo-card" 
              onClick={() => setActiveDemo(lib.library)}
            >
              <div className="card-icon">🚀</div>
              <div className="card-info">
                <span className="card-name">{lib.library}</span>
                <span className="card-usecase">{lib.useCase}</span>
              </div>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>

      {activeDemo && (
        <>
          <div className="drawer-overlay" onClick={() => setActiveDemo(null)} />
          <div className="demo-drawer">
            <div className="drawer-handle" onClick={() => setActiveDemo(null)} />
            <div className,="demo-panel-header">
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
