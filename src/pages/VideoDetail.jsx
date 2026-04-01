import { useParams } from "react-router-dom";
import { fetchRelatedVideos } from "../api/youtube";
import useFetchVideos from "../hooks/useFetchVideos";
import RecommendedVideos from "../components/RecommendedVideos";
import Navbar from "../components/Navbar";

function VideoDetail() {
  const { videoId: id } = useParams();

  const { data: relatedVideos, loading } =
    useFetchVideos(fetchRelatedVideos, id);

  return (
<>
    <div style={styles.container}>
      <div style={styles.videoSection}>
        <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${id}`}
        allowFullScreen />
      </div>
    </div>

    <div style={styles.sidebar}>
      {loading ? <p> Loading...</p> : (
        <RecommendedVideos videos={relatedVideos} />
      )}
    </div>
    




</>
);
}

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    padding: "20px",
  },
  videoSection: {
    flex: 3,
  },
  sidebar: {
    flex: 1,
  },
};

export default VideoDetail;