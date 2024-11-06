export default function GenreCard({nome, onclick}) {
    return(
        <div className="rounded-xl bg-teal-900 h-auto p-10 items-center justify-center flex  cursor-pointer max-w-72 w-full" onClick={onclick}>
            <h1>{nome.name}</h1>
        </div>
    )
}