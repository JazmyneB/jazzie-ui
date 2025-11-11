import React, { useState } from "react";
import "./DocsPage.css";

const Docs = () => {
  const [copiedBlock, setCopiedBlock] = useState(null);

  const handleCopy = (text, blockId) => {
    navigator.clipboard.writeText(text);
    setCopiedBlock(blockId);
    setTimeout(() => setCopiedBlock(null), 2000); // reset after 2s
  };

  const installCode = `npm install jazzie-ui`;

  const usageCode = `import { Button, Tabs } from 'jazzie-ui';

function App() {
  return <Button buttonType="primary">Click me</Button>;
}

export default App;`;

  return (
    <div className="docs-container">
      <h1>Getting Started with JazzieUI 🌸</h1>
      <p>
        Welcome! This guide will help you install and start using JazzieUI components
        in your project. Get ready to create interfaces that feel soft, elegant, and
        full of personality ✨
      </p>

      {/* Installation */}
      <h2>Installation</h2>
      <div className="code-block">
        <button
          className="copy-btn"
          onClick={() => handleCopy(installCode, "install")}
        >
          {copiedBlock === "install" ? "Copied!" : "Copy"}
        </button>
        <code>{installCode}</code>
      </div>

      {/* Usage */}
      <h2>Usage Example</h2>
      <div className="code-block">
        <button
          className="copy-btn"
          onClick={() => handleCopy(usageCode, "usage")}
        >
          {copiedBlock === "usage" ? "Copied!" : "Copy"}
        </button>
        <code>{usageCode}</code>
      </div>

      <p>
        Explore more components and design patterns in the full documentation — your
        dream UI is just a few imports away 💖
      </p>
    </div>
  );
};

export default Docs;
