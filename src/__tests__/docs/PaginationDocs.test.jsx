import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import PaginationDocs from "../../docs/PaginationDocs";

describe("PaginationDocs Component", () => {
  beforeEach(() => {
    render(<PaginationDocs />);
  });

  it("renders the title and description", () => {
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Pagination Component"
    );
    expect(
      screen.getByText(/A component for navigating through paginated content/i)
    ).toBeInTheDocument();
  });

  it("renders the live pagination example and allows page changes", () => {
    const prevBtn = screen.getByRole("button", { name: /← Prev/i });
    const nextBtn = screen.getByRole("button", { name: /Next →/i });
    const page1 = screen.getByRole("button", { name: "1" });
    const page2 = screen.getByRole("button", { name: "2" });
    const page3 = screen.getByRole("button", { name: "3" });

    expect(page1).toHaveClass("active");
    expect(prevBtn).toBeDisabled();
    expect(nextBtn).not.toBeDisabled();

    fireEvent.click(nextBtn);
    expect(page2).toHaveClass("active");

    fireEvent.click(page3);
    expect(page3).toHaveClass("active");

    expect(prevBtn).not.toBeDisabled();
  });

  it("renders the code example and copy button", () => {
    const codeBlock = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === "code" && content.includes("<Pagination");
    });

    expect(codeBlock).toBeInTheDocument();
    const copyBtn = screen.getByRole("button", { name: /copy/i });
    expect(copyBtn).toBeInTheDocument();
  });

  it("renders the props table correctly", () => {
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();

    const tbody = table.querySelector("tbody");
    expect(tbody).toBeInTheDocument();

    const rows = within(tbody).getAllByRole("row");
    expect(rows.length).toBe(3);

    expect(within(rows[0]).getByText("currentPage")).toBeInTheDocument();
    expect(within(rows[0]).getByText("number")).toBeInTheDocument();

    expect(within(rows[1]).getByText("totalPages")).toBeInTheDocument();
    expect(within(rows[1]).getByText("number")).toBeInTheDocument();

    expect(within(rows[2]).getByText("onPageChange")).toBeInTheDocument();
    expect(within(rows[2]).getByText(/\(page: number\) => void/i)).toBeInTheDocument();
  });

  it("renders the tips section correctly", () => {
    const tipsHeading = screen.getByRole("heading", { name: /Tips/i });
    expect(tipsHeading).toBeInTheDocument();

    const tipsList = screen.getByRole("list");
    const tipsItems = within(tipsList).getAllByRole("listitem");

    expect(tipsItems.length).toBe(4);
    expect(tipsItems[0]).toHaveTextContent(/Always keep `currentPage` in sync/i);
    expect(tipsItems[1]).toHaveTextContent(/Disable Prev button when on the first page/i);
    expect(tipsItems[2]).toHaveTextContent(/The component automatically adds ellipses/i);
    expect(tipsItems[3]).toHaveTextContent(/You can customize styles via the Pagination.css/i);
  });
});
