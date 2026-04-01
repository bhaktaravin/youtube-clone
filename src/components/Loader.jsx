function SkeletonCard() {
  return (
    <div style={styles.card}>
      <div className="skeleton" style={styles.thumb} />
      <div style={styles.info}>
        <div className="skeleton" style={styles.titleLine} />
        <div className="skeleton" style={styles.subLine} />
      </div>
    </div>
  );
}

function Loader({ count = 12 }) {
  return (
    <div style={styles.grid}>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  thumb: {
    width: "100%",
    aspectRatio: "16/9",
    borderRadius: "10px",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    padding: "0 4px",
  },
  titleLine: {
    height: "14px",
    width: "90%",
  },
  subLine: {
    height: "12px",
    width: "50%",
  },
};

export default Loader;
