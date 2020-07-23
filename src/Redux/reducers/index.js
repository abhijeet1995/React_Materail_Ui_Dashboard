import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import alert  from './alert/alert'
import auth from './auth/auth'
import loader from './loader/loader'
const persistConfig = {
	key: 'root',
	storage,
}



const rootReducer = combineReducers({
	alert,
	auth,
	loader
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;