import React from "react";
import "./Docs.css";

const Docs = () => {
  return (
    <div className="docs-container">
      <h1>Getting Started with JazzieUI 🌸</h1>
      <p>
        Welcome! This guide will help you install and start using JazzieUI components
        in your project. Get ready to create interfaces that feel soft, elegant, and
        full of personality ✨
      </p>

      <h2>Installation</h2>
      <div className="code-block">
        <code>npm install jazzie-ui</code>
      </div>

      <h2>Usage Example</h2>
      <div className="code-block">
        <code>
{`import { Button, Tabs } from 'jazzie-ui';

function App() {
  return <Button buttonType="primary">Click me</Button>;
}

export default App;`}
        </code>
      </div>

      <p>
        Explore more components and design patterns in the full documentation — your
        dream UI is just a few imports away 💖
      </p>
    </div>
  );
};

export default Docs;
