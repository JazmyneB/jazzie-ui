import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ToastDocs from "../docs/ToastDocs";

jest.mock("../components/Toasts/Toast", () => ({ message, type, show, onClose }) => {
  if (!show) return null;
  return (
    <div data-testid={`toast-${type}`}>
      {message}
      <button onClick={onClose}>Close</button>
    </div>
  );
});

jest.mock("../docs/DocsLayout/DocsLayout", () => ({ children, title, description, codeExample, propsTable, tips }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>

    {codeExample && <pre>{codeExample}</pre>}

    {propsTable && (
      <table>
        <tbody>
          {propsTable.map((prop) => (
            <tr key={prop.name}>
              <td>{prop.name}</td>
              <td>{prop.type}</td>
              <td>{prop.default}</td>
              <td>{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}

    {tips && (
      <div>
        <h2>Tips</h2>
        <ul>
          {tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </div>
    )}

    <div>{children}</div>
  </div>
));

describe("ToastDocs Component", () => {
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
    const messageRow = screen.getByText("message").closest("tr");
    expect(messageRow).toHaveTextContent("string");
    expect(messageRow).toHaveTextContent("-");
    expect(messageRow).toHaveTextContent("Text message to display in the toast.");
  });

  it("renders tips section", () => {
    render(<ToastDocs />);
    expect(screen.getByText("Tips")).toBeInTheDocument();
    expect(screen.getByText(/Use the 'show' prop to control/i)).toBeInTheDocument();
  });
});
