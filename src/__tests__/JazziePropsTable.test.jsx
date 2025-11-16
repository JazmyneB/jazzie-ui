import React from "react";
import { render, screen } from "@testing-library/react";
import JazziePropsTable from "../components/JazziePropsTable/JazziePropsTable";

const sampleProps = [
  {
    name: "title",
    type: "string",
    default: "'Default Title'",
    description: "The main title of the component",
  },
  {
    name: "onClick",
    type: "function",
    default: "undefined",
    description: "Callback when clicked",
  },
];

describe("JazziePropsTable", () => {
  it("renders table headers correctly", () => {
    render(<JazziePropsTable propsData={sampleProps} />);

    expect(screen.getByText("Prop")).toBeInTheDocument();
    expect(screen.getByText("Type")).toBeInTheDocument();
    expect(screen.getByText("Default")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
  });

  it("renders all rows based on propsData", () => {
    render(<JazziePropsTable propsData={sampleProps} />);
    
    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("onClick")).toBeInTheDocument();
    expect(screen.getByText("string")).toBeInTheDocument();
    expect(screen.getByText("function")).toBeInTheDocument();
    expect(screen.getByText("'Default Title'")).toBeInTheDocument();
    expect(screen.getByText("undefined")).toBeInTheDocument();
    expect(screen.getByText("The main title of the component")).toBeInTheDocument();
    expect(screen.getByText("Callback when clicked")).toBeInTheDocument();
  });

  it("renders prop names inside <code> tags", () => {
    render(<JazziePropsTable propsData={sampleProps} />);
    
    const codeElements = screen.getAllByText(/title|onClick/).filter(el => el.tagName === "CODE");
    expect(codeElements.length).toBe(2);
    expect(codeElements[0]).toHaveTextContent("title");
    expect(codeElements[1]).toHaveTextContent("onClick");
  });

  it("returns null if propsData is empty", () => {
    const { container } = render(<JazziePropsTable propsData={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("returns null if propsData is undefined", () => {
    const { container } = render(<JazziePropsTable />);
    expect(container.firstChild).toBeNull();
  });
});
