import React from 'react';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="Header">
          <h2>Pyrex Party!</h2>
          <p><i>Turn one home-cooked meal into many.</i></p>
        </div>
      	{/* Children may arrive here from routes.js, automatically via 
      		react-router so long as the routes are nested under App */}
      	{this.props.children}
        <div className="Footer">Copyright © 2016 PyrexParty, LLC</div>
      </div>
    );
  }
}
