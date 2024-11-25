import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieDetails } from "../services/getMovieDetails"
import { FaStar, FaCoins,FaCalendar } from "react-icons/fa"

export default function MovieDetailPage() {
    const { id } = useParams()

    const [movie, setMovie] = useState({})
    const [cast, setCast] = useState([])
    const [trailer, setTrailer] = useState([])
    const [revenueInBRL, setRevenueInBRL] = useState(null)
    const [width, setWidth] = useState(1024)

    const exchangeRate = 5

    useEffect(() => {
        if (movie.revenue){
            const convertedRevenue = movie.revenue * exchangeRate
            setRevenueInBRL(convertedRevenue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
        }

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
    }, [])

    const officialTrailer = trailer.find(
        video => video.name === "Official Trailer" && video.site === "YouTube"
    )

    return (
        <div className="flex justify-center m-auto text-center relative text-white bg-cover bg-center lg:h-screen h-[1200px] overflow-y-hidden" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`, }}>
            <div className="bg-black bg-opacity-70 p-10 w-full h-full absolute top-0 left-0 flex lg:flex-row flex-col">
                <h1 className="text-5xl font-bold mb-5 lg:hidden block">{movie.title}</h1>
                <img src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt={movie.title} className="w-96 h-auto m-auto" />
                <div className="flex flex-col items-center">
                    <h1 className="text-5xl font-bold mb-5 lg:block hidden">{movie.title}</h1>
                    <h1 className="max-w-2xl w-full text-left font-semibold text-lg mt-3">{movie.overview}</h1>
                    <div className="flex gap-10 justify-center">
                        <div className="detalhes-filme">   
                            <FaStar className="text-yellow-500"/>
                            <h1>{movie.vote_average}</h1>
                        </div>
                        <div className="detalhes-filme">
                            <FaCalendar className="text-yellow-500"/>
                            <h1>{movie.release_date}</h1>
                        </div>
                        <div className="detalhes-filme">
                            <FaCoins className="text-yellow-500"/>
                            <h1>{revenueInBRL ? revenueInBRL : 'Valor nao divulgado'}</h1>
                        </div> 
                    </div>
                    {
                        officialTrailer ? (
                            <div className="my-4 m-auto max-w-lg w-full ">
                                <iframe  width="560" height="315" src={`https://www.youtube.com/embed/${officialTrailer.key}`} frameborder="0" title="Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        ) : (
                            <p>Trailer nao disponivel</p>
                        )
                    }
                </div>
                {/* <div className="flex flex-wrap justify-center gap-3 mt-3 px-4">
                {
                    cast.map(elenco => (
                        <h1 >{elenco.name}</h1>
                    ))
                }
            </div> */}
            </div>
        </div>
    )
}