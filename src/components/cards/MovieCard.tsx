/* eslint-disable @next/next/no-img-element */
export default function MovieCard({
    title,
    poster,
}: {
    title: string;
    poster: string;
}) {
    return (
        <div className="">
            <img src={poster} alt={title} className="" />
            <p className="text-lg text-blue-600 py-2">{title}</p>
        </div>
    );
}
