import React from "react";
import DocsLayout from "../DocsLayout/DocsLayout";
import { SoftModal, ElevatedModal, DarkModal } from "../../stories/Modal.stories";

const codeExample = `import React, { useState } from 'react';
import { Modal } from 'jazzie-ui';
import Button from 'jazzie-ui';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Hello!">
        <p>This is modal content</p>
      </Modal>
    </>
  );
}`;

const propsTable = [
  { name: "isOpen", type: "bool", default: "—", description: "Controls whether the modal is visible." },
  { name: "onClose", type: "function", default: "—", description: "Function to close the modal." },
  { name: "title", type: "string", default: '"Modal Title"', description: "Text displayed at the top." },
  { name: "children", type: "node", default: "—", description: "Modal body content." },
  { name: "variant", type: '"soft" | "elevated" | "dark"', default: '"soft"', description: "Visual style theme." },
];

const tips = [
  "Soft is gentle and subtle.",
  "Elevated is bold and prominent.",
  "Dark works well for night or dark themes.",
];

const ModalDocs = () => {
  return (
    <DocsLayout
      title="Modal / Popup Component 🌸"
      description={
        <>
          The <strong>Modal</strong> component in <strong>JazzieUI</strong> provides
          a reusable, animated overlay popup. Supports <code>soft</code>, <code>elevated</code>, and <code>dark</code> variants.
        </>
      }
      codeExample={codeExample}
      propsTable={propsTable}
      tips={tips}
    >
      {/* Live examples using Storybook stories */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <SoftModal />
        <ElevatedModal />
        <DarkModal />
      </div>
    </DocsLayout>
  );
};

export default ModalDocs;
