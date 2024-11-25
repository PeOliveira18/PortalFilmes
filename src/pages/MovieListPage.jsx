import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";

export default function MovieListPage(){
    const [search, setsearch] = useState("")
    // const [filmesPopulares, setFilmesPopulares] = useState([])
    // const [isLoading, setIsLoading] = useState(false)
    // const [pages, setPages] = useState(1)

    const [searchParams,setSearchParams] = useSearchParams()
    const [movies, setMovies] = useState([])
    const [movieList, setMovieList] = useState([])
    const [pages, setPages] = useState(1)
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

    const getMoviesList = async () => {
        try{
            const res = await fetch(`${import.meta.env.VITE_API}${import.meta.env.VITE_API_MOVIE_POPULAR}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br&page=${pages}`)
            const data = await res.json()
            setMovieList(data.results)
        }catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        let url
        if(query){
            url =`${import.meta.env.VITE_API}${import.meta.env.VITE_SEARCH}?api_key=${import.meta.env.VITE_API_KEY}&query=${query}`
        }else{
            url = `${import.meta.env.VITE_API}${import.meta.env.VITE_API_MOVIE_POPULAR}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br&page=${pages}`
        }

        fetch(`${import.meta.env.VITE_API}${import.meta.env.VITE_API_MOVIE_POPULAR}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`)
        .then( data => data.json())
        .then(results => setFilmesPopulares(results.results))
        .catch( erro => console.log(erro))
        .finally(()=> console.log("FInalizando")) 

        /* const searchWithQuery = `${import.meta.env.VITE_API}${import.meta.env.VITE_SEARCH}?api_key=${import.meta.env.VITE_API_KEY}&query=${query}` */
        getSearchMovies(url)
        getMoviesList()
    }, [query,pages])

    const filmesFiltrados = movies.filter((movie) => 
        movie.title || name.toLowerCase().includes(search.toLowerCase())
    )
    
    const handleSearch = (e) => {
        e.preventDefault()
        setsearch(e.target.value)
        setSearchParams({q: search})
    } 

    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-3xl mt-4">Veja o catalogo completo de filmes</h1>
            <form onChange={handleSearch} className="my-5">
                <input type="text" id="search" className="text-black w-[550px] px-3 py-2 rounded-xl" value={search} placeholder="Pesquise um filme..."/>
            </form>
            <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-32 gap-y-10 px-5">
                {
                    filmesFiltrados.length > 0 ?
                    filmesFiltrados
                    // .slice(6,10)
                    .map(filme => (
                        <MovieCard key={filme.id} {...filme} props={'items-start'}/>
                    ))
                    : 
                    <p>Filme nao encotrado</p>
                }
            </section>
            <Pagination setPages={setPages} pages={pages}/>
        </div>
    )
}