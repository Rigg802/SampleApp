import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

import { NavigatorStyle, NavigatorProps } from '../../models';

const defaultStyles: NavigatorStyle = {

};

class Navigator extends Component< NavigatorProps,void > {
  constructor(props:NavigatorProps) {
    super(props);
  }

  render() {

    let layouts:Array<any>;
    if(this.props.layouts === undefined){
      layouts = [
        {
          id:0,
          name: 'hola'
        },
        {
          id:1,
          name:'muchacho'
        }
      ]
    }
    else{
      layouts = this.props.layouts;
    }
    return (
      <div style={defaultStyles}>
        <Link to="/">◀︎ Back</Link>
        <ul>
          {
            layouts.map((layout, index) => (
            <li key={index}>
              <Link to={`/layout/${index}`}>{layout.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}


export default Navigator;