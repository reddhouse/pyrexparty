import styles from './instructions.css';
import classNames  from 'classnames/bind';
import React, { Component } from 'react';

let cx = classNames.bind(styles);

class Instructions extends Component {

	constructor(props) {
		super(props);

		this.state = {
			selectedCircle: '\'n\'',
		};

	}

	onCircleSelect(circle, event) {
		this.setState({ selectedCircle: circle });
	}

	renderCircles() {
		const circles = ['2','3','4','5','6','7','8','9','10'];

		// Though not used here, properties can also be dynamic,  
		// such as cx({ ['circle' + circleNum]: true })
		return circles.map((circle) => {
			let circleClass = cx({
				'circle' : true,
				'circleSelected' : circle == this.state.selectedCircle ? true : false,
			});

			// Usually we would bind this in the constructor method, but we want
			// to prepend the circle variable to the argument list so that
			// our event hanlder can make use of the dynamic value of circle
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
		let boldClass = cx({
				'bold' : true,
				'boldHighlight' : this.state.selectedCircle == '\'n\'' ? false : true,
			});

		return (
			<div className={ styles.mainContainer }>
				<div className={ styles.headingText }>
					How it works
				</div>
				<div className={ styles.iconLine}>
					<i className={ "fa fa-spoon fa-rotate-90" }></i>
					<span>Join a local group with...</span>
				</div>
				<div className={ styles.circleContainer }>
					{this.renderCircles()}
				</div>				
				<div>
					{'\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0'}...number of people (click to select)
				</div>
				<div className={ styles.iconLine}>
					<i className={ "fa fa-spoon fa-rotate-90" }></i>
					<span>Buy</span>
					<span className={ boldClass }>{` ${this.state.selectedCircle} `}</span>
					<span>pyrex containers</span>
				</div>
				<div className={ styles.iconLine}>
					<i className={ "fa fa-spoon fa-rotate-90" }></i>
					<span>Cook a meal & split it into</span>
					<span className={ boldClass }>{` ${this.state.selectedCircle} `}</span>
					<span>servings</span>
				</div>
				<div className={ styles.iconLine}>
					<i className={ "fa fa-spoon fa-rotate-90" }></i>
					<span>Meet in person to trade meals</span>
				</div>
			</div>
		);
	}
}

export default Instructions;
