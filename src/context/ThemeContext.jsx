import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "rose"
  );
  const [mode, setMode] = useState(
    localStorage.getItem("mode") || "light"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.dataset.mode = mode;
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        mode,
        setMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}


export const THEMES = [
  { id: "rose", label: "Rose", color: "#9B5C71" },
  { id: "royal-blue", label: "Royal Blue", color: "#3F4DB8" },
  { id: "neutral", label: "Neutral", color: "#6E4F3A" },
  { id: "silver", label: "Silver", color: "#7A7B88" },
  { id: "cotton-candy", label: "Cotton Candy", color: "#D96FA3" },
  { id: "lavender-dream", label: "Lavender Dream", color: "#8A6BD1" },
  { id: "milk-tea", label: "Milk Tea", color: "#8E6E56" },
  { id: "pastel-mint", label: "Pastel Mint", color: "#3E8F78" },
  { id: "jaded", label: "Jaded", color: "#4F7F5F" },
];

