import React, { lazy, Suspense } from 'react'
import { Switch } from 'react-router-dom'
import { PrivateRoute } from './private-route'

const Home = (props) => {
	const HomeComponent = lazy(() => import('../../modules/home/home.component'))
	return (
		<Suspense fallback="loading">
			<HomeComponent {...props} />
		</Suspense>
	)
}

const ActiveUsers = (props) => {
	const ActiveUsersComponent = lazy(() => import('../../modules/user/active-user.component'))
	return (
		<Suspense fallback="loading">
			<ActiveUsersComponent {...props} />
		</Suspense>
	)
}

const routes = () => (
	<Switch>
		<PrivateRoute path="/users/active" component={ActiveUsers} />
		<PrivateRoute path="/" component={Home} />
	</Switch>
)

export default routes
