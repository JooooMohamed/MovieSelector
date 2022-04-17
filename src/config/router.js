
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import HerosList from '../components/HerosList';
import MovieList from '../components/MovieList';
import MoviesComp from '../components/MoviesComp';
import SeachBox from '../components/SeachBox';

const originalRoutes = [
    <Route key='0' exact path="/" component={HerosList} />,
    <Route key='1' path="/HerosList" component={HerosList} />,
    <Route key='2' path="/MovieList" component={MovieList} />,
    <Route key='3' path="/MoviesComp" component={MoviesComp} />,
    <Route key='4' path="/SeachBox" component={SeachBox} />
]

let routes = (
    <BrowserRouter> 
        <Switch>
            {originalRoutes.map(item =>
                item
            )}
        </Switch>
    </BrowserRouter>

);
export default routes;
