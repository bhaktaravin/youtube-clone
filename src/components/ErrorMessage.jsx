function ErrorMessage({ message = "Something went wrong.", onRetry }) {
  return (
    <div style={styles.container}>
      <span style={styles.icon}>⚠️</span>
      <p style={styles.text}>{message}</p>
      {onRetry && (
        <button onClick={onRetry} style={styles.btn}>
          Try again
        </button>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    padding: "60px 20px",
    background: "var(--error-bg)",
    borderRadius: "12px",
    margin: "40px auto",
    maxWidth: "400px",
  },
  icon: {
    fontSize: "36px",
  },
  text: {
    color: "var(--error-text)",
    fontSize: "15px",
    textAlign: "center",
  },
  btn: {
    padding: "8px 20px",
    border: "none",
    borderRadius: "20px",
    background: "var(--error-text)",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default ErrorMessage;
