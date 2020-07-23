import { LOADER } from '../type'

export const loader = (flag) => dispatch => {
	dispatch({
		type: LOADER,
		payload: flag
	})
}