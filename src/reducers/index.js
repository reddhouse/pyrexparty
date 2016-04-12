import { combineReducers } from 'redux';
import Groups from './reducer-groups';

const rootReducer = combineReducers({
	groups: Groups,
});

export default rootReducer;