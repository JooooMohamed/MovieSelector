
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from '../components/MovieList';
import React, { useEffect, useState } from 'react';
import '../App.css';

let serachkey = '';
async function makeReqUrl() {
    const genresList = [
        {
            "id": 1,
            "name": "AVENGERS"
        }, {
            "id": 2,
            "name": "Spider-Man"
        }, {
            "id": 3,
            "name": "Iron Man"
        }, {
            "id": 4,
            "name": "Black Panther"
        }, {
            "id": 5,
            "name": "Deadpool"
        }, {
            "id": 6,
            "name": "Captain America"
        }, {
            "id": 7,
            "name": "Jessica Jones"
        }, {
            "id": 8,
            "name": "Ant-Man"
        }, {
            "id": 9,
            "name": "Captain Marvel"
        }, {
            "id": 10,
            "name": "Guardians of the Galaxy"
        }, {
            "id": 11,
            "name": "Wolverine"
        }, {
            "id": 12,
            "name": "Luke Cage"
        }]
    const randomElement = genresList[Math.floor(Math.random() * genresList.length)];
    let url = `http://www.omdbapi.com/?s==${randomElement.name}&apikey=b25394f2`
    const response = await fetch(url)
    const responseJSON = await response.json()
    return responseJSON;
}

function MoviesComp(props) {

    let index = 0;
    const [movies, setMovies] = useState()
    const [searchValue, setSearchValue] = useState('')

    const query = new URLSearchParams(props.location.search);
    for (let param of query.entries()) {
        if (index == 0) {
            serachkey = param[1];
        }
        index++;
    }
    const getMovieRequest = async (resp) => {
        if (searchValue) {
            let url = `http://www.omdbapi.com/?s==${searchValue}&apikey=b25394f2`
            const response = await fetch(url)
            const responseJSON = await response.json()

            const urlDetail = `http://www.omdbapi.com/?i=${responseJSON.Search[0].imdbID}&apikey=b25394f2`
            const responseDetail = await fetch(urlDetail)
            const responseJSONDetail = await responseDetail.json()

            setMovies(responseJSONDetail)
        } else {
            const movieDe = await makeReqUrl();
            const url = `http://www.omdbapi.com/?i=${movieDe.Search[0].imdbID}&apikey=b25394f2`
            const response = await fetch(url)
            const responseJSON = await response.json()

            setMovies(responseJSON)
        }
    }

    useEffect(() => {
        setSearchValue(serachkey);
        getMovieRequest(searchValue);
    }, [searchValue])

    return (
        <div className="container-fluid movie-app">

            <div className='row'>
                <MovieList
                    movies={movies}
                />
            </div>

        </div>
    );
}

export default MoviesComp;
