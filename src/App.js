import React, { Component } from 'react';
import './App.css';
//import locations from './data/locations.json';
import MyMap from './components/MyMap';
//import axios from 'axios';
import squareAPI from "./API"


class App extends Component {
    componentDidMount(){
        squareAPI.search({
          near: "Biertan, Transylvania, Romania",
          query: " biserica fortificata",
          limit: 20
          
            
        }).then(results => console.log(results));
    }
    
  render = () => {
    return (
        
      <div className="App">
        <div><h1>The Fortified Churches of Transylvania: A Map Guide</h1> </div>  
        <MyMap {...this.state }/>
          </div>    
    );
  }
}


export default App;
