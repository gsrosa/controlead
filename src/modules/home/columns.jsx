import React from 'react'
import { Button } from '../../components/button/button'

export const columns = setOpen => [
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
		formatter: () => (
			<div>
				<Button onClick={() => setOpen(true)}>Ativar</Button>
			</div>
		),
	},
]
