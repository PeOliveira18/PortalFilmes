import { useEffect, useState } from "react"

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
        <div className="grid grid-cols-4 mx-10 my-5 gap-x-10 gap-y-10">
          { showMovie ? (
            genre.map(nome => (
              <div className="rounded-xl bg-teal-900 h-auto p-10 text-center items-center flex cursor-pointer" onClick={() => handleClickCard(nome.id)}>
                <h1>{nome.name}</h1>
              </div>
            ))
          ) : (
            <div>
              <button onClick={handleback}>Voltar</button>
              {
                movie.map(nome => (
                  <h1>{nome.title}</h1>
                ))
              }
              <button onClick={handleCarregarMais}>Carregar mais</button>
            </div>
          )
        }
        </div>
    )
}