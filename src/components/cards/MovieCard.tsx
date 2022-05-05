/* eslint-disable @next/next/no-img-element */
export default function MovieCard({
    title,
    imgSrc,
}: {
    title: string;
    imgSrc: string;
}) {
    return (
        <div className="">
            <img src={imgSrc} alt={title} />
            <p className="text-lg text-blue-600 py-2">{title}</p>
        </div>
    );
}
