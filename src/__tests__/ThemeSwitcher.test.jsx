import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";

// Mock ThemeContext
jest.mock("../context/ThemeContext", () => ({
  useTheme: () => ({
    theme: mockTheme,
    setTheme: mockSetTheme,
  }),
}));

let mockTheme = "rose";
const mockSetTheme = jest.fn();

describe("ThemeSwitcher Component", () => {
  beforeEach(() => {
    mockTheme = "rose";  // reset theme
    mockSetTheme.mockClear();
  });

  test("renders all four theme buttons", () => {
    render(<ThemeSwitcher />);
    
    expect(screen.getByText("🌸 Rose")).toBeInTheDocument();
    expect(screen.getByText("💙 Royal Blue")).toBeInTheDocument();
    expect(screen.getByText("🤎 Neutral")).toBeInTheDocument();
    expect(screen.getByText("⚪ Silver")).toBeInTheDocument();
  });

  test("renders Rose theme as active by default", () => {
    render(<ThemeSwitcher />);
    
    const roseButton = screen.getByText("🌸 Rose");
    expect(roseButton.classList.contains("active-theme")).toBe(true);
  });

  test("clicking Royal Blue button calls setTheme('royal-blue')", () => {
    render(<ThemeSwitcher />);
    
    fireEvent.click(screen.getByText("💙 Royal Blue"));
    expect(mockSetTheme).toHaveBeenCalledWith("royal-blue");
  });

  test("clicking Neutral button calls setTheme('neutral')", () => {
    render(<ThemeSwitcher />);
    
    fireEvent.click(screen.getByText("🤎 Neutral"));
    expect(mockSetTheme).toHaveBeenCalledWith("neutral");
  });

  test("clicking Silver button calls setTheme('silver')", () => {
    render(<ThemeSwitcher />);
    
    fireEvent.click(screen.getByText("⚪ Silver"));
    expect(mockSetTheme).toHaveBeenCalledWith("silver");
  });

  test("active class moves when theme changes", () => {
    // first render as rose
    mockTheme = "royal-blue"; // simulate context theme change
    render(<ThemeSwitcher />);

    const royalBlue = screen.getByText("💙 Royal Blue");
    expect(royalBlue.classList.contains("active-theme")).toBe(true);

    const rose = screen.getByText("🌸 Rose");
    expect(rose.classList.contains("active-theme")).toBe(false);
  });
});
