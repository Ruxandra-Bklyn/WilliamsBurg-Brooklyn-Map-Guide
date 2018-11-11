import React, { Component } from 'react';
import BarList from './BarList';



export default class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            query:"", 
            venues:[]
        };
    }
   
        handleSearchForBars = () => { 
            if(this.state.query.trim() !=="") {
             const venues = this.props.venues.filter(venue => venue.name
                 .toLowerCase().includes(this.state.query.toLowerCase())) 
             return venues
            } else {
                return this.props.venues
            }
        };
 

       handleEventChange = event => {
           this.setState({ query:event.target.value })
           const markers = this.props.venues.map(venue => {
           const markerCorresponds = venue.name.toLowerCase().includes(event.target.value.toLowerCase())  
           const markerForEachVenue = this.props.markers.find(marker => marker.id === venue.id)
           if(markerCorresponds) {
              markerForEachVenue.isVisible = true
           } else {
              markerForEachVenue.isVisible = false
           }
               return markerForEachVenue;
           })
           this.props.updateState({markers})
       }
        
            // 
            
            
            
            
            
    render() {
        return(
        <div className="sidebar">
            <input type={"search"} id={"search"} placeholder = {"Search for bars"} onChange={this.handleEventChange} />
              <BarList
            {...this.props} 
            venues={this.handleSearchForBars()}
           
            handleListItemClick={this.props.handleListItemClick} />
        </div>
          
        )
    }
}