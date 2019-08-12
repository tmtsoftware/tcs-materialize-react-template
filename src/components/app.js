import React, { Component } from 'react';

import Status from './status';
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from './navbar'
import ApsAssembly from './aps/aps_assembly'


import M from 'materialize-css';



class App extends Component {


    constructor(props, context) {
        super(props, context);
    }


    componentDidMount() {
        M.Sidenav.init(this.sidenav);
    }



    render() {


        return (

            <BrowserRouter>


            <div className="App">
                <Navbar/>

                <Route exact path="/" component={Status} />
                <Route path="/APSAssembly" component={ApsAssembly} />

            </div>

            </BrowserRouter>

        );
    }



};


export default App;