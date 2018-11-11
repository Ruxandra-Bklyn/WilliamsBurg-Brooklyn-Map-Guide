import React, { Component } from 'react';
import './App.css';
import MyMap from './components/MyMap';
import Sidebar from './components/Sidebar';
import ListVenues from './components/ListVenues';
import ListItem from './components/ListItem';
import squareAPI from './API/index.js';





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
        const venue = this.state.venues.find(venue => venue.id === marker.id);
        console.log(venue, "SINGLE VENUE");
        
        squareAPI.getVenueDetails(marker.id)
        .then(response => {
        const newVenue = Object.assign(venue, response.response.venue);
            this.setState({venues:Object.assign(this.state.venues, newVenue) });
          console.log(newVenue);
        });
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
        <div><h1>Bar Map Guide</h1></div> 
          <Sidebar />
        <MyMap {...this.state }
        handleMarkerClick={this.handleMarkerClick}/>
          </div>    
    );
  }
}


export default App;
