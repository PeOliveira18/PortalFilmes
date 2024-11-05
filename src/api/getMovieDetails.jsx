export const getMovieDetails = ({set,api}) => {
        fetch(api)
        .then(response => response.json())
        .then(data => set(data))
        .catch(error => console.log(error)
        .finally(() => console.log('Fetch Atualizado'))
        )
    
}