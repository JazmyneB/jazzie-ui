import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import LoaderDocs from "../../docs/LoaderDocs";

jest.mock("../../components/Loader/Loader", () => ({ type, width, height, className }) => (
  <div data-testid={`loader-${type}`} style={{ width, height }} className={className} />
));

describe("LoaderDocs Component", () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: { writeText: jest.fn() },
    });
  });

  it("renders the title and description", () => {
    render(<LoaderDocs />);

    expect(screen.getByText("Loader Component 🌸")).toBeInTheDocument();
    expect(screen.getByText(/animated placeholders while your content is loading/i)).toBeInTheDocument();
  });

  it("renders the live example loaders", () => {
    render(<LoaderDocs />);

    const textSm = screen.getByTestId("loader-text-sm");
    const textMd = screen.getByTestId("loader-text-md");
    const textLg = screen.getByTestId("loader-text-lg");
    const card = screen.getByTestId("loader-card");

    expect(textSm).toBeInTheDocument();
    expect(textMd).toBeInTheDocument();
    expect(textLg).toBeInTheDocument();
    expect(card).toBeInTheDocument();
    expect(card).toHaveStyle({ width: "300px", height: "150px" });
  });

  it("renders the code block and copy button works", async () => {
    render(<LoaderDocs />);

    const copyBtn = screen.getByText("Copy");
    expect(copyBtn).toBeInTheDocument();

    fireEvent.click(copyBtn);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(expect.stringContaining("import Loader from 'jazzie-ui/Loader';"));
    expect(screen.getByText("Copied!")).toBeInTheDocument();
  });

  it("renders the props table correctly", () => {
  render(<LoaderDocs />);

  const table = screen.getByRole("table");
  expect(table).toBeInTheDocument();

  const rowgroups = within(table).getAllByRole("rowgroup");
  const tbody = rowgroups[1];

  const propNames = ["type", "width", "height", "className"];
  propNames.forEach((name) => {
    const cells = within(tbody).getAllByText(name);
    expect(cells.length).toBeGreaterThan(0);
  });

  expect(within(tbody).getByText(/Defines the style\/size of the loader./i)).toBeInTheDocument();
  expect(within(tbody).getByText(/Width of the loader./i)).toBeInTheDocument();
  expect(within(tbody).getByText(/Height of the loader/i)).toBeInTheDocument();
  expect(within(tbody).getByText(/Custom CSS class/i)).toBeInTheDocument();
});


  it("renders the tips section correctly", () => {
    render(<LoaderDocs />);

    expect(screen.getByText("Tips")).toBeInTheDocument();

    const tipItems = screen.getAllByRole("listitem");
    expect(tipItems.length).toBeGreaterThan(0);

    // Check first tip content
    expect(tipItems[0]).toHaveTextContent(/Use `text-\*` loaders for inline or text placeholders/i);
  });
});
