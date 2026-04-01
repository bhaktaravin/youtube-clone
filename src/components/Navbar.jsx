import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { dark, toggle } = useTheme();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <nav style={styles.nav}>
      <span
        style={styles.logo}
        onClick={() => navigate("/")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && navigate("/")}
      >
        ▶ YTClone
      </span>

      <form onSubmit={handleSearch} style={styles.form}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.input}
          placeholder="Search..."
          aria-label="Search videos"
        />
        <button type="submit" style={styles.searchBtn} aria-label="Submit search">
          🔍
        </button>
      </form>

      <button onClick={toggle} style={styles.themeBtn} aria-label="Toggle dark mode">
        {dark ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 24px",
    background: "var(--navbar-bg)",
    borderBottom: "1px solid var(--border)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontSize: "18px",
    fontWeight: "700",
    color: "var(--text)",
    cursor: "pointer",
    userSelect: "none",
  },
  form: {
    display: "flex",
    gap: "0",
  },
  input: {
    padding: "8px 14px",
    width: "320px",
    border: "1px solid var(--border)",
    borderRight: "none",
    borderRadius: "20px 0 0 20px",
    background: "var(--input-bg)",
    color: "var(--text)",
    fontSize: "14px",
    outline: "none",
  },
  searchBtn: {
    padding: "8px 16px",
    border: "1px solid var(--border)",
    borderRadius: "0 20px 20px 0",
    background: "var(--surface)",
    cursor: "pointer",
    fontSize: "14px",
  },
  themeBtn: {
    background: "none",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    padding: "4px",
  },
};

export default Navbar;
