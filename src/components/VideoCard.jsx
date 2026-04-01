import { Link } from "react-router-dom";

function VideoCard({ video }) {
  const videoId = video.id.videoId;
  const { title, thumbnails, channelTitle } = video.snippet;

  return (
    <Link to={`/video/${videoId}`} style={styles.card}>
      <img
        src={thumbnails.medium.url}
        alt={title}
        style={styles.image}
      />

      <div style={styles.info}>
        <h4 style={styles.title}>{title}</h4>
        <p style={styles.channel}>{channelTitle}</p>
      </div>
    </Link>
  );
}

const styles = {
  card: {
    textDecoration: "none",
    color: "#000",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
  },
  info: {
    paddingTop: "8px",
  },
  title: {
    fontSize: "14px",
    margin: "0",
  },
  channel: {
    fontSize: "12px",
    color: "gray",
  },
};

export default VideoCard;