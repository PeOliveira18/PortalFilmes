import { Link } from "react-router-dom";



export default function MovieCard({ id, original_title, name, vote_average, backdrop_path, poster_path }) {
    

    return (
        <>
            
            <div className="grid flex-col mt-5 w-56">
                <h2 className="flex flex-wrap">{original_title || name}</h2>
                <p>{vote_average}</p>
                {/* <img src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} alt={title} /> */}
                <img src={`https://image.tmdb.org/t/p/w154${poster_path}`} alt={original_title} /* className="hover:scale-y-125 hover:scale-x-110" *//>
                <Link to={`/movies/${id}`}>Saber mais</Link>
            </div>
        </>
    )

}