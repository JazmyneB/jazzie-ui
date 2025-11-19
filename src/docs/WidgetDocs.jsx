import React from "react";
import DocsLayout from "./DocsLayout/DocsLayout";
import DashboardWidget from "../components/DashboardWidget/DashboardWidget";
import { FaUserAlt, FaChartLine } from "react-icons/fa";

const WidgetDocs = () => {
  const codeExample = `
import DashboardWidget from 'components/DashboardWidget/DashboardWidget';
import { FaUserAlt } from 'react-icons/fa';

<DashboardWidget
  title="Users"
  value={1200}
  trend={{ direction: 'up', percentage: 15 }}
  icon={<FaUserAlt />}
  variant="soft"
/>
`;

  const propsTable = [
    {
      name: "title",
      type: "string",
      default: "-",
      description: "Title of the widget displayed above the value.",
    },
    {
      name: "value",
      type: "string | number",
      default: "-",
      description: "Main numeric or string value displayed in the widget.",
    },
    {
      name: "trend",
      type: "{ direction: 'up' | 'down', percentage: number }",
      default: "-",
      description: "Optional trend indicator with direction and percentage.",
    },
    {
      name: "icon",
      type: "ReactNode",
      default: "-",
      description: "Optional icon displayed on the left side of the widget.",
    },
    {
      name: "variant",
      type: "'soft' | 'elevated' | 'dark'",
      default: "'soft'",
      description: "Widget style variant.",
    },
  ];

  const tips = [
    "Use the `trend` prop to show positive or negative changes visually.",
    "Icons enhance recognition of widget purpose, but are optional.",
    "Variants control style; use `dark` for dark mode dashboards.",
    "The widget adjusts width to its content by default.",
  ];

  return (
    <DocsLayout
      title="DashboardWidget Component"
      description="A flexible, styled dashboard widget with optional trend and icon."
      codeExample={codeExample}
      propsTable={propsTable}
      tips={tips}
    >
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <DashboardWidget
          title="Users"
          value={1200}
          trend={{ direction: "up", percentage: 15 }}
          icon={<FaUserAlt />}
          variant="soft"
        />
        <DashboardWidget
          title="Revenue"
          value="$34K"
          trend={{ direction: "down", percentage: 5 }}
          icon={<FaChartLine />}
          variant="elevated"
        />
        <DashboardWidget
          title="New Signups"
          value={85}
          trend={{ direction: "up", percentage: 8 }}
          variant="dark"
        />
      </div>
    </DocsLayout>
  );
};

export default WidgetDocs;
