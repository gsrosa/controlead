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

const routes = () => (
	<Switch>
		<PrivateRoute path="/" component={Home} />
	</Switch>
)

export default routes
