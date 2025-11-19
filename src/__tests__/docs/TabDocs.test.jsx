import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import TabsDocs from "../../docs/TabDocs";

describe("TabsDocs Component", () => {
  beforeEach(() => {
    render(<TabsDocs />);
  });

  it("renders the title and description", () => {
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Tabs Component"
    );
    expect(
      screen.getByText(/A component for displaying tabbed content/i)
    ).toBeInTheDocument();
  });

  it("renders the live example with tabs", () => {
    const tab1 = screen.getByRole("button", { name: /Tab 1/i });
    const tab2 = screen.getByRole("button", { name: /Tab 2/i });
    const tab3 = screen.getByRole("button", { name: /Tab 3/i });

    expect(tab1).toBeInTheDocument();
    expect(tab2).toBeInTheDocument();
    expect(tab3).toBeInTheDocument();

    expect(screen.getByText("Content 1")).toBeInTheDocument();

    fireEvent.click(tab2);
    expect(screen.getByText("Content 2")).toBeInTheDocument();

    fireEvent.click(tab3);
    expect(screen.getByText("Content 3")).toBeInTheDocument();
  });

  it("renders the code example and copy button", () => {
  const codeBlock = screen.getByText((_, el) =>
    el.classList?.contains("code-block")
  );

  expect(codeBlock).toBeInTheDocument();

  const code = within(codeBlock).getByText((content, element) =>
    element.tagName.toLowerCase() === "code" &&
    content.includes("<Tabs tabs={tabData} defaultIndex={0} />")
  );
  expect(code).toBeInTheDocument();

  const copyBtn = within(codeBlock).getByRole("button", { name: /copy/i });
  expect(copyBtn).toBeInTheDocument();
});




  it("renders the props table correctly", () => {
  const table = screen.getByRole("table");

  const tbody = table.querySelector("tbody");
  expect(tbody).toBeInTheDocument();

  const rows = within(tbody).getAllByRole("row");

  expect(rows.length).toBe(2);

  expect(within(rows[0]).getByText("tabs")).toBeInTheDocument();
  expect(
    within(rows[0]).getByText(/Array<{ label: string, content: ReactNode }>/i)
  ).toBeInTheDocument();

  expect(within(rows[1]).getByText("defaultIndex")).toBeInTheDocument();
  expect(within(rows[1]).getByText("0")).toBeInTheDocument();
});


  it("renders the tips section correctly", () => {
    const tipsHeading = screen.getByRole("heading", { name: /Tips/i });
    expect(tipsHeading).toBeInTheDocument();

    const tipsList = screen.getByRole("list");
    const tipsItems = within(tipsList).getAllByRole("listitem");

    expect(tipsItems.length).toBe(3);
    expect(tipsItems[0]).toHaveTextContent(/Ensure each tab label is unique/i);
    expect(tipsItems[1]).toHaveTextContent(/You can pass any ReactNode as content/i);
    expect(tipsItems[2]).toHaveTextContent(/Use defaultIndex to control which tab/i);
  });
});
