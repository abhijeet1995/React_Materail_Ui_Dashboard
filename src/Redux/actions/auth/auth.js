import axios from 'axios'
import { setAlert } from '../alert/alert'

import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	AUTH_ERROR,
	LOADER,
	LOGOUT,
	CLEAR_PROFILE
} from '../type'

import setAuthToken from '../../utils/setAuth'
import { envData } from '../../../config/config'
//Load user

export const loadUser = () => async dispatch => {
	if (localStorage.token) {
		setAuthToken(localStorage.token)
	}
	try {
		// const res = await axios.get('http://localhost:8080/api/auth');
		const res = await axios.get(`${envData.url.REACT_APP_API_URL}/auth`);
		dispatch({
			type: USER_LOADED,
			payload: res.data
		})
	} catch (err) {
		dispatch({
			type: AUTH_ERROR
		})
	}
}




//Register User

export const register = ({ name, email, password }) => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}
	localStorage.clear();
	const body = JSON.stringify({ name, email, password })
	try {
		dispatch({
			type: LOADER,
			payload: true
		})
		// const res = await axios.post('http://localhost:8080/api/users', body, config);
		const res = await axios.post(
			`${envData.url.REACT_APP_API_URL}/users`,
			body,
			config
		);
		console.log("=========", res.data)
		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data,
			loading: false,
		})
		dispatch({
			type: LOADER,
			payload: false
		})
		// dispatch(setAlert(res.data.message))
		dispatch(setAlert("Register Successfully", "success"))
	} catch (err) {
		dispatch({
			type: LOADER,
			payload: false
		})
		if (err.response) {
			dispatch(setAlert(err.response.data.error, "error"));
			dispatch({
				type: REGISTER_FAIL
			});
		} else {
			dispatch(setAlert("Network error ! Please check your connection", "error"));
			dispatch({
				type: REGISTER_FAIL
			});
		}
	}
};


//Login

export const login = ({email, password}) => async dispatch => {
	delete axios.defaults.headers.common['jwt'];
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}
	localStorage.clear();
	const body = JSON.stringify({ email, password })
	try {
		dispatch({
			type: LOADER,
			payload: true
		})
		// const res = await axios.post('https://abhijeet-socail.herokuapp.com/api/auth', body, config);
		const res = await axios.post(
			`${envData.url.REACT_APP_API_URL}/auth`,
			body,
			config
		);
		console.log("=========", res.data)
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
			loading: false,
		})
		dispatch(loadUser())
		dispatch({
			type: LOADER,
			payload: false
		})
		dispatch(setAlert("Login Successfully", "success"))
	}
	catch (err) {
		dispatch({
			type: LOADER,
			payload: false
		})
		if (err.response) {
			dispatch(setAlert(err.response.data.error, "error"));
			dispatch({
				type: LOGIN_FAIL
			});
		}
		else {
			dispatch(setAlert("Network error ! Please check your connection"));
			// dispatch(setAlert("Network error ! Please check your connection", 'error', 1, "/"));
			dispatch({
				type: LOGIN_FAIL
			});
		}
	}
};

//Reset Password


// export const passwordReset = ({ email }) => async dispatch => {
// 	const config = {
// 		headers: {
// 			'Content-Type': 'application/json',
// 		}
// 	};
// 	try {
// 		dispatch({
// 			type: LOADER,
// 			payload: true
// 		})
// 		const res = await axios.post("http://localhost:8080/api/auth/reset-password", { email }, config);
// 		dispatch(setAlert(res.data.message))
// 		dispatch({
// 			type: LOADER,
// 			payload: false
// 		})
// 	} catch (err) {
// 		dispatch({
// 			type: LOADER,
// 			payload: false
// 		});
// 		if (err.response) {
// 			dispatch(setAlert(err.response.data.error));

// 		} else {
// 			dispatch(setAlert("Network error ! Please check your connection"));

// 		}

// 	}

// }



// Logout / Clear Profile
export const logout = () => dispatch => {
	dispatch({ type: LOGOUT });
	dispatch({ type: CLEAR_PROFILE })
	// dispatch({
	// 	type: REMOVE_ALERT,
	// 	payload: false
	// });
};
