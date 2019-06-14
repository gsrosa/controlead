import React from 'react'
import { Button } from '../../components/button/button'
import { notify } from '../../components/toast'
import { statusLead } from '../../requests/leads.req'

const onClick = (row, req) => () => {
	const { user, active } = row
	const success = () => {
		notify({ text: `Usuário ${active ? 'desativado' : 'ativado'} com sucesso` }).success()
		setTimeout(req, 200)
	}
	statusLead({ _id: user, status: active, onSuccess: success })
}

const justAdm = req => ({
	dataField: 'delete',
	text: 'Estado',
	formatter: (i, row) => (
		<div>
			<Button theme={row.active ? 'danger' : 'success'} onClick={onClick(row, req)}>
				{row.active ? 'Desativar' : 'Ativar'}
			</Button>
		</div>
	),
})

const cols = [
	{ text: 'Usuário', dataField: 'name', sort: true },
	{
		text: 'Email',
		dataField: 'email',
		sort: true,
	},
	{
		text: 'Id do sistema',
		dataField: 'system_id',
		sort: true,
	},
	{
		text: 'Subordinados automáticos',
		dataField: 'subordinate_count',
	},
	{
		text: 'Subordinados manuais',
		dataField: 'subordinate_manual_count',
	},
]

export const columns = (req, user) => (user.admin ? [...cols, justAdm(req)] : cols)
