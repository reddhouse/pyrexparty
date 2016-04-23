import React from 'react';

const MyComponent = ({widget, onWidgetSelect}) => {
	// ES6 refactor above is the same as having
	// const widget = props.widget
	// const onWidgetSelect = props.onWidgetSelect
	const foo = widget.bar;

	return (
		<div>Hello World!</div>
	);
};

export default MyComponent;
