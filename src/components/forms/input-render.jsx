import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Text } from '../input/text'

const ErrorMessage = styled.span`
	font-size: 8pt;
	color: red;
`

export const RenderInput = ({
	field, // { name, value, onChange, onBlur }
	form,
	...props
}) => (
	<Fragment>
		<Text {...field} {...props} {...form} />
	</Fragment>
)
