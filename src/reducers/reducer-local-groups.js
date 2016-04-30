import { SET_LOCAL_GROUPS } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case SET_LOCAL_GROUPS:
			// Don't mutate state! Return a new instance of state via ES6 style
			// concatenation. Could have also used state.concat([]);
			return action.payload;
	}
	return state;
}
