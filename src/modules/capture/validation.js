import * as Yup from 'yup'

export const validation = Yup.object().shape({
	name: Yup.string().required('O nome é obrigatório'),
	system_id: Yup.number().required('O ID do sistema é obrigatório'),
	whatsapp: Yup.number().required('O whatsapp é obrigatório'),
	email: Yup.string()
		.email('Email inválido')
		.required('O email é obrigatório'),
})
