import React from 'react'
import { Formik, Field, Form } from 'formik'
import { Container } from '../../components/layout/container'
import { Row } from '../../components/layout/row'
import { Column } from '../../components/layout/column'
import { RenderInput } from '../../components/forms/input-render'
import { Button } from '../../components/button/button'
import { validation } from './validation'

const next = () => {
	document.getElementById('step1').classList.toggle('step-move')
}

const CaptureComponent = () => (
	<Container className="d-flex justify-content-center">
		<Row className="align-self-center" justify="center" align="center">
			<Column
				lg="4"
				xl="4"
				style={{ border: '1px solid #ccc', borderRadius: '10px' }}
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
									initialValues={{ name: '', whatsapp: '', email: '' }}
									onSubmit={(values) => {
										console.log(values)
										next()
									}}
									validationSchema={validation}
									render={() => (
										<Form className="row text-left">
											<Column>
												<Field
													name="name"
													label="Nome"
													component={RenderInput}
												/>
											</Column>
											<Column>
												<Field
													name="whatsapp"
													label="Whatsapp"
													component={RenderInput}
												/>
											</Column>
											<Column>
												<Field
													name="email"
													label="Email"
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

export default CaptureComponent
