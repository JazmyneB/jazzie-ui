// GradientButtonDocs.jsx
import React from "react";
import JazzieButton from "../components/JazzieButton/JazzieButton";
import DocsLayout from "./DocsLayout/DocsLayout";

const JazzieButtonDocs = () => {
  // Live example of buttons with different variants
  const example = (
    <div className="button-preview" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <JazzieButton label="Radiant" variant="radiant" onClick={() => alert("Radiant clicked!")} />
      <JazzieButton label="Aurora" variant="aurora" onClick={() => alert("Aurora clicked!")} />
      <JazzieButton label="Soft Blush" variant="soft-blush" onClick={() => alert("Soft Blush clicked!")} />
      <JazzieButton label="Rose Quartz" variant="rose-quartz" onClick={() => alert("Rose Quartz clicked!")} />
      <JazzieButton label="Pearl Glass" variant="pearl-glass" onClick={() => alert("Pearl Glass clicked!")} />
    </div>
  );

  // Code snippet to show in docs
  const codeExample = `import JazzieButton from '...';

<JazzieButton label="Radiant" variant="radiant" onClick={() => console.log("clicked")} />
<JazzieButton label="Aurora" variant="aurora" />
<JazzieButton label="Soft Blush" variant="soft-blush" />
<JazzieButton label="Rose Quartz" variant="rose-quartz" />
<JazzieButton label="Pearl Glass" variant="pearl-glass" />`;

  // Props table
  const propsTable = [
    { name: "label", type: "string", default: "—", description: "Button text displayed to the user" },
    { name: "variant", type: "string", default: "'radiant'", description: "Visual style / gradient of the button. Options: 'radiant', 'aurora', 'soft-blush', 'rose-quartz', 'pearl-glass'" },
    { name: "onClick", type: "function", default: "—", description: "Callback function when button is clicked" },
    { name: "disabled", type: "boolean", default: "false", description: "Disables the button if true" },
    { name: "icon", type: "node", default: "—", description: "Optional icon to render inside the button" },
  ];

  // Tips or best practices
  const tips = [
    "Use gradients to draw attention to key actions.",
    "Combine with light backgrounds for maximum contrast.",
    "Avoid using too many animated gradients on a single page to reduce visual distraction.",
  ];

  return (
    <DocsLayout
      title="Gradient Buttons"
      description={
        <>
          <strong>JazzieButton</strong> offers beautifully animated gradient buttons.
          Choose from <code>radiant</code>, <code>aurora</code>, <code>soft-blush</code>, <code>rose-quartz</code>, or <code>pearl-glass</code> to match your theme.
        </>
      }
      codeExample={codeExample}
      propsTable={propsTable}
      tips={tips}
    >
      {example}
    </DocsLayout>
  );
};

export default JazzieButtonDocs;
