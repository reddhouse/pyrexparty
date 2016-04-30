import styles from './welcome.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { takeAction } from '../actions/index';

import Instructions from '../components/instructions';
import GroupCardList from './group-card-list';
import SearchBar from './search-bar';

class Welcome extends Component {
	constructor(props) {
		super(props);

		this.state = { dataLocal: null };
	}

	render() {
		return (
			<div>
				<Instructions />
				<SearchBar />
				<GroupCardList />
			</div>
		);
	}
}

function mapStateToProps(state) {
	// Map certain parts of our APPLICATION state to props. Whatever is returned 
	// will show up as props inside of this Welcome container.
	return {
		introGroups: state.introGroups
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
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
