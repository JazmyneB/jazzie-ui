import React, { useState } from "react";
import Loader from "../components/Loader/Loader";
import DocsLayout from "./DocsLayout/DocsLayout";

const LoaderDocs = () => {
  const [copiedBlock, setCopiedBlock] = useState(null);

  const usageCode = `import Loader from 'jazzie-ui/Loader';

function App() {
  return (
    <div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
      <Loader type="text-sm" />
      <Loader type="text-md" />
      <Loader type="text-lg" />
      <Loader type="card" width="300px" height="150px" />
    </div>
  );
}

export default App;`;

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedBlock(id);
    setTimeout(() => setCopiedBlock(null), 2000);
  };

  const propsTable = [
    { name: "type", type: "'text-sm' | 'text-md' | 'text-lg' | 'card'", default: "'text'", description: "Defines the style/size of the loader." },
    { name: "width", type: "string", default: "'100%'", description: "Width of the loader." },
    { name: "height", type: "string", default: "undefined", description: "Height of the loader (optional, especially for card type)." },
    { name: "className", type: "string", default: "undefined", description: "Custom CSS class to apply additional styling." },
  ];

  const tips = [
    "Use `text-*` loaders for inline or text placeholders, and `card` for larger content blocks.",
    "You can customize the width and height to match the container or design requirements.",
    "Combine loaders with your state logic to show placeholders while fetching data."
  ];

  return (
    <DocsLayout
      title="Loader Component 🌸"
      description="The Loader component in JazzieUI provides animated placeholders while your content is loading. It supports multiple sizes and types."
      codeExample={usageCode}
      propsTable={propsTable}
      tips={tips}
    >
      <div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
        <Loader type="card" width="300px" height="150px" />
        <Loader type="text-sm" />
        <Loader type="text-md" />
        <Loader type="text-lg" />
      </div>
    </DocsLayout>
  );
};

export default LoaderDocs;
