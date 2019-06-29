import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CataloguePage from './pages/cataloguepage.js';
import DetailsPage from './pages/detailspage.js';
import CheckoutPage from './pages/checkoutpage.js';

const Router = () => (
	<Switch>
		<Route exact path='/' component={CataloguePage} />
		<Route exact path='/catalogue' component={CataloguePage} />
		<Route exact path='/details' component={DetailsPage} />
		<Route exact path='/checkout' component={CheckoutPage} />
	</Switch>
)

export default Router