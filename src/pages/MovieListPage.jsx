import { useEffect, useState } from "react";
import movies from "../data/movies.json"
import MovieCard from "../components/MovieCard";

export default function MovieListPage(){

    /* const [contador,setContador] = useState(0)
    const [contador2,setContador2] = useState(10)
    const [contador3, setContador3] = useState(contador)
    const [textoBotao, setTextoBotao] = useState('Thiago') */

    /* const handleClick = () => {
        setContador((prev) => prev + 1)
        console.log(contador);
        
    }

    const handleClick2 = () => {
        setContador2((prev) => prev - 1)
        console.log(contador2);
        
    }

    const handleClick3 = () => {
        setContador(0)
        console.log(contador3);
        
    }


    const handleTexto = () => {
        setTextoBotao(prev => prev === 'Thiago' ? 'Almada' : 'Thiago')
    } */
    const [search, setsearch] = useState("")
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br")
        .then( data => data.json())
        .then(results => setFilmes(results.results))
        .catch( erro => console.log(erro))
        .finally(()=> console.log("FInalizando"))

    }, [])
    


    const handleSearch = (e) => {
        setsearch(e.target.value)
        console.log(search);
        
    }

    const filmesFiltrados = filmes.filter( filme => filme.title.includes(search))
    const [isLoading, setIsLoading] = useState(false)

    return(
        <section className="flex flex-wrap justify-between">
            {/* <p>{contador}</p>
            <a onClick={handleTexto} className="cursor-pointer">{textoBotao}</a>
            <button onClick={handleClick}>Aumentar</button> 
            <p>{contador2}</p>
            <button onClick={handleClick2}>Diminui</button>
            <button onClick={handleClick3}>Zerar</button> */}
            <h1>Veja o catalogo completo de filmes</h1>
            <input type="text" id="search" className="text-black" value={search} onChange={handleSearch}/>
            {

                filmesFiltrados.length > 0 ?
                filmesFiltrados
                .slice(6,10)
                .map(filme => (
                    <MovieCard key={filme.id} {...filme} />
                ))
                : <p>Filme nao encotrado</p>
            }
        </section>
    )
}