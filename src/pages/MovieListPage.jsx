import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { useSearchParams } from "react-router-dom";

export default function MovieListPage(){
    const [search, setsearch] = useState("")
    const [filmesPopulares, setFilmesPopulares] = useState([])
    // const [isLoading, setIsLoading] = useState(false)
    // const [pages, setPages] = useState(1)

    const [searchParams,setSearchParams] = useSearchParams()
    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

    const getSearchMovies = async (url) => {
        try{
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)
        }catch(error){
            console.log(error)   
        }
    }

    useEffect(() => {
        let url
        if(query){
            url =`${import.meta.env.VITE_API}${import.meta.env.VITE_SEARCH}?api_key=${import.meta.env.VITE_API_KEY}&query=${query}`
        }else{
            url  = `${import.meta.env.VITE_API}${import.meta.env.VITE_API_MOVIE_POPULAR}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`
        }

        /* fetch(`${import.meta.env.VITE_API}${import.meta.env.VITE_API_MOVIE_POPULAR}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`)
        .then( data => data.json())
        .then(results => setFilmesPopulares(results.results))
        .catch( erro => console.log(erro))
        .finally(()=> console.log("FInalizando")) */

        /* const searchWithQuery = `${import.meta.env.VITE_API}${import.meta.env.VITE_SEARCH}?api_key=${import.meta.env.VITE_API_KEY}&query=${query}` */
        getSearchMovies(url)

    }, [query])
    
    const handleSearch = (e) => {
        e.preventDefault()
        setsearch(e.target.value)
        setSearchParams({q: search})
    } 

    /* const filmesFiltrados = movies.filter( filme => filme.original_title.toLowerCase().includes(search.toLowerCase())) */

    return(
        <div className="flex flex-col items-center ">
            <h1>Veja o catalogo completo de filmes</h1>
            <form onChange={handleSearch}>
                <input type="text" id="search" className="text-black" value={search}/>
            </form>
            <h1>Reulstados para <span>{query}</span></h1>
            <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
                {
                    movies.length > 0 ?
                    movies
                    // .slice(6,10)
                    .map(filme => (
                        <MovieCard key={filme.id} {...filme} props={'items-start'}/>
                    ))
                    : 
                    <p>Filme nao encotrado</p>
                }
            </section>
        </div>
    )
}