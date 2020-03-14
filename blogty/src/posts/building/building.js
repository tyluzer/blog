import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './building.css';
import { BrowserRouter as Router, Route, Link } from "react-router";


class Building extends React.Component{
  render(){
    return(
    <div className="App">
        <div class='Title'>
            <p>Building</p>
        </div>
    
        <div class='post-container'>
            <div class='post'>
                <p>Buildings</p>
            </div>
        </div>
    </div>
    );
  }
}

export default Building;
