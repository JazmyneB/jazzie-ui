import React from "react";
import DocsLayout from "../DocsLayout/DocsLayout";
import Card from "../../components/Card/Card";
import "../../components/Card/Card.css";

const CardDocs = () => {
  const example = (
    <div className="example-buttons" style={{ gap: "1rem", flexWrap: "wrap" }}>
      <Card title="Soft Card" variant="soft" size="md">
        <p>This is a soft card, perfect for gentle UI elements.</p>
      </Card>

      <Card title="Elevated Card" variant="elevated" size="md">
        <p>Use elevated cards to make content stand out.</p>
      </Card>

      <Card title="Dark Card" variant="dark" size="md">
        <p>Dark variant fits perfectly in night mode themes.</p>
      </Card>

      <Card title="Small Card" variant="soft" size="sm">
        <p>Compact card for tight spaces.</p>
      </Card>

      <Card title="Large Card" variant="soft" size="lg">
        <p>Larger card for emphasis and rich content.</p>
      </Card>
    </div>
  );

  const codeExample = `import React from 'react';
import { Card } from 'jazzie-ui';

function App() {
  return (
    <>
      <Card title="Soft Card" variant="soft" size="md">
        <p>This is a soft card, perfect for gentle UI elements.</p>
      </Card>

      <Card title="Elevated Card" variant="elevated" size="md">
        <p>Use elevated cards to make content stand out.</p>
      </Card>

      <Card title="Dark Card" variant="dark" size="md">
        <p>Dark variant fits perfectly in night mode themes.</p>
      </Card>
    </>
  );
}

export default App;`;

  const propsTable = [
    {
      name: "title",
      type: "string",
      default: "—",
      description: "Optional title displayed at the top of the card."
    },
    {
      name: "children",
      type: "node",
      default: "—",
      description: "Content inside the card."
    },
    {
      name: "variant",
      type: "'soft' | 'elevated' | 'dark'",
      default: "'soft'",
      description: "Visual style of the card."
    },
    {
      name: "size",
      type: "'sm' | 'md' | 'lg'",
      default: "'md'",
      description: "Size of the card."
    }
  ];

  const tips = [
    "Use soft for subtle UI elements or gentle emphasis.",
    "Elevated cards are ideal for important content that should stand out.",
    "Dark variant works well in night mode or dark-themed layouts.",
    "Choose the size according to the context: sm for compact, lg for more prominent content."
  ];

  return (
    <DocsLayout
      title="Card Component 🃏"
      description={
        <>
          The <strong>Card</strong> component in <strong>JazzieUI</strong> provides a flexible 
          container for grouping content. Cards support multiple <code>variant</code> and <code>size</code> 
          options for versatile design patterns.
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

export default CardDocs;
