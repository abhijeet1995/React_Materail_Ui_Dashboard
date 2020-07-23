import React, { Fragment } from 'react';
import './App.css';
import Routes from './Routes';
import setAuthToken from './Redux/utils/setAuth'
import { Provider } from 'react-redux'
import { store, persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}
function App(props) {
  
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </>


  );
}

export default App;
