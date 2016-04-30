import styles from './group-card-list.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { takeAction } from '../actions/index';

import GroupCard from '../components/group-card';

class GroupCardList extends Component {
	constructor(props) {
		super(props);

		this.state = { dataLocal: null };
	}

	renderList(groupList) {
		// Dynamically decide which group list to access, intro or local
		return this.props[groupList].map((group) => {
			const groupid = group.id;
			const groupname = group.name;
			const frequency = group.frequency;
			const maxservings = group.maxservings;
			const containersize = group.containersize;
			const avgservingcost = group.avgservingcost.toFixed(2);
			return (
				<li
					key={groupname}
					className="card-list-item">
					<GroupCard
						groupid={groupid}
						groupname={groupname}
						frequency={frequency}
						maxservings={maxservings}
						containersize={containersize}
						avgservingcost={avgservingcost} />
				</li>
			);
		});
	}

	render() {
		let groupList = this.props.localGroups.length > 1 ? 'localGroups' : 'introGroups';
		return (
			<ul>
				{this.renderList(groupList)}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	// Map certain parts of our APPLICATION state to props. Whatever is returned 
	// will show up as props inside of this GroupCardList container.
	return {
		introGroups: state.introGroups,
		localGroups: state.localGroups
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
export default connect(mapStateToProps, mapDispatchToProps)(GroupCardList);