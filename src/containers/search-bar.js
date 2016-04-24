import styles from './search-bar.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { takeAction } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { dataLocal: null };
	}

	render() {
		return (
			<div className={ styles.mainContainer }>
				<hr className= { styles.lineSeparator } />
				<i className={ "fa fa-search" }>{'\u00A0'}</i>
				Enter Zipcode
				<hr className= { styles.lineSeparator } />
				Groups Near You
			</div>
		);
	}
}

function mapStateToProps(state) {
	// Map certain parts of our APPLICATION state to props. Whatever is returned 
	// will show up as props inside of this GroupCardList container.
	return {
		groups: state.groups
	};
}
// Map certain action creators to props, allowing us to kickstart the 
// action >> reducer >> state change process
function mapDispatchToProps(dispatch) {
	// Dispatch will ensure that the action object associated with takeAction 
	// action creator will be passed to all of our reducers
	return bindActionCreators({ takeAction: takeAction }, dispatch);
}
// Glue react and redux together with the connect helper, essentially turning
// this dumb component into a smart one (a container).
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
