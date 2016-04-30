import styles from './search-bar.css';
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLocalGroups } from '../actions/index';

// This component was written before server set-up, so a lot of this
// logic will be executed server-side in the final dist version.

// Not sure if it is correct to use global variables in this manner. They are
// shared between methods, but I didn'tthink these should be properties on
// State, because component does not need to re-render after values change.

let groupsCopy1 = [];

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			zipCode: null
		};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.distanceMatrixCallBack = this.distanceMatrixCallBack.bind(this);
	}

	// Process response from Google Maps API, call Action Creator to update
	// localGroups state.
	distanceMatrixCallBack(response, status) {
		let results = [];
		let distanceMatrix = [];
		let groupsCopy2 = [];
		let sortedByDistance = [];

		if (status == google.maps.DistanceMatrixStatus.OK) {
	    var origins = response.originAddresses;
	    var destinations = response.destinationAddresses;
	    var row1 = response.rows[0].elements;
      for (var j = 0; j < row1.length; j++) {
        var element = row1[j];
        var distance = element.distance.text;
      	results = results.concat(distance);
	    }
	  }
	  distanceMatrix = results;
	  groupsCopy2 = this.addDistancePropToObj(groupsCopy1, distanceMatrix);
	  sortedByDistance = _.sortBy(groupsCopy2, 'distance');
	  this.props.setLocalGroups(sortedByDistance);
	}

	// Give Google Maps API a matrix of origin/destinations. In this case,
	// we only have one origin, and an array of destinations.
	distanceMatrix(zip) {
		var origin = `${zip}`;
		var groupZipCodes = [];

		groupZipCodes = _.map(this.props.introGroups, 'zipcode');
		groupsCopy1 = _.clone(this.props.introGroups);

		var service = new google.maps.DistanceMatrixService();
		service.getDistanceMatrix(
		  {
		    origins: [origin],
		    destinations: groupZipCodes,
		    travelMode: google.maps.TravelMode.DRIVING,
		    unitSystem: google.maps.UnitSystem.IMPERIAL,
		  }, this.distanceMatrixCallBack);
	}

	addDistancePropToObj(fooArr1, fooArr2) {
		for (var i = 0; i<fooArr1.length; i++) {
			fooArr1[i]["distance"]=fooArr2[i];
		}
		return fooArr1;
	}

	onInputChange(event) {
		this.setState({ zipCode: event.target.value});
	}

	onFormSubmit(event) {
		// Stop the browser from automatically trying to submit the form.
		event.preventDefault();
		this.distanceMatrix(this.state.zipCode);
		// As convenience to user, clear search term
		this.setState({ zipCode: '' });
	}

	render() {
		return (
			<div className={ styles.mainContainer }>
				<hr className= { styles.lineSeparator } />
				<form onSubmit={this.onFormSubmit} className="">
					<i className={ "fa fa-search" }>{'\u00A0'}</i>
					<input 
						placeholder="Enter your zipcode"
						className=""
						value={this.state.zipCode}
						onChange={this.onInputChange}
					/>
					<span className="">
						<button type="submit" className="">Submit</button>
					</span>
				</form>
				<hr className= { styles.lineSeparator } />
				Groups Near You
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		introGroups: state.introGroups
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setLocalGroups: setLocalGroups }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
