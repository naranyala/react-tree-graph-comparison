import React from 'react';

interface PlaceholderDemoProps {
  libraryName: string;
  demoId: string;
}

const PlaceholderDemo = ({ libraryName, demoId }: PlaceholderDemoProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
        color: 'var(--text-muted)',
        padding: '40px',
      }}
    >
      <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🚧</div>
      <h3>
        {libraryName} - {demoId.charAt(0).toUpperCase() + demoId.slice(1)} Demo
      </h3>
      <p>This specific demonstration is currently under development.</p>
      <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>
        Expected implementation: Validating {demoId} capabilities via the
        standardized rubric.
      </p>
    </div>
  );
};

export default PlaceholderDemo;
