import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonDocs from "../../docs/ButtonDocs/ButtonDocs";

jest.mock("../../components/PrimaryButton/Button", () => ({ buttonType, children, disabled, onClick }) => (
  <button disabled={disabled} data-testid={`btn-${buttonType}`} onClick={onClick}>
    {children}
  </button>
));

describe("ButtonDocs Component", () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: { writeText: jest.fn() },
    });
  });

  it("renders the title and description", () => {
    render(<ButtonDocs />);
    expect(screen.getByText("Button Component 🌸")).toBeInTheDocument();
    expect(screen.getByText(/versatile, stylish buttons/i)).toBeInTheDocument();
    expect(screen.getByText(/primary, secondary, and tertiary/i)).toBeInTheDocument();
  });

  it("renders usage preview buttons", () => {
    render(<ButtonDocs />);
    const primaryBtn = screen.getByTestId("btn-primary");
    const secondaryBtn = screen.getByTestId("btn-secondary");
    const tertiaryBtn = screen.getByTestId("btn-tertiary");
    const disabledBtn = screen.getByText("Disabled");

    expect(primaryBtn).toBeInTheDocument();
    expect(secondaryBtn).toBeInTheDocument();
    expect(tertiaryBtn).toBeInTheDocument();
    expect(disabledBtn).toBeDisabled();
  });

  it("handles button clicks on preview buttons", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    render(<ButtonDocs />);
    fireEvent.click(screen.getByTestId("btn-primary"));
    fireEvent.click(screen.getByTestId("btn-secondary"));
    fireEvent.click(screen.getByTestId("btn-tertiary"));

    expect(alertMock).toHaveBeenCalledTimes(3);
    expect(alertMock).toHaveBeenCalledWith("Primary clicked!");
    expect(alertMock).toHaveBeenCalledWith("Secondary clicked!");
    expect(alertMock).toHaveBeenCalledWith("Tertiary clicked!");

    alertMock.mockRestore();
  });

  it("renders the code block and copy button works", () => {
    render(<ButtonDocs />);
    const copyBtn = screen.getByText("Copy");
    expect(copyBtn).toBeInTheDocument();

    fireEvent.click(copyBtn);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(expect.stringContaining("import Button from 'jazzie-ui/PrimaryButton';"));
    expect(copyBtn).toHaveTextContent("Copied!");
  });
  
  it("renders the props table correctly", () => {
    render(<ButtonDocs />);
  
    // Find the table
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();

    // Scope search to the table
    const tbody = within(table).getByRole("rowgroup"); // tbody
    expect(tbody).toBeInTheDocument();

    // Check for all expected prop names
    const propNames = ["onClick", "text", "children", "buttonType", "disabled"];

    propNames.forEach((name) => {
      const cells = within(tbody).getAllByText(name);
      expect(cells.length).toBeGreaterThan(0); // at least one match inside tbody
    });

    // Optional: check descriptions
    expect(within(tbody).getByText(/Function executed when the button is clicked./i)).toBeInTheDocument();
    expect(within(tbody).getByText(/Custom JSX content inside the button./i)).toBeInTheDocument();
});

});
