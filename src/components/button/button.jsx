import React from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'

const ButtonStyled = styled.button`
	${(props) => {
		switch (props.theme) {
		case 'danger':
			props.primary = 'red'
			props.secondary = 'red'
			break
		default:
			props.primary = '#3d52bf'
			props.secondary = '#304199'
		}
	}}
	transition: all 0.7s;
	border: 1px solid transparent;
	padding: 7px 20px;
	background: ${props => props.primary};
	color: #fff;
	border-radius: 5px;
	font-size: 11pt;
	font-family: Nunito;
	&:hover {
		background: ${props => props.secondary};
	}
	&:focus {
		outline: none;
	}

	${props => props.sm
		&& css`
			padding: 3px 3px;
		`}
`

export const Button = ({
	className, theme, large, small, block, children, ...props
}) => (
	<ButtonStyled className={`${className}`} {...props} theme={theme}>
		{children}
	</ButtonStyled>
)

Button.propTypes = {
	className: PropTypes.string,
	type: PropTypes.string,
	theme: PropTypes.oneOf(['primary', 'success', 'warning', 'info', 'danger']),
	large: PropTypes.bool,
	small: PropTypes.bool,
	block: PropTypes.bool,
	outline: PropTypes.bool,
}
