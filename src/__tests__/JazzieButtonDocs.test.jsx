import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import JazzieButtonDocs from "../docs/JazzieButtonDocs";

jest.mock("../docs/DocsLayout/DocsLayout", () => ({ title, description, codeExample, propsTable, tips, children }) => (
  <div>
    <h1>{title}</h1>
    <div data-testid="description">{description}</div>
    <pre data-testid="code">{codeExample}</pre>
    <table data-testid="props-table">
      <tbody>
        {propsTable.map((prop) => (
          <tr key={prop.name}>
            <td>{prop.name}</td>
            <td>{prop.type}</td>
            <td>{prop.default}</td>
            <td>{prop.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <ul data-testid="tips">
      {tips.map((tip, i) => <li key={i}>{tip}</li>)}
    </ul>
    <div data-testid="children">{children}</div>
  </div>
));

describe("JazzieButtonDocs", () => {
  it("renders the title", () => {
    render(<JazzieButtonDocs />);
    expect(screen.getByText("Gradient Buttons")).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<JazzieButtonDocs />);
    expect(screen.getByTestId("description")).toHaveTextContent("JazzieButton offers beautifully animated gradient buttons.");
  });

  it("renders the code snippet", () => {
    render(<JazzieButtonDocs />);
    expect(screen.getByTestId("code")).toHaveTextContent("<JazzieButton label=\"Radiant\"");
    expect(screen.getByTestId("code")).toHaveTextContent("<JazzieButton label=\"Pearl Glass\"");
  });

  it("renders all props in the props table", () => {
    render(<JazzieButtonDocs />);
    const table = screen.getByTestId("props-table");
    expect(table).toHaveTextContent("label");
    expect(table).toHaveTextContent("variant");
    expect(table).toHaveTextContent("onClick");
    expect(table).toHaveTextContent("disabled");
    expect(table).toHaveTextContent("icon");
  });

  it("renders all tips", () => {
    render(<JazzieButtonDocs />);
    const tips = screen.getByTestId("tips");
    expect(tips).toHaveTextContent("Use gradients to draw attention to key actions.");
    expect(tips).toHaveTextContent("Combine with light backgrounds for maximum contrast.");
    expect(tips).toHaveTextContent("Avoid using too many animated gradients on a single page to reduce visual distraction.");
  });

  it("renders the live button examples", () => {
    render(<JazzieButtonDocs />);
    const children = screen.getByTestId("children");
    expect(children).toHaveTextContent("Radiant");
    expect(children).toHaveTextContent("Aurora");
    expect(children).toHaveTextContent("Soft Blush");
    expect(children).toHaveTextContent("Rose Quartz");
    expect(children).toHaveTextContent("Pearl Glass");
  });

  it("buttons are clickable", () => {
    render(<JazzieButtonDocs />);
    const children = screen.getByTestId("children");
    const radiantButton = children.querySelector("button:nth-child(1)");
    expect(radiantButton).toBeInTheDocument();
    // fireEvent.click will trigger alert, so we can just spy on window.alert
    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
    fireEvent.click(radiantButton);
    expect(alertSpy).toHaveBeenCalledWith("Radiant clicked!");
    alertSpy.mockRestore();
  });
});
