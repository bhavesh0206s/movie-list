import Head from 'next/head';
import Image from 'next/image';

import Layout from '@/components/Layout';
import { MOVIE_API_KEY, MOVIE_URL } from '@/utils/constant';
import Loading from '@/components/loading/Loading';
import { useState } from 'react';
import MovieCard from '@/components/cards/MovieCard';
import MovieInfiteScroll from '@/components/infinteScroll/MovieInfiteScroll';

export default function TopRated({ movies }: { movies: any }) {
    if (!movies) {
        return <Loading />;
    }
    return (
        <Layout>
            <div className="grid grid-cols-4 gap-4">
                <MovieInfiteScroll
                    url={`${MOVIE_URL}/top_rated?api_key=${MOVIE_API_KEY}&language=en-US&`}
                    initialData={movies}
                />
            </div>
        </Layout>
    );
}

export const getServerSideProps = async () => {
    try {
        const res = await fetch(
            `${MOVIE_URL}/top_rated?api_key=${MOVIE_API_KEY}&language=en-US&page=1`,
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