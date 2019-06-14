import React, { useState, useEffect, useContext } from 'react'
import DataTable from 'react-bootstrap-table-next'
import { Form, Formik, Field } from 'formik'
import { Row } from '../../components/layout/row'
import { Column } from '../../components/layout/column'
import Modal from '../../components/modal'
import { getInative, activeUser } from '../../requests/user.req'
import { RenderInput } from '../../components/forms/input-render'
import { Button } from '../../components/button/button'
import { notify } from '../../components/toast'
import { columns } from './columns'
import { UserContext } from '../../store/context/user.context'

const Home = () => {
	const [isOpen, setOpen] = useState(false)
	const [data, setData] = useState([])
	const [_id, setId] = useState('')
	const { user } = useContext(UserContext)

	const req = () => getInative({ onSuccess: response => setData(response.data) })

	useEffect(() => {
		req()
	}, [])

	return (
		<Row>
			<Column>
				<DataTable keyField="id" columns={columns(setOpen, setId, req, user)} data={data} />
				<Modal isOpen={isOpen} requestClose={() => setOpen(false)}>
					<Row>
						<Column>
							<Formik
								initialValues={{ system_id: '', _id }}
								onSubmit={(value) => {
									activeUser({
										value,
										onSuccess: () => {
											notify({
												text: 'Usuário ativado com sucesso',
											}).success()
											req()
											setOpen(false)
										},
									})
								}}
								render={() => (
									<Form className="row">
										<Field name="_id" type="hidden" />
										<Column flex justify="center">
											<h3>Ativar usuário</h3>
										</Column>
										<Column>
											<Field
												name="system_id"
												label="Id do sistema"
												component={RenderInput}
											/>
										</Column>
										<Column flex justify="end">
											<Button type="submit">Ativar usuário</Button>
										</Column>
									</Form>
								)}
							/>
						</Column>
					</Row>
				</Modal>
			</Column>
		</Row>
	)
}

export default Home
