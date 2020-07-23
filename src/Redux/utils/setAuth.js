import axios from 'axios';

//adding globalheaders
const setAuthToken = token => {
	// console.log("I am token", token)
	if (token) {
		axios.defaults.headers.common['jwt'] = token;

	} else {
		delete axios.defaults.headers.common['jwt'];
		
	}
};

export default setAuthToken;
