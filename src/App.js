import React, { Fragment } from 'react';
import './App.css';
import SideMEnu from './components/SideMEnu';
import { makeStyles, CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Login from './Auth/Login/Login';
import Signup from './Auth/Signup/Signup'
import HomeNavbar from './Home/HomeNavbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Routes from './Routes';

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "220px",
    width: "100%",
    zIndex: "2px"
  }
})

function App() {
  const classes = useStyles()
  return (
    <Fragment>
      {/* <Route path="/login" exact component={Login}/>
      <Route path="/register" exact component={Signup}/>
      <Route path ="/" exact component={HomeNavbar}/> */}
    <Router>
      <div className={classes.appMain}>
        <SideMEnu />
        <Header />
        <Routes />
      </div>
      <CssBaseline />
    </Router>
    </Fragment>


  );
}

export default App;
