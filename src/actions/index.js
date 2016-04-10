export function takeAction(data) {
	return {
		type: TAKE_ACTION,
		payload: data
		/* An action with a payload that is a promise will be stopped automatically
			by the redux-promise middleware until the promise resolves. At this point
			the entire action will be replaced with a new copy that contains the 
			response object on the payload. Now it can flow to reducers. */
	};
}