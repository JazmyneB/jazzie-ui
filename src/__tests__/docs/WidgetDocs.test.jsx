import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import WidgetDocs from "../../docs/WidgetDocs";
import { FaUserAlt } from "react-icons/fa";

// Mock clipboard
beforeAll(() => {
  Object.assign(navigator, {
    clipboard: {
      writeText: jest.fn(),
    },
  });
});

describe("WidgetDocs Component", () => {
  beforeEach(() => {
    render(<WidgetDocs />);
  });

  it("renders title and description", () => {
    expect(
      screen.getByRole("heading", { level: 1 })
    ).toHaveTextContent("DashboardWidget Component");
    expect(
      screen.getByText(/A flexible, styled dashboard widget with optional trend and icon/i)
    ).toBeInTheDocument();
  });

  it("renders code example and copy button", () => {
    const codeBlock = screen.getByText((content, element) =>
      element.tagName.toLowerCase() === "code" && content.includes("<DashboardWidget")
    );
    expect(codeBlock).toBeInTheDocument();

    const copyBtn = screen.getByRole("button", { name: /copy/i });
    expect(copyBtn).toBeInTheDocument();

    fireEvent.click(copyBtn);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      expect.stringContaining("<DashboardWidget")
    );
  });

  it("renders the props table correctly", () => {
  const tables = screen.getAllByRole("table");
  const propsTable = tables.find((table) =>
    within(table).queryByText("title")
  );
  expect(propsTable).toBeInTheDocument();
  const tbody = propsTable.querySelector("tbody");
  expect(tbody).toBeInTheDocument();

  const rows = within(tbody).getAllByRole("row");
  const propRows = rows.filter(
    (row) => within(row).queryAllByRole("cell").length > 0
  );

  expect(propRows.length).toBe(5);

  expect(within(propRows[0]).getByText("title")).toBeInTheDocument();
  expect(within(propRows[1]).getByText("value")).toBeInTheDocument();
  expect(within(propRows[2]).getByText("trend")).toBeInTheDocument();
  expect(within(propRows[3]).getByText("icon")).toBeInTheDocument();
  expect(within(propRows[4]).getByText("variant")).toBeInTheDocument();
});


  it("renders the tips section correctly", () => {
    const tipsHeading = screen.getByRole("heading", { name: /Tips/i });
    expect(tipsHeading).toBeInTheDocument();

    const tipsList = screen.getByRole("list");
    const tipsItems = within(tipsList).getAllByRole("listitem");

    expect(tipsItems.length).toBe(4);
    expect(tipsItems[0]).toHaveTextContent(/Use the `trend` prop to show positive or negative changes/i);
    expect(tipsItems[1]).toHaveTextContent(/Icons enhance recognition/i);
    expect(tipsItems[2]).toHaveTextContent(/Variants control style/i);
    expect(tipsItems[3]).toHaveTextContent(/The widget adjusts width/i);
  });

  it("renders live DashboardWidget examples", () => {
    // Soft variant with icon
    const usersWidget = screen.getByText("Users");
    expect(usersWidget).toBeInTheDocument();
    const usersValue = screen.getByText("1200");
    expect(usersValue).toBeInTheDocument();
    const trendUp = screen.getByText(/↑ 15%/);
    expect(trendUp).toBeInTheDocument();

    // Elevated variant
    const revenueWidget = screen.getByText("Revenue");
    expect(revenueWidget).toBeInTheDocument();
    const revenueValue = screen.getByText("$34K");
    expect(revenueValue).toBeInTheDocument();
    const trendDown = screen.getByText(/↓ 5%/);
    expect(trendDown).toBeInTheDocument();

    // Dark variant without icon
    const signupWidget = screen.getByText("New Signups");
    expect(signupWidget).toBeInTheDocument();
    const signupValue = screen.getByText("85");
    expect(signupValue).toBeInTheDocument();
  });
});
