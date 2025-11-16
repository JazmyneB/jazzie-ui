// Pagination.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination Component", () => {
  const onPageChange = jest.fn();

  beforeEach(() => {
    onPageChange.mockClear();
  });

  it("renders Prev and Next buttons", () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />);
    expect(screen.getByText("← Prev")).toBeInTheDocument();
    expect(screen.getByText("Next →")).toBeInTheDocument();
  });

  it("Prev button is disabled on first page", () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />);
    expect(screen.getByText("← Prev")).toBeDisabled();
  });

  it("Next button is disabled on last page", () => {
    render(<Pagination currentPage={5} totalPages={5} onPageChange={onPageChange} />);
    expect(screen.getByText("Next →")).toBeDisabled();
  });

  it("renders first pages and ellipsis correctly for currentPage <= 3", () => {
    render(<Pagination currentPage={2} totalPages={10} onPageChange={onPageChange} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("...")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("renders sliding window for middle pages", () => {
    render(<Pagination currentPage={5} totalPages={10} onPageChange={onPageChange} />);
    expect(screen.getAllByText("...").length).toBe(2);
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
  });

  it("renders last pages with ellipsis when near end", () => {
    render(<Pagination currentPage={9} totalPages={10} onPageChange={onPageChange} />);
    expect(screen.getAllByText("...").length).toBe(1);
    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();
    expect(screen.getByText("9")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("clicking page number calls onPageChange", () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />);
    fireEvent.click(screen.getByText("3"));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it("clicking Prev/Next calls onPageChange with correct page", () => {
    render(<Pagination currentPage={3} totalPages={5} onPageChange={onPageChange} />);
    fireEvent.click(screen.getByText("← Prev"));
    expect(onPageChange).toHaveBeenCalledWith(2);
    fireEvent.click(screen.getByText("Next →"));
    expect(onPageChange).toHaveBeenCalledWith(4);
  });

  it("ellipsis buttons are disabled", () => {
    render(<Pagination currentPage={2} totalPages={10} onPageChange={onPageChange} />);
    const dots = screen.getByText("...");
    expect(dots).toBeDisabled();
  });

  it("active page has 'active' class", () => {
    render(<Pagination currentPage={2} totalPages={5} onPageChange={onPageChange} />);
    const activeBtn = screen.getByText("2");
    expect(activeBtn).toHaveClass("active");
  });
});
