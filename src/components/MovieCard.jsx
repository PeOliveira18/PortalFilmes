import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export default function MovieCard({ id, title, name, vote_average, poster_path }) {
    
    const [assistido, setAssistido] = useState([])
    const [assistir, setAssistir] = useState([])

    useEffect(() => {
        const storageAssistido = JSON.parse(localStorage.getItem('assistidos')) || []
        setAssistido(storageAssistido)

        const storageAssistir = JSON.parse(localStorage.getItem('assistir')) || []
        setAssistir(storageAssistir)
    }, [])

    const handleAssistido = () => {
        if(!assistido.includes(title || name)){
            let updatedAssistidos = [...assistido, title || name]
            setAssistido(updatedAssistidos)
            localStorage.setItem('assistidos', JSON.stringify(updatedAssistidos))
        }else{
            alert('Filme ja adicionado a lista')
        }
    }

    const handleAssistir = () => {
        if(!assistir.includes(title || name)){
            let updatedAssistir = [...assistir, title || name]
            setAssistir(updatedAssistir)
            localStorage.setItem('assistir', JSON.stringify(updatedAssistir))
        }else{
            alert('Filme ja adicionado a lista')
        }
    }


    return (
        <div className="flex pr-10">
            <div className="flex-col mt-5 w-52">
                <h2 className="flex flex-wrap w-48">{title || name }</h2>
                <p>{vote_average}</p>
                    <div className="flex flex-col items-start">
                        <img src={`https://image.tmdb.org/t/p/w154${poster_path}`} alt={title} className="h-[230px]"/>
                        <Link to={`/movies/${id}`}>Saber mais</Link>
                        <button onClick={handleAssistido}>Assistido</button>
                        <button onClick={handleAssistir}>Quero assistir</button>
                    </div>
            </div>
        </div>
    )

}