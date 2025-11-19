import React from "react";
import DocsLayout from "./DocsLayout/DocsLayout";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";

const ThemeDocs = () => {
  const codeExample = `
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';

<ThemeSwitcher />
  `;

  const propsTable = [
    {
      name: "theme",
      type: "string",
      default: "-",
      description: "The current theme applied to the app, controlled via ThemeContext."
    },
    {
      name: "setTheme",
      type: "(theme: string) => void",
      default: "-",
      description: "Function to update the current theme in the ThemeContext."
    },
  ];

  const tips = [
    "Wrap your app with ThemeContext.Provider to provide theme state.",
    "Use descriptive names for themes to avoid confusion.",
    "The active theme button is highlighted automatically.",
    "You can easily add new themes by adding buttons in ThemeSwitcher."
  ];

  return (
    <DocsLayout
      title="Theme Switcher Component"
      description="A component that allows users to switch between predefined themes."
      codeExample={codeExample}
      propsTable={propsTable}
      tips={tips}
    >
      <ThemeSwitcher />
    </DocsLayout>
  );
};

export default ThemeDocs;
