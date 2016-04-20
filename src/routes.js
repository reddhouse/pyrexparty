import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './components/app';
import Welcome from './containers/welcome';
import GroupCardList from './containers/group-card-list';
import GroupDetails from './containers/group-details';

// Establish mapping between various routes and components
export default (
<Route path="/" component={App}>
	<IndexRedirect to="/welcome" />
	<Route path="welcome" components={Welcome}/>
	<Route path="groups" component={GroupCardList}/>
	<Route path="groups/:id" component={GroupDetails}/>
	{/* React router will automatically parse the URL and pass a special
		prop, this.props.params.id into our GroupDetails component */}
</Route>
);
