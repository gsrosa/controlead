import React from 'react'
import PropTypes from 'prop-types'

export const Column = ({
	children,
	className,
	xs = 12,
	sm = 12,
	md = 12,
	lg = 12,
	xl = 12,
	self = 'start',
	align = 'start',
	justify = 'start',
	flex,
	order = undefined,
	style = {},
	padding = undefined,
	...props
}) => {
	const styles = style
	styles.padding = padding !== undefined ? padding : undefined

	const alignment = `align-self-${self}`
	const ordering = order !== undefined ? `order-${order}` : ''
	const flexDisplay = flex ? 'd-flex' : ''
	const alignmentItems = `align-items-${align}`
	const content = `justify-content-${justify}`

	return (
		<div
			className={`col-${xs} col-sm-${sm} col-md-${md} col-lg-${lg} col-xl-${xl} ${flexDisplay} ${alignment} ${content} ${alignmentItems} ${ordering} ${className}`}
			style={styles}
			{...props}
		>
			{children}
		</div>
	)
}

const columProperty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto', '']
const columPropertyString = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

Column.propTypes = {
	xs: PropTypes.oneOf(columProperty.concat(columPropertyString)),
	sm: PropTypes.oneOf(columProperty.concat(columPropertyString)),
	md: PropTypes.oneOf(columProperty.concat(columPropertyString)),
	lg: PropTypes.oneOf(columProperty.concat(columPropertyString)),
	xl: PropTypes.oneOf(columProperty.concat(columPropertyString)),
	self: PropTypes.oneOf(['start', 'center', 'end']),
	flex: PropTypes.bool,
	align: PropTypes.oneOf(['start', 'center', 'end']),
	justify: PropTypes.oneOf(['start', 'center', 'end', 'around', 'between']),
}
