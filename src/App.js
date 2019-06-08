import React from 'react'
import { BrowserRouter, Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { history } from './store'

import 'bootstrap/dist/css/bootstrap.min.css'

import Main from './main/main.component'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import 'react-toastify/dist/ReactToastify.css'

const App = () => (
	<BrowserRouter>
		<Router history={history}>
			<Main />
			<ToastContainer />
		</Router>
	</BrowserRouter>
)

export default App
