import { useEffect, useState } from "react";

function Account() {
    const [assistir, setAssistir] = useState([])
    const [assistido, setAssistido] = useState([])

    useEffect(() => {
        const storedAssistir = JSON.parse(localStorage.getItem('assistir')) || []
        const storedAssistido = JSON.parse(localStorage.getItem('assistidos')) || []
        
        setAssistir(storedAssistir)
        setAssistido(storedAssistido)
    }, [])

    return (  
        <div className="grid sm:grid-cols-2 grid-cols-1  text-center mt-5">
            <div className="flex flex-col justify-center m-auto">
                <h2 className="font-extrabold text-xl">Quero Assistir</h2>
                <ul>
                    {assistir.map((item) => (
                        <div>
                            <li className="w-40">{item.title}</li>
                            <img src={`https://image.tmdb.org/t/p/w154${item.image}`} alt={item.title} className="my-5" />
                        </div>
                    ))}
                </ul>
            </div>
            
            <div className="flex flex-col justify-center m-auto">
                <h2 className="font-extrabold text-xl">Assistido</h2>
                <ul>
                    {assistido.map((item) => (
                        <div>
                            <li className="w-40">{item.title}</li>
                            <img src={`https://image.tmdb.org/t/p/w154${item.image}`} alt={item.title} className="my-5" />
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Account;
