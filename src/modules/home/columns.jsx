import React from 'react'
import { Button } from '../../components/button/button'
import { deleteUser } from '../../requests/user.req'
import { notify } from '../../components/toast'
import { ConfirmIcon } from '../../components/icons/confirm.icon'
import { DeleteIcon } from '../../components/icons/delete.icon'

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
						sm
						onClick={() => {
							setOpen(true)
							setId(row._id)
						}}
					>
						<ConfirmIcon />
					</Button>
				</div>
			),
		},
		{
			dataField: 'delete',
			text: 'Excluir',
			formatter: (i, row) => (
				<div>
					<Button sm theme="danger" onClick={del(row, req)}>
						<DeleteIcon />
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
		text: 'Whatsapp',
		dataField: 'whatsapp',
		sort: true,
		formatter: (cell, row) => (
			<span
				style={{ cursor: 'pointer' }}
				onClick={() => {
					window.open(
						`https://api.whatsapp.com/send?phone=${row.whatsapp.replace(
							/[+|-|\s|-]/g,
							'',
						)}`,
						'_blank',
					)
				}}
			>
				{row.whatsapp}
			</span>
		),
	},
	{
		text: 'Patrocinador',
		dataField: 'sponsor_id',
		sort: true,
	},
	...justAdm({
		setOpen,
		setId,
		req,
		user,
	}),
]
