import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(Boolean(url));
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;
        let mounted = true;
        setLoading(true);
        fetch(url)
            .then((r) => r.json())
            .then((d) => mounted && setData(d))
            .catch((e) => mounted && setError(e))
            .finally(() => mounted && setLoading(false));
        return () => (mounted = false);
    }, [url]);

    return { data, loading, error };
}