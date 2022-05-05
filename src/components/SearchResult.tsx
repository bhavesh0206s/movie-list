import MovieCard from './cards/MovieCard';

export default function SearchResult({ data }: { data: any }) {
    return (
        <>
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
                ) => (
                    <MovieCard
                        key={i}
                        title={title}
                        poster={`https://image.tmdb.org/t/p/original/${poster_path}`}
                    />
                ),
            )}
        </>
    );
}
