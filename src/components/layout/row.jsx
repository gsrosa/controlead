import React from 'react'
import PropTypes from 'prop-types'

export const Row = ({
	children, className, align = 'start', justify = 'start', ...props
}) => {
	const alignment = `align-items-${align}`
	const content = `justify-content-${justify}`

	return (
		<div className={`row ${alignment} ${content} ${className}`} {...props}>
			{children}
		</div>
	)
}

Row.propTypes = {
	align: PropTypes.oneOf(['start', 'center', 'end']),
	justify: PropTypes.oneOf(['start', 'center', 'end', 'around', 'between']),
}
