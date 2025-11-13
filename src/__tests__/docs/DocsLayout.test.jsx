import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DocsLayout from "../../docs/DocsLayout/DocsLayout";

describe("DocsLayout Component", () => {
  const mockProps = {
    title: "Input Field Component 🌸",
    description: "Elegant input fields for forms.",
    codeExample: "const x = 1;",
    propsTable: [
      { name: "label", type: "string", default: "''", description: "Label text" },
    ],
    tips: ["Use clear labels", "Support accessibility"],
  };

  it("renders the title and description", () => {
    render(<DocsLayout {...mockProps} />);
    expect(screen.getByText("Input Field Component 🌸")).toBeInTheDocument();
    expect(screen.getByText("Elegant input fields for forms.")).toBeInTheDocument();
  });

  it("renders the code example and the copy button works", async () => {
    Object.assign(navigator, {
      clipboard: { writeText: jest.fn() },
    });

    render(<DocsLayout {...mockProps} />);
    const copyButton = screen.getByText("Copy");
    fireEvent.click(copyButton);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("const x = 1;");
    expect(copyButton).toHaveTextContent(/Copied!/i);
  });

  it("renders the props table and tips list correctly", () => {
    render(<DocsLayout {...mockProps} />);
    expect(screen.getByText("Props")).toBeInTheDocument();
    expect(screen.getByText("Tips")).toBeInTheDocument();
    expect(screen.getByText("Use clear labels")).toBeInTheDocument();
  });
});
