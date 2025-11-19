import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import ThemeDocs from "../../docs/ThemeDocs";
import { ThemeProvider } from "../../context/ThemeContext";

const renderWithProvider = (ui) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("ThemeDocs Component", () => {
  beforeEach(() => {
    renderWithProvider(<ThemeDocs />);
  });

  it("renders the title and description", () => {
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Theme Switcher Component"
    );

    expect(
      screen.getByText(
        /A component that allows users to switch between predefined themes/i
      )
    ).toBeInTheDocument();
  });

  it("renders the live ThemeSwitcher example with all theme buttons", () => {
    const themeButtons = [
      /🌸 Rose/i,
      /💙 Royal Blue/i,
      /🤎 Neutral/i,
      /⚪ Silver/i,
      /🍭 Cotton Candy/i,
      /💜 Lavender Dream/i,
      /🥛 Milk Tea/i,
      /🌿 Pastel Mint/i,
      /🍃 Jaded/i,
    ];

    themeButtons.forEach((label) => {
      const btn = screen.getByRole("button", { name: label });
      expect(btn).toBeInTheDocument();
    });

    const roseButton = screen.getByRole("button", { name: /🌸 Rose/i });
    fireEvent.click(roseButton);
    expect(roseButton).toHaveClass("active-theme");
  });

  it("renders the code example and copy button", () => {
    const code = screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === "code" &&
        content.includes("<ThemeSwitcher />")
      );
    });
    expect(code).toBeInTheDocument();

    const codeContainer = code.closest("div") || code.closest("pre");
    if (codeContainer) {
      const copyBtn = within(codeContainer).getByRole("button", { name: /copy/i });
      expect(copyBtn).toBeInTheDocument();
    }
  });

  it("renders the props table correctly", () => {
    const table = screen.getByRole("table");
    const tbody = table.querySelector("tbody");
    expect(tbody).toBeInTheDocument();

    const rows = within(tbody).getAllByRole("row");
    expect(rows.length).toBe(2);

    expect(within(rows[0]).getByText("theme")).toBeInTheDocument();
    expect(within(rows[0]).getByText(/string/i)).toBeInTheDocument();
    expect(
      within(rows[0]).getByText(/The current theme applied to the app/i)
    ).toBeInTheDocument();

    expect(within(rows[1]).getByText("setTheme")).toBeInTheDocument();
    expect(
      within(rows[1]).getByText(/\(theme: string\) => void/i)
    ).toBeInTheDocument();
    expect(
      within(rows[1]).getByText(/Function to update the current theme/i)
    ).toBeInTheDocument();
  });

  it("renders the tips section correctly", () => {
    const tipsHeading = screen.getByRole("heading", { name: /Tips/i });
    expect(tipsHeading).toBeInTheDocument();

    const tipsList = screen.getByRole("list");
    const tipsItems = within(tipsList).getAllByRole("listitem");

    expect(tipsItems.length).toBe(4);
    expect(tipsItems[0]).toHaveTextContent(/Wrap your app with ThemeContext.Provider/i);
    expect(tipsItems[1]).toHaveTextContent(/Use descriptive names for themes/i);
    expect(tipsItems[2]).toHaveTextContent(/The active theme button is highlighted/i);
    expect(tipsItems[3]).toHaveTextContent(/You can easily add new themes/i);
  });
});
