import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './tomatoWater.css';
import { BrowserRouter as Router, Route, Link } from "react-router";


class TomatoWater extends React.Component{
  render(){
    return(
    <div className="App">
        <div class='Title'>
            <p>TomatoWater</p>
        </div>
    
        <div class='post-container'>
            <div class='post'>
                <p>Bruce Almighty was nothing short of a miracle. A pretty stupid satirical that ended up providing wholesome entertainment from start to finish. There was a scene in the movie where Bruce (played by the legend Jim Carrey) splits the red sea of tomato soup akin to Moses in the bible. For those that do not know, Bruce Almighty is about an ordinary guy who is bestowed the powers of God. Therefore, the connection between tomato soup and Moses is straightforward and easily inferable. Today I will present a similar connection with a meaning that is totally ambiguous and downright stupid to the naked eye: tomato water and Jesus. </p>
            </div>
        </div>
    </div>
    );
  }
}

export default TomatoWater;
