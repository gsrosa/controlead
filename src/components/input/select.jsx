import React from 'react'
import SelectReact from 'react-select'
import AsyncSelect from 'react-select/async'
import styled from 'styled-components'
import { Label } from './text'

const L = styled(Label)`
	position: relative;
`

export const Select = ({
	name,
	label,
	placeholder,
	options = [],
	load = () => {},
	async = false,
	...props
}) => (
	<div className="w-100">
		<L htmlFor={name}>{label}</L>
		{!async ? (
			<SelectReact placeholder={placeholder} options={options} id={name} {...props} />
		) : (
			<AsyncSelect
				placeholder={placeholder}
				loadOptions={load}
				options={options}
				id={name}
				{...props}
			/>
		)}
	</div>
)
