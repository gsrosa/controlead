import React from 'react'
import { BrowserRouter, Router } from 'react-router-dom'
import { history } from './store'

import 'bootstrap/dist/css/bootstrap.min.css'

import Main from './main/main.component'

const App = () => (
	<BrowserRouter>
		<Router history={history}>
			<Main />
		</Router>
	</BrowserRouter>
)

export default App
