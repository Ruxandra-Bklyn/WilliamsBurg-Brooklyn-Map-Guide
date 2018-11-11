import React, { Component } from 'react';
import ListVenues from './components/ListVenues';



export default class Sidebar extends Component {
    render() {
        return(
        <div className="sidebar">
              <ListVenues />
        </div>
          
        )
    }
}