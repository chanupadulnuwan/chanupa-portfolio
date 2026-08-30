import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          backgroundColor: '#0d0d0d',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          textAlign: 'center',
          fontFamily: 'sans-serif'
        }}>
          <h1 style={{ fontSize: '28px', color: '#FD6F00', marginBottom: '16px' }}>
            Portfolio Loaded with Fallback
          </h1>
          <p style={{ color: '#a1a1aa', maxWidth: '500px', marginBottom: '24px' }}>
            An unexpected visual effect issue occurred. Click below to restore full view.
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false });
              window.location.hash = '#home';
              window.location.reload();
            }}
            style={{
              backgroundColor: '#FD6F00',
              color: '#ffffff',
              border: 'none',
              padding: '12px 28px',
              fontSize: '15px',
              fontWeight: 'bold',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Reload Portfolio
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
