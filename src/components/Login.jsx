
function Login({isLogged, handleLoggin}) {
    return ( 
        <div className="flex gap-4 items-center">
            {isLogged && <p>Ola, usuario</p>}
            <button className={`px-4 py-1 rounded ${isLogged ? 'bg-white text-black' : 'bg-orange-400 text-purple-800'}`} onClick={handleLoggin}>{isLogged ? "Logout" : "Login"}</button>
        </div>
    );
}

export default Login;