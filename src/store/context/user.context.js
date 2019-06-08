import React, { createContext, useState, useEffect } from 'react'

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
	const [user, setUser] = useState(userContext)
	const [company, set] = useState(undefined)
	const [token, st] = useState(tokenContext)

	const clear = () => {
		localStorage.clear()
		setLogged(false)
		setUser({})
	}

	const setCompany = (value) => {
		set(value)
		localStorage.setItem('company', value)
	}

	const setToken = (value) => {
		st(value)
		localStorage.setItem('token', value)
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
