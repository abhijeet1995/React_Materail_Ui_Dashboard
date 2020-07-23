import { REGISTER_SUCCESS,REGISTER_FAIL,LOADER,AUTH_ERROR,LOGIN_FAIL,LOGIN_SUCCESS,USER_LOADED,LOGOUT,CLEAR_PROFILE} from '../../actions/type'

const initialState = {
	token: localStorage.getItem('jwt'),
	isAuthenticated: false,
	user: null,
	loading: false
}
export default function (state = initialState, action) {

	const { type, payload } = action
	switch (type) {
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				user: payload,
				loading: false
			}
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			localStorage.setItem('token', payload.token)
			localStorage.setItem('auth', true);
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false
			}
		
		case REGISTER_FAIL:
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case LOGOUT:
		case CLEAR_PROFILE:  	
			localStorage.removeItem('token');
			localStorage.removeItem('auth');
			return {
				...state,
				token: null,
				loading: false,
				isAuthenticated: false,
				user: null
			}
		default:
			return state

	}
}

