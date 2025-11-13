import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
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
    expect(screen.getByText("Props")).toBeInTheDocument();
    expect(screen.getByText("onClick")).toBeInTheDocument();
    expect(screen.getByText("text")).toBeInTheDocument();
    expect(screen.getByText("children")).toBeInTheDocument();
    expect(screen.getByText("buttonType")).toBeInTheDocument();
    expect(screen.getByText("disabled")).toBeInTheDocument();
    expect(screen.getByText(/Function executed when the button is clicked./)).toBeInTheDocument();
    expect(screen.getByText(/Custom JSX content inside the button./)).toBeInTheDocument();
  });
});
