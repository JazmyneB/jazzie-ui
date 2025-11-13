import React, { useState } from "react";
import Button from "../../components/PrimaryButton/Button";
import "./ButtonDocs.css";

const ButtonDocs = () => {
  const [copiedBlock, setCopiedBlock] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedBlock(id);
    setTimeout(() => setCopiedBlock(null), 2000);
  };

  const usageCode = `import Button from 'jazzie-ui/PrimaryButton';

function App() {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <Button buttonType="primary">Primary Action</Button>
      <Button buttonType="secondary">Secondary Action</Button>
      <Button buttonType="tertiary">Tertiary Action</Button>
      <Button buttonType="primary" disabled>Disabled</Button>
    </div>
  );
}

export default App;`;

  return (
    <div className="docs-container">
      <h1>Button Component 🌸</h1>

      <p>
        The <strong>Button</strong> component in <code>JazzieUI</code> provides
        versatile, stylish buttons that bring warmth and polish to your UI. Choose
        from <code>primary</code>, <code>secondary</code>, and{" "}
        <code>tertiary</code> variants — each with soft hover animations and
        graceful disabled states.
      </p>

      <h2>Usage Example</h2>

      {/* Preview Buttons */}
      <div className="button-preview">
        <Button buttonType="primary" onClick={() => alert("Primary clicked!")}>
          Primary
        </Button>
        <Button buttonType="secondary" onClick={() => alert("Secondary clicked!")}>
          Secondary
        </Button>
        <Button buttonType="tertiary" onClick={() => alert("Tertiary clicked!")}>
          Tertiary
        </Button>
        <Button buttonType="primary" disabled>
          Disabled
        </Button>
      </div>

      {/* Code Block */}
      <div className="code-block">
        <button
          className="copy-btn"
          onClick={() => handleCopy(usageCode, "usage")}
        >
          {copiedBlock === "usage" ? "Copied!" : "Copy"}
        </button>
        <code>{usageCode}</code>
      </div>

      <h2>Props</h2>
      <table className="props-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>onClick</td>
            <td>function</td>
            <td>—</td>
            <td>Function executed when the button is clicked.</td>
          </tr>
          <tr>
            <td>text</td>
            <td>string</td>
            <td>"Primary Button"</td>
            <td>Text to display if no <code>children</code> are provided.</td>
          </tr>
          <tr>
            <td>children</td>
            <td>node</td>
            <td>—</td>
            <td>Custom JSX content inside the button.</td>
          </tr>
          <tr>
            <td>buttonType</td>
            <td>'primary' | 'secondary' | 'tertiary'</td>
            <td>'primary'</td>
            <td>Defines the button’s visual style.</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>bool</td>
            <td>false</td>
            <td>Disables the button, removing interaction and hover effects.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ButtonDocs;
