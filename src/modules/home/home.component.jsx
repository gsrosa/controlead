import React, { useState } from 'react'
import DataTable from 'react-bootstrap-table-next'
import { Row } from '../../components/layout/row'
import { Column } from '../../components/layout/column'
import { columns } from './columns'
import Modal from '../../components/modal'

const data = [
	{
		id: 1,
		name: 'Guilherme soares',
		email: 'gui.rosa.soares@gmail.com',
		whatsapp: '12991936633',
		sponsor: 'Flavio',
		subordinates: 5,
		subordinates_manual: 7,
	},
	{
		id: 2,
		name: 'Guilherme soares',
		email: 'gui.rosa.soares@gmail.com',
		whatsapp: '12991936633',
		sponsor: 'Flavio',
		subordinates: 5,
		subordinates_manual: 7,
	},
	{
		id: 3,
		name: 'Guilherme soares',
		email: 'gui.rosa.soares@gmail.com',
		whatsapp: '12991936633',
		sponsor: 'Flavio',
		subordinates: 5,
		subordinates_manual: 7,
	},
]

const Home = () => {
	const [isOpen, setOpen] = useState(false)

	return (
		<Row>
			<Column>
				<DataTable keyField="id" columns={columns(setOpen)} data={data} />
				<Modal isOpen={isOpen} requestClose={() => setOpen(false)}>
					<Row>
						<Column>
							<h2>test</h2>
						</Column>
					</Row>
				</Modal>
			</Column>
		</Row>
	)
}

export default Home
