import { useEffect, useState } from 'react';

export default function usePagination(
    initialData: any,
    url: string,
    pageNumber: number,
) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([...initialData]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        (async () => {
            try {
                if (pageNumber > 1) {
                    const res = await fetch(`${url}page=${pageNumber}`);
                    const data = await res.json();
                    setData((prevState) => [...prevState, ...data.results]);
                }
                setLoading(false);
                setHasMore(true);
            } catch (e) {
                setError(true);
            }
        })();
    }, [pageNumber]);

    return { loading, error, data, hasMore };
}
