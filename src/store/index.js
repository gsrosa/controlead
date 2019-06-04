import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware, push } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import reducers from './ducks'

export const history = createBrowserHistory()

const prodMiddleware = [routerMiddleware(history)]

const logger = createLogger()

const middlewares = composeWithDevTools(applyMiddleware(...prodMiddleware, logger))

const rootReducers = combineReducers({
	router: connectRouter(history),
	...reducers,
})

const store = createStore(rootReducers, middlewares)

export default store

export const redirect = to => store.dispatch(push(to))
