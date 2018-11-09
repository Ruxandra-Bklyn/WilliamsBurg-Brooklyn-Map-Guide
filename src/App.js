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
                markers:[],
                zoom: 12
            };
    }
        
        
    componentDidMount(){
        squareAPI.search({
          "ll": "40.708497166, -73.951996192",
          "query": "oysters, happy hour",
            "limit": 20
            
        }).then(results => { 
            const { venues } = results.response;
            const  markers  = venues.map(venue => {
                return {
                    lat: venue.location.lat,
                    lng: venue.location.lng,
                    isOpen: false,
                    isVisible: true 
                };
            });
            this.setState({venues, markers})
            
            console.log(results);
    });
    }
    
  render = () => {
    return (
        
      <div className="App">
        <div><h1>Williamsburg, Brooklyn: Map Guide</h1> </div>  
        <MyMap {...this.state }/>
          </div>    
    );
  }
}


export default App;
