import React, { useState, useEffect } from 'react'
import { Formik, Field, Form } from 'formik'
import { connect } from 'react-redux'
import { Container } from '../../components/layout/container'
import { Row } from '../../components/layout/row'
import { Column } from '../../components/layout/column'
import { RenderInput } from '../../components/forms/input-render'
import { Button } from '../../components/button/button'
import { validation } from './validation'
import { insertUser } from '../../requests/user.req'

const next = () => {
	document.getElementById('step1').classList.toggle('step-move')
}

const CaptureComponent = ({ match }) => {
	const { company } = match.params
	const [result, setResult] = useState(undefined)

	useEffect(() => {}, [])

	return (
		<Container className="d-flex justify-content-center">
			<Row className="align-self-center" justify="center" align="center">
				<Column
					lg="4"
					xl="4"
					style={{ border: '1px solid #ccc', borderRadius: '10px', width: '80em' }}
					className="p-3 text-center"
				>
					<Row
						className="d-flex justify-content-start flex-nowrap"
						style={{ overflow: 'hidden' }}
					>
						<Column id="step1" className="step">
							<Row>
								<Column>
									<h2>Lead capture</h2>
								</Column>
								<Column>
									<Formik
										initialValues={{
											name: '',
											whatsapp: '',
											system_id: '',
											email: '',
										}}
										onSubmit={(values) => {
											console.log(values)
										}}
										validationSchema={validation}
										render={() => (
											<Form className="row text-left">
												<Column>
													<Field
														name="name"
														label="*Nome"
														component={RenderInput}
													/>
												</Column>
												<Column>
													<Field
														name="system_id"
														label="*Id do sistema"
														component={RenderInput}
													/>
												</Column>
												<Column>
													<Field
														name="whatsapp"
														label="*Whatsapp"
														component={RenderInput}
													/>
												</Column>
												<Column>
													<Field
														name="email"
														label="*Email"
														component={RenderInput}
													/>
												</Column>
												<Column className="pt-4 text-right">
													<Button theme="success" type="submit">
														Registrar interesse
													</Button>
												</Column>
											</Form>
										)}
									/>
								</Column>
							</Row>
						</Column>
						<Column>
							<h2>step 2</h2>
						</Column>
					</Row>
				</Column>
			</Row>
		</Container>
	)
}

export default CaptureComponent
