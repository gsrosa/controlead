import axios from 'axios'
import NProgress from 'nprogress'
import { redirect } from '../index'

const calculatePercentage = (loaded, total) => Math.floor(loaded * 1.0) / total

const api = axios.create({
	baseURL:
		process.env.NODE_ENV === 'development'
			? 'http://localhost:3000/'
			: 'https://controlteam.app/api/',
})

api.interceptors.request.use(async (config) => {
	NProgress.start()
	const token = localStorage.getItem('token')
	const company = localStorage.getItem('company')
	return !token
		? config
		: {
			...config,
			headers: { ...config.headers, token, company },
		  }
})

api.interceptors.response.use(
	(response) => {
		NProgress.done(true)
		return response
	},
	(error) => {
		if (error.response.status === 401) {
			localStorage.clear()
			redirect('/login')
		}
		return Promise.reject(error.response)
	},
)

api.defaults.onDownloadProgress = (e) => {
	const percentage = calculatePercentage(e.loaded, e.total)
	NProgress.set(percentage)
}

const getMethod = ({
	method, url, data, headers,
}) => {
	const m = method.trim().toLocaleLowerCase()
	switch (m) {
	case 'post':
		return api.post(url, data, { headers: { ...headers } })
	case 'put':
		return api.put(url, data, { headers: { ...headers } })
	case 'delete':
		return api.delete(url, { headers: { ...headers } })
	case 'patch':
		return api.patch(url, data, { headers: { ...headers } })
	default:
		return api.get(url, { headers: { ...headers } })
	}
}

export const createApiRequest = async ({
	method = 'get',
	url = '',
	data = {},
	headers = {},
	onSuccess,
	onFail,
}) => {
	const req = getMethod({
		url,
		data,
		headers,
		method,
	})

	try {
		const response = await req
		if (onSuccess) onSuccess(response)
	} catch (err) {
		if (onFail) onFail(err)
	}
}
