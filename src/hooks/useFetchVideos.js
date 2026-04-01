import { useEffect, useState } from "react";

const useFetchVideos = (fetchFunction, param) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setLoading(true); 
        fetchFunction(param) 
        .then(setData) 
        .catch(console.error) 
        .finally(() => setLoading(false));
    }, [param]);
    return { data, loading };
}
export default useFetchVideos;