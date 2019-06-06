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
