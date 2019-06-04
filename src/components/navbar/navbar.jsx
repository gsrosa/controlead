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
			<h3>Controlead</h3>
			<div className="d-flex flew-wrap w-25 justify-content-between">
				<span>Fila de espera</span>
				<span>Usuários ativos</span>
				<span>Inserir manualmente</span>
			</div>
		</Nav>
		<Container>
			<props.routes />
		</Container>
	</>
)
