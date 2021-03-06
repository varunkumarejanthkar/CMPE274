import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './Home/Home';
import LandingPage from './Home/LandingPage'
import Navbar from './LandingPage/Navbar';
//Create a Main Component
class Main extends Component {
    render(){
        return(
            <div>
                {/*Render Different Component based on Route*/}
                <Route path="/" component={Navbar}/>            
                <Route path="/landing" component={LandingPage}/>               
                <Route path="/home" component={Home}/>               
            </div>
        )
    }
}
//Export The Main Component
export default Main;