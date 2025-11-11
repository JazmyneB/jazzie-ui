import React, { useState } from "react";
import InputField from "../../components/InputField/InputField";
import "../../styles/DocsLayout.css";

const InputDocs = () => {
  const [value, setValue] = useState("");
  const [copied, setCopied] = useState(false);

  const codeExample = `import React, { useState } from 'react';
import { InputField } from 'jazzie-ui';

function App() {
  const [value, setValue] = useState("");

  return (
    <InputField
      label="Username"
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter your username"
    />
  );
}

export default App;`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="docs-container">
      <h1>Input Field Component 🌸</h1>
      <p>
        The <strong>InputField</strong> component in <strong>JazzieUI</strong> provides
        a soft, elegant, and accessible text input — perfect for forms and interactive
        UI elements. With subtle animations, pastel focus states, and customizable labels,
        it blends seamlessly into the <code>JazzieUI</code> aesthetic.
      </p>

      <h2>Live Example</h2>
      <div className="input-preview">
        <InputField
          label="Username"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter your username"
        />
        <InputField
          label="Email"
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="example@email.com"
        />
        <InputField
          label="Disabled Input"
          type="text"
          value="Read-only"
          onChange={() => {}}
          disabled
        />
      </div>

      <h2>Usage Example</h2>
      <div className="code-block">
        <button className="copy-btn" onClick={handleCopy}>
          {copied ? "Copied!" : "Copy"}
        </button>
        <code>{codeExample}</code>
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
            <td><code>label</code></td>
            <td>string</td>
            <td>""</td>
            <td>Optional text label displayed above the input field.</td>
          </tr>
          <tr>
            <td><code>type</code></td>
            <td>string</td>
            <td>"text"</td>
            <td>Specifies the type of input (text, email, password, etc.).</td>
          </tr>
          <tr>
            <td><code>value</code></td>
            <td>string</td>
            <td>—</td>
            <td>The current value of the input field (controlled component).</td>
          </tr>
          <tr>
            <td><code>onChange</code></td>
            <td>function</td>
            <td>—</td>
            <td>Callback function fired when the input value changes.</td>
          </tr>
          <tr>
            <td><code>placeholder</code></td>
            <td>string</td>
            <td>""</td>
            <td>Text shown inside the input when empty.</td>
          </tr>
          <tr>
            <td><code>id</code></td>
            <td>string</td>
            <td>—</td>
            <td>Optional ID for accessibility and form usage.</td>
          </tr>
        </tbody>
      </table>

      <h2>Tips</h2>
      <ul>
        <li>Keep your <strong>labels short and descriptive</strong> for accessibility.</li>
        <li>Use <strong>type="email"</strong> or <strong>type="password"</strong> for better validation UX.</li>
        <li>Combine with <code>Modal</code> or <code>Card</code> components for cohesive layouts.</li>
      </ul>
    </div>
  );
};

export default InputDocs;
