import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import LazyRoutes from './main.route'
import { PrivateRoute, LoginRoute } from './private-route'

const Login = () => {
	const LoginComponent = lazy(() => import('../../modules/login/login.component'))
	return (
		<Suspense fallback="loading">
			<LoginComponent />
		</Suspense>
	)
}

const Home = () => {
	const Navbar = lazy(() => import('../../components/navbar/navbar'))
	return (
		<Suspense fallback="loading">
			<Navbar routes={LazyRoutes} />
		</Suspense>
	)
}
const Capture = () => {
	const CaptureComponent = lazy(() => import('../../modules/capture/capture.component'))
	return (
		<Suspense fallback="loading">
			<CaptureComponent />
		</Suspense>
	)
}

export default () => (
	<Switch>
		<Route path="/capture/:company" component={Capture} />
		<LoginRoute path="/login" component={Login} />
		<PrivateRoute path="/" component={Home} />
	</Switch>
)
