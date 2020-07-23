import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Dashboard/Home';
import Login from './Auth/Login/Login';
import Employess from './Pages/Empolyees/Employess'
import Controls from './components/Controls';
import SideMEnu from './components/SideMEnu';
import { makeStyles, CssBaseline } from '@material-ui/core';
import Header from './components/Header';

import Signup from './Auth/Signup/Signup'
import HomeNavbar from './Home/HomeNavbar'
import Layout from './Layout/Layout';
const useStyles = makeStyles({
	appMain: {
		paddingLeft: "220px",
		width: "100%",
		zIndex: "2px"
	}
})
const Routes = () => {
	const classes = useStyles()
	
	return (
		
		<BrowserRouter>
			<Switch>
				
				<Route exact path="/" component={Login}/>
				<Route exact path="/register" component={Signup} />
			
				<div className={classes.appMain}>
					<SideMEnu />
					<Header />
				<Route exact path="/dashboard" component={Home} />
				<Route exact path="/empolyee" component={Employess} />
				<Route exact path="/control" component={Controls} />
				<CssBaseline />
				</div>
			</Switch>
		</BrowserRouter>
	)
}

export default Routes
