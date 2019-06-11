import { createHashHistory } from 'history'

export const history = createHashHistory()

export const redirect = to => history.push(to)
