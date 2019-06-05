import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

export const redirect = to => history.push(to)
