import React, { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    this.setState({
      errorInfo: errorInfo,
    });
  }

  private handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: '20px',
            backgroundColor: '#fff0f0',
            color: '#d32f2f',
            border: '2px solid #d32f2f',
            margin: '20px',
            fontFamily: 'monospace',
            textAlign: 'left',
          }}
        >
          <h2>🚨 Application Error</h2>
          <p>Something went wrong in the React component tree.</p>

          <div style={{ marginTop: '20px' }}>
            <strong>Error Message:</strong>
            <pre
              style={{
                backgroundColor: '#eee',
                padding: '10px',
                overflow: 'auto',
              }}
            >
              {this.state.error?.toString()}
            </pre>
          </div>

          <div style={{ marginTop: '20px' }}>
            <strong>Error Stack:</strong>
            <pre
              style={{
                backgroundColor: '#eee',
                padding: '10px',
                overflow: 'auto',
                fontSize: '12px',
              }}
            >
              {this.state.error?.stack || 'No stack trace available'}
            </pre>
          </div>

          {this.state.errorInfo && (
            <div style={{ marginTop: '20px' }}>
              <strong>Component Stack:</strong>
              <pre
                style={{
                  backgroundColor: '#eee',
                  padding: '10px',
                  overflow: 'auto',
                  fontSize: '12px',
                }}
              >
                {this.state.errorInfo.componentStack}
              </pre>
            </div>
          )}

          <div style={{ marginTop: '30px' }}>
            <button
              type="button"
              onClick={this.handleReset}
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer',
                backgroundColor: '#d32f2f',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
              }}
            >
              Try to Reset Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
