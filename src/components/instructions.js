import styles from './instructions.css';
import React from 'react';

const Instructions = () => (
	// Implicit return, note the use of () instead of {return()}
	<div className={ styles.mainContainer }>
		<p className={ styles.headingText }>How it works:</p>
		<p>1. Join a local group with ’n’ number of people</p>
		<p>2. Buy ’n’ number of pyrex containers</p>
		<p>3. Cook a meal & split it into ’n’ servings</p>
		<p>4. Meet in person to trade meals</p>
	</div>
);

export default Instructions;
