import Head from 'next/head';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout';
import { MOVIE_API_KEY, MOVIE_URL } from '@/utils/constant';
import Loading from '@/components/loading/Loading';

export default function Home({ movies }) {
    if (!movies) {
        return <Loading />;
    }
    return <Layout></Layout>;
}

export const getServerSideProps = async () => {
    try {
        const res = await fetch(
            `${MOVIE_URL}/popular?api_key=${MOVIE_API_KEY}&language=en-US&page=1`,
        );
        const movies = await res.json();
        return {
            props: { movies },
        };
    } catch (e) {
        return {
            props: { movies: null },
        };
    }
};
