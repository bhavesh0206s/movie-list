import Head from 'next/head';
import Image from 'next/image';

import Layout from '@/components/Layout';
import { MOVIE_API_KEY, MOVIE_URL } from '@/utils/constant';
import Loading from '@/components/loading/Loading';
import MovieInfiteScroll from '@/components/infinteScroll/MovieInfiteScroll';

export default function Newest({ movies }: { movies: any }) {
    if (!movies) {
        return <Loading />;
    }
    return (
        <Layout>
            <MovieInfiteScroll
                url={`${MOVIE_URL}/now_playing?api_key=${MOVIE_API_KEY}&language=en-US&`}
                initialData={movies}
            />
        </Layout>
    );
}

export const getServerSideProps = async () => {
    try {
        const res = await fetch(
            `${MOVIE_URL}/now_playing?api_key=${MOVIE_API_KEY}&language=en-US&page=1`,
        );
        const movies = await res.json();
        return {
            props: { movies: movies.results },
        };
    } catch (e) {
        return {
            props: { movies: null },
        };
    }
};
