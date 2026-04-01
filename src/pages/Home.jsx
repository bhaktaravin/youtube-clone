import { useEffect, useState } from "react";
import { fetchVideos } from "../api/youtube";
import VideoList from "../components/VideoList";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos("programming")
      .then((data) => {
        setVideos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        {loading ? <Loader /> : <VideoList videos={videos} />}
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  },
};

export default Home;