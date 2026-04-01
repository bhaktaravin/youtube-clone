import { Link } from "react-router-dom";

function RecommendedVideos({ videos }) {
  return (
    <div style={styles.container}>
      {videos.map((video) => {
        const videoId = video.id.videoId;

        return (
          <Link
            to={`/video/${videoId}`}
            key={videoId}
            style={styles.card}
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              style={styles.image}
            />
            <p style={styles.title}>
              {video.snippet.title.slice(0, 60)}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

const styles = {
  container: {
    width: "350px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  card: {
    display: "flex",
    gap: "10px",
    textDecoration: "none",
    color: "#000",
  },
  image: {
    width: "150px",
  },
  title: {
    fontSize: "14px",
  },
};

export default RecommendedVideos;