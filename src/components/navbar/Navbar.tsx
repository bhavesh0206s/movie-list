import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import SearchBar from './SearchBar';

export default function Navbar({
    debounceInput,
    searchResult,
}: {
    debounceInput: (...args: any) => void;
    searchResult: any[];
}) {
    const router = useRouter();

    const isActive = (currRoute: string) => {
        return router.asPath === currRoute;
    };

    return (
        <div className="flex gap-4 flex-col justify-center xl:flex-row xl:justify-between items-center mt-6 xl:mt-12 xl:py-3 lg:px-44">
            <p className="text-5xl font-bold text-gray-200">
                <Link href="/" passHref>
                    Discover
                </Link>
            </p>
            <ul className="flex flex-row">
                <li
                    className={`${
                        isActive(`/`) ? `text-cyan-400` : `text-gray-200`
                    } pr-4 text-lg xl:text-xl`}
                >
                    <Link href="/" passHref>
                        Popular
                    </Link>
                </li>
                <li
                    className={`${
                        isActive(`/top-rated`)
                            ? `text-cyan-400`
                            : `text-gray-200`
                    } pr-4 text-lg xl:text-xl`}
                >
                    <Link href="/top-rated" passHref>
                        Top Rated
                    </Link>
                </li>
                <li
                    className={`${
                        isActive(`/newest`) ? `text-cyan-400` : `text-gray-200`
                    } pr-4 text-lg xl:text-xl`}
                >
                    <Link href="/newest" passHref>
                        Newest
                    </Link>
                </li>
                <li
                    className={`${
                        isActive(`/upcoming`)
                            ? `text-cyan-400`
                            : `text-gray-200`
                    } pr-4 text-lg xl:text-xl`}
                >
                    <Link href="/upcoming" passHref>
                        Upcoming
                    </Link>
                </li>
            </ul>
            <SearchBar
                searchResult={searchResult}
                debounceInput={debounceInput}
            />
        </div>
    );
}
