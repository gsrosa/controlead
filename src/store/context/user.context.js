import React, { createContext, useState } from 'react'

const loggedContext = localStorage.getItem('logged') !== null
const userContext = localStorage.getItem('user')
const tokenContext = localStorage.getItem('token')

export const UserContext = createContext({
	logged: false,
	user: undefined,
	company: undefined,
	setCompany: undefined,
	setLogged: () => {},
	setUser: () => {},
	clear: undefined,
	token: undefined,
	setToken: undefined,
})

export const UserProvider = ({ children }) => {
	const [logged, setLogged] = useState(loggedContext)
	const [user, stU] = useState(userContext ? JSON.parse(userContext) : null)
	const [company, set] = useState(undefined)
	const [token, st] = useState(tokenContext)

	const clear = () => {
		localStorage.clear()
		setLogged(false)
		stU({})
	}

	const setCompany = (value) => {
		set(value)
		localStorage.setItem('company', value)
	}

	const setToken = (value) => {
		st(value)
		localStorage.setItem('token', value)
	}

	const setUser = (value) => {
		stU(value)
		localStorage.setItem('user', JSON.stringify(value))
	}

	return (
		<UserContext.Provider
			value={{
				logged,
				setLogged: (value) => {
					setLogged(value)
					localStorage.setItem('logged', value)
				},
				user,
				setUser,
				clear,
				company,
				setCompany,
				token,
				setToken,
			}}
		>
			{children}
		</UserContext.Provider>
	)
}
