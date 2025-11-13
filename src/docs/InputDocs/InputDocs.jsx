import React, { useState } from "react";
import InputField from "../../components/InputField/InputField";
import DocsLayout from "../DocsLayout/DocsLayout";

const InputDocs = () => {
  // separate states for each input field
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const codeExample = `import React, { useState } from 'react';
import { InputField } from 'jazzie-ui';

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <InputField
        label="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@email.com"
      />
    </>
  );
}

export default App;`;

  const propsTable = [
    { name: "label", type: "string", default: `""`, description: "Optional text label displayed above the input field." },
    { name: "type", type: "string", default: `"text"`, description: "Specifies the type of input (text, email, password, etc.)." },
    { name: "value", type: "string", default: "—", description: "The current value of the input field (controlled component)." },
    { name: "onChange", type: "function", default: "—", description: "Callback fired when the input value changes." },
    { name: "placeholder", type: "string", default: `""`, description: "Text shown inside the input when empty." },
    { name: "id", type: "string", default: "—", description: "Optional ID for accessibility and form usage." }
  ];

  const tips = [
    "Keep your labels short and descriptive for accessibility.",
    'Use type=\"email\" or type=\"password\" for better validation UX.',
    "Combine with Modal or Card components for cohesive layouts."
  ];

  // Live Example (fixed to use separate states)
  const example = (
    <div className="input-preview">
      <InputField
        label="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
  );

  return (
    <DocsLayout
      title="Input Field Component 🌸"
      description="The InputField component in JazzieUI provides a soft, elegant, and accessible text input — perfect for forms and interactive UI elements. With subtle animations, pastel focus states, and customizable labels, it blends seamlessly into the JazzieUI aesthetic."
      exampleButtons={[]} // not used for this one
      codeExample={codeExample}
      propsTable={propsTable}
      tips={tips}
    >
      {example}
    </DocsLayout>
  );
};

export default InputDocs;
