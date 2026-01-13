import { useState, useRef, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import "./ThemeSwitcher.css";

const THEMES = [
  { id: "rose", label: "Rose", icon: "🌸" },
  { id: "royal-blue", label: "Royal Blue", icon: "💙" },
  { id: "neutral", label: "Neutral", icon: "🤎" },
  { id: "silver", label: "Silver", icon: "⚪" },
  { id: "cotton-candy", label: "Cotton Candy", icon: "🍭" },
  { id: "lavender-dream", label: "Lavender Dream", icon: "💜" },
  { id: "milk-tea", label: "Milk Tea", icon: "🥛" },
  { id: "pastel-mint", label: "Pastel Mint", icon: "🌿" },
  { id: "jaded", label: "Jaded", icon: "🍃" },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="theme-switcher" ref={ref}>
      <button
        className="theme-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        Theme
      </button>

      {open && (
        <div className="theme-menu" role="menu">
          {THEMES.map((t) => (
            <button
              key={t.id}
              role="menuitem"
              className={`theme-option ${theme === t.id ? "active" : ""}`}
              onClick={() => {
                setTheme(t.id);
                setOpen(false);
              }}
            >
              <span className="theme-icon">{t.icon}</span>
              <span>{t.label}</span>
              {theme === t.id && <span className="check">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
