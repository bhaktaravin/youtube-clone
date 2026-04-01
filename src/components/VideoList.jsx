import VideoCard from "./VideoCard";

function VideoList({ videos }) {
  return (
    <div style={styles.grid}>
      {videos.map((video) => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  },
};

export default VideoList;
