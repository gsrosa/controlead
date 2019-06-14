import React from 'react'
import { Button } from '../../components/button/button'
import { deleteUser } from '../../requests/user.req'
import { notify } from '../../components/toast'

const del = (row, req) => () => deleteUser({
	_id: row._id,
	onSuccess: () => {
		notify({ text: 'Usuário removido com sucesso' }).success()
		req()
	},
})

const justAdm = ({
	setOpen, setId, req, user,
}) => (user.admin
	? [
		{
			dataField: 'active',
			text: 'Ativar',
			formatter: (cell, row) => (
				<div>
					<Button
						onClick={() => {
							setOpen(true)
							setId(row._id)
						}}
					>
								Ativar
					</Button>
				</div>
			),
		},
		{
			dataField: 'delete',
			text: 'Excluir',
			formatter: (i, row) => (
				<div>
					<Button theme="danger" onClick={del(row, req)}>
								Apagar
					</Button>
				</div>
			),
		},
		  ]
	: [])

export const columns = (setOpen, setId, req, user) => [
	{
		text: 'Nome',
		dataField: 'name',
		sort: true,
	},
	{
		text: 'Email',
		dataField: 'email',
		sort: true,
	},
	{
		text: 'Whatsapp',
		dataField: 'whatsapp',
		sort: true,
	},
	{
		text: 'Patrocinador',
		dataField: 'sponsor_id',
		sort: true,
	},
	...justAdm({
		setOpen, setId, req, user,
	}),
]
