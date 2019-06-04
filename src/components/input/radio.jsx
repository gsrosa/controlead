import React, { Fragment } from 'react'

export const Radio = ({ name, options = [], label }) => (
	<div className="w-100">
		<label htmlFor={name}>{label}</label>
		<div id={name}>
			{options.map((o, i) => (
				<Fragment>
					<label htmlFor={name + i}>{o.label}</label>
					<input type="radio" name={name} value={o.value} id={name + i} />
				</Fragment>
			))}
		</div>
	</div>
)
