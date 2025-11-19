import React from "react";
import DocsLayout from "./DocsLayout/DocsLayout";
import JazzieGrid from "../components/JazzieGrid/JazzieGrid";

const JazzieGridDocs = () => {
  const codeExample = `
import JazzieGrid from 'components/JazzieGrid/JazzieGrid';

<JazzieGrid columns={3} gap="16px" rowHeight="100px">
  <div className="grid-item">Item 1</div>
  <div className="grid-item">Item 2</div>
  <div className="grid-item">Item 3</div>
</JazzieGrid>
  `;

  const propsTable = [
    {
      name: "children",
      type: "ReactNode",
      default: "-",
      description: "Content to display inside the grid."
    },
    {
      name: "columns",
      type: "number",
      default: "3",
      description: "Number of columns in the grid."
    },
    {
      name: "gap",
      type: "string",
      default: "var(--space-md)",
      description: "Gap between grid items."
    },
    {
      name: "rowHeight",
      type: "string",
      default: "auto",
      description: "Height of the rows."
    },
    {
      name: "className",
      type: "string",
      default: '""',
      description: "Additional class names for the grid container."
    },
  ];

  const tips = [
    "Use `columns` to control how many items appear per row.",
    "Use `gap` to control spacing between items.",
    "You can use any ReactNode as a child, including components.",
    "Row heights can be set explicitly or left as 'auto'.",
    "Add a `className` to style the grid or its items via CSS."
  ];

  return (
    <DocsLayout
      title="JazzieGrid Component"
      description="A flexible grid container component to layout children in rows and columns."
      codeExample={codeExample}
      propsTable={propsTable}
      tips={tips}
    >
      <JazzieGrid columns={3} gap="16px" rowHeight="100px">
        <div className="grid-item" style={{ background: "#f5a623" }}>Item 1</div>
        <div className="grid-item" style={{ background: "#50e3c2" }}>Item 2</div>
        <div className="grid-item" style={{ background: "#9013fe" }}>Item 3</div>
      </JazzieGrid>
    </DocsLayout>
  );
};

export default JazzieGridDocs;
