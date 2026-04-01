import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchVideos } from "../api/youtube";
import VideoCard from "../components/VideoCard";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function Search() {
  const { query } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = (q) => {
    setLoading(true);
    setError(null);
    fetchVideos(q)
      .then((data) => setVideos(data))
      .catch((err) => setError(err.message || "Search failed."))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load(query);
  }, [query]);

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h2 style={styles.heading}>Results for "{query}"</h2>
        {loading && <Loader />}
        {error && <ErrorMessage message={error} onRetry={() => load(query)} />}
        {!loading && !error && videos.length === 0 && (
          <p style={styles.empty}>No results found for "{query}".</p>
        )}
        {!loading && !error && videos.length > 0 && (
          <div style={styles.grid}>
            {videos.map((video) => (
              <VideoCard key={video.id.videoId} video={video} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "18px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  },
  empty: {
    color: "var(--text-secondary)",
    padding: "40px 0",
    textAlign: "center",
  },
};

export default Search;
