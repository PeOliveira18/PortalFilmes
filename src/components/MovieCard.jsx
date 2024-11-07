import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ id, title, name, vote_average, poster_path, props }) {
    
    const [assistido, setAssistido] = useState([]);
    const [assistir, setAssistir] = useState([]);
    const movieTitle = title || name;
    const movieImage = poster_path

    useEffect(() => {
        const storageAssistido = JSON.parse(localStorage.getItem('assistidos')) || [];
        const storageAssistir = JSON.parse(localStorage.getItem('assistir')) || [];
        setAssistido(storageAssistido);
        setAssistir(storageAssistir);
    }, []);

    const handleAssistido = () => {
        const updatedAssistidos = JSON.parse(localStorage.getItem('assistidos')) || [];
    
        if (!updatedAssistidos.some(item => item.title === movieTitle)) {
            updatedAssistidos.push({ title: movieTitle, image: movieImage });
            setAssistido(updatedAssistidos);
            localStorage.setItem('assistidos', JSON.stringify(updatedAssistidos));
        } else {
            alert('Filme já adicionado à lista');
        }
    };
    
    const handleAssistir = () => {
        const updatedAssistir = JSON.parse(localStorage.getItem('assistir')) || [];
    
        if (!updatedAssistir.some(item => item.title === movieTitle)) {
            updatedAssistir.push({ title: movieTitle, image: movieImage });
            setAssistir(updatedAssistir);
            localStorage.setItem('assistir', JSON.stringify(updatedAssistir));
        } else {
            alert('Filme já adicionado à lista');
        }
    };
    

    return (
        <div className="flex pr-10">
            <div className="flex-col mt-5 w-52">
                <h2 className="flex flex-wrap w-48">{title || name}</h2>
                <p>{vote_average}</p>
                <div className={`flex flex-col ${props} text-center`}>
                    <img src={`https://image.tmdb.org/t/p/w154${poster_path}`} alt={title} className="h-[230px]" />
                    <Link to={`/movies/${id}`}>Saber mais</Link>
                    <button onClick={handleAssistido}>Assistido</button>
                    <button onClick={handleAssistir}>Quero assistir</button>
                </div>
            </div>
        </div>
    );
}
