import React, { Fragment } from 'react'
import ReactInputMask from 'react-input-mask'
import { Text } from '../input/text'

export const RenderInput = ({
	field, // { name, value, onChange, onBlur }
	form,
	onChange = () => {},
	mask = undefined,
	...props
}) => {
	const { name } = field
	const { setFieldValue } = form

	return (
		<Fragment>
			{mask === undefined ? (
				<Text
					{...field}
					{...props}
					{...form}
					onChange={(e) => {
						setFieldValue(name, e.target.value)
						onChange(e)
					}}
				/>
			) : (
				<ReactInputMask
					{...field}
					{...props}
					{...form}
					mask={mask}
					onChange={(e) => {
						setFieldValue(name, e.target.value)
						onChange(e)
					}}
				>
					{tProps => <Text {...tProps} />}
				</ReactInputMask>
			)}
		</Fragment>
	)
}
