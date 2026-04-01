import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchVideos } from "../api/youtube";
import VideoCard from "../components/VideoCard";
import Navbar from "../components/Navbar";


function Search(){
    const { query } = useParams(); 
    const [videos, setVideos] = useState([]); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setLoading(true); 

        fetchVideos(query) 
        .then((data) => {
            setVideos(data); 
            setLoading(false);
        })
        .catch((err) => {
            console.error(err); 
            setLoading(false);
        })
    }, [query]);

    if(loading) {
        return <p style={{ padding: "20px"}}>Searching... </p>;
    }

    return (
        <>
            <Navbar />
            <div style={styles.container}>
                <h2 style={styles.heading}>Results for "{query}"</h2>
                <div style={styles.grid}>
                    {videos.map((video) => (
                        <VideoCard key={video.id.videoId} video={video} />
                    ))}
                </div>
            </div>
        </>
    );
}


const styles = {
    container :{
        padding: "20px"
    },
    heading: {
        marginBottom: "20px"
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px"
    }
}

export default Search; 
