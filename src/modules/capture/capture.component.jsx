import React, { useState, useEffect } from 'react'
import { Formik, Field, Form } from 'formik'
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
	const [result, setResult] = useState({})

	const onSuccess = (response) => {
		setResult(response.data)
		next()
	}

	const onFail = (response) => {
		setResult(response.data)
		next()
	}

	useEffect(() => {
		console.log('setting result')
		console.log(result)
	}, [result])

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
											name: 'guilherme',
											whatsapp: '12991936633',
											system_id: '1234',
											email: 'gui.rosa.soares@',
										}}
										onSubmit={async (values) => {
											insertUser({
												values: { ...values, company },
												onSuccess,
												onFail,
											})
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
							<h3>{result.name}</h3>
							<h4 className="text-center">
								Seu pré-cadastro foi efetuado com sucesso!
							</h4>
							Agora você deve efetuar o cadastro na Vencervip utilizando o link abaixo
							<br />
							<a href={`https://vencervip.com.br/afiliado/${result.system_id}`}>
								https://vencervip.com.br/afiliado/
								{result.sponsor_id}
							</a>
							<br />
							<br />
							<p>
								Após efetuar o cadastro e ativação na Vencervip, você deve entrar no
								link abaixo e seguir os próximos passos
							</p>
							<br />
							<a href="https://controlteam.com.br/pos-cadastro/">
								https://controlteam.com.br/pos-cadastro/
							</a>
						</Column>
					</Row>
				</Column>
			</Row>
		</Container>
	)
}

export default CaptureComponent
