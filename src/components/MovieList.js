import React from 'react';
import '../styles/MovieList.css';
const MovieList = (props) => {
    const movie = props.movies != undefined ? props.movies : {};

    const Genre1 = props.movies != undefined ? movie.Genre.split(',')[0] : "";
    const Genre2 = props.movies != undefined ? movie.Genre.split(',')[1] : "";
    const Genre3 = props.movies != undefined ? movie.Genre.split(',')[2] : "";

    return (
        <>
            <div id="contents">
                <div class="container">
                    <header>
                        <h1>Generate Random Movie</h1>
                    </header>
                    <main>
                        <section id="movie-details-container">
                            <div class="movie-title-container" title="Google the movie"><h2>{movie.Title}</h2></div>

                            <div class="movie-image-container">
                                <img src={movie.Poster} alt='movie' id="loading-image" style={{ marginLeft: '5px', height: "100%", width: "100%" }}></img>
                            </div>
                            <div class="movie-subdetails-container">
                                <p class="movie-year">{movie.Year}</p>
                                <p class="movie-rating">{movie.imdbRating}</p>
                                <p class="movie-duration">{movie.Runtime}</p>
                            </div>
                            <div class="movie-genres-container">
                                <div class="genres-heading-container"><h3>Genres</h3></div>
                                <div class="genres-container">
                                    <p class="genre">{Genre1}</p>
                                    <p class="genre">{Genre2}</p>
                                    <p class="genre">{Genre3}</p>
                                </div>
                            </div>
                            <div class="movie-description-container">
                                {movie.Plot}
                            </div>
                        </section>
                        <section id="shuffle-button-container">
                            <button id="shuffle-button-bottom" onClick={() => window.location.reload()}>Generate Random Movie</button>
                        </section>
                    </main>

                </div>
            </div>
        </>
    )
}
export default MovieList; 