import React, { Component } from 'react';
import ListItem from  './components/ListItem';


export default class ListVenues extends Component {
    render() {
        return(
        <ol className="listVenues">
       <ListItem />

      </ol>
        )
    }
}