import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creator } = createActions({
	setUser: ['user'],
	clearUser: [],
})

const initialState = {
	logged: undefined,
}

const set = (state = initialState, action) => ({ ...state, logged: action.user })
const clear = (state = initialState, action) => ({ ...state, logged: action.clear })

export default createReducer(initialState, {
	[Types.SET_USER]: set,
	[Types.CLEAR_USER]: clear,
})
