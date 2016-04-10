import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import GroupCardList from './containers/group-card-list';
import Instructions from './components/instructions';

// Establish mapping between various routes and components
export default (
<Route path="/" component={App}>
	<IndexRoute component={Instructions} />
	<Route path="groups" component={GroupCardList} />
</Route>
);
