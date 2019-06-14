import * as Yup from 'yup'

export const validation = Yup.object().shape({
	name: Yup.string().required('O nome é obrigatório'),
	whatsapp: Yup.string().required('O whatsapp é obrigatório'),
	email: Yup.string()
		.email('Email inválido')
		.required('O email é obrigatório'),
})
