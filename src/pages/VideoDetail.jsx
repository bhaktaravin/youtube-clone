import { useParams } from "react-router-dom";
import { fetchRelatedVideos, fetchVideoDetails } from "../api/youtube";
import useFetchVideos from "../hooks/useFetchVideos";
import RecommendedVideos from "../components/RecommendedVideos";
import Navbar from "../components/Navbar";
import ErrorMessage from "../components/ErrorMessage";

function VideoDetail() {
  const { videoId } = useParams();

  const { data: relatedVideos, loading: relatedLoading, error: relatedError } =
    useFetchVideos(fetchRelatedVideos, videoId);

  const { data: details, loading: detailsLoading, error: detailsError } =
    useFetchVideos(fetchVideoDetails, videoId);

  const info = details?.[0]?.snippet;

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        {/* LEFT */}
        <div style={styles.videoSection}>
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${videoId}`}
            allowFullScreen
            style={styles.iframe}
            title="Video player"
          />
          {detailsLoading && <p style={styles.meta}>Loading details...</p>}
          {detailsError && <ErrorMessage message={detailsError} />}
          {info && (
            <div style={styles.details}>
              <h2 style={styles.title}>{info.title}</h2>
              <p style={styles.channel}>{info.channelTitle}</p>
              <p style={styles.description}>{info.description}</p>
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div style={styles.sidebar}>
          {relatedLoading && <p style={{ color: "var(--text-secondary)" }}>Loading...</p>}
          {relatedError && <ErrorMessage message={relatedError} />}
          {!relatedLoading && !relatedError && (
            <RecommendedVideos videos={relatedVideos} />
          )}
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "24px",
    padding: "20px",
  },
  videoSection: {
    flex: 3,
    minWidth: 0,
  },
  iframe: {
    borderRadius: "10px",
    border: "none",
  },
  details: {
    marginTop: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
  },
  channel: {
    fontSize: "14px",
    color: "var(--text-secondary)",
  },
  description: {
    fontSize: "13px",
    color: "var(--text-secondary)",
    lineHeight: "1.6",
    marginTop: "8px",
    whiteSpace: "pre-wrap",
  },
  meta: {
    color: "var(--text-secondary)",
    marginTop: "10px",
  },
  sidebar: {
    flex: 1,
    minWidth: "300px",
  },
};

export default VideoDetail;
