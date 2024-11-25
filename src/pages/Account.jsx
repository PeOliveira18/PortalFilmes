import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Account() {
    /* const [assistir, setAssistir] = useState([])
    const [assistido, setAssistido] = useState([]) */
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        /* const storedAssistir = JSON.parse(localStorage.getItem('assistir')) || []
        const storedAssistido = JSON.parse(localStorage.getItem('assistidos')) || [] */
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || []
        
        setFavorites(storedFavorites)
        /* setAssistir(storedAssistir)
        setAssistido(storedAssistido) */
    }, [])

    

    return (  

        <div className="flex gap-10 mt-10 px-10 flex-wrap justify-center">
            {favorites.map((movie) => (
                <div className="flex flex-col">
                    <img src={`https://image.tmdb.org/t/p/w154${movie.image}`}></img>
                    <Link to={`/movies/${movie.id}`} className="btn-saber-mais">Saber mais</Link>
                </div>
            ))}
        </div>
        // <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 px-5 text-center mt-5 text-white">
        //     <div className="conta-cards">
        //         <h2 className="titulo-conta">Quero Assistir</h2>
        //             <div className="flex flex-wrap justify-center gap-6"> 
        //                 {assistir.length > 0 ? (
        //                     assistir.map((item) => (
        //                         <div>
        //                             <p className="w-40 font-bold">{item.title}</p>
        //                             <img src={`https://image.tmdb.org/t/p/w154${item.image}`} alt={item.title} className="my-5" />
        //                         </div>
        //                     ))
        //                 ) : (
        //                     <p className="text-gray-400">Nenhum filme para assistir!</p>
        //                 )}
        //             </div>                    
        //     </div>
            
        //     <div className="conta-cards">
        //         <h2 className="titulo-conta">Assistido</h2>
        //         <div className="flex flex-wrap justify-center gap-6">
        //             {assistido.length > 0 ? (
        //                 assistido.map((item) => (
        //                     <div>
        //                         <p className="w-40 font-bold">{item.title}</p>
        //                         <img src={`https://image.tmdb.org/t/p/w154${item.image}`} alt={item.title} className="my-5" />
        //                     </div>
        //                 ))
        //             ) : (
        //                 <p className="text-gray-400">Nenhum filme para assistido!</p>
        //             )}
        //         </div>
        //     </div>
        // </div>
    )
}

export default Account;
