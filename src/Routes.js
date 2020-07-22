import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Dashboard/Home';

import Employess from './Pages/Empolyees/Employess'
import Controls from './components/Controls';
const Routes = () => {
	return (
			<Switch>
				<Route exact path="/dashboard" component={Home} />
				<Route exact path="/empolyee" component={Employess} />
				<Route exact path="/control" component={Controls} />
			</Switch>
	)
}

export default Routes
