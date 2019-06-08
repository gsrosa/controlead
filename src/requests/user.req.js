import { createApiRequest } from '../store/api'

export const insertUser = async ({ values, onSuccess, onFail = () => {} }) => {
	const url = '/user'
	createApiRequest({
		method: 'POST',
		url,
		data: { ...values },
		onSuccess,
		onFail,
	})
}

export const login = async ({ values, onSuccess, onFail }) => {
	createApiRequest({
		method: 'POST',
		url: '/auth',
		data: { ...values },
		onFail,
		onSuccess,
	})
}

export const getInative = async ({ onSuccess }) => {
	const onFail = response => console.log(response)

	createApiRequest({
		url: '/user/inative',
		onFail,
		onSuccess,
	})
}
