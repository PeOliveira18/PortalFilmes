import { useState } from "react";

function Login({isLogged, handleLoggin}) {


    return ( 
        <div className="flex gap-4 items-center">
            {isLogged && <p>Ola, usuario</p>}
            <button className={`bg-${isLogged ? 'white' : 'black'} text-purple-800 px-4 py-1 rounded`} onClick={handleLoggin}>{isLogged ? "Logout" : "Login"}</button>
        </div>
    );
}

export default Login;