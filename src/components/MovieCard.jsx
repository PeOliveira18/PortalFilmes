import { Link } from "react-router-dom";

export default function MovieCard({ id, title, vote_average, backdrop_path, poster_path }) {
    return (
        <div>
            {/* <h2>{title}</h2> */}
            <p>{vote_average}</p>
            {/* <img src={`https://image.tmdb.org/t/p/w1280$x{backdrop_path}`} alt={title} /> */}
            <img src={`https://image.tmdb.org/t/p/w154${poster_path}`} alt={title} />
            <Link to={`/movies/${id}`}>Saber mais</Link>
        </div>
    )

}