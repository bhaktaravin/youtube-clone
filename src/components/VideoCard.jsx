import { Link } from "react-router-dom";

function VideoCard({ video }) {
  const videoId = video.id.videoId;
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  const timeAgo = (dateStr) => {
    const diff = Date.now() - new Date(dateStr);
    const days = Math.floor(diff / 86400000);
    if (days < 1) return "Today";
    if (days < 7) return `${days}d ago`;
    if (days < 30) return `${Math.floor(days / 7)}w ago`;
    if (days < 365) return `${Math.floor(days / 30)}mo ago`;
    return `${Math.floor(days / 365)}y ago`;
  };

  return (
    <Link to={`/video/${videoId}`} style={styles.card}>
      <img
        src={thumbnails.medium.url}
        alt={title}
        style={styles.image}
        loading="lazy"
      />
      <div style={styles.info}>
        <h4 style={styles.title}>{title}</h4>
        <p style={styles.channel}>{channelTitle}</p>
        <p style={styles.meta}>{timeAgo(publishedAt)}</p>
      </div>
    </Link>
  );
}

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    color: "var(--text)",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    aspectRatio: "16/9",
    objectFit: "cover",
    borderRadius: "10px",
  },
  info: {
    paddingTop: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  },
  title: {
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "1.4",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  channel: {
    fontSize: "12px",
    color: "var(--text-secondary)",
  },
  meta: {
    fontSize: "12px",
    color: "var(--text-secondary)",
  },
};

export default VideoCard;
