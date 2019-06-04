import React, { Fragment } from 'react'
import { Text } from '../input/text'

export const RenderInput = ({
	field, // { name, value, onChange, onBlur }
	form,
	...props
}) => (
	<Fragment>
		<Text {...field} {...props} {...form} />
	</Fragment>
)
