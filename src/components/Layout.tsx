import Head from 'next/head';
import Navbar from './navbar/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="" id="layout">
            <Head>
                <meta property="og:title" content="movie list" />
                <meta property="og:description" content="movie list" />
            </Head>
            <header
                id="mainHeader"
                className="w-full sticky top-0"
                style={{
                    zIndex: 49,
                }}
            >
                <Navbar />
            </header>
            <main id="main">{children}</main>

            <footer id="footer"></footer>
        </div>
    );
}
