import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {storeReducer} from './store/store.reducer'
import cartReducer from './cart/cart.reducers'



const persistConfig  = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    store:storeReducer,
    cart: cartReducer
   })


export default persistReducer(persistConfig, rootReducer)