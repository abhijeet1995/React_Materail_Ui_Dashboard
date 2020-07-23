const prod = {
	url: {
		REACT_APP_API_URL: 'https://abhijeet-socail.herokuapp.com/api'
	}
}

const dev = {
	url: {
		REACT_APP_API_URL: 'http://localhost:8080/api'
	}
}

export const envData = process.env.NODE_ENV === 'development' ? dev : prod;