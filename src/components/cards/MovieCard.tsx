/* eslint-disable @next/next/no-img-element */
export default function MovieCard({
    title,
    poster,
}: {
    title: string;
    poster: string;
}) {
    return (
        <div className="rounded-lg hover:scale-105 transition-all">
            <img src={poster} alt={title} className="rounded-lg shadow-lg" />
            <p className="text-lg text-cyan-100 py-2 text-center">{title}</p>
        </div>
    );
}
