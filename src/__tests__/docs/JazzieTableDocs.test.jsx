import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import JazzieTableDocs from "../../docs/JazzieTableDocs";

beforeAll(() => {
  Object.assign(navigator, {
    clipboard: { writeText: jest.fn() },
  });
});

describe("JazzieTableDocs Component", () => {
  beforeEach(() => {
    render(<JazzieTableDocs />);
  });

  it("renders the title and description", () => {
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "JazzieTable Component"
    );
    expect(
      screen.getByText(/A flexible table component with sorting and pagination/i)
    ).toBeInTheDocument();
  });

  it("renders the live table with data", () => {
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("25")).toBeInTheDocument();
  });

  it("renders the code example and copy button", () => {
    const codeBlock = screen.getByText((content, element) =>
      element.tagName.toLowerCase() === "code" && content.includes("<JazzieTable")
    );
    expect(codeBlock).toBeInTheDocument();

    const copyBtn = screen.getByRole("button", { name: /copy/i });
    fireEvent.click(copyBtn);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      expect.stringContaining("<JazzieTable")
    );
  });

  it("renders the props table correctly", () => {
  const tables = screen.getAllByRole("table");
const propsTable = tables.find((table) =>
  within(table).queryByText("data")
);

expect(propsTable).toBeInTheDocument();

const tbody = propsTable.querySelector("tbody");
const rows = within(tbody).getAllByRole("row");
const propRows = rows.filter(row => within(row).queryAllByRole("cell").length > 0);

expect(propRows.length).toBe(3);
expect(within(propRows[0]).getByText("data")).toHaveTextContent("data");
expect(within(propRows[1]).getByText("columns")).toHaveTextContent("columns");
expect(within(propRows[2]).getByText("rowsPerPage")).toHaveTextContent("rowsPerPage");



});


  it("renders the tips section correctly", () => {
    const tipsHeading = screen.getByRole("heading", { name: /Tips/i });
    const tipsList = screen.getByRole("list");
    const tipsItems = within(tipsList).getAllByRole("listitem");

    expect(tipsItems.length).toBe(4);
    expect(tipsItems[0]).toHaveTextContent(/Click on column headers to sort/i);
  });

  it("allows sorting when clicking on headers", () => {
    const nameHeader = screen.getByText("Name");

    fireEvent.click(nameHeader);
    let firstRow = screen.getAllByRole("row")[1];
    let firstName = within(firstRow).getAllByRole("cell")[1].textContent;
    expect(firstName).toBe("Alice");

    fireEvent.click(nameHeader);
    firstRow = screen.getAllByRole("row")[1];
    firstName = within(firstRow).getAllByRole("cell")[1].textContent;
    expect(firstName).toBe("Frank");
  });

  it("handles pagination correctly", () => {
    const nextBtn = screen.getByText(/Next/i);
    fireEvent.click(nextBtn);

    expect(screen.getByText("Frank")).toBeInTheDocument();
  });
});
