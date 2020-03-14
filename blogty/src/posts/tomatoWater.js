import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router";


class TomatoWater extends React.Component{
  constructor(){
    super();
    this.state = {
      left:true,
      right:true
    }
  }
  render(){
    return(
    <div className="App">
      <div class='Title'>
          <p>TomatoWater</p>
      </div>
    </div>
    );
  }
}

export default TomatoWater;
