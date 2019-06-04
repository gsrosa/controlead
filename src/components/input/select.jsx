import React from 'react'

export const Select = ({
	name, label, placeholder, options,
}) => (
	<div className="w-100">
		<label htmlFor={name}>{label}</label>
		<select name={name} placeholder={placeholder} id={name}>
			{options.map(o => (
				<option>{o.label}</option>
			))}
		</select>
	</div>
)
