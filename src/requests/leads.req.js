import { createApiRequest } from '../store/api'

export const getLeads = ({ onSuccess }) => {
	const onFail = response => console.log(response)
	createApiRequest({ url: '/leads', onSuccess, onFail })
}

export const statusLead = ({ status, onSuccess, _id }) => {
	const onFail = response => console.log(response)
	createApiRequest({
		method: 'PATCH',
		url: `/leads/${_id}`,
		data: { status },
		onSuccess,
		onFail,
	})
}
