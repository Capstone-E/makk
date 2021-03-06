import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import objectsStatus from './objectState'
import navigator from './navigator'
import portalNav from './portalNaivigator'

const reducer = combineReducers({
  navigator,
  objectsStatus,
  portalNav
})
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({collapsed: true})))
const store = createStore(reducer, middleware)

export default store
