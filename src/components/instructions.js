import styles from './instructions.css';
import classNames  from 'classnames/bind';
import React, { Component } from 'react';

let cx = classNames.bind(styles);

class Instructions extends Component {

	constructor(props) {
		super(props);

		this.state = {
			selectedCircle: 'n',
		};

	}

	onCircleSelect(circle, event) {
		this.setState({ selectedCircle: circle });
	}

	renderCircles() {
		const circles = ['2','3','4','5','6','7','8','9','10'];

		return circles.map((circle) => {
			let circleClass = cx({
				'circle' : true,
				'circleSelected' : circle == this.state.selectedCircle ? true : false,
			});

			{/* Usually we would bind this in the constructor method, but we want
				to prepend an argument (circle) to the argument list so that
				our event hanlder can make use of the changing value of circle */}
			let boundCircleSelect = this.onCircleSelect.bind(this, circle);
			return (
				<div
					key={circle} 
					className={ circleClass } 
					onClick={boundCircleSelect}>
					{circle}
				</div>
			)
		});
	}

	render() {
		return (
			<div className={ styles.mainContainer }>
				<div className={ styles.headingText }>How it works:</div>
				<div>1. Pick a number</div>
				<div className={ styles.circleContainer }>
					{this.renderCircles()}
				</div>				
				<div>
					1. Join a local group with
					<span className={ styles.bold }>{` ${this.state.selectedCircle} `}</span>
					people
				</div>
				<div>
					2. Buy
					<span className={ styles.bold }>{` ${this.state.selectedCircle} `}</span>
					number of pyrex containers
				</div>
				<div>
					3. Cook a meal & split it into
					<span className={ styles.bold }>{` ${this.state.selectedCircle} `}</span>
					servings
				</div>
				<div>4. Meet in person to trade meals</div>
			</div>
		);
	}
}

export default Instructions;
