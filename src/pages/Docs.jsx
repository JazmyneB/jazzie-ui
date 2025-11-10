import React from 'react';

const Docs = () => {
  return (
    <div style={{ padding: '2rem', paddingTop: '80px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Getting Started with JazzieUI 🌸</h1>
      <p>Welcome! This guide will help you install and start using JazzieUI components in your project.</p>

      <h2>Installation</h2>
      <pre style={{ background: 'var(--color-paper)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
        npm install jazzie-ui
      </pre>

      <h2>Usage Example</h2>
      <pre style={{ background: 'var(--color-paper)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
        {`import { Button, Tabs } from 'jazzie-ui';

function App() {
  return <Button buttonType="primary">Click me</Button>;
}`}
      </pre>

      <p>Explore more components and features in the documentation!</p>
    </div>
  );
};

export default Docs;
