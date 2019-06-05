import { createApiRequest } from '../store/actions/api.actions'

export const insertUser = ({ values, dispatch, onSuccess = () => {} }) => {
	const url = '/user'
	return dispatch(
		createApiRequest({
			method: 'POST',
			url,
			data: { ...values },
			success: (response) => {
				onSuccess(response.payload)
			},
			fail: (response) => {
				console.log(response)
			},
		}),
	)
}
