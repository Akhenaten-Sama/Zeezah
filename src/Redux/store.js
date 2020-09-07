import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootreducer from './rootreducer'
import thunk from 'redux-thunk'
import { persistStore} from 'redux-persist'


const middlewares = [logger, thunk] 


export const store = createStore(rootreducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)
export default {store, persistor} 