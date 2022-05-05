import { MOVIE_API_KEY, MOVIE_SEARCH_URL, MOVIE_URL } from '@/utils/constant';
import { debounce } from '@/utils/debounce';
import Head from 'next/head';
import {
    JSXElementConstructor,
    ReactElement,
    ReactFragment,
    ReactPortal,
    useCallback,
    useState,
} from 'react';
import Navbar from './navbar/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
    const [searchResult, setSearchResult] = useState([]);

    const searchMovies = async (query: string) => {
        try {
            const res = await fetch(
                `${MOVIE_SEARCH_URL}?api_key=${MOVIE_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
            );
            const data = await res.json();
            setSearchResult(data.results);
        } catch (error) {
            console.log(error);
        }
    };

    const debounceInput = useCallback(debounce(searchMovies), []);

    return (
        <div className="" id="layout">
            <Head>
                <meta property="og:title" content="movie list" />
                <meta property="og:description" content="movie list" />
            </Head>
            <header
                id="mainHeader"
                // className="w-full sticky top-0"
                style={{
                    zIndex: 49,
                }}
            >
                <Navbar
                    searchResult={searchResult}
                    debounceInput={debounceInput}
                />
            </header>
            <main id="main">{children}</main>

            <footer id="footer"></footer>
        </div>
    );
}
