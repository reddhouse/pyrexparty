import styles from './group-details.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { takeAction } from '../actions/index';


class GroupDetails extends Component {
	constructor(props) {
		super(props);

		this.state = { dataLocal: null };
	}

	getGroupByID(id) {
		const groups = this.props.groups;
		const result = groups.filter(group => group.id == id);
		return result[0];
	}

	renderDetails() {
		const param = this.props.params.id;
		const group = this.getGroupByID(param);

		return (
			<ul>
				<li>
					<span className={ styles.heading }>Name</span>
					<br />
					<span className={ styles.descriptionText }>{group.name}</span>
				</li>
				<li>
					<span className={ styles.heading }>Description</span>
					<br />
					<span className={ styles.descriptionText }>{group.description}</span>
				</li>
				<li>
					<span className={ styles.heading }>Average Serving Cost</span>
					<br />
					<span className={ styles.descriptionText }>{group.avgservingcost}</span>
				</li>
				<li>
					<span className={ styles.heading }>Container Size</span>
					<br />
					<span className={ styles.descriptionText }>{group.containersize}</span>
				</li>
				<li>
					<span className={ styles.heading }>Max Servings (Number of Containers Required to Participate)</span>
					<br />
					<span className={ styles.descriptionText }>{group.maxservings}</span>
				</li>
				<li>
					<span className={ styles.heading }>Members</span>
					<br />
					<span className={ styles.descriptionText }>Information about group members goes here</span>
				</li>
				<li>
					<span className={ styles.heading }>Parties</span>
					<br />
					<span className={ styles.descriptionText }>Information about group past and future group get-togethers (Parties) goes here</span>
				</li>
			</ul>
		);
	}

	render() {
		return (
			<div>
				{this.renderDetails()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		groups: state.groups
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ takeAction: takeAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetails);