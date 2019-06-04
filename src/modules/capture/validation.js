import * as Yup from 'yup'

export const validation = Yup.object().shape({
	name: Yup.string().required(),
	whatsapp: Yup.number().required(),
	email: Yup.string()
		.email()
		.required(),
})
