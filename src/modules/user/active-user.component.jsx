import React, { useEffect, useState, useContext } from 'react'
import DataTable from 'react-bootstrap-table-next'
import { Row } from '../../components/layout/row'
import { Column } from '../../components/layout/column'
import { columns } from './user-active-columns'
import { getLeads } from '../../requests/leads.req'
import { UserContext } from '../../store/context/user.context'

const ActiveUser = () => {
	const [data, setData] = useState([])
	const { user } = useContext(UserContext)

	const req = () => getLeads({
		onSuccess: (response) => {
			setData(response.data)
		},
	})

	useEffect(() => {
		req()
	}, [])

	return (
		<Row>
			<Column>
				<DataTable keyField="_id" columns={columns(req, user)} data={data} />
			</Column>
		</Row>
	)
}

export default ActiveUser
