import corGeneros from '../data/cores.json'


export default function GenreCard({nome, onclick}) {
    
    const nomeGenero = nome.name.toLowerCase()

    const cor = corGeneros[nomeGenero] 
    console.log("Genero", nomeGenero);
    console.log("cor", cor);
    

    return(
        <div className="rounded-xl h-auto p-10 items-center justify-center flex  cursor-pointer max-w-72 w-full" style={{backgroundColor: cor}}  onClick={onclick}>
            <h1 className='font-bold'>{nome.name}</h1>
        </div>
    )
}