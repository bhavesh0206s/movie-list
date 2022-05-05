import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Navbar({
    debounceInput,
    searchResult,
}: {
    debounceInput: (...args: any) => void;
    searchResult: any[];
}) {
    return (
        <div className="flex flex-row">
            <p className="text-xl font-bold text-gray-700">Discover</p>
            <ul>
                <li>
                    <Link href="/" passHref>
                        Popular
                    </Link>
                </li>
                <li>
                    <Link href="/top-rated" passHref>
                        Top Rated
                    </Link>
                </li>
                <li>
                    <Link href="/newest" passHref>
                        Newest
                    </Link>
                </li>
                <li>
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
