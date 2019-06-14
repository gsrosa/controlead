import React, { useState, useEffect } from 'react'
import { Formik, Field, Form } from 'formik'
import { Container } from '../../components/layout/container'
import { Row } from '../../components/layout/row'
import { Column } from '../../components/layout/column'
import { RenderInput } from '../../components/forms/input-render'
import { Button } from '../../components/button/button'
import { validation } from './validation'
import { insertUser } from '../../requests/user.req'
import { getCompany } from '../../requests/company.req'

const next = () => {
	document.getElementById('step1').classList.toggle('step-move')
}

const CaptureComponent = ({ match }) => {
	const { company } = match.params
	const [result, setResult] = useState({})
	const [comp, setCompany] = useState({})
	const [err, setError] = useState(false)

	useEffect(() => {
		getCompany({
			company,
			onSuccess: response => setCompany(response.data),
			onFail: () => setError(true),
		})
	}, [])

	const onSuccess = (response) => {
		setResult(response.data)
		next()
	}

	const onFail = (response) => {
		setResult(response.data)
		next()
	}

	return (
		<Container>
			<Row justify="center">
				<Column
					xs="8"
					sm="8"
					md="5"
					lg="4"
					xl="3"
					style={{ border: '1px solid #ccc', borderRadius: '10px', width: '80em' }}
					className="p-3 text-center mt-5"
				>
					<Row
						className="d-flex justify-content-start flex-nowrap"
						style={{ overflow: 'hidden' }}
					>
						{err && (
							<Column>
								<Row>
									<Column className="mt-3">
										<h2>Desculpe :(</h2>
									</Column>
									<Column className="mt-5">
										<p>
											O parametro da url informada não corresponde com a
											empresa que você deseja se cadastrar.
										</p>
										<p>Verifique o link ou entre em contato com o suporte</p>
									</Column>
									<Column className="mt-3">
										A equipe controlead agradece :)
									</Column>
								</Row>
							</Column>
						)}
						<Column id="step1" className="step">
							<Row>
								<Column>
									<h2>{comp.name}</h2>
								</Column>
								<Column>
									<Formik
										initialValues={{
											name: '',
											whatsapp: '',
											system_id: '',
											email: '',
										}}
										onSubmit={async (values) => {
											insertUser({
												values: { ...values, company: comp._id },
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
														name="whatsapp"
														label="*Whatsapp"
														mask="+55 99 99999-9999"
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
							<h3>{result ? result.name : ''}</h3>
							<h4 className="text-center">
								Seu pré-cadastro foi efetuado com sucesso!
							</h4>
							Agora você deve efetuar o cadastro na Vencervip utilizando o link abaixo
							<br />
							<a
								href={`https://vencervip.com.br/afiliado/${
									result ? result.system_id : ''
								}`}
							>
								https://vencervip.com.br/afiliado/
								{result ? result.sponsor_id : ''}
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
