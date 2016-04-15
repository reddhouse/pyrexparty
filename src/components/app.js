import React from 'react';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="Header">
          <div className ="mainLogo">Pyrex Party!</div>
          <div className="subLogo">Turn one home-cooked meal into many.</div>
        </div>
      	{/* Children will arrive here from routes.js, automatically via 
      		react-router so long as the routes are nested under App */}
      	{this.props.children}
        <div className="Footer">Copyright © 2016 PyrexParty, LLC</div>
      </div>
    );
  }
}
