import React, { useState } from "react";
import "./DocsL.css";

const DocsLayout = ({ 
    title,
    description,
    exampleButtons,
    codeExample,
    propsTable, 
    tips }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (codeExample) {
      navigator.clipboard.writeText(codeExample);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="docs-layout">
      <h1>{title}</h1>
      {description && <p>{description}</p>}

      {exampleButtons && exampleButtons.length > 0 && (
        <div className="example-buttons">
          {exampleButtons.map((btn, idx) => (
            <button key={idx} className={`button ${btn.variant}`} onClick={btn.onClick}>
              {btn.label}
            </button>
          ))}
        </div>
      )}

      {codeExample && (
        <div className="code-block">
          <button className="copy-btn" onClick={handleCopy}>
            {copied ? "Copied!" : "Copy"}
          </button>
          <code>{codeExample}</code>
        </div>
      )}

      {propsTable && (
        <>
          <h2>Props</h2>
          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {propsTable.map((prop, idx) => (
                <tr key={idx}>
                  <td><code>{prop.name}</code></td>
                  <td>{prop.type}</td>
                  <td>{prop.default}</td>
                  <td>{prop.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {tips && tips.length > 0 && (
        <>
          <h2>Tips</h2>
          <ul>
            {tips.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default DocsLayout;
