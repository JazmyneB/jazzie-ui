import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/PrimaryButton/Button";
import DocsLayout from "../DocsLayout/DocsLayout";
import "../ButtonDocs/ButtonDocs.css";

const ModalDocs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isElevatedOpen, setIsElevatedOpen] = useState(false);
  const [isDarkOpen, setIsDarkOpen] = useState(false);

  const example = (
    <div className="button-preview">
        <Button 
        buttonType='primary'
        onClick={()=> setIsOpen(true)}
        text='Open Soft Modal'
        />
        <Button
        buttonType='secondary'
        onClick={()=> setIsElevatedOpen(true)}
        text='Open Elevated Modal'
        />
        <Button
        buttonType='tertiary'
        onClick={()=> setIsDarkOpen(true)}
        text='Open Dark Modal'
        />
    </div>
  )

  const codeExample = `import React, { useState } from 'react';
import { Modal } from 'jazzie-ui';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Hello from JazzieUI!"
        variant="soft"
      >
        <p>This is a soft and stylish modal component 💖</p>
      </Modal>
    </>
  );
}

export default App;`;

  const propsTable = [
    { name: "isOpen", type: "bool", default: "—", description: "Controls whether the modal is visible." },
    { name: "onClose", type: "function", default: "—", description: "Function to close the modal when triggered." },
    { name: "title", type: "string", default: '"Modal Title"', description: "Title text displayed at the top of the modal." },
    { name: "children", type: "node", default: "—", description: "Modal body content." },
    { name: "variant", type: '"soft" | "elevated" | "dark"', default: '"soft"', description: "Visual style theme of the modal." },
  ];

  const tips = [
    "Use soft for gentle interactions or confirmations.",
    "Elevated stands out for strong visual emphasis.",
    "Dark fits perfectly with night or dramatic themes.",
  ];

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Soft Modal 🌷" variant="soft">
        <p>This is a gentle and elegant modal — perfect for subtle messages.</p>
      </Modal>

      <Modal isOpen={isElevatedOpen} onClose={() => setIsElevatedOpen(false)} title="Elevated Modal 💼" variant="elevated">
        <p>Use this variant when you need a bolder visual emphasis.</p>
      </Modal>

      <Modal isOpen={isDarkOpen} onClose={() => setIsDarkOpen(false)} title="Dark Modal 🌙" variant="dark">
        <p>Ideal for darker layouts or night-mode themes.</p>
      </Modal>

      <DocsLayout
        title="Modal / Popup Component 🌸"
        description={
          <>
            The <strong>Modal</strong> component in <strong>JazzieUI</strong> provides
            a reusable, animated overlay popup for messages, forms, or confirmations.
            It supports <code>soft</code>, <code>elevated</code>, and <code>dark</code>{" "}
            variants for different moods or themes.
          </>
        }
        codeExample={codeExample}
        propsTable={propsTable}
        tips={tips}
      >
        {example} 
      </DocsLayout>
    </>
  );
};

export default ModalDocs;
