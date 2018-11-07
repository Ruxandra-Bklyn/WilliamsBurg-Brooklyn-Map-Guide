import React, { Component } from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={18}
    defaultCenter={{ lat: 46.135187, lng: 24.521308}}
  >
    {props.isMarkerShown && <Marker position={{ lat: 446.135187, lng: 24.521308}} />}
  </GoogleMap>
))





export default class MyMap extends Component {
    render() {
        return(
        <MyMapComponent
  isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBMAfzFE8WfGm633IdIuvrRPbtQkuoga4s&v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `600px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
        );
        
        
    }
}

  
