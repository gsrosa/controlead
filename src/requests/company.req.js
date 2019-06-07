import { createApiRequest } from '../store/api'

export const getCompany = ({ company, onSuccess, onFail }) => {
	createApiRequest({ url: `/company/${company}`, onSuccess, onFail })
}
