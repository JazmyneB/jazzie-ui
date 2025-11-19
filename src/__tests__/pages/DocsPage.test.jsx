import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Docs from "../../pages/DocsPage/DocsPage";

// Mock navigator.clipboard
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(),
  },
});

describe("Docs Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders main heading and intro paragraph", () => {
    render(<Docs />);
    expect(screen.getByText("Getting Started with JazzieUI 🌸")).toBeInTheDocument();
    expect(screen.getByText(/Welcome! This guide will help you install/i)).toBeInTheDocument();
  });

  it("renders installation section with code block", () => {
    render(<Docs />);
    expect(screen.getByText("Installation")).toBeInTheDocument();
    expect(screen.getByText("npm install jazzie-ui")).toBeInTheDocument();
    expect(screen.getAllByText("Copy")[0]).toBeInTheDocument();
  });

  it("renders usage example section with code block", () => {
    render(<Docs />);
    expect(screen.getByText("Usage Example")).toBeInTheDocument();
    expect(screen.getByText(/import { Button, Tabs } from 'jazzie-ui';/i)).toBeInTheDocument();
    expect(screen.getAllByText("Copy")[1]).toBeInTheDocument();
  });

  it("copies installation code to clipboard when copy button clicked", () => {
    render(<Docs />);
    const installCopyBtn = screen.getAllByText("Copy")[0];
    fireEvent.click(installCopyBtn);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("npm install jazzie-ui");
    expect(screen.getByText("Copied!")).toBeInTheDocument();
  });

  it("copies usage code to clipboard when copy button clicked", () => {
    render(<Docs />);
    const usageCopyBtn = screen.getAllByText("Copy")[1];
    fireEvent.click(usageCopyBtn);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(expect.stringContaining("function App()"));
    expect(screen.getByText("Copied!")).toBeInTheDocument();
  });

  it("resets copiedBlock state after 2 seconds", async () => {
    jest.useFakeTimers();
    render(<Docs />);
    const installCopyBtn = screen.getAllByText("Copy")[0];
    fireEvent.click(installCopyBtn);

    expect(screen.getByText("Copied!")).toBeInTheDocument();

    jest.advanceTimersByTime(2000);
    expect(screen.getAllByText("Copy")[0]).toBeInTheDocument();

    jest.useRealTimers();
  });
});
