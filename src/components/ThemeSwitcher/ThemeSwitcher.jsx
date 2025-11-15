import { useTheme } from "../../context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div style={styles.wrapper}>
      <button
        style={styles.button}
        onClick={() => setTheme("rose")}
        className={theme === "rose" ? "active-theme" : ""}
      >
        🌸 Rose
      </button>

      <button
        style={styles.button}
        onClick={() => setTheme("royal-blue")}
        className={theme === "royal-blue" ? "active-theme" : ""}
      >
        💙 Royal Blue
      </button>

      <button
        style={styles.button}
        onClick={() => setTheme("neutral")}
        className={theme === "neutral" ? "active-theme" : ""}
      >
        🤎 Neutral
      </button>

      <button
        style={styles.button}
        onClick={() => setTheme("silver")}
        className={theme === "silver" ? "active-theme" : ""}
      >
        ⚪ Silver
      </button>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "20px",
  },
  button: {
    padding: "8px 16px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    background: "var(--color-secondary)",
    color: "var(--color-text)",
    fontFamily: "var(--font-primary)",
    boxShadow: "var(--shadow-soft)",
    transition: "0.2s",
  },
};
