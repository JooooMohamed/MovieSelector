import React, { Component } from 'react';
import Route from '../config/router';
import LeftMenu from './left-menu';
import Header from './header';

class MainLayout extends Component {

    render() {
        return ( 
            <>
                <LeftMenu />
                <Header />
                {Route}
            </>
        );
    }
}


export default MainLayout;