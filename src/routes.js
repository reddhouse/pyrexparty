import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './components/app';
import Welcome from './containers/welcome';
import GroupCardList from './containers/group-card-list';

// Establish mapping between various routes and components
export default (
<Route path="/" component={App}>
	<IndexRedirect to="/welcome" />
	<Route path="welcome" components={Welcome}/>
	<Route path="groups" component={GroupCardList}/>
</Route>
);
