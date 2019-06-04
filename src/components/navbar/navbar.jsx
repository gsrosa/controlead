import React from 'react'
import styled from 'styled-components'
import { Container } from '../layout/container'

const Nav = styled.nav`
	width: 100%;
	height: 60px;
	background: #3d52bf;
	display: flex;
	line-height: 60px;
	color: #fff;
	justify-content: space-between;
	padding: 0px 30px;
	align-items: center;
`

export default ({ ...props }) => (
	<>
		<Nav>
			<h3>Logo</h3>
			<h3>Logo</h3>
		</Nav>
		<Container>
			<props.routes />
		</Container>
	</>
)
