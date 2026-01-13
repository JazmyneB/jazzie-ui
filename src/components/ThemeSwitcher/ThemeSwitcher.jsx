import { useState, useRef, useEffect } from "react";
import { useTheme, THEMES } from "../../context/ThemeContext";
import "./ThemeSwitcher.css";

export default function ThemeSwitcher() {
  const { theme, setTheme, mode, setMode } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="theme-switcher" ref={ref}>
      <button
        className="theme-trigger"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        Theme
      </button>

      {open && (
        <div className="theme-panel">
          <div className="mode-toggle">
  <button
    className={mode === "light" ? "active" : ""}
    onClick={() => setMode("light")}
  >
    ☀ Light
    {mode === "light" && <span className="mode-check">✓</span>}
  </button>

  <button
    className={mode === "dark" ? "active" : ""}
    onClick={() => setMode("dark")}
  >
    🌙 Dark
    {mode === "dark" && <span className="mode-check">✓</span>}
  </button>
</div>

          <div className="theme-grid">
            {THEMES.map((t) => (
              <button
  key={t.id}
  className={`theme-swatch ${theme === t.id ? "active" : ""}`}
  onClick={() => setTheme(t.id)}
>
  <span
    className="swatch-color"
    style={{ background: t.color }}
  />
  <span className="swatch-label">{t.label}</span>

  {theme === t.id && <span className="check">✓</span>}
</button>

            ))}
          </div>
        </div>
      )}
    </div>
  );
}
