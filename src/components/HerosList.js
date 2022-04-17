import React from 'react';
import Black from '../assets/images/BB.jpg'
import AVENGERS from '../assets/images/av.jpg'
import Spider from '../assets/images/standard_xlarge.jpg'
import Iron from '../assets/images/Iron.jpg'
import Deadpool from '../assets/images/Dead.jpg'
import Luke from '../assets/images/Luke.jpg'
import Captain from '../assets/images/Captain.jpg'
import Jessica from '../assets/images/jessica.jpg'
import Ant from '../assets/images/Ant.jpg'
import Marvel from '../assets/images/CapMarvel.jpg'
import Guardians from '../assets/images/Galaxy.jpg'
import Wolverine from '../assets/images/wolf.jpg'
import '../styles/MovieList.css';

const HerosList = (props) => {
    const genresList = [
        {
            "id": 1,
            "name": "AVENGERS",
            "Poster": AVENGERS
        }, {
            "id": 2,
            "name": "Spider-Man",
            "Poster": Spider
        }, {
            "id": 3,
            "name": "Iron Man",
            "Poster": Iron
        }, {
            "id": 4,
            "name": "Black Panther",
            "Poster": Black
        }, {
            "id": 5,
            "name": "Deadpool",
            "Poster": Deadpool
        }, {
            "id": 6,
            "name": "Captain America",
            "Poster": Captain
        }, {
            "id": 7,
            "name": "Jessica Jones",
            "Poster": Jessica
        }, {
            "id": 8,
            "name": "Ant-Man",
            "Poster": Ant
        }, {
            "id": 9,
            "name": "Captain Marvel",
            "Poster": Marvel
        }, {
            "id": 10,
            "name": "Guardians of the Galaxy",
            "Poster": Guardians
        }, {
            "id": 11,
            "name": "Wolverine",
            "Poster": Wolverine
        }, {
            "id": 12,
            "name": "Luke Cage",
            "Poster": Luke
        }]

    return (
        <>
            <h2 style={{ position: "relative", display: "flex", justifyContent: "center", marginTop: "30px !important", marginBottom: "50px !important", font: "RobotoCondensed", letterSpacing: "1px", textTransform: "uppercase" }}>Featured Characters</h2>

            <div style={{ display: "flex", justifyContent: "center", flexFlow: "wrap" }} className="container-fluid movie-app">
                {
                    genresList.map((movie, index) =>
                        <div className='row'>
                            <div key={movie.id} className='image-container d-flex movie-frame justify-content-start p-0 m-3'>
                                <img src={movie.Poster} onClick={() => props.history.push("/MoviesComp?SearchKey=" + movie.name)} alt='movie'></img>
                                <div
                                    onClick={() => props.history.push("/MoviesComp?SearchKey=" + movie.name)}
                                    className='overlay d-flex align-items-center justify-content'>

                                </div>
                            </div>
                        </div>)
                }
            </div>
        </>
    )
}

export default HerosList
