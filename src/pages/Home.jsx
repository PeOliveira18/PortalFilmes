import { useEffect, useRef, useState } from "react";
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";


export default function Home() {
    const [topMovies, setTopMovies] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [tvSeries, setTvSeries] = useState([])
    
    const fetchMovies = async () => {
        try {
            const [respostaTopMovies, respostaUpcomingMovies, respostaTvSeries] = await Promise.all(
                [
                    fetch(`${import.meta.env.VITE_API}${import.meta.env.VITE_API_MOVIE_POPULAR}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`),
                    fetch(`${import.meta.env.VITE_API}${import.meta.env.VITE_API_MOVIE_UPCOMING}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`),
                    fetch(`${import.meta.env.VITE_API}${import.meta.env.VITE_API_TV}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`)
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