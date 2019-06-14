import React, { Fragment } from 'react'
import { Select } from '../input/select'

export const RenderSelect = ({
	field, // { name, value, onChange, onBlur }
	form,
	onChange = () => {},
	...props
}) => {
	const { name } = field
	const { setFieldValue } = form

	return (
		<Fragment>
			<Select
				{...field}
				{...props}
				{...form}
				onChange={(value) => {
					setFieldValue(name, value)
					onChange(value)
				}}
			/>
		</Fragment>
	)
}
