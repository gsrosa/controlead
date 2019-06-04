import React from 'react'
import DataTable from 'react-data-table-component'
import { Row } from '../../components/layout/row'
import { Column } from '../../components/layout/column'
import { columns } from './columns'

const data = [
	{
		id: 1,
		name: 'Guilherme soares',
		email: 'gui.rosa.soares@gmail.com',
		whatsapp: '12991936633',
		sponsor: 'Flavio',
		system_id: 'gsrosa',
		subordinates: 5,
		subordinates_manual: 7,
	},
]

const Home = () => (
	<Row>
		<Column>
			<DataTable title="Arnold Movies" columns={columns} data={data} />
		</Column>
	</Row>
)

export default Home
