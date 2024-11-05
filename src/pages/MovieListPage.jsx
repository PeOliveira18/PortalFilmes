import { useEffect, useState } from "react";
import movies from "../data/movies.json"
import MovieCard from "../components/MovieCard";
import { useSearchParams } from "react-router-dom";

export default function MovieListPage(){
    const [search, setsearch] = useState("")
    const [filmes, setFilmes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [pages, setPages] = useState(1)
    const [movies, setMovies] = useState([])
    const [searchParams] = useSearchParams()

    const query = searchParams.get("q")

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API}${import.meta.env.VITE_API_MOVIE_POPULAR}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`)
        .then( data => data.json())
        .then(results => setFilmes(results.results))
        .catch( erro => console.log(erro))
        .finally(()=> console.log("FInalizando"))

    }, [])
    
    const handleSearch = (e) => {
        setsearch(e.target.value)
    }

    const filmesFiltrados = filmes.filter( filme => filme.original_title.toLowerCase().includes(search.toLowerCase()))

    const handlePages = () => {

    }

    return(
        <div className="flex flex-col items-center">
            <h1 className="m-auto text-center">Veja o catalogo completo de filmes</h1>
            <input type="text" id="search" className="text-black" value={search} onChange={handleSearch}/>
            <section className="grid grid-cols-5 px-10 justify-center gap-x-40">
                {
                    filmesFiltrados.length > 0 ?
                    filmesFiltrados
                    // .slice(6,10)
                    .map(filme => (
                        <MovieCard key={filme.id} {...filme} />
                    ))
                    : 
                    <p>Filme nao encotrado</p>
                }
                <div className="flex justify-center items-center m-auto text-center">
                    <h1>1</h1>
                    <h1>2</h1>
                    <h1>3</h1>
                    <h1>4</h1>
                    <h1>5</h1>
                </div>
            </section>
        </div>
    )
}