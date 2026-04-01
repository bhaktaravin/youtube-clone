import { useEffect, useState, useCallback } from "react";
import { fetchVideos } from "../api/youtube";
import VideoList from "../components/VideoList";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import CategoryChips from "../components/CategoryChips";

function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("Programming");

  const load = useCallback((cat) => {
    setLoading(true);
    setError(null);
    fetchVideos(cat)
      .then((data) => setVideos(data))
      .catch((err) => setError(err.message || "Failed to load videos."))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    load(category);
  }, [category, load]);

  const handleCategory = (cat) => {
    setCategory(cat);
  };

  return (
    <>
      <Navbar />
      <CategoryChips active={category} onSelect={handleCategory} />
      <div style={styles.container}>
        {loading && <Loader />}
        {error && <ErrorMessage message={error} onRetry={() => load(category)} />}
        {!loading && !error && <VideoList videos={videos} />}
      </div>
    </>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
};

export default Home;
