import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools,actionCreators } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import { persistStore } from 'redux-persist'

const composeEnhancers = composeWithDevTools({
	actionCreators,
	trace: true,
	traceLimit: 25
}); 

const initialState = {};

const middleware = [thunk];

const store = createStore(
	rootReducer,
	initialState,
	//composeWithDevTools(applyMiddleware(...middleware))
	composeEnhancers(
	//applyMiddleware(invariant(), thunk) )
	applyMiddleware(...middleware))
);

const persistor = persistStore(store)

export { store, persistor };