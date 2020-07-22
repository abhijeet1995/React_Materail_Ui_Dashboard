import React from 'react';
import './App.css';
import SideMEnu from './components/SideMEnu';
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from './components/Header';
import Employess from './Pages/Empolyees/Employess'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Controls from './components/Controls';
import Home from './Dashboard/Home';
import Login from './Auth/Login/Login';
import Signup from './Auth/Signup/Signup'
const theme = createMuiTheme({
  palette:{
    primary:{
      main:"#ff00000",
      light:"#3c44b125"
    },
    secondary:{
      main:"#f83245",
      light:"#f8324526"
    },
    background:{
      default:"#f4f5fd"
    },
  },
  overrides: {
   MuiAppBar:{
     root:{
       transform: 'translateZ(0)'
     }
   },
   props:{
     MuiIconButton:{
       disableRipple:true
     }
   }
  }
})

const useStyles = makeStyles({
  appMain:{
    paddingLeft:"220px",
    width:"100%",
    zIndex:"2px"
  }
})

function App() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>  
      <Router>
      <SideMEnu />
      <div className={classes.appMain}>
        <Header />
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Signup}/>
            <Route  exact path="/" component={Home}/>
            <Route exact path="/empolyee" component={Employess} />
            <Route exact path="/control" component={Controls}/>
        </Switch>
      </div>
      <CssBaseline />
    </Router>
    </ThemeProvider>
      
  
  );
}

export default App;
