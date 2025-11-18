import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ModalDocs from "../../docs/ModalDocs/ModalDocs";

// Mock Modal to render children when isOpen is true
jest.mock("../../components/Modal/Modal", () => ({ isOpen, children }) => {
  return isOpen ? <div data-testid="modal">{children}</div> : null;
});

// Mock DocsLayout
jest.mock("../../docs/DocsLayout/DocsLayout", () => ({ title, description, codeExample, propsTable, tips, children }) => (
  <div>
    <h1>{title}</h1>
    <div>{description}</div>
    <pre>{codeExample}</pre>
    {propsTable && propsTable.map((prop) => (
      <div key={prop.name}>{prop.name}</div>
    ))}
    {tips && tips.map((tip, idx) => <div key={idx}>{tip}</div>)}
    <div>{children}</div>
  </div>
));

describe("ModalDocs Component", () => {
  it("renders title and description", () => {
  render(<ModalDocs />);

  expect(screen.getByText("Modal / Popup Component 🌸")).toBeInTheDocument();

  // Just check any distinctive part of the description
  expect(
    screen.getByText(/reusable, animated overlay popup/i)
  ).toBeInTheDocument();
});




  it("renders code example", () => {
    render(<ModalDocs />);
    expect(screen.getByText(/function App\(\)/i)).toBeInTheDocument();
  });

  it("renders props table", () => {
    render(<ModalDocs />);
    expect(screen.getByText("isOpen")).toBeInTheDocument();
    expect(screen.getByText("onClose")).toBeInTheDocument();
  });

  it("renders tips list", () => {
    render(<ModalDocs />);
    expect(screen.getByText("Use soft for gentle interactions or confirmations.")).toBeInTheDocument();
    expect(screen.getByText("Dark fits perfectly with night or dramatic themes.")).toBeInTheDocument();
  });

  it("opens Soft Modal when primary button clicked", () => {
    render(<ModalDocs />);
    const softButton = screen.getByText("Open Soft Modal");
    fireEvent.click(softButton);
    expect(screen.getByTestId("modal")).toHaveTextContent("This is a gentle and elegant modal");
  });

  it("opens Elevated Modal when secondary button clicked", () => {
    render(<ModalDocs />);
    const elevatedButton = screen.getByText("Open Elevated Modal");
    fireEvent.click(elevatedButton);
    expect(screen.getByTestId("modal")).toHaveTextContent("Use this variant when you need a bolder visual emphasis");
  });

  it("opens Dark Modal when tertiary button clicked", () => {
    render(<ModalDocs />);
    const darkButton = screen.getByText("Open Dark Modal");
    fireEvent.click(darkButton);
    expect(screen.getByTestId("modal")).toHaveTextContent("Ideal for darker layouts or night-mode themes");
  });
});
