import React, { createContext, useState, useEffect } from 'react'

const loggedContext = localStorage.getItem('logged') !== null
const userContext = localStorage.getItem('user')

export const UserContext = createContext({
	logged: false,
	user: undefined,
	setLogged: () => {},
	setUser: () => {},
})

export const UserProvider = ({ children }) => {
	const [logged, setLogged] = useState(loggedContext)
	const [user, setUser] = useState(userContext)

	useEffect(() => {
		console.log(localStorage.getItem('logged'))
	}, [])

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
			}}
		>
			{children}
		</UserContext.Provider>
	)
}
