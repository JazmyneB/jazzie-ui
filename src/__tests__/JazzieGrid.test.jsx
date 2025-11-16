import React from "react";
import { render } from "@testing-library/react";
import JazzieGrid from "../components/JazzieGrid/JazzieGrid";

describe("JazzieGrid Component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <JazzieGrid>
        <div>Child 1</div>
        <div>Child 2</div>
      </JazzieGrid>
    );

    expect(getByText("Child 1")).toBeInTheDocument();
    expect(getByText("Child 2")).toBeInTheDocument();
  });

  it("applies default styles for columns, gap, and rowHeight", () => {
    const { container } = render(
      <JazzieGrid>
        <div>Child</div>
      </JazzieGrid>
    );

    const gridDiv = container.firstChild;
    expect(gridDiv).toHaveStyle("grid-template-columns: repeat(3, 1fr)");
    expect(gridDiv).toHaveStyle(`gap: var(--space-md)`);
    expect(gridDiv).toHaveStyle("grid-auto-rows: auto");
  });

  it("applies custom columns, gap, and rowHeight", () => {
    const { container } = render(
      <JazzieGrid columns={4} gap="20px" rowHeight="100px">
        <div>Child</div>
      </JazzieGrid>
    );

    const gridDiv = container.firstChild;
    expect(gridDiv).toHaveStyle("grid-template-columns: repeat(4, 1fr)");
    expect(gridDiv).toHaveStyle("gap: 20px");
    expect(gridDiv).toHaveStyle("grid-auto-rows: 100px");
  });

  it("applies additional className if provided", () => {
    const { container } = render(
      <JazzieGrid className="custom-class">
        <div>Child</div>
      </JazzieGrid>
    );

    const gridDiv = container.firstChild;
    expect(gridDiv).toHaveClass("jazzie-grid");
    expect(gridDiv).toHaveClass("custom-class");
  });

  it("renders correctly with no extra props", () => {
    const { container } = render(
      <JazzieGrid>
        <div>Child</div>
      </JazzieGrid>
    );

    const gridDiv = container.firstChild;
    expect(gridDiv).toBeInTheDocument();
    expect(gridDiv.children.length).toBe(1);
  });
});
