import React, { useContext } from 'react'
import { Form, Formik, Field } from 'formik'
import { Container } from '../../components/layout/container'
import { Row } from '../../components/layout/row'
import { Column } from '../../components/layout/column'
import { Button } from '../../components/button/button'
import { UserContext } from '../../store/context/user.context'
import { redirect } from '../../store'
import { RenderInput } from '../../components/forms/input-render'
import { login } from '../../requests/user.req'
import { notify } from '../../components/toast'

const LoginComponent = () => {
	const { setLogged, setUser, setCompany,setToken } = useContext(UserContext)

	return (
		<Container>
			<Row className="align-self-center" justify="center" align="center">
				<Column
					xl="3"
					style={{ border: '1px solid #ccc', borderRadius: '10px' }}
					padding="30px"
				>
					<Column className="text-center">
						<h4>Acessar capture lead</h4>
					</Column>
					<Formik
						initialValues={{ rmail: '', password: '' }}
						onSubmit={(values) => {
							const onSuccess = (response) => {
								setLogged(true)
								setCompany(response.data.company)
								setUser(response.data)
								setToken(response.data.token)
								redirect('/')
							}
							const onFail = (response) => {
								notify({ text: 'Email ou senha incorretos' }).error()
							}
							login({ values, onFail, onSuccess })
						}}
						render={() => (
							<Form>
								<Row align="center" justify="center">
									<Column className="mt-5">
										<Field
											label="E-mail"
											name="email"
											type="text"
											component={RenderInput}
										/>
									</Column>
									<Column className="mt-4">
										<Field
											label="Senha"
											name="password"
											type="password"
											component={RenderInput}
										/>
									</Column>
									<Column className="mt-4" flex justify="end">
										<Button theme="success" type="submit">
											Entrar
										</Button>
									</Column>
								</Row>
							</Form>
						)}
					/>
				</Column>
			</Row>
		</Container>
	)
}

export default LoginComponent
