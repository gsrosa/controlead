import React from 'react'

export const Checkbox = ({ name, options = [], label }) => (
	<div className="w-100">
		{options.map((o, i) => (
			<div>
				<label htmlFor={name + i}>{o.label}</label>
				<input type="checkbox" value={o.value} id={name + i} />
			</div>
		))}
	</div>
)
