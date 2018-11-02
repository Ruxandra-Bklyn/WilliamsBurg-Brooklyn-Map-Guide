import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

const MAP_KEY = "AIzaSyBMAfzFE8WfGm633IdIuvrRPbtQkuoga4s";

class TransylvaniaMap extends Component {
    
    state = {
        map: null
    };

componentDidMount = () =>{
}

 mapReady = (props, map) => {
        // Save the map reference in state and prepare the location markers
        this.setState({map});
    }


render = () => {
    const style = {
        width: "100%",
        height: "100%"
    }
    const center = {
        lat: this.props.lat,
        lng: this.props.lng
    }
    
    return (
        <Map
        role="application"
        aria-label="map"
        onReady={this.mapReady}
        google={this.props.google}
        zoom={this.props.zoom}
        style={style}
        initialCenter={center}
        onclick={this.closeInfoWindow}>
        </Map>
    
    )  
}
    
}
export default GoogleApiWrapper({apiKey: MAP_KEY})(TransylvaniaMap)



















