import { useEffect, useState } from "react";

const useFetch = (url: any) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<any>(true);
    const [error, setError] = useState<any>(null);

    const fetchData = async () => {
        setData(null);
        setLoading(true);
        setError(null);

        // 5秒待つ
        await new Promise((resolve) => setTimeout(resolve, 5000));

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, loading, error, refetch: fetchData };
};

export default useFetch;