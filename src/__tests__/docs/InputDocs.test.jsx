import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputDocs from "../../docs/InputDocs/InputDocs";

// Mock DocsLayout with a self-contained component
jest.mock("../../docs/DocsLayout/DocsLayout", () => (props) => {
  const { children, title, description, codeExample, propsTable, tips } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <div data-testid="example">{children}</div>
      <code>{codeExample}</code>
      <div>
        <h2>Props</h2>
        {propsTable.map((prop) => (
          <div key={prop.name}>{prop.name}</div>
        ))}
      </div>
      <div>
        <h2>Tips</h2>
        {tips.map((tip, idx) => (
          <div key={idx}>{tip}</div>
        ))}
      </div>
      <button onClick={() => {}}>Copy</button> {/* placeholder button */}
    </div>
  );
});

describe("InputDocs Component", () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: { writeText: jest.fn() },
    });
  });

  it("renders title and description", () => {
    render(<InputDocs />);
    expect(screen.getByText(/Input Field Component 🌸/i)).toBeInTheDocument();
    expect(
      screen.getByText(/The InputField component in JazzieUI provides/i)
    ).toBeInTheDocument();
  });

  it("renders live input example and updates value", () => {
    render(<InputDocs />);
    const exampleDiv = screen.getByTestId("example");
    expect(exampleDiv).toBeInTheDocument();

    const usernameInput = screen.getByPlaceholderText("Enter your username");
    const emailInput = screen.getByPlaceholderText("example@email.com");
    const disabledInput = screen.getByDisplayValue("Read-only");

    expect(usernameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(disabledInput).toBeDisabled();

    fireEvent.change(usernameInput, { target: { value: "John" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });

    expect(usernameInput).toHaveValue("John");
    expect(emailInput).toHaveValue("john@example.com");
    expect(disabledInput).toHaveValue("Read-only");
  });

  it("renders code example", () => {
    render(<InputDocs />);
    expect(
      screen.getByText(/import React, { useState } from 'react';/i)
    ).toBeInTheDocument();
  });

  it("renders props table and tips", () => {
    render(<InputDocs />);
    expect(screen.getByText("Props")).toBeInTheDocument();
    expect(screen.getByText("label")).toBeInTheDocument();
    expect(screen.getByText("type")).toBeInTheDocument();

    expect(screen.getByText("Tips")).toBeInTheDocument();
    expect(screen.getByText(/Keep your labels short/i)).toBeInTheDocument();
    expect(screen.getByText(/Use type="email" or type="password"/i)).toBeInTheDocument();
  });
});
