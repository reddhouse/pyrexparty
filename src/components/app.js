import styles from './app.css';
import React from 'react';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className={ styles.superContainer }>
        <div className={ styles.headerContainer }>
          <div className={ styles.firstThirdHeader }></div>
          <div className={ styles.secondThirdHeader }>
            <div className ={ styles.mainLogo }>Pyrex Party!</div>
            <div className={ styles.subLogo }>Turn one home-cooked meal into many.</div>
          </div>
          <div className={ styles.thirdThirdHeader }></div>
        </div>
        <div className={ styles.currentComponent }>
          <div className={ styles.firstThirdBody }></div>
          <div className={ styles.secondThirdBody }>
      	   {/* Children will arrive here from routes.js, automatically via 
      		  react-router so long as the routes are nested under App */}
      	   {this.props.children}
           </div>
           <div className={ styles.thirdThirdBody }></div>
        </div>
        <div className={ styles.footer }> Copyright © 2016 PyrexParty, LLC</div>
      </div>
    );
  }
}
