import React, { useContext } from 'react'
import styled from 'styled-components'
import { Container } from '../layout/container'
import { redirect } from '../../store'
import { UserContext } from '../../store/context/user.context'

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

const NavItem = styled.span`
	cursor: pointer;
	color: #fff;
	margin-right: 15px;
	transition: all 0.2s;
	${props => (props.last ? 'margin-right: 0px' : '')}
	:hover {
		color: #ccc;
	}
`

export default ({ ...props }) => {
	const { clear } = useContext(UserContext)

	return (
		<>
			<Nav>
				<h3>Controlead</h3>
				<div className="d-flex flew-wrap justify-content-between">
					<NavItem>Fila de espera</NavItem>
					<NavItem>Usuários ativos</NavItem>
					<NavItem>Inserir manualmente</NavItem>
					<NavItem
						last
						onClick={() => {
							clear()
							redirect('/login')
						}}
					>
						Sair
					</NavItem>
				</div>
			</Nav>
			<Container>
				<props.routes />
			</Container>
		</>
	)
}
