import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ComponentsPage from "../../pages/ComponentsPage/ComponentsPage";

// Mock the componentsData
jest.mock("../../constants", () => ({
  componentsData: [
    { name: "Button", description: "Button component description" },
    { name: "Modal", description: "Modal component description" },
    { name: "InputField", description: "InputField component description" },
  ],
}));

describe("ComponentsPage", () => {
  it("renders sidebar buttons based on componentsData", () => {
    render(<ComponentsPage />);
    expect(screen.getByText("Button")).toBeInTheDocument();
    expect(screen.getByText("Modal")).toBeInTheDocument();
    expect(screen.getByText("InputField")).toBeInTheDocument();
  });

  it("highlights the first button by default", () => {
    render(<ComponentsPage />);
    const button = screen.getByText("Button");
    expect(button).toHaveClass("active");
  });

  it("renders content area with the first component's description by default", () => {
    render(<ComponentsPage />);
    expect(screen.getByText("Button component description")).toBeInTheDocument();
  });

  it("updates active button and content when another button is clicked", () => {
    render(<ComponentsPage />);
    const modalButton = screen.getByText("Modal");
    fireEvent.click(modalButton);

    // Check that the clicked button is now active
    expect(modalButton).toHaveClass("active");

    // Previous active button is no longer active
    expect(screen.getByText("Button")).not.toHaveClass("active");

    // Content area updates
    expect(screen.getByText("Modal component description")).toBeInTheDocument();
  });

  it("renders component JSX if provided instead of description", () => {
    // Override the mock to have a JSX component
    const { componentsData } = require("../../constants");
    componentsData[1].component = <div>Custom Modal Component</div>;

    render(<ComponentsPage />);
    const modalButton = screen.getByText("Modal");
    fireEvent.click(modalButton);

    expect(screen.getByText("Custom Modal Component")).toBeInTheDocument();
  });
});
