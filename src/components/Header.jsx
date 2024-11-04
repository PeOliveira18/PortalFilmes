import { NavLink } from "react-router-dom";
import Login from "./Login";
import { useState } from "react";

export default function Header() {
    const [isLogged, setIsLogged] = useState(false)

    const handleLoggin = () => {
        setIsLogged(!isLogged)
    }

    return (
        <>
            <header className="bg-purple-800 flex text-white justify-around h-14 items-center">
                <div>
                    <h1 className="font-bold">Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-4">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/movies">Filmes</NavLink></li>
                        <li><NavLink to="/genre">Gêneros</NavLink></li>
                        {isLogged &&<li><NavLink to='/settings'/>Configuracoes</li>}
                    </ul>
                </nav>
                <Login isLogged={isLogged} handleLoggin={handleLoggin}/>
            </header>
        </>
    )
}