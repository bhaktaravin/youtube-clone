import { useEffect, useState } from "react";

const useFetchVideos = (fetchFunction, param) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        fetchFunction(param)
            .then(setData)
            .catch((err) => setError(err.message || "Something went wrong."))
            .finally(() => setLoading(false));
    }, [param]);

    return { data, loading, error };
};

export default useFetchVideos;
