import React, { useState, useEffect } from 'react'
import DataTable from 'react-bootstrap-table-next'
import { Row } from '../../components/layout/row'
import { Column } from '../../components/layout/column'
import { columns } from './columns'
import Modal from '../../components/modal'
import { getInative } from '../../requests/user.req'

const Home = () => {
	const [isOpen, setOpen] = useState(false)
	const [data, setData] = useState([])

	useEffect(() => {
		getInative({ onSuccess: response => setData(response.data) })
		console.log('data', data)
	}, [])

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
