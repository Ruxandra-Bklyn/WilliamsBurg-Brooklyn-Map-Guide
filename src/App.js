import React, { Component } from 'react';
import './App.css';
//import locations from './data/locations.json';
import MyMap from './components/MyMap';
import squareAPI from "./API/index.js" 


class App extends Component {
    
    constructor() {
            super();
            this.state ={
                venues: [],
                markers: [],
                center: [],
                zoom: 12
            };
    }
        
        
    componentDidMount(){
        squareAPI.search({
          "ll": "46.135187, 24.521308",
          "query": "Fortified, Church, Fortress"
            
        }).then(results => { 
            const { venues } = results.response;
            const { center } = results.response.geocode.feature.geometry;
            const  markers  = venues.map(venue => {
                return {
                    lat: venue.location.lat,
                    lng: venue.location.lng,
                    isOpen: false,
                    isVisible: true 
                };
            });
            this.setState({venues, center, markers});
            
            console.log(results);
    });
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
