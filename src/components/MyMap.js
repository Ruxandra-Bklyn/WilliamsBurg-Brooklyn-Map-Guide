import React, { Component } from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps"

const MyMapComponent = withScriptjs(
    withGoogleMap(props =>(
  <GoogleMap
    defaultZoom={10} 
    zoom={props.zoom}
    defaultCenter={{ lat: 40.708497166, lng: -73.951996192 }}
    
  >
                                                  
    {props.markers && 
     props.markers
           .filter(marker => marker.isVisible)
           .map((marker,index) => (

    <Marker key={index} position={{lat: marker.lat, lng: marker.lng}} />
    ))}
  </GoogleMap>
))
);



export default class MyMap extends Component {
    render() {
        return(
        <MyMapComponent
             {...this.props}
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBMAfzFE8WfGm633IdIuvrRPbtQkuoga4s&v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `600px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
        ); 
    }
}

  
