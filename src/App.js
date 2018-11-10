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
                zoom: 14
                        };
                    }
    
    closeAllMarkers = () => {
        const markers = this.state.markers.map(marker => {
            marker.isOpen =false;
            return marker;
        });
        this.setState({markers: Object.assign(this.state.markers, markers) });  
    };
    
    handleMarkerClick = (marker) => {
        this.closeAllMarkers();
        console.log(marker);
        marker.isOpen = true;
        this.setState({markers: Object.assign(this.state.markers, marker) });
        squareAPI.getVenueDetails(marker.id)
          .then(response => console.log(response));
    };
    
        
        
    componentDidMount(){
        squareAPI.search({
          "ll": "40.708497166, -73.951996192",
          "query": "bar",
            "limit": 30
            
        }).then(results => { 
            const { venues } = results.response;
            const markers  = venues.map(venue => {
                return {
                    lat: venue.location.lat,
                    lng: venue.location.lng,
                    isOpen: false,
                    id: venue.id,
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
        <div><h1>Bar Map Guide</h1> </div>  
        <MyMap {...this.state }
        handleMarkerClick={this.handleMarkerClick}/>
          </div>    
    );
  }
}


export default App;
