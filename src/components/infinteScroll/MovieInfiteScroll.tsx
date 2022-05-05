import usePagination from '@/hooks/usePagination';
import { MOVIE_URL } from '@/utils/constant';
import { useCallback, useRef, useState } from 'react';
import MovieCard from '../cards/MovieCard';

export default function MovieInfiteScroll({
    initialData,
    url,
}: {
    initialData: any;
    url: string;
}) {
    const observer = useRef<any>(null);

    const [page, setPage] = useState(1);

    const { data, hasMore, loading, error } = usePagination(
        initialData,
        `${url}`,
        page,
    );
    const lastElementRef = useCallback(
        (node: any) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPage((prevState) => prevState + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, hasMore],
    );

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 p-16">
            {data.map(
                (
                    {
                        title,
                        poster_path,
                    }: {
                        title: string;
                        poster_path: string;
                    },
                    i,
                ) => {
                    if (data.length === i + 1) {
                        return (
                            <div ref={lastElementRef}>
                                <MovieCard
                                    key={i}
                                    title={title}
                                    poster={`https://image.tmdb.org/t/p/original/${poster_path}`}
                                />
                            </div>
                        );
                    } else {
                        return (
                            <MovieCard
                                key={i}
                                title={title}
                                poster={`https://image.tmdb.org/t/p/original/${poster_path}`}
                            />
                        );
                    }
                },
            )}
        </div>
    );
}
