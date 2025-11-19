import React from "react";
import DocsLayout from "./DocsLayout/DocsLayout";
import Tabs from "../components/Tabs/Tabs";

const TabsDocs = () => {
  const codeExample = `
import Tabs from 'components/Tabs/Tabs';

const tabData = [
  { label: 'Tab 1', content: <div>Content 1</div> },
  { label: 'Tab 2', content: <div>Content 2</div> },
  { label: 'Tab 3', content: <div>Content 3</div> },
];

<Tabs tabs={tabData} defaultIndex={0} />
  `;

  const propsTable = [
    {
      name: "tabs",
      type: "Array<{ label: string, content: ReactNode }>",
      default: "-",
      description: "Array of tabs to render, each with a label and content."
    },
    {
      name: "defaultIndex",
      type: "number",
      default: "0",
      description: "Index of the tab that is active by default."
    }
  ];

  const tips = [
    "Ensure each tab label is unique for accessibility.",
    "You can pass any ReactNode as content, including complex components.",
    "Use defaultIndex to control which tab is selected initially."
  ];

  const tabData = [
    { label: "Tab 1", content: <div>Content 1</div> },
    { label: "Tab 2", content: <div>Content 2</div> },
    { label: "Tab 3", content: <div>Content 3</div> },
  ];

  return (
    <DocsLayout
      title="Tabs Component"
      description="A component for displaying tabbed content with selectable panels."
      codeExample={codeExample}
      propsTable={propsTable}
      tips={tips}
    >
      <Tabs tabs={tabData} defaultIndex={0} />
    </DocsLayout>
  );
};

export default TabsDocs;
