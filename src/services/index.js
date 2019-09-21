import axios from 'axios';

export const getNewQrCode = (session) => {
	return axios.get(`${process.env.REACT_APP_API_URL}/qr?sessionId=${session}`).then((res) => {
		return Promise.resolve(res.data)
	}).catch((err) => {
		Promise.reject(err)
	})
}