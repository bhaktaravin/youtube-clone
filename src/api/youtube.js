import axios from "axios"; 
import { API_KEY, BASE_URL } from "../utils/constants";


export const fetchVideos = async(query = "programming") => {
    const { data } = await axios.get(`${BASE_URL}/search`, {
        params: {
            part: "snippet",
            maxResults: 12,
            q: query,
            key: API_KEY,
            type: "video"
        }
    });
    return data.items;
};


export const fetchRelatedVideos = async (videoId) => {
    // relatedToVideoId is deprecated in v3, so we search by videoId as a keyword fallback
    const { data } = await axios.get(`${BASE_URL}/search`, {
        params: {
            part: "snippet",
            maxResults: 10,
            q: videoId,
            type: "video",
            key: API_KEY
        }
    });
    return data.items;
}