import { SHOW_ALERT, REMOVE_ALERT } from '../../actions/type'


const initialState = {
	type: "",
	message: "",
	open: false,
	onClose: true
}

export default function  (state = initialState, action)  {
	const { type, payload } = action;
	switch (type) {
		case SHOW_ALERT:
			return {
				...state,
				...payload,

			};
		case REMOVE_ALERT:
			return {
				type: "",
				message: "",
				onClose: false,
				open: false,

			}
		default:
			return state;
	}
}
