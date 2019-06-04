import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { UserContext } from '../../store/context/user.context'

export const PrivateRoute = ({ path, component, ...props }) => {
	const { logged } = useContext(UserContext)

	return logged ? (
		<Route path={path} component={component} {...props} />
	) : (
		<Redirect to={{ pathname: '/login' }} />
	)
}

export const LoginRoute = ({ path, component, ...props }) => {
	const { logged } = useContext(UserContext)

	return !logged ? (
		<Route path={path} component={component} {...props} />
	) : (
		<Redirect to={{ pathname: '/' }} />
	)
}
