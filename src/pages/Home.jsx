import { useEffect, useRef, useState } from "react";
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies.json";
import left from "../images/left.svg"
import right from "../images/right.svg"

export default function Home() {
    const [topMovies, setTopMovies] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [tvSeries, setTvSeries] = useState([])
    
    const fetchMovies = async () => {
        try {
            const [respostaTopMovies, respostaUpcomingMovies, respostaTvSeries] = await Promise.all(
                [
                    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`),
                    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`),
                    fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`)
                ]
            )

            const topMoviesData = await respostaTopMovies.json()
            const upcomingMoviesData = await respostaUpcomingMovies.json()
            const tvSeriesData = await respostaTvSeries.json()

            setTopMovies(topMoviesData.results)
            setUpcomingMovies(upcomingMoviesData.results)
            setTvSeries(tvSeriesData.results)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    const handleLeftClick = (e) =>{
        e.preventDefault()
        carrosel.current.scrollLeft -= carrosel.current.offsetWidth        
    }

    const handleRightClick = (e) => {
        e.preventDefault()
        carrosel.current.scrollLeft += carrosel.current.offsetWidth
    }

    return (
        <>
            <CardContainer titulo="Filmes Populares">
                    <div className="flex">
                        {
                            topMovies
                                // .filter(filme => (filme.ano_lancamento < 2000))
                                .map(filme => (
                                    <MovieCard key={filme.id} {...filme} />
                                ))
                            }
                    </div>
            </CardContainer>
            <CardContainer titulo="Filmes a caminho">
                    <div className="flex">
                        {
                            upcomingMovies.map(filme => (
                                <MovieCard key={filme.id} {...filme}/>
                            ))
                        }
                    </div>
            </CardContainer>
            <CardContainer titulo="Series de TV">
                    <div className="flex">
                        {
                            tvSeries.map(filme => (
                                <MovieCard key={filme.id} {...filme}/>
                            ))
                        }
                    </div>
            </CardContainer>

        </>
    )
}