const CATEGORIES = [
  "Programming", "Gaming", "Music", "News", "Sports",
  "Science", "Movies", "Cooking", "Travel", "Finance",
];

function CategoryChips({ active, onSelect }) {
  return (
    <div style={styles.wrapper}>
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          style={{
            ...styles.chip,
            background: active === cat ? "var(--chip-active-bg)" : "var(--chip-bg)",
            color: active === cat ? "var(--chip-active-text)" : "var(--text)",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    gap: "10px",
    padding: "12px 20px",
    overflowX: "auto",
    scrollbarWidth: "none",
    borderBottom: "1px solid var(--border)",
  },
  chip: {
    padding: "6px 14px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "500",
    whiteSpace: "nowrap",
    transition: "background 0.15s",
  },
};

export default CategoryChips;
