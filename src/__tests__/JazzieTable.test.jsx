import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import JazzieTable from "../components/JazzieTable/JazzieTable";

const columns = [
  { header: "Name", accessor: "name" },
  { header: "Age", accessor: "age" },
];

const data = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 35 },
  { name: "Eve", age: 28 },
  { name: "Frank", age: 32 },
];

describe("JazzieTable Component", () => {
  it("renders column headers", () => {
    render(<JazzieTable data={data} columns={columns} rowsPerPage={5} />);
    columns.forEach((col) => {
      expect(screen.getByText(col.header)).toBeInTheDocument();
    });
  });

  it("renders first page rows correctly", () => {
    render(<JazzieTable data={data} columns={columns} rowsPerPage={5} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.getByText("Charlie")).toBeInTheDocument();
    expect(screen.getByText("David")).toBeInTheDocument();
    expect(screen.getByText("Eve")).toBeInTheDocument();
    expect(screen.queryByText("Frank")).not.toBeInTheDocument();
  });

  it("renders second page rows correctly", () => {
    render(<JazzieTable data={data} columns={columns} rowsPerPage={5} />);
    const nextPageButton = screen.getByText("2");
    fireEvent.click(nextPageButton);
    expect(screen.getByText("Frank")).toBeInTheDocument();
    expect(screen.queryByText("Alice")).not.toBeInTheDocument();
  });

  it("sorts by column ascending and descending", () => {
    render(<JazzieTable data={data} columns={columns} rowsPerPage={10} />);
    
    const ageHeader = screen.getByText("Age");
    
    fireEvent.click(ageHeader);
    const firstRow = screen.getAllByRole("row")[1];
    expect(firstRow).toHaveTextContent("Charlie");

    fireEvent.click(ageHeader);
    const newFirstRow = screen.getAllByRole("row")[1];
    expect(newFirstRow).toHaveTextContent("David");
  });

  it("renders 'No data available' for empty data", () => {
    render(<JazzieTable data={[]} columns={columns} rowsPerPage={5} />);
    expect(screen.getByText("No data available")).toBeInTheDocument();
  });

  it("displays sort arrow on active sorted column", () => {
    render(<JazzieTable data={data} columns={columns} rowsPerPage={5} />);
    const ageHeader = screen.getByText("Age");
    fireEvent.click(ageHeader);
    expect(screen.getByText("↑")).toBeInTheDocument();
    fireEvent.click(ageHeader);
    expect(screen.getByText("↓")).toBeInTheDocument();
  });
});
