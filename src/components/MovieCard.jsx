import { Link } from "react-router-dom";
import { useRef } from "react";
import left from "../images/left.svg";
import right from "../images/right.svg";


export default function MovieCard({ id, original_title, name, vote_average, backdrop_path, poster_path }) {
    const carrosel = useRef(null)

    const handleLeftClick = (e) => {
        carrosel.current.scrollLeft -= carrosel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        carrosel.current.scrollLeft += carrosel.current.offsetWidth;
    };

    return (
        <>
            <div className="grid flex-col mt-5 max-w-full w-72 overflow-x-hidden" ref={carrosel}>
                <button onClick={handleLeftClick}><img src={left} alt="" /></button>
                <button onClick={handleRightClick}><img src={right} alt="" /></button>
                <h2>{original_title || name}</h2>
                <p>{vote_average}</p>
                {/* <img src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} alt={title} /> */}
                <img src={`https://image.tmdb.org/t/p/w154${poster_path}`} alt={original_title} />
                <Link to={`/movies/${id}`}>Saber mais</Link>
            </div>
        </>
    )

}