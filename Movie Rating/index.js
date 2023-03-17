let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

//fonction pour retirer les datas de l'api

let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
    //if input is empty

    if (movieName.lenght <= 0) {
        result.innerHTML = `<h3 class="msg">Please enter a movie name</h3>`;
    }
    //if input isn't empty
    else {
        fetch(url).then((resp) => resp.json()).then((data) => {
            if (data.Response == "True") {

            }
        })
    }
}