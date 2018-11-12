import React, { Component } from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker, 
    InfoWindow
} from "react-google-maps"

const MyMapComponent = withScriptjs(
 withGoogleMap(props => (
    <GoogleMap
    defaultZoom={12} 
    zoom={props.zoom}
    defaultCenter={{ lat: 40.708497166, lng: -73.951996192 }}
    
  >
                                                  
    {props.markers && 
     props.markers
           .filter(marker => marker.isVisible)
           .map((marker,index,array) => {
     const venueInfo = props.venues.find(venue =>venue.id===marker.id);
     
     
     return (
     
         <Marker 
       key={index} 
       position={{ lat: marker.lat, lng: marker.lng }}  
       onClick={() => props.handleMarkerClick(marker)}
        animation= {
                array.length === 1 ? window.google.maps.Animation.BOUNCE : window.google.maps.Animation.BOUNCE }
        >
       { marker.isOpen && 
         venueInfo.bestPhoto && (
                
        <InfoWindow>
               <React.Fragment>
               <img
               src= {`${venueInfo.bestPhoto.prefix}150x150${
                venueInfo.bestPhoto.suffix}`} 
                alt={"Venue Image"}
            />

               <p>{venueInfo.name}</p>
               </React.Fragment>
        </InfoWindow>
                )}
    </Marker>
);
   })}
    
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
  containerElement={<div style={{ height: `100%`, width: `100%`}} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
        ); 
    }
}

  
