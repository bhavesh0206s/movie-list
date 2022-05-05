import Layout from '@/components/Layout';
import { MOVIE_API_KEY, MOVIE_SEARCH_URL, MOVIE_URL } from '@/utils/constant';
import Loading from '@/components/loading/Loading';
import MovieInfiteScroll from '@/components/infinteScroll/MovieInfiteScroll';
import { GetServerSideProps } from 'next';

export default function Search({
    movies,
    query,
}: {
    movies: any;
    query: string;
}) {
    if (!movies) {
        return <Loading />;
    }
    return (
        <Layout>
            <div className="grid grid-cols-4 gap-4">
                <MovieInfiteScroll
                    url={`${MOVIE_SEARCH_URL}?api_key=${MOVIE_API_KEY}&language=en-US&query=${query}&include_adult=false`}
                    initialData={movies}
                />
            </div>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const query = context.query.search;
    try {
        const res = await fetch(
            `${MOVIE_SEARCH_URL}?api_key=${MOVIE_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
        );
        const movies = await res.json();
        return {
            props: { movies: movies.results, query },
        };
    } catch (e) {
        return {
            props: { movies: null },
        };
    }
};
