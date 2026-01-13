import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "rose");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

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

