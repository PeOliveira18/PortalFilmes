import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieDetails } from "../services/getMovieDetails"

export default function MovieDetailPage(){
    const {id} = useParams()

    const [movie, setMovie] = useState({})
    const [cast, setCast] = useState([])
    const [trailer, setTrailer] = useState([])

    useEffect(() => {
        getMovieDetails({
            set: setMovie,
            api: `${import.meta.env.VITE_API}movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`
        })
        getMovieDetails({
            set: data => setCast(data.cast || []),
            api: `${import.meta.env.VITE_API}movie/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`
        })
        getMovieDetails({
            set: data => setTrailer(data.results || []),
            api: `${import.meta.env.VITE_API}movie/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}&language=en`
        })
        /* fetch(`${import.meta.env.VITE_API}movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`)
        .then(response => response.json())
        .then(data => setMovie(data))
        .catch(error => console.log(error))
        .finally(() => console.log('Fetch Atualizado'))

        fetch(`${import.meta.env.VITE_API}movie/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`)
        .then(r => r.json())
        .then(d => setCast(d.cast))
        .catch(e => console.log(e))
        .finally(() => console.log('Fetch Atualizado'))

        fetch(`${import.meta.env.VITE_API}movie/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}&language=en`)
        .then(r => r.json())
        .then(d => setTrailer(d))
        .catch(e => console.log(e))
        .finally(() => console.log('Fetch Atualizado')) */
    },[])

    const officialTrailer = trailer.find(
        video => video.name === "Official Trailer" && video.site === "YouTube"
    );

    return(
        <div className="flex justify-center m-auto text-center my-10 flex-col gap-4">
            <h1 className="text-4xl">{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`} alt={movie.title} className="w-96 h-auto m-auto"/>
            <h1>Avaliacao: {movie.vote_average}</h1>
            <h1>Data de lancamento: {movie.release_date}</h1>
            <h1 className="text-center">{movie.overview}</h1>
            {
                cast.map(elenco => (
                    <h1>{elenco.name}</h1>
                ))
            }
            {
                officialTrailer ? (
                    <div className="my-4">
                        <iframe src={`https://www.youtube.com/embed/${officialTrailer.key}`} frameborder="0" title="Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                ) : (
                    <p>Trailer nao disponivel</p>
                )
            }
        </div>
    )
}