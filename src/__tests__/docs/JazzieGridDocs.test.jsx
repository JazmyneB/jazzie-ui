import React from "react";
import { render, screen, within, fireEvent } from "@testing-library/react";
import JazzieGridDocs from "../../docs/JazzieGridDocs";

beforeAll(() => {
  Object.assign(navigator, {
    clipboard: {
      writeText: jest.fn().mockResolvedValue(),
    },
  });
});

describe("JazzieGridDocs Component", () => {
  beforeEach(() => {
    render(<JazzieGridDocs />);
  });

  it("renders the title and description", () => {
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "JazzieGrid Component"
    );
    expect(
      screen.getByText(/A flexible grid container component to layout children/i)
    ).toBeInTheDocument();
  });

  it("renders the live grid example", () => {
    const items = screen.getAllByText(/Item \d/i);
    expect(items.length).toBe(4);
  });

  it("renders the code example and copy button", () => {
    const codeBlock = screen.getByText((content, element) =>
      element.tagName.toLowerCase() === "code" && content.includes("<JazzieGrid")
    );
    expect(codeBlock).toBeInTheDocument();

    const copyBtn = screen.getByRole("button", { name: /copy/i });
    expect(copyBtn).toBeInTheDocument();

    fireEvent.click(copyBtn);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      expect.stringContaining("<JazzieGrid")
    );
  });

  it("renders the props table correctly", () => {
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();

    const tbody = table.querySelector("tbody");
    expect(tbody).toBeInTheDocument();

    const rows = within(tbody).getAllByRole("row");
    expect(rows.length).toBe(5);
    expect(within(rows[0]).getByText("children")).toBeInTheDocument();
    expect(within(rows[0]).getByText("ReactNode")).toBeInTheDocument();
    expect(within(rows[1]).getByText("columns")).toBeInTheDocument();
    expect(within(rows[1]).getByText("3")).toBeInTheDocument();
    expect(within(rows[2]).getByText("gap")).toBeInTheDocument();
    expect(within(rows[2]).getByText("var(--space-md)")).toBeInTheDocument();
    expect(within(rows[3]).getByText("rowHeight")).toBeInTheDocument();
    expect(within(rows[3]).getByText("auto")).toBeInTheDocument();
    expect(within(rows[4]).getByText("className")).toBeInTheDocument();
    expect(within(rows[4]).getByText('""')).toBeInTheDocument();
  });

  it("renders the tips section correctly", () => {
    const tipsHeading = screen.getByRole("heading", { name: /Tips/i });
    expect(tipsHeading).toBeInTheDocument();

    const tipsList = screen.getByRole("list");
    const tipsItems = within(tipsList).getAllByRole("listitem");

    expect(tipsItems.length).toBe(5);
    expect(tipsItems[0]).toHaveTextContent(/Use `columns` to control how many items appear per row/i);
    expect(tipsItems[1]).toHaveTextContent(/Use `gap` to control spacing between items/i);
    expect(tipsItems[2]).toHaveTextContent(/You can use any ReactNode as a child/i);
    expect(tipsItems[3]).toHaveTextContent(/Row heights can be set explicitly or left as 'auto'/i);
    expect(tipsItems[4]).toHaveTextContent(/Add a `className` to style the grid/i);
  });
});
