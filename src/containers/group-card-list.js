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

	renderList() {
		return this.props.groups.map((group) => {
			const groupname = group.name;
			const frequency = group.frequency;
			const containersize = group.containersize;
			const avgservingcost = group.avgservingcost;
			return (
				<li
					key={groupname}
					className="card-list-item">
					<GroupCard
						groupname={groupname}
						frequency={frequency}
						containersize={containersize}
						avgservingcost={avgservingcost} />
				</li>
			);
		});
	}

	render() {
		return (
			<ul>
				A list of group cards will go here:
				{this.renderList()}
			</ul>
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
export default connect(mapStateToProps, mapDispatchToProps)(GroupCardList);