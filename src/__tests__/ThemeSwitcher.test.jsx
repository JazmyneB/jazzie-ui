import { render, screen, fireEvent } from "@testing-library/react";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";
import { ThemeContext } from "../context/ThemeContext";

describe("ThemeSwitcher", () => {
  const mockSetTheme = jest.fn();

  const renderWithTheme = (theme = "rose") => {
    render(
      <ThemeContext.Provider value={{ theme, setTheme: mockSetTheme }}>
        <ThemeSwitcher />
      </ThemeContext.Provider>
    );
  };

  beforeEach(() => {
    mockSetTheme.mockClear();
  });

  it("renders all theme buttons", () => {
    renderWithTheme();

    const buttons = [
      "🌸 Rose",
      "💙 Royal Blue",
      "🤎 Neutral",
      "⚪ Silver",
      "🍭 Cotton Candy",
      "💜 Lavender Dream",
      "🥛 Milk Tea",
      "🌿 Pastel Mint",
      "🍃 Jaded",
    ];

    buttons.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it("calls setTheme with correct theme when button is clicked", () => {
    renderWithTheme();

    fireEvent.click(screen.getByText("💙 Royal Blue"));
    expect(mockSetTheme).toHaveBeenCalledWith("royal-blue");

    fireEvent.click(screen.getByText("🥛 Milk Tea"));
    expect(mockSetTheme).toHaveBeenCalledWith("milk-tea");
  });

  it("applies active-theme class to current theme", () => {
    renderWithTheme("jaded");
    const jadedButton = screen.getByText("🍃 Jaded");
    expect(jadedButton).toHaveClass("active-theme");

    const roseButton = screen.getByText("🌸 Rose");
    expect(roseButton).not.toHaveClass("active-theme");
  });
});
