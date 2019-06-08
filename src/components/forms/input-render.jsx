import React, { Fragment } from 'react'
import { Text } from '../input/text'

export const RenderInput = ({
	field, // { name, value, onChange, onBlur }
	form,
	...props
}) => {
	const { name } = field
	const { setFieldValue, values } = form

	return (
		<Fragment>
			<Text
				{...field}
				{...props}
				{...form}
				onChange={(e) => {
					setFieldValue(name, e.target.value)
					field.onChange(e)
				}}
				value={values[name]}
			/>
		</Fragment>
	)
}
