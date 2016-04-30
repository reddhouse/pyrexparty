import { combineReducers } from 'redux';
import introGroups from './reducer-groups';
import localGroups from './reducer-local-groups';

const rootReducer = combineReducers({
	introGroups: introGroups,
	localGroups: localGroups
});

export default rootReducer;