import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Account() {
    const [assistir, setAssistir] = useState([]);
    const [assistido, setAssistido] = useState([]);

    const [searchParams,setSearchParams] = useSearchParams()
    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

    const getSearchMoviesByName = async() => {
        try{
            const res = await fetch(`${import.meta.env.VITE_API}${import.meta.env.VITE_SEARCH}?api_key=${import.meta.env.VITE_API_KEY}&query=${query}`)
            const data = await res.json()
            setMovies(data.results)
            set
        }catch(error){
            console.log(error)
            
        }
    }

    useEffect(() => {
        const storedAssistir = JSON.parse(localStorage.getItem('assistir')) || [];
        const storedAssistido = JSON.parse(localStorage.getItem('assistidos')) || [];
        
        setAssistir(storedAssistir);
        setAssistido(storedAssistido);
        

        getSearchMoviesByName()
    }, [query]);

    

    return (  
        <div>
            <h2>Quero Assistir</h2>
            <ul>
                {assistir.map((item, index) => (
                    <div key={index}>
                        <li>{item.title}</li>
                        <img src={`https://image.tmdb.org/t/p/w154${item.image}`} alt="" />
                    </div>
                ))}
            </ul>
            
            <h2>Assistido</h2>
            <ul>
                {assistido.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Account;
