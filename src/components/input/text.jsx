import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
	font-size: 10pt;
	color: #666666;
	position: absolute;
	transition: all 0.2s;
	font-family: Nunito;
`

const TextInput = styled.input`
	width: 100%;
	border: 0px solid #fff;
	border-bottom-width: 1px;
	border-color: #ccc;
	font-family: Nunito;
	transition: all 0.2s;
`

const Form = styled.div`
	width: 100%;
	text-align: left;
	float: left;
	display: flex;
	flex-colum: reverse;
	margin-top: 30px;
	${TextInput} {
		::placeholder {
			color: transparent;
		}
		transition: all 1s;
		&:hover {
			border-color: #3d52bf;
		}
		&:focus {
			outline: none;
			border-color: #3d52bf;
			::placeholder {
				color: #ccc;
			}
		}
		&:invalid {
			border-color: red;
		}
		&:invalid + ${Label} {
			color: red;
		}
		&:valid + ${Label} {
			color: #ccc;
		}
		&:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
			color: #ccc;
			margin-top: -20px;
			font-size: 9pt;
		}
	}
`

export const Text = ({
	name, type, label, placeholder = ' ', ...props
}) => (
	<Form>
		<TextInput type={type} name={name} id={name} placeholder={placeholder} {...props} />
		<Label htmlFor={name}>{label}</Label>
	</Form>
)
