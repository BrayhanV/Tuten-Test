import Axios from 'axios';

export const consumeAPI = async (url, method, headers, data) => {
	let response = null;

	if (!headers) {
		headers = { 'Content-Type': 'application/json' };
	}

	try {
		response = await Axios({ method, url, data, headers });
	} catch (e) {
		if (e.response && typeof e.response.data == 'string') {
			return { message: e.response.data };
		}

		return { message: 'Error cosumiendo el end point' };
	}

	return { data: response.data };
};
