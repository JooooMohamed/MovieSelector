
import React, { Component } from 'react';
import './App.css';
import MainLayout from './layout/main-layout';

class App extends Component {

    constructor(props) {
        super(props);
    };

    async componentDidMount() {
    }

    render() {
        return (
            <>
                <MainLayout />
            </>
        )
    }
}
export default App;

