import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'

import 'bootstrap/dist/css/bootstrap.min.css'

import Main from './main/main.component'

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<ConnectedRouter history={history}>
				<Main />
			</ConnectedRouter>
		</BrowserRouter>
	</Provider>
)

export default App
