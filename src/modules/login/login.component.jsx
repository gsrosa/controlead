import React, { useContext } from 'react'
import { Form, Formik, Field } from 'formik'
import { Container } from '../../components/layout/container'
import { Row } from '../../components/layout/row'
import { Column } from '../../components/layout/column'
import { Button } from '../../components/button/button'
import { UserContext } from '../../store/context/user.context'
import { redirect } from '../../store'
import { RenderInput } from '../../components/forms/input-render'

const LoginComponent = () => {
	const { setLogged } = useContext(UserContext)

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
						initialValues={{ login: '', password: '' }}
						onSubmit={() => {}}
						render={() => (
							<Form>
								<Row align="center" justify="center">
									<Column className="mt-5">
										<Field
											label="Login"
											name="login"
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
										<Button
											theme="success"
											onClick={() => {
												setLogged(true)
												redirect('/home')
											}}
										>
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
