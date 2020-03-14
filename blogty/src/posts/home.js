import React from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      left:true,
      right:true
    }
    this.toggleLeft =this.toggleLeft.bind(this);
    this.toggleRight =this.toggleRight.bind(this);
  }
  

  toggleLeft(event){
    this.setState({left:!this.state.left})
  }

  toggleRight(event){
    this.setState({right:!this.state.right})
  }

  render(){

    const leftStyle = this.state.left ? {display:'none'} : {}
    const rightStyle = this.state.right ? {display:'none'} : {}

    return(
    <div className="App">
      <div class='Title'>
          <p>TyLuzer</p>
      </div>
      
      <div class='navigation'>
        <div class='inline-block-child' id='left' onClick={this.toggleLeft}>
          <p>Valley2Varsity</p>
        </div>
        <div class='inline-block-child' id='right' onClick={this.toggleRight}>
          <p>SciFits</p>
        </div>
      </div>

      <div class='dropdowns'>
        <div class='dropdown-block-child'>
          <div class='not_inline' style={leftStyle}>
            <ul class='blog-links'>
              <li>
                <a>Movement</a>
              </li>
            </ul>
          </div>

        </div>
        <div class='dropdown-block-child'>
          <div class='not_inline'style={rightStyle}>
            <ul class='blog-links'>
              <li>
                <a>Tomato Water</a>
              </li>
              <li>
                <a>Jesus</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
    );
  }
}

export default App;
