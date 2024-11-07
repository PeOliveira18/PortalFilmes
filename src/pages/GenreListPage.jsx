import { useEffect, useState } from "react"
import GenreCard from "../components/GenreCard"
import MovieCard from "../components/MovieCard"

export default function GenreListPage(){
  const [genre, setGenre] = useState([])
  const [movie, setMovie] = useState([])
  const [showMovie, setShowMovie] = useState(true)
  const [id, setId] = useState(0)
  const [page, setPage] = useState(1)
  

  const getDiscoverMovies = async(id,page) => {
    try{
      const url = `${import.meta.env.VITE_API}${import.meta.env.VITE_DISCOVER_MOVIE}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br&with_genres=${id}&page=${page}`
      const res = await fetch(url)
      const data = await res.json()
      setMovie(data.results)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API}${import.meta.env.VITE_GENRE}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`)
    .then(response => response.json())
    .then(data => setGenre(data.genres))
    .catch(error => console.log(error))
    
  },[])

  const handleClickCard = (id) => {
    setShowMovie(false)
    setPage(1)
    setId(id)
    getDiscoverMovies(id, 1)
  }

  const handleback = () => {
    setShowMovie(true)
    setMovie([])
  }

  const handleCarregarMais = () => {
    const nextPage = page + 1
    setPage(nextPage)
    getDiscoverMovies(id, nextPage)
  }

    return(
      <div className="flex flex-col items-center">
        <button onClick={handleback} className="px-5 py-2 mt-5 bg-violet-600 rounded-lg">Voltar</button>
        <div className="sm:grid flex flex-col items-center lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 lg:px-5 my-5 gap-y-10 lg:gap-x-5 gap-x-16 w-full max-w-screen-xl">
          { showMovie ? (
            genre.map(nome => (
              <GenreCard nome={nome} onclick={() => handleClickCard(nome.id)}/>
            ))
          ) : (
          <>
            {
              movie.map(nome => (
                <MovieCard key={nome.id} {...nome} className="" props={'items-start'}/>
              ))
            }
          </>
          )
        }
        </div>
        <button onClick={handleCarregarMais} className="px-5 py-2 mb-12 bg-violet-600 rounded-lg">Carregar mais</button>
      </div>  
    )
}