import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import ButtonDocs from "../../docs/ButtonDocs/ButtonDocs";

jest.mock("../../components/PrimaryButton/Button", () => {
  return function MockButton({ buttonType, children, disabled, onClick }) {
    const testId = `btn-${buttonType}${disabled ? "-disabled" : ""}`;
    return (
      <button disabled={disabled} data-testid={testId} onClick={onClick}>
        {children}
      </button>
    );
  };
});



describe("ButtonDocs Component", () => {
  beforeEach(() => {
    Object.defineProperty(navigator, "clipboard", {
    value: { writeText: jest.fn() },
    writable: true,
    });
  });

  it("renders the title and description", () => {
  render(<ButtonDocs />);
  
  expect(screen.getByText("Button Component 🌸")).toBeInTheDocument();
  expect(screen.getByText(/versatile, stylish buttons/i)).toBeInTheDocument();
  expect(screen.getByText("primary")).toBeInTheDocument();
  expect(screen.getByText("secondary")).toBeInTheDocument();
  expect(screen.getByText("tertiary")).toBeInTheDocument();
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


  it("renders the code block and copy button works", async () => {
    render(<ButtonDocs />);
    const copyBtn = screen.getByText("Copy");
    expect(copyBtn).toBeInTheDocument();

    fireEvent.click(copyBtn);
    await screen.findByText("Copied!");

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(expect.stringContaining("import Button from 'jazzie-ui/PrimaryButton';"));
    expect(copyBtn).toHaveTextContent("Copied!");
  });
  
  it("renders the props table correctly", () => {
  render(<ButtonDocs />);

  const table = screen.getByRole("table");
  expect(table).toBeInTheDocument();

  // get both <thead> and <tbody>
  const [thead, tbody] = within(table).getAllByRole("rowgroup");

  const propNames = ["onClick", "text", "children", "buttonType", "disabled"];

  propNames.forEach((name) => {
    const cells = within(tbody).getAllByText(name);
    expect(cells.length).toBeGreaterThan(0);
    });

  expect(
    within(tbody).getByText(/Function executed when the button is clicked./i)
    ).toBeInTheDocument();

  expect(
    within(tbody).getByText(/Custom JSX content inside the button./i)
    ).toBeInTheDocument();
  });


});
