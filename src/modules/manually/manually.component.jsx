import React from 'react'
import { Form, Formik, Field } from 'formik'
import { Row } from '../../components/layout/row'
import { Column } from '../../components/layout/column'
import { RenderInput } from '../../components/forms/input-render'
import { Button } from '../../components/button/button'
import { RenderSelect } from '../../components/forms/select-render'
import { getUserWithFilter } from '../../requests/user.req'
import { leadManual } from '../../requests/leads.req'
import { notify } from '../../components/toast'
import { validation } from './validate'

const ManuallyComponent = () => {
	const submit = (values, { resetForm }) => {
		const onSuccess = () => {
			notify({ text: 'Inserido com sucesso' }).success()
			resetForm()
		}
		leadManual({ values: { ...values, sponsor_id: values.sponsor_id.value }, onSuccess })
	}

	const loadOptions = filter => new Promise((resolve) => {
		const success = resolveF => (response) => {
			const { data } = response

			if (Array.isArray(data)) {
				const d = data.map(u => ({ label: `${u.name} - ${u.system_id}`, value: u._id }))
				resolveF(d)
			} else {
				const { name, _id } = data
				resolveF([{ label: name, value: _id }])
			}
		}
		getUserWithFilter({ filter, onSuccess: success(resolve) })
	})

	return (
		<Row className="d-flex justify-content-center mt-5">
			<Column xl="4" self="center">
				<Formik
					initialValues={{
						name: '',
						whatsapp: '',
						email: '',
						system_id: '',
						sponsor_id: '',
					}}
					validationSchema={validation}
					onSubmit={submit}
					render={() => (
						<Form className="row">
							<Column>
								<Field name="name" label="Nome" component={RenderInput} />
							</Column>
							<Column>
								<Field
									name="whatsapp"
									label="Whatsapp"
									mask="+55 99 99999-9999"
									maskChar={null}
									component={RenderInput}
								/>
							</Column>
							<Column>
								<Field name="email" label="E-mail" component={RenderInput} />
							</Column>
							<Column>
								<Field
									name="system_id"
									label="Id do sistema"
									component={RenderInput}
								/>
							</Column>
							<Column className="mb-5">
								<Field
									name="sponsor_id"
									label="Patrocinador"
									component={RenderSelect}
									options={[]}
									load={loadOptions}
									placeholder=" "
									async
								/>
							</Column>
							<Column flex justify="end">
								<Button type="submit">Inserir</Button>
							</Column>
						</Form>
					)}
				/>
			</Column>
		</Row>
	)
}

export default ManuallyComponent
