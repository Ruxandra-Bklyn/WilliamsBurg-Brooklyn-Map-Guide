import React, { Component } from 'react';
import BarList from './BarList';



export default class Sidebar extends Component {
    render() {
        return(
        <div className="sidebar">
            <input type={"search"} id={"search"} placeholder = {"Search Bars"} />
              <BarList {...this.props} />
        </div>
          
        )
    }
}