// src/pages/docs/__tests__/ToastDocs.test.jsx
import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import ToastDocs from "../docs/ToastDocs";

// Mock Toast to avoid actual animation
jest.mock("../../components/Toast/Toast", () => ({ message, type, show, onClose }) => {
  if (!show) return null;
  return (
    <div data-testid={`toast-${type}`}>
      {message}
      <button onClick={onClose}>Close</button>
    </div>
  );
});

// Mock DocsLayout to render children
jest.mock("./DocsLayout", () => ({ children, title, description }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
    <div>{children}</div>
  </div>
));

describe("ToastDocs Component", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders title and description", () => {
    render(<ToastDocs />);
    expect(screen.getByText("Toast Component")).toBeInTheDocument();
    expect(screen.getByText(/JazzieUI Toast component/i)).toBeInTheDocument();
  });

  it("renders all toast buttons", () => {
    render(<ToastDocs />);
    expect(screen.getByText("Show Info Toast")).toBeInTheDocument();
    expect(screen.getByText("Show Success Toast")).toBeInTheDocument();
    expect(screen.getByText("Show Warning Toast")).toBeInTheDocument();
    expect(screen.getByText("Show Error Toast")).toBeInTheDocument();
  });

  it("shows info toast when info button is clicked", () => {
    render(<ToastDocs />);
    fireEvent.click(screen.getByText("Show Info Toast"));
    expect(screen.getByTestId("toast-info")).toBeInTheDocument();
    expect(screen.getByText("This is an info toast!")).toBeInTheDocument();
  });

  it("shows success toast when success button is clicked", () => {
    render(<ToastDocs />);
    fireEvent.click(screen.getByText("Show Success Toast"));
    expect(screen.getByTestId("toast-success")).toBeInTheDocument();
    expect(screen.getByText("Success! Operation completed.")).toBeInTheDocument();
  });

  it("shows warning toast when warning button is clicked", () => {
    render(<ToastDocs />);
    fireEvent.click(screen.getByText("Show Warning Toast"));
    expect(screen.getByTestId("toast-warning")).toBeInTheDocument();
    expect(screen.getByText("Warning! Check your input.")).toBeInTheDocument();
  });

  it("shows error toast when error button is clicked", () => {
    render(<ToastDocs />);
    fireEvent.click(screen.getByText("Show Error Toast"));
    expect(screen.getByTestId("toast-error")).toBeInTheDocument();
    expect(screen.getByText("Error! Something went wrong.")).toBeInTheDocument();
  });

  it("closes toast when close button is clicked", () => {
    render(<ToastDocs />);
    fireEvent.click(screen.getByText("Show Info Toast"));
    const closeButton = screen.getByText("Close");
    fireEvent.click(closeButton);
    expect(screen.queryByTestId("toast-info")).not.toBeInTheDocument();
  });

  it("renders code example", () => {
    render(<ToastDocs />);
    expect(screen.getByText(/import Toast from '.\/Toast'/i)).toBeInTheDocument();
  });

  it("renders props table", () => {
    render(<ToastDocs />);
    expect(screen.getByText("message")).toBeInTheDocument();
    expect(screen.getByText("type")).toBeInTheDocument();
    expect(screen.getByText("show")).toBeInTheDocument();
    expect(screen.getByText("onClose")).toBeInTheDocument();
    expect(screen.getByText("duration")).toBeInTheDocument();
  });

  it("renders tips section", () => {
    render(<ToastDocs />);
    expect(screen.getByText("Tips")).toBeInTheDocument();
    expect(screen.getByText(/Use the 'show' prop to control/i)).toBeInTheDocument();
  });
});
