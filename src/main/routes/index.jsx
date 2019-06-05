import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import LazyRoutes from './main.route'
import { PrivateRoute, LoginRoute } from './private-route'

const Login = (props) => {
	const LoginComponent = lazy(() => import('../../modules/login/login.component'))
	return (
		<Suspense fallback="loading">
			<LoginComponent {...props} />
		</Suspense>
	)
}

const Home = (props) => {
	const Navbar = lazy(() => import('../../components/navbar/navbar'))
	return (
		<Suspense fallback="loading">
			<Navbar routes={LazyRoutes} {...props} />
		</Suspense>
	)
}
const Capture = (props) => {
	const CaptureComponent = lazy(() => import('../../modules/capture/capture.component'))
	return (
		<Suspense fallback="loading">
			<CaptureComponent {...props} />
		</Suspense>
	)
}

export default () => (
	<Switch>
		<Route exact path="/capture/:company" component={Capture} />
		<LoginRoute path="/login" component={Login} />
		<PrivateRoute path="/" component={Home} />
	</Switch>
)
