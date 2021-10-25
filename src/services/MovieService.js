
export async function getAllMovies(){

    const response = await fetch('/api/getShows');
    return await response.json();

}

export async function listOfShows(data){

    const response = await fetch('/api/saveShows', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return await response.json();
}

export async function getTheWeather(){

    const response = await fetch('/api/getWeather');
    return await response.json();

}