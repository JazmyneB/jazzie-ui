import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Tabs from "../components/Tabs/Tabs";

describe("Tabs Component", () => {
  const tabsData = [
    { label: "Tab 1", content: <p>Content 1</p> },
    { label: "Tab 2", content: <p>Content 2</p> },
    { label: "Tab 3", content: <p>Content 3</p> },
  ];

  it("renders without crashing", () => {
    render(<Tabs tabs={tabsData} />);
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Content 1")).toBeInTheDocument();
  });

  it("renders all tab buttons", () => {
    render(<Tabs tabs={tabsData} />);
    tabsData.forEach((tab) => {
      expect(screen.getByText(tab.label)).toBeInTheDocument();
    });
  });

  it("renders correct content for active tab", () => {
  render(<Tabs tabs={tabsData} />);
  expect(screen.getByText("Content 1")).toBeVisible();

  // Click on Tab 2
  fireEvent.click(screen.getByText("Tab 2"));
  expect(screen.getByText("Content 2")).toBeVisible();

  // Fix: element is removed, not hidden
  expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
});


  it("defaultIndex prop sets the initial active tab", () => {
    render(<Tabs tabs={tabsData} defaultIndex={2} />);
    expect(screen.getByText("Content 3")).toBeVisible();
    expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
  });

  it("active class is applied correctly", () => {
    render(<Tabs tabs={tabsData} />);
    const tab1 = screen.getByText("Tab 1");
    const tab2 = screen.getByText("Tab 2");

    // Initially Tab 1 is active
    expect(tab1).toHaveClass("active");
    expect(tab2).not.toHaveClass("active");

    // Click Tab 2
    fireEvent.click(tab2);
    expect(tab2).toHaveClass("active");
    expect(tab1).not.toHaveClass("active");
  });
});
