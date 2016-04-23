import styles from './mycomponent.css';
import React from 'react';

export default (props) => (
	// Implicit return, note the use of () instead of {return()}
	<div className={ styles.foo }>
		<p>Hello World!</p>
	</div>
);