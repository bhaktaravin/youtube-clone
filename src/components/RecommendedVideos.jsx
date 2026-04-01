import { Link } from "react-router-dom";

function RecommendedVideos({ videos }) {
  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Up next</h3>
      {videos.map((video) => {
        const videoId = video.id.videoId;
        if (!videoId) return null;
        return (
          <Link to={`/video/${videoId}`} key={videoId} style={styles.card}>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              style={styles.image}
              loading="lazy"
            />
            <div style={styles.info}>
              <p style={styles.title}>{video.snippet.title.slice(0, 60)}</p>
              <p style={styles.channel}>{video.snippet.channelTitle}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  heading: {
    fontSize: "15px",
    fontWeight: "600",
    marginBottom: "4px",
    color: "var(--text)",
  },
  card: {
    display: "flex",
    gap: "10px",
    color: "var(--text)",
  },
  image: {
    width: "160px",
    aspectRatio: "16/9",
    objectFit: "cover",
    borderRadius: "8px",
    flexShrink: 0,
  },
  info: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  title: {
    fontSize: "13px",
    fontWeight: "500",
    lineHeight: "1.4",
  },
  channel: {
    fontSize: "12px",
    color: "var(--text-secondary)",
  },
};

export default RecommendedVideos;
