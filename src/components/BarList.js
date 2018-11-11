import React, { Component } from 'react';
import ListItem from './ListItem';



export default class BarList extends Component {
    render() {
        return(
        <ul className="barList">
            {this.props.venues && 
            this.props.venues.map((venue, index) => 
            <ListItem key={index} {...venue }/>)}

      </ul>
        )
    }
}