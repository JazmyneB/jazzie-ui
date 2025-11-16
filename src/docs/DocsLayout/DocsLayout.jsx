import React, { useState } from "react";
import "./DocsL.css";
import JazziePropsTable from "../../components/JazziePropsTable/JazziePropsTable";

const DocsLayout = ({ 
    title,
    description,
    children,
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

    {children && (
      <>
        <h2>Live Example</h2>
        {children}
      </>
    )}

    {codeExample && (
      <>
        <h2>Usage Example</h2>
        <div className="code-block">
          <button className="copy-btn" onClick={handleCopy}>
            {copied ? "Copied!" : "Copy"}
          </button>
          <code>{codeExample}</code>
        </div>
      </>
    )}

    {propsTable && (
      <JazziePropsTable propsData={propsTable} />
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
