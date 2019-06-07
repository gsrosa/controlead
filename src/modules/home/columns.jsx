import React from 'react'
import { Button } from '../../components/button/button'

export const columns = [
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
		dataField: 'sponsor',
		sort: true,
	},
	{
		text: 'Id do sistema',
		dataField: 'system_id',
		sort: true,
	},
	{
		text: 'Automáticos',
		dataField: 'subordinates',
		sort: true,
	},
	{
		text: 'Manuais',
		dataField: 'subordinates_manual',
		sort: true,
	},
	{
		dataField: 'active',
		text: 'Ativar',
		formatter: row => (
			<div>
				<Button onClick={() => alert('test')}>Ativar</Button>
			</div>
		),
	},
]
