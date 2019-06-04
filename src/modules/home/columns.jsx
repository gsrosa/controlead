import React from 'react'
import { Button } from '../../components/button/button'

export const columns = [
	{
		name: 'Nome',
		selector: 'name',
		sortable: true,
	},
	{
		name: 'Email',
		selector: 'email',
		sortable: true,
	},
	{
		name: 'Whatsapp',
		selector: 'whatsapp',
		sortable: true,
	},
	{
		name: 'Patrocinador',
		selector: 'sponsor',
		sortable: true,
	},
	{
		name: 'Id do sistema',
		selector: 'system_id',
		sortable: true,
	},
	{
		name: 'Automáticos',
		selector: 'subordinates',
		sortable: true,
	},
	{
		name: 'Manuais',
		selector: 'subordinates_manual',
		sortable: true,
	},
	{
		name: 'Ativar',
		cell: () => <Button onClick={() => alert('test')}>Ativar</Button>,
	},
]
