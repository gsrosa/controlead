import React, { useContext } from 'react'
import styled from 'styled-components'
import { Container } from '../layout/container'
import { redirect } from '../../store'
import { UserContext } from '../../store/context/user.context'

const Nav = styled.nav`
	width: 100%;
	background: #3d52bf;
	color: #fff;
	padding: 0px 10px;
	@media (min-width: 576px) {
		display: flex;
		align-items: center;
		line-heigth: 60px;
		height: 50px;
	}
	@media (min-width: 768px) {
		justify-content: space-between;
	}
`

const NavItem = styled.span`
	cursor: pointer;
	color: #fff;
	transition: all 0.2s;
	${props => (props.last ? 'margin-right: 0px' : '')}
	:hover {
		color: #ccc;
	}
`
const NavTitle = styled(NavItem)`
	font-size: 1.5em;
`

const NavLogo = styled.div`
	width: 100%;

	@media (min-width: 576px) {
		width: 40%;
	}
`

const NavContent = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
	margin-bottom: 10px;
	@media (min-width: 576px) {
		width: 60%;
	}
	@media (min-width: 768px) {
		width: auto;
		justify-content: flex-end;
		${NavItem} {
			margin-right: 15px;
		}
	}
`

export default ({ ...props }) => {
	const { clear, user } = useContext(UserContext)

	return (
		<>
			<Nav>
				<NavLogo>
					<NavTitle onClick={() => redirect('/')}>Control Lead</NavTitle>
				</NavLogo>
				<NavContent>
					<NavItem onClick={() => redirect('/')}>Em espera</NavItem>
					<NavItem onClick={() => redirect('/users/active')}>Ativos</NavItem>
					{user.admin && (
						<NavItem onClick={() => redirect('/manual')}>Inserir manualmente</NavItem>
					)}
					<NavItem
						last
						onClick={() => {
							clear()
							redirect('/login')
						}}
					>
						Sair
					</NavItem>
				</NavContent>
			</Nav>
			<Container>
				<props.routes />
			</Container>
		</>
	)
}
