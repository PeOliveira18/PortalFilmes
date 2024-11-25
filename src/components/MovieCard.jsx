import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

export default function MovieCard({ id, title, name, poster_path }) {
    const [favorito, setFavorito] = useState(false);

    const movieTitle = title || name;
    const movieImage = poster_path;
    const movieId = id

    useEffect(() => {
        const storageFavorites = JSON.parse(localStorage.getItem("favorites")) || []
        const isFavorite = storageFavorites.some((item) => item.title === movieTitle)
        setFavorito(isFavorite)
    }, [movieTitle])

    const handleFavorite = () => {
        const storageFavorites = JSON.parse(localStorage.getItem("favorites")) || []
        let updatedFavorites;

        if (favorito) {
            updatedFavorites = storageFavorites.filter((item) => item.title !== movieTitle)
        } else {
            updatedFavorites = [...storageFavorites, { title: movieTitle, image: movieImage, id: movieId}]
        }
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
        setFavorito(!favorito)
    };

    return (
        <div className="flex mr-10 flex-col text-center justify-center items-center flex-shrink-0 relative">
            <img
                src={`https://image.tmdb.org/t/p/w154${poster_path}`}
                alt={movieTitle}
                className="h-[230px]"
            />
            <button
                className="absolute p-2 top-2 right-0 bg-white rounded-full transition ease-in-out duration-300 transform hover:scale-125"
                onClick={handleFavorite}
            >
                {favorito ? (
                    <MdFavorite className="text-red-500" />
                ) : (
                    <MdFavoriteBorder className="text-black" />
                )}
            </button>
            <Link to={`/movies/${id}`} className="btn-saber-mais">Saber mais</Link>
        </div>
    );
}
