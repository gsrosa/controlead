import React from 'react'
import Routes from './routes'
import { UserProvider } from '../store/context/user.context'

const MainComponent = () => (
	<UserProvider>
		<Routes />
	</UserProvider>
)

export default MainComponent
