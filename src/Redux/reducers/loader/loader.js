import { LOADER } from '../../actions/type'

//By default loading is false
const initialState = {
	loading: false
}

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case LOADER:
			return {
				loading: payload ? payload : false
			}
		default:
			return {
				...state
			}
	}
}